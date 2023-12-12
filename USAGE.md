<!-- Start SDK Example Usage [usage] -->
```typescript
import { Test } from "Test";
import { PetStatus } from "Test/dist/sdk/models/shared";

async function run() {
    const sdk = new Test({
        security: {
            petstoreAuth: "Bearer <YOUR_ACCESS_TOKEN_HERE>",
        },
    });

    const res = await sdk.pet.addPetForm({
        category: {
            id: 1,
            name: "Dogs",
        },
        id: 10,
        name: "doggie",
        photoUrls: ["string"],
        tags: [{}],
    });

    if (res.statusCode == 200) {
        // handle response
    }
}

run();

```
<!-- End SDK Example Usage [usage] -->