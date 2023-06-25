import Vue from 'vue'
import App from './App.vue'
import tinymce from 'tinymce'
import VueTinymce from '@packy-tang/vue-tinymce'

Vue.prototype.$tinymce = tinymce
Vue.use(VueTinymce)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
