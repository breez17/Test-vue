import Vue from 'vue'
import Vuelidate from 'vuelidate';
import VCalendar from 'v-calendar';
import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.min.css';
import 'vue-material/dist/theme/default.css';
import App from './App.vue'
import store from './store'

Vue.config.productionTip = false;
Vue.use(VueMaterial);
Vue.use(Vuelidate);
Vue.use(VCalendar, {
  componentPrefix: 'vc',
});


new Vue({
  store,
  render: function (h) { return h(App) }
}).$mount('#app');
