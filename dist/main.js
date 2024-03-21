/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/stylesheets/style.css":
/*!*************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/stylesheets/style.css ***!
  \*************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ \"./node_modules/css-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);\n// Imports\n\n\n\nvar ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./Lato/Lato-Regular.ttf */ \"./src/stylesheets/Lato/Lato-Regular.ttf\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/images/background.jpg */ \"./src/assets/images/background.jpg\"), __webpack_require__.b);\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);\nvar ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `@font-face {\n  font-family: \"Lato\";\n  src: url(${___CSS_LOADER_URL_REPLACEMENT_0___}) format(\"ttf\");\n  font-weight: 400;\n  font-style: normal;\n}\n* {\n  box-sizing: border-box;\n  margin: 0;\n  padding: 0;\n}\nbody {\n  font-family: \"Lato\", sans-serif;\n  height: 100vh;\n  background-image: url(${___CSS_LOADER_URL_REPLACEMENT_1___});\n  display: flex;\n  flex-direction: column;\n}\n.loader {\n  border-radius: 50%;\n  animation: spin 1s linear infinite;\n  margin: 0 auto;\n}\n\n.loader--main {\n  width: 50px;\n  height: 50px;\n  border: 5px solid white;\n  border-top: 5px solid black;\n  position: absolute;\n  left: 50%;\n  bottom: 50%;\n  transform: translate(-50%, 50%);\n}\n\n.loader--small {\n  width: 30px;\n  height: 30px;\n  border: 2px solid white;\n  border-top: 2px solid black;\n  position: absolute;\n  left: 50%;\n  top: 20%;\n}\n.top-section {\n  height: 200px;\n  padding-top: 40px;\n}\n.search-bar {\n  width: 500px;\n  max-width: 90%;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  background-color: white;\n  border-radius: 50px;\n  padding: 0 1em;\n  margin: 0 auto;\n}\n\n#dropdown {\n  width: 420px;\n  margin: 0 auto;\n  border: 1.5px solid black;\n  background-color: white;\n  color: black;\n  list-style-type: none;\n  position: relative;\n  z-index: 1;\n}\n.dropdown-menu-item {\n  text-decoration: none;\n  margin-left: 1.5em;\n  color: black;\n}\n.dropdown-list {\n  margin: 1em 1em;\n}\n.dropdown-menu-item:hover {\n  opacity: 0.5;\n}\n.search {\n  font-size: 1.75rem;\n  border: none;\n  outline: none;\n  width: 100%;\n}\n.search-icon {\n  border: none;\n  padding: 0;\n  background-color: transparent;\n  cursor: pointer;\n}\n.search-bar:focus-within {\n  box-shadow: 1px 2px 5px 0px rgba(0, 0, 0, 0.75);\n}\n.weather {\n  width: 500px;\n  max-width: 80%;\n  margin: 3em auto;\n  text-align: center;\n  color: white;\n  position: relative;\n  flex: 1;\n}\n.weather-location {\n  text-transform: uppercase;\n}\n.weather-location,\n.weather-description {\n  min-width: 90%;\n}\n.weather-condition-img {\n  position: absolute;\n  top: 20px;\n  right: 0;\n  transform: translate(20%);\n  z-index: 2;\n}\n.weather-temps {\n  margin: 2em auto 0;\n  width: 300px;\n  height: 300px;\n  border: 5px solid white;\n  color: white;\n  border-radius: 50%;\n  position: relative;\n}\n.current-temperature {\n  position: absolute;\n  font-size: 6rem;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n}\n.sub-temp {\n  position: absolute;\n  left: 50%;\n  top: 70%;\n  transform: translate(-50%);\n  font-size: 1.2rem;\n}\n#error {\n  width: 500px;\n  max-width: 80%;\n  margin: 3em auto;\n  text-align: center;\n  color: white;\n}\n.show {\n  display: block;\n}\n\n.toggle-container {\n  position: absolute;\n  left: 35%;\n  bottom: 70%;\n}\n\n#temp-toggle {\n  appearance: none;\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  -ms-appearance: none;\n  -o-appearance: none;\n  position: relative;\n  background-color: #ccc;\n  border-radius: 25px;\n  width: 75px;\n  height: 40px;\n  outline: none;\n  cursor: pointer;\n  transition: background-color 0.3s;\n}\n\n#temp-toggle::after {\n  content: \"F°\";\n  position: absolute;\n  font-size: 1.2rem;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background-color: white;\n  top: 50%;\n  left: 30%;\n  height: 2rem;\n  width: 2rem;\n  transform: translate(-50%, -50%);\n  border-radius: 50%;\n  transition: left 0.3s;\n  border: 0.5px black solid;\n}\n#temp-toggle:checked {\n  background-color: #addfff;\n}\n#temp-toggle:checked:after {\n  content: \"C°\";\n  left: 70%;\n}\n.footer {\n  background-color: rgb(34, 28, 28);\n  color: white;\n  padding: 1em 2em;\n  position: fixed;\n  bottom: 0;\n  width: 100%;\n  text-align: center;\n  flex-shrink: 0;\n  z-index: 2;\n}\n\n@keyframes spin {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://weather-app/./src/stylesheets/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://weather-app/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (url, options) {\n  if (!options) {\n    options = {};\n  }\n  if (!url) {\n    return url;\n  }\n  url = String(url.__esModule ? url.default : url);\n\n  // If url is already wrapped in quotes, remove them\n  if (/^['\"].*['\"]$/.test(url)) {\n    url = url.slice(1, -1);\n  }\n  if (options.hash) {\n    url += options.hash;\n  }\n\n  // Should url be wrapped?\n  // See https://drafts.csswg.org/css-values-3/#urls\n  if (/[\"'() \\t\\n]|(%20)/.test(url) || options.needQuotes) {\n    return \"\\\"\".concat(url.replace(/\"/g, '\\\\\"').replace(/\\n/g, \"\\\\n\"), \"\\\"\");\n  }\n  return url;\n};\n\n//# sourceURL=webpack://weather-app/./node_modules/css-loader/dist/runtime/getUrl.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://weather-app/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/stylesheets/style.css":
