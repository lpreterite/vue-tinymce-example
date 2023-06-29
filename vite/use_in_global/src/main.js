import Vue from "vue";
import App from "./App.vue";
import router from "./router";

//本地化
import "./utils/tinymce/langs/zh_CN.js";

import TinymceVue from "@tinymce/tinymce-vue";
Vue.component("TinymceVue", TinymceVue);

Vue.config.productionTip = false;

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
