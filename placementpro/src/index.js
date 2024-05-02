import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import './index.css';
import Layout from './components/Layout';
import ErrorPage from './pages/ErrorPage';
import HomePage from './pages/HomePage';
import Dashboard from './pages/Dashboard';




const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {index: true, element:<HomePage />},
      {path:'/dashboard', element:<Dashboard/>},
    ]
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);