/*!***********************************!*\
  !*** ./src/stylesheets/style.css ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/stylesheets/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://weather-app/./src/stylesheets/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://weather-app/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://weather-app/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://weather-app/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://weather-app/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://weather-app/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://weather-app/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/domUtils.js":
/*!*************************!*\
  !*** ./src/domUtils.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   clearWeatherElements: () => (/* binding */ clearWeatherElements),\n/* harmony export */   createSearchDropdown: () => (/* binding */ createSearchDropdown),\n/* harmony export */   createWeatherElements: () => (/* binding */ createWeatherElements)\n/* harmony export */ });\n/* harmony import */ var _assets_images_cloudy_gif__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./assets/images/cloudy.gif */ \"./src/assets/images/cloudy.gif\");\n/* harmony import */ var _assets_images_sunny_gif__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assets/images/sunny.gif */ \"./src/assets/images/sunny.gif\");\n/* harmony import */ var _assets_images_rainy_gif__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./assets/images/rainy.gif */ \"./src/assets/images/rainy.gif\");\n/* harmony import */ var _assets_images_snow_gif__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./assets/images/snow.gif */ \"./src/assets/images/snow.gif\");\n/* harmony import */ var _assets_images_windy_gif__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./assets/images/windy.gif */ \"./src/assets/images/windy.gif\");\n/* harmony import */ var _assets_images_storm_gif__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./assets/images/storm.gif */ \"./src/assets/images/storm.gif\");\n\n\n\n\n\n\n\nfunction setTempValues(data, tempUnit = \"farenheit\") {\n  const currentTemp = document.querySelector(\".current-temperature\");\n  const currentHighAndLowTemp = document.querySelector(\".sub-temp\");\n\n  const temp =\n    tempUnit === \"celsius\" ? data.current.temp_c : data.current.temp_f;\n  const minTemp =\n    tempUnit === \"celsius\"\n      ? data.forecast.forecastday[0].day.mintemp_c\n      : data.forecast.forecastday[0].day.mintemp_f;\n  const maxTemp =\n    tempUnit === \"celsius\"\n      ? data.forecast.forecastday[0].day.maxtemp_c\n      : data.forecast.forecastday[0].day.maxtemp_f;\n\n  currentTemp.textContent = `${temp}°`;\n  currentHighAndLowTemp.textContent = `H:${maxTemp}° L:${minTemp}°`;\n}\nfunction createWeatherImage(data) {\n  const weatherCondition = data.current.condition.text;\n  const img = createElement(\"img\", \"weather-condition-img\");\n  const weather = weatherCondition.toLowerCase();\n\n  if (weather.includes(\"sun\")) {\n    img.src = _assets_images_sunny_gif__WEBPACK_IMPORTED_MODULE_1__;\n  } else if (weather.includes(\"snow\")) {\n    img.src = _assets_images_snow_gif__WEBPACK_IMPORTED_MODULE_3__;\n  } else if (weather.includes(\"rain\")) {\n    img.src = _assets_images_rainy_gif__WEBPACK_IMPORTED_MODULE_2__;\n  } else if (weather.includes(\"wind\")) {\n    img.src = _assets_images_windy_gif__WEBPACK_IMPORTED_MODULE_4__;\n  } else if (weather.includes(\"storm\")) {\n    img.src = _assets_images_storm_gif__WEBPACK_IMPORTED_MODULE_5__;\n  } else {\n    img.src = _assets_images_cloudy_gif__WEBPACK_IMPORTED_MODULE_0__;\n  }\n  return img;\n}\nfunction createTempToggle(data) {\n  const toggleContainer = document.createElement(\"div\");\n  const tempToggle = document.createElement(\"input\");\n\n  toggleContainer.classList.add(\"toggle-container\");\n  tempToggle.id = \"temp-toggle\";\n\n  tempToggle.setAttribute(\"type\", \"checkbox\");\n  toggleContainer.append(tempToggle);\n\n  tempToggle.addEventListener(\"change\", (e) => {\n    if (e.target.checked) {\n      setTempValues(data, \"celsius\");\n    } else {\n      setTempValues(data);\n    }\n  });\n\n  return toggleContainer;\n}\nfunction createWeatherElements(data) {\n  const body = document.querySelector(\"body\");\n  const weatherInfoSection = createWeatherInfoSection(data);\n  const weatherContentContainer = createWeatherContentContainer();\n  const weatherTemperatureSection = createWeatherTemperatures(data);\n\n  weatherInfoSection.append(weatherTemperatureSection);\n  const weatherContent = appendElements(weatherContentContainer, [\n    weatherInfoSection,\n  ]);\n\n  body.append(weatherContent);\n}\n\nfunction createWeatherInfoSection(data) {\n  const weatherInfoSection = createElement(\"section\", \"weather\");\n  const weatherLocation = createElement(\n    \"h1\",\n    \"weather-location\",\n    `${data.location.name}, ${data.location.region}`\n  );\n  const weatherDescription = createElement(\n    \"h3\",\n    \"weather-description\",\n    data.current.condition.text\n  );\n  const weatherImg = createWeatherImage(data);\n  return appendElements(weatherInfoSection, [\n    weatherLocation,\n    weatherDescription,\n    weatherImg,\n  ]);\n}\n\nfunction createWeatherContentContainer() {\n  return createElement(\"div\", \"current-weather-details\");\n}\n\nfunction createWeatherTemperatures(data) {\n  const tempUnitSwitch = createTempToggle(data);\n  const temp = data.current.temp_f;\n  const minTemp = data.forecast.forecastday[0].day.mintemp_f;\n  const maxTemp = data.forecast.forecastday[0].day.maxtemp_f;\n\n  const weatherTemperature = createElement(\n    \"p\",\n    \"current-temperature\",\n    `${temp}°`\n  );\n  const weatherHighAndLowTemp = createElement(\n    \"p\",\n    \"sub-temp\",\n    `H:${maxTemp}° L:${minTemp}°`\n  );\n  const weatherTemperatureSection = createElement(\"div\", \"weather-temps\");\n\n  appendElements(weatherTemperatureSection, [\n    weatherTemperature,\n    weatherHighAndLowTemp,\n    tempUnitSwitch,\n  ]);\n  return weatherTemperatureSection;\n}\n\nfunction createElement(tagName, className, textContent = \"\") {\n  const element = document.createElement(tagName);\n  if (className) {\n    element.classList.add(className);\n  }\n  element.textContent = textContent;\n  return element;\n}\n\nfunction appendElements(parent, children) {\n  children.forEach((child) => parent.appendChild(child));\n  return parent;\n}\n\nfunction createSearchDropdown(data) {\n  const searchInput = document.querySelector(\".search\");\n  const dropdownSection = document.querySelector(\".dropdown-menu\");\n  const dropdown = document.createElement(\"ul\");\n  dropdown.id = \"dropdown\";\n\n  data.forEach((location) => {\n    const dropdownList = document.createElement(\"li\");\n    const dropdownItem = document.createElement(\"a\");\n\n    dropdownItem.classList.add(\"dropdown-menu-item\");\n    dropdownItem.setAttribute(\"href\", \"#\");\n    dropdownList.classList.add(\"dropdown-list\");\n\n    dropdownItem.textContent = `${location.name}, ${location.region}`;\n    dropdownItem.addEventListener(\"click\", (event) => {\n      const clickedLocation = event.target.textContent;\n      searchInput.value = clickedLocation;\n    });\n\n    dropdownList.append(dropdownItem);\n    dropdown.append(dropdownList);\n  });\n  dropdownSection.append(dropdown);\n}\n\nfunction clearWeatherElements() {\n  const weatherSection = document.querySelector(\".weather\");\n  weatherSection.remove();\n}\n\n\n\n\n//# sourceURL=webpack://weather-app/./src/domUtils.js?");

