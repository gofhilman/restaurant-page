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

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/modern-normalize/modern-normalize.css":
/*!**************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/modern-normalize/modern-normalize.css ***!
  \**************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `/*! modern-normalize v3.0.1 | MIT License | https://github.com/sindresorhus/modern-normalize */\n\n/*\nDocument\n========\n*/\n\n/**\nUse a better box model (opinionated).\n*/\n\n*,\n::before,\n::after {\n\tbox-sizing: border-box;\n}\n\nhtml {\n\t/* Improve consistency of default fonts in all browsers. (https://github.com/sindresorhus/modern-normalize/issues/3) */\n\tfont-family:\n\t\tsystem-ui,\n\t\t'Segoe UI',\n\t\tRoboto,\n\t\tHelvetica,\n\t\tArial,\n\t\tsans-serif,\n\t\t'Apple Color Emoji',\n\t\t'Segoe UI Emoji';\n\tline-height: 1.15; /* 1. Correct the line height in all browsers. */\n\t-webkit-text-size-adjust: 100%; /* 2. Prevent adjustments of font size after orientation changes in iOS. */\n\ttab-size: 4; /* 3. Use a more readable tab size (opinionated). */\n}\n\n/*\nSections\n========\n*/\n\nbody {\n\tmargin: 0; /* Remove the margin in all browsers. */\n}\n\n/*\nText-level semantics\n====================\n*/\n\n/**\nAdd the correct font weight in Chrome and Safari.\n*/\n\nb,\nstrong {\n\tfont-weight: bolder;\n}\n\n/**\n1. Improve consistency of default fonts in all browsers. (https://github.com/sindresorhus/modern-normalize/issues/3)\n2. Correct the odd 'em' font sizing in all browsers.\n*/\n\ncode,\nkbd,\nsamp,\npre {\n\tfont-family:\n\t\tui-monospace,\n\t\tSFMono-Regular,\n\t\tConsolas,\n\t\t'Liberation Mono',\n\t\tMenlo,\n\t\tmonospace; /* 1 */\n\tfont-size: 1em; /* 2 */\n}\n\n/**\nAdd the correct font size in all browsers.\n*/\n\nsmall {\n\tfont-size: 80%;\n}\n\n/**\nPrevent 'sub' and 'sup' elements from affecting the line height in all browsers.\n*/\n\nsub,\nsup {\n\tfont-size: 75%;\n\tline-height: 0;\n\tposition: relative;\n\tvertical-align: baseline;\n}\n\nsub {\n\tbottom: -0.25em;\n}\n\nsup {\n\ttop: -0.5em;\n}\n\n/*\nTabular data\n============\n*/\n\n/**\nCorrect table border color inheritance in Chrome and Safari. (https://issues.chromium.org/issues/40615503, https://bugs.webkit.org/show_bug.cgi?id=195016)\n*/\n\ntable {\n\tborder-color: currentcolor;\n}\n\n/*\nForms\n=====\n*/\n\n/**\n1. Change the font styles in all browsers.\n2. Remove the margin in Firefox and Safari.\n*/\n\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n\tfont-family: inherit; /* 1 */\n\tfont-size: 100%; /* 1 */\n\tline-height: 1.15; /* 1 */\n\tmargin: 0; /* 2 */\n}\n\n/**\nCorrect the inability to style clickable types in iOS and Safari.\n*/\n\nbutton,\n[type='button'],\n[type='reset'],\n[type='submit'] {\n\t-webkit-appearance: button;\n}\n\n/**\nRemove the padding so developers are not caught out when they zero out 'fieldset' elements in all browsers.\n*/\n\nlegend {\n\tpadding: 0;\n}\n\n/**\nAdd the correct vertical alignment in Chrome and Firefox.\n*/\n\nprogress {\n\tvertical-align: baseline;\n}\n\n/**\nCorrect the cursor style of increment and decrement buttons in Safari.\n*/\n\n::-webkit-inner-spin-button,\n::-webkit-outer-spin-button {\n\theight: auto;\n}\n\n/**\n1. Correct the odd appearance in Chrome and Safari.\n2. Correct the outline style in Safari.\n*/\n\n[type='search'] {\n\t-webkit-appearance: textfield; /* 1 */\n\toutline-offset: -2px; /* 2 */\n}\n\n/**\nRemove the inner padding in Chrome and Safari on macOS.\n*/\n\n::-webkit-search-decoration {\n\t-webkit-appearance: none;\n}\n\n/**\n1. Correct the inability to style clickable types in iOS and Safari.\n2. Change font properties to 'inherit' in Safari.\n*/\n\n::-webkit-file-upload-button {\n\t-webkit-appearance: button; /* 1 */\n\tfont: inherit; /* 2 */\n}\n\n/*\nInteractive\n===========\n*/\n\n/*\nAdd the correct display in Chrome and Safari.\n*/\n\nsummary {\n\tdisplay: list-item;\n}\n`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack:///./node_modules/modern-normalize/modern-normalize.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/fonts/stylesheet.css":
/*!************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/fonts/stylesheet.css ***!
  \************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ \"./node_modules/css-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);\n// Imports\n\n\n\nvar ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! Lato-BoldItalic.woff2 */ \"./src/fonts/Lato-BoldItalic.woff2\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! Lato-BoldItalic.woff */ \"./src/fonts/Lato-BoldItalic.woff\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! Lato-Italic.woff2 */ \"./src/fonts/Lato-Italic.woff2\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_3___ = new URL(/* asset import */ __webpack_require__(/*! Lato-Italic.woff */ \"./src/fonts/Lato-Italic.woff\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_4___ = new URL(/* asset import */ __webpack_require__(/*! Lato-Bold.woff2 */ \"./src/fonts/Lato-Bold.woff2\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_5___ = new URL(/* asset import */ __webpack_require__(/*! Lato-Bold.woff */ \"./src/fonts/Lato-Bold.woff\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_6___ = new URL(/* asset import */ __webpack_require__(/*! Lato-Regular.woff2 */ \"./src/fonts/Lato-Regular.woff2\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_7___ = new URL(/* asset import */ __webpack_require__(/*! Lato-Regular.woff */ \"./src/fonts/Lato-Regular.woff\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_8___ = new URL(/* asset import */ __webpack_require__(/*! Montserrat-ThinItalic.woff2 */ \"./src/fonts/Montserrat-ThinItalic.woff2\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_9___ = new URL(/* asset import */ __webpack_require__(/*! Montserrat-ThinItalic.woff */ \"./src/fonts/Montserrat-ThinItalic.woff\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_10___ = new URL(/* asset import */ __webpack_require__(/*! Montserrat-Thin.woff2 */ \"./src/fonts/Montserrat-Thin.woff2\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_11___ = new URL(/* asset import */ __webpack_require__(/*! Montserrat-Thin.woff */ \"./src/fonts/Montserrat-Thin.woff\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_12___ = new URL(/* asset import */ __webpack_require__(/*! PermanentMarker-Regular.woff2 */ \"./src/fonts/PermanentMarker-Regular.woff2\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_13___ = new URL(/* asset import */ __webpack_require__(/*! PermanentMarker-Regular.woff */ \"./src/fonts/PermanentMarker-Regular.woff\"), __webpack_require__.b);\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);\nvar ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);\nvar ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);\nvar ___CSS_LOADER_URL_REPLACEMENT_3___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_3___);\nvar ___CSS_LOADER_URL_REPLACEMENT_4___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_4___);\nvar ___CSS_LOADER_URL_REPLACEMENT_5___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_5___);\nvar ___CSS_LOADER_URL_REPLACEMENT_6___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_6___);\nvar ___CSS_LOADER_URL_REPLACEMENT_7___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_7___);\nvar ___CSS_LOADER_URL_REPLACEMENT_8___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_8___);\nvar ___CSS_LOADER_URL_REPLACEMENT_9___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_9___);\nvar ___CSS_LOADER_URL_REPLACEMENT_10___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_10___);\nvar ___CSS_LOADER_URL_REPLACEMENT_11___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_11___);\nvar ___CSS_LOADER_URL_REPLACEMENT_12___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_12___);\nvar ___CSS_LOADER_URL_REPLACEMENT_13___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_13___);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `@font-face {\n    font-family: 'Lato';\n    src: url(${___CSS_LOADER_URL_REPLACEMENT_0___}) format('woff2'),\n        url(${___CSS_LOADER_URL_REPLACEMENT_1___}) format('woff');\n    font-weight: bold;\n    font-style: italic;\n    font-display: swap;\n}\n\n@font-face {\n    font-family: 'Lato';\n    src: url(${___CSS_LOADER_URL_REPLACEMENT_2___}) format('woff2'),\n        url(${___CSS_LOADER_URL_REPLACEMENT_3___}) format('woff');\n    font-weight: normal;\n    font-style: italic;\n    font-display: swap;\n}\n\n@font-face {\n    font-family: 'Lato';\n    src: url(${___CSS_LOADER_URL_REPLACEMENT_4___}) format('woff2'),\n        url(${___CSS_LOADER_URL_REPLACEMENT_5___}) format('woff');\n    font-weight: bold;\n    font-style: normal;\n    font-display: swap;\n}\n\n@font-face {\n    font-family: 'Lato';\n    src: url(${___CSS_LOADER_URL_REPLACEMENT_6___}) format('woff2'),\n        url(${___CSS_LOADER_URL_REPLACEMENT_7___}) format('woff');\n    font-weight: normal;\n    font-style: normal;\n    font-display: swap;\n}\n\n@font-face {\n    font-family: 'Montserrat';\n    src: url(${___CSS_LOADER_URL_REPLACEMENT_8___}) format('woff2'),\n        url(${___CSS_LOADER_URL_REPLACEMENT_9___}) format('woff');\n    font-weight: 100;\n    font-style: italic;\n    font-display: swap;\n}\n\n@font-face {\n    font-family: 'Montserrat';\n    src: url(${___CSS_LOADER_URL_REPLACEMENT_10___}) format('woff2'),\n        url(${___CSS_LOADER_URL_REPLACEMENT_11___}) format('woff');\n    font-weight: 100;\n    font-style: normal;\n    font-display: swap;\n}\n\n@font-face {\n    font-family: 'Permanent Marker';\n    src: url(${___CSS_LOADER_URL_REPLACEMENT_12___}) format('woff2'),\n        url(${___CSS_LOADER_URL_REPLACEMENT_13___}) format('woff');\n    font-weight: normal;\n    font-style: normal;\n    font-display: swap;\n}\n\n`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack:///./src/fonts/stylesheet.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles.css":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles.css ***!
  \**************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ \"./node_modules/css-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);\n// Imports\n\n\n\nvar ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! main-image-cropped.jpeg */ \"./src/main-image-cropped.jpeg\"), __webpack_require__.b);\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `:root {\n    line-height: 1.5;\n    --main-color: rgb(204, 102, 77);\n    --subcolor-one: rgba(0, 128, 128, 0.9);\n    --subcolor-two: rgb(255, 204, 77);\n    --bg-color: rgb(255, 241, 236);\n    --text-color: rgb(51, 51, 51);\n}\n  \nh1, h2, h3, h4, h5, figure, p, ol, ul {\n    margin: 0;\n}\n  \nol[role=\"list\"], ul[role=\"list\"] {\n    list-style: none;\n    padding-inline: 0;\n}\n  \nh1, h2, h3, h4, h5 {\n    font-size: inherit;\n    font-weight: inherit;\n}\n\nimg {\n    display: block;\n    max-inline-size: 100%;\n}\n\nbody {\n    background-color: var(--main-color);\n}\n\nheader {\n    padding: 0 30px 0 10px;\n    width: 100%;\n    height: 500px;\n    background-image: url(${___CSS_LOADER_URL_REPLACEMENT_0___});\n    background-size: cover;\n    background-position: center;\n    display: flex;\n    justify-content: space-between;\n    align-items: flex-start;\n    flex-wrap: wrap;\n    color: white;\n    border-bottom-left-radius: 10px; \n    border-bottom-right-radius: 10px;\n    box-shadow: 0 7px 10px rgba(0, 0, 0, 0.7);\n}\n\nheader > div {\n    display: flex;\n    gap: 20px;\n}\n\nheader p {\n    line-height: 150px;\n}\n\nnav {\n    display: flex;\n    gap: 30px;\n    flex-wrap: wrap;\n    margin-top: 50px;\n    font-size: 3rem;\n}\n\nnav > button {\n    all: unset;\n    cursor: pointer;\n    padding: 0 20px;\n}\n\nnav > button:hover {\n    color: var(--subcolor-two);\n}\n\n.current-page {\n    background-color: var(--subcolor-one);\n    border-radius: 40px;\n}\n\n.marker, .restaurant-name {\n    font-family: 'Permanent Marker', system-ui, -apple-system, \n        BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, \n        Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\n}\n\n.restaurant-name {\n    font-size: 7rem;\n}\n\nh1 {\n    font-family: Montserrat, system-ui, -apple-system, \n        BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, \n        Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\n}\n\nh2 {\n    font-family: Lato, system-ui, -apple-system, \n        BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, \n        Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\n}\n\n.home-content {\n    padding: 40px 80px 0 40px;\n    display: flex;\n    justify-content: space-between;\n    color: white;\n}\n\n.home-content h2:first-child {  \n    font-size: 5rem;\n    font-weight: 900;\n    margin: 10px 0 25px 0;\n    color: var(--text-color);\n}\n\n.home-content h2:last-child {  \n    font-size: 4rem;\n    color: white;\n}\n\n#content-nav {\n    margin-top: 2px;\n    padding: 1px 25px;\n    display: flex;\n    justify-content: space-between;\n    flex-wrap: wrap;\n    font-size: 3rem;\n    background-color: var(--subcolor-one);\n    border-radius: 40px;\n}\n\n#content-nav > button {\n    all: unset; \n    cursor: pointer;\n}\n\n#content-nav > button:hover {\n    color: var(--subcolor-two);\n}\n\n.menu-content {\n    padding: 40px 0;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    gap: 30px;\n}\n\n.container {\n    background-color: var(--bg-color);\n    padding: 0 30px 30px 0;\n    border-radius: 20px;\n    box-shadow: 0 7px 10px rgba(0, 0, 0, 0.7);\n}\n\n.container-title {\n    text-align: center;\n    font-size: 4rem;\n    margin-bottom: 20px;\n    color: var(--subcolor-one);\n}\n\n.container-content {\n    display: flex;\n    flex-direction: column;\n    gap: 5px;\n}\n\n.menu {\n    display: grid;\n    grid-template-columns: auto 500px;\n    grid-template-rows: 150px;\n    gap: 10px 20px;\n}\n\n.food-image {\n    grid-row: 1 / 3;\n    border-top-right-radius: 15px;\n    border-bottom-right-radius: 15px;\n}\n\n.food-name {\n    font-size: 3rem;\n    font-weight: 900;\n}\n\n.food-info {\n    display: grid;\n    grid-template-columns: max-content max-content;\n    grid-template-rows: repeat(4, max-content);\n    column-gap: 30px;\n}\n\n.info-number {\n    font-size: 3rem;\n    font-weight: 800;\n}\n\n.info-text {\n    font-size: 1.5rem;\n    font-weight: 500;\n}\n\n.contact-content {\n    margin: 40px min(100px, 5%);\n    padding: 0 50px 30px 30px;\n    background-color: var(--bg-color);\n    border-radius: 20px;\n    box-shadow: 0 7px 10px rgba(0, 0, 0, 0.7);\n    display: flex;\n    flex-wrap: wrap;\n    justify-content: space-between;\n}\n\n.contact-content p {\n    font-size: 5rem;\n    margin-bottom: 20px\n}\n\n.contact-content h1 {\n    font-size: 3rem;\n    font-weight: 700;\n    margin: 20px 0;\n}\n\n.detail-grid {\n    display: grid;\n    grid-template-columns: max-content max-content;\n    align-items: center;\n    gap: 8px 20px;\n}\n\n.detail-grid > h2 {\n    font-size: 1.8rem;\n}\n`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack:///./src/styles.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack:///./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (url, options) {\n  if (!options) {\n    options = {};\n  }\n  if (!url) {\n    return url;\n  }\n  url = String(url.__esModule ? url.default : url);\n\n  // If url is already wrapped in quotes, remove them\n  if (/^['\"].*['\"]$/.test(url)) {\n    url = url.slice(1, -1);\n  }\n  if (options.hash) {\n    url += options.hash;\n  }\n\n  // Should url be wrapped?\n  // See https://drafts.csswg.org/css-values-3/#urls\n  if (/[\"'() \\t\\n]|(%20)/.test(url) || options.needQuotes) {\n    return \"\\\"\".concat(url.replace(/\"/g, '\\\\\"').replace(/\\n/g, \"\\\\n\"), \"\\\"\");\n  }\n  return url;\n};\n\n//# sourceURL=webpack:///./node_modules/css-loader/dist/runtime/getUrl.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack:///./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./node_modules/modern-normalize/modern-normalize.css":
/*!************************************************************!*\
  !*** ./node_modules/modern-normalize/modern-normalize.css ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _css_loader_dist_cjs_js_modern_normalize_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../css-loader/dist/cjs.js!./modern-normalize.css */ \"./node_modules/css-loader/dist/cjs.js!./node_modules/modern-normalize/modern-normalize.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\noptions.insert = _style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\noptions.domAPI = (_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_css_loader_dist_cjs_js_modern_normalize_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_css_loader_dist_cjs_js_modern_normalize_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _css_loader_dist_cjs_js_modern_normalize_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _css_loader_dist_cjs_js_modern_normalize_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack:///./node_modules/modern-normalize/modern-normalize.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack:///./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack:///./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack:///./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack:///./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack:///./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack:///./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/breakfast-1.png":
/*!*****************************!*\
  !*** ./src/breakfast-1.png ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"b9469655f7267f1e3225.png\";\n\n//# sourceURL=webpack:///./src/breakfast-1.png?");

/***/ }),

