/**
 * This file was auto-generated by Fern from our API Definition.
 */

export interface ApplicationRateLimit {
    id: string;
    createdAt: string;
    updatedAt: string;
    deletedAt?: string;
    numOfRequests: number;
    timeInterval: string;
}