/***/ }),

/***/ "./src/fetchData.js":
/*!**************************!*\
  !*** ./src/fetchData.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   fetchCurrentData: () => (/* binding */ fetchCurrentData),\n/* harmony export */   fetchLocationsData: () => (/* binding */ fetchLocationsData)\n/* harmony export */ });\nconst weatherApiKey = \"db4d7cfe43f54003aa0155150240803\";\nasync function fetchCurrentData(location = \"Binghamton\", days = \"1\") {\n  const response = await fetch(\n    `https://api.weatherapi.com/v1/forecast.json?key=${weatherApiKey}&q=${location}&days=${days}aqi=no&alerts=no`\n  );\n  if (!response.ok) {\n    throw new Error(\"Network response was not ok\");\n  }\n  const weatherData = await response.json();\n  return weatherData;\n}\n\nasync function fetchLocationsData(char) {\n  const response = await fetch(\n    `https://api.weatherapi.com/v1/search.json?key=${weatherApiKey}&q=${char}`\n  );\n  const locationData = await response.json();\n\n  return locationData;\n}\n\n\n\n\n//# sourceURL=webpack://weather-app/./src/fetchData.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _domUtils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./domUtils */ \"./src/domUtils.js\");\n/* harmony import */ var _fetchData__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./fetchData */ \"./src/fetchData.js\");\n/* harmony import */ var _stylesheets_style_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./stylesheets/style.css */ \"./src/stylesheets/style.css\");\n\n\n\n\n(function main() {\n  function handleError(err) {\n    const body = document.querySelector(\"body\");\n    const msg = document.createElement(\"h2\");\n\n    msg.innerText = `${err}`;\n\n    msg.id = \"error\";\n\n    body.appendChild(msg);\n  }\n\n  function createLoader(size) {\n    const loader = document.createElement(\"div\");\n\n    loader.classList.add(\"loader\", `loader--${size}`);\n\n    return loader;\n  }\n  function hideLoading(element) {\n    element.remove();\n  }\n\n  function clearInputField() {\n    const searchInput = document.querySelector(\".search\");\n    searchInput.value = \"\";\n  }\n  function fetchAndCreate(location) {\n    const body = document.querySelector(\"body\");\n    const loader = createLoader(\"main\");\n    body.append(loader);\n\n    return (0,_fetchData__WEBPACK_IMPORTED_MODULE_1__.fetchCurrentData)(location)\n      .then((data) => (0,_domUtils__WEBPACK_IMPORTED_MODULE_0__.createWeatherElements)(data))\n      .catch((err) => handleError(err))\n      .finally(() => hideLoading(loader));\n  }\n\n  async function addListeners() {\n    const searchInput = document.querySelector(\".search\");\n    const searchBtn = document.querySelector(\".search-icon\");\n    const dropdown = document.querySelector(\".dropdown-menu\");\n    let timer;\n\n    // Event handler for search bar filtering searches as you type\n    // Only make the API call after the user has stopped typing\n    searchInput.addEventListener(\"input\", (e) => {\n      const string = e.target.value;\n      clearTimeout(timer);\n      if (string) {\n        timer = setTimeout(async () => {\n          const searchResults = await (0,_fetchData__WEBPACK_IMPORTED_MODULE_1__.fetchLocationsData)(string);\n          dropdown.innerHTML = \"\";\n          (0,_domUtils__WEBPACK_IMPORTED_MODULE_0__.createSearchDropdown)(searchResults);\n        }, 500);\n      }\n    });\n    // Clicking outside of the search will hide the dropdown\n    searchInput.addEventListener(\"blur\", (event) => {\n      if (\n        event.relatedTarget !== null &&\n        event.relatedTarget.className === \"dropdown-menu-item\"\n      ) {\n        searchInput.focus();\n        return;\n      }\n      dropdown.style.display = \"none\";\n    });\n    // Only show the dropdown when input field is focuesd\n    searchInput.addEventListener(\"focus\", () => {\n      dropdown.style.display = \"block\";\n    });\n    // Event handler allowing pressing 'enter' key instead\n    searchInput.addEventListener(\"keydown\", (event) => {\n      const submitValue = searchInput.value;\n      // Check if user inputted a string of length greater than 0\n      if (event.key === \"Enter\" && submitValue.length > 0) {\n        event.preventDefault();\n        (0,_domUtils__WEBPACK_IMPORTED_MODULE_0__.clearWeatherElements)();\n        fetchAndCreate(submitValue);\n        clearInputField();\n        dropdown.innerHTML = \"\";\n      }\n    });\n    // Event handler for clicking search icon\n    searchBtn.addEventListener(\"click\", (event) => {\n      event.preventDefault();\n      const submitValue = searchInput.value;\n      // Check if user inputted a string of length greater than 0\n      if (submitValue.length > 0) {\n        (0,_domUtils__WEBPACK_IMPORTED_MODULE_0__.clearWeatherElements)();\n        fetchAndCreate(submitValue);\n        clearInputField();\n        dropdown.innerHTML = \"\";\n      }\n    });\n  }\n\n  fetchAndCreate().then(() => addListeners());\n})();\n\n\n//# sourceURL=webpack://weather-app/./src/index.js?");