/***/ "./src/breakfast-2.png":
/*!*****************************!*\
  !*** ./src/breakfast-2.png ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"85b88d0a11c103e56b92.png\";\n\n//# sourceURL=webpack:///./src/breakfast-2.png?");

/***/ }),

/***/ "./src/contacts.js":
/*!*************************!*\
  !*** ./src/contacts.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   contactInfo: () => (/* binding */ contactInfo),\n/* harmony export */   openingHours: () => (/* binding */ openingHours)\n/* harmony export */ });\n/* harmony import */ var _phone_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./phone.svg */ \"./src/phone.svg\");\n/* harmony import */ var _map_marker_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./map-marker.svg */ \"./src/map-marker.svg\");\n\n\n\nconst iconSrc = [_phone_svg__WEBPACK_IMPORTED_MODULE_0__, _map_marker_svg__WEBPACK_IMPORTED_MODULE_1__];\nconst iconAlt = [\"Phone icon\", \"Place icon\"];\nconst contactText = [\"+62 345 6789 0123\", \"60 Sena St, Medan 20986, Indonesia\"];\nconst days = [\"Sun\", \"Mon\\u2013Thu\",\"Fri\\u2013Sat\"];\nconst hours = [\"8am\\u20139pm\", \"9am\\u20139pm\", \"8am\\u201311pm\"];\n\nconst contactInfo = document.createElement('div');\nconst restaurant = document.createElement('p');\nrestaurant.classList.add('marker');\nrestaurant.textContent = \"Meater\";\nconst contactDetails = document.createElement('div');\ncontactDetails.classList.add('detail-grid');\nfor (let i = 0; i < 2; i++) {\n    const contactIcon = document.createElement('img');\n    Object.assign(contactIcon, {\n        src: iconSrc[i],\n        alt: iconAlt[i],\n        width: 50\n    });\n    const contactDetail = document.createElement('h2');\n    contactDetail.textContent = contactText[i];\n    contactDetails.append(contactIcon, contactDetail);\n}\ncontactInfo.append(restaurant, contactDetails);\n\nconst openingHours = document.createElement('div');\nconst hourTitle = document.createElement('h1');\nhourTitle.textContent = \"Opening Hours\";\nconst hourDetails = document.createElement('div');\nhourDetails.classList.add('detail-grid');\nfor (let i = 0; i < 3; i++) {\n    const day = document.createElement('h2');\n    day.textContent = days[i];\n    const hour = document.createElement('h2');\n    hour.textContent = hours[i];\n    hourDetails.append(day, hour);\n}\nopeningHours.append(hourTitle, hourDetails);\n\n\n\n//# sourceURL=webpack:///./src/contacts.js?");

