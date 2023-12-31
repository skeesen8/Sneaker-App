
import React, {useState,} from 'react';
import { useNavigate } from "react-router-dom";
import {FormControl, FormLabel,Input,Button, ChakraProvider,Heading} from '@chakra-ui/react'

import Home from './Home';

function AddShoe(){
    const navigate = useNavigate();
    // const [newShoe,setNewShoe] =useState('')
    const [image,newImage]=useState('')
    const [price,NewPrice]=useState('')
    const [shoeName,newShoeName]=useState('')
    const [brand,setBrand]=useState('')
    const [description,setDescription]=useState('')
    const [favorite,setFavorite]=useState(false)

    function handleNewShoe(e){
        newShoeName(e.target.value)
    }
    function handleImage(e){
        newImage(e.target.value)
    }
    function handlePrice(e){
        NewPrice(e.target.value)
    }
    function handleBrand(e){
        setBrand(e.target.value)
    }
    function handleDescription(e){
        setDescription(e.target.value)
    }
    

    function handleSubmit(e){
        e.preventDefault();
        const newShoe={
            shoeName:shoeName,
            price:price,
            image:image,
            description:description,
            brand:brand,
            favorite:favorite,
        }
        fetch('/listings', {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(newShoe),
        })
        .then((response) => response.json())
        .then((responseText) => {
        console.log(responseText)
        navigate('/shoes')
    
    });
        // ,console.log("finsihed")
            // .then(response => response.json())
            // .then((shoeData)=> setNewShoe(shoeData))
    }      

    return(

        <FormControl>
            <Heading as='h1' size='4xl' noOfLines={1}>
          Enter your shoe information below!
          </Heading>
        <form onSubmit={handleSubmit}> 

        <FormLabel as="u" color='teal' >Shoe Name </FormLabel>
        <Input label='shoenName' id='shoeName' placeholder='Enter Shoe Name Here' value={shoeName} onChange ={handleNewShoe}/>

        <FormLabel as="u" color='teal'>Image</FormLabel>
        <Input label='image' id='image' placeholder='Enter Picture URL' value ={image} onChange ={handleImage}/>

        <FormLabel as="u" color='teal'>Price</FormLabel>
        <Input label='price' id='price' placeholder='Enter Initial Price' value ={price} onChange ={handlePrice}/>

        <FormLabel as="u" color='teal'>Description</FormLabel>
        <Input label='description' id='description' placeholder='Enter Shoe Description' value ={description} onChange ={handleDescription}/>

        <FormLabel as="u" color='teal'>Shoe Brand</FormLabel>
        <Input label='brand' id='brand' placeholder='Enter Shoe Brand' value ={brand} onChange ={handleBrand}/>
       

        <Button colorScheme='teal' size='md' type = 'submit'>Submit</Button>

        </form>

        </FormControl>
        
    )
}

export default AddShoe