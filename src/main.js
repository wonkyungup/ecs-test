import Vue from 'vue'
import App from './App.vue'
import Vuetify from 'vuetify'
import router  from './routes'
import store from './store'
import 'vuetify/dist/vuetify.min.css'
import '@mdi/font/css/materialdesignicons.min.css'
import 'material-design-icons-iconfont/dist/material-design-icons.css'
import '@/assets/style/style.css'

Vue.config.productionTip = false
Vue.use(Vuetify)

new Vue({
  vuetify: new Vuetify({
    buttons: {
      capitalize: false,
    },
    icons: {
      iconfont: 'mdi'
    },
    theme: {
      dark: true,
      options: {
        cspNonce: 'dQw4w9WgXcQ'
      }
    }
  }),
  router,
  store,
  render: h => h(App)
}).$mount('#app')
