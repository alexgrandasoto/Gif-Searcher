import React, { useState } from 'react'
import PropTypes from 'prop-types';

export const AddCategory = ({setCategories}) => {
    
    const [inputValue,setInputValue] = useState('')

    const handleInputChange = (e) => {
        setInputValue(e.target.value)
    }   
    const handleSumbit = (e) => {
        e.preventDefault()
        if ( inputValue.trim().length > 0){
            setCategories(categoriesOld => [inputValue,...categoriesOld])
            setInputValue('')
        }
    }

    return (
        <form onSubmit={handleSumbit}>
          <input type="text" value={inputValue} onChange={handleInputChange}></input>
          <button className="btn_delete animate__animated animate__bounceInRight" onClick={() => setCategories(category => [''])}>Delete search</button>
        </form>
    )
    
}

AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired
}