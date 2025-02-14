import { AnalyticsProps, TrackingEvents } from '@metamask/sdk-communication-layer';
export declare const ANALYTICS_CONSTANTS: {
    DEFAULT_ID: string;
    NO_VERSION: string;
};
export declare class Analytics {
    #private;
    constructor({ serverUrl, enabled, originatorInfo, }: {
        serverUrl: string;
        originatorInfo: AnalyticsProps['originationInfo'];
        enabled?: boolean;
    });
    send({ event, params, }: {
        event: TrackingEvents;
        params?: Record<string, unknown>;
    }): void;
}
//# sourceMappingURL=Analytics.d.ts.map