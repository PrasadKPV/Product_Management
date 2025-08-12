/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./components/Layout.js":
/*!******************************!*\
  !*** ./components/Layout.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Layout)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\nfunction Layout({ children }) {\n    const navRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        if (navRef.current) {\n            const activeLink = navRef.current.querySelector(\"a.active\");\n            if (activeLink) {\n                const { offsetLeft, offsetWidth } = activeLink;\n                navRef.current.style.setProperty(\"--pill-left\", `${offsetLeft}px`);\n                navRef.current.style.setProperty(\"--pill-width\", `${offsetWidth}px`);\n                navRef.current.style.setProperty(\"--pill-opacity\", \"1\");\n            } else {\n                navRef.current.style.setProperty(\"--pill-opacity\", \"0\");\n            }\n        }\n    }, [\n        router.pathname\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"container\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"header\", {\n                className: \"app-header\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        children: \"Product Management\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\productManagement\\\\components\\\\Layout.js\",\n                        lineNumber: 26,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"nav\", {\n                        className: \"main-nav\",\n                        ref: navRef,\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                href: \"/\",\n                                className: `nav-link ${router.pathname === \"/\" ? \"active\" : \"\"}`,\n                                children: \"Product List\"\n                            }, void 0, false, {\n                                fileName: \"D:\\\\productManagement\\\\components\\\\Layout.js\",\n                                lineNumber: 28,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                href: \"/products/add\",\n                                className: `nav-link ${router.pathname === \"/products/add\" ? \"active\" : \"\"}`,\n                                children: \"Add Product\"\n                            }, void 0, false, {\n                                fileName: \"D:\\\\productManagement\\\\components\\\\Layout.js\",\n                                lineNumber: 31,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"D:\\\\productManagement\\\\components\\\\Layout.js\",\n                        lineNumber: 27,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\productManagement\\\\components\\\\Layout.js\",\n                lineNumber: 25,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n                children: children\n            }, void 0, false, {\n                fileName: \"D:\\\\productManagement\\\\components\\\\Layout.js\",\n                lineNumber: 39,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"D:\\\\productManagement\\\\components\\\\Layout.js\",\n        lineNumber: 24,\n        columnNumber: 5\n    }, this);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0xheW91dC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQWlEO0FBQ3BCO0FBQ1c7QUFFekIsU0FBU0ssT0FBTyxFQUFFQyxRQUFRLEVBQUU7SUFDekMsTUFBTUMsU0FBU0wsNkNBQU1BLENBQUM7SUFDdEIsTUFBTU0sU0FBU0osc0RBQVNBO0lBRXhCSCxnREFBU0EsQ0FBQztRQUNSLElBQUlNLE9BQU9FLE9BQU8sRUFBRTtZQUNsQixNQUFNQyxhQUFhSCxPQUFPRSxPQUFPLENBQUNFLGFBQWEsQ0FBQztZQUNoRCxJQUFJRCxZQUFZO2dCQUNkLE1BQU0sRUFBRUUsVUFBVSxFQUFFQyxXQUFXLEVBQUUsR0FBR0g7Z0JBQ3BDSCxPQUFPRSxPQUFPLENBQUNLLEtBQUssQ0FBQ0MsV0FBVyxDQUFDLGVBQWUsQ0FBQyxFQUFFSCxXQUFXLEVBQUUsQ0FBQztnQkFDakVMLE9BQU9FLE9BQU8sQ0FBQ0ssS0FBSyxDQUFDQyxXQUFXLENBQUMsZ0JBQWdCLENBQUMsRUFBRUYsWUFBWSxFQUFFLENBQUM7Z0JBQ25FTixPQUFPRSxPQUFPLENBQUNLLEtBQUssQ0FBQ0MsV0FBVyxDQUFDLGtCQUFrQjtZQUNyRCxPQUFPO2dCQUNMUixPQUFPRSxPQUFPLENBQUNLLEtBQUssQ0FBQ0MsV0FBVyxDQUFDLGtCQUFrQjtZQUNyRDtRQUNGO0lBQ0YsR0FBRztRQUFDUCxPQUFPUSxRQUFRO0tBQUM7SUFFcEIscUJBQ0UsOERBQUNDO1FBQUlDLFdBQVU7OzBCQUNiLDhEQUFDQztnQkFBT0QsV0FBVTs7a0NBQ2hCLDhEQUFDRTtrQ0FBRzs7Ozs7O2tDQUNKLDhEQUFDQzt3QkFBSUgsV0FBVTt3QkFBV0ksS0FBS2Y7OzBDQUM3Qiw4REFBQ0osa0RBQUlBO2dDQUFDb0IsTUFBSztnQ0FBSUwsV0FBVyxDQUFDLFNBQVMsRUFBRVYsT0FBT1EsUUFBUSxLQUFLLE1BQU0sV0FBVyxHQUFHLENBQUM7MENBQUU7Ozs7OzswQ0FHakYsOERBQUNiLGtEQUFJQTtnQ0FDSG9CLE1BQUs7Z0NBQ0xMLFdBQVcsQ0FBQyxTQUFTLEVBQUVWLE9BQU9RLFFBQVEsS0FBSyxrQkFBa0IsV0FBVyxHQUFHLENBQUM7MENBQzdFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7MEJBS0wsOERBQUNROzBCQUFNbEI7Ozs7Ozs7Ozs7OztBQUdiIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcHJvZHVjdC1tYW5hZ2VtZW50Ly4vY29tcG9uZW50cy9MYXlvdXQuanM/NTE1YyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VSZWYgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIExheW91dCh7IGNoaWxkcmVuIH0pIHtcclxuICBjb25zdCBuYXZSZWYgPSB1c2VSZWYobnVsbCk7XHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBpZiAobmF2UmVmLmN1cnJlbnQpIHtcclxuICAgICAgY29uc3QgYWN0aXZlTGluayA9IG5hdlJlZi5jdXJyZW50LnF1ZXJ5U2VsZWN0b3IoJ2EuYWN0aXZlJyk7XHJcbiAgICAgIGlmIChhY3RpdmVMaW5rKSB7XHJcbiAgICAgICAgY29uc3QgeyBvZmZzZXRMZWZ0LCBvZmZzZXRXaWR0aCB9ID0gYWN0aXZlTGluaztcclxuICAgICAgICBuYXZSZWYuY3VycmVudC5zdHlsZS5zZXRQcm9wZXJ0eSgnLS1waWxsLWxlZnQnLCBgJHtvZmZzZXRMZWZ0fXB4YCk7XHJcbiAgICAgICAgbmF2UmVmLmN1cnJlbnQuc3R5bGUuc2V0UHJvcGVydHkoJy0tcGlsbC13aWR0aCcsIGAke29mZnNldFdpZHRofXB4YCk7XHJcbiAgICAgICAgbmF2UmVmLmN1cnJlbnQuc3R5bGUuc2V0UHJvcGVydHkoJy0tcGlsbC1vcGFjaXR5JywgJzEnKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBuYXZSZWYuY3VycmVudC5zdHlsZS5zZXRQcm9wZXJ0eSgnLS1waWxsLW9wYWNpdHknLCAnMCcpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfSwgW3JvdXRlci5wYXRobmFtZV0pO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cclxuICAgICAgPGhlYWRlciBjbGFzc05hbWU9XCJhcHAtaGVhZGVyXCI+XHJcbiAgICAgICAgPGgxPlByb2R1Y3QgTWFuYWdlbWVudDwvaDE+XHJcbiAgICAgICAgPG5hdiBjbGFzc05hbWU9XCJtYWluLW5hdlwiIHJlZj17bmF2UmVmfT5cclxuICAgICAgICAgIDxMaW5rIGhyZWY9XCIvXCIgY2xhc3NOYW1lPXtgbmF2LWxpbmsgJHtyb3V0ZXIucGF0aG5hbWUgPT09ICcvJyA/ICdhY3RpdmUnIDogJyd9YH0+XHJcbiAgICAgICAgICAgIFByb2R1Y3QgTGlzdFxyXG4gICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgPExpbmtcclxuICAgICAgICAgICAgaHJlZj1cIi9wcm9kdWN0cy9hZGRcIlxyXG4gICAgICAgICAgICBjbGFzc05hbWU9e2BuYXYtbGluayAke3JvdXRlci5wYXRobmFtZSA9PT0gJy9wcm9kdWN0cy9hZGQnID8gJ2FjdGl2ZScgOiAnJ31gfVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICBBZGQgUHJvZHVjdFxyXG4gICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgIDwvbmF2PlxyXG4gICAgICA8L2hlYWRlcj5cclxuICAgICAgPG1haW4+e2NoaWxkcmVufTwvbWFpbj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn0iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VFZmZlY3QiLCJ1c2VSZWYiLCJMaW5rIiwidXNlUm91dGVyIiwiTGF5b3V0IiwiY2hpbGRyZW4iLCJuYXZSZWYiLCJyb3V0ZXIiLCJjdXJyZW50IiwiYWN0aXZlTGluayIsInF1ZXJ5U2VsZWN0b3IiLCJvZmZzZXRMZWZ0Iiwib2Zmc2V0V2lkdGgiLCJzdHlsZSIsInNldFByb3BlcnR5IiwicGF0aG5hbWUiLCJkaXYiLCJjbGFzc05hbWUiLCJoZWFkZXIiLCJoMSIsIm5hdiIsInJlZiIsImhyZWYiLCJtYWluIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Layout.js\n");

/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ \"next/head\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Layout */ \"./components/Layout.js\");\n/* harmony import */ var _styles_global_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../styles/global.css */ \"./styles/global.css\");\n/* harmony import */ var _styles_global_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_global_css__WEBPACK_IMPORTED_MODULE_4__);\n\n\n\n\n\nfunction MyApp({ Component, pageProps }) {\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const preventZoom = (e)=>{\n            if ((e.ctrlKey || e.metaKey) && (e.deltaY || e.deltaX)) {\n                e.preventDefault();\n            }\n        };\n        const preventKeyZoom = (e)=>{\n            if ((e.ctrlKey || e.metaKey) && (e.key === \"+\" || e.key === \"-\" || e.key === \"=\" || e.key === \"0\")) {\n                e.preventDefault();\n            }\n        };\n        window.addEventListener(\"wheel\", preventZoom, {\n            passive: false\n        });\n        window.addEventListener(\"keydown\", preventKeyZoom);\n        return ()=>{\n            window.removeEventListener(\"wheel\", preventZoom);\n            window.removeEventListener(\"keydown\", preventKeyZoom);\n        };\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Layout__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_2___default()), {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                        children: \"Product Management\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\productManagement\\\\pages\\\\_app.js\",\n                        lineNumber: 35,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                        rel: \"icon\",\n                        href: \"/icons/icon.ico\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\productManagement\\\\pages\\\\_app.js\",\n                        lineNumber: 36,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\productManagement\\\\pages\\\\_app.js\",\n                lineNumber: 34,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n                ...pageProps\n            }, void 0, false, {\n                fileName: \"D:\\\\productManagement\\\\pages\\\\_app.js\",\n                lineNumber: 38,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"D:\\\\productManagement\\\\pages\\\\_app.js\",\n        lineNumber: 33,\n        columnNumber: 5\n    }, this);\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyApp);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQWtDO0FBQ0w7QUFDYTtBQUNaO0FBRTlCLFNBQVNHLE1BQU0sRUFBRUMsU0FBUyxFQUFFQyxTQUFTLEVBQUU7SUFFckNMLGdEQUFTQSxDQUFDO1FBQ1IsTUFBTU0sY0FBYyxDQUFDQztZQUNuQixJQUFJLENBQUNBLEVBQUVDLE9BQU8sSUFBSUQsRUFBRUUsT0FBTyxLQUFNRixDQUFBQSxFQUFFRyxNQUFNLElBQUlILEVBQUVJLE1BQU0sR0FBRztnQkFDdERKLEVBQUVLLGNBQWM7WUFDbEI7UUFDRjtRQUVBLE1BQU1DLGlCQUFpQixDQUFDTjtZQUN0QixJQUFJLENBQUNBLEVBQUVDLE9BQU8sSUFBSUQsRUFBRUUsT0FBTyxLQUN4QkYsQ0FBQUEsRUFBRU8sR0FBRyxLQUFLLE9BQU9QLEVBQUVPLEdBQUcsS0FBSyxPQUFPUCxFQUFFTyxHQUFHLEtBQUssT0FBT1AsRUFBRU8sR0FBRyxLQUFLLEdBQUUsR0FDaEU7Z0JBQ0FQLEVBQUVLLGNBQWM7WUFDbEI7UUFDRjtRQUVBRyxPQUFPQyxnQkFBZ0IsQ0FBQyxTQUFTVixhQUFhO1lBQUVXLFNBQVM7UUFBTTtRQUMvREYsT0FBT0MsZ0JBQWdCLENBQUMsV0FBV0g7UUFFbkMsT0FBTztZQUNMRSxPQUFPRyxtQkFBbUIsQ0FBQyxTQUFTWjtZQUNwQ1MsT0FBT0csbUJBQW1CLENBQUMsV0FBV0w7UUFDeEM7SUFDRixHQUFHLEVBQUU7SUFFTCxxQkFDRSw4REFBQ1gsMERBQU1BOzswQkFDTCw4REFBQ0Qsa0RBQUlBOztrQ0FDSCw4REFBQ2tCO2tDQUFNOzs7Ozs7a0NBQ1AsOERBQUNDO3dCQUFLQyxLQUFJO3dCQUFPQyxNQUFLOzs7Ozs7Ozs7Ozs7MEJBRXhCLDhEQUFDbEI7Z0JBQVcsR0FBR0MsU0FBUzs7Ozs7Ozs7Ozs7O0FBRzlCO0FBRUEsaUVBQWVGLEtBQUtBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wcm9kdWN0LW1hbmFnZW1lbnQvLi9wYWdlcy9fYXBwLmpzP2UwYWQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnO1xyXG5pbXBvcnQgTGF5b3V0IGZyb20gJy4uL2NvbXBvbmVudHMvTGF5b3V0JztcclxuaW1wb3J0ICcuLi9zdHlsZXMvZ2xvYmFsLmNzcyc7XHJcblxyXG5mdW5jdGlvbiBNeUFwcCh7IENvbXBvbmVudCwgcGFnZVByb3BzIH0pIHtcclxuICBcclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgY29uc3QgcHJldmVudFpvb20gPSAoZSkgPT4ge1xyXG4gICAgICBpZiAoKGUuY3RybEtleSB8fCBlLm1ldGFLZXkpICYmIChlLmRlbHRhWSB8fCBlLmRlbHRhWCkpIHtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgY29uc3QgcHJldmVudEtleVpvb20gPSAoZSkgPT4ge1xyXG4gICAgICBpZiAoKGUuY3RybEtleSB8fCBlLm1ldGFLZXkpICYmXHJcbiAgICAgICAgKGUua2V5ID09PSAnKycgfHwgZS5rZXkgPT09ICctJyB8fCBlLmtleSA9PT0gJz0nIHx8IGUua2V5ID09PSAnMCcpXHJcbiAgICAgICkge1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignd2hlZWwnLCBwcmV2ZW50Wm9vbSwgeyBwYXNzaXZlOiBmYWxzZSB9KTtcclxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgcHJldmVudEtleVpvb20pO1xyXG5cclxuICAgIHJldHVybiAoKSA9PiB7XHJcbiAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCd3aGVlbCcsIHByZXZlbnRab29tKTtcclxuICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCBwcmV2ZW50S2V5Wm9vbSk7XHJcbiAgICB9O1xyXG4gIH0sIFtdKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxMYXlvdXQ+XHJcbiAgICAgIDxIZWFkPlxyXG4gICAgICAgIDx0aXRsZT5Qcm9kdWN0IE1hbmFnZW1lbnQ8L3RpdGxlPlxyXG4gICAgICAgIDxsaW5rIHJlbD1cImljb25cIiBocmVmPVwiL2ljb25zL2ljb24uaWNvXCIgLz5cclxuICAgICAgPC9IZWFkPlxyXG4gICAgICA8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IC8+XHJcbiAgICA8L0xheW91dD5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBNeUFwcDsiXSwibmFtZXMiOlsidXNlRWZmZWN0IiwiSGVhZCIsIkxheW91dCIsIk15QXBwIiwiQ29tcG9uZW50IiwicGFnZVByb3BzIiwicHJldmVudFpvb20iLCJlIiwiY3RybEtleSIsIm1ldGFLZXkiLCJkZWx0YVkiLCJkZWx0YVgiLCJwcmV2ZW50RGVmYXVsdCIsInByZXZlbnRLZXlab29tIiwia2V5Iiwid2luZG93IiwiYWRkRXZlbnRMaXN0ZW5lciIsInBhc3NpdmUiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwidGl0bGUiLCJsaW5rIiwicmVsIiwiaHJlZiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/_app.js\n");

/***/ }),

/***/ "./styles/global.css":
/*!***************************!*\
  !*** ./styles/global.css ***!
  \***************************/
/***/ (() => {



/***/ }),

/***/ "next/dist/compiled/next-server/pages.runtime.dev.js":
/*!**********************************************************************!*\
  !*** external "next/dist/compiled/next-server/pages.runtime.dev.js" ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/next-server/pages.runtime.dev.js");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/head");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react-dom":
/*!****************************!*\
  !*** external "react-dom" ***!
  \****************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-dom");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/***/ ((module) => {

"use strict";
module.exports = require("fs");

/***/ }),

/***/ "stream":
/*!*************************!*\
  !*** external "stream" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = require("stream");

/***/ }),

/***/ "zlib":
/*!***********************!*\
  !*** external "zlib" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = require("zlib");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/@swc"], () => (__webpack_exec__("./pages/_app.js")));
module.exports = __webpack_exports__;

})();