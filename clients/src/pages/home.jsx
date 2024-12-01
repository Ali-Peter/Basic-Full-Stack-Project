import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Home = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      const response = await fetch("https://basic-full-stack-project-backend.onrender.com/api/users");
      const data = await response.json();
      setUsers(data);
    };

    fetchUsers();
  }, []);

  const handleDelete = async (id) => {
    const confirmDelete = window.confirm("Are you sure you want to delete this user?");
    if (confirmDelete) {
      try {
        const response = await fetch(`https://basic-full-stack-project-backend.onrender.com/api/users/${id}`, {
          method: "DELETE",
        });
        if (response.ok) {
          const updatedUsers = await (await fetch("https://basic-full-stack-project-backend.onrender.com/api/users")).json();
          setUsers(updatedUsers);
        } else {
          const errorData = await response.json();
          console.log("Error:", errorData);
        }
      } catch (error) {
        console.log("An error occurred:", error);
      }
    }
  };

  return (
    <main className="bg-blue-900 text-white min-h-screen p-4 flex flex-col items-center">
      <h1 className="text-2xl font-semibold text-center mb-6">User Submissions</h1>
      <div className="overflow-x-auto w-full bg-white text-black p-6 rounded-md shadow-md">
        <table className="min-w-full table-auto">
          <thead>
            <tr>
              <th className="px-4 py-2 text-left">Name</th>
              <th className="px-4 py-2 text-left">Email</th>
              <th className="px-4 py-2 text-left">Date of Birth</th>
              <th className="px-4 py-2 text-left">Department</th>
              <th className="px-4 py-2 text-left">Comments</th>
              <th className="px-4 py-2 text-left">Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user._id} className="border-t">
                <td className="px-4 py-2 text-sm">{user.name}</td>
                <td className="px-4 py-2 text-sm">{user.email}</td>
                <td className="px-4 py-2 text-sm">{user.date}</td>
                <td className="px-4 py-2 text-sm">{user.department}</td>
                <td className="px-4 py-2 text-sm">{user.comments}</td>
                <td className="px-4 py-2 text-sm">
                  <Link to={`/edit/${user._id}`} className="mr-2 text-blue-500">
                    Edit
                  </Link>
                  <button
                    onClick={() => handleDelete(user._id)}
                    className="text-red-500"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </main>
  );
};

export default Home;
