import OfflineCreatePackOptions from './OfflineCreatePackOptions';

import {NativeModules} from 'react-native';

const VietmapGLOfflineManager = NativeModules.MGLOfflineModule;

type OfflinePackStatus = {
  name: string;
  state: number;
  percentage: number;
  completedResourceCount: number;
  completedResourceSize: number;
  completedTileSize: number;
  completedTileCount: number;
  requiredResourceCount: number;
};

class OfflinePack {
  private pack: OfflineCreatePackOptions;
  private _metadata: Record<string, any> | null;

  constructor(pack: OfflineCreatePackOptions) {
    this.pack = pack;
    this._metadata = null;
  }

  get name(): string | null {
    const {metadata} = this;
    return metadata && metadata.name;
  }

  get bounds(): string {
    return this.pack.bounds;
  }

  get metadata(): Record<string, any> | null {
    if (!this._metadata && this.pack.metadata) {
      this._metadata = JSON.parse(this.pack.metadata);
    }
    return this._metadata;
  }

  status(): Promise<OfflinePackStatus> {
    return VietmapGLOfflineManager.getPackStatus(this.name);
  }

  resume(): Promise<void> {
    return VietmapGLOfflineManager.resumePackDownload(this.name);
  }

  pause(): Promise<void> {
    return VietmapGLOfflineManager.pausePackDownload(this.name);
  }
}

export default OfflinePack;
