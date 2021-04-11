exports.id = 509;
exports.ids = [509];
exports.modules = {

/***/ 637:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ pages)
});

// EXTERNAL MODULE: external "vue"
var external_vue_ = __webpack_require__(103);
// EXTERNAL MODULE: external "@vue/server-renderer"
var server_renderer_ = __webpack_require__(745);
;// CONCATENATED MODULE: ./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[1]!./node_modules/@vuepress/bundler-webpack/lib/build/ssr/vuepressLoader.js!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./src/.vuepress/.temp/pages/index.vue?vue&type=template&id=10b5cdae



function ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_Badge = (0,external_vue_.resolveComponent)("Badge")

  _push(`<!--[--><h1 id="test"><a class="header-anchor" href="#test">#</a> Test</h1><p>❤️</p><p>One plus one equals: ${(0,server_renderer_.ssrInterpolate)(1 + 1)}</p><p><!--[-->`)
  ;(0,server_renderer_.ssrRenderList)(3, (i) => {
    _push(`<span> span: ${(0,server_renderer_.ssrInterpolate)(i)}</span>`)
  })
  _push(`<!--]--></p>`)
  _push((0,server_renderer_.ssrRenderComponent)(_component_Badge, { text: "demo" }, null, _parent))
  _push(`<!--]-->`)
}
;// CONCATENATED MODULE: ./src/.vuepress/.temp/pages/index.vue?vue&type=template&id=10b5cdae

;// CONCATENATED MODULE: ./src/.vuepress/.temp/pages/index.vue

const script = {}
;
script.ssrRender = (...args) => {
  const ssrContext = args[2].appContext.provides[external_vue_.ssrContextKey]
  ssrContext._registeredComponents.add("C:\\Users\\carlw\\Documents\\workingcopy\\carlwhittick.co.uk\\node_modules\\@vuepress\\bundler-webpack\\lib\\build\\ssr\\vuepressLoader.js!C:\\Users\\carlw\\Documents\\workingcopy\\carlwhittick.co.uk\\node_modules\\vue-loader\\dist\\index.js??ruleSet[0].use[1]!C:\\Users\\carlw\\Documents\\workingcopy\\carlwhittick.co.uk\\src\\.vuepress\\.temp\\pages\\index.vue")
  return ssrRender(...args)
}


/* harmony default export */ const pages = (script);

/***/ }),

/***/ 309:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "data": () => (/* binding */ data)
/* harmony export */ });
const data = {
  "key": "v-8daa1a0e",
  "path": "/",
  "title": "Test",
  "lang": "en-US",
  "frontmatter": {},
  "excerpt": "",
  "headers": []
}


/***/ })

};
;
//# sourceMappingURL=509.app.js.map