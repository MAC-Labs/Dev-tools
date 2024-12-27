import React, { useState } from 'react';
import CodeInput from './CodeInput';
import DiffControls from './DiffControls';
import DiffDisplay from './DiffDisplay';
import { computeDiff } from './utils/diffUtils';
import { exportDiff } from './utils/exportUtils';
import { ViewMode, Language, DiffResult } from './types';

const DiffChecker: React.FC = () => {
  const [leftCode, setLeftCode] = useState('');
  const [rightCode, setRightCode] = useState('');
  const [viewMode, setViewMode] = useState<ViewMode>('side-by-side');
  const [language, setLanguage] = useState<Language>('javascript');
  const [diffs, setDiffs] = useState<DiffResult[]>([]);

  const handleCompare = () => {
    const results = computeDiff(leftCode, rightCode);
    setDiffs(results);
  };

  const handleExport = () => {
    exportDiff(diffs, viewMode);
  };

  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold text-gray-900">Code Diff Checker</h2>
      
      <DiffControls
        viewMode={viewMode}
        setViewMode={setViewMode}
        language={language}
        setLanguage={setLanguage}
        onExport={handleExport}
        onCompare={handleCompare}
      />

      <div className="flex gap-4 mb-4">
        <CodeInput
          value={leftCode}
          onChange={setLeftCode}
          label="Original Code"
        />
        <CodeInput
          value={rightCode}
          onChange={setRightCode}
          label="Modified Code"
        />
      </div>

      {diffs.length > 0 && (
        <DiffDisplay
          diffs={diffs}
          viewMode={viewMode}
          language={language}
        />
      )}
    </div>
  );
};

export default DiffChecker;