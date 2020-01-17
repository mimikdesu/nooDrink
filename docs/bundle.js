/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
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
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles.scss":
/*!******************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles.scss ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\nexports = ___CSS_LOADER_API_IMPORT___(false);\n// Module\nexports.push([module.i, \"body {\\n  font-family: sans-serif;\\n  font-size: 16px; }\\n\\nhtml {\\n  height: 100%;\\n  text-align: center; }\\n\\nbody {\\n  background-color: #242f3f; }\\n\\n.loader-wrapper {\\n  width: 100%;\\n  height: 100%;\\n  position: absolute;\\n  top: 0;\\n  left: 0;\\n  display: flex;\\n  justify-content: center;\\n  align-items: center; }\\n\\n.loader {\\n  display: inline-block;\\n  width: 30px;\\n  height: 30px;\\n  position: relative;\\n  border: 4px solid #fff;\\n  animation: loader 2s infinite ease; }\\n\\n.loader-inner {\\n  vertical-align: top;\\n  display: inline-block;\\n  width: 100%;\\n  background-color: #fff;\\n  animation: loader-inner 2s infinite ease-in; }\\n\\n@keyframes loader {\\n  0% {\\n    transform: rotate(0deg); }\\n  25% {\\n    transform: rotate(180deg); }\\n  50% {\\n    transform: rotate(180deg); }\\n  75% {\\n    transform: rotate(360deg); }\\n  100% {\\n    transform: rotate(360deg); } }\\n\\n@keyframes loader-inner {\\n  0% {\\n    height: 0%; }\\n  25% {\\n    height: 0%; }\\n  50% {\\n    height: 100%; }\\n  75% {\\n    height: 100%; }\\n  100% {\\n    height: 0%; } }\\n\\n.header {\\n  color: white;\\n  font-size: 40px; }\\n\\n.motto {\\n  margin: 0px 0px 30px; }\\n\\n.main {\\n  color: white; }\\n\\n.ingredient-title {\\n  font-size: 24px;\\n  margin: 0; }\\n\\n.ingredients {\\n  list-style-type: none;\\n  margin: 0;\\n  padding: 0; }\\n\\n.ingredient {\\n  margin: 20px 0; }\\n  .ingredient:nth-child(17) {\\n    font-weight: bolder; }\\n\\n.grid-container {\\n  display: grid;\\n  grid-template-columns: repeat(5, 1fr);\\n  grid-template-rows: repeat(4, 1fr);\\n  grid-column-gap: 0px;\\n  grid-row-gap: 0px; }\\n\\n.grid1 {\\n  grid-area: 1 / 1 / 4 / 2; }\\n\\n.grid2 {\\n  grid-area: 1 / 2 / 4 / 6;\\n  background-image: url(\\\"https://lh6.googleusercontent.com/trwmwDJj_oB9mgmcXAidKhOyJPrVZ-FzkaxOkKnvjW4KRcuFhHWQT-L4mmFJHH6XxEd6Ofv8lx_i39CLqLxdqxZb4Byefy794g2rqpCKVGmA8Wl9qJvfLKy-fcPKP8EqNzv0jhBV\\\");\\n  background-size: cover;\\n  background-repeat: no-repeat;\\n  background-position: center;\\n  height: 700px; }\\n\\n.grid3 {\\n  grid-area: 4 / 1 / 5 / 6; }\\n\\n.description {\\n  font-size: 28px;\\n  width: 70%;\\n  margin: 50px auto; }\\n\\n.link {\\n  position: relative;\\n  color: #fff;\\n  transition: all 0.3s ease;\\n  text-decoration: none; }\\n  .link:before {\\n    content: \\\"\\\";\\n    position: absolute;\\n    opacity: 0;\\n    pointer-events: none;\\n    left: 50%;\\n    transform: translate3d(-50%, 0%, 0);\\n    transition: all 0.3s ease;\\n    width: 0;\\n    height: 0;\\n    border-style: solid;\\n    border-width: 10px 10px 0 10px;\\n    border-color: #282828 transparent transparent transparent; }\\n  .link:after {\\n    text-transform: none;\\n    content: attr(data-tooltip);\\n    font-size: 14px;\\n    position: absolute;\\n    color: #fff;\\n    background: #282828;\\n    padding: 8px 12px;\\n    width: -webkit-max-content;\\n    width: -moz-max-content;\\n    width: max-content;\\n    max-width: 200px;\\n    opacity: 0;\\n    pointer-events: none;\\n    left: 50%;\\n    top: 0;\\n    border-radius: 4px;\\n    transform: translate3d(-50%, 0%, 0);\\n    transition: all 0.3s ease;\\n    transition-delay: 0.2s; }\\n  .link:hover:before, .link:hover:after {\\n    opacity: 1; }\\n  .link:hover:before {\\n    transform: translate3d(-50%, calc(-100% - 18px), 0); }\\n  .link:hover:after {\\n    transform: translate3d(-50%, calc(-100% - 16px), 0); }\\n\\n.rainbow {\\n  animation: colorRotate 4s linear 0s infinite;\\n  cursor: pointer; }\\n\\n@keyframes colorRotate {\\n  from {\\n    color: red; }\\n  16.6% {\\n    color: magenta; }\\n  33.3% {\\n    color: blue; }\\n  50% {\\n    color: cyan; }\\n  66.6% {\\n    color: lime; }\\n  83.3% {\\n    color: yellow; }\\n  to {\\n    color: red; } }\\n\\n.contact {\\n  color: white;\\n  margin-bottom: 30px; }\\n\\n.contact-text {\\n  text-transform: uppercase; }\\n\\n.contact-form {\\n  border: 1px solid lightgray;\\n  width: 33%;\\n  padding-bottom: 20px;\\n  margin: 0 auto 10px;\\n  border-radius: 20px; }\\n  .contact-form input {\\n    width: 90%;\\n    border-radius: 10px;\\n    border: none;\\n    padding: 0px 5px;\\n    height: 30px;\\n    outline: none; }\\n\\n.contact-form-button {\\n  outline: none;\\n  margin-top: 20px;\\n  width: 50%;\\n  height: 50px;\\n  border: none;\\n  border-radius: 20px;\\n  font-size: 24px;\\n  font-weight: bold;\\n  text-transform: uppercase;\\n  cursor: pointer;\\n  background: #d4e4ef;\\n  background: -moz-linear-gradient(left, #d4e4ef 0%, #86aecc 100%);\\n  background: -webkit-gradient(left top, right top, color-stop(0%, #d4e4ef), color-stop(100%, #86aecc));\\n  background: -webkit-linear-gradient(left, #d4e4ef 0%, #86aecc 100%);\\n  background: -o-linear-gradient(left, #d4e4ef 0%, #86aecc 100%);\\n  background: -ms-linear-gradient(left, #d4e4ef 0%, #86aecc 100%);\\n  background: linear-gradient(to right, #d4e4ef 0%, #86aecc 100%);\\n  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#d4e4ef', endColorstr='#86aecc', GradientType=1 ); }\\n\\n.footer {\\n  height: 50px;\\n  width: 60%;\\n  margin: 20px auto 0;\\n  padding-bottom: 40px; }\\n\\n.fa {\\n  padding: 20px;\\n  font-size: 30px;\\n  width: 50px;\\n  text-align: center;\\n  text-decoration: none; }\\n\\n/* Add a hover effect if you want */\\n.fa:hover {\\n  opacity: 0.7; }\\n\\n/* Set a specific color for each brand */\\n/* Facebook */\\n.fa-facebook {\\n  background: #3b5998;\\n  color: white; }\\n\\n.fa-github {\\n  background: #24292e;\\n  color: white; }\\n\\n.fa-twitter {\\n  background: #55acee;\\n  color: white; }\\n\\n.fa-snapchat {\\n  background: #fffd33;\\n  color: white; }\\n\\n@media (max-width: 1100px) {\\n  .grid-container {\\n    display: flex;\\n    flex-direction: column-reverse;\\n    align-items: center; }\\n  .grid2 {\\n    width: 600px;\\n    height: 600px;\\n    margin-bottom: 40px; }\\n  .contact-form {\\n    width: 50%; } }\\n\\n@media (max-width: 700px) {\\n  .title {\\n    font-size: 80px !important; }\\n  .grid2 {\\n    width: 400px;\\n    height: 400px; }\\n  .contact-form {\\n    width: 80%; } }\\n\\n@media (max-width: 500px) {\\n  .title {\\n    font-size: 50px !important; }\\n  .grid2 {\\n    width: 300px;\\n    height: 300px; } }\\n\", \"\"]);\n// Exports\nmodule.exports = exports;\n\n\n//# sourceURL=webpack:///./src/styles.scss?./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles.css":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\nexports = ___CSS_LOADER_API_IMPORT___(false);\n// Module\nexports.push([module.i, \"\", \"\"]);\n// Exports\nmodule.exports = exports;\n\n\n//# sourceURL=webpack:///./src/styles.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\n// css base code, injected by the css-loader\n// eslint-disable-next-line func-names\nmodule.exports = function (useSourceMap) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = cssWithMappingToString(item, useSourceMap);\n\n      if (item[2]) {\n        return \"@media \".concat(item[2], \" {\").concat(content, \"}\");\n      }\n\n      return content;\n    }).join('');\n  }; // import a list of modules into the list\n  // eslint-disable-next-line func-names\n\n\n  list.i = function (modules, mediaQuery, dedupe) {\n    if (typeof modules === 'string') {\n      // eslint-disable-next-line no-param-reassign\n      modules = [[null, modules, '']];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var i = 0; i < this.length; i++) {\n        // eslint-disable-next-line prefer-destructuring\n        var id = this[i][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _i = 0; _i < modules.length; _i++) {\n      var item = [].concat(modules[_i]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        // eslint-disable-next-line no-continue\n        continue;\n      }\n\n      if (mediaQuery) {\n        if (!item[2]) {\n          item[2] = mediaQuery;\n        } else {\n          item[2] = \"\".concat(mediaQuery, \" and \").concat(item[2]);\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\nfunction cssWithMappingToString(item, useSourceMap) {\n  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring\n\n  var cssMapping = item[3];\n\n  if (!cssMapping) {\n    return content;\n  }\n\n  if (useSourceMap && typeof btoa === 'function') {\n    var sourceMapping = toComment(cssMapping);\n    var sourceURLs = cssMapping.sources.map(function (source) {\n      return \"/*# sourceURL=\".concat(cssMapping.sourceRoot || '').concat(source, \" */\");\n    });\n    return [content].concat(sourceURLs).concat([sourceMapping]).join('\\n');\n  }\n\n  return [content].join('\\n');\n} // Adapted from convert-source-map (MIT)\n\n\nfunction toComment(sourceMap) {\n  // eslint-disable-next-line no-undef\n  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));\n  var data = \"sourceMappingURL=data:application/json;charset=utf-8;base64,\".concat(base64);\n  return \"/*# \".concat(data, \" */\");\n}\n\n//# sourceURL=webpack:///./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar isOldIE = function isOldIE() {\n  var memo;\n  return function memorize() {\n    if (typeof memo === 'undefined') {\n      // Test for IE <= 9 as proposed by Browserhacks\n      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805\n      // Tests for existence of standard globals is to allow style-loader\n      // to operate correctly into non-standard environments\n      // @see https://github.com/webpack-contrib/style-loader/issues/177\n      memo = Boolean(window && document && document.all && !window.atob);\n    }\n\n    return memo;\n  };\n}();\n\nvar getTarget = function getTarget() {\n  var memo = {};\n  return function memorize(target) {\n    if (typeof memo[target] === 'undefined') {\n      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n        try {\n          // This will throw an exception if access to iframe is blocked\n          // due to cross-origin restrictions\n          styleTarget = styleTarget.contentDocument.head;\n        } catch (e) {\n          // istanbul ignore next\n          styleTarget = null;\n        }\n      }\n\n      memo[target] = styleTarget;\n    }\n\n    return memo[target];\n  };\n}();\n\nvar stylesInDom = {};\n\nfunction modulesToDom(moduleId, list, options) {\n  for (var i = 0; i < list.length; i++) {\n    var part = {\n      css: list[i][1],\n      media: list[i][2],\n      sourceMap: list[i][3]\n    };\n\n    if (stylesInDom[moduleId][i]) {\n      stylesInDom[moduleId][i](part);\n    } else {\n      stylesInDom[moduleId].push(addStyle(part, options));\n    }\n  }\n}\n\nfunction insertStyleElement(options) {\n  var style = document.createElement('style');\n  var attributes = options.attributes || {};\n\n  if (typeof attributes.nonce === 'undefined') {\n    var nonce =  true ? __webpack_require__.nc : undefined;\n\n    if (nonce) {\n      attributes.nonce = nonce;\n    }\n  }\n\n  Object.keys(attributes).forEach(function (key) {\n    style.setAttribute(key, attributes[key]);\n  });\n\n  if (typeof options.insert === 'function') {\n    options.insert(style);\n  } else {\n    var target = getTarget(options.insert || 'head');\n\n    if (!target) {\n      throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n    }\n\n    target.appendChild(style);\n  }\n\n  return style;\n}\n\nfunction removeStyleElement(style) {\n  // istanbul ignore if\n  if (style.parentNode === null) {\n    return false;\n  }\n\n  style.parentNode.removeChild(style);\n}\n/* istanbul ignore next  */\n\n\nvar replaceText = function replaceText() {\n  var textStore = [];\n  return function replace(index, replacement) {\n    textStore[index] = replacement;\n    return textStore.filter(Boolean).join('\\n');\n  };\n}();\n\nfunction applyToSingletonTag(style, index, remove, obj) {\n  var css = remove ? '' : obj.css; // For old IE\n\n  /* istanbul ignore if  */\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = replaceText(index, css);\n  } else {\n    var cssNode = document.createTextNode(css);\n    var childNodes = style.childNodes;\n\n    if (childNodes[index]) {\n      style.removeChild(childNodes[index]);\n    }\n\n    if (childNodes.length) {\n      style.insertBefore(cssNode, childNodes[index]);\n    } else {\n      style.appendChild(cssNode);\n    }\n  }\n}\n\nfunction applyToTag(style, options, obj) {\n  var css = obj.css;\n  var media = obj.media;\n  var sourceMap = obj.sourceMap;\n\n  if (media) {\n    style.setAttribute('media', media);\n  } else {\n    style.removeAttribute('media');\n  }\n\n  if (sourceMap && btoa) {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = css;\n  } else {\n    while (style.firstChild) {\n      style.removeChild(style.firstChild);\n    }\n\n    style.appendChild(document.createTextNode(css));\n  }\n}\n\nvar singleton = null;\nvar singletonCounter = 0;\n\nfunction addStyle(obj, options) {\n  var style;\n  var update;\n  var remove;\n\n  if (options.singleton) {\n    var styleIndex = singletonCounter++;\n    style = singleton || (singleton = insertStyleElement(options));\n    update = applyToSingletonTag.bind(null, style, styleIndex, false);\n    remove = applyToSingletonTag.bind(null, style, styleIndex, true);\n  } else {\n    style = insertStyleElement(options);\n    update = applyToTag.bind(null, style, options);\n\n    remove = function remove() {\n      removeStyleElement(style);\n    };\n  }\n\n  update(obj);\n  return function updateStyle(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {\n        return;\n      }\n\n      update(obj = newObj);\n    } else {\n      remove();\n    }\n  };\n}\n\nmodule.exports = function (moduleId, list, options) {\n  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>\n  // tags it will allow on a page\n\n  if (!options.singleton && typeof options.singleton !== 'boolean') {\n    options.singleton = isOldIE();\n  }\n\n  moduleId = options.base ? moduleId + options.base : moduleId;\n  list = list || [];\n\n  if (!stylesInDom[moduleId]) {\n    stylesInDom[moduleId] = [];\n  }\n\n  modulesToDom(moduleId, list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    if (Object.prototype.toString.call(newList) !== '[object Array]') {\n      return;\n    }\n\n    if (!stylesInDom[moduleId]) {\n      stylesInDom[moduleId] = [];\n    }\n\n    modulesToDom(moduleId, newList, options);\n\n    for (var j = newList.length; j < stylesInDom[moduleId].length; j++) {\n      stylesInDom[moduleId][j]();\n    }\n\n    stylesInDom[moduleId].length = newList.length;\n\n    if (stylesInDom[moduleId].length === 0) {\n      delete stylesInDom[moduleId];\n    }\n  };\n};\n\n//# sourceURL=webpack:///./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles.css */ \"./src/styles.css\");\n/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_styles_css__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles.scss */ \"./src/styles.scss\");\n/* harmony import */ var _styles_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_scss__WEBPACK_IMPORTED_MODULE_1__);\n\n\n$(\".app\").hide();\n$(document).ready(function () {\n  $(\".loader-wrapper\").fadeOut(\"slow\");\n  $(\".app\").fadeIn(\"slow\");\n  $(\".app > .header > .title\").animate({\n    fontSize: \"120px\"\n  }, 800);\n  setTimeout(function () {\n    $(\".app > .header > .motto\").animate({\n      fontSize: \"50px\"\n    });\n    setTimeout(function () {\n      $(\".app > .header > .motto\").animate({\n        fontSize: \"30px\"\n      });\n    }, 200);\n  }, 1500);\n  $(\".app > .contact > .contact-form > .contact-form-button\").click(function (event) {\n    event.preventDefault();\n  });\n  $(\".app > .contact > .contact-form > a.open-modal\").click(function (event) {\n    $(this).modal({\n      fadeDuration: 250\n    });\n    return false;\n  });\n  $(\".app > .footer > .not-clickable\").click(function (e) {\n    e.preventDefault();\n  });\n});\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var api = __webpack_require__(/*! ../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n            var content = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js!./styles.css */ \"./node_modules/css-loader/dist/cjs.js!./src/styles.css\");\n\n            content = content.__esModule ? content.default : content;\n\n            if (typeof content === 'string') {\n              content = [[module.i, content, '']];\n            }\n\nvar options = {};\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = api(module.i, content, options);\n\nvar exported = content.locals ? content.locals : {};\n\n\n\nmodule.exports = exported;\n\n//# sourceURL=webpack:///./src/styles.css?");

/***/ }),

/***/ "./src/styles.scss":
/*!*************************!*\
  !*** ./src/styles.scss ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var api = __webpack_require__(/*! ../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n            var content = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js!../node_modules/sass-loader/dist/cjs.js!./styles.scss */ \"./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles.scss\");\n\n            content = content.__esModule ? content.default : content;\n\n            if (typeof content === 'string') {\n              content = [[module.i, content, '']];\n            }\n\nvar options = {};\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = api(module.i, content, options);\n\nvar exported = content.locals ? content.locals : {};\n\n\n\nmodule.exports = exported;\n\n//# sourceURL=webpack:///./src/styles.scss?");

/***/ })

/******/ });