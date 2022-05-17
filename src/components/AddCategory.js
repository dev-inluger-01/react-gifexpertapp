import React,{ useState}  from 'react'

import PropTypes from 'prop-types'



export const AddCategory = ({setCategories}) => {

const [inputValue, setInputValue] = useState(''); // () es undefined entonces es mejor dejarlo como un string vacio

const handleInputChange = (e) =>{
    setInputValue(e.target.value);
}

const handleSubmit = (e)=>{
    e.preventDefault(); // previene que el navegador refresque completo
    //console.log("submit hecho");
    if(inputValue.trim().length>2){
        setCategories(cats =>[inputValue,...cats]);
        setInputValue('');
    }
    
}

  return (
    <>
    {/* <h1>{inputValue}</h1> */}
    <form onSubmit={handleSubmit}>
        <input 
            type="text"
            value={inputValue}
            onChange={handleInputChange}
        />
    </form>
</>
  )
}

AddCategory.propTypes ={
    setCategories: PropTypes.func.isRequired
}
