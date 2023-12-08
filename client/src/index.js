import React from "react";
import App from "./components/App";
import "./index.css";
import { createRoot } from "react-dom/client";
import {createBrowserRouter,RouterProvider} from "react-router-dom"
import ReactDOM from 'react-dom/client';
import Navbar from "./components/Navbar";


const routes=[
    {
        path:"/",
        element:<><Navbar /></>
    },{
        path:"/shoes",
        element:<><Navbar /></>
    },{
        path:"/bids",
        element:<><Navbar/></>
        
    }
]
const router=createBrowserRouter(routes)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <RouterProvider router={router}/>
    );


    // const container = document.getElementById("root");
    // const root = createRoot(container);
    // root.render(<App />);