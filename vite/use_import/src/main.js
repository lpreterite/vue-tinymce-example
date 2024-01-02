import Vue from "vue";
import App from "./App.vue";
import router from "./router";

import "tinymce";
//样式
// import "tinymce/skins/content/default/content.min.css"; //默认模式下添加并不会起效果，开启内联模式时，请加上。
import "tinymce/skins/ui/oxide/skin.min.css";
// import "tinymce/skins/ui/oxide/content.min.css"; //此处引用内容为编辑器文本区域的内部样式，需在编辑器设置中引入。

//主题
import "tinymce/themes/silver";

//插件
import "tinymce/plugins/link"; //链接插件
import "tinymce/plugins/image"; //图片插件
import "tinymce/plugins/media"; //媒体插件
import "tinymce/plugins/table"; //表格插件
import "tinymce/plugins/lists"; //列表插件
import "tinymce/plugins/quickbars"; //快速栏插件
import "tinymce/plugins/fullscreen"; //全屏插件

/**
 * 注：
 * 5.3.x版本需要额外引进图标，没有所有按钮就会显示not found
 */
import "tinymce/icons/default/icons";

//本地化
import "./utils/tinymce/langs/zh_CN.js";

import TinymceVue from "@tinymce/tinymce-vue";
Vue.component("TinymceVue", TinymceVue);

Vue.config.productionTip = false;

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
