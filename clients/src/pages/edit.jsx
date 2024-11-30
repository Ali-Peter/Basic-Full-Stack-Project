import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

const EditUser = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    date: "",
    department: "",
    comments: "",
  });

  const { id } = useParams();
  const history = useNavigate();

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await fetch(`http://localhost:3000/api/users/${id}`);
        if (response.ok) {
          const data = await response.json();
          setFormData(data);
        }
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    fetchUserData();
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.date || !formData.department || !formData.comments) {
      alert("Please fill in all fields.");
      return;
    }

    if (!/\S+@\S+\.\S+/.test(formData.email)) {
      alert("Please enter a valid email address.");
      return;
    }

    try {
      const response = await fetch(`http://localhost:3000/api/users/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert("User updated successfully!");
        history("/home");
      } else {
        alert("Failed to update user.");
      }
    } catch (error) {
      console.error("An error occurred:", error);
    }
  };

  return (
    <main className="bg-blue-900 text-white min-h-screen flex items-center justify-center p-4">
      <form onSubmit={handleSubmit} className="w-full max-w-lg space-y-6 bg-white text-black p-6 rounded-md shadow-md">
        <div className="space-y-4">
          <div>
            <label className="block font-medium mb-1">Name</label>
            <input
              value={formData.name}
              onChange={handleChange}
              name="name"
              type="text"
              placeholder="First Name..."
              className="w-full p-2 border border-gray-300 rounded-md"
            />
          </div>
          <div>
            <label className="block font-medium mb-1">Email</label>
            <input
              value={formData.email}
              onChange={handleChange}
              name="email"
              type="email"
              placeholder="Email..."
              className="w-full p-2 border border-gray-300 rounded-md"
            />
          </div>
          <div>
            <label className="block font-medium mb-1">Date of Birth</label>
            <input
              value={formData.date}
              onChange={handleChange}
              name="date"
              type="date"
              className="w-full p-2 border border-gray-300 rounded-md"
            />
          </div>
          <div>
            <label className="block font-medium mb-1">Department</label>
            <select
              value={formData.department}
              onChange={handleChange}
              name="department"
              className="w-full p-2 border border-gray-300 rounded-md"
            >
              <option value="">Select Department</option>
              <option value="Finance">Finance</option>
              <option value="Communication">Communication</option>
            </select>
          </div>
          <div>
            <label className="block font-medium mb-1">Comments</label>
            <textarea
              value={formData.comments}
              onChange={handleChange}
              name="comments"
              placeholder="Add any comments..."
              className="w-full p-2 border border-gray-300 rounded-md"
            />
          </div>
        </div>
        <button className="w-full bg-blue-600 text-white p-2 rounded-md hover:bg-blue-700 transition" type="submit">
          Update
        </button>
      </form>
    </main>
  );
};

export default EditUser;
