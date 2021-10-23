import { defineInterface } from "@directus/shared/utils";
import InterfaceFileImage from "./fileimage.vue";

export default defineInterface({
  id: "fileimage",
  name: "Resim",
  description: "resim upload",
  icon: "insert_photo",
  component: InterfaceFileImage,
  types: ["uuid"],
  groups: ["file"],
  relational: true,
  options: [
    {
      field: "folder",
      name: "klasor",
      type: "uuid",
      meta: {
        width: "full",
        interface: "system-folder",
        note: "alan hint",
      },
      schema: {
        default_value: undefined,
      },
    },
  ],
  recommendedDisplays: ["image"],
});
