import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import HomeIndex from './views/HomeIndex.vue'
import HomePicture from './views/HomePicture.vue'
import HomeLog from './views/HomeLog.vue'

Vue.use(VueRouter)
const router = new VueRouter(
  {
    routes: [
      { path: '/', component: HomeIndex },
      { path: '/picture', component: HomePicture },

      { path: '/log', component: HomeLog }
    ]
  }
)
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
