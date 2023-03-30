/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/index.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/index.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./Fonts/URW-DIN-light.ttf */ "./src/Fonts/URW-DIN-light.ttf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ./Fonts/URW-DIN-medium.ttf */ "./src/Fonts/URW-DIN-medium.ttf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ./Fonts/URW-DIN-bold.ttf */ "./src/Fonts/URW-DIN-bold.ttf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_3___ = new URL(/* asset import */ __webpack_require__(/*! ./Fonts/URW-DIN-extra-bold.ttf */ "./src/Fonts/URW-DIN-extra-bold.ttf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_4___ = new URL(/* asset import */ __webpack_require__(/*! ./images/giphy.gif */ "./src/images/giphy.gif"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
var ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);
var ___CSS_LOADER_URL_REPLACEMENT_3___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_3___);
var ___CSS_LOADER_URL_REPLACEMENT_4___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_4___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "* {\n  box-sizing: border-box;\n  /* border: 1px solid red; */\n}\n@font-face {\n  font-family: URW DIN light;\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n}\n@font-face {\n  font-family: URW DIN medium;\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ");\n}\n@font-face {\n  font-family: URW DIN bold;\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_2___ + ");\n}\n@font-face {\n  font-family: URW DIN extra-bold;\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_3___ + ");\n}\nbody {\n  height: 100vh;\n  width: 100vw;\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_4___ + ");\n  background-size: cover;\n  background-repeat: no-repeat;\n  backdrop-filter: blur(5px);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n/* main content and overlapping */\n\nmain {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n\n.forecast-container {\n  position: relative;\n  height: 500px;\n  width: 940px;\n  /* height: 440px;\n  width: 880px; */\n}\n.forecast-container > div {\n  height: 440px;\n  width: 880px;\n  border-radius: 220px;\n}\n.class-top {\n  position: absolute;\n  z-index: 3;\n  background-color: transparent;\n  border: 3px solid #565655;\n  mix-blend-mode: multiply;\n  box-shadow: inset 20px 20px 0px rgba(82, 82, 81, 0.2),\n    20px 20px 0px rgba(82, 82, 81, 0.5);\n}\n.inside {\n  position: absolute;\n  z-index: 2;\n  background-color: #dadcd1;\n  border: 3px solid #c0c0bd;\n  top: 20px;\n  left: 20px;\n  mix-blend-mode: normal;\n}\n.shadow {\n  position: absolute;\n  z-index: 1;\n  background-color: black;\n  top: 45px;\n  left: 40px;\n}\n\n/* clock */\n\n.clock {\n  position: absolute;\n  width: 270px;\n  height: 270px;\n  top: 85px;\n  left: 100px;\n  border-radius: 50%;\n  border: 3px solid rgb(82, 82, 81);\n  background-color: transparent;\n  box-shadow: inset 2px 2px 2px rgba(82, 82, 81, 0.5),\n    3px 3px 2px rgba(82, 82, 81, 0.5);\n}\n.hand {\n  border: none;\n}\n.clock .number-container {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  display: flex;\n  justify-content: center;\n  transform: rotate(var(--rotation));\n  border-radius: 50%;\n  padding-top: 4px;\n}\n.clock .one {\n  --rotation: 30deg;\n}\n.clock .two {\n  --rotation: 60deg;\n}\n.clock .three {\n  --rotation: 90deg;\n}\n.clock .four {\n  --rotation: 120deg;\n}\n.clock .five {\n  --rotation: 150deg;\n}\n.clock .six {\n  --rotation: 180deg;\n}\n.clock .seven {\n  --rotation: 210deg;\n}\n.clock .eigth {\n  --rotation: 240deg;\n}\n.clock .nine {\n  --rotation: 270deg;\n}\n.clock .ten {\n  --rotation: 300deg;\n}\n.clock .eleven {\n  --rotation: 330deg;\n}\n.clock .number {\n  position: absolute;\n  width: 3px;\n  height: 15px;\n  border-radius: 2px;\n  background-color: #707070;\n}\n.clock .hand {\n  --rotation: 0;\n  position: absolute;\n  bottom: 50%;\n  left: 50%;\n  transform-origin: bottom;\n  z-index: 10;\n  transform: translateX(-50%) rotate(calc(var(--rotation) * 1deg));\n}\n.clock::after {\n  content: \"\";\n  position: absolute;\n  background-color: black;\n  z-index: 11;\n  width: 12px;\n  height: 12px;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  border-radius: 50%;\n  box-shadow: 2px 2px 0px rgba(82, 82, 81, 0.2);\n}\n.clock .hand.second {\n  width: 2px;\n  height: 110px;\n  background-color: rgb(255, 223, 39);\n}\n.clock .hand.minute {\n  width: 4px;\n  height: 100px;\n  background-color: #d4271e;\n}\n.clock .hand.hour {\n  width: 4px;\n  height: 70px;\n  background-color: #d4271e;\n}\n\n/* information container */\n\n.weather-container {\n  position: absolute;\n  width: 360px;\n  height: 270px;\n  top: 85px;\n  left: 450px;\n  display: flex;\n  flex-direction: column;\n}\n.city {\n  display: flex;\n  align-items: center;\n  height: 30px;\n  font-family: URW DIN medium;\n  color: #565655;\n  font-size: 20px;\n}\n.date {\n  display: flex;\n  align-items: center;\n  height: 70px;\n  font-family: URW DIN bold;\n  color: #313131;\n  font-size: 40px;\n  padding-bottom: 10px;\n  border-bottom: 2px solid #b5b7ae;\n  margin-bottom: 10px;\n}\n.weather {\n  flex-grow: 1;\n  display: grid;\n  grid-template-columns: 1fr 1fr 1fr;\n  margin-right: 15px;\n}\n.weather > div {\n  display: flex;\n  flex-direction: column;\n}\n.weather .icon {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: 50%;\n  margin-bottom: 10px;\n}\n.weather .temperature {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-grow: 1;\n  font-family: URW DIN bold;\n  color: #565655;\n  font-size: 35px;\n}\n.weather .time {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-grow: 1;\n  font-family: URW DIN medium;\n  color: #565655;\n  font-size: 20px;\n}\n.icon span {\n  font-size: 70px;\n  color: #565655;\n}\n\n/* input */\n\n.input-container {  \n  margin-top: 5vh;\n  width: 300px;\n  display: flex;\n  justify-content: space-between;\n  height: 36px;\n}\n.input-container input {\n  all: unset;\n  width: 55%;\n  border-radius: 18px;\n  background-color: #dadcd1;\n  border: 3px solid #565655;\n  box-shadow: 3px 5px 0px rgba(34, 34, 34, 0.6);\n  font-family: URW DIN medium;\n  color: #313131;\n  padding: 5px;\n  padding-left: 15px;\n  padding-right: 15px;\n}\n.input-container input:focus {\n  border: 3px solid #c0c0bd;\n}\n.input-container .search {\n  all: unset;\n  height: 30px;\n  width: 30px;\n  border-radius: 18px;\n  background-color: #dadcd1;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  cursor: pointer;\n  border: 3px solid #565655;\n  box-shadow: 2px 3px 0px rgba(34, 34, 34, 0.6);\n  color: #565655;\n}\n.input-container .search:active {\n  transform: translate(2px, 2px);\n  box-shadow: 0px 0px 0px 0px;\n}\n.input-container .unit-converter {\n  all: unset;\n  height: 30px;\n  width: 30px;\n  border-radius: 18px;\n  background-color: #dadcd1;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  cursor: pointer;\n  border: 3px solid #565655;\n  box-shadow: 2px 3px 0px rgba(34, 34, 34, 0.6);\n  font-family: URW DIN bold;\n  color: #565655;\n}\n.input-container .unit-converter:active {\n  transform: translate(2px, 2px);\n  box-shadow: 0px 0px 0px 0px;\n}", "",{"version":3,"sources":["webpack://./src/index.css"],"names":[],"mappings":"AAAA;EACE,sBAAsB;EACtB,2BAA2B;AAC7B;AACA;EACE,0BAA0B;EAC1B,4CAAmC;AACrC;AACA;EACE,2BAA2B;EAC3B,4CAAoC;AACtC;AACA;EACE,yBAAyB;EACzB,4CAAkC;AACpC;AACA;EACE,+BAA+B;EAC/B,4CAAwC;AAC1C;AACA;EACE,aAAa;EACb,YAAY;EACZ,yDAAyC;EACzC,sBAAsB;EACtB,4BAA4B;EAC5B,0BAA0B;EAC1B,aAAa;EACb,uBAAuB;EACvB,mBAAmB;AACrB;;AAEA,iCAAiC;;AAEjC;EACE,aAAa;EACb,sBAAsB;EACtB,mBAAmB;AACrB;;AAEA;EACE,kBAAkB;EAClB,aAAa;EACb,YAAY;EACZ;iBACe;AACjB;AACA;EACE,aAAa;EACb,YAAY;EACZ,oBAAoB;AACtB;AACA;EACE,kBAAkB;EAClB,UAAU;EACV,6BAA6B;EAC7B,yBAAyB;EACzB,wBAAwB;EACxB;uCACqC;AACvC;AACA;EACE,kBAAkB;EAClB,UAAU;EACV,yBAAyB;EACzB,yBAAyB;EACzB,SAAS;EACT,UAAU;EACV,sBAAsB;AACxB;AACA;EACE,kBAAkB;EAClB,UAAU;EACV,uBAAuB;EACvB,SAAS;EACT,UAAU;AACZ;;AAEA,UAAU;;AAEV;EACE,kBAAkB;EAClB,YAAY;EACZ,aAAa;EACb,SAAS;EACT,WAAW;EACX,kBAAkB;EAClB,iCAAiC;EACjC,6BAA6B;EAC7B;qCACmC;AACrC;AACA;EACE,YAAY;AACd;AACA;EACE,kBAAkB;EAClB,WAAW;EACX,YAAY;EACZ,aAAa;EACb,uBAAuB;EACvB,kCAAkC;EAClC,kBAAkB;EAClB,gBAAgB;AAClB;AACA;EACE,iBAAiB;AACnB;AACA;EACE,iBAAiB;AACnB;AACA;EACE,iBAAiB;AACnB;AACA;EACE,kBAAkB;AACpB;AACA;EACE,kBAAkB;AACpB;AACA;EACE,kBAAkB;AACpB;AACA;EACE,kBAAkB;AACpB;AACA;EACE,kBAAkB;AACpB;AACA;EACE,kBAAkB;AACpB;AACA;EACE,kBAAkB;AACpB;AACA;EACE,kBAAkB;AACpB;AACA;EACE,kBAAkB;EAClB,UAAU;EACV,YAAY;EACZ,kBAAkB;EAClB,yBAAyB;AAC3B;AACA;EACE,aAAa;EACb,kBAAkB;EAClB,WAAW;EACX,SAAS;EACT,wBAAwB;EACxB,WAAW;EACX,gEAAgE;AAClE;AACA;EACE,WAAW;EACX,kBAAkB;EAClB,uBAAuB;EACvB,WAAW;EACX,WAAW;EACX,YAAY;EACZ,QAAQ;EACR,SAAS;EACT,gCAAgC;EAChC,kBAAkB;EAClB,6CAA6C;AAC/C;AACA;EACE,UAAU;EACV,aAAa;EACb,mCAAmC;AACrC;AACA;EACE,UAAU;EACV,aAAa;EACb,yBAAyB;AAC3B;AACA;EACE,UAAU;EACV,YAAY;EACZ,yBAAyB;AAC3B;;AAEA,0BAA0B;;AAE1B;EACE,kBAAkB;EAClB,YAAY;EACZ,aAAa;EACb,SAAS;EACT,WAAW;EACX,aAAa;EACb,sBAAsB;AACxB;AACA;EACE,aAAa;EACb,mBAAmB;EACnB,YAAY;EACZ,2BAA2B;EAC3B,cAAc;EACd,eAAe;AACjB;AACA;EACE,aAAa;EACb,mBAAmB;EACnB,YAAY;EACZ,yBAAyB;EACzB,cAAc;EACd,eAAe;EACf,oBAAoB;EACpB,gCAAgC;EAChC,mBAAmB;AACrB;AACA;EACE,YAAY;EACZ,aAAa;EACb,kCAAkC;EAClC,kBAAkB;AACpB;AACA;EACE,aAAa;EACb,sBAAsB;AACxB;AACA;EACE,aAAa;EACb,uBAAuB;EACvB,mBAAmB;EACnB,WAAW;EACX,mBAAmB;AACrB;AACA;EACE,aAAa;EACb,uBAAuB;EACvB,mBAAmB;EACnB,YAAY;EACZ,yBAAyB;EACzB,cAAc;EACd,eAAe;AACjB;AACA;EACE,aAAa;EACb,uBAAuB;EACvB,mBAAmB;EACnB,YAAY;EACZ,2BAA2B;EAC3B,cAAc;EACd,eAAe;AACjB;AACA;EACE,eAAe;EACf,cAAc;AAChB;;AAEA,UAAU;;AAEV;EACE,eAAe;EACf,YAAY;EACZ,aAAa;EACb,8BAA8B;EAC9B,YAAY;AACd;AACA;EACE,UAAU;EACV,UAAU;EACV,mBAAmB;EACnB,yBAAyB;EACzB,yBAAyB;EACzB,6CAA6C;EAC7C,2BAA2B;EAC3B,cAAc;EACd,YAAY;EACZ,kBAAkB;EAClB,mBAAmB;AACrB;AACA;EACE,yBAAyB;AAC3B;AACA;EACE,UAAU;EACV,YAAY;EACZ,WAAW;EACX,mBAAmB;EACnB,yBAAyB;EACzB,aAAa;EACb,uBAAuB;EACvB,mBAAmB;EACnB,eAAe;EACf,yBAAyB;EACzB,6CAA6C;EAC7C,cAAc;AAChB;AACA;EACE,8BAA8B;EAC9B,2BAA2B;AAC7B;AACA;EACE,UAAU;EACV,YAAY;EACZ,WAAW;EACX,mBAAmB;EACnB,yBAAyB;EACzB,aAAa;EACb,uBAAuB;EACvB,mBAAmB;EACnB,eAAe;EACf,yBAAyB;EACzB,6CAA6C;EAC7C,yBAAyB;EACzB,cAAc;AAChB;AACA;EACE,8BAA8B;EAC9B,2BAA2B;AAC7B","sourcesContent":["* {\n  box-sizing: border-box;\n  /* border: 1px solid red; */\n}\n@font-face {\n  font-family: URW DIN light;\n  src: url(./Fonts/URW-DIN-light.ttf);\n}\n@font-face {\n  font-family: URW DIN medium;\n  src: url(./Fonts/URW-DIN-medium.ttf);\n}\n@font-face {\n  font-family: URW DIN bold;\n  src: url(./Fonts/URW-DIN-bold.ttf);\n}\n@font-face {\n  font-family: URW DIN extra-bold;\n  src: url(./Fonts/URW-DIN-extra-bold.ttf);\n}\nbody {\n  height: 100vh;\n  width: 100vw;\n  background-image: url(./images/giphy.gif);\n  background-size: cover;\n  background-repeat: no-repeat;\n  backdrop-filter: blur(5px);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n/* main content and overlapping */\n\nmain {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n\n.forecast-container {\n  position: relative;\n  height: 500px;\n  width: 940px;\n  /* height: 440px;\n  width: 880px; */\n}\n.forecast-container > div {\n  height: 440px;\n  width: 880px;\n  border-radius: 220px;\n}\n.class-top {\n  position: absolute;\n  z-index: 3;\n  background-color: transparent;\n  border: 3px solid #565655;\n  mix-blend-mode: multiply;\n  box-shadow: inset 20px 20px 0px rgba(82, 82, 81, 0.2),\n    20px 20px 0px rgba(82, 82, 81, 0.5);\n}\n.inside {\n  position: absolute;\n  z-index: 2;\n  background-color: #dadcd1;\n  border: 3px solid #c0c0bd;\n  top: 20px;\n  left: 20px;\n  mix-blend-mode: normal;\n}\n.shadow {\n  position: absolute;\n  z-index: 1;\n  background-color: black;\n  top: 45px;\n  left: 40px;\n}\n\n/* clock */\n\n.clock {\n  position: absolute;\n  width: 270px;\n  height: 270px;\n  top: 85px;\n  left: 100px;\n  border-radius: 50%;\n  border: 3px solid rgb(82, 82, 81);\n  background-color: transparent;\n  box-shadow: inset 2px 2px 2px rgba(82, 82, 81, 0.5),\n    3px 3px 2px rgba(82, 82, 81, 0.5);\n}\n.hand {\n  border: none;\n}\n.clock .number-container {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  display: flex;\n  justify-content: center;\n  transform: rotate(var(--rotation));\n  border-radius: 50%;\n  padding-top: 4px;\n}\n.clock .one {\n  --rotation: 30deg;\n}\n.clock .two {\n  --rotation: 60deg;\n}\n.clock .three {\n  --rotation: 90deg;\n}\n.clock .four {\n  --rotation: 120deg;\n}\n.clock .five {\n  --rotation: 150deg;\n}\n.clock .six {\n  --rotation: 180deg;\n}\n.clock .seven {\n  --rotation: 210deg;\n}\n.clock .eigth {\n  --rotation: 240deg;\n}\n.clock .nine {\n  --rotation: 270deg;\n}\n.clock .ten {\n  --rotation: 300deg;\n}\n.clock .eleven {\n  --rotation: 330deg;\n}\n.clock .number {\n  position: absolute;\n  width: 3px;\n  height: 15px;\n  border-radius: 2px;\n  background-color: #707070;\n}\n.clock .hand {\n  --rotation: 0;\n  position: absolute;\n  bottom: 50%;\n  left: 50%;\n  transform-origin: bottom;\n  z-index: 10;\n  transform: translateX(-50%) rotate(calc(var(--rotation) * 1deg));\n}\n.clock::after {\n  content: \"\";\n  position: absolute;\n  background-color: black;\n  z-index: 11;\n  width: 12px;\n  height: 12px;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  border-radius: 50%;\n  box-shadow: 2px 2px 0px rgba(82, 82, 81, 0.2);\n}\n.clock .hand.second {\n  width: 2px;\n  height: 110px;\n  background-color: rgb(255, 223, 39);\n}\n.clock .hand.minute {\n  width: 4px;\n  height: 100px;\n  background-color: #d4271e;\n}\n.clock .hand.hour {\n  width: 4px;\n  height: 70px;\n  background-color: #d4271e;\n}\n\n/* information container */\n\n.weather-container {\n  position: absolute;\n  width: 360px;\n  height: 270px;\n  top: 85px;\n  left: 450px;\n  display: flex;\n  flex-direction: column;\n}\n.city {\n  display: flex;\n  align-items: center;\n  height: 30px;\n  font-family: URW DIN medium;\n  color: #565655;\n  font-size: 20px;\n}\n.date {\n  display: flex;\n  align-items: center;\n  height: 70px;\n  font-family: URW DIN bold;\n  color: #313131;\n  font-size: 40px;\n  padding-bottom: 10px;\n  border-bottom: 2px solid #b5b7ae;\n  margin-bottom: 10px;\n}\n.weather {\n  flex-grow: 1;\n  display: grid;\n  grid-template-columns: 1fr 1fr 1fr;\n  margin-right: 15px;\n}\n.weather > div {\n  display: flex;\n  flex-direction: column;\n}\n.weather .icon {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: 50%;\n  margin-bottom: 10px;\n}\n.weather .temperature {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-grow: 1;\n  font-family: URW DIN bold;\n  color: #565655;\n  font-size: 35px;\n}\n.weather .time {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-grow: 1;\n  font-family: URW DIN medium;\n  color: #565655;\n  font-size: 20px;\n}\n.icon span {\n  font-size: 70px;\n  color: #565655;\n}\n\n/* input */\n\n.input-container {  \n  margin-top: 5vh;\n  width: 300px;\n  display: flex;\n  justify-content: space-between;\n  height: 36px;\n}\n.input-container input {\n  all: unset;\n  width: 55%;\n  border-radius: 18px;\n  background-color: #dadcd1;\n  border: 3px solid #565655;\n  box-shadow: 3px 5px 0px rgba(34, 34, 34, 0.6);\n  font-family: URW DIN medium;\n  color: #313131;\n  padding: 5px;\n  padding-left: 15px;\n  padding-right: 15px;\n}\n.input-container input:focus {\n  border: 3px solid #c0c0bd;\n}\n.input-container .search {\n  all: unset;\n  height: 30px;\n  width: 30px;\n  border-radius: 18px;\n  background-color: #dadcd1;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  cursor: pointer;\n  border: 3px solid #565655;\n  box-shadow: 2px 3px 0px rgba(34, 34, 34, 0.6);\n  color: #565655;\n}\n.input-container .search:active {\n  transform: translate(2px, 2px);\n  box-shadow: 0px 0px 0px 0px;\n}\n.input-container .unit-converter {\n  all: unset;\n  height: 30px;\n  width: 30px;\n  border-radius: 18px;\n  background-color: #dadcd1;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  cursor: pointer;\n  border: 3px solid #565655;\n  box-shadow: 2px 3px 0px rgba(34, 34, 34, 0.6);\n  font-family: URW DIN bold;\n  color: #565655;\n}\n.input-container .unit-converter:active {\n  transform: translate(2px, 2px);\n  box-shadow: 0px 0px 0px 0px;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/index.css":
/*!***********************!*\
  !*** ./src/index.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./index.css */ "./node_modules/css-loader/dist/cjs.js!./src/index.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/clock.js":
/*!**********************!*\
  !*** ./src/clock.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ setClock)
/* harmony export */ });
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.css */ "./src/index.css");


