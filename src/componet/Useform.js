
import React, { useState } from 'react'

function Useform(Validate) {
   const[values,setValue]=useState({
      username:"",
      email:"",
      password:"",
      password2:"",

   });

   const[error,SetError]=useState({})

   const handleChnage=(event)=>{

     const{name,value}=event.target;

     setValue((prevValues)=>{
        return{
            ...prevValues,
            [name]: value,
        }
     })
   }

   const handleSubmit=(event)=>{
      event.preventDefault();
      SetError(Validate(values))
   }

   return {handleChnage,values,handleSubmit,error}
};

export default Useform