import React from 'react';

interface CodeInputProps {
  value: string;
  onChange: (value: string) => void;
  label: string;
  placeholder?: string;
}

const CodeInput: React.FC<CodeInputProps> = ({
  value,
  onChange,
  label,
  placeholder = 'Paste your code here...',
}) => {
  return (
    <div className="flex-1">
      <label className="block text-sm font-medium text-gray-700 mb-2">
        {label}
      </label>
      <textarea
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="w-full h-[300px] p-4 font-mono text-sm border rounded-md focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"
      />
    </div>
  );
};

export default CodeInput;