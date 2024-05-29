import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/mainLayout";
import Home from "../pages/home";
import Login from "../pages/login";
import Register from "../pages/register";
import DeshboadLayout from "../layout/deshboadlayout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/product",
        element: <p>this is product</p>,
      },
      {
        path: "/contact",
        element: <p> this is contact page</p>,
      },
      {
        path: "/about",
        element: <p>this is about page </p>,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
    ],
  },
  {
    path: "deshboad",
    element: <DeshboadLayout/>,
    children:[
      {
      path:"profile",
      element:<h1>profile</h1>
    },
      {
      path:"products",
      element:<h1>th product</h1>
    },
      {
      path:"add-product",
      element:<h1> add product</h1>
    },
      {
      path:"log-out",
      element:<h1>logout</h1>
    },
      
    ]
    
  },
]);
export default router;
