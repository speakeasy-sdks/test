<!-- Start SDK Example Usage -->


```typescript
import { Test } from "Test";
import { AddPetFormResponse } from "Test/dist/sdk/models/operations";
import { PetStatus } from "Test/dist/sdk/models/shared";

const sdk = new Test({
  security: {
    petstoreAuth: "",
  },
});

sdk.pet.addPetForm({
  category: {
    id: 1,
    name: "Dogs",
  },
  id: 10,
  name: "doggie",
  photoUrls: [
    "corrupti",
  ],
  status: PetStatus.Pending,
  tags: [
    {
      id: 715190,
      name: "Stuart Stiedemann",
    },
  ],
}).then((res: AddPetFormResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```
<!-- End SDK Example Usage -->