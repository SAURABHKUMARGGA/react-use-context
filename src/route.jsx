import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Home from "./pages/Home";
import About from "./pages/About";
import Gallery from "./pages/Gallery";
import Error404 from "./pages/Error404";
import { DataProvider } from "./Data";
import Form from "./pages/Form";

const router = createBrowserRouter([{
    path:"/",
    element:<App/>,
    errorElement:<Error404/>,
    children:[
      {
        index:true,
        element:<Home/>
      },
      {
        path:"/about",
        element: <About/>
      },
      {
        path:"/gallery",
        element:<Gallery/>
      },
      {
        path:"/form",
        element:<Form/>
      }
    ]
  }])

  export default router;