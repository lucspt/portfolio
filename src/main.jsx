import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { routes } from './routes.jsx';

const router = createBrowserRouter(routes, { basename: import.meta.env.DEV ? '/' : '/portfolio/' });
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
