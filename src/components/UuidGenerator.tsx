import React, { useState } from 'react';

const UuidGenerator: React.FC = () => {
  const [uuids, setUuids] = useState<string[]>([]);
  const [count, setCount] = useState(1);

  const generateUuid = () => {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (c) => {
      const r = (Math.random() * 16) | 0;
      const v = c === 'x' ? r : (r & 0x3) | 0x8;
      return v.toString(16);
    });
  };

  const generateUuids = () => {
    const newUuids = Array.from({ length: count }, () => generateUuid());
    setUuids(newUuids);
  };

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
  };

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-gray-900">UUID Generator</h2>
        <div className="flex items-center space-x-4">
          <label className="text-sm text-gray-600">
            Count:
            <input
              type="number"
              min="1"
              max="100"
              value={count}
              onChange={(e) => setCount(Number(e.target.value))}
              className="ml-2 w-20 rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
            />
          </label>
          <button
            onClick={generateUuids}
            className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
          >
            Generate
          </button>
        </div>
      </div>
      <div className="bg-gray-50 rounded-md p-4">
        {uuids.length > 0 ? (
          <ul className="space-y-2">
            {uuids.map((uuid, index) => (
              <li
                key={index}
                className="flex justify-between items-center font-mono text-sm bg-white p-2 rounded-md"
              >
                <span>{uuid}</span>
                <button
                  onClick={() => copyToClipboard(uuid)}
                  className="text-indigo-600 hover:text-indigo-700"
                >
                  Copy
                </button>
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-center text-gray-500">Click generate to create UUIDs</p>
        )}
      </div>
    </div>
  );
};

export default UuidGenerator;