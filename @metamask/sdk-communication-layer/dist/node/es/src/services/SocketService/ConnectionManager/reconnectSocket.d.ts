import { SocketService } from '../../../SocketService';
/**
 * Attempts to reconnect the socket after a disconnection.
 * It first waits for a brief delay to prevent potential issues, then checks if the socket is not already connected.
 * If the socket is not connected, it sets the `resumed` state to true, reconnects the socket, and emits a SOCKET_RECONNECT event.
 * It also emits a JOIN_CHANNEL event to rejoin the channel.
 *
 * @param instance The current instance of the SocketService.
 */
export declare const reconnectSocket: (instance: SocketService) => Promise<boolean | undefined>;
//# sourceMappingURL=reconnectSocket.d.ts.map