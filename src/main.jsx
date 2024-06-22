import React from 'react'
import ReactDOM from 'react-dom/client'
import router from './route'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import { DataProvider } from './Data'



ReactDOM.createRoot(document.getElementById('root')).render(

  <React.StrictMode>
        {/* <DataProvider> */}
        <RouterProvider router={router} ></RouterProvider>
        {/* </DataProvider> */}
    {/* <App /> */}
  </React.StrictMode>
)
