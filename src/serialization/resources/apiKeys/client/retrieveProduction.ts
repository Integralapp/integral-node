/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import { IntegralApi } from "@integralapi/node";
import * as core from "../../../../core";

export const Response: core.serialization.Schema<
    serializers.apiKeys.retrieveProduction.Response.Raw,
    IntegralApi.ApiKey[]
> = core.serialization.list(core.serialization.lazyObject(async () => (await import("../../..")).ApiKey));

export declare namespace Response {
    type Raw = serializers.ApiKey.Raw[];
}
