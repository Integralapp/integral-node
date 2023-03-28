/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as environments from "../../../../environments";
import * as core from "../../../../core";
import { IntegralApi } from "@integralapi/node";
import urlJoin from "url-join";
import * as serializers from "../../../../serialization";
import * as errors from "../../../../errors";

export declare namespace Parse {
    interface Options {
        environment?: environments.IntegralApiEnvironment | string;
        apiKey: core.Supplier<string>;
        integralApplicationId: core.Supplier<string>;
    }
}

export class Parse {
    constructor(private readonly options: Parse.Options) {}

    /**
     * The main processor of information for any endpoint: API keys (paused and revoked), Versioning, Access Control, Field Validation, Billing, Dynamic Rate Limiting, and more.
     *
     */
    public async parse(request: IntegralApi.ParseApiRequest): Promise<IntegralApi.ParseApiRequestResponse> {
        const _response = await core.fetcher({
            url: urlJoin(this.options.environment ?? environments.IntegralApiEnvironment.Production, "/parse"),
            method: "POST",
            headers: {
                Authorization: await this._getAuthorizationHeader(),
                "Integral-Application-Id": await core.Supplier.get(this.options.integralApplicationId),
            },
            contentType: "application/json",
            body: await serializers.ParseApiRequest.jsonOrThrow(request, { unrecognizedObjectKeys: "strip" }),
        });
        if (_response.ok) {
            return await serializers.ParseApiRequestResponse.parseOrThrow(_response.body, {
                unrecognizedObjectKeys: "passthrough",
                allowUnrecognizedUnionMembers: true,
                allowUnrecognizedEnumValues: true,
            });
        }

        if (_response.error.reason === "status-code") {
            throw new errors.IntegralApiError({
                statusCode: _response.error.statusCode,
                body: _response.error.body,
            });
        }

        switch (_response.error.reason) {
            case "non-json":
                throw new errors.IntegralApiError({
                    statusCode: _response.error.statusCode,
                    body: _response.error.rawBody,
                });
            case "timeout":
                throw new errors.IntegralApiTimeoutError();
            case "unknown":
                throw new errors.IntegralApiError({
                    message: _response.error.errorMessage,
                });
        }
    }

    private async _getAuthorizationHeader() {
        const value = await core.Supplier.get(this.options.apiKey);
        if (value != null) {
            return value;
        }

        return undefined;
    }
}