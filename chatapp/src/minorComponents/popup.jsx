import React from 'react';

const  Popup = ( {
    text,
}) => {
    return (
        <div className="fixed inset-0 flex items-center justify-center z-50">
            {/* Overlay */}
  <div className="fixed inset-0 bg-black opacity-50"></div>
  
  {/* Modal */}
  <div className="bg-white p-6 rounded-lg shadow-lg z-10">
    <h2 className="text-xl font-semibold mb-4">Important Message</h2>
    <p className="text-gray-700">
      {text}
    </p>
    <button className="mt-4 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">
      Close
    </button>
  </div>
</div>
    );
}

export default Popup;