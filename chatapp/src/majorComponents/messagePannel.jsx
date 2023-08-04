import React from 'react';
import InputPannel from './inputPannel';
import Logo from '../minorComponents/logo';

function MessagePannel() {
    return (
    <main className="w-3/4 bg-gray-100 p-4"
            style={ { minHeight: "calc(100vh - 2rem)" } }>
        <h1 className="text-2xl font-bold mb-4">Main Content</h1>
    <p>
        Lorem ipsum dolor sit amet, 
        consectetur adipiscing elit. Nullam vel ultricies neque. Duis quis mi id
        sapien malesuada cursus. Phasellus varius, massa ac sodales bibendum, ante nunc facilisis ipsum, nec
            </p>
            <Logo />
            <Logo /><Logo /><Logo /><Logo /><Logo /><Logo />

  {/* Sticky Input Field */}
    <InputPannel />
</main>
    );
}

export default MessagePannel;