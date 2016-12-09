import MdlBadge from './directives/badge/mdl-badge';
import MdlIcon from './directives/icon/mdl-icon';

export const directives = {
  MdlBadge,
  MdlIcon,
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