/***/ }),

/***/ "./src/dinner-1.png":
/*!**************************!*\
  !*** ./src/dinner-1.png ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"9d82054eeaeedd92c5ec.png\";\n\n//# sourceURL=webpack:///./src/dinner-1.png?");

/***/ }),

/***/ "./src/dinner-2.png":
/*!**************************!*\
  !*** ./src/dinner-2.png ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"40e044a9026daa4e73f9.png\";\n\n//# sourceURL=webpack:///./src/dinner-2.png?");

/***/ }),

/***/ "./src/fonts/Lato-Bold.woff":
/*!**********************************!*\
  !*** ./src/fonts/Lato-Bold.woff ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"78c0192c25c917d9359a.woff\";\n\n//# sourceURL=webpack:///./src/fonts/Lato-Bold.woff?");

/***/ }),

/***/ "./src/fonts/Lato-Bold.woff2":
/*!***********************************!*\
  !*** ./src/fonts/Lato-Bold.woff2 ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"a37f84abc8d50ca4e478.woff2\";\n\n//# sourceURL=webpack:///./src/fonts/Lato-Bold.woff2?");

/***/ }),

/***/ "./src/fonts/Lato-BoldItalic.woff":
/*!****************************************!*\
  !*** ./src/fonts/Lato-BoldItalic.woff ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"3e3a110f9dc37d11fe71.woff\";\n\n//# sourceURL=webpack:///./src/fonts/Lato-BoldItalic.woff?");

/***/ }),

