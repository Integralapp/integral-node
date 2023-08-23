/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import { IntegralApi } from "@integralapi/node";
import * as core from "../../../../core";

export const ApplicationBaseUrlEndpoint: core.serialization.ObjectSchema<
    serializers.ApplicationBaseUrlEndpoint.Raw,
    IntegralApi.ApplicationBaseUrlEndpoint
> = core.serialization.object({
    id: core.serialization.string(),
    createdAt: core.serialization.string(),
    updatedAt: core.serialization.string(),
    deletedAt: core.serialization.string().optional(),
    path: core.serialization.string(),
    name: core.serialization.string(),
    scopeKey: core.serialization.string(),
    description: core.serialization.string(),
    method: core.serialization.string(),
    queryParams: core.serialization.record(core.serialization.string(), core.serialization.unknown()).optional(),
    requestBody: core.serialization.record(core.serialization.string(), core.serialization.unknown()).optional(),
    requestHeaders: core.serialization.record(core.serialization.string(), core.serialization.unknown()).optional(),
    sandboxFieldLocation: core.serialization.string().optional(),
    sandboxFieldName: core.serialization.string().optional(),
});

export declare namespace ApplicationBaseUrlEndpoint {
    interface Raw {
        id: string;
        createdAt: string;
        updatedAt: string;
        deletedAt?: string | null;
        path: string;
        name: string;
        scopeKey: string;
        description: string;
        method: string;
        queryParams?: Record<string, unknown> | null;
        requestBody?: Record<string, unknown> | null;
        requestHeaders?: Record<string, unknown> | null;
        sandboxFieldLocation?: string | null;
        sandboxFieldName?: string | null;
    }
}