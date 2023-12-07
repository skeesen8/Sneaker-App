import React, { useEffect, useState } from "react";
import { Switch, Route } from "react-router-dom";
import { ChakraProvider, RangeSliderProvider,Button,size } from '@chakra-ui/react'


import Signup from "./Signup";


function App() {
  const [user,setUser]=useState(null)
  
  useEffect(() => {
    fetch('/authorized')
    .then((resp) => {
      if (resp.ok) {
        resp.json().then((user) => setUser(user))
      } else {
        console.log('error')
      }
    })
  }, [])

  function handleLogout(){
    fetch("/logout",{
      method:"DELETE"})
      .then((resp)=>{
        if(resp.ok){
          setUser(null)
        }
      })
    

  }



    if(!user){
      return(

      <ChakraProvider>
        <Signup setUser={setUser}/>
      </ChakraProvider>
      )}

      return(
        <ChakraProvider>

        <div>
          in the site
          <Button onClick={handleLogout} size="sm" colorScheme='teal'>Logout</Button>
        </div>


          
        </ChakraProvider>

      )
    
      
    }
    

export default App;
