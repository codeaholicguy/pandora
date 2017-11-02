export interface Location {
  appName?: string;
  processName?: string;
  pid?: string;
}

export interface Selector extends Location {
  serviceName?: string;
  tag?: string;
  method?: string;
}

export const selectorSchema  = [
  'appName',
  'processName',
  'pid',
  'serviceName',
  'tag',
  'method'
];

export interface MessagePackage {
  broadcast?: boolean;
  host?: Selector;
  remote?: Selector;
  code?: number;
  error?: any;
  data?: any;
}

