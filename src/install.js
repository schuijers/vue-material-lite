import MdlBadge from './directives/badge/mdl-badge';

export const directives = {
  MdlBadge,
};

/**
 * Register all components and directives with Vue.
 * @export
 * @param {any} Vue
 */
export function install(Vue) {
  if (install.installed) {
    return;
  }

  install.installed = true;

  Object.keys(directives).forEach((name) => {
    Vue.directive(name, directives[name]);
  });
}
