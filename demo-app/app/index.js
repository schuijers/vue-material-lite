import 'material-design-icons/iconfont/material-icons.css';
import 'material-design-lite/material';
import 'material-design-lite/material.css';

import Vue from 'vue';

import AppComponent from './app.component.vue';

new Vue({
  el: 'app',
  components: {
    app: AppComponent,
  },
  render: (h) => h('app'),
});
