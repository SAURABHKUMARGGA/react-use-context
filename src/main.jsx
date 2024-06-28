import React from 'react'
import ReactDOM from 'react-dom/client'
import router from './route'
import './index.css'
import { RouterProvider } from 'react-router-dom'
// import { DataProvider } from './Data'
import { Provider } from 'react-redux'
import store from './store'
ReactDOM.createRoot(document.getElementById('root')).render(
 
  <React.StrictMode>
        {/* <DataProvider> */}
        <Provider store={store}>
        <RouterProvider router={router} ></RouterProvider>
        </Provider>
        {/* </DataProvider> */}
    {/* <App /> */}
  </React.StrictMode>
)
