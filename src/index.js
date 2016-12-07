import MdlBadge from './directives/badge/mdl-badge';

export const directives = {
  MdlBadge,
};

export default {
  install(Vue) {
    Object.keys(directives).forEach((name) => {
      Vue.directive(name, directives[name]);
    });
  },
};

export {
  MdlBadge,
};
