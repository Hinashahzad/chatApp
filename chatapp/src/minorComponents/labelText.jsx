import React from "react";
const LabelText = ( {
    id,
    text, 
    color, 
    onClick
}) =>
{
    return ( <>
        { id ? ( <label
            htmlFor={ id }
            className="block text-sm 
                        font-medium leading-6
                        text-gray-900 "
            onClick={onClick}>
            { text }
        
        </label> ) :
            ( <span
                className={`cursor-pointer font-semibold 
                ${color }` }
                onClick={onClick}>{ text }</span> ) }
        
    </> ) 
};
export default LabelText;