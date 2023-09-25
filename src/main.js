import { createApp } from 'vue'
import App from "./App.vue";
import * as Vue from 'vue' // in Vue 3
import axios from 'axios'
import VueAxios from 'vue-axios'
import { createPinia } from 'pinia'
import BootstrapVue3 from 'bootstrap-vue-3'
import mitt from "mitt";

// Bootstrap
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue-3/dist/bootstrap-vue-3.css'

// Import Font Awesome
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faUserSecret } from '@fortawesome/free-solid-svg-icons';

library.add(faUserSecret);

const pinia = createPinia();
const emitter = mitt();

// Axios 
const app = createApp(App)
  .component("font-awesome-icon", FontAwesomeIcon)
  .use(VueAxios, axios)
  .use(pinia)
  .use(BootstrapVue3);
app.config.globalProperties.emitter = emitter;
app.mount("#app");
