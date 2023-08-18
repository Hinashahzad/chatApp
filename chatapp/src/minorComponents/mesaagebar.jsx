import React from 'react';

function MessageBar({keyIndex, data}) {
    return (
            <div key={keyIndex} className="bg-gray-200 p-4 rounded-lg shadow-md">
          <div className="bg-blue-500 text-white p-2 rounded-lg mb-2 max-w-md">
            <div className="flex justify-start mb-2">
              <div className="max-w-[80%] p-2 rounded-lg bg-blue-500 text-white">
                {data.messages}
              </div>
            </div>
          </div>
        </div>
    );
}

export default MessageBar;