const hourHand = document.querySelector('[data-hour-hand]');
const minuteHand = document.querySelector('[data-minute-hand]');
const secondHand = document.querySelector('[data-second-hand]');

function setRotation(element, rotationRatio) {
    element.style.setProperty("--rotation", rotationRatio * 360)
}

function setClock() {
  const currentDate = new Date();
  const secondRatio = currentDate.getSeconds() / 60;
  const minuteRatio = (secondRatio + currentDate.getMinutes()) / 60;
  const hourRatio = (minuteRatio + currentDate.getHours()) / 12;
  setRotation(secondHand, secondRatio)
  setRotation(minuteHand, minuteRatio)
  setRotation(hourHand, hourRatio)
}


/***/ }),

/***/ "./src/date.js":
/*!*********************!*\
  !*** ./src/date.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ setData)
/* harmony export */ });
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.css */ "./src/index.css");


function setData(data) {
  const dateDiv = document.querySelector(".date");
  const tomorrowDiv = document.querySelector('.tomorrow .time');
  const dayAfterTomorrowDiv = document.querySelector('.day-after-tomorrow .time');

  let today = new Date(data[0].date);
  let tomorrow = new Date(data[1].date);
  let dayAfterTomorrow = new Date(data[2].date);

  today = today.toDateString().split(" ");
  tomorrow = tomorrow.toDateString().split(" ");
  dayAfterTomorrow = dayAfterTomorrow.toDateString().split(" ");

  dateDiv.textContent = `${today[1]} ${today[2]} ${today[3]}`;
  tomorrowDiv.textContent = `${tomorrow[1]} ${tomorrow[2]}`
  dayAfterTomorrowDiv.textContent = `${dayAfterTomorrow[1]} ${dayAfterTomorrow[2]}`

  console.log(data);
}


