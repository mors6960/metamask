import { RemoteCommunicationState } from '../../../RemoteCommunication';
/**
 * Generates a new channel ID for the communication layer or reuses an existing one.
 * Also establishes necessary configurations and throws errors if the layer isn't initialized or if the channel is already connected.
 *
 * @param state Current state of the RemoteCommunication class instance.
 * @returns An object containing the channelId and its corresponding public key.
 */
export declare function generateChannelIdConnect(state: RemoteCommunicationState): {
    channelId: string;
    pubKey: string;
};
//# sourceMappingURL=generateChannelIdConnect.d.ts.map