import React from 'react';


const RadioButton = (params) => {
    return(
        <div className='radio-button'>
            <input className='radio' type='radio'/>
            <label>params.label</label>
        </div>
    );
};

export default RadioButton;
