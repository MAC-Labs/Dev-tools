import { DiffResult, ViewMode } from '../types';

export function exportDiff(diffs: DiffResult[], viewMode: ViewMode): void {
  const content = formatDiffForExport(diffs, viewMode);
  const blob = new Blob([content], { type: 'text/plain' });
  const url = URL.createObjectURL(blob);
  
  const a = document.createElement('a');
  a.href = url;
  a.download = 'diff-result.txt';
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}

function formatDiffForExport(diffs: DiffResult[], viewMode: ViewMode): string {
  if (viewMode === 'inline') {
    return diffs
      .map(diff => {
        const prefix = diff.type === 'add' ? '+' : diff.type === 'remove' ? '-' : ' ';
        return diff.value.split('\n').map(line => prefix + ' ' + line).join('\n');
      })
      .join('\n');
  }

  const leftContent = diffs
    .map(diff => (diff.type !== 'add' ? diff.value : ''))
    .join('');
  const rightContent = diffs
    .map(diff => (diff.type !== 'remove' ? diff.value : ''))
    .join('');

  return `=== Original ===\n${leftContent}\n\n=== Modified ===\n${rightContent}`;
}