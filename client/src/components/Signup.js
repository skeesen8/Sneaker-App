import {FormControl, FormLabel, FormHelperText,Input,Button,size, ChakraProvider} from '@chakra-ui/react'
import { useFormik } from 'formik';
import * as yup from "yup";

import { useState } from 'react'
import Home from './Home';





function Signup({setUser}){
    const [signup,setSignup]=useState(true)

    const signupSchema = yup.object().shape({
        username: yup.string().min(5,'must be at least 5 characters').max(20,"too long").required('Required Field'), 
        password: yup.string().min(5,'must be at least 5 characters').max(20,"too long").required('Required Field'),      

    })

    const formik = useFormik({
        initialValues:{
            name:'',
            username:'',
            password:'',
            email:''
        },
        validationSchema:signupSchema,

        onSubmit:(values)=>{
            const endpoint = signup ? '/users' : '/login'
            fetch(endpoint,{
                method: 'POST',
                headers:{'Content-Type':'application/json'
                },
                body: JSON.stringify(values) 
            }).then ((resp) => {
                if (resp.ok){
                    resp.json().then(({user})=>{
                        setUser(user)
                    
                    })
                }else{
                    console.log({values})

                }
             })
        }
        })

        function toggleSignup(){
            setSignup((currentSignup)=>!currentSignup)
        }
    
    if(signup){
    return(

            <FormControl isRequired >
            <Button onClick={toggleSignup}>{signup ? 'Login!':'Sign Up'}</Button>
            <form onSubmit={formik.handleSubmit}> 

            <FormLabel>Full Name </FormLabel>
            <Input label='name' id='name' placeholder='Enter Name Here' value={formik.values.name} onChange ={formik.handleChange}/>

            <FormLabel>Username</FormLabel>
            <Input label='username' id='username' placeholder='Enter Desired Username' value ={formik.values.username} onChange ={formik.handleChange}/>

            <FormLabel>Password</FormLabel>
            <Input type='password' label='password' id='password' placeholder='Enter Password' value ={formik.values.password} onChange ={formik.handleChange}/>
            <FormHelperText>Must be at least 5 digits</FormHelperText>


            <FormLabel>Email address</FormLabel>
            <Input label='email' id='email' type='email' placeholder ='Enter Email' value ={formik.values.email} onChange ={formik.handleChange}/>
            <FormHelperText>We'll never share your email.</FormHelperText>

            <Button colorScheme='teal' size='md' type = 'submit'>Submit</Button>

            </form>
            <Home/>

            </FormControl>
            

            
       
    )}
    return(
        <FormControl isRequired >
            <Button onClick={toggleSignup}>{signup ? 'Login!':'Sign Up'}</Button>
            <form onSubmit={formik.handleSubmit}> 
            
            <FormLabel>Username</FormLabel>
            <Input label='username' id='username' placeholder='Enter Username' value ={formik.values.username} onChange ={formik.handleChange}/>

            <FormLabel>Password</FormLabel>
            <Input type='password' label='password' id='password' placeholder='Enter Password' value ={formik.values.password} onChange ={formik.handleChange}/>
            <FormHelperText>Must be at least 5 digits</FormHelperText>

            <Button colorScheme='teal' size='md' type = 'submit'>Submit</Button>

            </form>
            <Home/>

            </FormControl>




    )







}

export default Signup