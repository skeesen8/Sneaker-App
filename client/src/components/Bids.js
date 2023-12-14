import { useEffect,useState } from "react"
import { useParams} from 'react-router-dom'

import BidCard from "./BidCard"

function Bids(){
    const [bidSummary,setBidSummary]=useState([])
    console.log(bidSummary)
    
    

    useEffect(()=>{

        fetch('/bids')
        .then ((resp)=>resp.json())
        .then((bidData)=>(setBidSummary(bidData))) 

    },[])
 
    const renderBids=bidSummary ? bidSummary.map((bidObj)=>{
        return(
        
                <BidCard
                key={bidObj.id}
                id={bidObj.id}
                bid_amount={bidObj.bid_amount}
                image={bidObj.listing.image}
                shoeName={bidObj.listing.shoeName}
                price={bidObj.listing.price}
                listing_id={bidObj.listing_id}
                created_at={bidObj.created_at}
                users_id={bidObj.users_id} 
                setBidSummary={setBidSummary}
                /> 
            )
    }) : []
 


    return(
        (renderBids)
    )
}

export default Bids