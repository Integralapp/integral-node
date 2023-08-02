/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../..";
import { IntegralApi } from "@integralapi/node";
import * as core from "../../../../../core";

export const RotateApiKeyRequest: core.serialization.Schema<
    serializers.RotateApiKeyRequest.Raw,
    IntegralApi.RotateApiKeyRequest
> = core.serialization.object({
    apiKey: core.serialization.string(),
    expiresIn: core.serialization.lazy(async () => (await import("../../../..")).RotateTimings),
});

export declare namespace RotateApiKeyRequest {
    interface Raw {
        apiKey: string;
        expiresIn: serializers.RotateTimings.Raw;
    }
}
