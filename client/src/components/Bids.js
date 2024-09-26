import { useEffect,useState } from "react"
import { useParams} from 'react-router-dom'
import { ChakraProvider,Button,VStack,Box,StackDivider,Text,Heading,desc } from "@chakra-ui/react"

import BidCard from "./BidCard"

function Bids(){
    const [bidSummary,setBidSummary]=useState([])
    
    

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
                name={bidObj.user.name}
                price={bidObj.listing.price}
                listing_id={bidObj.listing_id}
                created_at={bidObj.created_at}
                users_id={bidObj.users_id} 
                setBidSummary={setBidSummary}
                /> 
            )
    }) : []
 


    return(
        <ChakraProvider>


            <VStack
            divider={<StackDivider borderColor='teal.500' borderWidth='3px' />}
            spacing={4}
            align='stretch'
            >
            {renderBids}
            </VStack>

            {/* {renderBids} */}

        </ChakraProvider>
    )
}

export default Bids