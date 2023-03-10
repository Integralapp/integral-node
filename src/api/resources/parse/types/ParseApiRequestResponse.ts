/**
 * This file was auto-generated by Fern from our API Definition.
 */

import { IntegralApi } from "@integralapi/node";

export interface ParseApiRequestResponse {
    apiKey: IntegralApi.ApiKeyParseResponse;
    statusCode: number;
    user: IntegralApi.UserParseResponse;
    application: IntegralApi.ApplicationParseResponse;
    returnBackToUser: IntegralApi.ReturnBackToUserResponse;
}
