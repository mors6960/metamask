import { EventEmitter2 } from 'eventemitter2';
import { Socket } from 'socket.io-client';
import { ECIESProps } from './ECIES';
import { KeyExchange } from './KeyExchange';
import { RemoteCommunication } from './RemoteCommunication';
import { Channel } from './types/Channel';
import { CommunicationLayer } from './types/CommunicationLayer';
import { CommunicationLayerMessage } from './types/CommunicationLayerMessage';
import { CommunicationLayerPreference } from './types/CommunicationLayerPreference';
import { ConnectToChannelOptions } from './types/ConnectToChannelOptions';
import { DisconnectOptions } from './types/DisconnectOptions';
import { KeyInfo } from './types/KeyInfo';
import { CommunicationLayerLoggingOptions } from './types/LoggingOptions';
export interface SocketServiceProps {
    communicationLayerPreference: CommunicationLayerPreference;
    reconnect?: boolean;
    transports?: string[];
    otherPublicKey?: string;
    communicationServerUrl: string;
    context: string;
    ecies?: ECIESProps;
    remote: RemoteCommunication;
    logging?: CommunicationLayerLoggingOptions;
}
export interface SocketServiceState {
    clientsConnected: boolean;
    clientsPaused: boolean;
    isOriginator?: boolean;
    channelId?: string;
    manualDisconnect: boolean;
    resumed?: boolean;
    communicationLayerPreference?: CommunicationLayerPreference;
    context?: string;
    withKeyExchange?: boolean;
    communicationServerUrl: string;
    debug?: boolean;
    rpcMethodTracker: RPCMethodCache;
    lastRpcId?: string;
    hasPlaintext: boolean;
    socket?: Socket;
    setupChannelListeners?: boolean;
    analytics?: boolean;
    keyExchange?: KeyExchange;
}
export interface RPCMethodResult {
    id: string;
    timestamp: number;
    method: string;
    result?: unknown;
    error?: unknown;
    elapsedTime?: number;
}
export interface RPCMethodCache {
    [id: string]: RPCMethodResult;
}
export type SocketServiceInstanceType = SocketService & EventEmitter2 & CommunicationLayer;
export declare class SocketService extends EventEmitter2 implements CommunicationLayer {
    state: SocketServiceState;
    remote: RemoteCommunication;
    constructor({ otherPublicKey, reconnect, communicationLayerPreference, transports, communicationServerUrl, context, ecies, remote, logging, }: SocketServiceProps);
    resetKeys(): void;
    createChannel(): Channel;
    connectToChannel({ channelId, withKeyExchange, }: ConnectToChannelOptions): void;
    getKeyInfo(): KeyInfo;
    keyCheck(): void;
    getKeyExchange(): KeyExchange;
    sendMessage(message: CommunicationLayerMessage): void;
    ping(): void;
    pause(): void;
    isConnected(): boolean;
    resume(): void;
    getRPCMethodTracker(): RPCMethodCache;
    disconnect(options?: DisconnectOptions): void;
}
//# sourceMappingURL=SocketService.d.ts.map