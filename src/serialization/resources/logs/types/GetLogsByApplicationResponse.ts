/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import { IntegralApi } from "@integralapi/node";
import * as core from "../../../../core";

export const GetLogsByApplicationResponse: core.serialization.ObjectSchema<
    serializers.GetLogsByApplicationResponse.Raw,
    IntegralApi.GetLogsByApplicationResponse
> = core.serialization.object({
    logs: core.serialization.list(core.serialization.lazyObject(async () => (await import("../../..")).Log)),
    hasNextPage: core.serialization.boolean(),
});

export declare namespace GetLogsByApplicationResponse {
    interface Raw {
        logs: serializers.Log.Raw[];
        hasNextPage: boolean;
    }
}
