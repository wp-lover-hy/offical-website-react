import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Layout } from '../components/layout/Layout';
import { Home } from '../pages/Home/Home';
import { Contact } from '../pages/Contact/Contact';


const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: 'contact',
        element: <Contact />,
      }
    ],
  },
]);

export const AppRouter = () => {
  return <RouterProvider router={router} />;
};
