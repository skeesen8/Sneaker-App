import React, {useState, useEffect} from 'react';
import { Link, useParams} from 'react-router-dom'

import ShoeByIdCard from './ShoeByIdCard';

function ShoeById(){
    let {id}=useParams()
    const [shoeById,setShoeById]=useState([])

useEffect(()=>{
    console.log(id)
    fetch(`/listings/${id}`)
    .then((resp)=>resp.json())
    .then((oneShoeData)=>setShoeById(oneShoeData))
    

},[])

console.log(shoeById.image)

const renderShoe = (
    <ShoeByIdCard id={id} price={shoeById.price} image={shoeById.image} brand={ShoeById.brand} setShoeById={setShoeById}/>
)


    return(
        <div>
            {renderShoe}
        </div>
    )
}
export default ShoeById