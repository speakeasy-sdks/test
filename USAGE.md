<!-- Start SDK Example Usage [usage] -->
```typescript
import { Test } from "Test";
import { PetStatus } from "Test/dist/sdk/models/shared";

async function run() {
    const sdk = new Test({
        security: {
            petstoreAuth: "<YOUR_PETSTORE_AUTH_HERE>",
        },
    });

    const res = await sdk.pet.addPetForm({
        category: {
            id: 1,
            name: "Dogs",
        },
        id: 10,
        name: "doggie",
        photoUrls: ["<value>"],
        tags: [{}],
    });

    if (res.statusCode == 200) {
        // handle response
    }
}

run();

```
<!-- End SDK Example Usage [usage] -->