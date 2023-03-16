import Vue from "vue"
import App from "./App.vue"
import router from "./router"
import store from "./store"
import axios from "axios"
import VueAxios from "vue-axios"
import VueCookie from "vue-cookie"
import "./registerServiceWorker"
import vuetify from "./plugins/vuetify"

const { VUE_APP_API_URL } = process.env
axios.defaults.baseURL = VUE_APP_API_URL

Vue.use(VueCookie)
Vue.use(VueAxios, axios)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  vuetify,
  render: (h) => h(App),
}).$mount("#app")
