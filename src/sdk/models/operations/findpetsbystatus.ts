/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../../../sdk/models/shared";
import { AxiosResponse } from "axios";

/**
 * Status values that need to be considered for filter
 */
export enum Status {
    Available = "available",
    Pending = "pending",
    Sold = "sold",
}

export class FindPetsByStatusRequest extends SpeakeasyBase {
    /**
     * Status values that need to be considered for filter
     */
    @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=status" })
    status?: Status;
}

export class FindPetsByStatusResponse extends SpeakeasyBase {
    /**
     * successful operation
     */
    @SpeakeasyMetadata({ elemType: shared.Pet })
    twoHundredApplicationJsonClasses?: shared.Pet[];

    @SpeakeasyMetadata()
    body?: Uint8Array;

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
