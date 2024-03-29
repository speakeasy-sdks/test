/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../../../sdk/models/shared";
import { AxiosResponse } from "axios";

export class UpdateUserFormRequest extends SpeakeasyBase {
    /**
     * Update an existent user in the store
     */
    @SpeakeasyMetadata({ data: "request, media_type=application/x-www-form-urlencoded" })
    user?: shared.User;

    /**
     * name that needs to be updated
     */
    @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=username" })
    username: string;
}

export class UpdateUserFormResponse extends SpeakeasyBase {
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
