import ShoeCard from './ShoeCard';

import React, {useState, useEffect} from 'react';
import { useOutletContext,Outlet } from 'react-router-dom';
import { SimpleGrid, ChakraProvider} from '@chakra-ui/react'

function ShoesContainer(){
    const [listings,setListings]=useState([])
    const user = useOutletContext();
    console.log(user.id)

    useEffect(()=>{
        fetch('/listings')
        .then ((resp)=>resp.json())
        .then((listingData)=>(setListings(listingData)))
        
    },[])
    
    const renderListings = listings.map((lObj)=>{
       
        return(
            
            <ShoeCard
            setListings={setListings}
            key={lObj.id}
            id={lObj.id}
            brand={lObj.brand}
            description={lObj.description}
            favorite={lObj.favorite}
            image={lObj.image}
            price={lObj.price}
            shoeName={lObj.shoeName}
            userId={lObj.user_id}
             
            />
        )
       
    })

    return(
        <ChakraProvider>
            <SimpleGrid columns={3} spacing={5}>
             {renderListings}     
            </SimpleGrid>
            <Outlet context={user}/>

        </ChakraProvider>


        

    )
}

export default ShoesContainer