import React from "react";
import App from "./components/App";
import "./index.css";
import { createRoot } from "react-dom/client";
import {createBrowserRouter,RouterProvider} from "react-router-dom"
import ReactDOM from 'react-dom/client';
import Navbar from "./components/Navbar";
import ShoesContainer from "./components/ShoesContainer";
import AddShoe from "./components/AddShoe"
import ShoeById from "./components/ShoeById";
import Bids from "./components/Bids";



const routes=[
    {
        path:"/",
        element:<><App/></>
    },{
        // path:"/",
        // element:<><Navbar/><AddShoe/></>

    }, {
        path:"/shoes",
        element:<><Navbar /><ShoesContainer/></>
    },{
        path:"/bids",
        element:<><Navbar/><Bids/></>
        
    },{
        path:"/listings/:id",
        element:<><Navbar /><ShoeById/></>

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