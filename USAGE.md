<!-- Start SDK Example Usage [usage] -->
```typescript
import { Test } from "Test";
import {
    PetSchemasCategoryStatus,
    PetSchemasNameStatus,
    PetSchemasPhotoUrlsStatus,
    PetSchemasStatus,
    PetSchemasStatusStatus,
    PetSchemasTagsStatus,
} from "Test/dist/sdk/models/shared";

async function run() {
    const sdk = new Test({
        security: {
            petstoreAuth: "Bearer <YOUR_ACCESS_TOKEN_HERE>",
        },
    });

    const res = await sdk.pet.addPetForm({
        category: {
            category: {
                id: {
                    id: 1,
                    name: "Dogs",
                },
                name: {
                    id: 1,
                    name: "Dogs",
                },
            },
            id: 10,
            name: "doggie",
            photoUrls: ["<value>"],
            tags: [
                {
                    id: {},
                    name: {},
                },
            ],
        },
        id: {
            category: {
                id: {
                    id: 1,
                    name: "Dogs",
                },
                name: {
                    id: 1,
                    name: "Dogs",
                },
            },
            id: 10,
            name: "doggie",
            photoUrls: ["<value>"],
            tags: [
                {
                    id: {},
                    name: {},
                },
            ],
        },
        name: {
            category: {
                id: {
                    id: 1,
                    name: "Dogs",
                },
                name: {
                    id: 1,
                    name: "Dogs",
                },
            },
            id: 10,
            name: "doggie",
            photoUrls: ["<value>"],
            tags: [
                {
                    id: {},
                    name: {},
                },
            ],
        },
        photoUrls: {
            category: {
                id: {
                    id: 1,
                    name: "Dogs",
                },
                name: {
                    id: 1,
                    name: "Dogs",
                },
            },
            id: 10,
            name: "doggie",
            photoUrls: ["<value>"],
            tags: [
                {
                    id: {},
                    name: {},
                },
            ],
        },
        status: {
            category: {
                id: {
                    id: 1,
                    name: "Dogs",
                },
                name: {
                    id: 1,
                    name: "Dogs",
                },
            },
            id: 10,
            name: "doggie",
            photoUrls: ["<value>"],
            tags: [
                {
                    id: {},
                    name: {},
                },
            ],
        },
        tags: {
            category: {
                id: {
                    id: 1,
                    name: "Dogs",
                },
                name: {
                    id: 1,
                    name: "Dogs",
                },
            },
            id: 10,
            name: "doggie",
            photoUrls: ["<value>"],
            tags: [
                {
                    id: {},
                    name: {},
                },
            ],
        },
    });

    if (res.statusCode == 200) {
        // handle response
    }
}

run();

```
<!-- End SDK Example Usage [usage] -->