/***/ }),

/***/ "./src/forecast.js":
/*!*************************!*\
  !*** ./src/forecast.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "dayAfterTomorrow": () => (/* binding */ dayAfterTomorrow),
/* harmony export */   "today": () => (/* binding */ today),
/* harmony export */   "tomorrow": () => (/* binding */ tomorrow)
/* harmony export */ });
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.css */ "./src/index.css");
/* harmony import */ var _weatherCondition__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./weatherCondition */ "./src/weatherCondition.js");



// const todayDiv = document.querySelector('.today');
// const tomorrowDiv = document.querySelector('.tomorrow');
// const dayAfterTomorrowDiv = document.querySelector('.day-after-tomorrow');

function unitConverter(c, f, div) {
  const unitConverterBtn = document.querySelector(".unit-converter");
  let unit = 0;

  unitConverterBtn.addEventListener("click", () => {
    if (unit === 0) {
      div.textContent = `${f}°F`;
      unit = 1;
      unitConverterBtn.textContent = "C";
    } else if (unit === 1) {
      div.textContent = `${c}°C`;
      unit = 0;
      unitConverterBtn.textContent = "F";
    }
  });
}

function today(data) {
  const fahrenheit = data.forecast.forecastday[0].day.avgtemp_f;
  const celcius = data.forecast.forecastday[0].day.avgtemp_c;
  const condition = data.forecast.forecastday[0].day.condition.text;

  // condition
  const conditionIcon = document.querySelector(".today .icon img");
  (0,_weatherCondition__WEBPACK_IMPORTED_MODULE_1__["default"])(condition, conditionIcon);

  // temperature
  const todayTemperatureDiv = document.querySelector(".today .temperature");
  todayTemperatureDiv.textContent = `${celcius}°C`;

  unitConverter(celcius, fahrenheit, todayTemperatureDiv);
}

function tomorrow(data) {
  const fahrenheit = data.forecast.forecastday[1].day.avgtemp_f;
  const celcius = data.forecast.forecastday[1].day.avgtemp_c;
  const condition = data.forecast.forecastday[1].day.condition.text;

  // condition
  const conditionIcon = document.querySelector(".tomorrow .icon img");
  (0,_weatherCondition__WEBPACK_IMPORTED_MODULE_1__["default"])(condition, conditionIcon);

  // temperature
  const tomorrowTemperatureDiv = document.querySelector(
    ".tomorrow .temperature"
  );
  tomorrowTemperatureDiv.textContent = `${celcius}°C`;

  unitConverter(celcius, fahrenheit, tomorrowTemperatureDiv);
}

function dayAfterTomorrow(data) {
  const fahrenheit = data.forecast.forecastday[2].day.avgtemp_f;
  const celcius = data.forecast.forecastday[2].day.avgtemp_c;
  const condition = data.forecast.forecastday[2].day.condition.text;

  // condition
  const conditionIcon = document.querySelector(".day-after-tomorrow .icon img");
  (0,_weatherCondition__WEBPACK_IMPORTED_MODULE_1__["default"])(condition, conditionIcon);

  // temperature
  const dayAfterTomorrowDiv = document.querySelector(
    ".day-after-tomorrow .temperature"
  );
  dayAfterTomorrowDiv.textContent = `${celcius}°C`;

  unitConverter(celcius, fahrenheit, dayAfterTomorrowDiv);
}


/***/ }),

/***/ "./src/location.js":
/*!*************************!*\
  !*** ./src/location.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ setLocation)
/* harmony export */ });
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.css */ "./src/index.css");


function setLocation(city, country, name) {
    const location = document.querySelector(".city")
    if (city === '') {
        location.textContent = `${name}, ${country}`;
    } else {
        location.textContent = `${city}, ${country}`;
    }
    
}

/***/ }),

/***/ "./src/weatherCondition.js":
/*!*********************************!*\
  !*** ./src/weatherCondition.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ setConditionIcon)
/* harmony export */ });
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.css */ "./src/index.css");
/* harmony import */ var _images_icons_clear_day_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./images/icons/clear-day.svg */ "./src/images/icons/clear-day.svg");
/* harmony import */ var _images_icons_clear_night_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./images/icons/clear-night.svg */ "./src/images/icons/clear-night.svg");
/* harmony import */ var _images_icons_cloudy_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./images/icons/cloudy.svg */ "./src/images/icons/cloudy.svg");
/* harmony import */ var _images_icons_dust_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./images/icons/dust.svg */ "./src/images/icons/dust.svg");
/* harmony import */ var _images_icons_fog_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./images/icons/fog.svg */ "./src/images/icons/fog.svg");
/* harmony import */ var _images_icons_hail_svg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./images/icons/hail.svg */ "./src/images/icons/hail.svg");
/* harmony import */ var _images_icons_haze_svg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./images/icons/haze.svg */ "./src/images/icons/haze.svg");
/* harmony import */ var _images_icons_mist_svg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./images/icons/mist.svg */ "./src/images/icons/mist.svg");
/* harmony import */ var _images_icons_overcast_svg__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./images/icons/overcast.svg */ "./src/images/icons/overcast.svg");
/* harmony import */ var _images_icons_partly_cloudy_day_drizzle_svg__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./images/icons/partly-cloudy-day-drizzle.svg */ "./src/images/icons/partly-cloudy-day-drizzle.svg");
/* harmony import */ var _images_icons_partly_cloudy_day_svg__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./images/icons/partly-cloudy-day.svg */ "./src/images/icons/partly-cloudy-day.svg");
/* harmony import */ var _images_icons_rain_svg__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./images/icons/rain.svg */ "./src/images/icons/rain.svg");
/* harmony import */ var _images_icons_sleet_svg__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./images/icons/sleet.svg */ "./src/images/icons/sleet.svg");
/* harmony import */ var _images_icons_smoke_svg__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./images/icons/smoke.svg */ "./src/images/icons/smoke.svg");
/* harmony import */ var _images_icons_thunderstorms_day_rain_svg__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./images/icons/thunderstorms-day-rain.svg */ "./src/images/icons/thunderstorms-day-rain.svg");
/* harmony import */ var _images_icons_thunderstorms_rain_svg__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./images/icons/thunderstorms-rain.svg */ "./src/images/icons/thunderstorms-rain.svg");
/* harmony import */ var _images_icons_snow_svg__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./images/icons/snow.svg */ "./src/images/icons/snow.svg");
/* eslint-disable no-param-reassign */



















function setConditionIcon(condition, div) {
  const array = condition.toLowerCase().split(" ")

  if (array.includes("sunny")) {
    div.src = _images_icons_clear_day_svg__WEBPACK_IMPORTED_MODULE_1__;
  } 
  if (array.includes("clear")) {
    div.src = _images_icons_clear_night_svg__WEBPACK_IMPORTED_MODULE_2__;
  } 
  if (array.includes(("partly sunny" || 0))) {
    div.src = _images_icons_partly_cloudy_day_svg__WEBPACK_IMPORTED_MODULE_11__;
  } 
  if (array.includes(("scattered thunderstorms" || 0|| 0))) {
    div.src = _images_icons_thunderstorms_day_rain_svg__WEBPACK_IMPORTED_MODULE_15__;
  } 
  if (array.includes("fog")) {
    div.src = _images_icons_fog_svg__WEBPACK_IMPORTED_MODULE_5__;
  } 
  if (array.includes("dust")) {
    div.src = _images_icons_dust_svg__WEBPACK_IMPORTED_MODULE_4__;
  } 
  if (array.includes(("snow" || 0 || 0))) {
    div.src = _images_icons_snow_svg__WEBPACK_IMPORTED_MODULE_17__;
  } 
  if (array.includes(("cloudy" || 0 || 0))) {
    div.src = _images_icons_cloudy_svg__WEBPACK_IMPORTED_MODULE_3__;
  } 
  if (array.includes(("hail" || 0|| 0))) {
    div.src = _images_icons_hail_svg__WEBPACK_IMPORTED_MODULE_6__;
  } 
  if (array.includes("smoke")) {
    div.src = _images_icons_smoke_svg__WEBPACK_IMPORTED_MODULE_14__;
  } 
  if (array.includes(("sleet" || 0))) {
    div.src = _images_icons_sleet_svg__WEBPACK_IMPORTED_MODULE_13__;
  } 
  if (array.includes(("haze" || 0))) {
    div.src = _images_icons_haze_svg__WEBPACK_IMPORTED_MODULE_7__;
  } 
  if (array.includes(("light rain" || 0 || 0 || 0 || 0))) {
    div.src = _images_icons_partly_cloudy_day_drizzle_svg__WEBPACK_IMPORTED_MODULE_10__;
  } 
  if (array.includes("rain")) {
    div.src = _images_icons_rain_svg__WEBPACK_IMPORTED_MODULE_12__;
  } 
  if (array.includes("overcast")) {
    div.src = _images_icons_overcast_svg__WEBPACK_IMPORTED_MODULE_9__;
  } 
  if (array.includes(("storm"|| 0))) {
    div.src = _images_icons_thunderstorms_rain_svg__WEBPACK_IMPORTED_MODULE_16__;
  } 
  if (array.includes("mist")) {
    div.src = _images_icons_mist_svg__WEBPACK_IMPORTED_MODULE_8__;
  } 
}


/***/ }),

/***/ "./src/Fonts/URW-DIN-bold.ttf":
/*!************************************!*\
  !*** ./src/Fonts/URW-DIN-bold.ttf ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/32c2a74916f76f03aace.ttf";

/***/ }),

/***/ "./src/Fonts/URW-DIN-extra-bold.ttf":
/*!******************************************!*\
  !*** ./src/Fonts/URW-DIN-extra-bold.ttf ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/dad7234e673684351e91.ttf";

/***/ }),

/***/ "./src/Fonts/URW-DIN-light.ttf":
/*!*************************************!*\
  !*** ./src/Fonts/URW-DIN-light.ttf ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/f1084a68ca19659d6f8d.ttf";

/***/ }),

/***/ "./src/Fonts/URW-DIN-medium.ttf":
/*!**************************************!*\
  !*** ./src/Fonts/URW-DIN-medium.ttf ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/9e3132ba7d2fb13b8da5.ttf";

/***/ }),

/***/ "./src/images/giphy.gif":
/*!******************************!*\
  !*** ./src/images/giphy.gif ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/06ccd246ac3a41837383.gif";

/***/ }),

/***/ "./src/images/icons/clear-day.svg":
/*!****************************************!*\
  !*** ./src/images/icons/clear-day.svg ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/82d493fc389b8c730118.svg";

/***/ }),

/***/ "./src/images/icons/clear-night.svg":
/*!******************************************!*\
  !*** ./src/images/icons/clear-night.svg ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/a42b7aecb402f64a710e.svg";

/***/ }),

/***/ "./src/images/icons/cloudy.svg":
/*!*************************************!*\
  !*** ./src/images/icons/cloudy.svg ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/480c02b3176fc05c58f8.svg";

/***/ }),

/***/ "./src/images/icons/dust.svg":
/*!***********************************!*\
  !*** ./src/images/icons/dust.svg ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/2b2c8773c16ea41d6db2.svg";

/***/ }),

/***/ "./src/images/icons/fog.svg":
/*!**********************************!*\
  !*** ./src/images/icons/fog.svg ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/a4fb212c874b83e3d23c.svg";

/***/ }),

/***/ "./src/images/icons/hail.svg":
/*!***********************************!*\
  !*** ./src/images/icons/hail.svg ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/51c45daa29f1295ac8e2.svg";

/***/ }),

/***/ "./src/images/icons/haze.svg":
/*!***********************************!*\
  !*** ./src/images/icons/haze.svg ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/152867dee4a8e6e02841.svg";

/***/ }),

