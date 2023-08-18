import React from 'react';
import { FiCheck } from 'react-icons/fi';
import { formatTime } from '../utils/timeStamp';

function MessageBar({ keyIndex, data }) {
    return (
        <div
            key={keyIndex}
            className="flex flex-col bg-gray-200 p-4 rounded-lg shadow-md"
        >
            <div className="flex flec-col justify-end">
                <div className="p-2 rounded-lg bg-blue-500 text-white"  title={formatTime(data.timestamp)}>
                    {data.messages}
                </div>
              <div className="flex items-center justify-end mt-2 text-opacity-50 text-gray-800">
                <span className="mr-1">sent</span>
                <FiCheck className="text-green-500" />
            </div>
            </div>
        </div>
    );
}

export default MessageBar;
