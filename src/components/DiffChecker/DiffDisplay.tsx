import React from 'react';
import { Light as SyntaxHighlighter } from 'react-syntax-highlighter';
import { githubGist } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import { DiffResult, ViewMode, Language } from './types';

interface DiffDisplayProps {
  diffs: DiffResult[];
  viewMode: ViewMode;
  language: Language;
}

const DiffDisplay: React.FC<DiffDisplayProps> = ({ diffs, viewMode, language }) => {
  if (viewMode === 'side-by-side') {
    return (
      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-2">
          {diffs.map((diff, index) => (
            <div
              key={`left-${index}`}
              className={`p-2 rounded ${
                diff.type === 'remove' ? 'bg-red-50' : diff.type === 'add' ? 'opacity-50' : ''
              }`}
            >
              <SyntaxHighlighter
                language={language}
                style={githubGist}
                customStyle={{ margin: 0, background: 'transparent' }}
              >
                {diff.value}
              </SyntaxHighlighter>
            </div>
          ))}
        </div>
        <div className="space-y-2">
          {diffs.map((diff, index) => (
            <div
              key={`right-${index}`}
              className={`p-2 rounded ${
                diff.type === 'add' ? 'bg-green-50' : diff.type === 'remove' ? 'opacity-50' : ''
              }`}
            >
              <SyntaxHighlighter
                language={language}
                style={githubGist}
                customStyle={{ margin: 0, background: 'transparent' }}
              >
                {diff.value}
              </SyntaxHighlighter>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-2">
      {diffs.map((diff, index) => (
        <div
          key={index}
          className={`p-2 rounded ${
            diff.type === 'add'
              ? 'bg-green-50'
              : diff.type === 'remove'
              ? 'bg-red-50'
              : ''
          }`}
        >
          <SyntaxHighlighter
            language={language}
            style={githubGist}
            customStyle={{ margin: 0, background: 'transparent' }}
          >
            {diff.value}
          </SyntaxHighlighter>
        </div>
      ))}
    </div>
  );
};

export default DiffDisplay;