import ShoeCard from './ShoeCard';

import React, {useState, useEffect} from 'react';

function ShoesContainer(){
    const [listings,setListings]=useState([])

    

    useEffect(()=>{
        fetch('/listings')
        .then ((resp)=>resp.json())
        .then((listingData)=>(setListings(listingData)))
        
    },[])
    

    
    
    const renderListings = listings.map((lObj)=>{
        return(
            <ShoeCard
            key={lObj.id}
            id={lObj.id}
            brand={lObj.brand}
            description={lObj.description}
            favorite={lObj.favorite}
            image={lObj.image}
            price={lObj.price}
            shoeName={lObj.shoeName}
            user_id={lObj.user_id} 
            />
        )
    })

    return(
        <ul>
           {renderListings}
        </ul> 
        

    )
}

export default ShoesContainer