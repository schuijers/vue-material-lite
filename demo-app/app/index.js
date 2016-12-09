import 'material-design-icons/iconfont/material-icons.css';
import 'material-design-lite/material';
import 'material-design-lite/material.css';

import Vue from 'vue';
import VueMaterialLite from '../../src';

import AppComponent from './app.component.vue';

Vue.use(VueMaterialLite);

new Vue({
  el: 'app',
  components: {
    app: AppComponent,
  },
  render: (h) => h('app'),
});
