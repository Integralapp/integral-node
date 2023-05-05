/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import { IntegralApi } from "@integralapi/node";
import * as core from "../../../../core";

export const EndpointPreProcessType: core.serialization.ObjectSchema<
    serializers.EndpointPreProcessType.Raw,
    IntegralApi.EndpointPreProcessType
> = core.serialization.object({
    id: core.serialization.string(),
});

export declare namespace EndpointPreProcessType {
    interface Raw {
        id: string;
    }
}