import { createApp } from "vue";
import Antd from "ant-design-vue";

import App from "./App.vue";
import router from "./router";
import store from "./store";

import "ant-design-vue/dist/antd.css";
import "@/assets/styles/global.css";

import { registerGlobalComponent } from "./utils/import";

const app = createApp(App);

registerGlobalComponent(app);

app.use(Antd);

app.use(store);

app.use(router);

app.mount("#app");
