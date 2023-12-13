import * as React from "react";
import {Link} from "react-router-dom";
import {Breadcrumb,BreadcrumbItem,BreadcrumbLink,BreadcrumbSeparator,Button} from '@chakra-ui/react'


function Navbar({handleLogout}){

    return(
        <Breadcrumb>             
                    <BreadcrumbItem>
                        <BreadcrumbLink as={Link} to='/'>Home</BreadcrumbLink>
                    </BreadcrumbItem>

                    <BreadcrumbItem>
                        <BreadcrumbLink as={Link} to='/shoes'>Shoes for Sale</BreadcrumbLink>
                    </BreadcrumbItem>

                    <BreadcrumbItem>
                        <BreadcrumbLink as={Link} to='/bids'>Bids</BreadcrumbLink>
                    </BreadcrumbItem>      
                    <Button onClick={handleLogout} size="sm" colorScheme='teal'>Logout</Button>  
        </Breadcrumb>
    )
}

export default Navbar



