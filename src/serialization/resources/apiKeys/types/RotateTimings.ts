/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import { IntegralApi } from "@integralapi/node";
import * as core from "../../../../core";

export const RotateTimings: core.serialization.Schema<serializers.RotateTimings.Raw, IntegralApi.RotateTimings> =
    core.serialization.enum_(["now", "1h", "24h", "3d", "7d"]);

export declare namespace RotateTimings {
    type Raw = "now" | "1h" | "24h" | "3d" | "7d";
}