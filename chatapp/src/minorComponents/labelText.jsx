
const LabelText = ( {
    id,
    text, 
    color
}) =>
{
    return ( <>
        {id ? (<label htmlFor={ id } className="block text-sm 
        font-medium leading-6 text-gray-900 ">
            { text }</label> ) :
            ( <span
                className={`cursor-pointer font-semibold 
                ${color}`} >{ text }</span> ) }
        
    </> ) 
};
export default LabelText;