import ShoeById from "./ShoeById"
import AddBid from "./AddBid"
import BidById from "./BidById"

import { ChakraProvider,Flex,Center,Text,Square,Box,Card,CardHeader,CardBody,CardFooter,Image,Stack,Heading,
    Divider,ButtonGroup,Button,Badge} from '@chakra-ui/react'


function ShoeByIdCard({ShoeById,setShoeById,image,brand,price,id,description,shoeName}){
    console.log(brand)   
      return (
       <ChakraProvider>
        <Center>

        <Box maxW='xl' borderWidth='1px' borderRadius='lg' overflow='hidden'>
          <Image src={image} alt={description} />
    
          <Box p='6'>
            <Box display='flex' alignItems='baseline'>
              <Badge borderRadius='full' px='2' colorScheme='teal'>
                New
              </Badge>
              <Box
                color='teal.500'
                fontWeight='semibold'
                letterSpacing='wide'
                fontSize='lg'
                textTransform='uppercase'
                ml='2'
                >
                {shoeName}
              </Box>
            </Box>
    
            <Box
              mt='1'
              fontWeight='semibold'
              as='h4'
              lineHeight='tight'
              //   noOfLines={1}
              >
              {description}
            </Box>
            
    
            <Box>
                
            <Center>
                

              <Box as='u' color='teal.600' fontSize='lg' fontWeight='bold'>
              Current Shoe price ${price}
                
              </Box>
            </Center>
            </Box>
              <Box as='span' ml='2' color='gray.600' fontSize='sm'>
                

              <AddBid id={id} price={price}/>
                
              </Box>
            </Box>
          </Box>                
                </Center>
                </ChakraProvider>
      )
    }
// return(
//     <ChakraProvider>
        
    

        
        {/* <Flex color='white'>
        <Center w='1000px' bg='grey.100'>
        <img className="shoebyid" src={image}/>
        </Center>
        <Square bg='teal.300' size='150px'>

            <Text>current price ${price}</Text>
        </Square>
        <Box flex='2' bg='grey'>
            <Text>{shoeName}{brand}{description}</Text>
        </Box>
        </Flex>
        

    <div>
        <AddBid id={id} price={price}/>
        
    </div> */}

        
    // </ChakraProvider>

// )
// }

export default ShoeByIdCard