import Vue from 'vue';
import App from './App.vue';
import {ClueWindow} from '@/common/clue.window';

Vue.config.productionTip = false;
declare let window: ClueWindow;
console.log(window.manipulateComp);
// window.haha;


new Vue({
  render: (h) => h(App),
}).$mount('#app');
