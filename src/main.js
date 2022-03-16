import Vue from 'vue';
import App from './App.vue'
import HTable from '../packages/index';

Vue.use(HTable)

new Vue({
  render: h => h(App)
}).$mount('#app')

