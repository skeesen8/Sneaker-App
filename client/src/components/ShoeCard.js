import { useNavigate,useOutletContext} from "react-router-dom"
import { ChakraProvider,Text,Card,CardBody,CardFooter,Image,Stack,Heading,
    Divider,ButtonGroup,Button} from '@chakra-ui/react'




function ShoeCard({price,description,image,shoeName,id,setListings,userId}){
    const user = useOutletContext();
    


    const navigate=useNavigate()
  

    function handleClick(){
    console.log(`clicked ${id}`)
    navigate(`/listings/${id}`)
}
    function handleDelete(){
        console.log(id)
        fetch(`/listings/${id}`, {
            method: 'DELETE',
            headers: {
              'Content-Type': 'application/json',
            },
          })
           .then((response) => {
        if (response.ok) {
          setListings((prevShoes) => prevShoes.filter((shoeSummary) => shoeSummary.id !== id));
        } 
        else {
          console.error('Failed to delete Shoe');
        }
      })
    }

    return(
        <ChakraProvider >
        <Card maxW='sm' borderColor='teal' >
        <CardBody>
            <Image
            src={image}
            alt={description}
            borderRadius='lg'
            />
            <Stack mt='6' spacing='3' >
            <Heading size='md'>{shoeName}</Heading>
            <Text>
                {description}
            </Text>
            <Text color='blue.600' fontSize='2xl'>
                ${price}
            </Text>
            </Stack>
        </CardBody>
        <Divider />
        <CardFooter>
            <ButtonGroup spacing='2'>
            <Button onClick={handleClick} variant='ghost' colorScheme='teal'>
                Bid now
            </Button>
            <Button onClick={handleClick} variant='ghost' colorScheme='teal'>
                More Details
            </Button>
            {user.id==userId ? <Button onClick={handleDelete} variant='ghost' colorScheme='red'>Delete</Button>:""}
            </ButtonGroup>
        </CardFooter>
        </Card>
              
    </ChakraProvider>
//  {isLoggedIn ? <h1>Welcome back!</h1> : <h1>Please log in.</h1>}

    )
}

export default ShoeCard