import { SocketService } from '../../../SocketService';
/**
 * Returns a handler function to handle incoming messages.
 * This handler processes the incoming message based on its type and key exchange status.
 *
 * @param instance The current instance of the SocketService.
 * @param channelId The ID of the channel the message belongs to.
 * @returns {Function} A handler function for incoming messages.
 */
export declare function handleMessage(instance: SocketService, channelId: string): (rawMsg: {
    id: string;
    ackId?: string | undefined;
    message: string | {
        [key: string]: any;
        type: string;
    };
    error?: any;
}) => void;
//# sourceMappingURL=handleMessage.d.ts.map