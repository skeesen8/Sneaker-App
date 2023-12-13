import {useEffect,useState} from "react"
import { useParams} from 'react-router-dom'

function BidCard({bid_amount,handleDelete,users_id,created_at,listing_id}){
 

    return(
        <div>
            <h3>{bid_amount}</h3>
            <h3>{created_at}</h3>
            <h3>{listing_id}</h3>
            <button onClick={handleDelete}>delete</button>


        </div>
    )
}

export default BidCard