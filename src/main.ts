import { createApp } from "vue";
import Antd from "ant-design-vue";
import lodash from "lodash";

import App from "./App.vue";
import router from "./router";
import store from "./store";

import "ant-design-vue/dist/antd.css";
import "@/assets/styles/global.scss";

import { registerGlobalComponent } from "./utils/import";

const app = createApp(App);

registerGlobalComponent(app);

app.use(Antd);

app.use(lodash, { name: "custom" });

app.use(store);

app.use(router);

app.mount("#app");
