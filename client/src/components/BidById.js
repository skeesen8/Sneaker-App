
import React, {useState, useEffect} from 'react';
import {useParams} from 'react-router-dom'

function BidById(){
    const [bidById,setBidById]=useState([])
    let {id}=useParams()

    useEffect(()=>{
        fetch (`/bids/7`)
        .then((resp)=>resp.json())
        .then((idBidData)=>setBidById(idBidData))
    },[])
    console.log(bidById)

    return(
        <div>
            show some sort of review stuff
        </div>
    )

    
}

export default BidById

