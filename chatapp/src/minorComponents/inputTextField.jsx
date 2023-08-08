import React from "react";
const InputTextField = ( {
    id,
    name,
    type,
    autoComplete,
    placeHolderText,
    border,
    width,
    focus,
    background,
    onChange} ) =>
{
    
    return ( <>
        <input id={ id }
            name={ name }
            type={ type } autoComplete={ autoComplete }
            placeholder={ placeHolderText }
            required 
            className={`block ${width} 
                rounded-md border-0 py-1.5 text-gray-900
                shadow-sm placeholder:text-gray-400
                ${focus}
                sm:text-sm sm:leading-6 ${border } ${ background }` }
            onChange={onChange}/>
    </> );
};
export default InputTextField;