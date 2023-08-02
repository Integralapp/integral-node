/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import { IntegralApi } from "@integralapi/node";
import * as core from "../../../../core";

export const ApiKey: core.serialization.ObjectSchema<serializers.ApiKey.Raw, IntegralApi.ApiKey> =
    core.serialization.object({
        id: core.serialization.string(),
        createdAt: core.serialization.string(),
        updatedAt: core.serialization.string(),
        deletedAt: core.serialization.string(),
        apiKey: core.serialization.string(),
        name: core.serialization.string().optional(),
        expiresAt: core.serialization.string(),
        description: core.serialization.string().optional(),
        isPaused: core.serialization.boolean(),
        isRevoked: core.serialization.boolean(),
        lastUsed: core.serialization.string().optional(),
    });

export declare namespace ApiKey {
    interface Raw {
        id: string;
        createdAt: string;
        updatedAt: string;
        deletedAt: string;
        apiKey: string;
        name?: string | null;
        expiresAt: string;
        description?: string | null;
        isPaused: boolean;
        isRevoked: boolean;
        lastUsed?: string | null;
    }
}
