import {install} from './install';

/**
 * Main class.
 * @export
 * @class VueMaterialLite
 */
export default class VueMaterialLite {
}

VueMaterialLite.install = install;

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(VueMaterialLite);
}
