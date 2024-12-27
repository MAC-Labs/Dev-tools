export type ViewMode = 'side-by-side' | 'inline';

export type Language =
  | 'javascript'
  | 'typescript'
  | 'python'
  | 'java'
  | 'plaintext';

export type DiffType = 'add' | 'remove' | 'equal';

export interface DiffResult {
  type: DiffType;
  value: string;
}