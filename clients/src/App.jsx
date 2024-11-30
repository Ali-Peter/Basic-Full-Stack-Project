import React from 'react';
import {RouterProvider} from 'react-router-dom';
import BrowserRouter from './router'

const App = () => {
  return (
    <>
        <RouterProvider router={BrowserRouter}/>
    </>
  )
}

export default App