/***/ }),

/***/ "./src/assets/images/background.jpg":
/*!******************************************!*\
  !*** ./src/assets/images/background.jpg ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"5bcf0f79553439d4357f.jpg\";\n\n//# sourceURL=webpack://weather-app/./src/assets/images/background.jpg?");

/***/ }),

/***/ "./src/assets/images/cloudy.gif":
/*!**************************************!*\
  !*** ./src/assets/images/cloudy.gif ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"5344787e40f835907b01.gif\";\n\n//# sourceURL=webpack://weather-app/./src/assets/images/cloudy.gif?");

/***/ }),

/***/ "./src/assets/images/rainy.gif":
/*!*************************************!*\
  !*** ./src/assets/images/rainy.gif ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"b04ef4a7efb9aee1aea5.gif\";\n\n//# sourceURL=webpack://weather-app/./src/assets/images/rainy.gif?");

/***/ }),

/***/ "./src/assets/images/snow.gif":
/*!************************************!*\
  !*** ./src/assets/images/snow.gif ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"e3ba1a8e272e5fd8f947.gif\";\n\n//# sourceURL=webpack://weather-app/./src/assets/images/snow.gif?");

/***/ }),

/***/ "./src/assets/images/storm.gif":
/*!*************************************!*\
  !*** ./src/assets/images/storm.gif ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"d9039a2dbe622c598e1d.gif\";\n\n//# sourceURL=webpack://weather-app/./src/assets/images/storm.gif?");

/***/ }),

/***/ "./src/assets/images/sunny.gif":
/*!*************************************!*\
  !*** ./src/assets/images/sunny.gif ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"ee3e64d0f3a537cdd275.gif\";\n\n//# sourceURL=webpack://weather-app/./src/assets/images/sunny.gif?");

/***/ }),

/***/ "./src/assets/images/windy.gif":
/*!*************************************!*\
  !*** ./src/assets/images/windy.gif ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"12967c1e218dbb190517.gif\";\n\n//# sourceURL=webpack://weather-app/./src/assets/images/windy.gif?");

/***/ }),

/***/ "./src/stylesheets/Lato/Lato-Regular.ttf":
/*!***********************************************!*\
  !*** ./src/stylesheets/Lato/Lato-Regular.ttf ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"9d883d540ee2b4de8024.ttf\";\n\n//# sourceURL=webpack://weather-app/./src/stylesheets/Lato/Lato-Regular.ttf?");

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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;