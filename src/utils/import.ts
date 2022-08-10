import { defineAsyncComponent } from "vue";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faUserSecret } from "@fortawesome/free-solid-svg-icons";

library.add(faUserSecret);

export function registerGlobalComponent(app: any) {
  app.component(
    "default-layout",
    defineAsyncComponent(() => import("@/layouts/default.vue"))
  );

  app.component(
    "auth-layout",
    defineAsyncComponent(() => import("@/layouts/auth.vue"))
  );

  app.component("font-awesome-icon", FontAwesomeIcon);
}
