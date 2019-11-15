import Vue from "vue";

import App from "./App.vue";
import router from "./router";
import store from "./vuex";

Vue.config.productionTip = true;

new Vue({
  router,
  store,
  render: (h : any) => h(App)
}).$mount("#app");