/***/ "./src/fonts/Lato-BoldItalic.woff2":
/*!*****************************************!*\
  !*** ./src/fonts/Lato-BoldItalic.woff2 ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"0e410321fde33cf82a1e.woff2\";\n\n//# sourceURL=webpack:///./src/fonts/Lato-BoldItalic.woff2?");

/***/ }),

/***/ "./src/fonts/Lato-Italic.woff":
/*!************************************!*\
  !*** ./src/fonts/Lato-Italic.woff ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"ddb48fc87ad0ecbe23b3.woff\";\n\n//# sourceURL=webpack:///./src/fonts/Lato-Italic.woff?");

/***/ }),

/***/ "./src/fonts/Lato-Italic.woff2":
/*!*************************************!*\
  !*** ./src/fonts/Lato-Italic.woff2 ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"85f061a32dbf03b5bfd3.woff2\";\n\n//# sourceURL=webpack:///./src/fonts/Lato-Italic.woff2?");

/***/ }),

/***/ "./src/fonts/Lato-Regular.woff":
/*!*************************************!*\
  !*** ./src/fonts/Lato-Regular.woff ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"20cca9abc1b30ebf6d12.woff\";\n\n//# sourceURL=webpack:///./src/fonts/Lato-Regular.woff?");

/***/ }),

