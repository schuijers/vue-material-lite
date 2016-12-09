import Vue from 'vue/dist/vue.js';

import MdlBadge from '../../../src/directives/badge/mdl-badge';

describe('The MdlBadge directive', () => {
  it('should add the \'mdl-badge\' class to the element', () => {
    const vm = new Vue({
      directives: {
        MdlBadge,
      },
      template: '<div v-mdl-badge="1">Messages</div>',
    }).$mount();

    expect(vm.$el.classList.contains('mdl-badge')).toBeTruthy();
  });

  it('should add the \'data-badge\' attribute to the element', () => {
    const vm = new Vue({
      directives: {
        MdlBadge,
      },
      template: '<div v-mdl-badge="1">Messages</div>',
    }).$mount();

    expect(vm.$el.hasAttribute('data-badge')).toBeTruthy();
    expect(vm.$el.getAttribute('data-badge')).toEqual('1');
  });

  it('should add the \'mdl-badge--no-background\' class to the element if the \'no-background\' modifier is present', () => {
    const vm = new Vue({
      directives: {
        MdlBadge,
      },
      template: '<div v-mdl-badge.no-background="1">Messages</div>',
    }).$mount();

    expect(vm.$el.classList.contains('mdl-badge--no-background')).toBeTruthy();
  });

  it('should add the \'mdl-badge--overlap\' class to the element if the \'overlap\' modifier is present', () => {
    const vm = new Vue({
      directives: {
        MdlBadge,
      },
      template: '<div v-mdl-badge.overlap="1">Messages</div>',
    }).$mount();

    expect(vm.$el.classList.contains('mdl-badge--overlap')).toBeTruthy();
  });
});
