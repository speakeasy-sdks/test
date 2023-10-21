<!-- Start SDK Example Usage -->


```typescript
import { Test } from "Test";
import { PetStatus } from "Test/dist/sdk/models/shared";

(async () => {
    const sdk = new Test({
        security: {
            petstoreAuth: "",
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
})();

```
<!-- End SDK Example Usage -->