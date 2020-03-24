//vue构造函数
import Vue from "vue";
//App组件
import App from "./App.vue";
//路由对象
import router from "./router";

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
