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
var ___CSS_LOADER_URL_IMPORT_5___ = new URL(/* asset import */ __webpack_require__(/*! ./images/loading.gif */ "./src/images/loading.gif"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
var ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);
var ___CSS_LOADER_URL_REPLACEMENT_3___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_3___);
var ___CSS_LOADER_URL_REPLACEMENT_4___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_4___);
var ___CSS_LOADER_URL_REPLACEMENT_5___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_5___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "* {\n  box-sizing: border-box;\n  /* border: 1px solid red; */\n}\n@font-face {\n  font-family: URW DIN light;\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n}\n@font-face {\n  font-family: URW DIN medium;\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ");\n}\n@font-face {\n  font-family: URW DIN bold;\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_2___ + ");\n}\n@font-face {\n  font-family: URW DIN extra-bold;\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_3___ + ");\n}\nbody {\n  height: 100vh;\n  width: 100vw;\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_4___ + ");\n  background-size: cover;\n  background-repeat: no-repeat;\n  backdrop-filter: blur(5px);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n/* main content and overlapping */\n\nmain {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n\n.forecast-container {\n  position: relative;\n  height: 500px;\n  width: 940px;\n  /* height: 440px;\n  width: 880px; */\n}\n.forecast-container > div {\n  height: 440px;\n  width: 880px;\n  border-radius: 220px;\n}\n.class-top {\n  position: absolute;\n  z-index: 3;\n  background-color: transparent;\n  border: 3px solid #565655;\n  mix-blend-mode: multiply;\n  box-shadow: inset 20px 20px 0px rgba(82, 82, 81, 0.2),\n    20px 20px 0px rgba(82, 82, 81, 0.5);\n}\n.inside {\n  position: absolute;\n  z-index: 2;\n  background-color: #dadcd1;\n  border: 3px solid #c0c0bd;\n  top: 20px;\n  left: 20px;\n  mix-blend-mode: normal;\n}\n.shadow {\n  position: absolute;\n  z-index: 1;\n  background-color: black;\n  top: 45px;\n  left: 40px;\n}\n\n/* clock */\n\n.clock {\n  position: absolute;\n  width: 270px;\n  height: 270px;\n  top: 85px;\n  left: 100px;\n  border-radius: 50%;\n  border: 3px solid rgb(82, 82, 81);\n  background-color: transparent;\n  box-shadow: inset 2px 2px 2px rgba(82, 82, 81, 0.5),\n    3px 3px 2px rgba(82, 82, 81, 0.5);\n}\n.hand {\n  border: none;\n}\n.clock .number-container {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  display: flex;\n  justify-content: center;\n  transform: rotate(var(--rotation));\n  border-radius: 50%;\n  padding-top: 4px;\n}\n.clock .one {\n  --rotation: 30deg;\n}\n.clock .two {\n  --rotation: 60deg;\n}\n.clock .three {\n  --rotation: 90deg;\n}\n.clock .four {\n  --rotation: 120deg;\n}\n.clock .five {\n  --rotation: 150deg;\n}\n.clock .six {\n  --rotation: 180deg;\n}\n.clock .seven {\n  --rotation: 210deg;\n}\n.clock .eigth {\n  --rotation: 240deg;\n}\n.clock .nine {\n  --rotation: 270deg;\n}\n.clock .ten {\n  --rotation: 300deg;\n}\n.clock .eleven {\n  --rotation: 330deg;\n}\n.clock .number {\n  position: absolute;\n  width: 3px;\n  height: 15px;\n  border-radius: 2px;\n  background-color: #707070;\n}\n.clock .hand {\n  --rotation: 0;\n  position: absolute;\n  bottom: 50%;\n  left: 50%;\n  transform-origin: bottom;\n  z-index: 5;\n  transform: translateX(-50%) rotate(calc(var(--rotation) * 1deg));\n}\n.clock::after {\n  content: \"\";\n  position: absolute;\n  background-color: black;\n  z-index: 6;\n  width: 12px;\n  height: 12px;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  border-radius: 50%;\n  box-shadow: 2px 2px 0px rgba(82, 82, 81, 0.2);\n}\n.clock .hand.second {\n  width: 2px;\n  height: 110px;\n  background-color: rgb(255, 223, 39);\n}\n.clock .hand.minute {\n  width: 4px;\n  height: 100px;\n  background-color: #d4271e;\n}\n.clock .hand.hour {\n  width: 4px;\n  height: 70px;\n  background-color: #d4271e;\n}\n\n/* information container */\n\n.weather-container {\n  position: absolute;\n  width: 360px;\n  height: 270px;\n  top: 85px;\n  left: 430px;\n  display: flex;\n  flex-direction: column;\n}\n.city {\n  display: flex;\n  align-items: center;\n  height: 30px;\n  font-family: URW DIN medium;\n  color: #565655;\n  font-size: 20px;\n}\n.date {\n  display: flex;\n  align-items: center;\n  height: 70px;\n  font-family: URW DIN bold;\n  color: #313131;\n  font-size: 40px;\n  padding-bottom: 10px;\n  border-bottom: 2px solid #b5b7ae;\n  margin-bottom: 10px;\n}\n.weather {\n  flex-grow: 1;\n  display: grid;\n  grid-template-columns: 1fr 1fr 1fr;\n}\n.weather > div {\n  display: flex;\n  flex-direction: column;\n}\n.weather .icon {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: 50%;\n  margin-bottom: 10px;\n}\n.weather .temperature {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-grow: 1;\n  font-family: URW DIN bold;\n  color: #565655;\n  font-size: 35px;\n}\n.weather .time {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-grow: 1;\n  font-family: URW DIN medium;\n  color: #565655;\n  font-size: 20px;\n}\n.icon span {\n  font-size: 70px;\n  color: #565655;\n}\n\n/* input */\n\n.input-container {  \n  margin-top: 5vh;\n  width: 300px;\n  display: flex;\n  justify-content: space-between;\n  height: 36px;\n}\n.input-container input {\n  all: unset;\n  width: 55%;\n  border-radius: 18px;\n  background-color: #dadcd1;\n  border: 3px solid #565655;\n  box-shadow: 3px 5px 0px rgba(34, 34, 34, 0.6);\n  font-family: URW DIN medium;\n  color: #313131;\n  padding: 5px;\n  padding-left: 15px;\n  padding-right: 15px;\n}\n.input-container input:focus {\n  border: 3px solid #c0c0bd;\n}\n.input-container .search {\n  all: unset;\n  height: 30px;\n  width: 30px;\n  border-radius: 18px;\n  background-color: #dadcd1;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  cursor: pointer;\n  border: 3px solid #565655;\n  box-shadow: 2px 3px 0px rgba(34, 34, 34, 0.6);\n  color: #565655;\n}\n.input-container .search:active {\n  transform: translate(2px, 2px);\n  box-shadow: 0px 0px 0px 0px;\n}\n.input-container .unit-converter {\n  all: unset;\n  height: 30px;\n  width: 30px;\n  border-radius: 18px;\n  background-color: #dadcd1;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  cursor: pointer;\n  border: 3px solid #565655;\n  box-shadow: 2px 3px 0px rgba(34, 34, 34, 0.6);\n  font-family: URW DIN bold;\n  color: #565655;\n}\n.input-container .unit-converter:active {\n  transform: translate(2px, 2px);\n  box-shadow: 0px 0px 0px 0px;\n}\n\n/* error */\n\n.error {\n  position: absolute;\n  background-color: rgba(255, 0, 0, 0.5);\n  border: 3px solid red;\n  backdrop-filter: blur(5px);\n  z-index: 7;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.error > div {\n  color: white;\n  font-family: URW DIN bold;\n  font-size: 40px;\n}\n\n\n\n.loading {\n  position: absolute;\n  background-color: rgba(0, 140, 255, 0.5);\n  backdrop-filter: blur(5px);\n  z-index: 7;\n  display: flex;\n  justify-content: center;\n  align-items: center;  \n}\n\n.loading > div {\n  height: 250px;\n  width: 250px;\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_5___ + ");\n  background-size: cover;\n  border-radius: 50%;\n  border: 3px solid rgb(0, 94, 218);\n}", "",{"version":3,"sources":["webpack://./src/index.css"],"names":[],"mappings":"AAAA;EACE,sBAAsB;EACtB,2BAA2B;AAC7B;AACA;EACE,0BAA0B;EAC1B,4CAAmC;AACrC;AACA;EACE,2BAA2B;EAC3B,4CAAoC;AACtC;AACA;EACE,yBAAyB;EACzB,4CAAkC;AACpC;AACA;EACE,+BAA+B;EAC/B,4CAAwC;AAC1C;AACA;EACE,aAAa;EACb,YAAY;EACZ,yDAAyC;EACzC,sBAAsB;EACtB,4BAA4B;EAC5B,0BAA0B;EAC1B,aAAa;EACb,uBAAuB;EACvB,mBAAmB;AACrB;;AAEA,iCAAiC;;AAEjC;EACE,aAAa;EACb,sBAAsB;EACtB,mBAAmB;AACrB;;AAEA;EACE,kBAAkB;EAClB,aAAa;EACb,YAAY;EACZ;iBACe;AACjB;AACA;EACE,aAAa;EACb,YAAY;EACZ,oBAAoB;AACtB;AACA;EACE,kBAAkB;EAClB,UAAU;EACV,6BAA6B;EAC7B,yBAAyB;EACzB,wBAAwB;EACxB;uCACqC;AACvC;AACA;EACE,kBAAkB;EAClB,UAAU;EACV,yBAAyB;EACzB,yBAAyB;EACzB,SAAS;EACT,UAAU;EACV,sBAAsB;AACxB;AACA;EACE,kBAAkB;EAClB,UAAU;EACV,uBAAuB;EACvB,SAAS;EACT,UAAU;AACZ;;AAEA,UAAU;;AAEV;EACE,kBAAkB;EAClB,YAAY;EACZ,aAAa;EACb,SAAS;EACT,WAAW;EACX,kBAAkB;EAClB,iCAAiC;EACjC,6BAA6B;EAC7B;qCACmC;AACrC;AACA;EACE,YAAY;AACd;AACA;EACE,kBAAkB;EAClB,WAAW;EACX,YAAY;EACZ,aAAa;EACb,uBAAuB;EACvB,kCAAkC;EAClC,kBAAkB;EAClB,gBAAgB;AAClB;AACA;EACE,iBAAiB;AACnB;AACA;EACE,iBAAiB;AACnB;AACA;EACE,iBAAiB;AACnB;AACA;EACE,kBAAkB;AACpB;AACA;EACE,kBAAkB;AACpB;AACA;EACE,kBAAkB;AACpB;AACA;EACE,kBAAkB;AACpB;AACA;EACE,kBAAkB;AACpB;AACA;EACE,kBAAkB;AACpB;AACA;EACE,kBAAkB;AACpB;AACA;EACE,kBAAkB;AACpB;AACA;EACE,kBAAkB;EAClB,UAAU;EACV,YAAY;EACZ,kBAAkB;EAClB,yBAAyB;AAC3B;AACA;EACE,aAAa;EACb,kBAAkB;EAClB,WAAW;EACX,SAAS;EACT,wBAAwB;EACxB,UAAU;EACV,gEAAgE;AAClE;AACA;EACE,WAAW;EACX,kBAAkB;EAClB,uBAAuB;EACvB,UAAU;EACV,WAAW;EACX,YAAY;EACZ,QAAQ;EACR,SAAS;EACT,gCAAgC;EAChC,kBAAkB;EAClB,6CAA6C;AAC/C;AACA;EACE,UAAU;EACV,aAAa;EACb,mCAAmC;AACrC;AACA;EACE,UAAU;EACV,aAAa;EACb,yBAAyB;AAC3B;AACA;EACE,UAAU;EACV,YAAY;EACZ,yBAAyB;AAC3B;;AAEA,0BAA0B;;AAE1B;EACE,kBAAkB;EAClB,YAAY;EACZ,aAAa;EACb,SAAS;EACT,WAAW;EACX,aAAa;EACb,sBAAsB;AACxB;AACA;EACE,aAAa;EACb,mBAAmB;EACnB,YAAY;EACZ,2BAA2B;EAC3B,cAAc;EACd,eAAe;AACjB;AACA;EACE,aAAa;EACb,mBAAmB;EACnB,YAAY;EACZ,yBAAyB;EACzB,cAAc;EACd,eAAe;EACf,oBAAoB;EACpB,gCAAgC;EAChC,mBAAmB;AACrB;AACA;EACE,YAAY;EACZ,aAAa;EACb,kCAAkC;AACpC;AACA;EACE,aAAa;EACb,sBAAsB;AACxB;AACA;EACE,aAAa;EACb,uBAAuB;EACvB,mBAAmB;EACnB,WAAW;EACX,mBAAmB;AACrB;AACA;EACE,aAAa;EACb,uBAAuB;EACvB,mBAAmB;EACnB,YAAY;EACZ,yBAAyB;EACzB,cAAc;EACd,eAAe;AACjB;AACA;EACE,aAAa;EACb,uBAAuB;EACvB,mBAAmB;EACnB,YAAY;EACZ,2BAA2B;EAC3B,cAAc;EACd,eAAe;AACjB;AACA;EACE,eAAe;EACf,cAAc;AAChB;;AAEA,UAAU;;AAEV;EACE,eAAe;EACf,YAAY;EACZ,aAAa;EACb,8BAA8B;EAC9B,YAAY;AACd;AACA;EACE,UAAU;EACV,UAAU;EACV,mBAAmB;EACnB,yBAAyB;EACzB,yBAAyB;EACzB,6CAA6C;EAC7C,2BAA2B;EAC3B,cAAc;EACd,YAAY;EACZ,kBAAkB;EAClB,mBAAmB;AACrB;AACA;EACE,yBAAyB;AAC3B;AACA;EACE,UAAU;EACV,YAAY;EACZ,WAAW;EACX,mBAAmB;EACnB,yBAAyB;EACzB,aAAa;EACb,uBAAuB;EACvB,mBAAmB;EACnB,eAAe;EACf,yBAAyB;EACzB,6CAA6C;EAC7C,cAAc;AAChB;AACA;EACE,8BAA8B;EAC9B,2BAA2B;AAC7B;AACA;EACE,UAAU;EACV,YAAY;EACZ,WAAW;EACX,mBAAmB;EACnB,yBAAyB;EACzB,aAAa;EACb,uBAAuB;EACvB,mBAAmB;EACnB,eAAe;EACf,yBAAyB;EACzB,6CAA6C;EAC7C,yBAAyB;EACzB,cAAc;AAChB;AACA;EACE,8BAA8B;EAC9B,2BAA2B;AAC7B;;AAEA,UAAU;;AAEV;EACE,kBAAkB;EAClB,sCAAsC;EACtC,qBAAqB;EACrB,0BAA0B;EAC1B,UAAU;EACV,aAAa;EACb,uBAAuB;EACvB,mBAAmB;AACrB;;AAEA;EACE,YAAY;EACZ,yBAAyB;EACzB,eAAe;AACjB;;;;AAIA;EACE,kBAAkB;EAClB,wCAAwC;EACxC,0BAA0B;EAC1B,UAAU;EACV,aAAa;EACb,uBAAuB;EACvB,mBAAmB;AACrB;;AAEA;EACE,aAAa;EACb,YAAY;EACZ,yDAA2C;EAC3C,sBAAsB;EACtB,kBAAkB;EAClB,iCAAiC;AACnC","sourcesContent":["* {\n  box-sizing: border-box;\n  /* border: 1px solid red; */\n}\n@font-face {\n  font-family: URW DIN light;\n  src: url(./Fonts/URW-DIN-light.ttf);\n}\n@font-face {\n  font-family: URW DIN medium;\n  src: url(./Fonts/URW-DIN-medium.ttf);\n}\n@font-face {\n  font-family: URW DIN bold;\n  src: url(./Fonts/URW-DIN-bold.ttf);\n}\n@font-face {\n  font-family: URW DIN extra-bold;\n  src: url(./Fonts/URW-DIN-extra-bold.ttf);\n}\nbody {\n  height: 100vh;\n  width: 100vw;\n  background-image: url(./images/giphy.gif);\n  background-size: cover;\n  background-repeat: no-repeat;\n  backdrop-filter: blur(5px);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n/* main content and overlapping */\n\nmain {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n\n.forecast-container {\n  position: relative;\n  height: 500px;\n  width: 940px;\n  /* height: 440px;\n  width: 880px; */\n}\n.forecast-container > div {\n  height: 440px;\n  width: 880px;\n  border-radius: 220px;\n}\n.class-top {\n  position: absolute;\n  z-index: 3;\n  background-color: transparent;\n  border: 3px solid #565655;\n  mix-blend-mode: multiply;\n  box-shadow: inset 20px 20px 0px rgba(82, 82, 81, 0.2),\n    20px 20px 0px rgba(82, 82, 81, 0.5);\n}\n.inside {\n  position: absolute;\n  z-index: 2;\n  background-color: #dadcd1;\n  border: 3px solid #c0c0bd;\n  top: 20px;\n  left: 20px;\n  mix-blend-mode: normal;\n}\n.shadow {\n  position: absolute;\n  z-index: 1;\n  background-color: black;\n  top: 45px;\n  left: 40px;\n}\n\n/* clock */\n\n.clock {\n  position: absolute;\n  width: 270px;\n  height: 270px;\n  top: 85px;\n  left: 100px;\n  border-radius: 50%;\n  border: 3px solid rgb(82, 82, 81);\n  background-color: transparent;\n  box-shadow: inset 2px 2px 2px rgba(82, 82, 81, 0.5),\n    3px 3px 2px rgba(82, 82, 81, 0.5);\n}\n.hand {\n  border: none;\n}\n.clock .number-container {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  display: flex;\n  justify-content: center;\n  transform: rotate(var(--rotation));\n  border-radius: 50%;\n  padding-top: 4px;\n}\n.clock .one {\n  --rotation: 30deg;\n}\n.clock .two {\n  --rotation: 60deg;\n}\n.clock .three {\n  --rotation: 90deg;\n}\n.clock .four {\n  --rotation: 120deg;\n}\n.clock .five {\n  --rotation: 150deg;\n}\n.clock .six {\n  --rotation: 180deg;\n}\n.clock .seven {\n  --rotation: 210deg;\n}\n.clock .eigth {\n  --rotation: 240deg;\n}\n.clock .nine {\n  --rotation: 270deg;\n}\n.clock .ten {\n  --rotation: 300deg;\n}\n.clock .eleven {\n  --rotation: 330deg;\n}\n.clock .number {\n  position: absolute;\n  width: 3px;\n  height: 15px;\n  border-radius: 2px;\n  background-color: #707070;\n}\n.clock .hand {\n  --rotation: 0;\n  position: absolute;\n  bottom: 50%;\n  left: 50%;\n  transform-origin: bottom;\n  z-index: 5;\n  transform: translateX(-50%) rotate(calc(var(--rotation) * 1deg));\n}\n.clock::after {\n  content: \"\";\n  position: absolute;\n  background-color: black;\n  z-index: 6;\n  width: 12px;\n  height: 12px;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  border-radius: 50%;\n  box-shadow: 2px 2px 0px rgba(82, 82, 81, 0.2);\n}\n.clock .hand.second {\n  width: 2px;\n  height: 110px;\n  background-color: rgb(255, 223, 39);\n}\n.clock .hand.minute {\n  width: 4px;\n  height: 100px;\n  background-color: #d4271e;\n}\n.clock .hand.hour {\n  width: 4px;\n  height: 70px;\n  background-color: #d4271e;\n}\n\n/* information container */\n\n.weather-container {\n  position: absolute;\n  width: 360px;\n  height: 270px;\n  top: 85px;\n  left: 430px;\n  display: flex;\n  flex-direction: column;\n}\n.city {\n  display: flex;\n  align-items: center;\n  height: 30px;\n  font-family: URW DIN medium;\n  color: #565655;\n  font-size: 20px;\n}\n.date {\n  display: flex;\n  align-items: center;\n  height: 70px;\n  font-family: URW DIN bold;\n  color: #313131;\n  font-size: 40px;\n  padding-bottom: 10px;\n  border-bottom: 2px solid #b5b7ae;\n  margin-bottom: 10px;\n}\n.weather {\n  flex-grow: 1;\n  display: grid;\n  grid-template-columns: 1fr 1fr 1fr;\n}\n.weather > div {\n  display: flex;\n  flex-direction: column;\n}\n.weather .icon {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: 50%;\n  margin-bottom: 10px;\n}\n.weather .temperature {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-grow: 1;\n  font-family: URW DIN bold;\n  color: #565655;\n  font-size: 35px;\n}\n.weather .time {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-grow: 1;\n  font-family: URW DIN medium;\n  color: #565655;\n  font-size: 20px;\n}\n.icon span {\n  font-size: 70px;\n  color: #565655;\n}\n\n/* input */\n\n.input-container {  \n  margin-top: 5vh;\n  width: 300px;\n  display: flex;\n  justify-content: space-between;\n  height: 36px;\n}\n.input-container input {\n  all: unset;\n  width: 55%;\n  border-radius: 18px;\n  background-color: #dadcd1;\n  border: 3px solid #565655;\n  box-shadow: 3px 5px 0px rgba(34, 34, 34, 0.6);\n  font-family: URW DIN medium;\n  color: #313131;\n  padding: 5px;\n  padding-left: 15px;\n  padding-right: 15px;\n}\n.input-container input:focus {\n  border: 3px solid #c0c0bd;\n}\n.input-container .search {\n  all: unset;\n  height: 30px;\n  width: 30px;\n  border-radius: 18px;\n  background-color: #dadcd1;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  cursor: pointer;\n  border: 3px solid #565655;\n  box-shadow: 2px 3px 0px rgba(34, 34, 34, 0.6);\n  color: #565655;\n}\n.input-container .search:active {\n  transform: translate(2px, 2px);\n  box-shadow: 0px 0px 0px 0px;\n}\n.input-container .unit-converter {\n  all: unset;\n  height: 30px;\n  width: 30px;\n  border-radius: 18px;\n  background-color: #dadcd1;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  cursor: pointer;\n  border: 3px solid #565655;\n  box-shadow: 2px 3px 0px rgba(34, 34, 34, 0.6);\n  font-family: URW DIN bold;\n  color: #565655;\n}\n.input-container .unit-converter:active {\n  transform: translate(2px, 2px);\n  box-shadow: 0px 0px 0px 0px;\n}\n\n/* error */\n\n.error {\n  position: absolute;\n  background-color: rgba(255, 0, 0, 0.5);\n  border: 3px solid red;\n  backdrop-filter: blur(5px);\n  z-index: 7;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.error > div {\n  color: white;\n  font-family: URW DIN bold;\n  font-size: 40px;\n}\n\n\n\n.loading {\n  position: absolute;\n  background-color: rgba(0, 140, 255, 0.5);\n  backdrop-filter: blur(5px);\n  z-index: 7;\n  display: flex;\n  justify-content: center;\n  align-items: center;  \n}\n\n.loading > div {\n  height: 250px;\n  width: 250px;\n  background-image: url(./images/loading.gif);\n  background-size: cover;\n  border-radius: 50%;\n  border: 3px solid rgb(0, 94, 218);\n}"],"sourceRoot":""}]);
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

