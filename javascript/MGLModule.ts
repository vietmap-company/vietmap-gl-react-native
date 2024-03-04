import {NativeModules} from 'react-native';

interface IMGLModule {
  StyleURL: {
    Default: URL;
    Street: URL;
  };
  OfflinePackDownloadState: {
    Inactive: string | number;
    Active: string | number;
    Complete: string | number;
    Unknown?: string | number;
  };
  LineJoin: {
    Bevel: string | number;
    Round: string | number;
    Miter: string | number;
  };
  StyleSource: {
    DefaultSourceID: string;
  };

  setApiKey(apiKey: string | null): Promise<string | null>;
  getApiKey(): Promise<string>;
  setConnected(connected: boolean): void;
}

const MGLModule: IMGLModule = {...NativeModules.MGLModule};

export const {
  StyleURL,
  OfflinePackDownloadState,
  LineJoin,
  StyleSource,
  setApiKey,
  getApiKey,
  setConnected,
} = MGLModule;
