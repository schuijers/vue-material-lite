import Vue from 'vue/dist/vue.js';

import MdlIcon from '../../../src/directives/icon/mdl-icon';

describe('The MdlIcon directive', () => {
  it('should add the \'material-icons\' class to the element', () => {
    const vm = new Vue({
      directives: {
        MdlIcon,
      },
      template: '<i v-mdl-icon>mood</div>',
    }).$mount();

    expect(vm.$el.classList.contains('material-icons')).toBeTruthy();
  });
});
