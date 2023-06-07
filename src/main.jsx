// React imports
import React from 'react'
import ReactDOM from 'react-dom/client'
//components import
import Root from "./routes/root";
import Product from "@/pages/Product";
// routes import
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root/>,
    
    children: [
      {
        path: "products/:id",
        element: <Product />,
      },
    ],
  },
]);
// scss imports
import "bootstrap/dist/css/bootstrap.min.css";
import "@scss/main.scss";


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