/***/ "./src/images/icons/mist.svg":
/*!***********************************!*\
  !*** ./src/images/icons/mist.svg ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/04c7c2b59cc7f880964e.svg";

/***/ }),

/***/ "./src/images/icons/overcast.svg":
/*!***************************************!*\
  !*** ./src/images/icons/overcast.svg ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/e49559c8bc76f5831268.svg";

/***/ }),

/***/ "./src/images/icons/partly-cloudy-day-drizzle.svg":
/*!********************************************************!*\
  !*** ./src/images/icons/partly-cloudy-day-drizzle.svg ***!
  \********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/a5effb5685c45a59b832.svg";

/***/ }),

/***/ "./src/images/icons/partly-cloudy-day.svg":
/*!************************************************!*\
  !*** ./src/images/icons/partly-cloudy-day.svg ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/55422f882a4f7a801e19.svg";

/***/ }),

/***/ "./src/images/icons/rain.svg":
/*!***********************************!*\
  !*** ./src/images/icons/rain.svg ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/7d9bdc4d85bf8a6df385.svg";

/***/ }),

/***/ "./src/images/icons/sleet.svg":
/*!************************************!*\
  !*** ./src/images/icons/sleet.svg ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/9ebe53f78102eeda8dda.svg";

/***/ }),

/***/ "./src/images/icons/smoke.svg":
/*!************************************!*\
  !*** ./src/images/icons/smoke.svg ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/2120049c8467033332fa.svg";

/***/ }),

/***/ "./src/images/icons/snow.svg":
/*!***********************************!*\
  !*** ./src/images/icons/snow.svg ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/57003ca1eba0d7b9fac6.svg";

/***/ }),

/***/ "./src/images/icons/thunderstorms-day-rain.svg":
/*!*****************************************************!*\
  !*** ./src/images/icons/thunderstorms-day-rain.svg ***!
  \*****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/dd451d939550cfab391d.svg";

/***/ }),

/***/ "./src/images/icons/thunderstorms-rain.svg":
/*!*************************************************!*\
  !*** ./src/images/icons/thunderstorms-rain.svg ***!
  \*************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/3a41f1346aa38634f476.svg";

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
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
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
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.css */ "./src/index.css");
/* harmony import */ var _clock__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./clock */ "./src/clock.js");
/* harmony import */ var _location__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./location */ "./src/location.js");
/* harmony import */ var _date__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./date */ "./src/date.js");
/* harmony import */ var _forecast__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./forecast */ "./src/forecast.js");






setInterval(_clock__WEBPACK_IMPORTED_MODULE_1__["default"], 1000);
(0,_clock__WEBPACK_IMPORTED_MODULE_1__["default"])();

//------------------------------------------------------

const input = document.querySelector("input");
const searchBtn = document.querySelector(".search");

async function getWeaterData(cityName) {
  try {
    const weather = await fetch(
      `http://api.weatherapi.com/v1/forecast.json?key=a1fd7a18c7df45cd9cf15211232403&q=${cityName}&days=3&aqi=no&alerts=no`,
      {
        mode: "cors",
      }
    );
    const data = await weather.json();

    (0,_forecast__WEBPACK_IMPORTED_MODULE_4__.today)(data);
    (0,_forecast__WEBPACK_IMPORTED_MODULE_4__.tomorrow)(data);
    (0,_forecast__WEBPACK_IMPORTED_MODULE_4__.dayAfterTomorrow)(data);

    (0,_location__WEBPACK_IMPORTED_MODULE_2__["default"])(
      data.location.region,
      data.location.country,
      data.location.name
    );
    (0,_date__WEBPACK_IMPORTED_MODULE_3__["default"])(data.forecast.forecastday);

    const unitConverterBtn = document.querySelector(".unit-converter");
    unitConverterBtn.textContent = "F";
  } catch (error) {
    console.log(error.message);
  }
}

searchBtn.addEventListener("click", () => {
  getWeaterData(input.value);
  input.value = "";
});

window.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    getWeaterData(input.value);
    input.value = "";
  }
});

