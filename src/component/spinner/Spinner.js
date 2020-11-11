import React from 'react';
import SpinnerRo from './spinner.gif' 
import './Spinner.css'

function Spinner() {
    return (
        <div className = "spinner">
            <img src={SpinnerRo} alt="A spinner"/>
        </div>
    )
}

export default Spinner
