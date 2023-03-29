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
___CSS_LOADER_EXPORT___.push([module.id, "* {\n  box-sizing: border-box;\n  /* border: 1px solid red; */\n}\n@font-face {\n  font-family: URW DIN light;\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n}\n@font-face {\n  font-family: URW DIN medium;\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ");\n}\n@font-face {\n  font-family: URW DIN bold;\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_2___ + ");\n}\n@font-face {\n  font-family: URW DIN extra-bold;\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_3___ + ");\n}\nbody {\n  height: 100vh;\n  width: 100vw;\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_4___ + ");\n  background-size: cover;\n  background-repeat: no-repeat;\n  backdrop-filter: blur(5px);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n/* main content and overlapping */\n\nmain {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n\n.forecast-container {\n  position: relative;\n  height: 500px;\n  width: 940px;\n  /* height: 440px;\n  width: 880px; */\n}\n.forecast-container > div {\n  height: 440px;\n  width: 880px;\n  border-radius: 220px;\n}\n.class-top {\n  position: absolute;\n  z-index: 3;\n  background-color: transparent;\n  border: 3px solid #565655;\n  mix-blend-mode: multiply;\n  box-shadow: inset 20px 20px 0px rgba(82, 82, 81, 0.2),\n    20px 20px 0px rgba(82, 82, 81, 0.5);\n}\n.inside {\n  position: absolute;\n  z-index: 2;\n  background-color: #dadcd1;\n  border: 3px solid #c0c0bd;\n  top: 20px;\n  left: 20px;\n  mix-blend-mode: normal;\n}\n.shadow {\n  position: absolute;\n  z-index: 1;\n  background-color: black;\n  top: 45px;\n  left: 40px;\n}\n\n/* clock */\n\n.clock {\n  position: absolute;\n  width: 270px;\n  height: 270px;\n  top: 85px;\n  left: 100px;\n  border-radius: 50%;\n  border: 3px solid rgb(82, 82, 81);\n  background-color: transparent;\n  box-shadow: inset 2px 2px 2px rgba(82, 82, 81, 0.5),\n    3px 3px 2px rgba(82, 82, 81, 0.5);\n}\n.hand {\n  border: none;\n}\n.clock .number-container {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  display: flex;\n  justify-content: center;\n  transform: rotate(var(--rotation));\n  border-radius: 50%;\n  padding-top: 4px;\n}\n.clock .one {\n  --rotation: 30deg;\n}\n.clock .two {\n  --rotation: 60deg;\n}\n.clock .three {\n  --rotation: 90deg;\n}\n.clock .four {\n  --rotation: 120deg;\n}\n.clock .five {\n  --rotation: 150deg;\n}\n.clock .six {\n  --rotation: 180deg;\n}\n.clock .seven {\n  --rotation: 210deg;\n}\n.clock .eigth {\n  --rotation: 240deg;\n}\n.clock .nine {\n  --rotation: 270deg;\n}\n.clock .ten {\n  --rotation: 300deg;\n}\n.clock .eleven {\n  --rotation: 330deg;\n}\n.clock .number {\n  position: absolute;\n  width: 3px;\n  height: 15px;\n  border-radius: 2px;\n  background-color: #707070;\n}\n.clock .hand {\n  --rotation: 0;\n  position: absolute;\n  bottom: 50%;\n  left: 50%;\n  transform-origin: bottom;\n  z-index: 10;\n  transform: translateX(-50%) rotate(calc(var(--rotation) * 1deg));\n}\n.clock::after {\n  content: \"\";\n  position: absolute;\n  background-color: black;\n  z-index: 11;\n  width: 12px;\n  height: 12px;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  border-radius: 50%;\n  box-shadow: 2px 2px 0px rgba(82, 82, 81, 0.2);\n}\n.clock .hand.second {\n  width: 2px;\n  height: 110px;\n  background-color: rgb(255, 223, 39);\n}\n.clock .hand.minute {\n  width: 4px;\n  height: 100px;\n  background-color: #d4271e;\n}\n.clock .hand.hour {\n  width: 4px;\n  height: 70px;\n  background-color: #d4271e;\n}\n\n/* information container */\n\n.weather-container {\n  position: absolute;\n  width: 360px;\n  height: 270px;\n  top: 85px;\n  left: 450px;\n  display: flex;\n  flex-direction: column;\n}\n.city {\n  display: flex;\n  align-items: center;\n  height: 30px;\n  font-family: URW DIN medium;\n  color: #565655;\n  font-size: 20px;\n}\n.date {\n  display: flex;\n  align-items: center;\n  height: 70px;\n  font-family: URW DIN bold;\n  color: #313131;\n  font-size: 40px;\n  padding-bottom: 10px;\n  border-bottom: 2px solid #b5b7ae;\n  margin-bottom: 10px;\n}\n.weather {\n  flex-grow: 1;\n  display: grid;\n  grid-template-columns: 1fr 1fr 1fr;\n  padding-right: 25px;\n}\n.weather > div {\n  display: flex;\n  flex-direction: column;\n}\n.weather .icon {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: 50%;\n  margin-bottom: 10px;\n}\n.weather .temperature {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-grow: 1;\n  font-family: URW DIN bold;\n  color: #565655;\n  font-size: 35px;\n}\n.weather .time {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-grow: 1;\n  font-family: URW DIN medium;\n  color: #565655;\n  font-size: 20px;\n}\n.icon span {\n  font-size: 70px;\n  color: #565655;\n}\n\n/* input */\n\n.input-container {  \n  margin-top: 5vh;\n  width: 300px;\n  display: flex;\n  justify-content: space-between;\n  height: 36px;\n}\n.input-container input {\n  all: unset;\n  width: 55%;\n  border-radius: 18px;\n  background-color: #dadcd1;\n  border: 3px solid #565655;\n  box-shadow: 3px 5px 0px rgba(34, 34, 34, 0.6);\n  font-family: URW DIN medium;\n  color: #313131;\n  padding: 5px;\n  padding-left: 15px;\n  padding-right: 15px;\n}\n.input-container input:focus {\n  border: 3px solid #c0c0bd;\n}\n.input-container .search {\n  all: unset;\n  height: 30px;\n  width: 30px;\n  border-radius: 18px;\n  background-color: #dadcd1;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  cursor: pointer;\n  border: 3px solid #565655;\n  box-shadow: 2px 3px 0px rgba(34, 34, 34, 0.6);\n  color: #565655;\n}\n.input-container .search:active {\n  transform: translate(2px, 2px);\n  box-shadow: 0px 0px 0px 0px;\n}\n.input-container .unit-converter {\n  all: unset;\n  height: 30px;\n  width: 30px;\n  border-radius: 18px;\n  background-color: #dadcd1;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  cursor: pointer;\n  border: 3px solid #565655;\n  box-shadow: 2px 3px 0px rgba(34, 34, 34, 0.6);\n  font-family: URW DIN bold;\n  color: #565655;\n}\n.input-container .unit-converter:active {\n  transform: translate(2px, 2px);\n  box-shadow: 0px 0px 0px 0px;\n}\n", "",{"version":3,"sources":["webpack://./src/index.css"],"names":[],"mappings":"AAAA;EACE,sBAAsB;EACtB,2BAA2B;AAC7B;AACA;EACE,0BAA0B;EAC1B,4CAAmC;AACrC;AACA;EACE,2BAA2B;EAC3B,4CAAoC;AACtC;AACA;EACE,yBAAyB;EACzB,4CAAkC;AACpC;AACA;EACE,+BAA+B;EAC/B,4CAAwC;AAC1C;AACA;EACE,aAAa;EACb,YAAY;EACZ,yDAAyC;EACzC,sBAAsB;EACtB,4BAA4B;EAC5B,0BAA0B;EAC1B,aAAa;EACb,uBAAuB;EACvB,mBAAmB;AACrB;;AAEA,iCAAiC;;AAEjC;EACE,aAAa;EACb,sBAAsB;EACtB,mBAAmB;AACrB;;AAEA;EACE,kBAAkB;EAClB,aAAa;EACb,YAAY;EACZ;iBACe;AACjB;AACA;EACE,aAAa;EACb,YAAY;EACZ,oBAAoB;AACtB;AACA;EACE,kBAAkB;EAClB,UAAU;EACV,6BAA6B;EAC7B,yBAAyB;EACzB,wBAAwB;EACxB;uCACqC;AACvC;AACA;EACE,kBAAkB;EAClB,UAAU;EACV,yBAAyB;EACzB,yBAAyB;EACzB,SAAS;EACT,UAAU;EACV,sBAAsB;AACxB;AACA;EACE,kBAAkB;EAClB,UAAU;EACV,uBAAuB;EACvB,SAAS;EACT,UAAU;AACZ;;AAEA,UAAU;;AAEV;EACE,kBAAkB;EAClB,YAAY;EACZ,aAAa;EACb,SAAS;EACT,WAAW;EACX,kBAAkB;EAClB,iCAAiC;EACjC,6BAA6B;EAC7B;qCACmC;AACrC;AACA;EACE,YAAY;AACd;AACA;EACE,kBAAkB;EAClB,WAAW;EACX,YAAY;EACZ,aAAa;EACb,uBAAuB;EACvB,kCAAkC;EAClC,kBAAkB;EAClB,gBAAgB;AAClB;AACA;EACE,iBAAiB;AACnB;AACA;EACE,iBAAiB;AACnB;AACA;EACE,iBAAiB;AACnB;AACA;EACE,kBAAkB;AACpB;AACA;EACE,kBAAkB;AACpB;AACA;EACE,kBAAkB;AACpB;AACA;EACE,kBAAkB;AACpB;AACA;EACE,kBAAkB;AACpB;AACA;EACE,kBAAkB;AACpB;AACA;EACE,kBAAkB;AACpB;AACA;EACE,kBAAkB;AACpB;AACA;EACE,kBAAkB;EAClB,UAAU;EACV,YAAY;EACZ,kBAAkB;EAClB,yBAAyB;AAC3B;AACA;EACE,aAAa;EACb,kBAAkB;EAClB,WAAW;EACX,SAAS;EACT,wBAAwB;EACxB,WAAW;EACX,gEAAgE;AAClE;AACA;EACE,WAAW;EACX,kBAAkB;EAClB,uBAAuB;EACvB,WAAW;EACX,WAAW;EACX,YAAY;EACZ,QAAQ;EACR,SAAS;EACT,gCAAgC;EAChC,kBAAkB;EAClB,6CAA6C;AAC/C;AACA;EACE,UAAU;EACV,aAAa;EACb,mCAAmC;AACrC;AACA;EACE,UAAU;EACV,aAAa;EACb,yBAAyB;AAC3B;AACA;EACE,UAAU;EACV,YAAY;EACZ,yBAAyB;AAC3B;;AAEA,0BAA0B;;AAE1B;EACE,kBAAkB;EAClB,YAAY;EACZ,aAAa;EACb,SAAS;EACT,WAAW;EACX,aAAa;EACb,sBAAsB;AACxB;AACA;EACE,aAAa;EACb,mBAAmB;EACnB,YAAY;EACZ,2BAA2B;EAC3B,cAAc;EACd,eAAe;AACjB;AACA;EACE,aAAa;EACb,mBAAmB;EACnB,YAAY;EACZ,yBAAyB;EACzB,cAAc;EACd,eAAe;EACf,oBAAoB;EACpB,gCAAgC;EAChC,mBAAmB;AACrB;AACA;EACE,YAAY;EACZ,aAAa;EACb,kCAAkC;EAClC,mBAAmB;AACrB;AACA;EACE,aAAa;EACb,sBAAsB;AACxB;AACA;EACE,aAAa;EACb,uBAAuB;EACvB,mBAAmB;EACnB,WAAW;EACX,mBAAmB;AACrB;AACA;EACE,aAAa;EACb,uBAAuB;EACvB,mBAAmB;EACnB,YAAY;EACZ,yBAAyB;EACzB,cAAc;EACd,eAAe;AACjB;AACA;EACE,aAAa;EACb,uBAAuB;EACvB,mBAAmB;EACnB,YAAY;EACZ,2BAA2B;EAC3B,cAAc;EACd,eAAe;AACjB;AACA;EACE,eAAe;EACf,cAAc;AAChB;;AAEA,UAAU;;AAEV;EACE,eAAe;EACf,YAAY;EACZ,aAAa;EACb,8BAA8B;EAC9B,YAAY;AACd;AACA;EACE,UAAU;EACV,UAAU;EACV,mBAAmB;EACnB,yBAAyB;EACzB,yBAAyB;EACzB,6CAA6C;EAC7C,2BAA2B;EAC3B,cAAc;EACd,YAAY;EACZ,kBAAkB;EAClB,mBAAmB;AACrB;AACA;EACE,yBAAyB;AAC3B;AACA;EACE,UAAU;EACV,YAAY;EACZ,WAAW;EACX,mBAAmB;EACnB,yBAAyB;EACzB,aAAa;EACb,uBAAuB;EACvB,mBAAmB;EACnB,eAAe;EACf,yBAAyB;EACzB,6CAA6C;EAC7C,cAAc;AAChB;AACA;EACE,8BAA8B;EAC9B,2BAA2B;AAC7B;AACA;EACE,UAAU;EACV,YAAY;EACZ,WAAW;EACX,mBAAmB;EACnB,yBAAyB;EACzB,aAAa;EACb,uBAAuB;EACvB,mBAAmB;EACnB,eAAe;EACf,yBAAyB;EACzB,6CAA6C;EAC7C,yBAAyB;EACzB,cAAc;AAChB;AACA;EACE,8BAA8B;EAC9B,2BAA2B;AAC7B","sourcesContent":["* {\n  box-sizing: border-box;\n  /* border: 1px solid red; */\n}\n@font-face {\n  font-family: URW DIN light;\n  src: url(./Fonts/URW-DIN-light.ttf);\n}\n@font-face {\n  font-family: URW DIN medium;\n  src: url(./Fonts/URW-DIN-medium.ttf);\n}\n@font-face {\n  font-family: URW DIN bold;\n  src: url(./Fonts/URW-DIN-bold.ttf);\n}\n@font-face {\n  font-family: URW DIN extra-bold;\n  src: url(./Fonts/URW-DIN-extra-bold.ttf);\n}\nbody {\n  height: 100vh;\n  width: 100vw;\n  background-image: url(./images/giphy.gif);\n  background-size: cover;\n  background-repeat: no-repeat;\n  backdrop-filter: blur(5px);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n/* main content and overlapping */\n\nmain {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n\n.forecast-container {\n  position: relative;\n  height: 500px;\n  width: 940px;\n  /* height: 440px;\n  width: 880px; */\n}\n.forecast-container > div {\n  height: 440px;\n  width: 880px;\n  border-radius: 220px;\n}\n.class-top {\n  position: absolute;\n  z-index: 3;\n  background-color: transparent;\n  border: 3px solid #565655;\n  mix-blend-mode: multiply;\n  box-shadow: inset 20px 20px 0px rgba(82, 82, 81, 0.2),\n    20px 20px 0px rgba(82, 82, 81, 0.5);\n}\n.inside {\n  position: absolute;\n  z-index: 2;\n  background-color: #dadcd1;\n  border: 3px solid #c0c0bd;\n  top: 20px;\n  left: 20px;\n  mix-blend-mode: normal;\n}\n.shadow {\n  position: absolute;\n  z-index: 1;\n  background-color: black;\n  top: 45px;\n  left: 40px;\n}\n\n/* clock */\n\n.clock {\n  position: absolute;\n  width: 270px;\n  height: 270px;\n  top: 85px;\n  left: 100px;\n  border-radius: 50%;\n  border: 3px solid rgb(82, 82, 81);\n  background-color: transparent;\n  box-shadow: inset 2px 2px 2px rgba(82, 82, 81, 0.5),\n    3px 3px 2px rgba(82, 82, 81, 0.5);\n}\n.hand {\n  border: none;\n}\n.clock .number-container {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  display: flex;\n  justify-content: center;\n  transform: rotate(var(--rotation));\n  border-radius: 50%;\n  padding-top: 4px;\n}\n.clock .one {\n  --rotation: 30deg;\n}\n.clock .two {\n  --rotation: 60deg;\n}\n.clock .three {\n  --rotation: 90deg;\n}\n.clock .four {\n  --rotation: 120deg;\n}\n.clock .five {\n  --rotation: 150deg;\n}\n.clock .six {\n  --rotation: 180deg;\n}\n.clock .seven {\n  --rotation: 210deg;\n}\n.clock .eigth {\n  --rotation: 240deg;\n}\n.clock .nine {\n  --rotation: 270deg;\n}\n.clock .ten {\n  --rotation: 300deg;\n}\n.clock .eleven {\n  --rotation: 330deg;\n}\n.clock .number {\n  position: absolute;\n  width: 3px;\n  height: 15px;\n  border-radius: 2px;\n  background-color: #707070;\n}\n.clock .hand {\n  --rotation: 0;\n  position: absolute;\n  bottom: 50%;\n  left: 50%;\n  transform-origin: bottom;\n  z-index: 10;\n  transform: translateX(-50%) rotate(calc(var(--rotation) * 1deg));\n}\n.clock::after {\n  content: \"\";\n  position: absolute;\n  background-color: black;\n  z-index: 11;\n  width: 12px;\n  height: 12px;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  border-radius: 50%;\n  box-shadow: 2px 2px 0px rgba(82, 82, 81, 0.2);\n}\n.clock .hand.second {\n  width: 2px;\n  height: 110px;\n  background-color: rgb(255, 223, 39);\n}\n.clock .hand.minute {\n  width: 4px;\n  height: 100px;\n  background-color: #d4271e;\n}\n.clock .hand.hour {\n  width: 4px;\n  height: 70px;\n  background-color: #d4271e;\n}\n\n/* information container */\n\n.weather-container {\n  position: absolute;\n  width: 360px;\n  height: 270px;\n  top: 85px;\n  left: 450px;\n  display: flex;\n  flex-direction: column;\n}\n.city {\n  display: flex;\n  align-items: center;\n  height: 30px;\n  font-family: URW DIN medium;\n  color: #565655;\n  font-size: 20px;\n}\n.date {\n  display: flex;\n  align-items: center;\n  height: 70px;\n  font-family: URW DIN bold;\n  color: #313131;\n  font-size: 40px;\n  padding-bottom: 10px;\n  border-bottom: 2px solid #b5b7ae;\n  margin-bottom: 10px;\n}\n.weather {\n  flex-grow: 1;\n  display: grid;\n  grid-template-columns: 1fr 1fr 1fr;\n  padding-right: 25px;\n}\n.weather > div {\n  display: flex;\n  flex-direction: column;\n}\n.weather .icon {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: 50%;\n  margin-bottom: 10px;\n}\n.weather .temperature {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-grow: 1;\n  font-family: URW DIN bold;\n  color: #565655;\n  font-size: 35px;\n}\n.weather .time {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-grow: 1;\n  font-family: URW DIN medium;\n  color: #565655;\n  font-size: 20px;\n}\n.icon span {\n  font-size: 70px;\n  color: #565655;\n}\n\n/* input */\n\n.input-container {  \n  margin-top: 5vh;\n  width: 300px;\n  display: flex;\n  justify-content: space-between;\n  height: 36px;\n}\n.input-container input {\n  all: unset;\n  width: 55%;\n  border-radius: 18px;\n  background-color: #dadcd1;\n  border: 3px solid #565655;\n  box-shadow: 3px 5px 0px rgba(34, 34, 34, 0.6);\n  font-family: URW DIN medium;\n  color: #313131;\n  padding: 5px;\n  padding-left: 15px;\n  padding-right: 15px;\n}\n.input-container input:focus {\n  border: 3px solid #c0c0bd;\n}\n.input-container .search {\n  all: unset;\n  height: 30px;\n  width: 30px;\n  border-radius: 18px;\n  background-color: #dadcd1;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  cursor: pointer;\n  border: 3px solid #565655;\n  box-shadow: 2px 3px 0px rgba(34, 34, 34, 0.6);\n  color: #565655;\n}\n.input-container .search:active {\n  transform: translate(2px, 2px);\n  box-shadow: 0px 0px 0px 0px;\n}\n.input-container .unit-converter {\n  all: unset;\n  height: 30px;\n  width: 30px;\n  border-radius: 18px;\n  background-color: #dadcd1;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  cursor: pointer;\n  border: 3px solid #565655;\n  box-shadow: 2px 3px 0px rgba(34, 34, 34, 0.6);\n  font-family: URW DIN bold;\n  color: #565655;\n}\n.input-container .unit-converter:active {\n  transform: translate(2px, 2px);\n  box-shadow: 0px 0px 0px 0px;\n}\n"],"sourceRoot":""}]);
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

