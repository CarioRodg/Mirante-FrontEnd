import Vue from 'vue';
import App from './App.vue';
import http from "./http/index";

import "bootstrap/dist/css/bootstrap.css";
import "font-awesome/css/font-awesome.css";
import Vuelidate from 'vuelidate'
import { VueMaskDirective } from "v-mask";

Vue.config.productionTip = false
Vue.prototype.$http = http;
Vue.use(Vuelidate);
Vue.directive("mask", VueMaskDirective);

new Vue({
  render: h => h(App),
}).$mount('#app')
