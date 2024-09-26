import ShoeById from "./ShoeById"
import AddBid from "./AddBid"
import BidById from "./BidById"

import { ChakraProvider,Flex,Center,Text,Square,Box,Card,CardHeader,CardBody,CardFooter,Image,Stack,Heading,
    Divider,ButtonGroup,Button,Badge} from '@chakra-ui/react'


function ShoeByIdCard({ShoeById,setShoeById,image,brand,price,id,description,shoeName,bids}){
   console.log(bids)
  
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


export default ShoeByIdCard