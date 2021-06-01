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

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _js_contact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./js/contact */ \"./src/js/contact.js\");\n\n\n(0,_js_contact__WEBPACK_IMPORTED_MODULE_0__.default)();\n\n//# sourceURL=webpack://webpackk/./src/index.js?");

/***/ }),

/***/ "./src/js/contact.js":
/*!***************************!*\
  !*** ./src/js/contact.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ contact)\n/* harmony export */ });\n/* harmony import */ var _nav__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./nav */ \"./src/js/nav.js\");\n\n\nfunction contact() {\n  const mapouter = document.createElement('div');\n  mapouter.classList.add('mapouter');\n\n  const gmapCanvas = document.createElement('div');\n  gmapCanvas.classList.add('gmap_canvas');\n\n  const iframe = document.createElement('iframe');\n  iframe.classList.add('gmap_iframe');\n  iframe.width = '100%';\n  iframe.src = 'https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=Tivoli%20Dome%20alexandria+(Testy%20cafe)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;&output=embed';\n  iframe.frameBorder = '0';\n  iframe.scrolling = 'no';\n  iframe.marginHeight = '0';\n  iframe.marginWidth = '0';\n\n  const mapa = document.createElement('a');\n  mapa.href = 'https://www.fridaynightfunkin.net/';\n  mapa.innerHTML = 'Friday Night Funkin';\n\n  gmapCanvas.appendChild(iframe);\n  gmapCanvas.appendChild(mapa);\n  mapouter.appendChild(gmapCanvas);\n\n  const info = document.createElement('div');\n  info.classList.add('info');\n\n  const detail = document.createElement('div');\n  detail.classList.add('detail');\n\n  const dh1 = document.createElement('h1');\n  dh1.innerHTML = 'Contact Details';\n  dh1.classList.add('bg_h1');\n\n  const detailDiv = document.createElement('div');\n  const detailarr = [\n    'Address: Alexadria sidi Gabar tivoli Dome Testy',\n    'Phone: (02) 01121603394',\n    'Email: Testy@gmail.com',\n    'we are open: Mo-Fr from 8am to 1am',\n  ];\n\n  const dlen = detailarr.length;\n  for (let i = 0; i < dlen; i += 1) {\n    const item = document.createElement('p');\n    item.innerHTML = detailarr[i];\n    detailDiv.appendChild(item);\n  }\n  detail.appendChild(dh1);\n  detail.appendChild(detailDiv);\n\n  const form = document.createElement('div');\n  form.classList.add('form');\n\n  const formh1 = document.createElement('h1');\n  formh1.classList.add('bg_h1');\n  formh1.innerHTML = \"Let's Get in Touch\";\n\n  const forminputs = document.createElement('form');\n\n  const nameField = document.createElement('input');\n  nameField.classList.add('input');\n  nameField.placeholder = 'Enter your Name *';\n  nameField.type = 'text';\n\n  const email = document.createElement('input');\n  email.classList.add('input');\n  email.placeholder = 'Enter your Email *';\n  email.type = 'email';\n\n  const textarea = document.createElement('textarea');\n  textarea.classList.add('input');\n  textarea.cols = '50';\n  textarea.rows = '10';\n\n  const btn = document.createElement('button');\n  btn.classList.add('input', 'button');\n  btn.innerHTML = 'Submit';\n\n  const inputsarr = [nameField, email, textarea, btn];\n  const inputslen = inputsarr.length;\n\n  for (let i = 0; i < inputslen; i += 1) {\n    forminputs.appendChild(inputsarr[i]);\n  }\n\n  form.appendChild(formh1);\n  form.appendChild(forminputs);\n\n  info.appendChild(detail);\n  info.appendChild(form);\n\n  const h = document.createElement('div');\n  h.classList.add('h');\n  h.appendChild(mapouter);\n  h.appendChild(info);\n\n  document.body.appendChild(h);\n  (0,_nav__WEBPACK_IMPORTED_MODULE_0__.default)();\n}\n\n//# sourceURL=webpack://webpackk/./src/js/contact.js?");

/***/ }),

/***/ "./src/js/nav.js":
/*!***********************!*\
  !*** ./src/js/nav.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ nav)\n/* harmony export */ });\nfunction nav() {\n  const nav = document.createElement('nav');\n  nav.classList.add('nav');\n  const ul = document.createElement('ul');\n  ul.classList.add('ul');\n\n  const links = ['Home', 'Menu', 'Contact'];\n  for (let i = 0; i < 3; i += 1) {\n    const li = document.createElement('li');\n    li.innerHTML = links[i];\n    li.classList.add('li');\n    ul.appendChild(li);\n  }\n\n  nav.appendChild(ul);\n  document.body.getElementsByTagName('div')[0].prepend(nav);\n}\n\n//# sourceURL=webpack://webpackk/./src/js/nav.js?");

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
/******/ 			// no module.id needed
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
/************************************************************************/
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
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;