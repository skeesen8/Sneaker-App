import React from "react";
import App from "./components/App";
import "./index.css";
import { createRoot } from "react-dom/client";
import {createBrowserRouter,RouterProvider} from "react-router-dom"
import { ChakraProvider } from "@chakra-ui/react";
import ReactDOM from 'react-dom/client';
import Navbar from "./components/Navbar";
import ShoesContainer from "./components/ShoesContainer";
import AddShoe from "./components/AddShoe"
import ShoeById from "./components/ShoeById";
import Bids from "./components/Bids";
import ShoeCard from "./components/ShoeCard";
import Home from "./components/Home";



const routes=[
    
    {
        path:"/",
        element:<App/>,
        children:[
            {
                index:true,
                element:<><AddShoe/><Home/> </>
        
            }, {
                path:"/shoes",
                element:<ShoesContainer/>,
                children:[
                    {
                        path:"/shoes",
                        element:<ShoeCard/>
                    }
                ]
            },{
                path:"/bids",
                element:<Bids/>
                
            },{
                path:"/listings/:id",
                element:<ShoeById/>
        
            }
            
        ]
    }
]
const router=createBrowserRouter(routes)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <RouterProvider router={router}/>
    );

