import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';


const GifExpertApp = () => {

  //const categories=['One Puch','2','3'];

  const [categories,setCategories]= useState(['One Punch']);


/*  const handleAdd = () =>{
     //setCategories([...categories,'Luis']);
     setCategories(cats => [...cats,'Luis']);
  }*/
  
  return (
    <>
    <h2>GifExpertApp</h2>
    <AddCategory setCategories={setCategories}/>
    <hr />    
    <ol>
       {
           categories.map(category=>(
            <GifGrid key={category} category={category}/>
           ))
        } 
    </ol>
    </>
  )
}

export default GifExpertApp