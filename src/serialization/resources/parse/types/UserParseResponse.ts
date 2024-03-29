/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import { IntegralApi } from "@integralapi/node";
import * as core from "../../../../core";

export const UserParseResponse: core.serialization.ObjectSchema<
    serializers.UserParseResponse.Raw,
    IntegralApi.UserParseResponse
> = core.serialization.object({
    integralId: core.serialization.string(),
    metadata: core.serialization.record(core.serialization.string(), core.serialization.unknown()).optional(),
    userId: core.serialization.string(),
    isAllowlistedOnEndpoint: core.serialization.boolean(),
    createdAt: core.serialization.string().optional(),
    updatedAt: core.serialization.string().optional(),
    deletedAt: core.serialization.string().optional(),
    idempotencyKey: core.serialization.string().optional(),
});

export declare namespace UserParseResponse {
    interface Raw {
        integralId: string;
        metadata?: Record<string, unknown> | null;
        userId: string;
        isAllowlistedOnEndpoint: boolean;
        createdAt?: string | null;
        updatedAt?: string | null;
        deletedAt?: string | null;
        idempotencyKey?: string | null;
    }
}
