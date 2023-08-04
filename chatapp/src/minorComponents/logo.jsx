import image from '../assets/chat logo.png';
const Logo = ({size}) =>
{
    
    return ( <>
        <img src={ image } alt="Chat logo" className={ `${size } cursor-pointer`} />
    </> );
};
export default Logo;