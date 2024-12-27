import { diffLines } from 'diff';
import { DiffResult } from '../types';

export function computeDiff(oldText: string, newText: string): DiffResult[] {
  const changes = diffLines(oldText, newText);
  
  return changes.map(change => ({
    type: change.added ? 'add' : change.removed ? 'remove' : 'equal',
    value: change.value
  }));
}