/***/ }),

/***/ "./src/images/loading.gif":
/*!********************************!*\
  !*** ./src/images/loading.gif ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/60aadc4b751db97ad246.gif";

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

function error404() {
  const forecast = document.querySelector(".forecast-container");

  forecast.removeChild(forecast.lastChild);

  const container = document.createElement("div");
  const errorMessage = document.createElement("div");

  container.classList.add("error");
  errorMessage.textContent = "City not found ‾\\(o_o)/‾";

  forecast.append(container);
  container.append(errorMessage);

  setTimeout(() => {
    forecast.removeChild(forecast.lastChild);
  }, 2000);
}

function loading() {
  const forecast = document.querySelector(".forecast-container");
  const container = document.createElement("div");
  const gif = document.createElement("div");

  container.classList.add("loading");

  forecast.append(container);
  container.appendChild(gif);
}

async function getWeaterData(cityName) {
  let response = 0;
  loading();

  try {
    const weather = await fetch(
      `https://api.weatherapi.com/v1/forecast.json?key=a1fd7a18c7df45cd9cf15211232403&q=${cityName}&days=3&aqi=no&alerts=no`,
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

    if (weather.ok) {
      response += 1;
    }
  } catch (error) {
    error404();
  } finally {
    if (response === 1) {
      const forecast = document.querySelector(".forecast-container");
      forecast.removeChild(forecast.lastChild);
    }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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V0FBVyxVQUFVLEtBQUssTUFBTSxNQUFNLEtBQUssVUFBVSxVQUFVLFlBQVksTUFBTSxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxNQUFNLE9BQU8sTUFBTSxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsV0FBVyxVQUFVLFlBQVksTUFBTSxLQUFLLFlBQVksV0FBVyxZQUFZLFdBQVcsVUFBVSxNQUFNLFdBQVcsS0FBSyxZQUFZLFdBQVcsVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsTUFBTSxPQUFPLE1BQU0sS0FBSyxVQUFVLEtBQUssS0FBSyxZQUFZLFdBQVcsVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxNQUFNLEtBQUssVUFBVSxZQUFZLFdBQVcsVUFBVSxZQUFZLFdBQVcsWUFBWSxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxVQUFVLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLE1BQU0sS0FBSyxVQUFVLFVBQVUsWUFBWSxNQUFNLEtBQUssVUFBVSxVQUFVLFlBQVksTUFBTSxLQUFLLFVBQVUsVUFBVSxZQUFZLE9BQU8sYUFBYSxNQUFNLFlBQVksV0FBVyxVQUFVLFVBQVUsVUFBVSxVQUFVLFlBQVksTUFBTSxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksV0FBVyxVQUFVLE1BQU0sS0FBSyxVQUFVLFlBQVksV0FBVyxZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsYUFBYSxNQUFNLEtBQUssVUFBVSxVQUFVLFlBQVksTUFBTSxLQUFLLFVBQVUsWUFBWSxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEs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dXJjZXMiOlsid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL2luZGV4LmNzcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvaW5kZXguY3NzP2NmZTQiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9jbG9jay5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9kYXRlLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL2ZvcmVjYXN0LmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL2xvY2F0aW9uLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL3dlYXRoZXJDb25kaXRpb24uanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9qc29ucCBjaHVuayBsb2FkaW5nIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiLi9Gb250cy9VUlctRElOLWxpZ2h0LnR0ZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fID0gbmV3IFVSTChcIi4vRm9udHMvVVJXLURJTi1tZWRpdW0udHRmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzJfX18gPSBuZXcgVVJMKFwiLi9Gb250cy9VUlctRElOLWJvbGQudHRmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzNfX18gPSBuZXcgVVJMKFwiLi9Gb250cy9VUlctRElOLWV4dHJhLWJvbGQudHRmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzRfX18gPSBuZXcgVVJMKFwiLi9pbWFnZXMvZ2lwaHkuZ2lmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzVfX18gPSBuZXcgVVJMKFwiLi9pbWFnZXMvbG9hZGluZy5naWZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzJfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8yX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8zX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfM19fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfNF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzVfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF81X19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIioge1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIC8qIGJvcmRlcjogMXB4IHNvbGlkIHJlZDsgKi9cXG59XFxuQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogVVJXIERJTiBsaWdodDtcXG4gIHNyYzogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyArIFwiKTtcXG59XFxuQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogVVJXIERJTiBtZWRpdW07XFxuICBzcmM6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gKyBcIik7XFxufVxcbkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6IFVSVyBESU4gYm9sZDtcXG4gIHNyYzogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMl9fXyArIFwiKTtcXG59XFxuQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogVVJXIERJTiBleHRyYS1ib2xkO1xcbiAgc3JjOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8zX19fICsgXCIpO1xcbn1cXG5ib2R5IHtcXG4gIGhlaWdodDogMTAwdmg7XFxuICB3aWR0aDogMTAwdnc7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF80X19fICsgXCIpO1xcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxuICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoNXB4KTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi8qIG1haW4gY29udGVudCBhbmQgb3ZlcmxhcHBpbmcgKi9cXG5cXG5tYWluIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLmZvcmVjYXN0LWNvbnRhaW5lciB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBoZWlnaHQ6IDUwMHB4O1xcbiAgd2lkdGg6IDk0MHB4O1xcbiAgLyogaGVpZ2h0OiA0NDBweDtcXG4gIHdpZHRoOiA4ODBweDsgKi9cXG59XFxuLmZvcmVjYXN0LWNvbnRhaW5lciA+IGRpdiB7XFxuICBoZWlnaHQ6IDQ0MHB4O1xcbiAgd2lkdGg6IDg4MHB4O1xcbiAgYm9yZGVyLXJhZGl1czogMjIwcHg7XFxufVxcbi5jbGFzcy10b3Age1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgei1pbmRleDogMztcXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgYm9yZGVyOiAzcHggc29saWQgIzU2NTY1NTtcXG4gIG1peC1ibGVuZC1tb2RlOiBtdWx0aXBseTtcXG4gIGJveC1zaGFkb3c6IGluc2V0IDIwcHggMjBweCAwcHggcmdiYSg4MiwgODIsIDgxLCAwLjIpLFxcbiAgICAyMHB4IDIwcHggMHB4IHJnYmEoODIsIDgyLCA4MSwgMC41KTtcXG59XFxuLmluc2lkZSB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB6LWluZGV4OiAyO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2RhZGNkMTtcXG4gIGJvcmRlcjogM3B4IHNvbGlkICNjMGMwYmQ7XFxuICB0b3A6IDIwcHg7XFxuICBsZWZ0OiAyMHB4O1xcbiAgbWl4LWJsZW5kLW1vZGU6IG5vcm1hbDtcXG59XFxuLnNoYWRvdyB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB6LWluZGV4OiAxO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxuICB0b3A6IDQ1cHg7XFxuICBsZWZ0OiA0MHB4O1xcbn1cXG5cXG4vKiBjbG9jayAqL1xcblxcbi5jbG9jayB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB3aWR0aDogMjcwcHg7XFxuICBoZWlnaHQ6IDI3MHB4O1xcbiAgdG9wOiA4NXB4O1xcbiAgbGVmdDogMTAwcHg7XFxuICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICBib3JkZXI6IDNweCBzb2xpZCByZ2IoODIsIDgyLCA4MSk7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gIGJveC1zaGFkb3c6IGluc2V0IDJweCAycHggMnB4IHJnYmEoODIsIDgyLCA4MSwgMC41KSxcXG4gICAgM3B4IDNweCAycHggcmdiYSg4MiwgODIsIDgxLCAwLjUpO1xcbn1cXG4uaGFuZCB7XFxuICBib3JkZXI6IG5vbmU7XFxufVxcbi5jbG9jayAubnVtYmVyLWNvbnRhaW5lciB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwJTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIHRyYW5zZm9ybTogcm90YXRlKHZhcigtLXJvdGF0aW9uKSk7XFxuICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICBwYWRkaW5nLXRvcDogNHB4O1xcbn1cXG4uY2xvY2sgLm9uZSB7XFxuICAtLXJvdGF0aW9uOiAzMGRlZztcXG59XFxuLmNsb2NrIC50d28ge1xcbiAgLS1yb3RhdGlvbjogNjBkZWc7XFxufVxcbi5jbG9jayAudGhyZWUge1xcbiAgLS1yb3RhdGlvbjogOTBkZWc7XFxufVxcbi5jbG9jayAuZm91ciB7XFxuICAtLXJvdGF0aW9uOiAxMjBkZWc7XFxufVxcbi5jbG9jayAuZml2ZSB7XFxuICAtLXJvdGF0aW9uOiAxNTBkZWc7XFxufVxcbi5jbG9jayAuc2l4IHtcXG4gIC0tcm90YXRpb246IDE4MGRlZztcXG59XFxuLmNsb2NrIC5zZXZlbiB7XFxuICAtLXJvdGF0aW9uOiAyMTBkZWc7XFxufVxcbi5jbG9jayAuZWlndGgge1xcbiAgLS1yb3RhdGlvbjogMjQwZGVnO1xcbn1cXG4uY2xvY2sgLm5pbmUge1xcbiAgLS1yb3RhdGlvbjogMjcwZGVnO1xcbn1cXG4uY2xvY2sgLnRlbiB7XFxuICAtLXJvdGF0aW9uOiAzMDBkZWc7XFxufVxcbi5jbG9jayAuZWxldmVuIHtcXG4gIC0tcm90YXRpb246IDMzMGRlZztcXG59XFxuLmNsb2NrIC5udW1iZXIge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgd2lkdGg6IDNweDtcXG4gIGhlaWdodDogMTVweDtcXG4gIGJvcmRlci1yYWRpdXM6IDJweDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICM3MDcwNzA7XFxufVxcbi5jbG9jayAuaGFuZCB7XFxuICAtLXJvdGF0aW9uOiAwO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgYm90dG9tOiA1MCU7XFxuICBsZWZ0OiA1MCU7XFxuICB0cmFuc2Zvcm0tb3JpZ2luOiBib3R0b207XFxuICB6LWluZGV4OiA1O1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpIHJvdGF0ZShjYWxjKHZhcigtLXJvdGF0aW9uKSAqIDFkZWcpKTtcXG59XFxuLmNsb2NrOjphZnRlciB7XFxuICBjb250ZW50OiBcXFwiXFxcIjtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcbiAgei1pbmRleDogNjtcXG4gIHdpZHRoOiAxMnB4O1xcbiAgaGVpZ2h0OiAxMnB4O1xcbiAgdG9wOiA1MCU7XFxuICBsZWZ0OiA1MCU7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gIGJveC1zaGFkb3c6IDJweCAycHggMHB4IHJnYmEoODIsIDgyLCA4MSwgMC4yKTtcXG59XFxuLmNsb2NrIC5oYW5kLnNlY29uZCB7XFxuICB3aWR0aDogMnB4O1xcbiAgaGVpZ2h0OiAxMTBweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTUsIDIyMywgMzkpO1xcbn1cXG4uY2xvY2sgLmhhbmQubWludXRlIHtcXG4gIHdpZHRoOiA0cHg7XFxuICBoZWlnaHQ6IDEwMHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Q0MjcxZTtcXG59XFxuLmNsb2NrIC5oYW5kLmhvdXIge1xcbiAgd2lkdGg6IDRweDtcXG4gIGhlaWdodDogNzBweDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNkNDI3MWU7XFxufVxcblxcbi8qIGluZm9ybWF0aW9uIGNvbnRhaW5lciAqL1xcblxcbi53ZWF0aGVyLWNvbnRhaW5lciB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB3aWR0aDogMzYwcHg7XFxuICBoZWlnaHQ6IDI3MHB4O1xcbiAgdG9wOiA4NXB4O1xcbiAgbGVmdDogNDMwcHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuLmNpdHkge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBoZWlnaHQ6IDMwcHg7XFxuICBmb250LWZhbWlseTogVVJXIERJTiBtZWRpdW07XFxuICBjb2xvcjogIzU2NTY1NTtcXG4gIGZvbnQtc2l6ZTogMjBweDtcXG59XFxuLmRhdGUge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBoZWlnaHQ6IDcwcHg7XFxuICBmb250LWZhbWlseTogVVJXIERJTiBib2xkO1xcbiAgY29sb3I6ICMzMTMxMzE7XFxuICBmb250LXNpemU6IDQwcHg7XFxuICBwYWRkaW5nLWJvdHRvbTogMTBweDtcXG4gIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjYjViN2FlO1xcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcXG59XFxuLndlYXRoZXIge1xcbiAgZmxleC1ncm93OiAxO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmciAxZnI7XFxufVxcbi53ZWF0aGVyID4gZGl2IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG4ud2VhdGhlciAuaWNvbiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgaGVpZ2h0OiA1MCU7XFxuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xcbn1cXG4ud2VhdGhlciAudGVtcGVyYXR1cmUge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGZsZXgtZ3JvdzogMTtcXG4gIGZvbnQtZmFtaWx5OiBVUlcgRElOIGJvbGQ7XFxuICBjb2xvcjogIzU2NTY1NTtcXG4gIGZvbnQtc2l6ZTogMzVweDtcXG59XFxuLndlYXRoZXIgLnRpbWUge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGZsZXgtZ3JvdzogMTtcXG4gIGZvbnQtZmFtaWx5OiBVUlcgRElOIG1lZGl1bTtcXG4gIGNvbG9yOiAjNTY1NjU1O1xcbiAgZm9udC1zaXplOiAyMHB4O1xcbn1cXG4uaWNvbiBzcGFuIHtcXG4gIGZvbnQtc2l6ZTogNzBweDtcXG4gIGNvbG9yOiAjNTY1NjU1O1xcbn1cXG5cXG4vKiBpbnB1dCAqL1xcblxcbi5pbnB1dC1jb250YWluZXIgeyAgXFxuICBtYXJnaW4tdG9wOiA1dmg7XFxuICB3aWR0aDogMzAwcHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgaGVpZ2h0OiAzNnB4O1xcbn1cXG4uaW5wdXQtY29udGFpbmVyIGlucHV0IHtcXG4gIGFsbDogdW5zZXQ7XFxuICB3aWR0aDogNTUlO1xcbiAgYm9yZGVyLXJhZGl1czogMThweDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNkYWRjZDE7XFxuICBib3JkZXI6IDNweCBzb2xpZCAjNTY1NjU1O1xcbiAgYm94LXNoYWRvdzogM3B4IDVweCAwcHggcmdiYSgzNCwgMzQsIDM0LCAwLjYpO1xcbiAgZm9udC1mYW1pbHk6IFVSVyBESU4gbWVkaXVtO1xcbiAgY29sb3I6ICMzMTMxMzE7XFxuICBwYWRkaW5nOiA1cHg7XFxuICBwYWRkaW5nLWxlZnQ6IDE1cHg7XFxuICBwYWRkaW5nLXJpZ2h0OiAxNXB4O1xcbn1cXG4uaW5wdXQtY29udGFpbmVyIGlucHV0OmZvY3VzIHtcXG4gIGJvcmRlcjogM3B4IHNvbGlkICNjMGMwYmQ7XFxufVxcbi5pbnB1dC1jb250YWluZXIgLnNlYXJjaCB7XFxuICBhbGw6IHVuc2V0O1xcbiAgaGVpZ2h0OiAzMHB4O1xcbiAgd2lkdGg6IDMwcHg7XFxuICBib3JkZXItcmFkaXVzOiAxOHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2RhZGNkMTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBib3JkZXI6IDNweCBzb2xpZCAjNTY1NjU1O1xcbiAgYm94LXNoYWRvdzogMnB4IDNweCAwcHggcmdiYSgzNCwgMzQsIDM0LCAwLjYpO1xcbiAgY29sb3I6ICM1NjU2NTU7XFxufVxcbi5pbnB1dC1jb250YWluZXIgLnNlYXJjaDphY3RpdmUge1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMnB4LCAycHgpO1xcbiAgYm94LXNoYWRvdzogMHB4IDBweCAwcHggMHB4O1xcbn1cXG4uaW5wdXQtY29udGFpbmVyIC51bml0LWNvbnZlcnRlciB7XFxuICBhbGw6IHVuc2V0O1xcbiAgaGVpZ2h0OiAzMHB4O1xcbiAgd2lkdGg6IDMwcHg7XFxuICBib3JkZXItcmFkaXVzOiAxOHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2RhZGNkMTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBib3JkZXI6IDNweCBzb2xpZCAjNTY1NjU1O1xcbiAgYm94LXNoYWRvdzogMnB4IDNweCAwcHggcmdiYSgzNCwgMzQsIDM0LCAwLjYpO1xcbiAgZm9udC1mYW1pbHk6IFVSVyBESU4gYm9sZDtcXG4gIGNvbG9yOiAjNTY1NjU1O1xcbn1cXG4uaW5wdXQtY29udGFpbmVyIC51bml0LWNvbnZlcnRlcjphY3RpdmUge1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMnB4LCAycHgpO1xcbiAgYm94LXNoYWRvdzogMHB4IDBweCAwcHggMHB4O1xcbn1cXG5cXG4vKiBlcnJvciAqL1xcblxcbi5lcnJvciB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMCwgMCwgMC41KTtcXG4gIGJvcmRlcjogM3B4IHNvbGlkIHJlZDtcXG4gIGJhY2tkcm9wLWZpbHRlcjogYmx1cig1cHgpO1xcbiAgei1pbmRleDogNztcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5lcnJvciA+IGRpdiB7XFxuICBjb2xvcjogd2hpdGU7XFxuICBmb250LWZhbWlseTogVVJXIERJTiBib2xkO1xcbiAgZm9udC1zaXplOiA0MHB4O1xcbn1cXG5cXG5cXG5cXG4ubG9hZGluZyB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDE0MCwgMjU1LCAwLjUpO1xcbiAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDVweCk7XFxuICB6LWluZGV4OiA3O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjsgIFxcbn1cXG5cXG4ubG9hZGluZyA+IGRpdiB7XFxuICBoZWlnaHQ6IDI1MHB4O1xcbiAgd2lkdGg6IDI1MHB4O1xcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfNV9fXyArIFwiKTtcXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxuICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICBib3JkZXI6IDNweCBzb2xpZCByZ2IoMCwgOTQsIDIxOCk7XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9pbmRleC5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSxzQkFBc0I7RUFDdEIsMkJBQTJCO0FBQzdCO0FBQ0E7RUFDRSwwQkFBMEI7RUFDMUIsNENBQW1DO0FBQ3JDO0FBQ0E7RUFDRSwyQkFBMkI7RUFDM0IsNENBQW9DO0FBQ3RDO0FBQ0E7RUFDRSx5QkFBeUI7RUFDekIsNENBQWtDO0FBQ3BDO0FBQ0E7RUFDRSwrQkFBK0I7RUFDL0IsNENBQXdDO0FBQzFDO0FBQ0E7RUFDRSxhQUFhO0VBQ2IsWUFBWTtFQUNaLHlEQUF5QztFQUN6QyxzQkFBc0I7RUFDdEIsNEJBQTRCO0VBQzVCLDBCQUEwQjtFQUMxQixhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtBQUNyQjs7QUFFQSxpQ0FBaUM7O0FBRWpDO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsYUFBYTtFQUNiLFlBQVk7RUFDWjtpQkFDZTtBQUNqQjtBQUNBO0VBQ0UsYUFBYTtFQUNiLFlBQVk7RUFDWixvQkFBb0I7QUFDdEI7QUFDQTtFQUNFLGtCQUFrQjtFQUNsQixVQUFVO0VBQ1YsNkJBQTZCO0VBQzdCLHlCQUF5QjtFQUN6Qix3QkFBd0I7RUFDeEI7dUNBQ3FDO0FBQ3ZDO0FBQ0E7RUFDRSxrQkFBa0I7RUFDbEIsVUFBVTtFQUNWLHlCQUF5QjtFQUN6Qix5QkFBeUI7RUFDekIsU0FBUztFQUNULFVBQVU7RUFDVixzQkFBc0I7QUFDeEI7QUFDQTtFQUNFLGtCQUFrQjtFQUNsQixVQUFVO0VBQ1YsdUJBQXVCO0VBQ3ZCLFNBQVM7RUFDVCxVQUFVO0FBQ1o7O0FBRUEsVUFBVTs7QUFFVjtFQUNFLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osYUFBYTtFQUNiLFNBQVM7RUFDVCxXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLGlDQUFpQztFQUNqQyw2QkFBNkI7RUFDN0I7cUNBQ21DO0FBQ3JDO0FBQ0E7RUFDRSxZQUFZO0FBQ2Q7QUFDQTtFQUNFLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsWUFBWTtFQUNaLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsa0NBQWtDO0VBQ2xDLGtCQUFrQjtFQUNsQixnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGlCQUFpQjtBQUNuQjtBQUNBO0VBQ0UsaUJBQWlCO0FBQ25CO0FBQ0E7RUFDRSxpQkFBaUI7QUFDbkI7QUFDQTtFQUNFLGtCQUFrQjtBQUNwQjtBQUNBO0VBQ0Usa0JBQWtCO0FBQ3BCO0FBQ0E7RUFDRSxrQkFBa0I7QUFDcEI7QUFDQTtFQUNFLGtCQUFrQjtBQUNwQjtBQUNBO0VBQ0Usa0JBQWtCO0FBQ3BCO0FBQ0E7RUFDRSxrQkFBa0I7QUFDcEI7QUFDQTtFQUNFLGtCQUFrQjtBQUNwQjtBQUNBO0VBQ0Usa0JBQWtCO0FBQ3BCO0FBQ0E7RUFDRSxrQkFBa0I7RUFDbEIsVUFBVTtFQUNWLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIseUJBQXlCO0FBQzNCO0FBQ0E7RUFDRSxhQUFhO0VBQ2Isa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxTQUFTO0VBQ1Qsd0JBQXdCO0VBQ3hCLFVBQVU7RUFDVixnRUFBZ0U7QUFDbEU7QUFDQTtFQUNFLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsdUJBQXVCO0VBQ3ZCLFVBQVU7RUFDVixXQUFXO0VBQ1gsWUFBWTtFQUNaLFFBQVE7RUFDUixTQUFTO0VBQ1QsZ0NBQWdDO0VBQ2hDLGtCQUFrQjtFQUNsQiw2Q0FBNkM7QUFDL0M7QUFDQTtFQUNFLFVBQVU7RUFDVixhQUFhO0VBQ2IsbUNBQW1DO0FBQ3JDO0FBQ0E7RUFDRSxVQUFVO0VBQ1YsYUFBYTtFQUNiLHlCQUF5QjtBQUMzQjtBQUNBO0VBQ0UsVUFBVTtFQUNWLFlBQVk7RUFDWix5QkFBeUI7QUFDM0I7O0FBRUEsMEJBQTBCOztBQUUxQjtFQUNFLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osYUFBYTtFQUNiLFNBQVM7RUFDVCxXQUFXO0VBQ1gsYUFBYTtFQUNiLHNCQUFzQjtBQUN4QjtBQUNBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixZQUFZO0VBQ1osMkJBQTJCO0VBQzNCLGNBQWM7RUFDZCxlQUFlO0FBQ2pCO0FBQ0E7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLFlBQVk7RUFDWix5QkFBeUI7RUFDekIsY0FBYztFQUNkLGVBQWU7RUFDZixvQkFBb0I7RUFDcEIsZ0NBQWdDO0VBQ2hDLG1CQUFtQjtBQUNyQjtBQUNBO0VBQ0UsWUFBWTtFQUNaLGFBQWE7RUFDYixrQ0FBa0M7QUFDcEM7QUFDQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7QUFDeEI7QUFDQTtFQUNFLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLFdBQVc7RUFDWCxtQkFBbUI7QUFDckI7QUFDQTtFQUNFLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLFlBQVk7RUFDWix5QkFBeUI7RUFDekIsY0FBYztFQUNkLGVBQWU7QUFDakI7QUFDQTtFQUNFLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLFlBQVk7RUFDWiwyQkFBMkI7RUFDM0IsY0FBYztFQUNkLGVBQWU7QUFDakI7QUFDQTtFQUNFLGVBQWU7RUFDZixjQUFjO0FBQ2hCOztBQUVBLFVBQVU7O0FBRVY7RUFDRSxlQUFlO0VBQ2YsWUFBWTtFQUNaLGFBQWE7RUFDYiw4QkFBOEI7RUFDOUIsWUFBWTtBQUNkO0FBQ0E7RUFDRSxVQUFVO0VBQ1YsVUFBVTtFQUNWLG1CQUFtQjtFQUNuQix5QkFBeUI7RUFDekIseUJBQXlCO0VBQ3pCLDZDQUE2QztFQUM3QywyQkFBMkI7RUFDM0IsY0FBYztFQUNkLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsbUJBQW1CO0FBQ3JCO0FBQ0E7RUFDRSx5QkFBeUI7QUFDM0I7QUFDQTtFQUNFLFVBQVU7RUFDVixZQUFZO0VBQ1osV0FBVztFQUNYLG1CQUFtQjtFQUNuQix5QkFBeUI7RUFDekIsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsZUFBZTtFQUNmLHlCQUF5QjtFQUN6Qiw2Q0FBNkM7RUFDN0MsY0FBYztBQUNoQjtBQUNBO0VBQ0UsOEJBQThCO0VBQzlCLDJCQUEyQjtBQUM3QjtBQUNBO0VBQ0UsVUFBVTtFQUNWLFlBQVk7RUFDWixXQUFXO0VBQ1gsbUJBQW1CO0VBQ25CLHlCQUF5QjtFQUN6QixhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQixlQUFlO0VBQ2YseUJBQXlCO0VBQ3pCLDZDQUE2QztFQUM3Qyx5QkFBeUI7RUFDekIsY0FBYztBQUNoQjtBQUNBO0VBQ0UsOEJBQThCO0VBQzlCLDJCQUEyQjtBQUM3Qjs7QUFFQSxVQUFVOztBQUVWO0VBQ0Usa0JBQWtCO0VBQ2xCLHNDQUFzQztFQUN0QyxxQkFBcUI7RUFDckIsMEJBQTBCO0VBQzFCLFVBQVU7RUFDVixhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLFlBQVk7RUFDWix5QkFBeUI7RUFDekIsZUFBZTtBQUNqQjs7OztBQUlBO0VBQ0Usa0JBQWtCO0VBQ2xCLHdDQUF3QztFQUN4QywwQkFBMEI7RUFDMUIsVUFBVTtFQUNWLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLFlBQVk7RUFDWix5REFBMkM7RUFDM0Msc0JBQXNCO0VBQ3RCLGtCQUFrQjtFQUNsQixpQ0FBaUM7QUFDbkNcIixcInNvdXJjZXNDb250ZW50XCI6W1wiKiB7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgLyogYm9yZGVyOiAxcHggc29saWQgcmVkOyAqL1xcbn1cXG5AZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiBVUlcgRElOIGxpZ2h0O1xcbiAgc3JjOiB1cmwoLi9Gb250cy9VUlctRElOLWxpZ2h0LnR0Zik7XFxufVxcbkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6IFVSVyBESU4gbWVkaXVtO1xcbiAgc3JjOiB1cmwoLi9Gb250cy9VUlctRElOLW1lZGl1bS50dGYpO1xcbn1cXG5AZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiBVUlcgRElOIGJvbGQ7XFxuICBzcmM6IHVybCguL0ZvbnRzL1VSVy1ESU4tYm9sZC50dGYpO1xcbn1cXG5AZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiBVUlcgRElOIGV4dHJhLWJvbGQ7XFxuICBzcmM6IHVybCguL0ZvbnRzL1VSVy1ESU4tZXh0cmEtYm9sZC50dGYpO1xcbn1cXG5ib2R5IHtcXG4gIGhlaWdodDogMTAwdmg7XFxuICB3aWR0aDogMTAwdnc7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi9pbWFnZXMvZ2lwaHkuZ2lmKTtcXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcbiAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDVweCk7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4vKiBtYWluIGNvbnRlbnQgYW5kIG92ZXJsYXBwaW5nICovXFxuXFxubWFpbiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5mb3JlY2FzdC1jb250YWluZXIge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgaGVpZ2h0OiA1MDBweDtcXG4gIHdpZHRoOiA5NDBweDtcXG4gIC8qIGhlaWdodDogNDQwcHg7XFxuICB3aWR0aDogODgwcHg7ICovXFxufVxcbi5mb3JlY2FzdC1jb250YWluZXIgPiBkaXYge1xcbiAgaGVpZ2h0OiA0NDBweDtcXG4gIHdpZHRoOiA4ODBweDtcXG4gIGJvcmRlci1yYWRpdXM6IDIyMHB4O1xcbn1cXG4uY2xhc3MtdG9wIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHotaW5kZXg6IDM7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gIGJvcmRlcjogM3B4IHNvbGlkICM1NjU2NTU7XFxuICBtaXgtYmxlbmQtbW9kZTogbXVsdGlwbHk7XFxuICBib3gtc2hhZG93OiBpbnNldCAyMHB4IDIwcHggMHB4IHJnYmEoODIsIDgyLCA4MSwgMC4yKSxcXG4gICAgMjBweCAyMHB4IDBweCByZ2JhKDgyLCA4MiwgODEsIDAuNSk7XFxufVxcbi5pbnNpZGUge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgei1pbmRleDogMjtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNkYWRjZDE7XFxuICBib3JkZXI6IDNweCBzb2xpZCAjYzBjMGJkO1xcbiAgdG9wOiAyMHB4O1xcbiAgbGVmdDogMjBweDtcXG4gIG1peC1ibGVuZC1tb2RlOiBub3JtYWw7XFxufVxcbi5zaGFkb3cge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgei1pbmRleDogMTtcXG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcbiAgdG9wOiA0NXB4O1xcbiAgbGVmdDogNDBweDtcXG59XFxuXFxuLyogY2xvY2sgKi9cXG5cXG4uY2xvY2sge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgd2lkdGg6IDI3MHB4O1xcbiAgaGVpZ2h0OiAyNzBweDtcXG4gIHRvcDogODVweDtcXG4gIGxlZnQ6IDEwMHB4O1xcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgYm9yZGVyOiAzcHggc29saWQgcmdiKDgyLCA4MiwgODEpO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICBib3gtc2hhZG93OiBpbnNldCAycHggMnB4IDJweCByZ2JhKDgyLCA4MiwgODEsIDAuNSksXFxuICAgIDNweCAzcHggMnB4IHJnYmEoODIsIDgyLCA4MSwgMC41KTtcXG59XFxuLmhhbmQge1xcbiAgYm9yZGVyOiBub25lO1xcbn1cXG4uY2xvY2sgLm51bWJlci1jb250YWluZXIge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICB0cmFuc2Zvcm06IHJvdGF0ZSh2YXIoLS1yb3RhdGlvbikpO1xcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgcGFkZGluZy10b3A6IDRweDtcXG59XFxuLmNsb2NrIC5vbmUge1xcbiAgLS1yb3RhdGlvbjogMzBkZWc7XFxufVxcbi5jbG9jayAudHdvIHtcXG4gIC0tcm90YXRpb246IDYwZGVnO1xcbn1cXG4uY2xvY2sgLnRocmVlIHtcXG4gIC0tcm90YXRpb246IDkwZGVnO1xcbn1cXG4uY2xvY2sgLmZvdXIge1xcbiAgLS1yb3RhdGlvbjogMTIwZGVnO1xcbn1cXG4uY2xvY2sgLmZpdmUge1xcbiAgLS1yb3RhdGlvbjogMTUwZGVnO1xcbn1cXG4uY2xvY2sgLnNpeCB7XFxuICAtLXJvdGF0aW9uOiAxODBkZWc7XFxufVxcbi5jbG9jayAuc2V2ZW4ge1xcbiAgLS1yb3RhdGlvbjogMjEwZGVnO1xcbn1cXG4uY2xvY2sgLmVpZ3RoIHtcXG4gIC0tcm90YXRpb246IDI0MGRlZztcXG59XFxuLmNsb2NrIC5uaW5lIHtcXG4gIC0tcm90YXRpb246IDI3MGRlZztcXG59XFxuLmNsb2NrIC50ZW4ge1xcbiAgLS1yb3RhdGlvbjogMzAwZGVnO1xcbn1cXG4uY2xvY2sgLmVsZXZlbiB7XFxuICAtLXJvdGF0aW9uOiAzMzBkZWc7XFxufVxcbi5jbG9jayAubnVtYmVyIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHdpZHRoOiAzcHg7XFxuICBoZWlnaHQ6IDE1cHg7XFxuICBib3JkZXItcmFkaXVzOiAycHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNzA3MDcwO1xcbn1cXG4uY2xvY2sgLmhhbmQge1xcbiAgLS1yb3RhdGlvbjogMDtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGJvdHRvbTogNTAlO1xcbiAgbGVmdDogNTAlO1xcbiAgdHJhbnNmb3JtLW9yaWdpbjogYm90dG9tO1xcbiAgei1pbmRleDogNTtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKSByb3RhdGUoY2FsYyh2YXIoLS1yb3RhdGlvbikgKiAxZGVnKSk7XFxufVxcbi5jbG9jazo6YWZ0ZXIge1xcbiAgY29udGVudDogXFxcIlxcXCI7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXG4gIHotaW5kZXg6IDY7XFxuICB3aWR0aDogMTJweDtcXG4gIGhlaWdodDogMTJweDtcXG4gIHRvcDogNTAlO1xcbiAgbGVmdDogNTAlO1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XFxuICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICBib3gtc2hhZG93OiAycHggMnB4IDBweCByZ2JhKDgyLCA4MiwgODEsIDAuMik7XFxufVxcbi5jbG9jayAuaGFuZC5zZWNvbmQge1xcbiAgd2lkdGg6IDJweDtcXG4gIGhlaWdodDogMTEwcHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjU1LCAyMjMsIDM5KTtcXG59XFxuLmNsb2NrIC5oYW5kLm1pbnV0ZSB7XFxuICB3aWR0aDogNHB4O1xcbiAgaGVpZ2h0OiAxMDBweDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNkNDI3MWU7XFxufVxcbi5jbG9jayAuaGFuZC5ob3VyIHtcXG4gIHdpZHRoOiA0cHg7XFxuICBoZWlnaHQ6IDcwcHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZDQyNzFlO1xcbn1cXG5cXG4vKiBpbmZvcm1hdGlvbiBjb250YWluZXIgKi9cXG5cXG4ud2VhdGhlci1jb250YWluZXIge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgd2lkdGg6IDM2MHB4O1xcbiAgaGVpZ2h0OiAyNzBweDtcXG4gIHRvcDogODVweDtcXG4gIGxlZnQ6IDQzMHB4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcbi5jaXR5IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgaGVpZ2h0OiAzMHB4O1xcbiAgZm9udC1mYW1pbHk6IFVSVyBESU4gbWVkaXVtO1xcbiAgY29sb3I6ICM1NjU2NTU7XFxuICBmb250LXNpemU6IDIwcHg7XFxufVxcbi5kYXRlIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgaGVpZ2h0OiA3MHB4O1xcbiAgZm9udC1mYW1pbHk6IFVSVyBESU4gYm9sZDtcXG4gIGNvbG9yOiAjMzEzMTMxO1xcbiAgZm9udC1zaXplOiA0MHB4O1xcbiAgcGFkZGluZy1ib3R0b206IDEwcHg7XFxuICBib3JkZXItYm90dG9tOiAycHggc29saWQgI2I1YjdhZTtcXG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XFxufVxcbi53ZWF0aGVyIHtcXG4gIGZsZXgtZ3JvdzogMTtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnIgMWZyO1xcbn1cXG4ud2VhdGhlciA+IGRpdiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuLndlYXRoZXIgLmljb24ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGhlaWdodDogNTAlO1xcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcXG59XFxuLndlYXRoZXIgLnRlbXBlcmF0dXJlIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBmbGV4LWdyb3c6IDE7XFxuICBmb250LWZhbWlseTogVVJXIERJTiBib2xkO1xcbiAgY29sb3I6ICM1NjU2NTU7XFxuICBmb250LXNpemU6IDM1cHg7XFxufVxcbi53ZWF0aGVyIC50aW1lIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBmbGV4LWdyb3c6IDE7XFxuICBmb250LWZhbWlseTogVVJXIERJTiBtZWRpdW07XFxuICBjb2xvcjogIzU2NTY1NTtcXG4gIGZvbnQtc2l6ZTogMjBweDtcXG59XFxuLmljb24gc3BhbiB7XFxuICBmb250LXNpemU6IDcwcHg7XFxuICBjb2xvcjogIzU2NTY1NTtcXG59XFxuXFxuLyogaW5wdXQgKi9cXG5cXG4uaW5wdXQtY29udGFpbmVyIHsgIFxcbiAgbWFyZ2luLXRvcDogNXZoO1xcbiAgd2lkdGg6IDMwMHB4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIGhlaWdodDogMzZweDtcXG59XFxuLmlucHV0LWNvbnRhaW5lciBpbnB1dCB7XFxuICBhbGw6IHVuc2V0O1xcbiAgd2lkdGg6IDU1JTtcXG4gIGJvcmRlci1yYWRpdXM6IDE4cHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGFkY2QxO1xcbiAgYm9yZGVyOiAzcHggc29saWQgIzU2NTY1NTtcXG4gIGJveC1zaGFkb3c6IDNweCA1cHggMHB4IHJnYmEoMzQsIDM0LCAzNCwgMC42KTtcXG4gIGZvbnQtZmFtaWx5OiBVUlcgRElOIG1lZGl1bTtcXG4gIGNvbG9yOiAjMzEzMTMxO1xcbiAgcGFkZGluZzogNXB4O1xcbiAgcGFkZGluZy1sZWZ0OiAxNXB4O1xcbiAgcGFkZGluZy1yaWdodDogMTVweDtcXG59XFxuLmlucHV0LWNvbnRhaW5lciBpbnB1dDpmb2N1cyB7XFxuICBib3JkZXI6IDNweCBzb2xpZCAjYzBjMGJkO1xcbn1cXG4uaW5wdXQtY29udGFpbmVyIC5zZWFyY2gge1xcbiAgYWxsOiB1bnNldDtcXG4gIGhlaWdodDogMzBweDtcXG4gIHdpZHRoOiAzMHB4O1xcbiAgYm9yZGVyLXJhZGl1czogMThweDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNkYWRjZDE7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgYm9yZGVyOiAzcHggc29saWQgIzU2NTY1NTtcXG4gIGJveC1zaGFkb3c6IDJweCAzcHggMHB4IHJnYmEoMzQsIDM0LCAzNCwgMC42KTtcXG4gIGNvbG9yOiAjNTY1NjU1O1xcbn1cXG4uaW5wdXQtY29udGFpbmVyIC5zZWFyY2g6YWN0aXZlIHtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKDJweCwgMnB4KTtcXG4gIGJveC1zaGFkb3c6IDBweCAwcHggMHB4IDBweDtcXG59XFxuLmlucHV0LWNvbnRhaW5lciAudW5pdC1jb252ZXJ0ZXIge1xcbiAgYWxsOiB1bnNldDtcXG4gIGhlaWdodDogMzBweDtcXG4gIHdpZHRoOiAzMHB4O1xcbiAgYm9yZGVyLXJhZGl1czogMThweDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNkYWRjZDE7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgYm9yZGVyOiAzcHggc29saWQgIzU2NTY1NTtcXG4gIGJveC1zaGFkb3c6IDJweCAzcHggMHB4IHJnYmEoMzQsIDM0LCAzNCwgMC42KTtcXG4gIGZvbnQtZmFtaWx5OiBVUlcgRElOIGJvbGQ7XFxuICBjb2xvcjogIzU2NTY1NTtcXG59XFxuLmlucHV0LWNvbnRhaW5lciAudW5pdC1jb252ZXJ0ZXI6YWN0aXZlIHtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKDJweCwgMnB4KTtcXG4gIGJveC1zaGFkb3c6IDBweCAwcHggMHB4IDBweDtcXG59XFxuXFxuLyogZXJyb3IgKi9cXG5cXG4uZXJyb3Ige1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDAsIDAsIDAuNSk7XFxuICBib3JkZXI6IDNweCBzb2xpZCByZWQ7XFxuICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoNXB4KTtcXG4gIHotaW5kZXg6IDc7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4uZXJyb3IgPiBkaXYge1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgZm9udC1mYW1pbHk6IFVSVyBESU4gYm9sZDtcXG4gIGZvbnQtc2l6ZTogNDBweDtcXG59XFxuXFxuXFxuXFxuLmxvYWRpbmcge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAxNDAsIDI1NSwgMC41KTtcXG4gIGJhY2tkcm9wLWZpbHRlcjogYmx1cig1cHgpO1xcbiAgei1pbmRleDogNztcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7ICBcXG59XFxuXFxuLmxvYWRpbmcgPiBkaXYge1xcbiAgaGVpZ2h0OiAyNTBweDtcXG4gIHdpZHRoOiAyNTBweDtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCguL2ltYWdlcy9sb2FkaW5nLmdpZik7XFxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgYm9yZGVyOiAzcHggc29saWQgcmdiKDAsIDk0LCAyMTgpO1xcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH1cbiAgdXJsID0gU3RyaW5nKHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmwpO1xuXG4gIC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9XG5cbiAgLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuICBpZiAoL1tcIicoKSBcXHRcXG5dfCglMjApLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XG4gIH1cbiAgcmV0dXJuIHVybDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vaW5kZXguY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9pbmRleC5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCBcIi4vaW5kZXguY3NzXCI7XG5cbmNvbnN0IGhvdXJIYW5kID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignW2RhdGEtaG91ci1oYW5kXScpO1xuY29uc3QgbWludXRlSGFuZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLW1pbnV0ZS1oYW5kXScpO1xuY29uc3Qgc2Vjb25kSGFuZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLXNlY29uZC1oYW5kXScpO1xuXG5mdW5jdGlvbiBzZXRSb3RhdGlvbihlbGVtZW50LCByb3RhdGlvblJhdGlvKSB7XG4gICAgZWxlbWVudC5zdHlsZS5zZXRQcm9wZXJ0eShcIi0tcm90YXRpb25cIiwgcm90YXRpb25SYXRpbyAqIDM2MClcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gc2V0Q2xvY2soKSB7XG4gIGNvbnN0IGN1cnJlbnREYXRlID0gbmV3IERhdGUoKTtcbiAgY29uc3Qgc2Vjb25kUmF0aW8gPSBjdXJyZW50RGF0ZS5nZXRTZWNvbmRzKCkgLyA2MDtcbiAgY29uc3QgbWludXRlUmF0aW8gPSAoc2Vjb25kUmF0aW8gKyBjdXJyZW50RGF0ZS5nZXRNaW51dGVzKCkpIC8gNjA7XG4gIGNvbnN0IGhvdXJSYXRpbyA9IChtaW51dGVSYXRpbyArIGN1cnJlbnREYXRlLmdldEhvdXJzKCkpIC8gMTI7XG4gIHNldFJvdGF0aW9uKHNlY29uZEhhbmQsIHNlY29uZFJhdGlvKVxuICBzZXRSb3RhdGlvbihtaW51dGVIYW5kLCBtaW51dGVSYXRpbylcbiAgc2V0Um90YXRpb24oaG91ckhhbmQsIGhvdXJSYXRpbylcbn1cbiIsImltcG9ydCBcIi4vaW5kZXguY3NzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHNldERhdGEoZGF0YSkge1xuICBjb25zdCBkYXRlRGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5kYXRlXCIpO1xuICBjb25zdCB0b21vcnJvd0RpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50b21vcnJvdyAudGltZScpO1xuICBjb25zdCBkYXlBZnRlclRvbW9ycm93RGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmRheS1hZnRlci10b21vcnJvdyAudGltZScpO1xuXG4gIGxldCB0b2RheSA9IG5ldyBEYXRlKGRhdGFbMF0uZGF0ZSk7XG4gIGxldCB0b21vcnJvdyA9IG5ldyBEYXRlKGRhdGFbMV0uZGF0ZSk7XG4gIGxldCBkYXlBZnRlclRvbW9ycm93ID0gbmV3IERhdGUoZGF0YVsyXS5kYXRlKTtcblxuICB0b2RheSA9IHRvZGF5LnRvRGF0ZVN0cmluZygpLnNwbGl0KFwiIFwiKTtcbiAgdG9tb3Jyb3cgPSB0b21vcnJvdy50b0RhdGVTdHJpbmcoKS5zcGxpdChcIiBcIik7XG4gIGRheUFmdGVyVG9tb3Jyb3cgPSBkYXlBZnRlclRvbW9ycm93LnRvRGF0ZVN0cmluZygpLnNwbGl0KFwiIFwiKTtcblxuICBkYXRlRGl2LnRleHRDb250ZW50ID0gYCR7dG9kYXlbMV19ICR7dG9kYXlbMl19ICR7dG9kYXlbM119YDtcbiAgdG9tb3Jyb3dEaXYudGV4dENvbnRlbnQgPSBgJHt0b21vcnJvd1sxXX0gJHt0b21vcnJvd1syXX1gXG4gIGRheUFmdGVyVG9tb3Jyb3dEaXYudGV4dENvbnRlbnQgPSBgJHtkYXlBZnRlclRvbW9ycm93WzFdfSAke2RheUFmdGVyVG9tb3Jyb3dbMl19YFxufVxuIiwiaW1wb3J0IFwiLi9pbmRleC5jc3NcIjtcbmltcG9ydCBzZXRDb25kaXRpb25JY29uIGZyb20gXCIuL3dlYXRoZXJDb25kaXRpb25cIjtcblxuLy8gY29uc3QgdG9kYXlEaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudG9kYXknKTtcbi8vIGNvbnN0IHRvbW9ycm93RGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRvbW9ycm93Jyk7XG4vLyBjb25zdCBkYXlBZnRlclRvbW9ycm93RGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmRheS1hZnRlci10b21vcnJvdycpO1xuXG5mdW5jdGlvbiB1bml0Q29udmVydGVyKGMsIGYsIGRpdikge1xuICBjb25zdCB1bml0Q29udmVydGVyQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi51bml0LWNvbnZlcnRlclwiKTtcbiAgbGV0IHVuaXQgPSAwO1xuXG4gIHVuaXRDb252ZXJ0ZXJCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICBpZiAodW5pdCA9PT0gMCkge1xuICAgICAgZGl2LnRleHRDb250ZW50ID0gYCR7Zn3CsEZgO1xuICAgICAgdW5pdCA9IDE7XG4gICAgICB1bml0Q29udmVydGVyQnRuLnRleHRDb250ZW50ID0gXCJDXCI7XG4gICAgfSBlbHNlIGlmICh1bml0ID09PSAxKSB7XG4gICAgICBkaXYudGV4dENvbnRlbnQgPSBgJHtjfcKwQ2A7XG4gICAgICB1bml0ID0gMDtcbiAgICAgIHVuaXRDb252ZXJ0ZXJCdG4udGV4dENvbnRlbnQgPSBcIkZcIjtcbiAgICB9XG4gIH0pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdG9kYXkoZGF0YSkge1xuICBjb25zdCBmYWhyZW5oZWl0ID0gZGF0YS5mb3JlY2FzdC5mb3JlY2FzdGRheVswXS5kYXkuYXZndGVtcF9mO1xuICBjb25zdCBjZWxjaXVzID0gZGF0YS5mb3JlY2FzdC5mb3JlY2FzdGRheVswXS5kYXkuYXZndGVtcF9jO1xuICBjb25zdCBjb25kaXRpb24gPSBkYXRhLmZvcmVjYXN0LmZvcmVjYXN0ZGF5WzBdLmRheS5jb25kaXRpb24udGV4dDtcblxuICAvLyBjb25kaXRpb25cbiAgY29uc3QgY29uZGl0aW9uSWNvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudG9kYXkgLmljb24gaW1nXCIpO1xuICBzZXRDb25kaXRpb25JY29uKGNvbmRpdGlvbiwgY29uZGl0aW9uSWNvbik7XG5cbiAgLy8gdGVtcGVyYXR1cmVcbiAgY29uc3QgdG9kYXlUZW1wZXJhdHVyZURpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudG9kYXkgLnRlbXBlcmF0dXJlXCIpO1xuICB0b2RheVRlbXBlcmF0dXJlRGl2LnRleHRDb250ZW50ID0gYCR7Y2VsY2l1c33CsENgO1xuXG4gIHVuaXRDb252ZXJ0ZXIoY2VsY2l1cywgZmFocmVuaGVpdCwgdG9kYXlUZW1wZXJhdHVyZURpdik7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0b21vcnJvdyhkYXRhKSB7XG4gIGNvbnN0IGZhaHJlbmhlaXQgPSBkYXRhLmZvcmVjYXN0LmZvcmVjYXN0ZGF5WzFdLmRheS5hdmd0ZW1wX2Y7XG4gIGNvbnN0IGNlbGNpdXMgPSBkYXRhLmZvcmVjYXN0LmZvcmVjYXN0ZGF5WzFdLmRheS5hdmd0ZW1wX2M7XG4gIGNvbnN0IGNvbmRpdGlvbiA9IGRhdGEuZm9yZWNhc3QuZm9yZWNhc3RkYXlbMV0uZGF5LmNvbmRpdGlvbi50ZXh0O1xuXG4gIC8vIGNvbmRpdGlvblxuICBjb25zdCBjb25kaXRpb25JY29uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50b21vcnJvdyAuaWNvbiBpbWdcIik7XG4gIHNldENvbmRpdGlvbkljb24oY29uZGl0aW9uLCBjb25kaXRpb25JY29uKTtcblxuICAvLyB0ZW1wZXJhdHVyZVxuICBjb25zdCB0b21vcnJvd1RlbXBlcmF0dXJlRGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcbiAgICBcIi50b21vcnJvdyAudGVtcGVyYXR1cmVcIlxuICApO1xuICB0b21vcnJvd1RlbXBlcmF0dXJlRGl2LnRleHRDb250ZW50ID0gYCR7Y2VsY2l1c33CsENgO1xuXG4gIHVuaXRDb252ZXJ0ZXIoY2VsY2l1cywgZmFocmVuaGVpdCwgdG9tb3Jyb3dUZW1wZXJhdHVyZURpdik7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkYXlBZnRlclRvbW9ycm93KGRhdGEpIHtcbiAgY29uc3QgZmFocmVuaGVpdCA9IGRhdGEuZm9yZWNhc3QuZm9yZWNhc3RkYXlbMl0uZGF5LmF2Z3RlbXBfZjtcbiAgY29uc3QgY2VsY2l1cyA9IGRhdGEuZm9yZWNhc3QuZm9yZWNhc3RkYXlbMl0uZGF5LmF2Z3RlbXBfYztcbiAgY29uc3QgY29uZGl0aW9uID0gZGF0YS5mb3JlY2FzdC5mb3JlY2FzdGRheVsyXS5kYXkuY29uZGl0aW9uLnRleHQ7XG5cbiAgLy8gY29uZGl0aW9uXG4gIGNvbnN0IGNvbmRpdGlvbkljb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmRheS1hZnRlci10b21vcnJvdyAuaWNvbiBpbWdcIik7XG4gIHNldENvbmRpdGlvbkljb24oY29uZGl0aW9uLCBjb25kaXRpb25JY29uKTtcblxuICAvLyB0ZW1wZXJhdHVyZVxuICBjb25zdCBkYXlBZnRlclRvbW9ycm93RGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcbiAgICBcIi5kYXktYWZ0ZXItdG9tb3Jyb3cgLnRlbXBlcmF0dXJlXCJcbiAgKTtcbiAgZGF5QWZ0ZXJUb21vcnJvd0Rpdi50ZXh0Q29udGVudCA9IGAke2NlbGNpdXN9wrBDYDtcblxuICB1bml0Q29udmVydGVyKGNlbGNpdXMsIGZhaHJlbmhlaXQsIGRheUFmdGVyVG9tb3Jyb3dEaXYpO1xufVxuIiwiaW1wb3J0IFwiLi9pbmRleC5jc3NcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gc2V0TG9jYXRpb24oY2l0eSwgY291bnRyeSwgbmFtZSkge1xuICAgIGNvbnN0IGxvY2F0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jaXR5XCIpXG4gICAgaWYgKGNpdHkgPT09ICcnKSB7XG4gICAgICAgIGxvY2F0aW9uLnRleHRDb250ZW50ID0gYCR7bmFtZX0sICR7Y291bnRyeX1gO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIGxvY2F0aW9uLnRleHRDb250ZW50ID0gYCR7Y2l0eX0sICR7Y291bnRyeX1gO1xuICAgIH1cbiAgICBcbn0iLCIvKiBlc2xpbnQtZGlzYWJsZSBuby1wYXJhbS1yZWFzc2lnbiAqL1xuaW1wb3J0IFwiLi9pbmRleC5jc3NcIjtcbmltcG9ydCBjbGVhckRheSBmcm9tIFwiLi9pbWFnZXMvaWNvbnMvY2xlYXItZGF5LnN2Z1wiO1xuaW1wb3J0IGNsZWFyTmlnaHQgZnJvbSBcIi4vaW1hZ2VzL2ljb25zL2NsZWFyLW5pZ2h0LnN2Z1wiO1xuaW1wb3J0IGNsb3VkeSBmcm9tIFwiLi9pbWFnZXMvaWNvbnMvY2xvdWR5LnN2Z1wiO1xuaW1wb3J0IGR1c3QgZnJvbSBcIi4vaW1hZ2VzL2ljb25zL2R1c3Quc3ZnXCI7XG5pbXBvcnQgZm9nIGZyb20gXCIuL2ltYWdlcy9pY29ucy9mb2cuc3ZnXCI7XG5pbXBvcnQgaGFpbCBmcm9tIFwiLi9pbWFnZXMvaWNvbnMvaGFpbC5zdmdcIjtcbmltcG9ydCBoYXplIGZyb20gXCIuL2ltYWdlcy9pY29ucy9oYXplLnN2Z1wiO1xuaW1wb3J0IG1pc3QgZnJvbSBcIi4vaW1hZ2VzL2ljb25zL21pc3Quc3ZnXCI7XG5pbXBvcnQgb3ZlcmNhc3QgZnJvbSBcIi4vaW1hZ2VzL2ljb25zL292ZXJjYXN0LnN2Z1wiO1xuaW1wb3J0IHBhcnRseUNsb3VkeURheURyaXp6bGUgZnJvbSBcIi4vaW1hZ2VzL2ljb25zL3BhcnRseS1jbG91ZHktZGF5LWRyaXp6bGUuc3ZnXCI7XG5pbXBvcnQgcGFydGx5Q2xvdWR5RGF5IGZyb20gXCIuL2ltYWdlcy9pY29ucy9wYXJ0bHktY2xvdWR5LWRheS5zdmdcIjtcbmltcG9ydCByYWluIGZyb20gXCIuL2ltYWdlcy9pY29ucy9yYWluLnN2Z1wiO1xuaW1wb3J0IHNsZWV0IGZyb20gXCIuL2ltYWdlcy9pY29ucy9zbGVldC5zdmdcIjtcbmltcG9ydCBzbW9rZSBmcm9tIFwiLi9pbWFnZXMvaWNvbnMvc21va2Uuc3ZnXCI7XG5pbXBvcnQgdGh1bmRlcnN0b3Jtc0RheVJhaW4gZnJvbSBcIi4vaW1hZ2VzL2ljb25zL3RodW5kZXJzdG9ybXMtZGF5LXJhaW4uc3ZnXCI7XG5pbXBvcnQgdGh1bmRlcnN0b3JtcyBmcm9tIFwiLi9pbWFnZXMvaWNvbnMvdGh1bmRlcnN0b3Jtcy1yYWluLnN2Z1wiO1xuaW1wb3J0IHNub3cgZnJvbSBcIi4vaW1hZ2VzL2ljb25zL3Nub3cuc3ZnXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHNldENvbmRpdGlvbkljb24oY29uZGl0aW9uLCBkaXYpIHtcbiAgY29uc3QgYXJyYXkgPSBjb25kaXRpb24udG9Mb3dlckNhc2UoKS5zcGxpdChcIiBcIilcblxuICBpZiAoYXJyYXkuaW5jbHVkZXMoXCJzdW5ueVwiKSkge1xuICAgIGRpdi5zcmMgPSBjbGVhckRheTtcbiAgfSBcbiAgaWYgKGFycmF5LmluY2x1ZGVzKFwiY2xlYXJcIikpIHtcbiAgICBkaXYuc3JjID0gY2xlYXJOaWdodDtcbiAgfSBcbiAgaWYgKGFycmF5LmluY2x1ZGVzKChcInBhcnRseSBzdW5ueVwiIHx8IFwibW9zdGx5IHN1bm55XCIpKSkge1xuICAgIGRpdi5zcmMgPSBwYXJ0bHlDbG91ZHlEYXk7XG4gIH0gXG4gIGlmIChhcnJheS5pbmNsdWRlcygoXCJzY2F0dGVyZWQgdGh1bmRlcnN0b3Jtc1wiIHx8IFwiY2hhbmNlIG9mIHN0b3JtXCJ8fCBcIkNoYW5jZSBvZiBUaHVuZGVydG9ybXNcIikpKSB7XG4gICAgZGl2LnNyYyA9IHRodW5kZXJzdG9ybXNEYXlSYWluO1xuICB9IFxuICBpZiAoYXJyYXkuaW5jbHVkZXMoXCJmb2dcIikpIHtcbiAgICBkaXYuc3JjID0gZm9nO1xuICB9IFxuICBpZiAoYXJyYXkuaW5jbHVkZXMoXCJkdXN0XCIpKSB7XG4gICAgZGl2LnNyYyA9IGR1c3Q7XG4gIH0gXG4gIGlmIChhcnJheS5pbmNsdWRlcygoXCJzbm93XCIgfHwgXCJpY3lcIiB8fCBcImZsdXJyaWVzXCIpKSkge1xuICAgIGRpdi5zcmMgPSBzbm93O1xuICB9IFxuICBpZiAoYXJyYXkuaW5jbHVkZXMoKFwiY2xvdWR5XCIgfHwgXCJtb3N0bHkgQ2xvdWR5XCIgfHwgXCJwYXJ0bHkgQ2xvdWR5XCIpKSkge1xuICAgIGRpdi5zcmMgPSBjbG91ZHk7XG4gIH0gXG4gIGlmIChhcnJheS5pbmNsdWRlcygoXCJoYWlsXCIgfHwgXCJjaGFuY2Ugb2Ygc25vd1wifHwgXCJzbm93IHNob3dlcnNcIikpKSB7XG4gICAgZGl2LnNyYyA9IGhhaWw7XG4gIH0gXG4gIGlmIChhcnJheS5pbmNsdWRlcyhcInNtb2tlXCIpKSB7XG4gICAgZGl2LnNyYyA9IHNtb2tlO1xuICB9IFxuICBpZiAoYXJyYXkuaW5jbHVkZXMoKFwic2xlZXRcIiB8fCBcInJhaW4gYW5kIHNub3dcIikpKSB7XG4gICAgZGl2LnNyYyA9IHNsZWV0O1xuICB9IFxuICBpZiAoYXJyYXkuaW5jbHVkZXMoKFwiaGF6ZVwiIHx8IFwibGlnaHQgc25vd1wiKSkpIHtcbiAgICBkaXYuc3JjID0gaGF6ZTtcbiAgfSBcbiAgaWYgKGFycmF5LmluY2x1ZGVzKChcImxpZ2h0IHJhaW5cIiB8fCBcImNoYW5jZSBvZiByYWluXCIgfHwgXCJzaG93ZXJzXCIgfHwgXCJzY2F0dGVyZWQgc2hvd2Vyc1wiIHx8IFwiZnJlZXppbmcgZHJpenpsZVwiKSkpIHtcbiAgICBkaXYuc3JjID0gcGFydGx5Q2xvdWR5RGF5RHJpenpsZTtcbiAgfSBcbiAgaWYgKGFycmF5LmluY2x1ZGVzKFwicmFpblwiKSkge1xuICAgIGRpdi5zcmMgPSByYWluO1xuICB9IFxuICBpZiAoYXJyYXkuaW5jbHVkZXMoXCJvdmVyY2FzdFwiKSkge1xuICAgIGRpdi5zcmMgPSBvdmVyY2FzdDtcbiAgfSBcbiAgaWYgKGFycmF5LmluY2x1ZGVzKChcInN0b3JtXCJ8fCBcInRodW5kZXJzdG9ybVwiKSkpIHtcbiAgICBkaXYuc3JjID0gdGh1bmRlcnN0b3JtcztcbiAgfSBcbiAgaWYgKGFycmF5LmluY2x1ZGVzKFwibWlzdFwiKSkge1xuICAgIGRpdi5zcmMgPSBtaXN0O1xuICB9IFxufVxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbi8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBfX3dlYnBhY2tfbW9kdWxlc19fO1xuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyYztcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSBzY3JpcHRVcmwgPSBzY3JpcHRzW3NjcmlwdHMubGVuZ3RoIC0gMV0uc3JjXG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18uYiA9IGRvY3VtZW50LmJhc2VVUkkgfHwgc2VsZi5sb2NhdGlvbi5ocmVmO1xuXG4vLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuLy8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4vLyBbcmVzb2x2ZSwgcmVqZWN0LCBQcm9taXNlXSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbnZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG5cdFwibWFpblwiOiAwXG59O1xuXG4vLyBubyBjaHVuayBvbiBkZW1hbmQgbG9hZGluZ1xuXG4vLyBubyBwcmVmZXRjaGluZ1xuXG4vLyBubyBwcmVsb2FkZWRcblxuLy8gbm8gSE1SXG5cbi8vIG5vIEhNUiBtYW5pZmVzdFxuXG4vLyBubyBvbiBjaHVua3MgbG9hZGVkXG5cbi8vIG5vIGpzb25wIGZ1bmN0aW9uIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgXCIuL2luZGV4LmNzc1wiO1xuaW1wb3J0IHNldENsb2NrIGZyb20gXCIuL2Nsb2NrXCI7XG5pbXBvcnQgc2V0bG9jYXRpb24gZnJvbSBcIi4vbG9jYXRpb25cIjtcbmltcG9ydCBzZXREYXRlIGZyb20gXCIuL2RhdGVcIjtcbmltcG9ydCB7IHRvZGF5LCB0b21vcnJvdywgZGF5QWZ0ZXJUb21vcnJvdyB9IGZyb20gXCIuL2ZvcmVjYXN0XCI7XG5cbnNldEludGVydmFsKHNldENsb2NrLCAxMDAwKTtcbnNldENsb2NrKCk7XG5cbi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbmNvbnN0IGlucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImlucHV0XCIpO1xuY29uc3Qgc2VhcmNoQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zZWFyY2hcIik7XG5cbmZ1bmN0aW9uIGVycm9yNDA0KCkge1xuICBjb25zdCBmb3JlY2FzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZm9yZWNhc3QtY29udGFpbmVyXCIpO1xuXG4gIGZvcmVjYXN0LnJlbW92ZUNoaWxkKGZvcmVjYXN0Lmxhc3RDaGlsZCk7XG5cbiAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uc3QgZXJyb3JNZXNzYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcblxuICBjb250YWluZXIuY2xhc3NMaXN0LmFkZChcImVycm9yXCIpO1xuICBlcnJvck1lc3NhZ2UudGV4dENvbnRlbnQgPSBcIkNpdHkgbm90IGZvdW5kIOKAvlxcXFwob19vKS/igL5cIjtcblxuICBmb3JlY2FzdC5hcHBlbmQoY29udGFpbmVyKTtcbiAgY29udGFpbmVyLmFwcGVuZChlcnJvck1lc3NhZ2UpO1xuXG4gIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgIGZvcmVjYXN0LnJlbW92ZUNoaWxkKGZvcmVjYXN0Lmxhc3RDaGlsZCk7XG4gIH0sIDIwMDApO1xufVxuXG5mdW5jdGlvbiBsb2FkaW5nKCkge1xuICBjb25zdCBmb3JlY2FzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZm9yZWNhc3QtY29udGFpbmVyXCIpO1xuICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb25zdCBnaWYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuXG4gIGNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwibG9hZGluZ1wiKTtcblxuICBmb3JlY2FzdC5hcHBlbmQoY29udGFpbmVyKTtcbiAgY29udGFpbmVyLmFwcGVuZENoaWxkKGdpZik7XG59XG5cbmFzeW5jIGZ1bmN0aW9uIGdldFdlYXRlckRhdGEoY2l0eU5hbWUpIHtcbiAgbGV0IHJlc3BvbnNlID0gMDtcbiAgbG9hZGluZygpO1xuXG4gIHRyeSB7XG4gICAgY29uc3Qgd2VhdGhlciA9IGF3YWl0IGZldGNoKFxuICAgICAgYGh0dHBzOi8vYXBpLndlYXRoZXJhcGkuY29tL3YxL2ZvcmVjYXN0Lmpzb24/a2V5PWExZmQ3YTE4YzdkZjQ1Y2Q5Y2YxNTIxMTIzMjQwMyZxPSR7Y2l0eU5hbWV9JmRheXM9MyZhcWk9bm8mYWxlcnRzPW5vYCxcbiAgICAgIHtcbiAgICAgICAgbW9kZTogXCJjb3JzXCIsXG4gICAgICB9XG4gICAgKTtcblxuICAgIGNvbnN0IGRhdGEgPSBhd2FpdCB3ZWF0aGVyLmpzb24oKTtcblxuICAgIHRvZGF5KGRhdGEpO1xuICAgIHRvbW9ycm93KGRhdGEpO1xuICAgIGRheUFmdGVyVG9tb3Jyb3coZGF0YSk7XG5cbiAgICBzZXRsb2NhdGlvbihcbiAgICAgIGRhdGEubG9jYXRpb24ucmVnaW9uLFxuICAgICAgZGF0YS5sb2NhdGlvbi5jb3VudHJ5LFxuICAgICAgZGF0YS5sb2NhdGlvbi5uYW1lXG4gICAgKTtcbiAgICBzZXREYXRlKGRhdGEuZm9yZWNhc3QuZm9yZWNhc3RkYXkpO1xuXG4gICAgY29uc3QgdW5pdENvbnZlcnRlckJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudW5pdC1jb252ZXJ0ZXJcIik7XG4gICAgdW5pdENvbnZlcnRlckJ0bi50ZXh0Q29udGVudCA9IFwiRlwiO1xuXG4gICAgaWYgKHdlYXRoZXIub2spIHtcbiAgICAgIHJlc3BvbnNlICs9IDE7XG4gICAgfVxuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGVycm9yNDA0KCk7XG4gIH0gZmluYWxseSB7XG4gICAgaWYgKHJlc3BvbnNlID09PSAxKSB7XG4gICAgICBjb25zdCBmb3JlY2FzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZm9yZWNhc3QtY29udGFpbmVyXCIpO1xuICAgICAgZm9yZWNhc3QucmVtb3ZlQ2hpbGQoZm9yZWNhc3QubGFzdENoaWxkKTtcbiAgICB9XG4gIH1cbn1cblxuc2VhcmNoQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gIGdldFdlYXRlckRhdGEoaW5wdXQudmFsdWUpO1xuICBpbnB1dC52YWx1ZSA9IFwiXCI7XG59KTtcblxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlwcmVzc1wiLCAoZSkgPT4ge1xuICBpZiAoZS5rZXkgPT09IFwiRW50ZXJcIikge1xuICAgIGdldFdlYXRlckRhdGEoaW5wdXQudmFsdWUpO1xuICAgIGlucHV0LnZhbHVlID0gXCJcIjtcbiAgfVxufSk7XG5cbmdldFdlYXRlckRhdGEoXCJuZXcgeW9ya1wiKTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==