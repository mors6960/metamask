import { RemoteCommunication } from '../../../RemoteCommunication';
import { DisconnectOptions } from '../../../types/DisconnectOptions';
/**
 * Handles the disconnection process for a RemoteCommunication instance Depending on the provided options, it can terminate the connection and clear related configurations or simply disconnect.
 *
 * @param options Optional settings that determine how the disconnection is handled. It can specify whether to terminate the connection, send a termination message, or reset the channel ID.
 * @param instance The current instance of the RemoteCommunication class that needs to be disconnected.
 * @returns void
 */
export declare function disconnect({ options, instance, }: {
    options?: DisconnectOptions;
    instance: RemoteCommunication;
}): void;
//# sourceMappingURL=disconnect.d.ts.map