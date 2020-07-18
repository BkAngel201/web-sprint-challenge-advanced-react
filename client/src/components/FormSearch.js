import React, { useState } from 'react';

const FormSearch = (props) => {

    const handleOnChange = (e) => {
        props.setToSearch(e.target.value)
    }
    const handleOnSubmit = (e) => {
        e.preventDefault()
    }
    return (
        <form onSubmit={handleOnSubmit} className="search-bar">
            <input type='text' onChange={handleOnChange} value={props.toSearch}/>
        </form>
    )
}

export default FormSearch