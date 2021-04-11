/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ 53:
/***/ ((module, __unused_webpack___webpack_exports__, __webpack_require__) => {

/* harmony import */ var _css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(15);
/* harmony import */ var _css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(645);
/* harmony import */ var _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".icon.outbound{position:relative;display:inline-block;color:#aaa;vertical-align:middle;top:-1px}", "",{"version":3,"sources":["webpack://./node_modules/@vuepress/client/lib/components/OutboundLink.css"],"names":[],"mappings":"AAAA,eACE,iBAAkB,CAClB,oBAAqB,CACrB,UAAW,CACX,qBAAsB,CACtB,QACF","sourcesContent":[".icon.outbound {\n  position: relative;\n  display: inline-block;\n  color: #aaa;\n  vertical-align: middle;\n  top: -1px;\n}\n"],"sourceRoot":""}]);
// Exports
/* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = ((/* unused pure expression or super */ null && (___CSS_LOADER_EXPORT___)));


/***/ }),

/***/ 645:
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join("");
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === "string") {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, ""]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ 15:
/***/ ((module) => {



function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

module.exports = function cssWithMappingToString(item) {
  var _item = _slicedToArray(item, 4),
      content = _item[1],
      cssMapping = _item[3];

  if (typeof btoa === "function") {
    // eslint-disable-next-line no-undef
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ 745:
/***/ ((module) => {

module.exports = require("@vue/server-renderer");;

/***/ }),

/***/ 103:
/***/ ((module) => {

module.exports = require("vue");;

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/ensure chunk */
/******/ 	(() => {
/******/ 		__webpack_require__.f = {};
/******/ 		// This file contains only the entry chunk.
/******/ 		// The chunk loading function for additional chunks
/******/ 		__webpack_require__.e = (chunkId) => {
/******/ 			return Promise.all(Object.keys(__webpack_require__.f).reduce((promises, key) => {
/******/ 				__webpack_require__.f[key](chunkId, promises);
/******/ 				return promises;
/******/ 			}, []));
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/get javascript chunk filename */
/******/ 	(() => {
/******/ 		// This function allow to reference async chunks
/******/ 		__webpack_require__.u = (chunkId) => {
/******/ 			// return url for filenames based on template
/******/ 			return "" + chunkId + ".app.js";
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/require chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded chunks
/******/ 		// "1" means "loaded", otherwise not loaded yet
/******/ 		var installedChunks = {
/******/ 			143: 1
/******/ 		};
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		var installChunk = (chunk) => {
/******/ 			var moreModules = chunk.modules, chunkIds = chunk.ids, runtime = chunk.runtime;
/******/ 			for(var moduleId in moreModules) {
/******/ 				if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 					__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 				}
/******/ 			}
/******/ 			if(runtime) runtime(__webpack_require__);
/******/ 			for(var i = 0; i < chunkIds.length; i++)
/******/ 				installedChunks[chunkIds[i]] = 1;
/******/ 		
/******/ 		};
/******/ 		
/******/ 		// require() chunk loading for javascript
/******/ 		__webpack_require__.f.require = (chunkId, promises) => {
/******/ 			// "1" is the signal for "already loaded"
/******/ 			if(!installedChunks[chunkId]) {
/******/ 				if(true) { // all chunks have JS
/******/ 					installChunk(require("./" + __webpack_require__.u(chunkId)));
/******/ 				} else installedChunks[chunkId] = 1;
/******/ 			}
/******/ 		};
/******/ 		
/******/ 		// no external install chunk
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "createServerApp": () => (/* binding */ createServerApp)
});

// EXTERNAL MODULE: external "vue"
var external_vue_ = __webpack_require__(103);
;// CONCATENATED MODULE: external "vue-router"
const external_vue_router_namespaceObject = require("vue-router");;
;// CONCATENATED MODULE: external "@vue/shared"
const shared_namespaceObject = require("@vue/shared");;
;// CONCATENATED MODULE: ./node_modules/@vuepress/shared/lib/esm/utils/resolveHeadIdentifier.js
/**
 * Resolve identifier of a tag, to avoid duplicated tags in `<head>`
 */
const resolveHeadIdentifier = ([tag, attrs, content,]) => {
    // avoid duplicated `<meta>` with same `name`
    if (tag === 'meta' && attrs.name) {
        return `${tag}.${attrs.name}`;
    }
    // there should be only one `<title>` or `<base>`
    if (['title', 'base'].includes(tag)) {
        return tag;
    }
    // avoid duplicated `<template>` with same `id`
    if (tag === 'template' && attrs.id) {
        return `${tag}.${attrs.id}`;
    }
    return JSON.stringify([tag, attrs, content]);
};

;// CONCATENATED MODULE: ./node_modules/@vuepress/shared/lib/esm/utils/dedupeHead.js

/**
 * Dedupe head config with identifier
 *
 * Items that appear earlier have higher priority
 */
const dedupeHead = (head) => {
    const identifierSet = new Set();
    const result = [];
    head.forEach((item) => {
        const identifier = resolveHeadIdentifier(item);
        if (!identifierSet.has(identifier)) {
            identifierSet.add(identifier);
            result.push(item);
        }
    });
    return result;
};

;// CONCATENATED MODULE: ./node_modules/@vuepress/shared/lib/esm/utils/htmlEscape.js
const htmlEscapeMap = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    "'": '&#39;',
    '"': '&quot;',
};
const htmlEscapeRegexp = /[&<>'"]/g;
/**
 * Escape html chars
 */
const htmlEscape = (str) => str.replace(htmlEscapeRegexp, (char) => htmlEscapeMap[char]);

;// CONCATENATED MODULE: ./node_modules/@vuepress/shared/lib/esm/utils/htmlUnescape.js
const htmlUnescapeMap = {
    '&amp;': '&',
    '&#38;': '&',
    '&lt;': '<',
    '&#60;': '<',
    '&gt;': '>',
    '&#62;': '>',
    '&apos;': "'",
    '&#39;': "'",
    '&quot;': '"',
    '&#34;': '"',
};
const htmlUnescapeRegexp = /&(amp|#38|lt|#60|gt|#62|apos|#39|quot|#34);/g;
/**
 * Unescape html chars
 */
const htmlUnescape = (str) => str.replace(htmlUnescapeRegexp, (char) => htmlUnescapeMap[char]);

;// CONCATENATED MODULE: ./node_modules/@vuepress/shared/lib/esm/utils/isLinkHttp.js
/**
 * Determine a link is http link or not
 *
 * - http://github.com
 * - https://github.com
 * - //github.com
 */
const isLinkHttp = (link) => /^(https?:)?\/\//.test(link);

;// CONCATENATED MODULE: ./node_modules/@vuepress/shared/lib/esm/utils/isPlainObject.js
/**
 * Check if a value is plain object, with generic type support
 */
const isPlainObject = (val) => Object.prototype.toString.call(val) === '[object Object]';

;// CONCATENATED MODULE: ./node_modules/@vuepress/shared/lib/esm/utils/removeEndingSlash.js
/**
 * Remove ending slash / from a string
 */
const removeEndingSlash = (str) => str.replace(/\/$/, '');

;// CONCATENATED MODULE: ./node_modules/@vuepress/shared/lib/esm/utils/resolveLocalePath.js
/**
 * Resolve the matched locale path of route path
 */
const resolveLocalePath = (locales, routePath) => {
    const localePaths = Object.keys(locales).sort((a, b) => {
        const levelDelta = b.split('/').length - a.split('/').length;
        if (levelDelta !== 0) {
            return levelDelta;
        }
        return b.length - a.length;
    });
    for (const localePath of localePaths) {
        if (routePath.startsWith(localePath)) {
            return localePath;
        }
    }
    return '/';
};

;// CONCATENATED MODULE: ./node_modules/@vuepress/shared/lib/esm/utils/index.js



















;// CONCATENATED MODULE: ./node_modules/@vuepress/shared/lib/esm/index.js



;// CONCATENATED MODULE: ./src/.vuepress/.temp/internal/clientAppEnhances.js


const clientAppEnhances = [

]

;// CONCATENATED MODULE: ./src/.vuepress/.temp/internal/clientAppRootComponents.js


const clientAppRootComponents = [

]

;// CONCATENATED MODULE: ./src/.vuepress/.temp/internal/clientAppSetups.js


const clientAppSetups = [

]

;// CONCATENATED MODULE: ./src/.vuepress/.temp/internal/pagesComponent.js


const pagesComponent = {
  "/": (0,external_vue_.defineAsyncComponent)(() => __webpack_require__.e(/* import() | v-8daa1a0e */ 509).then(__webpack_require__.bind(__webpack_require__, 637))),
  "/test.html": (0,external_vue_.defineAsyncComponent)(() => __webpack_require__.e(/* import() | v-953546a4 */ 880).then(__webpack_require__.bind(__webpack_require__, 188))),
  "/404.html": (0,external_vue_.defineAsyncComponent)(() => __webpack_require__.e(/* import() | v-3706649a */ 88).then(__webpack_require__.bind(__webpack_require__, 924))),
}

;// CONCATENATED MODULE: ./src/.vuepress/.temp/internal/layoutComponents.js


const layoutComponents = {
  "Layout": (0,external_vue_.defineAsyncComponent)(() => __webpack_require__.e(/* import() */ 929).then(__webpack_require__.bind(__webpack_require__, 929))),
}

;// CONCATENATED MODULE: ./src/.vuepress/.temp/internal/pagesData.js
const pagesData = {
  "/": () => __webpack_require__.e(/* import() | v-8daa1a0e */ 509).then(__webpack_require__.bind(__webpack_require__, 309)).then(({ data }) => data),
  "/test.html": () => __webpack_require__.e(/* import() | v-953546a4 */ 880).then(__webpack_require__.bind(__webpack_require__, 676)).then(({ data }) => data),
  "/404.html": () => __webpack_require__.e(/* import() | v-3706649a */ 88).then(__webpack_require__.bind(__webpack_require__, 979)).then(({ data }) => data),
}

;// CONCATENATED MODULE: ./node_modules/@vuepress/client/lib/injections/pagesData.js


const pagesData_pagesData = (0,external_vue_.ref)(pagesData);
const usePagesData = () => {
    return pagesData_pagesData;
};

;// CONCATENATED MODULE: ./node_modules/@vuepress/client/lib/injections/pageData.js


const pageDataEmpty = (0,external_vue_.readonly)({
    key: '',
    path: '',
    title: '',
    lang: '',
    frontmatter: {},
    excerpt: '',
    headers: [],
});
const pageData = (0,external_vue_.ref)(pageDataEmpty);
const usePageData = () => {
    return pageData;
};
const resolvePageData = async (routePath) => {
    const pageDataResolver = pagesData_pagesData.value[routePath];
    if (!pageDataResolver) {
        return pageDataEmpty;
    }
    const pageData = await pageDataResolver();
    return pageData !== null && pageData !== void 0 ? pageData : pageDataEmpty;
};
if (false) {}

;// CONCATENATED MODULE: ./node_modules/@vuepress/client/lib/injections/pageFrontmatter.js

const pageFrontmatterSymbol = Symbol( false ? 0 : '');
const usePageFrontmatter = () => {
    const pageFrontmatter = inject(pageFrontmatterSymbol);
    if (!pageFrontmatter) {
        throw new Error('usePageFrontmatter() is called without provider.');
    }
    return pageFrontmatter;
};
const resolvePageFrontmatter = (pageData) => pageData.frontmatter;

;// CONCATENATED MODULE: ./node_modules/@vuepress/client/lib/injections/pageHead.js


const pageHeadSymbol = Symbol( false ? 0 : '');
const usePageHead = () => {
    const pageHead = (0,external_vue_.inject)(pageHeadSymbol);
    if (!pageHead) {
        throw new Error('usePageHead() is called without provider.');
    }
    return pageHead;
};
/**
 * Merge the head config in frontmatter and site locale
 *
 * Frontmatter should take priority over site locale
 */
const resolvePageHead = (headTitle, frontmatter, siteLocale) => {
    const description = (0,shared_namespaceObject.isString)(frontmatter.description)
        ? frontmatter.description
        : siteLocale.description;
    const head = [
        ...((0,shared_namespaceObject.isArray)(frontmatter.head) ? frontmatter.head : []),
        ...siteLocale.head,
        ['title', {}, headTitle],
        ['meta', { name: 'description', content: description }],
        ['meta', { charset: 'utf-8' }],
        [
            'meta',
            { name: 'viewport', content: 'width=device-width,initial-scale=1' },
        ],
        ['meta', { name: 'generator', content: `VuePress ${"2.0.0-beta.7"}` }],
    ];
    return dedupeHead(head);
};

;// CONCATENATED MODULE: ./node_modules/@vuepress/client/lib/injections/pageHeadTitle.js

const pageHeadTitleSymbol = Symbol( false ? 0 : '');
const usePageHeadTitle = () => {
    const pageHeadTitle = inject(pageHeadTitleSymbol);
    if (!pageHeadTitle) {
        throw new Error('usePageHeadTitle() is called without provider.');
    }
    return pageHeadTitle;
};
/**
 * Title to displayed in `<head>` tag
 */
const resolvePageHeadTitle = (page, siteLocale) => `${page.title ? `${page.title} | ` : ``}${siteLocale.title}`;

;// CONCATENATED MODULE: ./node_modules/@vuepress/client/lib/injections/pageLang.js

const pageLangSymbol = Symbol( false ? 0 : '');
const usePageLang = () => {
    const pageLang = (0,external_vue_.inject)(pageLangSymbol);
    if (!pageLang) {
        throw new Error('usePageLang() is called without provider.');
    }
    return pageLang;
};
/**
 * Resolve language of current page
 *
 * It's mainly used for the `lang` attribute of `<html>` tag,
 * which should not be empty
 */
const resolvePageLang = (pageData) => pageData.lang || 'en';

;// CONCATENATED MODULE: ./node_modules/@vuepress/client/lib/injections/routeLocale.js


const routeLocaleSymbol = Symbol( false ? 0 : '');
const useRouteLocale = () => {
    const routeLocale = inject(routeLocaleSymbol);
    if (!routeLocale) {
        throw new Error('useRouteLocale() is called without provider.');
    }
    return routeLocale;
};
/**
 * Resolve locale path of the route path
 */
const resolveRouteLocale = (locales, routePath) => resolveLocalePath(locales, routePath);

;// CONCATENATED MODULE: ./src/.vuepress/.temp/internal/siteData.js
const siteData = {
  "base": "/",
  "lang": "en-US",
  "title": "Hello, VuePress!",
  "description": "This is my first VuePress site",
  "head": [],
  "locales": {}
}

;// CONCATENATED MODULE: ./node_modules/@vuepress/client/lib/injections/siteData.js


const siteData_siteData = (0,external_vue_.ref)((0,external_vue_.readonly)(siteData));
const useSiteData = () => siteData_siteData;
if (false) {}

;// CONCATENATED MODULE: ./node_modules/@vuepress/client/lib/injections/siteLocaleData.js

const siteLocaleDataSymbol = Symbol( false ? 0 : '');
const useSiteLocaleData = () => {
    const siteLocaleData = inject(siteLocaleDataSymbol);
    if (!siteLocaleData) {
        throw new Error('useSiteLocaleData() is called without provider.');
    }
    return siteLocaleData;
};
/**
 * Merge the locales fields to the root fields
 * according to the route path
 */
const resolveSiteLocaleData = (site, routeLocale) => ({
    ...site,
    ...site.locales[routeLocale],
});

;// CONCATENATED MODULE: ./node_modules/@vuepress/client/lib/injections/updateHead.js





/**
 * Query the matched head tag of head config
 */
const queryHeadTag = ([tagName, attrs, content = '',]) => {
    const attrsSelector = Object.entries(attrs).map(([key, value]) => {
        if ((0,shared_namespaceObject.isString)(value)) {
            return `[${key}="${value}"]`;
        }
        if (value === true) {
            return `[${key}]`;
        }
        return '';
    });
    const selector = `head > ${tagName}${attrsSelector}`;
    const tags = Array.from(document.querySelectorAll(selector));
    const matchedTag = tags.find((item) => item.innerText === content);
    return matchedTag || null;
};
/**
 * Create head tag from head config
 */
const createHeadTag = ([tagName, attrs, content,]) => {
    if (!(0,shared_namespaceObject.isString)(tagName)) {
        return null;
    }
    // create element
    const tag = document.createElement(tagName);
    // set attributes
    if (isPlainObject(attrs)) {
        Object.entries(attrs).forEach(([key, value]) => {
            if ((0,shared_namespaceObject.isString)(value)) {
                tag.setAttribute(key, value);
            }
            else if (value === true) {
                tag.setAttribute(key, '');
            }
        });
    }
    // set content
    if ((0,shared_namespaceObject.isString)(content)) {
        tag.appendChild(document.createTextNode(content));
    }
    return tag;
};
/**
 * Auto update head
 *
 * This composable function should be used only once in the root app
 */
const useUpdateHead = () => {
    const route = (0,external_vue_router_namespaceObject.useRoute)();
    const head = usePageHead();
    const lang = usePageLang();
    // ssr-only, extract page meta info to ssrContext
    if (true) {
        const ssrContext = (0,external_vue_.useSSRContext)();
        if (ssrContext) {
            ssrContext.head = head.value;
            ssrContext.lang = lang.value;
        }
        return;
    }
    const headTags = (0,external_vue_.ref)([]);
    // load current head tags from DOM
    const loadHead = () => {
        head.value.forEach((item) => {
            const tag = queryHeadTag(item);
            if (tag) {
                headTags.value.push(tag);
            }
        });
    };
    // update html lang attribute and head tags to DOM
    const updateHead = () => {
        document.documentElement.lang = lang.value;
        headTags.value.forEach((item) => {
            if (item.parentNode === document.head) {
                document.head.removeChild(item);
            }
        });
        headTags.value.splice(0, headTags.value.length);
        head.value.forEach((item) => {
            const tag = createHeadTag(item);
            if (tag !== null) {
                document.head.appendChild(tag);
                headTags.value.push(tag);
            }
        });
    };
    (0,external_vue_.onMounted)(() => {
        loadHead();
        updateHead();
        (0,external_vue_.watch)(() => route.path, () => updateHead());
    });
};

;// CONCATENATED MODULE: ./node_modules/@vuepress/client/lib/injections/index.js











;// CONCATENATED MODULE: ./node_modules/@vuepress/client/lib/components/Content.js



/**
 * Markdown rendered content
 */
const Content = (props) => {
    let key;
    // use the page key from props directly
    if (props.pagePath) {
        key = props.pagePath;
    }
    else {
        // get current page key from page data
        const page = usePageData();
        key = page.value.path;
    }
    const component = pagesComponent[key];
    // use page component
    if (component) {
        return (0,external_vue_.h)(component);
    }
    // fallback
    return (0,external_vue_.h)('div',  false
        ? 0
        : '404 Not Found');
};
Content.displayName = 'Content';
Content.props = {
    pagePath: {
        type: String,
        required: false,
    },
};

;// CONCATENATED MODULE: ./node_modules/@vuepress/client/lib/components/Vuepress.js





/**
 * Global Layout
 */
const Vuepress = () => {
    // get layout of current page
    let layoutName = '404';
    const page = usePageData();
    if (page.value.path) {
        // if current page exists
        // use layout from frontmatter
        const frontmatterLayout = page.value.frontmatter.layout;
        if ((0,shared_namespaceObject.isString)(frontmatterLayout)) {
            layoutName = frontmatterLayout;
        }
        else {
            // fallback to Layout component
            layoutName = 'Layout';
        }
    }
    const layoutComponent = layoutComponents[layoutName];
    // use layout component
    if (layoutComponent) {
        return (0,external_vue_.h)(layoutComponent);
    }
    // fallback to Content
    return (0,external_vue_.h)(Content);
};
Vuepress.displayName = 'Vuepress';

;// CONCATENATED MODULE: ./src/.vuepress/.temp/internal/pageRoutes/v-8daa1a0e.js


/* harmony default export */ const v_8daa1a0e = ([
  {
    name: "v-8daa1a0e",
    path: "/",
    component: Vuepress,
    meta: { title: "Test" },
  },
  {
    path: "/index.html",
    redirect: "/",
  },
  {
    path: "/index.md",
    redirect: "/",
  },
]);

;// CONCATENATED MODULE: ./src/.vuepress/.temp/internal/pageRoutes/v-953546a4.js


/* harmony default export */ const v_953546a4 = ([
  {
    name: "v-953546a4",
    path: "/test.html",
    component: Vuepress,
    meta: { title: "" },
  },
  {
    path: "/test.md",
    redirect: "/test.html",
  },
]);

;// CONCATENATED MODULE: ./src/.vuepress/.temp/internal/pageRoutes/v-3706649a.js


/* harmony default export */ const v_3706649a = ([
  {
    name: "v-3706649a",
    path: "/404.html",
    component: Vuepress,
    meta: { title: "" },
  },
]);

;// CONCATENATED MODULE: ./src/.vuepress/.temp/internal/pagesRoutes.js





const pagesRoutes = [
  ...v_8daa1a0e,
  ...v_953546a4,
  ...v_3706649a,
  {
    name: "404",
    path: "/:catchAll(.*)",
    component: Vuepress,
  },
]

// EXTERNAL MODULE: ./node_modules/@vuepress/client/lib/components/OutboundLink.css
var OutboundLink = __webpack_require__(53);
;// CONCATENATED MODULE: ./node_modules/@vuepress/client/lib/components/OutboundLink.js


const svg = (0,external_vue_.h)('svg', {
    class: 'icon outbound',
    xmlns: 'http://www.w3.org/2000/svg',
    ariaHidden: 'true',
    focusable: 'false',
    x: '0px',
    y: '0px',
    viewBox: '0 0 100 100',
    width: '15',
    height: '15',
}, [
    (0,external_vue_.h)('path', {
        fill: 'currentColor',
        d: 'M18.8,85.1h56l0,0c2.2,0,4-1.8,4-4v-32h-8v28h-48v-48h28v-8h-32l0,0c-2.2,0-4,1.8-4,4v56C14.8,83.3,16.6,85.1,18.8,85.1z',
    }),
    (0,external_vue_.h)('polygon', {
        fill: 'currentColor',
        points: '45.7,48.7 51.3,54.3 77.2,28.5 77.2,37.2 85.2,37.2 85.2,14.9 62.8,14.9 62.8,22.9 71.5,22.9',
    }),
]);
const OutboundLink_OutboundLink = (_, { slots }) => { var _a; return (0,external_vue_.h)('span', [svg, (_a = slots.default) === null || _a === void 0 ? void 0 : _a.call(slots)]); };
OutboundLink_OutboundLink.displayName = 'OutboundLink';

;// CONCATENATED MODULE: ./node_modules/@vuepress/client/lib/components/index.js




;// CONCATENATED MODULE: ./node_modules/@vuepress/client/lib/utils/withBase.js


/**
 * Prefix url with site base
 */
const withBase = (url) => {
    if (isLinkHttp(url))
        return url;
    const base = useSiteData().value.base;
    return `${base}${url}`.replace(/\/+/, '/');
};

;// CONCATENATED MODULE: ./node_modules/@vuepress/client/lib/utils/index.js




;// CONCATENATED MODULE: ./node_modules/@vuepress/client/lib/app.js











/**
 * Create a vue app
 *
 * Accepting different app creator and history creator, so it
 * can be reused for both client side and server side
 */
const createVueApp = async ({ appCreator, historyCreator, }) => {
    // options to create vue app
    const appOptions = {
        setup() {
            // auto update head
            useUpdateHead();
            // invoke all clientAppSetups
            for (const clientAppSetup of clientAppSetups) {
                clientAppSetup();
            }
            return () => [
                (0,external_vue_.h)(external_vue_router_namespaceObject.RouterView),
                ...clientAppRootComponents.map((comp) => (0,external_vue_.h)(comp)),
            ];
        },
    };
    // create vue app
    const app = appCreator(appOptions);
    // create vue-router
    const router = (0,external_vue_router_namespaceObject.createRouter)({
        // TODO: it might be an issue of vue-router that have to remove the ending slash
        history: historyCreator(removeEndingSlash(siteData_siteData.value.base)),
        routes: pagesRoutes,
        scrollBehavior: (to, from, savedPosition) => {
            if (savedPosition) {
                return savedPosition;
            }
            if (to.hash) {
                return { el: to.hash };
            }
            return { top: 0 };
        },
    });
    router.beforeResolve(async (to, from) => {
        var _a;
        if (to.path !== from.path || from === external_vue_router_namespaceObject.START_LOCATION) {
            // ensure page data and page component have been loaded
            ;
            [pageData.value] = await Promise.all([
                resolvePageData(to.path),
                (_a = pagesComponent[to.path]) === null || _a === void 0 ? void 0 : _a.__asyncLoader(),
            ]);
        }
    });
    // create global computed
    const routeLocale = (0,external_vue_.computed)(() => resolveRouteLocale(siteData_siteData.value.locales, router.currentRoute.value.path));
    const siteLocaleData = (0,external_vue_.computed)(() => resolveSiteLocaleData(siteData_siteData.value, routeLocale.value));
    const pageFrontmatter = (0,external_vue_.computed)(() => resolvePageFrontmatter(pageData.value));
    const pageHeadTitle = (0,external_vue_.computed)(() => resolvePageHeadTitle(pageData.value, siteLocaleData.value));
    const pageHead = (0,external_vue_.computed)(() => resolvePageHead(pageHeadTitle.value, pageFrontmatter.value, siteLocaleData.value));
    const pageLang = (0,external_vue_.computed)(() => resolvePageLang(pageData.value));
    // provide global computed
    app.provide(routeLocaleSymbol, routeLocale);
    app.provide(siteLocaleDataSymbol, siteLocaleData);
    app.provide(pageFrontmatterSymbol, pageFrontmatter);
    app.provide(pageHeadTitleSymbol, pageHeadTitle);
    app.provide(pageHeadSymbol, pageHead);
    app.provide(pageLangSymbol, pageLang);
    // provide global data & helpers
    Object.defineProperties(app.config.globalProperties, {
        $routeLocale: {
            get() {
                return routeLocale.value;
            },
        },
        $site: {
            get() {
                return siteData_siteData.value;
            },
        },
        $siteLocale: {
            get() {
                return siteLocaleData.value;
            },
        },
        $page: {
            get() {
                return pageData.value;
            },
        },
        $frontmatter: {
            get() {
                return pageFrontmatter.value;
            },
        },
        $lang: {
            get() {
                return pageLang.value;
            },
        },
        $headTitle: {
            get() {
                return pageHeadTitle.value;
            },
        },
        $withBase: {
            get() {
                return withBase;
            },
        },
    });
    // register built-in components
    /* eslint-disable vue/match-component-file-name */
    app.component('ClientOnly',  true ? () => null : 0);
    app.component('Content', Content);
    app.component('OutboundLink', OutboundLink_OutboundLink);
    /* eslint-enable vue/match-component-file-name */
    // invoke all clientAppEnhances
    for (const clientAppEnhance of clientAppEnhances) {
        await clientAppEnhance({ app, router, siteData: siteData_siteData });
    }
    // vue-router will start to initialize once it is installed
    // via `app.use()`, but users might make some modifications
    // to router in `clientAppEnhance`, so we install it after
    // that. This can also avoid the `scrollBehavior` issue on
    // initial navigation.
    app.use(router);
    return {
        app,
        router,
    };
};

;// CONCATENATED MODULE: ./node_modules/@vuepress/client/lib/server.js



/**
 * Server entry point, used for SSR
 */
const createServerApp = async () => createVueApp({
    appCreator: external_vue_.createSSRApp,
    historyCreator: external_vue_router_namespaceObject.createMemoryHistory,
});

})();

module.exports = __webpack_exports__;
/******/ })()
;
//# sourceMappingURL=app.js.map