getWeaterData("new york");

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFLLFVBQVUsS0FBSyxLQUFLLFlBQVksV0FBVyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxXQUFXLFVBQVUsWUFBWSxhQUFhLE1BQU0sS0FBSyxVQUFVLFlBQVksV0FBVyxVQUFVLFlBQVksV0FBVyxZQUFZLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLFVBQVUsVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsTUFBTSxLQUFLLFVBQVUsVUFBVSxZQUFZLE1BQU0sS0FBSyxVQUFVLFVBQVUsWUFBWSxNQUFNLEtBQUssVUFBVSxVQUFVLFlBQVksT0FBTyxhQUFhLE1BQU0sWUFBWSxXQUFXLFVBQVUsVUFBVSxVQUFVLFVBQVUsWUFBWSxNQUFNLEtBQUssVUFBVSxZQUFZLFdBQVcsWUFBWSxXQUFXLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxhQUFhLE1BQU0sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLE1BQU0sS0FBSyxVQUFVLFlBQVksTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLFdBQVcsVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLFdBQVcsVUFBVSxNQUFNLEtBQUssVUFBVSxVQUFVLE9BQU8sV0FBVyxLQUFLLFVBQVUsVUFBVSxVQUFVLFlBQVksV0FBVyxLQUFLLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxXQUFXLFVBQVUsWUFBWSxhQUFhLE1BQU0sS0FBSyxZ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SSxpREFBTzs7QUFFWDtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvaW5kZXguY3NzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9pbmRleC5jc3M/Y2ZlNCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL2Nsb2NrLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL2RhdGUuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvZm9yZWNhc3QuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvbG9jYXRpb24uanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvd2VhdGhlckNvbmRpdGlvbi5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL2pzb25wIGNodW5rIGxvYWRpbmciLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIuL0ZvbnRzL1VSVy1ESU4tbGlnaHQudHRmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18gPSBuZXcgVVJMKFwiLi9Gb250cy9VUlctRElOLW1lZGl1bS50dGZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMl9fXyA9IG5ldyBVUkwoXCIuL0ZvbnRzL1VSVy1ESU4tYm9sZC50dGZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfM19fXyA9IG5ldyBVUkwoXCIuL0ZvbnRzL1VSVy1ESU4tZXh0cmEtYm9sZC50dGZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfNF9fXyA9IG5ldyBVUkwoXCIuL2ltYWdlcy9naXBoeS5naWZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzJfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8yX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8zX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfM19fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfNF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiKiB7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgLyogYm9yZGVyOiAxcHggc29saWQgcmVkOyAqL1xcbn1cXG5AZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiBVUlcgRElOIGxpZ2h0O1xcbiAgc3JjOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fICsgXCIpO1xcbn1cXG5AZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiBVUlcgRElOIG1lZGl1bTtcXG4gIHNyYzogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyArIFwiKTtcXG59XFxuQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogVVJXIERJTiBib2xkO1xcbiAgc3JjOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8yX19fICsgXCIpO1xcbn1cXG5AZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiBVUlcgRElOIGV4dHJhLWJvbGQ7XFxuICBzcmM6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzNfX18gKyBcIik7XFxufVxcbmJvZHkge1xcbiAgaGVpZ2h0OiAxMDB2aDtcXG4gIHdpZHRoOiAxMDB2dztcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzRfX18gKyBcIik7XFxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG4gIGJhY2tkcm9wLWZpbHRlcjogYmx1cig1cHgpO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLyogbWFpbiBjb250ZW50IGFuZCBvdmVybGFwcGluZyAqL1xcblxcbm1haW4ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4uZm9yZWNhc3QtY29udGFpbmVyIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGhlaWdodDogNTAwcHg7XFxuICB3aWR0aDogOTQwcHg7XFxuICAvKiBoZWlnaHQ6IDQ0MHB4O1xcbiAgd2lkdGg6IDg4MHB4OyAqL1xcbn1cXG4uZm9yZWNhc3QtY29udGFpbmVyID4gZGl2IHtcXG4gIGhlaWdodDogNDQwcHg7XFxuICB3aWR0aDogODgwcHg7XFxuICBib3JkZXItcmFkaXVzOiAyMjBweDtcXG59XFxuLmNsYXNzLXRvcCB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB6LWluZGV4OiAzO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICBib3JkZXI6IDNweCBzb2xpZCAjNTY1NjU1O1xcbiAgbWl4LWJsZW5kLW1vZGU6IG11bHRpcGx5O1xcbiAgYm94LXNoYWRvdzogaW5zZXQgMjBweCAyMHB4IDBweCByZ2JhKDgyLCA4MiwgODEsIDAuMiksXFxuICAgIDIwcHggMjBweCAwcHggcmdiYSg4MiwgODIsIDgxLCAwLjUpO1xcbn1cXG4uaW5zaWRlIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHotaW5kZXg6IDI7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGFkY2QxO1xcbiAgYm9yZGVyOiAzcHggc29saWQgI2MwYzBiZDtcXG4gIHRvcDogMjBweDtcXG4gIGxlZnQ6IDIwcHg7XFxuICBtaXgtYmxlbmQtbW9kZTogbm9ybWFsO1xcbn1cXG4uc2hhZG93IHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHotaW5kZXg6IDE7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXG4gIHRvcDogNDVweDtcXG4gIGxlZnQ6IDQwcHg7XFxufVxcblxcbi8qIGNsb2NrICovXFxuXFxuLmNsb2NrIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHdpZHRoOiAyNzBweDtcXG4gIGhlaWdodDogMjcwcHg7XFxuICB0b3A6IDg1cHg7XFxuICBsZWZ0OiAxMDBweDtcXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gIGJvcmRlcjogM3B4IHNvbGlkIHJnYig4MiwgODIsIDgxKTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgYm94LXNoYWRvdzogaW5zZXQgMnB4IDJweCAycHggcmdiYSg4MiwgODIsIDgxLCAwLjUpLFxcbiAgICAzcHggM3B4IDJweCByZ2JhKDgyLCA4MiwgODEsIDAuNSk7XFxufVxcbi5oYW5kIHtcXG4gIGJvcmRlcjogbm9uZTtcXG59XFxuLmNsb2NrIC5udW1iZXItY29udGFpbmVyIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgdHJhbnNmb3JtOiByb3RhdGUodmFyKC0tcm90YXRpb24pKTtcXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gIHBhZGRpbmctdG9wOiA0cHg7XFxufVxcbi5jbG9jayAub25lIHtcXG4gIC0tcm90YXRpb246IDMwZGVnO1xcbn1cXG4uY2xvY2sgLnR3byB7XFxuICAtLXJvdGF0aW9uOiA2MGRlZztcXG59XFxuLmNsb2NrIC50aHJlZSB7XFxuICAtLXJvdGF0aW9uOiA5MGRlZztcXG59XFxuLmNsb2NrIC5mb3VyIHtcXG4gIC0tcm90YXRpb246IDEyMGRlZztcXG59XFxuLmNsb2NrIC5maXZlIHtcXG4gIC0tcm90YXRpb246IDE1MGRlZztcXG59XFxuLmNsb2NrIC5zaXgge1xcbiAgLS1yb3RhdGlvbjogMTgwZGVnO1xcbn1cXG4uY2xvY2sgLnNldmVuIHtcXG4gIC0tcm90YXRpb246IDIxMGRlZztcXG59XFxuLmNsb2NrIC5laWd0aCB7XFxuICAtLXJvdGF0aW9uOiAyNDBkZWc7XFxufVxcbi5jbG9jayAubmluZSB7XFxuICAtLXJvdGF0aW9uOiAyNzBkZWc7XFxufVxcbi5jbG9jayAudGVuIHtcXG4gIC0tcm90YXRpb246IDMwMGRlZztcXG59XFxuLmNsb2NrIC5lbGV2ZW4ge1xcbiAgLS1yb3RhdGlvbjogMzMwZGVnO1xcbn1cXG4uY2xvY2sgLm51bWJlciB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB3aWR0aDogM3B4O1xcbiAgaGVpZ2h0OiAxNXB4O1xcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzcwNzA3MDtcXG59XFxuLmNsb2NrIC5oYW5kIHtcXG4gIC0tcm90YXRpb246IDA7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBib3R0b206IDUwJTtcXG4gIGxlZnQ6IDUwJTtcXG4gIHRyYW5zZm9ybS1vcmlnaW46IGJvdHRvbTtcXG4gIHotaW5kZXg6IDEwO1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpIHJvdGF0ZShjYWxjKHZhcigtLXJvdGF0aW9uKSAqIDFkZWcpKTtcXG59XFxuLmNsb2NrOjphZnRlciB7XFxuICBjb250ZW50OiBcXFwiXFxcIjtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcbiAgei1pbmRleDogMTE7XFxuICB3aWR0aDogMTJweDtcXG4gIGhlaWdodDogMTJweDtcXG4gIHRvcDogNTAlO1xcbiAgbGVmdDogNTAlO1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XFxuICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICBib3gtc2hhZG93OiAycHggMnB4IDBweCByZ2JhKDgyLCA4MiwgODEsIDAuMik7XFxufVxcbi5jbG9jayAuaGFuZC5zZWNvbmQge1xcbiAgd2lkdGg6IDJweDtcXG4gIGhlaWdodDogMTEwcHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjU1LCAyMjMsIDM5KTtcXG59XFxuLmNsb2NrIC5oYW5kLm1pbnV0ZSB7XFxuICB3aWR0aDogNHB4O1xcbiAgaGVpZ2h0OiAxMDBweDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNkNDI3MWU7XFxufVxcbi5jbG9jayAuaGFuZC5ob3VyIHtcXG4gIHdpZHRoOiA0cHg7XFxuICBoZWlnaHQ6IDcwcHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZDQyNzFlO1xcbn1cXG5cXG4vKiBpbmZvcm1hdGlvbiBjb250YWluZXIgKi9cXG5cXG4ud2VhdGhlci1jb250YWluZXIge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgd2lkdGg6IDM2MHB4O1xcbiAgaGVpZ2h0OiAyNzBweDtcXG4gIHRvcDogODVweDtcXG4gIGxlZnQ6IDQ1MHB4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcbi5jaXR5IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgaGVpZ2h0OiAzMHB4O1xcbiAgZm9udC1mYW1pbHk6IFVSVyBESU4gbWVkaXVtO1xcbiAgY29sb3I6ICM1NjU2NTU7XFxuICBmb250LXNpemU6IDIwcHg7XFxufVxcbi5kYXRlIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgaGVpZ2h0OiA3MHB4O1xcbiAgZm9udC1mYW1pbHk6IFVSVyBESU4gYm9sZDtcXG4gIGNvbG9yOiAjMzEzMTMxO1xcbiAgZm9udC1zaXplOiA0MHB4O1xcbiAgcGFkZGluZy1ib3R0b206IDEwcHg7XFxuICBib3JkZXItYm90dG9tOiAycHggc29saWQgI2I1YjdhZTtcXG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XFxufVxcbi53ZWF0aGVyIHtcXG4gIGZsZXgtZ3JvdzogMTtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnIgMWZyO1xcbiAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xcbn1cXG4ud2VhdGhlciA+IGRpdiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuLndlYXRoZXIgLmljb24ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGhlaWdodDogNTAlO1xcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcXG59XFxuLndlYXRoZXIgLnRlbXBlcmF0dXJlIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBmbGV4LWdyb3c6IDE7XFxuICBmb250LWZhbWlseTogVVJXIERJTiBib2xkO1xcbiAgY29sb3I6ICM1NjU2NTU7XFxuICBmb250LXNpemU6IDM1cHg7XFxufVxcbi53ZWF0aGVyIC50aW1lIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBmbGV4LWdyb3c6IDE7XFxuICBmb250LWZhbWlseTogVVJXIERJTiBtZWRpdW07XFxuICBjb2xvcjogIzU2NTY1NTtcXG4gIGZvbnQtc2l6ZTogMjBweDtcXG59XFxuLmljb24gc3BhbiB7XFxuICBmb250LXNpemU6IDcwcHg7XFxuICBjb2xvcjogIzU2NTY1NTtcXG59XFxuXFxuLyogaW5wdXQgKi9cXG5cXG4uaW5wdXQtY29udGFpbmVyIHsgIFxcbiAgbWFyZ2luLXRvcDogNXZoO1xcbiAgd2lkdGg6IDMwMHB4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIGhlaWdodDogMzZweDtcXG59XFxuLmlucHV0LWNvbnRhaW5lciBpbnB1dCB7XFxuICBhbGw6IHVuc2V0O1xcbiAgd2lkdGg6IDU1JTtcXG4gIGJvcmRlci1yYWRpdXM6IDE4cHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGFkY2QxO1xcbiAgYm9yZGVyOiAzcHggc29saWQgIzU2NTY1NTtcXG4gIGJveC1zaGFkb3c6IDNweCA1cHggMHB4IHJnYmEoMzQsIDM0LCAzNCwgMC42KTtcXG4gIGZvbnQtZmFtaWx5OiBVUlcgRElOIG1lZGl1bTtcXG4gIGNvbG9yOiAjMzEzMTMxO1xcbiAgcGFkZGluZzogNXB4O1xcbiAgcGFkZGluZy1sZWZ0OiAxNXB4O1xcbiAgcGFkZGluZy1yaWdodDogMTVweDtcXG59XFxuLmlucHV0LWNvbnRhaW5lciBpbnB1dDpmb2N1cyB7XFxuICBib3JkZXI6IDNweCBzb2xpZCAjYzBjMGJkO1xcbn1cXG4uaW5wdXQtY29udGFpbmVyIC5zZWFyY2gge1xcbiAgYWxsOiB1bnNldDtcXG4gIGhlaWdodDogMzBweDtcXG4gIHdpZHRoOiAzMHB4O1xcbiAgYm9yZGVyLXJhZGl1czogMThweDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNkYWRjZDE7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgYm9yZGVyOiAzcHggc29saWQgIzU2NTY1NTtcXG4gIGJveC1zaGFkb3c6IDJweCAzcHggMHB4IHJnYmEoMzQsIDM0LCAzNCwgMC42KTtcXG4gIGNvbG9yOiAjNTY1NjU1O1xcbn1cXG4uaW5wdXQtY29udGFpbmVyIC5zZWFyY2g6YWN0aXZlIHtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKDJweCwgMnB4KTtcXG4gIGJveC1zaGFkb3c6IDBweCAwcHggMHB4IDBweDtcXG59XFxuLmlucHV0LWNvbnRhaW5lciAudW5pdC1jb252ZXJ0ZXIge1xcbiAgYWxsOiB1bnNldDtcXG4gIGhlaWdodDogMzBweDtcXG4gIHdpZHRoOiAzMHB4O1xcbiAgYm9yZGVyLXJhZGl1czogMThweDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNkYWRjZDE7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgYm9yZGVyOiAzcHggc29saWQgIzU2NTY1NTtcXG4gIGJveC1zaGFkb3c6IDJweCAzcHggMHB4IHJnYmEoMzQsIDM0LCAzNCwgMC42KTtcXG4gIGZvbnQtZmFtaWx5OiBVUlcgRElOIGJvbGQ7XFxuICBjb2xvcjogIzU2NTY1NTtcXG59XFxuLmlucHV0LWNvbnRhaW5lciAudW5pdC1jb252ZXJ0ZXI6YWN0aXZlIHtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKDJweCwgMnB4KTtcXG4gIGJveC1zaGFkb3c6IDBweCAwcHggMHB4IDBweDtcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL2luZGV4LmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLHNCQUFzQjtFQUN0QiwyQkFBMkI7QUFDN0I7QUFDQTtF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WixXQUFXO0VBQ1gsbUJBQW1CO0VBQ25CLHlCQUF5QjtFQUN6QixhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQixlQUFlO0VBQ2YseUJBQXlCO0VBQ3pCLDZDQUE2QztFQUM3Qyx5QkFBeUI7RUFDekIsY0FBYztBQUNoQjtBQUNBO0VBQ0UsOEJBQThCO0VBQzlCLDJCQUEyQjtBQUM3QlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIqIHtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAvKiBib3JkZXI6IDFweCBzb2xpZCByZWQ7ICovXFxufVxcbkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6IFVSVyBESU4gbGlnaHQ7XFxuICBzcmM6IHVybCguL0ZvbnRzL1VSVy1ESU4tbGlnaHQudHRmKTtcXG59XFxuQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogVVJXIERJTiBtZWRpdW07XFxuICBzcmM6IHVybCguL0ZvbnRzL1VSVy1ESU4tbWVkaXVtLnR0Zik7XFxufVxcbkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6IFVSVyBESU4gYm9sZDtcXG4gIHNyYzogdXJsKC4vRm9udHMvVVJXLURJTi1ib2xkLnR0Zik7XFxufVxcbkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6IFVSVyBESU4gZXh0cmEtYm9sZDtcXG4gIHNyYzogdXJsKC4vRm9udHMvVVJXLURJTi1leHRyYS1ib2xkLnR0Zik7XFxufVxcbmJvZHkge1xcbiAgaGVpZ2h0OiAxMDB2aDtcXG4gIHdpZHRoOiAxMDB2dztcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCguL2ltYWdlcy9naXBoeS5naWYpO1xcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxuICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoNXB4KTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi8qIG1haW4gY29udGVudCBhbmQgb3ZlcmxhcHBpbmcgKi9cXG5cXG5tYWluIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLmZvcmVjYXN0LWNvbnRhaW5lciB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBoZWlnaHQ6IDUwMHB4O1xcbiAgd2lkdGg6IDk0MHB4O1xcbiAgLyogaGVpZ2h0OiA0NDBweDtcXG4gIHdpZHRoOiA4ODBweDsgKi9cXG59XFxuLmZvcmVjYXN0LWNvbnRhaW5lciA+IGRpdiB7XFxuICBoZWlnaHQ6IDQ0MHB4O1xcbiAgd2lkdGg6IDg4MHB4O1xcbiAgYm9yZGVyLXJhZGl1czogMjIwcHg7XFxufVxcbi5jbGFzcy10b3Age1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgei1pbmRleDogMztcXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgYm9yZGVyOiAzcHggc29saWQgIzU2NTY1NTtcXG4gIG1peC1ibGVuZC1tb2RlOiBtdWx0aXBseTtcXG4gIGJveC1zaGFkb3c6IGluc2V0IDIwcHggMjBweCAwcHggcmdiYSg4MiwgODIsIDgxLCAwLjIpLFxcbiAgICAyMHB4IDIwcHggMHB4IHJnYmEoODIsIDgyLCA4MSwgMC41KTtcXG59XFxuLmluc2lkZSB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB6LWluZGV4OiAyO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2RhZGNkMTtcXG4gIGJvcmRlcjogM3B4IHNvbGlkICNjMGMwYmQ7XFxuICB0b3A6IDIwcHg7XFxuICBsZWZ0OiAyMHB4O1xcbiAgbWl4LWJsZW5kLW1vZGU6IG5vcm1hbDtcXG59XFxuLnNoYWRvdyB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB6LWluZGV4OiAxO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxuICB0b3A6IDQ1cHg7XFxuICBsZWZ0OiA0MHB4O1xcbn1cXG5cXG4vKiBjbG9jayAqL1xcblxcbi5jbG9jayB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB3aWR0aDogMjcwcHg7XFxuICBoZWlnaHQ6IDI3MHB4O1xcbiAgdG9wOiA4NXB4O1xcbiAgbGVmdDogMTAwcHg7XFxuICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICBib3JkZXI6IDNweCBzb2xpZCByZ2IoODIsIDgyLCA4MSk7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gIGJveC1zaGFkb3c6IGluc2V0IDJweCAycHggMnB4IHJnYmEoODIsIDgyLCA4MSwgMC41KSxcXG4gICAgM3B4IDNweCAycHggcmdiYSg4MiwgODIsIDgxLCAwLjUpO1xcbn1cXG4uaGFuZCB7XFxuICBib3JkZXI6IG5vbmU7XFxufVxcbi5jbG9jayAubnVtYmVyLWNvbnRhaW5lciB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwJTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIHRyYW5zZm9ybTogcm90YXRlKHZhcigtLXJvdGF0aW9uKSk7XFxuICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICBwYWRkaW5nLXRvcDogNHB4O1xcbn1cXG4uY2xvY2sgLm9uZSB7XFxuICAtLXJvdGF0aW9uOiAzMGRlZztcXG59XFxuLmNsb2NrIC50d28ge1xcbiAgLS1yb3RhdGlvbjogNjBkZWc7XFxufVxcbi5jbG9jayAudGhyZWUge1xcbiAgLS1yb3RhdGlvbjogOTBkZWc7XFxufVxcbi5jbG9jayAuZm91ciB7XFxuICAtLXJvdGF0aW9uOiAxMjBkZWc7XFxufVxcbi5jbG9jayAuZml2ZSB7XFxuICAtLXJvdGF0aW9uOiAxNTBkZWc7XFxufVxcbi5jbG9jayAuc2l4IHtcXG4gIC0tcm90YXRpb246IDE4MGRlZztcXG59XFxuLmNsb2NrIC5zZXZlbiB7XFxuICAtLXJvdGF0aW9uOiAyMTBkZWc7XFxufVxcbi5jbG9jayAuZWlndGgge1xcbiAgLS1yb3RhdGlvbjogMjQwZGVnO1xcbn1cXG4uY2xvY2sgLm5pbmUge1xcbiAgLS1yb3RhdGlvbjogMjcwZGVnO1xcbn1cXG4uY2xvY2sgLnRlbiB7XFxuICAtLXJvdGF0aW9uOiAzMDBkZWc7XFxufVxcbi5jbG9jayAuZWxldmVuIHtcXG4gIC0tcm90YXRpb246IDMzMGRlZztcXG59XFxuLmNsb2NrIC5udW1iZXIge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgd2lkdGg6IDNweDtcXG4gIGhlaWdodDogMTVweDtcXG4gIGJvcmRlci1yYWRpdXM6IDJweDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICM3MDcwNzA7XFxufVxcbi5jbG9jayAuaGFuZCB7XFxuICAtLXJvdGF0aW9uOiAwO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgYm90dG9tOiA1MCU7XFxuICBsZWZ0OiA1MCU7XFxuICB0cmFuc2Zvcm0tb3JpZ2luOiBib3R0b207XFxuICB6LWluZGV4OiAxMDtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKSByb3RhdGUoY2FsYyh2YXIoLS1yb3RhdGlvbikgKiAxZGVnKSk7XFxufVxcbi5jbG9jazo6YWZ0ZXIge1xcbiAgY29udGVudDogXFxcIlxcXCI7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXG4gIHotaW5kZXg6IDExO1xcbiAgd2lkdGg6IDEycHg7XFxuICBoZWlnaHQ6IDEycHg7XFxuICB0b3A6IDUwJTtcXG4gIGxlZnQ6IDUwJTtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgYm94LXNoYWRvdzogMnB4IDJweCAwcHggcmdiYSg4MiwgODIsIDgxLCAwLjIpO1xcbn1cXG4uY2xvY2sgLmhhbmQuc2Vjb25kIHtcXG4gIHdpZHRoOiAycHg7XFxuICBoZWlnaHQ6IDExMHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1NSwgMjIzLCAzOSk7XFxufVxcbi5jbG9jayAuaGFuZC5taW51dGUge1xcbiAgd2lkdGg6IDRweDtcXG4gIGhlaWdodDogMTAwcHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZDQyNzFlO1xcbn1cXG4uY2xvY2sgLmhhbmQuaG91ciB7XFxuICB3aWR0aDogNHB4O1xcbiAgaGVpZ2h0OiA3MHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Q0MjcxZTtcXG59XFxuXFxuLyogaW5mb3JtYXRpb24gY29udGFpbmVyICovXFxuXFxuLndlYXRoZXItY29udGFpbmVyIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHdpZHRoOiAzNjBweDtcXG4gIGhlaWdodDogMjcwcHg7XFxuICB0b3A6IDg1cHg7XFxuICBsZWZ0OiA0NTBweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG4uY2l0eSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGhlaWdodDogMzBweDtcXG4gIGZvbnQtZmFtaWx5OiBVUlcgRElOIG1lZGl1bTtcXG4gIGNvbG9yOiAjNTY1NjU1O1xcbiAgZm9udC1zaXplOiAyMHB4O1xcbn1cXG4uZGF0ZSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGhlaWdodDogNzBweDtcXG4gIGZvbnQtZmFtaWx5OiBVUlcgRElOIGJvbGQ7XFxuICBjb2xvcjogIzMxMzEzMTtcXG4gIGZvbnQtc2l6ZTogNDBweDtcXG4gIHBhZGRpbmctYm90dG9tOiAxMHB4O1xcbiAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICNiNWI3YWU7XFxuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xcbn1cXG4ud2VhdGhlciB7XFxuICBmbGV4LWdyb3c6IDE7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyIDFmcjtcXG4gIG1hcmdpbi1yaWdodDogMTVweDtcXG59XFxuLndlYXRoZXIgPiBkaXYge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcbi53ZWF0aGVyIC5pY29uIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBoZWlnaHQ6IDUwJTtcXG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XFxufVxcbi53ZWF0aGVyIC50ZW1wZXJhdHVyZSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZmxleC1ncm93OiAxO1xcbiAgZm9udC1mYW1pbHk6IFVSVyBESU4gYm9sZDtcXG4gIGNvbG9yOiAjNTY1NjU1O1xcbiAgZm9udC1zaXplOiAzNXB4O1xcbn1cXG4ud2VhdGhlciAudGltZSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZmxleC1ncm93OiAxO1xcbiAgZm9udC1mYW1pbHk6IFVSVyBESU4gbWVkaXVtO1xcbiAgY29sb3I6ICM1NjU2NTU7XFxuICBmb250LXNpemU6IDIwcHg7XFxufVxcbi5pY29uIHNwYW4ge1xcbiAgZm9udC1zaXplOiA3MHB4O1xcbiAgY29sb3I6ICM1NjU2NTU7XFxufVxcblxcbi8qIGlucHV0ICovXFxuXFxuLmlucHV0LWNvbnRhaW5lciB7ICBcXG4gIG1hcmdpbi10b3A6IDV2aDtcXG4gIHdpZHRoOiAzMDBweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBoZWlnaHQ6IDM2cHg7XFxufVxcbi5pbnB1dC1jb250YWluZXIgaW5wdXQge1xcbiAgYWxsOiB1bnNldDtcXG4gIHdpZHRoOiA1NSU7XFxuICBib3JkZXItcmFkaXVzOiAxOHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2RhZGNkMTtcXG4gIGJvcmRlcjogM3B4IHNvbGlkICM1NjU2NTU7XFxuICBib3gtc2hhZG93OiAzcHggNXB4IDBweCByZ2JhKDM0LCAzNCwgMzQsIDAuNik7XFxuICBmb250LWZhbWlseTogVVJXIERJTiBtZWRpdW07XFxuICBjb2xvcjogIzMxMzEzMTtcXG4gIHBhZGRpbmc6IDVweDtcXG4gIHBhZGRpbmctbGVmdDogMTVweDtcXG4gIHBhZGRpbmctcmlnaHQ6IDE1cHg7XFxufVxcbi5pbnB1dC1jb250YWluZXIgaW5wdXQ6Zm9jdXMge1xcbiAgYm9yZGVyOiAzcHggc29saWQgI2MwYzBiZDtcXG59XFxuLmlucHV0LWNvbnRhaW5lciAuc2VhcmNoIHtcXG4gIGFsbDogdW5zZXQ7XFxuICBoZWlnaHQ6IDMwcHg7XFxuICB3aWR0aDogMzBweDtcXG4gIGJvcmRlci1yYWRpdXM6IDE4cHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGFkY2QxO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGJvcmRlcjogM3B4IHNvbGlkICM1NjU2NTU7XFxuICBib3gtc2hhZG93OiAycHggM3B4IDBweCByZ2JhKDM0LCAzNCwgMzQsIDAuNik7XFxuICBjb2xvcjogIzU2NTY1NTtcXG59XFxuLmlucHV0LWNvbnRhaW5lciAuc2VhcmNoOmFjdGl2ZSB7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgycHgsIDJweCk7XFxuICBib3gtc2hhZG93OiAwcHggMHB4IDBweCAwcHg7XFxufVxcbi5pbnB1dC1jb250YWluZXIgLnVuaXQtY29udmVydGVyIHtcXG4gIGFsbDogdW5zZXQ7XFxuICBoZWlnaHQ6IDMwcHg7XFxuICB3aWR0aDogMzBweDtcXG4gIGJvcmRlci1yYWRpdXM6IDE4cHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGFkY2QxO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGJvcmRlcjogM3B4IHNvbGlkICM1NjU2NTU7XFxuICBib3gtc2hhZG93OiAycHggM3B4IDBweCByZ2JhKDM0LCAzNCwgMzQsIDAuNik7XFxuICBmb250LWZhbWlseTogVVJXIERJTiBib2xkO1xcbiAgY29sb3I6ICM1NjU2NTU7XFxufVxcbi5pbnB1dC1jb250YWluZXIgLnVuaXQtY29udmVydGVyOmFjdGl2ZSB7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgycHgsIDJweCk7XFxuICBib3gtc2hhZG93OiAwcHggMHB4IDBweCAwcHg7XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG4gIGlmICghdXJsKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuICB1cmwgPSBTdHJpbmcodXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybCk7XG5cbiAgLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH1cblxuICAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG4gIGlmICgvW1wiJygpIFxcdFxcbl18KCUyMCkvLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csIFwiXFxcXG5cIiksIFwiXFxcIlwiKTtcbiAgfVxuICByZXR1cm4gdXJsO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9pbmRleC5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2luZGV4LmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0IFwiLi9pbmRleC5jc3NcIjtcblxuY29uc3QgaG91ckhhbmQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdbZGF0YS1ob3VyLWhhbmRdJyk7XG5jb25zdCBtaW51dGVIYW5kID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignW2RhdGEtbWludXRlLWhhbmRdJyk7XG5jb25zdCBzZWNvbmRIYW5kID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignW2RhdGEtc2Vjb25kLWhhbmRdJyk7XG5cbmZ1bmN0aW9uIHNldFJvdGF0aW9uKGVsZW1lbnQsIHJvdGF0aW9uUmF0aW8pIHtcbiAgICBlbGVtZW50LnN0eWxlLnNldFByb3BlcnR5KFwiLS1yb3RhdGlvblwiLCByb3RhdGlvblJhdGlvICogMzYwKVxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBzZXRDbG9jaygpIHtcbiAgY29uc3QgY3VycmVudERhdGUgPSBuZXcgRGF0ZSgpO1xuICBjb25zdCBzZWNvbmRSYXRpbyA9IGN1cnJlbnREYXRlLmdldFNlY29uZHMoKSAvIDYwO1xuICBjb25zdCBtaW51dGVSYXRpbyA9IChzZWNvbmRSYXRpbyArIGN1cnJlbnREYXRlLmdldE1pbnV0ZXMoKSkgLyA2MDtcbiAgY29uc3QgaG91clJhdGlvID0gKG1pbnV0ZVJhdGlvICsgY3VycmVudERhdGUuZ2V0SG91cnMoKSkgLyAxMjtcbiAgc2V0Um90YXRpb24oc2Vjb25kSGFuZCwgc2Vjb25kUmF0aW8pXG4gIHNldFJvdGF0aW9uKG1pbnV0ZUhhbmQsIG1pbnV0ZVJhdGlvKVxuICBzZXRSb3RhdGlvbihob3VySGFuZCwgaG91clJhdGlvKVxufVxuIiwiaW1wb3J0IFwiLi9pbmRleC5jc3NcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gc2V0RGF0YShkYXRhKSB7XG4gIGNvbnN0IGRhdGVEaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmRhdGVcIik7XG4gIGNvbnN0IHRvbW9ycm93RGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRvbW9ycm93IC50aW1lJyk7XG4gIGNvbnN0IGRheUFmdGVyVG9tb3Jyb3dEaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZGF5LWFmdGVyLXRvbW9ycm93IC50aW1lJyk7XG5cbiAgbGV0IHRvZGF5ID0gbmV3IERhdGUoZGF0YVswXS5kYXRlKTtcbiAgbGV0IHRvbW9ycm93ID0gbmV3IERhdGUoZGF0YVsxXS5kYXRlKTtcbiAgbGV0IGRheUFmdGVyVG9tb3Jyb3cgPSBuZXcgRGF0ZShkYXRhWzJdLmRhdGUpO1xuXG4gIHRvZGF5ID0gdG9kYXkudG9EYXRlU3RyaW5nKCkuc3BsaXQoXCIgXCIpO1xuICB0b21vcnJvdyA9IHRvbW9ycm93LnRvRGF0ZVN0cmluZygpLnNwbGl0KFwiIFwiKTtcbiAgZGF5QWZ0ZXJUb21vcnJvdyA9IGRheUFmdGVyVG9tb3Jyb3cudG9EYXRlU3RyaW5nKCkuc3BsaXQoXCIgXCIpO1xuXG4gIGRhdGVEaXYudGV4dENvbnRlbnQgPSBgJHt0b2RheVsxXX0gJHt0b2RheVsyXX0gJHt0b2RheVszXX1gO1xuICB0b21vcnJvd0Rpdi50ZXh0Q29udGVudCA9IGAke3RvbW9ycm93WzFdfSAke3RvbW9ycm93WzJdfWBcbiAgZGF5QWZ0ZXJUb21vcnJvd0Rpdi50ZXh0Q29udGVudCA9IGAke2RheUFmdGVyVG9tb3Jyb3dbMV19ICR7ZGF5QWZ0ZXJUb21vcnJvd1syXX1gXG5cbiAgY29uc29sZS5sb2coZGF0YSk7XG59XG4iLCJpbXBvcnQgXCIuL2luZGV4LmNzc1wiO1xuaW1wb3J0IHNldENvbmRpdGlvbkljb24gZnJvbSBcIi4vd2VhdGhlckNvbmRpdGlvblwiO1xuXG4vLyBjb25zdCB0b2RheURpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50b2RheScpO1xuLy8gY29uc3QgdG9tb3Jyb3dEaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudG9tb3Jyb3cnKTtcbi8vIGNvbnN0IGRheUFmdGVyVG9tb3Jyb3dEaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZGF5LWFmdGVyLXRvbW9ycm93Jyk7XG5cbmZ1bmN0aW9uIHVuaXRDb252ZXJ0ZXIoYywgZiwgZGl2KSB7XG4gIGNvbnN0IHVuaXRDb252ZXJ0ZXJCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnVuaXQtY29udmVydGVyXCIpO1xuICBsZXQgdW5pdCA9IDA7XG5cbiAgdW5pdENvbnZlcnRlckJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgIGlmICh1bml0ID09PSAwKSB7XG4gICAgICBkaXYudGV4dENvbnRlbnQgPSBgJHtmfcKwRmA7XG4gICAgICB1bml0ID0gMTtcbiAgICAgIHVuaXRDb252ZXJ0ZXJCdG4udGV4dENvbnRlbnQgPSBcIkNcIjtcbiAgICB9IGVsc2UgaWYgKHVuaXQgPT09IDEpIHtcbiAgICAgIGRpdi50ZXh0Q29udGVudCA9IGAke2N9wrBDYDtcbiAgICAgIHVuaXQgPSAwO1xuICAgICAgdW5pdENvbnZlcnRlckJ0bi50ZXh0Q29udGVudCA9IFwiRlwiO1xuICAgIH1cbiAgfSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0b2RheShkYXRhKSB7XG4gIGNvbnN0IGZhaHJlbmhlaXQgPSBkYXRhLmZvcmVjYXN0LmZvcmVjYXN0ZGF5WzBdLmRheS5hdmd0ZW1wX2Y7XG4gIGNvbnN0IGNlbGNpdXMgPSBkYXRhLmZvcmVjYXN0LmZvcmVjYXN0ZGF5WzBdLmRheS5hdmd0ZW1wX2M7XG4gIGNvbnN0IGNvbmRpdGlvbiA9IGRhdGEuZm9yZWNhc3QuZm9yZWNhc3RkYXlbMF0uZGF5LmNvbmRpdGlvbi50ZXh0O1xuXG4gIC8vIGNvbmRpdGlvblxuICBjb25zdCBjb25kaXRpb25JY29uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50b2RheSAuaWNvbiBpbWdcIik7XG4gIHNldENvbmRpdGlvbkljb24oY29uZGl0aW9uLCBjb25kaXRpb25JY29uKTtcblxuICAvLyB0ZW1wZXJhdHVyZVxuICBjb25zdCB0b2RheVRlbXBlcmF0dXJlRGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50b2RheSAudGVtcGVyYXR1cmVcIik7XG4gIHRvZGF5VGVtcGVyYXR1cmVEaXYudGV4dENvbnRlbnQgPSBgJHtjZWxjaXVzfcKwQ2A7XG5cbiAgdW5pdENvbnZlcnRlcihjZWxjaXVzLCBmYWhyZW5oZWl0LCB0b2RheVRlbXBlcmF0dXJlRGl2KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHRvbW9ycm93KGRhdGEpIHtcbiAgY29uc3QgZmFocmVuaGVpdCA9IGRhdGEuZm9yZWNhc3QuZm9yZWNhc3RkYXlbMV0uZGF5LmF2Z3RlbXBfZjtcbiAgY29uc3QgY2VsY2l1cyA9IGRhdGEuZm9yZWNhc3QuZm9yZWNhc3RkYXlbMV0uZGF5LmF2Z3RlbXBfYztcbiAgY29uc3QgY29uZGl0aW9uID0gZGF0YS5mb3JlY2FzdC5mb3JlY2FzdGRheVsxXS5kYXkuY29uZGl0aW9uLnRleHQ7XG5cbiAgLy8gY29uZGl0aW9uXG4gIGNvbnN0IGNvbmRpdGlvbkljb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRvbW9ycm93IC5pY29uIGltZ1wiKTtcbiAgc2V0Q29uZGl0aW9uSWNvbihjb25kaXRpb24sIGNvbmRpdGlvbkljb24pO1xuXG4gIC8vIHRlbXBlcmF0dXJlXG4gIGNvbnN0IHRvbW9ycm93VGVtcGVyYXR1cmVEaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuICAgIFwiLnRvbW9ycm93IC50ZW1wZXJhdHVyZVwiXG4gICk7XG4gIHRvbW9ycm93VGVtcGVyYXR1cmVEaXYudGV4dENvbnRlbnQgPSBgJHtjZWxjaXVzfcKwQ2A7XG5cbiAgdW5pdENvbnZlcnRlcihjZWxjaXVzLCBmYWhyZW5oZWl0LCB0b21vcnJvd1RlbXBlcmF0dXJlRGl2KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRheUFmdGVyVG9tb3Jyb3coZGF0YSkge1xuICBjb25zdCBmYWhyZW5oZWl0ID0gZGF0YS5mb3JlY2FzdC5mb3JlY2FzdGRheVsyXS5kYXkuYXZndGVtcF9mO1xuICBjb25zdCBjZWxjaXVzID0gZGF0YS5mb3JlY2FzdC5mb3JlY2FzdGRheVsyXS5kYXkuYXZndGVtcF9jO1xuICBjb25zdCBjb25kaXRpb24gPSBkYXRhLmZvcmVjYXN0LmZvcmVjYXN0ZGF5WzJdLmRheS5jb25kaXRpb24udGV4dDtcblxuICAvLyBjb25kaXRpb25cbiAgY29uc3QgY29uZGl0aW9uSWNvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZGF5LWFmdGVyLXRvbW9ycm93IC5pY29uIGltZ1wiKTtcbiAgc2V0Q29uZGl0aW9uSWNvbihjb25kaXRpb24sIGNvbmRpdGlvbkljb24pO1xuXG4gIC8vIHRlbXBlcmF0dXJlXG4gIGNvbnN0IGRheUFmdGVyVG9tb3Jyb3dEaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuICAgIFwiLmRheS1hZnRlci10b21vcnJvdyAudGVtcGVyYXR1cmVcIlxuICApO1xuICBkYXlBZnRlclRvbW9ycm93RGl2LnRleHRDb250ZW50ID0gYCR7Y2VsY2l1c33CsENgO1xuXG4gIHVuaXRDb252ZXJ0ZXIoY2VsY2l1cywgZmFocmVuaGVpdCwgZGF5QWZ0ZXJUb21vcnJvd0Rpdik7XG59XG4iLCJpbXBvcnQgXCIuL2luZGV4LmNzc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBzZXRMb2NhdGlvbihjaXR5LCBjb3VudHJ5LCBuYW1lKSB7XG4gICAgY29uc3QgbG9jYXRpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNpdHlcIilcbiAgICBpZiAoY2l0eSA9PT0gJycpIHtcbiAgICAgICAgbG9jYXRpb24udGV4dENvbnRlbnQgPSBgJHtuYW1lfSwgJHtjb3VudHJ5fWA7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgbG9jYXRpb24udGV4dENvbnRlbnQgPSBgJHtjaXR5fSwgJHtjb3VudHJ5fWA7XG4gICAgfVxuICAgIFxufSIsIi8qIGVzbGludC1kaXNhYmxlIG5vLXBhcmFtLXJlYXNzaWduICovXG5pbXBvcnQgXCIuL2luZGV4LmNzc1wiO1xuaW1wb3J0IGNsZWFyRGF5IGZyb20gXCIuL2ltYWdlcy9pY29ucy9jbGVhci1kYXkuc3ZnXCI7XG5pbXBvcnQgY2xlYXJOaWdodCBmcm9tIFwiLi9pbWFnZXMvaWNvbnMvY2xlYXItbmlnaHQuc3ZnXCI7XG5pbXBvcnQgY2xvdWR5IGZyb20gXCIuL2ltYWdlcy9pY29ucy9jbG91ZHkuc3ZnXCI7XG5pbXBvcnQgZHVzdCBmcm9tIFwiLi9pbWFnZXMvaWNvbnMvZHVzdC5zdmdcIjtcbmltcG9ydCBmb2cgZnJvbSBcIi4vaW1hZ2VzL2ljb25zL2ZvZy5zdmdcIjtcbmltcG9ydCBoYWlsIGZyb20gXCIuL2ltYWdlcy9pY29ucy9oYWlsLnN2Z1wiO1xuaW1wb3J0IGhhemUgZnJvbSBcIi4vaW1hZ2VzL2ljb25zL2hhemUuc3ZnXCI7XG5pbXBvcnQgbWlzdCBmcm9tIFwiLi9pbWFnZXMvaWNvbnMvbWlzdC5zdmdcIjtcbmltcG9ydCBvdmVyY2FzdCBmcm9tIFwiLi9pbWFnZXMvaWNvbnMvb3ZlcmNhc3Quc3ZnXCI7XG5pbXBvcnQgcGFydGx5Q2xvdWR5RGF5RHJpenpsZSBmcm9tIFwiLi9pbWFnZXMvaWNvbnMvcGFydGx5LWNsb3VkeS1kYXktZHJpenpsZS5zdmdcIjtcbmltcG9ydCBwYXJ0bHlDbG91ZHlEYXkgZnJvbSBcIi4vaW1hZ2VzL2ljb25zL3BhcnRseS1jbG91ZHktZGF5LnN2Z1wiO1xuaW1wb3J0IHJhaW4gZnJvbSBcIi4vaW1hZ2VzL2ljb25zL3JhaW4uc3ZnXCI7XG5pbXBvcnQgc2xlZXQgZnJvbSBcIi4vaW1hZ2VzL2ljb25zL3NsZWV0LnN2Z1wiO1xuaW1wb3J0IHNtb2tlIGZyb20gXCIuL2ltYWdlcy9pY29ucy9zbW9rZS5zdmdcIjtcbmltcG9ydCB0aHVuZGVyc3Rvcm1zRGF5UmFpbiBmcm9tIFwiLi9pbWFnZXMvaWNvbnMvdGh1bmRlcnN0b3Jtcy1kYXktcmFpbi5zdmdcIjtcbmltcG9ydCB0aHVuZGVyc3Rvcm1zIGZyb20gXCIuL2ltYWdlcy9pY29ucy90aHVuZGVyc3Rvcm1zLXJhaW4uc3ZnXCI7XG5pbXBvcnQgc25vdyBmcm9tIFwiLi9pbWFnZXMvaWNvbnMvc25vdy5zdmdcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gc2V0Q29uZGl0aW9uSWNvbihjb25kaXRpb24sIGRpdikge1xuICBjb25zdCBhcnJheSA9IGNvbmRpdGlvbi50b0xvd2VyQ2FzZSgpLnNwbGl0KFwiIFwiKVxuXG4gIGlmIChhcnJheS5pbmNsdWRlcyhcInN1bm55XCIpKSB7XG4gICAgZGl2LnNyYyA9IGNsZWFyRGF5O1xuICB9IFxuICBpZiAoYXJyYXkuaW5jbHVkZXMoXCJjbGVhclwiKSkge1xuICAgIGRpdi5zcmMgPSBjbGVhck5pZ2h0O1xuICB9IFxuICBpZiAoYXJyYXkuaW5jbHVkZXMoKFwicGFydGx5IHN1bm55XCIgfHwgXCJtb3N0bHkgc3VubnlcIikpKSB7XG4gICAgZGl2LnNyYyA9IHBhcnRseUNsb3VkeURheTtcbiAgfSBcbiAgaWYgKGFycmF5LmluY2x1ZGVzKChcInNjYXR0ZXJlZCB0aHVuZGVyc3Rvcm1zXCIgfHwgXCJjaGFuY2Ugb2Ygc3Rvcm1cInx8IFwiQ2hhbmNlIG9mIFRodW5kZXJ0b3Jtc1wiKSkpIHtcbiAgICBkaXYuc3JjID0gdGh1bmRlcnN0b3Jtc0RheVJhaW47XG4gIH0gXG4gIGlmIChhcnJheS5pbmNsdWRlcyhcImZvZ1wiKSkge1xuICAgIGRpdi5zcmMgPSBmb2c7XG4gIH0gXG4gIGlmIChhcnJheS5pbmNsdWRlcyhcImR1c3RcIikpIHtcbiAgICBkaXYuc3JjID0gZHVzdDtcbiAgfSBcbiAgaWYgKGFycmF5LmluY2x1ZGVzKChcInNub3dcIiB8fCBcImljeVwiIHx8IFwiZmx1cnJpZXNcIikpKSB7XG4gICAgZGl2LnNyYyA9IHNub3c7XG4gIH0gXG4gIGlmIChhcnJheS5pbmNsdWRlcygoXCJjbG91ZHlcIiB8fCBcIm1vc3RseSBDbG91ZHlcIiB8fCBcInBhcnRseSBDbG91ZHlcIikpKSB7XG4gICAgZGl2LnNyYyA9IGNsb3VkeTtcbiAgfSBcbiAgaWYgKGFycmF5LmluY2x1ZGVzKChcImhhaWxcIiB8fCBcImNoYW5jZSBvZiBzbm93XCJ8fCBcInNub3cgc2hvd2Vyc1wiKSkpIHtcbiAgICBkaXYuc3JjID0gaGFpbDtcbiAgfSBcbiAgaWYgKGFycmF5LmluY2x1ZGVzKFwic21va2VcIikpIHtcbiAgICBkaXYuc3JjID0gc21va2U7XG4gIH0gXG4gIGlmIChhcnJheS5pbmNsdWRlcygoXCJzbGVldFwiIHx8IFwicmFpbiBhbmQgc25vd1wiKSkpIHtcbiAgICBkaXYuc3JjID0gc2xlZXQ7XG4gIH0gXG4gIGlmIChhcnJheS5pbmNsdWRlcygoXCJoYXplXCIgfHwgXCJsaWdodCBzbm93XCIpKSkge1xuICAgIGRpdi5zcmMgPSBoYXplO1xuICB9IFxuICBpZiAoYXJyYXkuaW5jbHVkZXMoKFwibGlnaHQgcmFpblwiIHx8IFwiY2hhbmNlIG9mIHJhaW5cIiB8fCBcInNob3dlcnNcIiB8fCBcInNjYXR0ZXJlZCBzaG93ZXJzXCIgfHwgXCJmcmVlemluZyBkcml6emxlXCIpKSkge1xuICAgIGRpdi5zcmMgPSBwYXJ0bHlDbG91ZHlEYXlEcml6emxlO1xuICB9IFxuICBpZiAoYXJyYXkuaW5jbHVkZXMoXCJyYWluXCIpKSB7XG4gICAgZGl2LnNyYyA9IHJhaW47XG4gIH0gXG4gIGlmIChhcnJheS5pbmNsdWRlcyhcIm92ZXJjYXN0XCIpKSB7XG4gICAgZGl2LnNyYyA9IG92ZXJjYXN0O1xuICB9IFxuICBpZiAoYXJyYXkuaW5jbHVkZXMoKFwic3Rvcm1cInx8IFwidGh1bmRlcnN0b3JtXCIpKSkge1xuICAgIGRpdi5zcmMgPSB0aHVuZGVyc3Rvcm1zO1xuICB9IFxuICBpZiAoYXJyYXkuaW5jbHVkZXMoXCJtaXN0XCIpKSB7XG4gICAgZGl2LnNyYyA9IG1pc3Q7XG4gIH0gXG59XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLy8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbl9fd2VicGFja19yZXF1aXJlX18ubSA9IF9fd2VicGFja19tb2R1bGVzX187XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjO1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHNjcmlwdFVybCA9IHNjcmlwdHNbc2NyaXB0cy5sZW5ndGggLSAxXS5zcmNcblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5iID0gZG9jdW1lbnQuYmFzZVVSSSB8fCBzZWxmLmxvY2F0aW9uLmhyZWY7XG5cbi8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4vLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbi8vIFtyZXNvbHZlLCByZWplY3QsIFByb21pc2VdID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxudmFyIGluc3RhbGxlZENodW5rcyA9IHtcblx0XCJtYWluXCI6IDBcbn07XG5cbi8vIG5vIGNodW5rIG9uIGRlbWFuZCBsb2FkaW5nXG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG4vLyBubyBITVJcblxuLy8gbm8gSE1SIG1hbmlmZXN0XG5cbi8vIG5vIG9uIGNodW5rcyBsb2FkZWRcblxuLy8gbm8ganNvbnAgZnVuY3Rpb24iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCBcIi4vaW5kZXguY3NzXCI7XG5pbXBvcnQgc2V0Q2xvY2sgZnJvbSBcIi4vY2xvY2tcIjtcbmltcG9ydCBzZXRsb2NhdGlvbiBmcm9tIFwiLi9sb2NhdGlvblwiO1xuaW1wb3J0IHNldERhdGUgZnJvbSBcIi4vZGF0ZVwiO1xuaW1wb3J0IHsgdG9kYXksIHRvbW9ycm93LCBkYXlBZnRlclRvbW9ycm93IH0gZnJvbSBcIi4vZm9yZWNhc3RcIjtcblxuc2V0SW50ZXJ2YWwoc2V0Q2xvY2ssIDEwMDApO1xuc2V0Q2xvY2soKTtcblxuLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuY29uc3QgaW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiaW5wdXRcIik7XG5jb25zdCBzZWFyY2hCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnNlYXJjaFwiKTtcblxuYXN5bmMgZnVuY3Rpb24gZ2V0V2VhdGVyRGF0YShjaXR5TmFtZSkge1xuICB0cnkge1xuICAgIGNvbnN0IHdlYXRoZXIgPSBhd2FpdCBmZXRjaChcbiAgICAgIGBodHRwOi8vYXBpLndlYXRoZXJhcGkuY29tL3YxL2ZvcmVjYXN0Lmpzb24/a2V5PWExZmQ3YTE4YzdkZjQ1Y2Q5Y2YxNTIxMTIzMjQwMyZxPSR7Y2l0eU5hbWV9JmRheXM9MyZhcWk9bm8mYWxlcnRzPW5vYCxcbiAgICAgIHtcbiAgICAgICAgbW9kZTogXCJjb3JzXCIsXG4gICAgICB9XG4gICAgKTtcbiAgICBjb25zdCBkYXRhID0gYXdhaXQgd2VhdGhlci5qc29uKCk7XG5cbiAgICB0b2RheShkYXRhKTtcbiAgICB0b21vcnJvdyhkYXRhKTtcbiAgICBkYXlBZnRlclRvbW9ycm93KGRhdGEpO1xuXG4gICAgc2V0bG9jYXRpb24oXG4gICAgICBkYXRhLmxvY2F0aW9uLnJlZ2lvbixcbiAgICAgIGRhdGEubG9jYXRpb24uY291bnRyeSxcbiAgICAgIGRhdGEubG9jYXRpb24ubmFtZVxuICAgICk7XG4gICAgc2V0RGF0ZShkYXRhLmZvcmVjYXN0LmZvcmVjYXN0ZGF5KTtcblxuICAgIGNvbnN0IHVuaXRDb252ZXJ0ZXJCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnVuaXQtY29udmVydGVyXCIpO1xuICAgIHVuaXRDb252ZXJ0ZXJCdG4udGV4dENvbnRlbnQgPSBcIkZcIjtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmxvZyhlcnJvci5tZXNzYWdlKTtcbiAgfVxufVxuXG5zZWFyY2hCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgZ2V0V2VhdGVyRGF0YShpbnB1dC52YWx1ZSk7XG4gIGlucHV0LnZhbHVlID0gXCJcIjtcbn0pO1xuXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcImtleXByZXNzXCIsIChlKSA9PiB7XG4gIGlmIChlLmtleSA9PT0gXCJFbnRlclwiKSB7XG4gICAgZ2V0V2VhdGVyRGF0YShpbnB1dC52YWx1ZSk7XG4gICAgaW5wdXQudmFsdWUgPSBcIlwiO1xuICB9XG59KTtcblxuZ2V0V2VhdGVyRGF0YShcIm5ldyB5b3JrXCIpO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9