setInterval(setClock, 1000);

setClock()

async function getWeaterData() {
    const weather = await fetch("http://api.weatherapi.com/v1/current.json?key=a1fd7a18c7df45cd9cf15211232403&q=London&aqi=yes", {
        mode: "cors"
    })
    const data = await weather.json()

    console.log(data)
}

getWeaterData()
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFLLFVBQVUsS0FBSyxLQUFLLFlBQVksV0FBVyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxXQUFXLFVBQVUsWUFBWSxhQUFhLE1BQU0sS0FBSyxVQUFVLFlBQVksV0FBVyxVQUFVLFlBQVksV0FBVyxZQUFZLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLFVBQVUsVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsTUFBTSxLQUFLLFVBQVUsVUFBVSxZQUFZLE1BQU0sS0FBSyxVQUFVLFVBQVUsWUFBWSxNQUFNLEtBQUssVUFBVSxVQUFVLFlBQVksT0FBTyxhQUFhLE1BQU0sWUFBWSxXQUFXLFVBQVUsVUFBVSxVQUFVLFVBQVUsWUFBWSxNQUFNLEtBQUssVUFBVSxZQUFZLFdBQVcsWUFBWSxXQUFXLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxhQUFhLE1BQU0sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLE1BQU0sS0FBSyxVQUFVLFlBQVksTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLFdBQVcsVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLFdBQVcsVUFBVSxNQUFNLEtBQUssVUFBVSxVQUFVLE9BQU8sV0FBVyxLQUFLLFVBQVUsVUFBVSxVQUFVLFlBQVksV0FBVyxLQUFLLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxXQUFXLFVBQVUsWUFBWSxhQUFhLE1BQU0sS0FBSyxZ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QUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQ2JBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7Ozs7V0N6QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLEdBQUc7V0FDSDtXQUNBO1dBQ0EsQ0FBQzs7Ozs7V0NQRDs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7Ozs7O1dDZkE7O1dBRUE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOzs7OztXQ3JCQTs7Ozs7Ozs7Ozs7O0FDQXFCOztBQUVyQjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTs7QUFFQSxlIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvaW5kZXguY3NzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9pbmRleC5jc3M/Y2ZlNCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIi4vRm9udHMvVVJXLURJTi1saWdodC50dGZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyA9IG5ldyBVUkwoXCIuL0ZvbnRzL1VSVy1ESU4tbWVkaXVtLnR0ZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8yX19fID0gbmV3IFVSTChcIi4vRm9udHMvVVJXLURJTi1ib2xkLnR0ZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8zX19fID0gbmV3IFVSTChcIi4vRm9udHMvVVJXLURJTi1leHRyYS1ib2xkLnR0ZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF80X19fID0gbmV3IFVSTChcIi4vaW1hZ2VzL2dpcGh5LmdpZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMl9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzJfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzNfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8zX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF80X19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfNF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIqIHtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAvKiBib3JkZXI6IDFweCBzb2xpZCByZWQ7ICovXFxufVxcbkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6IFVSVyBESU4gbGlnaHQ7XFxuICBzcmM6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gKyBcIik7XFxufVxcbkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6IFVSVyBESU4gbWVkaXVtO1xcbiAgc3JjOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fICsgXCIpO1xcbn1cXG5AZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiBVUlcgRElOIGJvbGQ7XFxuICBzcmM6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzJfX18gKyBcIik7XFxufVxcbkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6IFVSVyBESU4gZXh0cmEtYm9sZDtcXG4gIHNyYzogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfM19fXyArIFwiKTtcXG59XFxuYm9keSB7XFxuICBoZWlnaHQ6IDEwMHZoO1xcbiAgd2lkdGg6IDEwMHZ3O1xcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfNF9fXyArIFwiKTtcXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcbiAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDVweCk7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4vKiBtYWluIGNvbnRlbnQgYW5kIG92ZXJsYXBwaW5nICovXFxuXFxubWFpbiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5mb3JlY2FzdC1jb250YWluZXIge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgaGVpZ2h0OiA1MDBweDtcXG4gIHdpZHRoOiA5NDBweDtcXG4gIC8qIGhlaWdodDogNDQwcHg7XFxuICB3aWR0aDogODgwcHg7ICovXFxufVxcbi5mb3JlY2FzdC1jb250YWluZXIgPiBkaXYge1xcbiAgaGVpZ2h0OiA0NDBweDtcXG4gIHdpZHRoOiA4ODBweDtcXG4gIGJvcmRlci1yYWRpdXM6IDIyMHB4O1xcbn1cXG4uY2xhc3MtdG9wIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHotaW5kZXg6IDM7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gIGJvcmRlcjogM3B4IHNvbGlkICM1NjU2NTU7XFxuICBtaXgtYmxlbmQtbW9kZTogbXVsdGlwbHk7XFxuICBib3gtc2hhZG93OiBpbnNldCAyMHB4IDIwcHggMHB4IHJnYmEoODIsIDgyLCA4MSwgMC4yKSxcXG4gICAgMjBweCAyMHB4IDBweCByZ2JhKDgyLCA4MiwgODEsIDAuNSk7XFxufVxcbi5pbnNpZGUge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgei1pbmRleDogMjtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNkYWRjZDE7XFxuICBib3JkZXI6IDNweCBzb2xpZCAjYzBjMGJkO1xcbiAgdG9wOiAyMHB4O1xcbiAgbGVmdDogMjBweDtcXG4gIG1peC1ibGVuZC1tb2RlOiBub3JtYWw7XFxufVxcbi5zaGFkb3cge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgei1pbmRleDogMTtcXG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcbiAgdG9wOiA0NXB4O1xcbiAgbGVmdDogNDBweDtcXG59XFxuXFxuLyogY2xvY2sgKi9cXG5cXG4uY2xvY2sge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgd2lkdGg6IDI3MHB4O1xcbiAgaGVpZ2h0OiAyNzBweDtcXG4gIHRvcDogODVweDtcXG4gIGxlZnQ6IDEwMHB4O1xcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgYm9yZGVyOiAzcHggc29saWQgcmdiKDgyLCA4MiwgODEpO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICBib3gtc2hhZG93OiBpbnNldCAycHggMnB4IDJweCByZ2JhKDgyLCA4MiwgODEsIDAuNSksXFxuICAgIDNweCAzcHggMnB4IHJnYmEoODIsIDgyLCA4MSwgMC41KTtcXG59XFxuLmhhbmQge1xcbiAgYm9yZGVyOiBub25lO1xcbn1cXG4uY2xvY2sgLm51bWJlci1jb250YWluZXIge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICB0cmFuc2Zvcm06IHJvdGF0ZSh2YXIoLS1yb3RhdGlvbikpO1xcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgcGFkZGluZy10b3A6IDRweDtcXG59XFxuLmNsb2NrIC5vbmUge1xcbiAgLS1yb3RhdGlvbjogMzBkZWc7XFxufVxcbi5jbG9jayAudHdvIHtcXG4gIC0tcm90YXRpb246IDYwZGVnO1xcbn1cXG4uY2xvY2sgLnRocmVlIHtcXG4gIC0tcm90YXRpb246IDkwZGVnO1xcbn1cXG4uY2xvY2sgLmZvdXIge1xcbiAgLS1yb3RhdGlvbjogMTIwZGVnO1xcbn1cXG4uY2xvY2sgLmZpdmUge1xcbiAgLS1yb3RhdGlvbjogMTUwZGVnO1xcbn1cXG4uY2xvY2sgLnNpeCB7XFxuICAtLXJvdGF0aW9uOiAxODBkZWc7XFxufVxcbi5jbG9jayAuc2V2ZW4ge1xcbiAgLS1yb3RhdGlvbjogMjEwZGVnO1xcbn1cXG4uY2xvY2sgLmVpZ3RoIHtcXG4gIC0tcm90YXRpb246IDI0MGRlZztcXG59XFxuLmNsb2NrIC5uaW5lIHtcXG4gIC0tcm90YXRpb246IDI3MGRlZztcXG59XFxuLmNsb2NrIC50ZW4ge1xcbiAgLS1yb3RhdGlvbjogMzAwZGVnO1xcbn1cXG4uY2xvY2sgLmVsZXZlbiB7XFxuICAtLXJvdGF0aW9uOiAzMzBkZWc7XFxufVxcbi5jbG9jayAubnVtYmVyIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHdpZHRoOiAzcHg7XFxuICBoZWlnaHQ6IDE1cHg7XFxuICBib3JkZXItcmFkaXVzOiAycHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNzA3MDcwO1xcbn1cXG4uY2xvY2sgLmhhbmQge1xcbiAgLS1yb3RhdGlvbjogMDtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGJvdHRvbTogNTAlO1xcbiAgbGVmdDogNTAlO1xcbiAgdHJhbnNmb3JtLW9yaWdpbjogYm90dG9tO1xcbiAgei1pbmRleDogMTA7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSkgcm90YXRlKGNhbGModmFyKC0tcm90YXRpb24pICogMWRlZykpO1xcbn1cXG4uY2xvY2s6OmFmdGVyIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFwiO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxuICB6LWluZGV4OiAxMTtcXG4gIHdpZHRoOiAxMnB4O1xcbiAgaGVpZ2h0OiAxMnB4O1xcbiAgdG9wOiA1MCU7XFxuICBsZWZ0OiA1MCU7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gIGJveC1zaGFkb3c6IDJweCAycHggMHB4IHJnYmEoODIsIDgyLCA4MSwgMC4yKTtcXG59XFxuLmNsb2NrIC5oYW5kLnNlY29uZCB7XFxuICB3aWR0aDogMnB4O1xcbiAgaGVpZ2h0OiAxMTBweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTUsIDIyMywgMzkpO1xcbn1cXG4uY2xvY2sgLmhhbmQubWludXRlIHtcXG4gIHdpZHRoOiA0cHg7XFxuICBoZWlnaHQ6IDEwMHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Q0MjcxZTtcXG59XFxuLmNsb2NrIC5oYW5kLmhvdXIge1xcbiAgd2lkdGg6IDRweDtcXG4gIGhlaWdodDogNzBweDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNkNDI3MWU7XFxufVxcblxcbi8qIGluZm9ybWF0aW9uIGNvbnRhaW5lciAqL1xcblxcbi53ZWF0aGVyLWNvbnRhaW5lciB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB3aWR0aDogMzYwcHg7XFxuICBoZWlnaHQ6IDI3MHB4O1xcbiAgdG9wOiA4NXB4O1xcbiAgbGVmdDogNDUwcHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuLmNpdHkge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBoZWlnaHQ6IDMwcHg7XFxuICBmb250LWZhbWlseTogVVJXIERJTiBtZWRpdW07XFxuICBjb2xvcjogIzU2NTY1NTtcXG4gIGZvbnQtc2l6ZTogMjBweDtcXG59XFxuLmRhdGUge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBoZWlnaHQ6IDcwcHg7XFxuICBmb250LWZhbWlseTogVVJXIERJTiBib2xkO1xcbiAgY29sb3I6ICMzMTMxMzE7XFxuICBmb250LXNpemU6IDQwcHg7XFxuICBwYWRkaW5nLWJvdHRvbTogMTBweDtcXG4gIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjYjViN2FlO1xcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcXG59XFxuLndlYXRoZXIge1xcbiAgZmxleC1ncm93OiAxO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmciAxZnI7XFxuICBwYWRkaW5nLXJpZ2h0OiAyNXB4O1xcbn1cXG4ud2VhdGhlciA+IGRpdiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuLndlYXRoZXIgLmljb24ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGhlaWdodDogNTAlO1xcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcXG59XFxuLndlYXRoZXIgLnRlbXBlcmF0dXJlIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBmbGV4LWdyb3c6IDE7XFxuICBmb250LWZhbWlseTogVVJXIERJTiBib2xkO1xcbiAgY29sb3I6ICM1NjU2NTU7XFxuICBmb250LXNpemU6IDM1cHg7XFxufVxcbi53ZWF0aGVyIC50aW1lIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBmbGV4LWdyb3c6IDE7XFxuICBmb250LWZhbWlseTogVVJXIERJTiBtZWRpdW07XFxuICBjb2xvcjogIzU2NTY1NTtcXG4gIGZvbnQtc2l6ZTogMjBweDtcXG59XFxuLmljb24gc3BhbiB7XFxuICBmb250LXNpemU6IDcwcHg7XFxuICBjb2xvcjogIzU2NTY1NTtcXG59XFxuXFxuLyogaW5wdXQgKi9cXG5cXG4uaW5wdXQtY29udGFpbmVyIHsgIFxcbiAgbWFyZ2luLXRvcDogNXZoO1xcbiAgd2lkdGg6IDMwMHB4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIGhlaWdodDogMzZweDtcXG59XFxuLmlucHV0LWNvbnRhaW5lciBpbnB1dCB7XFxuICBhbGw6IHVuc2V0O1xcbiAgd2lkdGg6IDU1JTtcXG4gIGJvcmRlci1yYWRpdXM6IDE4cHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGFkY2QxO1xcbiAgYm9yZGVyOiAzcHggc29saWQgIzU2NTY1NTtcXG4gIGJveC1zaGFkb3c6IDNweCA1cHggMHB4IHJnYmEoMzQsIDM0LCAzNCwgMC42KTtcXG4gIGZvbnQtZmFtaWx5OiBVUlcgRElOIG1lZGl1bTtcXG4gIGNvbG9yOiAjMzEzMTMxO1xcbiAgcGFkZGluZzogNXB4O1xcbiAgcGFkZGluZy1sZWZ0OiAxNXB4O1xcbiAgcGFkZGluZy1yaWdodDogMTVweDtcXG59XFxuLmlucHV0LWNvbnRhaW5lciBpbnB1dDpmb2N1cyB7XFxuICBib3JkZXI6IDNweCBzb2xpZCAjYzBjMGJkO1xcbn1cXG4uaW5wdXQtY29udGFpbmVyIC5zZWFyY2gge1xcbiAgYWxsOiB1bnNldDtcXG4gIGhlaWdodDogMzBweDtcXG4gIHdpZHRoOiAzMHB4O1xcbiAgYm9yZGVyLXJhZGl1czogMThweDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNkYWRjZDE7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgYm9yZGVyOiAzcHggc29saWQgIzU2NTY1NTtcXG4gIGJveC1zaGFkb3c6IDJweCAzcHggMHB4IHJnYmEoMzQsIDM0LCAzNCwgMC42KTtcXG4gIGNvbG9yOiAjNTY1NjU1O1xcbn1cXG4uaW5wdXQtY29udGFpbmVyIC5zZWFyY2g6YWN0aXZlIHtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKDJweCwgMnB4KTtcXG4gIGJveC1zaGFkb3c6IDBweCAwcHggMHB4IDBweDtcXG59XFxuLmlucHV0LWNvbnRhaW5lciAudW5pdC1jb252ZXJ0ZXIge1xcbiAgYWxsOiB1bnNldDtcXG4gIGhlaWdodDogMzBweDtcXG4gIHdpZHRoOiAzMHB4O1xcbiAgYm9yZGVyLXJhZGl1czogMThweDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNkYWRjZDE7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgYm9yZGVyOiAzcHggc29saWQgIzU2NTY1NTtcXG4gIGJveC1zaGFkb3c6IDJweCAzcHggMHB4IHJnYmEoMzQsIDM0LCAzNCwgMC42KTtcXG4gIGZvbnQtZmFtaWx5OiBVUlcgRElOIGJvbGQ7XFxuICBjb2xvcjogIzU2NTY1NTtcXG59XFxuLmlucHV0LWNvbnRhaW5lciAudW5pdC1jb252ZXJ0ZXI6YWN0aXZlIHtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKDJweCwgMnB4KTtcXG4gIGJveC1zaGFkb3c6IDBweCAwcHggMHB4IDBweDtcXG59XFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL2luZGV4LmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLHNCQUFzQjtFQUN0QiwyQkFBMkI7QUFDN0I7QUFDQTtFQUNFLDBCQUEwQjtFQUMxQiw0Q0FBbUM7QUFDckM7QUFDQTtFQUNFLDJCQUEyQjtFQUMzQiw0Q0FBb0M7QUFDdEM7QUFDQTtFQUNFLHlCQUF5QjtFQUN6Qiw0Q0FBa0M7QUFDcEM7QUFDQTtFQUNFLCtCQUErQjtFQUMvQiw0Q0FBd0M7QUFDMUM7QUFDQTtFQUNFLGFBQWE7RUFDYixZQUFZO0VBQ1oseURBQXlDO0VBQ3pDLHNCQUFzQjtFQUN0Qiw0QkFBNEI7RUFDNUIsMEJBQTBCO0VBQzFCLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsbUJBQW1CO0FBQ3JCOztBQUVBLGlDQUFpQzs7QUFFakM7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixhQUFhO0VBQ2IsWUFBWTtFQUNaO2lCQUNlO0FBQ2pCO0FBQ0E7RUFDRSxhQUFhO0VBQ2IsWUFBWTtFQUNaLG9CQUFvQjtBQUN0QjtBQUNBO0VBQ0Usa0JBQWtCO0VBQ2xCLFVBQVU7RUFDViw2QkFBNkI7RUFDN0IseUJBQXlCO0VBQ3pCLHdCQUF3QjtFQUN4Qjt1Q0FDcUM7QUFDdkM7QUFDQTtFQUNFLGtCQUFrQjtFQUNsQixVQUFVO0VBQ1YseUJBQXlCO0VBQ3pCLHlCQUF5QjtFQUN6QixTQUFTO0VBQ1QsVUFBVTtFQUNWLHNCQUFzQjtBQUN4QjtBQUNBO0VBQ0Usa0JBQWtCO0VBQ2xCLFVBQVU7RUFDVix1QkFBdUI7RUFDdkIsU0FBUztFQUNULFVBQVU7QUFDWjs7QUFFQSxVQUFVOztBQUVWO0VBQ0Usa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixhQUFhO0VBQ2IsU0FBUztFQUNULFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsaUNBQWlDO0VBQ2pDLDZCQUE2QjtFQUM3QjtxQ0FDbUM7QUFDckM7QUFDQTtFQUNFLFlBQVk7QUFDZDtBQUNBO0VBQ0Usa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxZQUFZO0VBQ1osYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixrQ0FBa0M7RUFDbEMsa0JBQWtCO0VBQ2xCLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsaUJBQWlCO0FBQ25CO0FBQ0E7RUFDRSxpQkFBaUI7QUFDbkI7QUFDQTtFQUNFLGlCQUFpQjtBQUNuQjtBQUNBO0VBQ0Usa0JBQWtCO0FBQ3BCO0FBQ0E7RUFDRSxrQkFBa0I7QUFDcEI7QUFDQTtFQUNFLGtCQUFrQjtBQUNwQjtBQUNBO0VBQ0Usa0JBQWtCO0FBQ3BCO0FBQ0E7RUFDRSxrQkFBa0I7QUFDcEI7QUFDQTtFQUNFLGtCQUFrQjtBQUNwQjtBQUNBO0VBQ0Usa0JBQWtCO0FBQ3BCO0FBQ0E7RUFDRSxrQkFBa0I7QUFDcEI7QUFDQTtFQUNFLGtCQUFrQjtFQUNsQixVQUFVO0VBQ1YsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQix5QkFBeUI7QUFDM0I7QUFDQTtFQUNFLGFBQWE7RUFDYixrQkFBa0I7RUFDbEIsV0FBVztFQUNYLFNBQVM7RUFDVCx3QkFBd0I7RUFDeEIsV0FBVztFQUNYLGdFQUFnRTtBQUNsRTtBQUNBO0VBQ0UsV0FBVztFQUNYLGtCQUFrQjtFQUNsQix1QkFBdUI7RUFDdkIsV0FBVztFQUNYLFdBQVc7RUFDWCxZQUFZO0VBQ1osUUFBUTtFQUNSLFNBQVM7RUFDVCxnQ0FBZ0M7RUFDaEMsa0JBQWtCO0VBQ2xCLDZDQUE2QztBQUMvQztBQUNBO0VBQ0UsVUFBVTtFQUNWLGFBQWE7RUFDYixtQ0FBbUM7QUFDckM7QUFDQTtFQUNFLFVBQVU7RUFDVixhQUFhO0VBQ2IseUJBQXlCO0FBQzNCO0FBQ0E7RUFDRSxVQUFVO0VBQ1YsWUFBWTtFQUNaLHlCQUF5QjtBQUMzQjs7QUFFQSwwQkFBMEI7O0FBRTFCO0VBQ0Usa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixhQUFhO0VBQ2IsU0FBUztFQUNULFdBQVc7RUFDWCxhQUFhO0VBQ2Isc0JBQXNCO0FBQ3hCO0FBQ0E7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLFlBQVk7RUFDWiwyQkFBMkI7RUFDM0IsY0FBYztFQUNkLGVBQWU7QUFDakI7QUFDQTtFQUNFLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsWUFBWTtFQUNaLHlCQUF5QjtFQUN6QixjQUFjO0VBQ2QsZUFBZTtFQUNmLG9CQUFvQjtFQUNwQixnQ0FBZ0M7RUFDaEMsbUJBQW1CO0FBQ3JCO0FBQ0E7RUFDRSxZQUFZO0VBQ1osYUFBYTtFQUNiLGtDQUFrQztFQUNsQyxtQkFBbUI7QUFDckI7QUFDQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7QUFDeEI7QUFDQTtFQUNFLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLFdBQVc7RUFDWCxtQkFBbUI7QUFDckI7QUFDQTtFQUNFLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLFlBQVk7RUFDWix5QkFBeUI7RUFDekIsY0FBYztFQUNkLGVBQWU7QUFDakI7QUFDQTtFQUNFLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLFlBQVk7RUFDWiwyQkFBMkI7RUFDM0IsY0FBYztFQUNkLGVBQWU7QUFDakI7QUFDQTtFQUNFLGVBQWU7RUFDZixjQUFjO0FBQ2hCOztBQUVBLFVBQVU7O0FBRVY7RUFDRSxlQUFlO0VBQ2YsWUFBWTtFQUNaLGFBQWE7RUFDYiw4QkFBOEI7RUFDOUIsWUFBWTtBQUNkO0FBQ0E7RUFDRSxVQUFVO0VBQ1YsVUFBVTtFQUNWLG1CQUFtQjtFQUNuQix5QkFBeUI7RUFDekIseUJBQXlCO0VBQ3pCLDZDQUE2QztFQUM3QywyQkFBMkI7RUFDM0IsY0FBYztFQUNkLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsbUJBQW1CO0FBQ3JCO0FBQ0E7RUFDRSx5QkFBeUI7QUFDM0I7QUFDQTtFQUNFLFVBQVU7RUFDVixZQUFZO0VBQ1osV0FBVztFQUNYLG1CQUFtQjtFQUNuQix5QkFBeUI7RUFDekIsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsZUFBZTtFQUNmLHlCQUF5QjtFQUN6Qiw2Q0FBNkM7RUFDN0MsY0FBYztBQUNoQjtBQUNBO0VBQ0UsOEJBQThCO0VBQzlCLDJCQUEyQjtBQUM3QjtBQUNBO0VBQ0UsVUFBVTtFQUNWLFlBQVk7RUFDWixXQUFXO0VBQ1gsbUJBQW1CO0VBQ25CLHlCQUF5QjtFQUN6QixhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQixlQUFlO0VBQ2YseUJBQXlCO0VBQ3pCLDZDQUE2QztFQUM3Qyx5QkFBeUI7RUFDekIsY0FBYztBQUNoQjtBQUNBO0VBQ0UsOEJBQThCO0VBQzlCLDJCQUEyQjtBQUM3QlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIqIHtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAvKiBib3JkZXI6IDFweCBzb2xpZCByZWQ7ICovXFxufVxcbkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6IFVSVyBESU4gbGlnaHQ7XFxuICBzcmM6IHVybCguL0ZvbnRzL1VSVy1ESU4tbGlnaHQudHRmKTtcXG59XFxuQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogVVJXIERJTiBtZWRpdW07XFxuICBzcmM6IHVybCguL0ZvbnRzL1VSVy1ESU4tbWVkaXVtLnR0Zik7XFxufVxcbkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6IFVSVyBESU4gYm9sZDtcXG4gIHNyYzogdXJsKC4vRm9udHMvVVJXLURJTi1ib2xkLnR0Zik7XFxufVxcbkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6IFVSVyBESU4gZXh0cmEtYm9sZDtcXG4gIHNyYzogdXJsKC4vRm9udHMvVVJXLURJTi1leHRyYS1ib2xkLnR0Zik7XFxufVxcbmJvZHkge1xcbiAgaGVpZ2h0OiAxMDB2aDtcXG4gIHdpZHRoOiAxMDB2dztcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCguL2ltYWdlcy9naXBoeS5naWYpO1xcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxuICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoNXB4KTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi8qIG1haW4gY29udGVudCBhbmQgb3ZlcmxhcHBpbmcgKi9cXG5cXG5tYWluIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLmZvcmVjYXN0LWNvbnRhaW5lciB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBoZWlnaHQ6IDUwMHB4O1xcbiAgd2lkdGg6IDk0MHB4O1xcbiAgLyogaGVpZ2h0OiA0NDBweDtcXG4gIHdpZHRoOiA4ODBweDsgKi9cXG59XFxuLmZvcmVjYXN0LWNvbnRhaW5lciA+IGRpdiB7XFxuICBoZWlnaHQ6IDQ0MHB4O1xcbiAgd2lkdGg6IDg4MHB4O1xcbiAgYm9yZGVyLXJhZGl1czogMjIwcHg7XFxufVxcbi5jbGFzcy10b3Age1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgei1pbmRleDogMztcXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgYm9yZGVyOiAzcHggc29saWQgIzU2NTY1NTtcXG4gIG1peC1ibGVuZC1tb2RlOiBtdWx0aXBseTtcXG4gIGJveC1zaGFkb3c6IGluc2V0IDIwcHggMjBweCAwcHggcmdiYSg4MiwgODIsIDgxLCAwLjIpLFxcbiAgICAyMHB4IDIwcHggMHB4IHJnYmEoODIsIDgyLCA4MSwgMC41KTtcXG59XFxuLmluc2lkZSB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB6LWluZGV4OiAyO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2RhZGNkMTtcXG4gIGJvcmRlcjogM3B4IHNvbGlkICNjMGMwYmQ7XFxuICB0b3A6IDIwcHg7XFxuICBsZWZ0OiAyMHB4O1xcbiAgbWl4LWJsZW5kLW1vZGU6IG5vcm1hbDtcXG59XFxuLnNoYWRvdyB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB6LWluZGV4OiAxO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxuICB0b3A6IDQ1cHg7XFxuICBsZWZ0OiA0MHB4O1xcbn1cXG5cXG4vKiBjbG9jayAqL1xcblxcbi5jbG9jayB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB3aWR0aDogMjcwcHg7XFxuICBoZWlnaHQ6IDI3MHB4O1xcbiAgdG9wOiA4NXB4O1xcbiAgbGVmdDogMTAwcHg7XFxuICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICBib3JkZXI6IDNweCBzb2xpZCByZ2IoODIsIDgyLCA4MSk7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gIGJveC1zaGFkb3c6IGluc2V0IDJweCAycHggMnB4IHJnYmEoODIsIDgyLCA4MSwgMC41KSxcXG4gICAgM3B4IDNweCAycHggcmdiYSg4MiwgODIsIDgxLCAwLjUpO1xcbn1cXG4uaGFuZCB7XFxuICBib3JkZXI6IG5vbmU7XFxufVxcbi5jbG9jayAubnVtYmVyLWNvbnRhaW5lciB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwJTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIHRyYW5zZm9ybTogcm90YXRlKHZhcigtLXJvdGF0aW9uKSk7XFxuICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICBwYWRkaW5nLXRvcDogNHB4O1xcbn1cXG4uY2xvY2sgLm9uZSB7XFxuICAtLXJvdGF0aW9uOiAzMGRlZztcXG59XFxuLmNsb2NrIC50d28ge1xcbiAgLS1yb3RhdGlvbjogNjBkZWc7XFxufVxcbi5jbG9jayAudGhyZWUge1xcbiAgLS1yb3RhdGlvbjogOTBkZWc7XFxufVxcbi5jbG9jayAuZm91ciB7XFxuICAtLXJvdGF0aW9uOiAxMjBkZWc7XFxufVxcbi5jbG9jayAuZml2ZSB7XFxuICAtLXJvdGF0aW9uOiAxNTBkZWc7XFxufVxcbi5jbG9jayAuc2l4IHtcXG4gIC0tcm90YXRpb246IDE4MGRlZztcXG59XFxuLmNsb2NrIC5zZXZlbiB7XFxuICAtLXJvdGF0aW9uOiAyMTBkZWc7XFxufVxcbi5jbG9jayAuZWlndGgge1xcbiAgLS1yb3RhdGlvbjogMjQwZGVnO1xcbn1cXG4uY2xvY2sgLm5pbmUge1xcbiAgLS1yb3RhdGlvbjogMjcwZGVnO1xcbn1cXG4uY2xvY2sgLnRlbiB7XFxuICAtLXJvdGF0aW9uOiAzMDBkZWc7XFxufVxcbi5jbG9jayAuZWxldmVuIHtcXG4gIC0tcm90YXRpb246IDMzMGRlZztcXG59XFxuLmNsb2NrIC5udW1iZXIge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgd2lkdGg6IDNweDtcXG4gIGhlaWdodDogMTVweDtcXG4gIGJvcmRlci1yYWRpdXM6IDJweDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICM3MDcwNzA7XFxufVxcbi5jbG9jayAuaGFuZCB7XFxuICAtLXJvdGF0aW9uOiAwO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgYm90dG9tOiA1MCU7XFxuICBsZWZ0OiA1MCU7XFxuICB0cmFuc2Zvcm0tb3JpZ2luOiBib3R0b207XFxuICB6LWluZGV4OiAxMDtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKSByb3RhdGUoY2FsYyh2YXIoLS1yb3RhdGlvbikgKiAxZGVnKSk7XFxufVxcbi5jbG9jazo6YWZ0ZXIge1xcbiAgY29udGVudDogXFxcIlxcXCI7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXG4gIHotaW5kZXg6IDExO1xcbiAgd2lkdGg6IDEycHg7XFxuICBoZWlnaHQ6IDEycHg7XFxuICB0b3A6IDUwJTtcXG4gIGxlZnQ6IDUwJTtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgYm94LXNoYWRvdzogMnB4IDJweCAwcHggcmdiYSg4MiwgODIsIDgxLCAwLjIpO1xcbn1cXG4uY2xvY2sgLmhhbmQuc2Vjb25kIHtcXG4gIHdpZHRoOiAycHg7XFxuICBoZWlnaHQ6IDExMHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1NSwgMjIzLCAzOSk7XFxufVxcbi5jbG9jayAuaGFuZC5taW51dGUge1xcbiAgd2lkdGg6IDRweDtcXG4gIGhlaWdodDogMTAwcHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZDQyNzFlO1xcbn1cXG4uY2xvY2sgLmhhbmQuaG91ciB7XFxuICB3aWR0aDogNHB4O1xcbiAgaGVpZ2h0OiA3MHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Q0MjcxZTtcXG59XFxuXFxuLyogaW5mb3JtYXRpb24gY29udGFpbmVyICovXFxuXFxuLndlYXRoZXItY29udGFpbmVyIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHdpZHRoOiAzNjBweDtcXG4gIGhlaWdodDogMjcwcHg7XFxuICB0b3A6IDg1cHg7XFxuICBsZWZ0OiA0NTBweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG4uY2l0eSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGhlaWdodDogMzBweDtcXG4gIGZvbnQtZmFtaWx5OiBVUlcgRElOIG1lZGl1bTtcXG4gIGNvbG9yOiAjNTY1NjU1O1xcbiAgZm9udC1zaXplOiAyMHB4O1xcbn1cXG4uZGF0ZSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGhlaWdodDogNzBweDtcXG4gIGZvbnQtZmFtaWx5OiBVUlcgRElOIGJvbGQ7XFxuICBjb2xvcjogIzMxMzEzMTtcXG4gIGZvbnQtc2l6ZTogNDBweDtcXG4gIHBhZGRpbmctYm90dG9tOiAxMHB4O1xcbiAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICNiNWI3YWU7XFxuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xcbn1cXG4ud2VhdGhlciB7XFxuICBmbGV4LWdyb3c6IDE7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyIDFmcjtcXG4gIHBhZGRpbmctcmlnaHQ6IDI1cHg7XFxufVxcbi53ZWF0aGVyID4gZGl2IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG4ud2VhdGhlciAuaWNvbiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgaGVpZ2h0OiA1MCU7XFxuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xcbn1cXG4ud2VhdGhlciAudGVtcGVyYXR1cmUge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGZsZXgtZ3JvdzogMTtcXG4gIGZvbnQtZmFtaWx5OiBVUlcgRElOIGJvbGQ7XFxuICBjb2xvcjogIzU2NTY1NTtcXG4gIGZvbnQtc2l6ZTogMzVweDtcXG59XFxuLndlYXRoZXIgLnRpbWUge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGZsZXgtZ3JvdzogMTtcXG4gIGZvbnQtZmFtaWx5OiBVUlcgRElOIG1lZGl1bTtcXG4gIGNvbG9yOiAjNTY1NjU1O1xcbiAgZm9udC1zaXplOiAyMHB4O1xcbn1cXG4uaWNvbiBzcGFuIHtcXG4gIGZvbnQtc2l6ZTogNzBweDtcXG4gIGNvbG9yOiAjNTY1NjU1O1xcbn1cXG5cXG4vKiBpbnB1dCAqL1xcblxcbi5pbnB1dC1jb250YWluZXIgeyAgXFxuICBtYXJnaW4tdG9wOiA1dmg7XFxuICB3aWR0aDogMzAwcHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgaGVpZ2h0OiAzNnB4O1xcbn1cXG4uaW5wdXQtY29udGFpbmVyIGlucHV0IHtcXG4gIGFsbDogdW5zZXQ7XFxuICB3aWR0aDogNTUlO1xcbiAgYm9yZGVyLXJhZGl1czogMThweDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNkYWRjZDE7XFxuICBib3JkZXI6IDNweCBzb2xpZCAjNTY1NjU1O1xcbiAgYm94LXNoYWRvdzogM3B4IDVweCAwcHggcmdiYSgzNCwgMzQsIDM0LCAwLjYpO1xcbiAgZm9udC1mYW1pbHk6IFVSVyBESU4gbWVkaXVtO1xcbiAgY29sb3I6ICMzMTMxMzE7XFxuICBwYWRkaW5nOiA1cHg7XFxuICBwYWRkaW5nLWxlZnQ6IDE1cHg7XFxuICBwYWRkaW5nLXJpZ2h0OiAxNXB4O1xcbn1cXG4uaW5wdXQtY29udGFpbmVyIGlucHV0OmZvY3VzIHtcXG4gIGJvcmRlcjogM3B4IHNvbGlkICNjMGMwYmQ7XFxufVxcbi5pbnB1dC1jb250YWluZXIgLnNlYXJjaCB7XFxuICBhbGw6IHVuc2V0O1xcbiAgaGVpZ2h0OiAzMHB4O1xcbiAgd2lkdGg6IDMwcHg7XFxuICBib3JkZXItcmFkaXVzOiAxOHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2RhZGNkMTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBib3JkZXI6IDNweCBzb2xpZCAjNTY1NjU1O1xcbiAgYm94LXNoYWRvdzogMnB4IDNweCAwcHggcmdiYSgzNCwgMzQsIDM0LCAwLjYpO1xcbiAgY29sb3I6ICM1NjU2NTU7XFxufVxcbi5pbnB1dC1jb250YWluZXIgLnNlYXJjaDphY3RpdmUge1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMnB4LCAycHgpO1xcbiAgYm94LXNoYWRvdzogMHB4IDBweCAwcHggMHB4O1xcbn1cXG4uaW5wdXQtY29udGFpbmVyIC51bml0LWNvbnZlcnRlciB7XFxuICBhbGw6IHVuc2V0O1xcbiAgaGVpZ2h0OiAzMHB4O1xcbiAgd2lkdGg6IDMwcHg7XFxuICBib3JkZXItcmFkaXVzOiAxOHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2RhZGNkMTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBib3JkZXI6IDNweCBzb2xpZCAjNTY1NjU1O1xcbiAgYm94LXNoYWRvdzogMnB4IDNweCAwcHggcmdiYSgzNCwgMzQsIDM0LCAwLjYpO1xcbiAgZm9udC1mYW1pbHk6IFVSVyBESU4gYm9sZDtcXG4gIGNvbG9yOiAjNTY1NjU1O1xcbn1cXG4uaW5wdXQtY29udGFpbmVyIC51bml0LWNvbnZlcnRlcjphY3RpdmUge1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMnB4LCAycHgpO1xcbiAgYm94LXNoYWRvdzogMHB4IDBweCAwcHggMHB4O1xcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH1cbiAgdXJsID0gU3RyaW5nKHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmwpO1xuXG4gIC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9XG5cbiAgLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuICBpZiAoL1tcIicoKSBcXHRcXG5dfCglMjApLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XG4gIH1cbiAgcmV0dXJuIHVybDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vaW5kZXguY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9pbmRleC5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmM7XG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkgc2NyaXB0VXJsID0gc2NyaXB0c1tzY3JpcHRzLmxlbmd0aCAtIDFdLnNyY1xuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmIgPSBkb2N1bWVudC5iYXNlVVJJIHx8IHNlbGYubG9jYXRpb24uaHJlZjtcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gW3Jlc29sdmUsIHJlamVjdCwgUHJvbWlzZV0gPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuXHRcIm1haW5cIjogMFxufTtcblxuLy8gbm8gY2h1bmsgb24gZGVtYW5kIGxvYWRpbmdcblxuLy8gbm8gcHJlZmV0Y2hpbmdcblxuLy8gbm8gcHJlbG9hZGVkXG5cbi8vIG5vIEhNUlxuXG4vLyBubyBITVIgbWFuaWZlc3RcblxuLy8gbm8gb24gY2h1bmtzIGxvYWRlZFxuXG4vLyBubyBqc29ucCBmdW5jdGlvbiIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0IFwiLi9pbmRleC5jc3NcIjtcblxuY29uc3QgaG91ckhhbmQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdbZGF0YS1ob3VyLWhhbmRdJyk7XG5jb25zdCBtaW51dGVIYW5kID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignW2RhdGEtbWludXRlLWhhbmRdJyk7XG5jb25zdCBzZWNvbmRIYW5kID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignW2RhdGEtc2Vjb25kLWhhbmRdJyk7XG5cbmZ1bmN0aW9uIHNldFJvdGF0aW9uKGVsZW1lbnQsIHJvdGF0aW9uUmF0aW8pIHtcbiAgICBlbGVtZW50LnN0eWxlLnNldFByb3BlcnR5KFwiLS1yb3RhdGlvblwiLCByb3RhdGlvblJhdGlvICogMzYwKVxufVxuXG5mdW5jdGlvbiBzZXRDbG9jaygpIHtcbiAgY29uc3QgY3VycmVudERhdGUgPSBuZXcgRGF0ZSgpO1xuICBjb25zdCBzZWNvbmRSYXRpbyA9IGN1cnJlbnREYXRlLmdldFNlY29uZHMoKSAvIDYwO1xuICBjb25zdCBtaW51dGVSYXRpbyA9IChzZWNvbmRSYXRpbyArIGN1cnJlbnREYXRlLmdldE1pbnV0ZXMoKSkgLyA2MDtcbiAgY29uc3QgaG91clJhdGlvID0gKG1pbnV0ZVJhdGlvICsgY3VycmVudERhdGUuZ2V0SG91cnMoKSkgLyAxMjtcbiAgc2V0Um90YXRpb24oc2Vjb25kSGFuZCwgc2Vjb25kUmF0aW8pXG4gIHNldFJvdGF0aW9uKG1pbnV0ZUhhbmQsIG1pbnV0ZVJhdGlvKVxuICBzZXRSb3RhdGlvbihob3VySGFuZCwgaG91clJhdGlvKVxufVxuXG5zZXRJbnRlcnZhbChzZXRDbG9jaywgMTAwMCk7XG5cbnNldENsb2NrKClcblxuYXN5bmMgZnVuY3Rpb24gZ2V0V2VhdGVyRGF0YSgpIHtcbiAgICBjb25zdCB3ZWF0aGVyID0gYXdhaXQgZmV0Y2goXCJodHRwOi8vYXBpLndlYXRoZXJhcGkuY29tL3YxL2N1cnJlbnQuanNvbj9rZXk9YTFmZDdhMThjN2RmNDVjZDljZjE1MjExMjMyNDAzJnE9TG9uZG9uJmFxaT15ZXNcIiwge1xuICAgICAgICBtb2RlOiBcImNvcnNcIlxuICAgIH0pXG4gICAgY29uc3QgZGF0YSA9IGF3YWl0IHdlYXRoZXIuanNvbigpXG5cbiAgICBjb25zb2xlLmxvZyhkYXRhKVxufVxuXG5nZXRXZWF0ZXJEYXRhKCkiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=