import {useEffect,useState} from "react"
import { useParams} from 'react-router-dom'

function BidCard({bid_amount,users_id,created_at,listing_id,setBidSummary,id,image,shoeName,price}){

    console.log(image)
    const bidNumber=parseInt(bid_amount)
    const priceNubmer=parseInt(price)
    const shoeTotal=(bidNumber+priceNubmer)

    function handleDeleteRequest(){
        console.log(id)
        fetch(`/bids/${id}`, {
            method: 'DELETE',
            headers: {
              'Content-Type': 'application/json',
            },
          })
           .then((response) => {
        if (response.ok) {
          setBidSummary((prevBids) => prevBids.filter((bidSummary) => bidSummary.id !== id));
        } else {
          console.error('Failed to delete Bid');
        }
      })
    }

    return(
        <div>
            <h3>the most recent bid was ${bid_amount}</h3>
            <h3>total shoe cost now =${shoeTotal} </h3>
            <h3>This bid was added at {created_at}</h3>
            <h3>{shoeName}</h3>
            <img src={image}/>
            <button onClick={handleDeleteRequest}>delete</button>
    
    
        </div>
    )
    
    
}

export default BidCard