import React, {useState, useEffect} from 'react';
import {useParams} from 'react-router-dom'

import ShoeByIdCard from './ShoeByIdCard';
import BidById from './BidById';

function ShoeById(){
    
    let {id}=useParams()
    const [shoeById,setShoeById]=useState([])
    

useEffect(()=>{

    fetch(`/listings/${id}`)
    .then((resp)=>resp.json())
    .then((oneShoeData)=>setShoeById(oneShoeData))
},[])

console.log()

const renderShoe = (
    <ShoeByIdCard id={id} shoeName={shoeById.shoeName} description={shoeById.description} 
    price={shoeById.price} image={shoeById.image} brand={ShoeById.brand} setShoeById={setShoeById} bids={shoeById.bids}/>
)



    return(
        <div>
            {renderShoe}
        </div>
    )
}
export default ShoeById