/***/ "./src/fonts/Lato-Regular.woff2":
/*!**************************************!*\
  !*** ./src/fonts/Lato-Regular.woff2 ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"7bda85ac0ee258309c15.woff2\";\n\n//# sourceURL=webpack:///./src/fonts/Lato-Regular.woff2?");

/***/ }),

/***/ "./src/fonts/Montserrat-Thin.woff":
/*!****************************************!*\
  !*** ./src/fonts/Montserrat-Thin.woff ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"9171e42f46c2fe0d4e4f.woff\";\n\n//# sourceURL=webpack:///./src/fonts/Montserrat-Thin.woff?");

/***/ }),

/***/ "./src/fonts/Montserrat-Thin.woff2":
/*!*****************************************!*\
  !*** ./src/fonts/Montserrat-Thin.woff2 ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"e09d1930f4834af86ccd.woff2\";\n\n//# sourceURL=webpack:///./src/fonts/Montserrat-Thin.woff2?");

/***/ }),

/***/ "./src/fonts/Montserrat-ThinItalic.woff":
/*!**********************************************!*\
  !*** ./src/fonts/Montserrat-ThinItalic.woff ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"7f4aad618577a1a37b6a.woff\";\n\n//# sourceURL=webpack:///./src/fonts/Montserrat-ThinItalic.woff?");

/***/ }),

