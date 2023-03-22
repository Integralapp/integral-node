/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../..";
import { IntegralApi } from "@integralapi/node";
import * as core from "../../../../../core";

export const ParseApiRequest: core.serialization.Schema<serializers.ParseApiRequest.Raw, IntegralApi.ParseApiRequest> =
    core.serialization.object({
        apiKey: core.serialization.string(),
        ip: core.serialization.string(),
        method: core.serialization.string(),
        requestBody: core.serialization.record(core.serialization.string(), core.serialization.unknown()),
        headers: core.serialization.record(core.serialization.string(), core.serialization.unknown()),
        path: core.serialization.string(),
        queryParams: core.serialization.record(core.serialization.string(), core.serialization.unknown()),
        metadata: core.serialization.record(core.serialization.string(), core.serialization.unknown()).optional(),
    });

export declare namespace ParseApiRequest {
    interface Raw {
        apiKey: string;
        ip: string;
        method: string;
        requestBody: Record<string, unknown>;
        headers: Record<string, unknown>;
        path: string;
        queryParams: Record<string, unknown>;
        metadata?: Record<string, unknown> | null;
    }
}
