# Store

## Overview

Access to Petstore orders

Find out more about our store
<http://swagger.io>
### Available Operations

* [deleteOrder](#deleteorder) - Delete purchase order by ID
* [getInventory](#getinventory) - Returns pet inventories by status
* [getOrderById](#getorderbyid) - Find purchase order by ID
* [placeOrderForm](#placeorderform) - Place an order for a pet
* [placeOrderJson](#placeorderjson) - Place an order for a pet
* [placeOrderRaw](#placeorderraw) - Place an order for a pet

## deleteOrder

For valid response try integer IDs with value < 1000. Anything above 1000 or nonintegers will generate API errors

### Example Usage

```typescript
import { Test } from "Test";
import { DeleteOrderResponse } from "Test/dist/sdk/models/operations";

const sdk = new Test({
  security: {
    petstoreAuth: "",
  },
});

sdk.store.deleteOrder({
  orderId: 135218,
}).then((res: DeleteOrderResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                      | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `request`                                                                      | [operations.DeleteOrderRequest](../../models/operations/deleteorderrequest.md) | :heavy_check_mark:                                                             | The request object to use for the request.                                     |
| `config`                                                                       | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                   | :heavy_minus_sign:                                                             | Available config options for making requests.                                  |


### Response

**Promise<[operations.DeleteOrderResponse](../../models/operations/deleteorderresponse.md)>**


## getInventory

Returns a map of status codes to quantities

### Example Usage

```typescript
import { Test } from "Test";
import { GetInventoryResponse, GetInventorySecurity } from "Test/dist/sdk/models/operations";

const sdk = new Test();
const operationSecurity: GetInventorySecurity = {
  apiKey: "",
};

sdk.store.getInventory(operationSecurity).then((res: GetInventoryResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                          | Type                                                                               | Required                                                                           | Description                                                                        |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `security`                                                                         | [operations.GetInventorySecurity](../../models/operations/getinventorysecurity.md) | :heavy_check_mark:                                                                 | The security requirements to use for the request.                                  |
| `config`                                                                           | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                       | :heavy_minus_sign:                                                                 | Available config options for making requests.                                      |


### Response

**Promise<[operations.GetInventoryResponse](../../models/operations/getinventoryresponse.md)>**


## getOrderById

For valid response try integer IDs with value <= 5 or > 10. Other values will generate exceptions.

### Example Usage

```typescript
import { Test } from "Test";
import { GetOrderByIdResponse } from "Test/dist/sdk/models/operations";

const sdk = new Test({
  security: {
    petstoreAuth: "",
  },
});

sdk.store.getOrderById({
  orderId: 18789,
}).then((res: GetOrderByIdResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                        | Type                                                                             | Required                                                                         | Description                                                                      |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `request`                                                                        | [operations.GetOrderByIdRequest](../../models/operations/getorderbyidrequest.md) | :heavy_check_mark:                                                               | The request object to use for the request.                                       |
| `config`                                                                         | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                     | :heavy_minus_sign:                                                               | Available config options for making requests.                                    |


### Response

**Promise<[operations.GetOrderByIdResponse](../../models/operations/getorderbyidresponse.md)>**


## placeOrderForm

Place a new order in the store

### Example Usage

```typescript
import { Test } from "Test";
import { PlaceOrderFormResponse } from "Test/dist/sdk/models/operations";
import { OrderStatus } from "Test/dist/sdk/models/shared";

const sdk = new Test({
  security: {
    petstoreAuth: "",
  },
});

sdk.store.placeOrderForm({
  complete: false,
  id: 10,
  petId: 198772,
  quantity: 7,
  shipDate: new Date("2022-05-20T13:30:46.463Z"),
  status: OrderStatus.Approved,
}).then((res: PlaceOrderFormResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                    | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `request`                                                    | [shared.Order](../../models/shared/order.md)                 | :heavy_check_mark:                                           | The request object to use for the request.                   |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |


### Response

**Promise<[operations.PlaceOrderFormResponse](../../models/operations/placeorderformresponse.md)>**


## placeOrderJson

Place a new order in the store

### Example Usage

```typescript
import { Test } from "Test";
import { PlaceOrderJsonResponse } from "Test/dist/sdk/models/operations";
import { OrderStatus } from "Test/dist/sdk/models/shared";

const sdk = new Test({
  security: {
    petstoreAuth: "",
  },
});

sdk.store.placeOrderJson({
  complete: false,
  id: 10,
  petId: 198772,
  quantity: 7,
  shipDate: new Date("2022-05-22T14:02:28.908Z"),
  status: OrderStatus.Approved,
}).then((res: PlaceOrderJsonResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                    | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `request`                                                    | [shared.Order](../../models/shared/order.md)                 | :heavy_check_mark:                                           | The request object to use for the request.                   |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |


### Response

**Promise<[operations.PlaceOrderJsonResponse](../../models/operations/placeorderjsonresponse.md)>**


## placeOrderRaw

Place a new order in the store

### Example Usage

```typescript
import { Test } from "Test";
import { PlaceOrderRawResponse } from "Test/dist/sdk/models/operations";
import { OrderStatus } from "Test/dist/sdk/models/shared";

const sdk = new Test({
  security: {
    petstoreAuth: "",
  },
});

sdk.store.placeOrderRaw("dolor".encode()).then((res: PlaceOrderRawResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                    | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `request`                                                    | [Uint8Array](../../models//.md)                              | :heavy_check_mark:                                           | The request object to use for the request.                   |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |


### Response

**Promise<[operations.PlaceOrderRawResponse](../../models/operations/placeorderrawresponse.md)>**