/***/ "./src/fonts/Montserrat-ThinItalic.woff2":
/*!***********************************************!*\
  !*** ./src/fonts/Montserrat-ThinItalic.woff2 ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"fb548c83174ad6fb8530.woff2\";\n\n//# sourceURL=webpack:///./src/fonts/Montserrat-ThinItalic.woff2?");

/***/ }),

/***/ "./src/fonts/PermanentMarker-Regular.woff":
/*!************************************************!*\
  !*** ./src/fonts/PermanentMarker-Regular.woff ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"4fbbd4e7be4a7c65afb4.woff\";\n\n//# sourceURL=webpack:///./src/fonts/PermanentMarker-Regular.woff?");

/***/ }),

/***/ "./src/fonts/PermanentMarker-Regular.woff2":
/*!*************************************************!*\
  !*** ./src/fonts/PermanentMarker-Regular.woff2 ***!
  \*************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"b5a1d27629e3198aaa90.woff2\";\n\n//# sourceURL=webpack:///./src/fonts/PermanentMarker-Regular.woff2?");

/***/ }),

/***/ "./src/fonts/stylesheet.css":
/*!**********************************!*\
  !*** ./src/fonts/stylesheet.css ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_stylesheet_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./stylesheet.css */ \"./node_modules/css-loader/dist/cjs.js!./src/fonts/stylesheet.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\noptions.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_stylesheet_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_stylesheet_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_stylesheet_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_stylesheet_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack:///./src/fonts/stylesheet.css?");

