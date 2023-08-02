/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import { IntegralApi } from "@integralapi/node";
import * as core from "../../../../core";

export const Log: core.serialization.ObjectSchema<serializers.Log.Raw, IntegralApi.Log> = core.serialization.object({
    id: core.serialization.string(),
    createdAt: core.serialization.string(),
    updatedAt: core.serialization.string(),
    user: core.serialization.lazyObject(async () => (await import("../../..")).ApplicationUser),
    application: core.serialization.lazyObject(async () => (await import("../../..")).Application),
    userApiKey: core.serialization.lazyObject(async () => (await import("../../..")).ApiKey).optional(),
    route: core.serialization.string(),
    method: core.serialization.string(),
    body: core.serialization.record(core.serialization.string(), core.serialization.unknown()).optional(),
    headers: core.serialization.record(core.serialization.string(), core.serialization.unknown()).optional(),
    ip: core.serialization.string(),
    isSandbox: core.serialization.boolean(),
    metadata: core.serialization.record(core.serialization.string(), core.serialization.unknown()).optional(),
    version: core.serialization.string().optional(),
    endpoint: core.serialization
        .lazyObject(async () => (await import("../../..")).ApplicationBaseUrlEndpoint)
        .optional(),
    responseStatusCode: core.serialization.number().optional(),
    responseBody: core.serialization.record(core.serialization.string(), core.serialization.unknown()).optional(),
});

export declare namespace Log {
    interface Raw {
        id: string;
        createdAt: string;
        updatedAt: string;
        user: serializers.ApplicationUser.Raw;
        application: serializers.Application.Raw;
        userApiKey?: serializers.ApiKey.Raw | null;
        route: string;
        method: string;
        body?: Record<string, unknown> | null;
        headers?: Record<string, unknown> | null;
        ip: string;
        isSandbox: boolean;
        metadata?: Record<string, unknown> | null;
        version?: string | null;
        endpoint?: serializers.ApplicationBaseUrlEndpoint.Raw | null;
        responseStatusCode?: number | null;
        responseBody?: Record<string, unknown> | null;
    }
}
