import React from 'react';
import { FileDown, RefreshCw } from 'lucide-react';
import { ViewMode, Language } from './types';

interface DiffControlsProps {
  viewMode: ViewMode;
  setViewMode: (mode: ViewMode) => void;
  language: Language;
  setLanguage: (lang: Language) => void;
  onExport: () => void;
  onCompare: () => void;
}

const DiffControls: React.FC<DiffControlsProps> = ({
  viewMode,
  setViewMode,
  language,
  setLanguage,
  onExport,
  onCompare,
}) => {
  return (
    <div className="flex items-center space-x-4 mb-4">
      <select
        value={viewMode}
        onChange={(e) => setViewMode(e.target.value as ViewMode)}
        className="rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
      >
        <option value="side-by-side">Side by Side</option>
        <option value="inline">Inline</option>
      </select>

      <select
        value={language}
        onChange={(e) => setLanguage(e.target.value as Language)}
        className="rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
      >
        <option value="javascript">JavaScript</option>
        <option value="typescript">TypeScript</option>
        <option value="python">Python</option>
        <option value="java">Java</option>
        <option value="plaintext">Plain Text</option>
      </select>

      <button
        onClick={onCompare}
        className="inline-flex items-center px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
      >
        <RefreshCw className="h-4 w-4 mr-2" />
        Compare
      </button>

      <button
        onClick={onExport}
        className="inline-flex items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
      >
        <FileDown className="h-4 w-4 mr-2" />
        Export
      </button>
    </div>
  );
};

export default DiffControls;