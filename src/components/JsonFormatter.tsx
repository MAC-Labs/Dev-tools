import React, { useState } from 'react';

const JsonFormatter: React.FC = () => {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');
  const [error, setError] = useState('');
  const [spaces, setSpaces] = useState(2);

  const formatJson = () => {
    try {
      const parsed = JSON.parse(input);
      setOutput(JSON.stringify(parsed, null, spaces));
      setError('');
    } catch (err) {
      setError('Invalid JSON input');
      setOutput('');
    }
  };

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-gray-900">JSON Formatter</h2>
        <div className="flex items-center space-x-4">
          <label className="text-sm text-gray-600">
            Indent:
            <select
              value={spaces}
              onChange={(e) => setSpaces(Number(e.target.value))}
              className="ml-2 rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
            >
              <option value={2}>2 spaces</option>
              <option value={4}>4 spaces</option>
              <option value={8}>8 spaces</option>
            </select>
          </label>
          <button
            onClick={formatJson}
            className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
          >
            Format
          </button>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-4">
        <div>
          <textarea
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Paste your JSON here..."
            className="w-full h-[500px] p-4 font-mono text-sm border rounded-md focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"
          />
        </div>
        <div>
          {error ? (
            <div className="p-4 bg-red-50 text-red-700 rounded-md">{error}</div>
          ) : (
            <pre className="w-full h-[500px] p-4 font-mono text-sm bg-gray-50 border rounded-md overflow-auto">
              {output}
            </pre>
          )}
        </div>
      </div>
    </div>
  );
};

export default JsonFormatter;