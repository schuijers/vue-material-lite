(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("VueMaterialLite", [], factory);
	else if(typeof exports === 'object')
		exports["VueMaterialLite"] = factory();
	else
		root["VueMaterialLite"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmory imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmory exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		Object.defineProperty(exports, name, {
/******/ 			configurable: false,
/******/ 			enumerable: true,
/******/ 			get: getter
/******/ 		});
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.directives = undefined;
exports.install = install;

var _mdlBadge = __webpack_require__(1);

var _mdlBadge2 = _interopRequireDefault(_mdlBadge);

var _mdlIcon = __webpack_require__(2);

var _mdlIcon2 = _interopRequireDefault(_mdlIcon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var directives = exports.directives = {
  MdlBadge: _mdlBadge2.default,
  MdlIcon: _mdlIcon2.default
};

/**
 * Register all components and directives with Vue.
 * @export
 * @param {any} Vue
 */
function install(Vue) {
  if (install.installed) {
    return;
  }

  install.installed = true;

  Object.keys(directives).forEach(function (name) {
    Vue.directive(name, directives[name]);
  });
}

/***/ },
/* 1 */
/***/ function(module, exports) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  bind: function bind(el, binding) {
    el.classList.add('mdl-badge');
    el.setAttribute('data-badge', binding.value);

    if (binding.modifiers['no-background']) {
      el.classList.add('mdl-badge--no-background');
    }

    if (binding.modifiers.overlap) {
      el.classList.add('mdl-badge--overlap');
    }
  }
};

/***/ },
/* 2 */
/***/ function(module, exports) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  bind: function bind(el, binding) {
    el.classList.add('material-icons');
  }
};

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _install = __webpack_require__(0);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Main class.
 * @export
 * @class VueMaterialLite
 */
var VueMaterialLite = function VueMaterialLite() {
  _classCallCheck(this, VueMaterialLite);
};

exports.default = VueMaterialLite;


VueMaterialLite.install = _install.install;

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(VueMaterialLite);
}

/***/ }
/******/ ]);
});
//# sourceMappingURL=vue-material-lite.js.map