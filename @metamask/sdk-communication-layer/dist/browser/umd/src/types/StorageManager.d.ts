import { ChannelConfig } from './ChannelConfig';
export interface StorageManagerProps {
    enabled: boolean;
    debug?: boolean;
    duration?: number;
    storageManager?: StorageManager;
}
export interface StorageManager {
    persistChannelConfig(channelConfig: ChannelConfig, context?: string): Promise<void>;
    persistAccounts(accounts: string[], context?: string): Promise<void>;
    getCachedAccounts(): Promise<string[]>;
    getCachedChainId(): Promise<string | undefined>;
    persistChainId(chainId: string, context?: string): Promise<void>;
    getPersistedChannelConfig(): Promise<ChannelConfig | undefined>;
    terminate(channelId: string): Promise<void>;
}
//# sourceMappingURL=StorageManager.d.ts.map