/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   contentNav: () => (/* binding */ contentNav),\n/* harmony export */   leftContent: () => (/* binding */ leftContent),\n/* harmony export */   rightContent: () => (/* binding */ rightContent)\n/* harmony export */ });\nconst leftContent = document.createElement('div');\nconst contentHeader = document.createElement('h2');\nconst contentSubheader = document.createElement('h2');\nconst rightContent = document.createElement('div');\nconst restaurantName = document.createElement('p');\nconst contentNav = document.createElement('div');\nconst contentMenu = document.createElement('button');\nconst reserve = document.createElement('button');\n\ncontentHeader.textContent = \"Fuel your gains\";\ncontentSubheader.textContent = \"Eat clean. Build strong.\";\nrestaurantName.textContent = \"Meater\";\ncontentMenu.textContent = \"Menu\";\nreserve.textContent = \"Reserve\";\n\nrestaurantName.classList.add('restaurant-name');\ncontentNav.classList.add('marker');\ncontentNav.setAttribute('id', 'content-nav');\ncontentMenu.setAttribute('id', 'content-menu');\nreserve.setAttribute('id', 'reserve');\n\ncontentNav.append(contentMenu, reserve);\nleftContent.append(contentHeader, contentSubheader);\nrightContent.append(restaurantName, contentNav);\n\n\n\n//# sourceURL=webpack:///./src/home.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _home_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.js */ \"./src/home.js\");\n/* harmony import */ var _menu_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu.js */ \"./src/menu.js\");\n/* harmony import */ var _contacts_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./contacts.js */ \"./src/contacts.js\");\n/* harmony import */ var _fonts_stylesheet_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./fonts/stylesheet.css */ \"./src/fonts/stylesheet.css\");\n/* harmony import */ var _node_modules_modern_normalize_modern_normalize_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../node_modules/modern-normalize/modern-normalize.css */ \"./node_modules/modern-normalize/modern-normalize.css\");\n/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./styles.css */ \"./src/styles.css\");\n/* harmony import */ var _meater_logo_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./meater-logo.png */ \"./src/meater-logo.png\");\n\n\n\n\n\n\n\n\nconst restaurantPage = (function (doc) {\n    const header = doc.querySelector(\"header\");\n    const nav = doc.querySelector(\"nav\");\n    const home = doc.querySelector(\"#home\");\n    const menu = doc.querySelector(\"#menu\");\n    const contacts = doc.querySelector(\"#contacts\");\n    const navChoices = [home, menu, contacts];\n    const content = doc.querySelector(\"#content\");\n\n    const headerDiv = doc.createElement(\"div\");\n    const headerLogo = doc.createElement(\"img\");\n    const headerTitle = doc.createElement(\"p\");\n    \n    Object.assign(headerLogo, {\n        src: _meater_logo_png__WEBPACK_IMPORTED_MODULE_6__,\n        alt: \"The restaurant logo\",\n        width: 150\n    });\n    headerTitle.classList.add('restaurant-name');\n    nav.classList.add('marker');\n    headerTitle.textContent = \"Meater\";\n\n    function init () {\n        headerDiv.append(headerLogo, headerTitle);\n        header.insertBefore(headerDiv, nav);\n    }\n\n    function reset () {\n        navChoices.forEach(choice => {\n            choice.classList.remove(...choice.classList);\n        });\n        content.classList.remove(...content.classList);\n    }\n\n    function screenController () {\n        let navButton = \"home\";\n        const updateScreen = (navButton) => {\n            switch (navButton) {\n                case \"home\":\n                    reset();\n                    home.classList.add(\"current-page\");\n                    content.classList.add(\"home-content\");\n                    content.replaceChildren(_home_js__WEBPACK_IMPORTED_MODULE_0__.leftContent, _home_js__WEBPACK_IMPORTED_MODULE_0__.rightContent);\n                    break;\n                case \"menu\":\n                    reset();\n                    menu.classList.add(\"current-page\");\n                    content.classList.add(\"menu-content\");\n                    content.replaceChildren(_menu_js__WEBPACK_IMPORTED_MODULE_1__.breakfastContainer, _menu_js__WEBPACK_IMPORTED_MODULE_1__.lunchContainer, _menu_js__WEBPACK_IMPORTED_MODULE_1__.dinnerContainer);\n                    break;\n                case \"contacts\":\n                    reset();\n                    contacts.classList.add(\"current-page\");\n                    content.classList.add(\"contact-content\");\n                    content.replaceChildren(_contacts_js__WEBPACK_IMPORTED_MODULE_2__.contactInfo, _contacts_js__WEBPACK_IMPORTED_MODULE_2__.openingHours);\n            }\n        };\n        const handleHeaderClick = (event) => {\n            navButton = event.target.id;\n            updateScreen(navButton);\n        }\n        const handleContentClick = (event) => {\n            switch (event.target.id) {\n                case \"content-menu\":\n                    navButton = \"menu\";\n                    break;\n                case \"reserve\":\n                    navButton = \"contacts\";\n            }\n            updateScreen(navButton);\n        }\n        nav.addEventListener('click', handleHeaderClick);\n        _home_js__WEBPACK_IMPORTED_MODULE_0__.contentNav.addEventListener('click', handleContentClick);\n        updateScreen(navButton);\n    }\n\n    return { init, screenController }\n})(document);\n\nrestaurantPage.init();\nrestaurantPage.screenController();\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/lunch-1.png":
/*!*************************!*\
  !*** ./src/lunch-1.png ***!
  \*************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"a4715005b31793c94592.png\";\n\n//# sourceURL=webpack:///./src/lunch-1.png?");

/***/ }),

/***/ "./src/lunch-2.png":
/*!*************************!*\
  !*** ./src/lunch-2.png ***!
  \*************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"df55bcc38ccb36beb9bf.png\";\n\n//# sourceURL=webpack:///./src/lunch-2.png?");

/***/ }),

/***/ "./src/main-image-cropped.jpeg":
/*!*************************************!*\
  !*** ./src/main-image-cropped.jpeg ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"be906bf1458f1492e7b7.jpeg\";\n\n//# sourceURL=webpack:///./src/main-image-cropped.jpeg?");

/***/ }),

/***/ "./src/map-marker.svg":
/*!****************************!*\
  !*** ./src/map-marker.svg ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"8ed820373498e050ba48.svg\";\n\n//# sourceURL=webpack:///./src/map-marker.svg?");

/***/ }),

