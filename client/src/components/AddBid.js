import { useState } from "react"
import {NumberInput, NumberInputField, NumberInputStepper, NumberIncrementStepper, NumberDecrementStepper,Flex
,Slider,SliderTrack,SliderFilledTrack,SliderThumb,ChakraProvider,Button} from '@chakra-ui/react'

import {useParams} from 'react-router-dom'


    function AddBid({price,}) {
            const [value, setValue] = useState(0)
            // const [bid_amount,setBidPrice] = useState("")
            const handleChange = (value) => setValue(value)
            const format = (val) => `$` + val
            const parse = (val) => val.replace(/^\$/, '')
            let {id}= useParams()
            console.log(id)
            console.log(value)


            // function handleBidAmout(){
            //     setBidPrice(value)
            // }
          

            function updateItemPrice(e){
                e.preventDefault();
                // handleBidAmout()
                // setBidPrice(value)
                const updatedBid ={
                    bid_amount:value,
                    listing_id:parseInt(id),

                    users_id:4,

                    // created_at:created_at,
                }
                fetch(`/bids`,{
                    method:'POST',
                    headers:{
                        "Content-Type": "application/json", 
                    },
                    body: JSON.stringify(updatedBid),
                })
                .then((response) => response.text())
            }
          
            return (
            <ChakraProvider>
                <div>
              <Flex>
                <NumberInput defaultValue={price} min={0} max={300} step={10} maxW='100px' mr='2rem' value={format(value)} onChange={handleChange}>
                  <NumberInputField />
                  <NumberInputStepper>
                    <NumberIncrementStepper />
                    <NumberDecrementStepper />
                  </NumberInputStepper>
                </NumberInput>
                <Slider
                  flex='1'
                  focusThumbOnChange={false}
                  value={value}
                  onChange={handleChange}
                  bg="grey"
                >
                  <SliderTrack >
                    <SliderFilledTrack />
                  </SliderTrack >
                  <SliderThumb defaultValue={price} min={0} max={300} step={10} fontSize='lg' boxSize='32px' children={value} />
                </Slider>
                
              </Flex>

                <Button colorScheme='teal' variant='solid' type="submit" onClick={updateItemPrice}>
                Submit Bid
                </Button>

              </div>
              </ChakraProvider>
            )
          }
export default AddBid