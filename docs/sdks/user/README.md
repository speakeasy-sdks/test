# User
(*user*)

## Overview

Operations about user

### Available Operations

* [createUserForm](#createuserform) - Create user
* [createUserJson](#createuserjson) - Create user
* [createUserRaw](#createuserraw) - Create user
* [createUsersWithListInput](#createuserswithlistinput) - Creates list of users with given input array
* [deleteUser](#deleteuser) - Delete user
* [getUserByName](#getuserbyname) - Get user by user name
* [loginUser](#loginuser) - Logs user into the system
* [logoutUser](#logoutuser) - Logs out current logged in user session
* [updateUserForm](#updateuserform) - Update user
* [updateUserJson](#updateuserjson) - Update user
* [updateUserRaw](#updateuserraw) - Update user

## createUserForm

This can only be done by the logged in user.

### Example Usage

```typescript
import { Test } from "Test";

async function run() {
  const sdk = new Test({
    security: {
      petstoreAuth: "Bearer <YOUR_ACCESS_TOKEN_HERE>",
    },
  });

  const res = await sdk.user.createUserForm({
    email: {
      email: "john@email.com",
      firstName: "John",
      id: 10,
      lastName: "James",
      password: "12345",
      phone: "12345",
      userStatus: 1,
      username: "theUser",
    },
    firstName: {
      email: "john@email.com",
      firstName: "John",
      id: 10,
      lastName: "James",
      password: "12345",
      phone: "12345",
      userStatus: 1,
      username: "theUser",
    },
    id: {
      email: "john@email.com",
      firstName: "John",
      id: 10,
      lastName: "James",
      password: "12345",
      phone: "12345",
      userStatus: 1,
      username: "theUser",
    },
    lastName: {
      email: "john@email.com",
      firstName: "John",
      id: 10,
      lastName: "James",
      password: "12345",
      phone: "12345",
      userStatus: 1,
      username: "theUser",
    },
    password: {
      email: "john@email.com",
      firstName: "John",
      id: 10,
      lastName: "James",
      password: "12345",
      phone: "12345",
      userStatus: 1,
      username: "theUser",
    },
    phone: {
      email: "john@email.com",
      firstName: "John",
      id: 10,
      lastName: "James",
      password: "12345",
      phone: "12345",
      userStatus: 1,
      username: "theUser",
    },
    userStatus: {
      email: "john@email.com",
      firstName: "John",
      id: 10,
      lastName: "James",
      password: "12345",
      phone: "12345",
      userStatus: 1,
      username: "theUser",
    },
    username: {
      email: "john@email.com",
      firstName: "John",
      id: 10,
      lastName: "James",
      password: "12345",
      phone: "12345",
      userStatus: 1,
      username: "theUser",
    },
  });

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                    | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `request`                                                    | [shared.User](../../sdk/models/shared/user.md)               | :heavy_check_mark:                                           | The request object to use for the request.                   |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |


### Response

**Promise<[operations.CreateUserFormResponse](../../sdk/models/operations/createuserformresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

## createUserJson

This can only be done by the logged in user.

### Example Usage

```typescript
import { Test } from "Test";

async function run() {
  const sdk = new Test({
    security: {
      petstoreAuth: "Bearer <YOUR_ACCESS_TOKEN_HERE>",
    },
  });

  const res = await sdk.user.createUserJson({
    email: {
      email: "john@email.com",
      firstName: "John",
      id: 10,
      lastName: "James",
      password: "12345",
      phone: "12345",
      userStatus: 1,
      username: "theUser",
    },
    firstName: {
      email: "john@email.com",
      firstName: "John",
      id: 10,
      lastName: "James",
      password: "12345",
      phone: "12345",
      userStatus: 1,
      username: "theUser",
    },
    id: {
      email: "john@email.com",
      firstName: "John",
      id: 10,
      lastName: "James",
      password: "12345",
      phone: "12345",
      userStatus: 1,
      username: "theUser",
    },
    lastName: {
      email: "john@email.com",
      firstName: "John",
      id: 10,
      lastName: "James",
      password: "12345",
      phone: "12345",
      userStatus: 1,
      username: "theUser",
    },
    password: {
      email: "john@email.com",
      firstName: "John",
      id: 10,
      lastName: "James",
      password: "12345",
      phone: "12345",
      userStatus: 1,
      username: "theUser",
    },
    phone: {
      email: "john@email.com",
      firstName: "John",
      id: 10,
      lastName: "James",
      password: "12345",
      phone: "12345",
      userStatus: 1,
      username: "theUser",
    },
    userStatus: {
      email: "john@email.com",
      firstName: "John",
      id: 10,
      lastName: "James",
      password: "12345",
      phone: "12345",
      userStatus: 1,
      username: "theUser",
    },
    username: {
      email: "john@email.com",
      firstName: "John",
      id: 10,
      lastName: "James",
      password: "12345",
      phone: "12345",
      userStatus: 1,
      username: "theUser",
    },
  });

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                    | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `request`                                                    | [shared.User](../../sdk/models/shared/user.md)               | :heavy_check_mark:                                           | The request object to use for the request.                   |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |


### Response

**Promise<[operations.CreateUserJsonResponse](../../sdk/models/operations/createuserjsonresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

## createUserRaw

This can only be done by the logged in user.

### Example Usage

```typescript
import { Test } from "Test";

async function run() {
  const sdk = new Test({
    security: {
      petstoreAuth: "Bearer <YOUR_ACCESS_TOKEN_HERE>",
    },
  });

  const res = await sdk.user.createUserRaw(new TextEncoder().encode("0xB4dDB1Eeed"));

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                    | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `request`                                                    | [Uint8Array](../../models/.md)                               | :heavy_check_mark:                                           | The request object to use for the request.                   |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |


### Response

**Promise<[operations.CreateUserRawResponse](../../sdk/models/operations/createuserrawresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

## createUsersWithListInput

Creates list of users with given input array

### Example Usage

```typescript
import { Test } from "Test";

async function run() {
  const sdk = new Test({
    security: {
      petstoreAuth: "Bearer <YOUR_ACCESS_TOKEN_HERE>",
    },
  });

  const res = await sdk.user.createUsersWithListInput([
    {
      email: {
        email: "john@email.com",
        firstName: "John",
        id: 10,
        lastName: "James",
        password: "12345",
        phone: "12345",
        userStatus: 1,
        username: "theUser",
      },
      firstName: {
        email: "john@email.com",
        firstName: "John",
        id: 10,
        lastName: "James",
        password: "12345",
        phone: "12345",
        userStatus: 1,
        username: "theUser",
      },
      id: {
        email: "john@email.com",
        firstName: "John",
        id: 10,
        lastName: "James",
        password: "12345",
        phone: "12345",
        userStatus: 1,
        username: "theUser",
      },
      lastName: {
        email: "john@email.com",
        firstName: "John",
        id: 10,
        lastName: "James",
        password: "12345",
        phone: "12345",
        userStatus: 1,
        username: "theUser",
      },
      password: {
        email: "john@email.com",
        firstName: "John",
        id: 10,
        lastName: "James",
        password: "12345",
        phone: "12345",
        userStatus: 1,
        username: "theUser",
      },
      phone: {
        email: "john@email.com",
        firstName: "John",
        id: 10,
        lastName: "James",
        password: "12345",
        phone: "12345",
        userStatus: 1,
        username: "theUser",
      },
      userStatus: {
        email: "john@email.com",
        firstName: "John",
        id: 10,
        lastName: "James",
        password: "12345",
        phone: "12345",
        userStatus: 1,
        username: "theUser",
      },
      username: {
        email: "john@email.com",
        firstName: "John",
        id: 10,
        lastName: "James",
        password: "12345",
        phone: "12345",
        userStatus: 1,
        username: "theUser",
      },
    },
  ]);

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                    | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `request`                                                    | [shared.User[]](../../models/.md)                            | :heavy_check_mark:                                           | The request object to use for the request.                   |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |


### Response

**Promise<[operations.CreateUsersWithListInputResponse](../../sdk/models/operations/createuserswithlistinputresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

## deleteUser

This can only be done by the logged in user.

### Example Usage

```typescript
import { Test } from "Test";

async function run() {
  const sdk = new Test({
    security: {
      petstoreAuth: "Bearer <YOUR_ACCESS_TOKEN_HERE>",
    },
  });

  const res = await sdk.user.deleteUser({
    username: "Demetris_Torphy",
  });

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                                        | Type                                                                             | Required                                                                         | Description                                                                      |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `request`                                                                        | [operations.DeleteUserRequest](../../sdk/models/operations/deleteuserrequest.md) | :heavy_check_mark:                                                               | The request object to use for the request.                                       |
| `config`                                                                         | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                     | :heavy_minus_sign:                                                               | Available config options for making requests.                                    |


### Response

**Promise<[operations.DeleteUserResponse](../../sdk/models/operations/deleteuserresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

## getUserByName

Get user by user name

### Example Usage

```typescript
import { Test } from "Test";

async function run() {
  const sdk = new Test({
    security: {
      petstoreAuth: "Bearer <YOUR_ACCESS_TOKEN_HERE>",
    },
  });

  const res = await sdk.user.getUserByName({
    username: "Zachery_Schneider",
  });

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                                              | Type                                                                                   | Required                                                                               | Description                                                                            |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `request`                                                                              | [operations.GetUserByNameRequest](../../sdk/models/operations/getuserbynamerequest.md) | :heavy_check_mark:                                                                     | The request object to use for the request.                                             |
| `config`                                                                               | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                           | :heavy_minus_sign:                                                                     | Available config options for making requests.                                          |


### Response

**Promise<[operations.GetUserByNameResponse](../../sdk/models/operations/getuserbynameresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

## loginUser

Logs user into the system

### Example Usage

```typescript
import { Test } from "Test";

async function run() {
  const sdk = new Test({
    security: {
      petstoreAuth: "Bearer <YOUR_ACCESS_TOKEN_HERE>",
    },
  });

  const res = await sdk.user.loginUser({});

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                                      | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `request`                                                                      | [operations.LoginUserRequest](../../sdk/models/operations/loginuserrequest.md) | :heavy_check_mark:                                                             | The request object to use for the request.                                     |
| `config`                                                                       | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                   | :heavy_minus_sign:                                                             | Available config options for making requests.                                  |


### Response

**Promise<[operations.LoginUserResponse](../../sdk/models/operations/loginuserresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

## logoutUser

Logs out current logged in user session

### Example Usage

```typescript
import { Test } from "Test";

async function run() {
  const sdk = new Test({
    security: {
      petstoreAuth: "Bearer <YOUR_ACCESS_TOKEN_HERE>",
    },
  });

  const res = await sdk.user.logoutUser();

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                    | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |


### Response

**Promise<[operations.LogoutUserResponse](../../sdk/models/operations/logoutuserresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

## updateUserForm

This can only be done by the logged in user.

### Example Usage

```typescript
import { Test } from "Test";

async function run() {
  const sdk = new Test({
    security: {
      petstoreAuth: "Bearer <YOUR_ACCESS_TOKEN_HERE>",
    },
  });

  const res = await sdk.user.updateUserForm({
    user: {
      email: {
        email: "john@email.com",
        firstName: "John",
        id: 10,
        lastName: "James",
        password: "12345",
        phone: "12345",
        userStatus: 1,
        username: "theUser",
      },
      firstName: {
        email: "john@email.com",
        firstName: "John",
        id: 10,
        lastName: "James",
        password: "12345",
        phone: "12345",
        userStatus: 1,
        username: "theUser",
      },
      id: {
        email: "john@email.com",
        firstName: "John",
        id: 10,
        lastName: "James",
        password: "12345",
        phone: "12345",
        userStatus: 1,
        username: "theUser",
      },
      lastName: {
        email: "john@email.com",
        firstName: "John",
        id: 10,
        lastName: "James",
        password: "12345",
        phone: "12345",
        userStatus: 1,
        username: "theUser",
      },
      password: {
        email: "john@email.com",
        firstName: "John",
        id: 10,
        lastName: "James",
        password: "12345",
        phone: "12345",
        userStatus: 1,
        username: "theUser",
      },
      phone: {
        email: "john@email.com",
        firstName: "John",
        id: 10,
        lastName: "James",
        password: "12345",
        phone: "12345",
        userStatus: 1,
        username: "theUser",
      },
      userStatus: {
        email: "john@email.com",
        firstName: "John",
        id: 10,
        lastName: "James",
        password: "12345",
        phone: "12345",
        userStatus: 1,
        username: "theUser",
      },
      username: {
        email: "john@email.com",
        firstName: "John",
        id: 10,
        lastName: "James",
        password: "12345",
        phone: "12345",
        userStatus: 1,
        username: "theUser",
      },
    },
    username: "Bo_Lynch4",
  });

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                                                | Type                                                                                     | Required                                                                                 | Description                                                                              |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `request`                                                                                | [operations.UpdateUserFormRequest](../../sdk/models/operations/updateuserformrequest.md) | :heavy_check_mark:                                                                       | The request object to use for the request.                                               |
| `config`                                                                                 | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                             | :heavy_minus_sign:                                                                       | Available config options for making requests.                                            |


### Response

**Promise<[operations.UpdateUserFormResponse](../../sdk/models/operations/updateuserformresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

## updateUserJson

This can only be done by the logged in user.

### Example Usage

```typescript
import { Test } from "Test";

async function run() {
  const sdk = new Test({
    security: {
      petstoreAuth: "Bearer <YOUR_ACCESS_TOKEN_HERE>",
    },
  });

  const res = await sdk.user.updateUserJson({
    user: {
      email: {
        email: "john@email.com",
        firstName: "John",
        id: 10,
        lastName: "James",
        password: "12345",
        phone: "12345",
        userStatus: 1,
        username: "theUser",
      },
      firstName: {
        email: "john@email.com",
        firstName: "John",
        id: 10,
        lastName: "James",
        password: "12345",
        phone: "12345",
        userStatus: 1,
        username: "theUser",
      },
      id: {
        email: "john@email.com",
        firstName: "John",
        id: 10,
        lastName: "James",
        password: "12345",
        phone: "12345",
        userStatus: 1,
        username: "theUser",
      },
      lastName: {
        email: "john@email.com",
        firstName: "John",
        id: 10,
        lastName: "James",
        password: "12345",
        phone: "12345",
        userStatus: 1,
        username: "theUser",
      },
      password: {
        email: "john@email.com",
        firstName: "John",
        id: 10,
        lastName: "James",
        password: "12345",
        phone: "12345",
        userStatus: 1,
        username: "theUser",
      },
      phone: {
        email: "john@email.com",
        firstName: "John",
        id: 10,
        lastName: "James",
        password: "12345",
        phone: "12345",
        userStatus: 1,
        username: "theUser",
      },
      userStatus: {
        email: "john@email.com",
        firstName: "John",
        id: 10,
        lastName: "James",
        password: "12345",
        phone: "12345",
        userStatus: 1,
        username: "theUser",
      },
      username: {
        email: "john@email.com",
        firstName: "John",
        id: 10,
        lastName: "James",
        password: "12345",
        phone: "12345",
        userStatus: 1,
        username: "theUser",
      },
    },
    username: "Alanna_Waters81",
  });

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                                                | Type                                                                                     | Required                                                                                 | Description                                                                              |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `request`                                                                                | [operations.UpdateUserJsonRequest](../../sdk/models/operations/updateuserjsonrequest.md) | :heavy_check_mark:                                                                       | The request object to use for the request.                                               |
| `config`                                                                                 | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                             | :heavy_minus_sign:                                                                       | Available config options for making requests.                                            |


### Response

**Promise<[operations.UpdateUserJsonResponse](../../sdk/models/operations/updateuserjsonresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

## updateUserRaw

This can only be done by the logged in user.

### Example Usage

```typescript
import { Test } from "Test";

async function run() {
  const sdk = new Test({
    security: {
      petstoreAuth: "Bearer <YOUR_ACCESS_TOKEN_HERE>",
    },
  });

  const res = await sdk.user.updateUserRaw({
    requestBody: new TextEncoder().encode("0xf4D36eFb83"),
    username: "Eleonore2",
  });

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                                              | Type                                                                                   | Required                                                                               | Description                                                                            |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `request`                                                                              | [operations.UpdateUserRawRequest](../../sdk/models/operations/updateuserrawrequest.md) | :heavy_check_mark:                                                                     | The request object to use for the request.                                             |
| `config`                                                                               | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                           | :heavy_minus_sign:                                                                     | Available config options for making requests.                                          |


### Response

**Promise<[operations.UpdateUserRawResponse](../../sdk/models/operations/updateuserrawresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |
