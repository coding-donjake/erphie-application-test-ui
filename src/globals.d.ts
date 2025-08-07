export {};

type ScriptConfiguration = {
  stages: Stage[];
  pacing: number;
};

type Entry = {
  id: number;
  url: string;
  method: string;
  request: EntryRequest;
  response: ResponseRequest;
  subEntries: Entry[];
  extractions: Extraction[];
  thinkTime: number;
};

type EntryRequest = {
  headers: Record<string, string> | undefined;
  body: string | null;
};

type GlobalVariable = {
  name: string;
  value: any;
};

type ResponseRequest = {
  headers: Record<string, string> | undefined;
  body: string | null;
};

type ExtractedValue = {
  name: string;
  value: any;
};

type Extraction = {
  name: string;
  path: string[];
  leftBoundary: string | null;
  rightBoundary: string | null;
};

type Group = {
  name: string;
  entries: Entry[];
};

type RecordOptions = {
  preferredBrowser?: "chromium" | "firefox" | "webkit";
  headless?: boolean;
  args?: string[];
};

type Script = {
  nextID: number;
  globalVariables: GlobalVariable[];
  extractedValues: ExtractedValue[];
  groups?: Group[];
  configuration: ScriptConfiguration;
};

type Stage = {
  duration: number;
  target: number;
};

type RecordOptions = {
  preferredBrowser?: "chromium" | "firefox" | "webkit";
  headless?: boolean;
  args?: string[];
};

type SaveFileReturnValue = {
  success: boolean;
  cancelled?: boolean;
  path?: string;
  error?: string;
};

type SaveFolderReturnValue = {
  success: boolean;
  cancelled?: boolean;
  path?: string;
  error?: string;
};

declare global {
  interface Window {
    electronAPI: {
      record: (options: RecordOptions) => Promise<Script>;
      saveFile: () => Promise<SaveFileReturnValue>;
      saveFolder: () => Promise<SaveFolderReturnValue>;
      selectFile: () => Promise<string[] | undefined>;
      selectFolder: () => Promise<string[] | undefined>;
    };
  }
}
