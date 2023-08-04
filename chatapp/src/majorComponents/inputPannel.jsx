import React from 'react';
import InputTextField from '../minorComponents/inputTextField';
import { IoMdAttach } from 'react-icons/io';
import {BiImageAdd} from 'react-icons/bi'
import Button from '../minorComponents/button';

function InputPannel(props) {
    return (
        <div className="flex justify-between sticky top-[100vh] h-15
             border
            border-gray-500">
                <InputTextField type="text"
                    placeHolderText="Type something..."
                    border="border-none"
                    width="w-1/2"
                background="bg-transparent" />
            <div className='flex flex-end gap-2 '>
            <IoMdAttach className='cursor-pointer'  size={30} />
            <BiImageAdd className='cursor-pointer' size={30}/>
            <Button type="submit" text="Send" size="" /></div>
            
  </div>
    );
}

export default InputPannel;