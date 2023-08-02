/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import { IntegralApi } from "@integralapi/node";
import * as core from "../../../../core";

export const Organization: core.serialization.ObjectSchema<serializers.Organization.Raw, IntegralApi.Organization> =
    core.serialization.object({
        id: core.serialization.string(),
        createdAt: core.serialization.string(),
        updatedAt: core.serialization.string(),
        deletedAt: core.serialization.string().optional(),
        name: core.serialization.string(),
    });

export declare namespace Organization {
    interface Raw {
        id: string;
        createdAt: string;
        updatedAt: string;
        deletedAt?: string | null;
        name: string;
    }
}
