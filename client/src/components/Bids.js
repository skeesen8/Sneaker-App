import { useEffect,useState } from "react"
import { useParams} from 'react-router-dom'

import BidCard from "./BidCard"

function Bids(){
    const [bidSummary,setBidSummary]=useState([])
    let {id}= useParams()

    const handleDelete=(bidId)=>{
        console.log(id)
    fetch(`/bids/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => {
        if (response.ok) {
          setBidSummary((prevBids) => prevBids.filter((bidSummary) => bidSummary.id !== bidId));
        } else {
          console.error('Failed to delete Bid');
        }
      })
    }

    useEffect(()=>{

        fetch('/bids')
        .then ((resp)=>resp.json())
        .then((bidData)=>(setBidSummary(bidData))) 

    },[])
 
    const renderBids=bidSummary ? bidSummary.map((bidObj)=>{
        return(
        
                <BidCard
                key={bidObj.id}
                bid_amount={bidObj.bid_amount}
                listing_id={bidObj.listing_id}
                created_at={bidObj.created_at}
                users_id={bidObj.users_id}

                handleDelete={handleDelete} 
                setBidSummary={setBidSummary}
                />
    
            )



    }) : []
 


    return(
        (renderBids)
    )
}

export default Bids