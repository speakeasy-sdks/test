/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { AxiosResponse } from "axios";

export class UpdateUserRawRequest extends SpeakeasyBase {
    /**
     * Update an existent user in the store
     */
    @SpeakeasyMetadata({ data: "request, media_type=application/xml" })
    requestBody?: Uint8Array;

    /**
     * name that needs to be updated
     */
    @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=username" })
    username: string;
}

export class UpdateUserRawResponse extends SpeakeasyBase {
    /**
     * HTTP response content type for this operation
     */
    @SpeakeasyMetadata()
    contentType: string;

    /**
     * HTTP response status code for this operation
     */
    @SpeakeasyMetadata()
    statusCode: number;

    /**
     * Raw HTTP response; suitable for custom response parsing
     */
    @SpeakeasyMetadata()
    rawResponse: AxiosResponse;
}
