import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Storages from '../screens/Storages'
import Storage from '../screens/Storage'
import Add from '../screens/Add'
import Report from '../screens/Report'
import Layout from './Layout'
import NotFound from '../screens/NotFound'

const Router: React.FC = (props) => {
  const router = createBrowserRouter([
    {
      element: <Layout />,
      children: [
        {
          path: '/',
          element: <Storages />,
        },
        {
          path: 'storage/:id',
          element: <Storage />
        },
        {
          path: 'add',
          element: <Add />
        },
        {
          path: 'report',
          element: <Report />
        },
        {
          path: '*',
          element: <NotFound />,
        }
      ],
    }
  ])

  return <RouterProvider router={router} />
};

export default Router;