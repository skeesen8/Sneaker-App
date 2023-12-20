import { ChakraProvider,Button,VStack,Box,StackDivider,Heading,Text } from "@chakra-ui/react"
import {useEffect,useState} from "react"
import { Navigate, useParams,useNavigate} from 'react-router-dom'

function BidCard({bid_amount,users_id,created_at,listing_id,setBidSummary,id,image,shoeName,price,name}){

    const navigate = useNavigate();
    const bidNumber=parseInt(bid_amount)
    const priceNubmer=parseInt(price)
    const shoeTotal=(bidNumber+priceNubmer)

    function handleNavigate(){
      navigate(`/listings/${listing_id}`)
    }

    function handleDeleteRequest(){
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
      <ChakraProvider>

                <Box p={5} shadow='md' borderWidth='10px' borderColor="teal">
                <Heading fontSize='xl'>
                  <div className="bidcontent">
                      <h3>{name} placed the most recent bid on this shoe. The amount was ${bid_amount}</h3>
                      <h3>total shoe cost now =${shoeTotal} </h3>
                      <h3>This bid was added at {created_at}</h3>
                      <h3>{shoeName}</h3>
                      <img className="bidimage" src={image} onClick={handleNavigate}/>
                      <Button onClick={handleDeleteRequest}>delete</Button>

                   </div>      

                </Heading>
                <Text mt={4}></Text>
                </Box>
        
    
    



       

      </ChakraProvider>
    )
    
    
}

export default BidCard