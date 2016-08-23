import Vue from 'vue';
import entry from './app';
import VueRouter from 'vue-router';
import configRouter from './route.config';
import Element from 'main/index.js';
import 'packages/theme-default/src/index.css';
import demoBlock from './components/demo-block.vue';

Vue.use(Element);
Vue.use(VueRouter);
Vue.component('demo-block', demoBlock);

const router = new VueRouter({
  base: __dirname,
  routes: configRouter
});

new Vue({ // eslint-disable-line
  render: h => h(entry),
  router
}).$mount('#app');
