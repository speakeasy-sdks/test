/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";

export class AddPetFormResponse extends SpeakeasyBase {
    @SpeakeasyMetadata()
    body?: Uint8Array;

    @SpeakeasyMetadata()
    contentType: string;

    /**
     * Successful operation
     */
    @SpeakeasyMetadata()
    pet?: shared.Pet;

    @SpeakeasyMetadata()
    statusCode: number;

    @SpeakeasyMetadata()
    rawResponse?: AxiosResponse;
}
