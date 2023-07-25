(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[0],{

/***/ "./.linaria-cache/src/ui-components/components/iframe/IframeComponent.css":
/*!********************************************************************************!*\
  !*** ./.linaria-cache/src/ui-components/components/iframe/IframeComponent.css ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
    if(false) { var cssReload; }
  

/***/ }),

/***/ "./node_modules/linaria/lib/core/css.js":
/*!**********************************************!*\
  !*** ./node_modules/linaria/lib/core/css.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function css() {
  throw new Error('Using the "css" tag in runtime is not supported. Make sure you have set up the Babel plugin correctly.');
}

module.exports = css;
//# sourceMappingURL=css.js.map

/***/ }),

/***/ "./node_modules/linaria/lib/core/cx.js":
/*!*********************************************!*\
  !*** ./node_modules/linaria/lib/core/cx.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function cx() {
  for (var _len = arguments.length, classNames = new Array(_len), _key = 0; _key < _len; _key++) {
    classNames[_key] = arguments[_key];
  }

  return classNames.filter(Boolean).join(' ');
}

module.exports = cx;
//# sourceMappingURL=cx.js.map

/***/ }),

/***/ "./node_modules/linaria/lib/index.js":
/*!*******************************************!*\
  !*** ./node_modules/linaria/lib/index.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.css = __webpack_require__(/*! ./core/css */ "./node_modules/linaria/lib/core/css.js");
exports.cx = __webpack_require__(/*! ./core/cx */ "./node_modules/linaria/lib/core/cx.js");
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./src/ui-components/components/iframe/IframeComponent.tsx":
/*!*****************************************************************!*\
  !*** ./src/ui-components/components/iframe/IframeComponent.tsx ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var linaria__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! linaria */ "./node_modules/linaria/lib/index.js");
/* harmony import */ var linaria__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(linaria__WEBPACK_IMPORTED_MODULE_1__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



/* harmony default export */ __webpack_exports__["default"] = (function (props) {
  var className = props.className,
      inlineStyles = props.inlineStyles,
      src = props.src,
      height = props.height,
      width = props.width,
      allow = props.allow,
      allowFullScreen = props.allowFullScreen,
      isVideo = props.isVideo,
      title = props.title;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: Object(linaria__WEBPACK_IMPORTED_MODULE_1__["cx"])(styles.container, className, isVideo && 'video', 'iframeComponentBundle')
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("iframe", {
    className: "iframe",
    allow: allow,
    src: src,
    style: _objectSpread({}, inlineStyles),
    height: height,
    width: width,
    allowFullScreen: allowFullScreen,
    title: title
  }));
});
var styles = {
  container: "container_cjkbwox"
};

__webpack_require__(/*! ./.linaria-cache/src/ui-components/components/iframe/IframeComponent.css */ "./.linaria-cache/src/ui-components/components/iframe/IframeComponent.css");

/***/ })

}]);
//# sourceMappingURL=0.js.map