/***/ "./src/meater-logo.png":
/*!*****************************!*\
  !*** ./src/meater-logo.png ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"e011dfd680931e4ea0de.png\";\n\n//# sourceURL=webpack:///./src/meater-logo.png?");

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   breakfastContainer: () => (/* binding */ breakfastContainer),\n/* harmony export */   dinnerContainer: () => (/* binding */ dinnerContainer),\n/* harmony export */   lunchContainer: () => (/* binding */ lunchContainer)\n/* harmony export */ });\n/* harmony import */ var _breakfast_1_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./breakfast-1.png */ \"./src/breakfast-1.png\");\n/* harmony import */ var _breakfast_2_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./breakfast-2.png */ \"./src/breakfast-2.png\");\n/* harmony import */ var _lunch_1_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./lunch-1.png */ \"./src/lunch-1.png\");\n/* harmony import */ var _lunch_2_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./lunch-2.png */ \"./src/lunch-2.png\");\n/* harmony import */ var _dinner_1_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./dinner-1.png */ \"./src/dinner-1.png\");\n/* harmony import */ var _dinner_2_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./dinner-2.png */ \"./src/dinner-2.png\");\n\n\n\n\n\n\n\nconst containers = [];\n\nconst menuSections = [\"Breakfast\", \"Lunch\", \"Dinner\"];\n\nconst imageSrc = [\n    _breakfast_1_png__WEBPACK_IMPORTED_MODULE_0__, _breakfast_2_png__WEBPACK_IMPORTED_MODULE_1__, _lunch_1_png__WEBPACK_IMPORTED_MODULE_2__,\n    _lunch_2_png__WEBPACK_IMPORTED_MODULE_3__, _dinner_1_png__WEBPACK_IMPORTED_MODULE_4__, _dinner_2_png__WEBPACK_IMPORTED_MODULE_5__\n];\n\nconst imageAlt = [\n    \"Baked Egg with Spinach\", \"Rustic Country Omelette\",\n    \"Pineapple Chicken Burger\", \"Bulk-Up Tuna Nicoise\",\n    \"Classic Steak and Eggs\", \"Japanese Beef and Wasabi Mash\"\n];\n\nconst infoGrids = [];\nconst number = ['206', '9g', '8g', '22g', '288', '11g', '13g', '34g',\n    '460', '12g', '45g', '45g', '594', '16g', '25g', '52g',\n    '725', '25g', '2g', '87g', '409', '9g', '32g', '30g'];\nconst sectionText = ['Calories', 'Fat', 'Carbs', 'Protein'];\nlet numberIter = 0;\nlet textIter = 0;\nfor (let i = 0; i < 6; i++) {\n    const infoGrid = document.createElement('div');\n    for (let j = 0; j < 2; j++) {\n        for (let k = 0; k < 2; k++) {\n            const infoNumber = document.createElement('h2');\n            infoNumber.classList.add('info-number');\n            infoNumber.textContent = number[numberIter++];\n            infoGrid.appendChild(infoNumber);\n        }  \n        for (let k = 0; k < 2; k++) {\n            const infoText = document.createElement('h2');\n            infoText.classList.add('info-text');\n            infoText.textContent = sectionText[textIter%4];\n            textIter++;\n            infoGrid.appendChild(infoText);\n        } \n    }\n    infoGrids.push(infoGrid);   \n}\n\nfor (let i = 0; i < 3; i++) {\n    const container = document.createElement('div');\n    container.classList.add('container');\n    const containerTitle = document.createElement('p');\n    containerTitle.classList.add('container-title', 'marker');\n    containerTitle.textContent = menuSections[i];\n    container.appendChild(containerTitle);\n    const containerContent = document.createElement('div');\n    containerContent.classList.add('container-content');\n    \n    for (let j = 0; j < 2; j++) {\n        const menu = document.createElement('div');\n        menu.classList.add('menu');\n        const foodImage = document.createElement('img');\n        foodImage.classList.add('food-image');\n        Object.assign(foodImage, {\n            src: imageSrc[2*i+j],\n            alt: imageAlt[2*i+j],\n            width: 400\n        });\n        const foodName = document.createElement('h1');\n        foodName.classList.add('food-name');\n        foodName.textContent = imageAlt[2*i+j];\n        const foodInfo = infoGrids[2*i+j];\n        foodInfo.classList.add('food-info');\n        menu.append(foodImage, foodName, foodInfo);\n        containerContent.appendChild(menu);\n    }\n    container.appendChild(containerContent);\n    containers.push(container);\n}\n\nconst [breakfastContainer, lunchContainer, dinnerContainer] = containers;\n\n\n\n//# sourceURL=webpack:///./src/menu.js?");

/***/ }),

/***/ "./src/phone.svg":
/*!***********************!*\
  !*** ./src/phone.svg ***!
  \***********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"0b454d6aeda1578fa2ba.svg\";\n\n//# sourceURL=webpack:///./src/phone.svg?");

/***/ }),

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./styles.css */ \"./node_modules/css-loader/dist/cjs.js!./src/styles.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\noptions.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack:///./src/styles.css?");

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
/******/ 			if (document.currentScript && document.currentScript.tagName.toUpperCase() === 'SCRIPT')
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
/******/ 		scriptUrl = scriptUrl.replace(/^blob:/, "").replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
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