import React, { useState } from 'react';

const RegexTester: React.FC = () => {
  const [pattern, setPattern] = useState('');
  const [flags, setFlags] = useState('g');
  const [input, setInput] = useState('');
  const [error, setError] = useState('');
  const [matches, setMatches] = useState<string[]>([]);

  const testRegex = () => {
    try {
      const regex = new RegExp(pattern, flags);
      const found = input.match(regex) || [];
      setMatches(found);
      setError('');
    } catch (err) {
      setError('Invalid regular expression');
      setMatches([]);
    }
  };

  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold text-gray-900">Regex Tester</h2>
      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Pattern</label>
            <div className="mt-1 flex rounded-md shadow-sm">
              <span className="inline-flex items-center px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-gray-500 text-sm">
                /
              </span>
              <input
                type="text"
                value={pattern}
                onChange={(e) => setPattern(e.target.value)}
                className="flex-1 min-w-0 block w-full px-3 py-2 rounded-none border border-gray-300 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
              <span className="inline-flex items-center px-3 rounded-r-md border border-l-0 border-gray-300 bg-gray-50 text-gray-500 text-sm">
                /
                <input
                  type="text"
                  value={flags}
                  onChange={(e) => setFlags(e.target.value)}
                  className="w-12 ml-1 border-0 bg-transparent focus:ring-0 sm:text-sm"
                />
              </span>
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Test String</label>
            <textarea
              value={input}
              onChange={(e) => setInput(e.target.value)}
              rows={10}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            />
          </div>
          <button
            onClick={testRegex}
            className="w-full px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
          >
            Test
          </button>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Matches</label>
          {error ? (
            <div className="mt-1 p-4 bg-red-50 text-red-700 rounded-md">{error}</div>
          ) : (
            <div className="mt-1 p-4 bg-gray-50 rounded-md h-[300px] overflow-auto">
              {matches.length > 0 ? (
                <ul className="space-y-2">
                  {matches.map((match, index) => (
                    <li key={index} className="font-mono text-sm">
                      {match}
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="text-gray-500">No matches found</p>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default RegexTester;