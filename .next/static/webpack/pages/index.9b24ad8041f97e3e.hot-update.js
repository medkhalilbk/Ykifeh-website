"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./compoments/formSection.js":
/*!***********************************!*\
  !*** ./compoments/formSection.js ***!
  \***********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/index.mjs\");\n\nvar _s = $RefreshSig$();\n\n\n\nfunction FormSection() {\n    _s();\n    const [res, setRes] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const [phone, setPhone] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [email, setEmail] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const handleChange = (e)=>{\n        setPhone(e.target.value);\n    };\n    function submitForm() {\n        console.log(phone);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Container, {\n        alignContent: \"center\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.FormControl, {\n            isRequired: true,\n            marginTop: \"12\",\n            marginBottom: \"12\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.FormLabel, {\n                    children: \"Email\"\n                }, void 0, false, {\n                    fileName: \"/Users/medkhalil/Desktop/Dev/Ykifeh-website/compoments/formSection.js\",\n                    lineNumber: 23,\n                    columnNumber: 1\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Input, {\n                    placeholder: \"hello@ykifeh.tn\"\n                }, void 0, false, {\n                    fileName: \"/Users/medkhalil/Desktop/Dev/Ykifeh-website/compoments/formSection.js\",\n                    lineNumber: 24,\n                    columnNumber: 5\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.FormLabel, {\n                    children: \"Telephone\"\n                }, void 0, false, {\n                    fileName: \"/Users/medkhalil/Desktop/Dev/Ykifeh-website/compoments/formSection.js\",\n                    lineNumber: 25,\n                    columnNumber: 5\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Input, {\n                    type: \"number\",\n                    value: phone,\n                    onChange: handleChange,\n                    placeholder: \"+216 123 123 123\"\n                }, void 0, false, {\n                    fileName: \"/Users/medkhalil/Desktop/Dev/Ykifeh-website/compoments/formSection.js\",\n                    lineNumber: 26,\n                    columnNumber: 5\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Button, {\n                    marginTop: \"5\",\n                    style: {\n                        flex: 1,\n                        alignSelf: \"center\"\n                    },\n                    colorScheme: \"teal\",\n                    variant: \"outline\",\n                    children: \"Button\"\n                }, void 0, false, {\n                    fileName: \"/Users/medkhalil/Desktop/Dev/Ykifeh-website/compoments/formSection.js\",\n                    lineNumber: 27,\n                    columnNumber: 5\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/medkhalil/Desktop/Dev/Ykifeh-website/compoments/formSection.js\",\n            lineNumber: 22,\n            columnNumber: 1\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/medkhalil/Desktop/Dev/Ykifeh-website/compoments/formSection.js\",\n        lineNumber: 21,\n        columnNumber: 1\n    }, this);\n}\n_s(FormSection, \"+DktEjTgG2ws/0DdBQIpP4ecPXs=\");\n_c = FormSection;\n/* harmony default export */ __webpack_exports__[\"default\"] = (FormSection);\nvar _c;\n$RefreshReg$(_c, \"FormSection\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb21lbnRzL2Zvcm1TZWN0aW9uLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQXlCO0FBQzJEO0FBQ3BEO0FBTWhDLFNBQVNPOztJQUNQLE1BQU0sQ0FBQ0MsS0FBS0MsT0FBTyxHQUFHSCwrQ0FBUUEsQ0FBQztJQUMvQixNQUFNLENBQUNJLE9BQU9DLFNBQVMsR0FBR0wsK0NBQVFBLENBQUM7SUFDbkMsTUFBTSxDQUFDTSxPQUFPQyxTQUFTLEdBQUdQLCtDQUFRQSxDQUFDO0lBRW5DLE1BQU1RLGVBQWUsQ0FBQ0M7UUFDcEJKLFNBQVNJLEVBQUVDLE9BQU9DO0lBQ3BCO0lBQ0EsU0FBU0M7UUFDUkMsUUFBUUMsSUFBSVY7SUFDYjtJQUNBLHFCQUNGLDhEQUFDUix1REFBU0E7UUFBQ21CLGNBQWM7a0JBQ3pCLDRFQUFDbEIseURBQVdBO1lBQUNtQixVQUFVO1lBQUNDLFdBQVc7WUFBTUMsY0FBYzs7OEJBQ3ZELDhEQUFDcEIsdURBQVNBOzhCQUFDOzs7Ozs7OEJBQ1AsOERBQUNDLG1EQUFLQTtvQkFBQ29CLGFBQVk7Ozs7Ozs4QkFDbkIsOERBQUNyQix1REFBU0E7OEJBQUM7Ozs7Ozs4QkFDWCw4REFBQ0MsbURBQUtBO29CQUFDcUIsTUFBSztvQkFBVVQsT0FBT1A7b0JBQU9pQixVQUFVYjtvQkFBY1csYUFBWTs7Ozs7OzhCQUN4RSw4REFBQ3hCLG9EQUFNQTtvQkFBRXNCLFdBQVc7b0JBQUtLLE9BQU87d0JBQUVDLE1BQUs7d0JBQUdDLFdBQVU7b0JBQVM7b0JBQUlDLGFBQVk7b0JBQU9DLFNBQVE7OEJBQVU7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBTTFHO0dBeEJTekI7S0FBQUE7QUEwQlQsK0RBQWVBLFdBQVdBLEVBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9tZW50cy9mb3JtU2VjdGlvbi5qcz9jZmFkIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7IEJ1dHRvbiwgQ29udGFpbmVyLCBGb3JtQ29udHJvbCwgRm9ybUxhYmVsICwgSW5wdXQgfSBmcm9tICdAY2hha3JhLXVpL3JlYWN0JyBcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXG4gXG5cblxuXG5cbmZ1bmN0aW9uIEZvcm1TZWN0aW9uKCkge1xuICBjb25zdCBbcmVzLCBzZXRSZXNdID0gdXNlU3RhdGUobnVsbClcbiAgY29uc3QgW3Bob25lLCBzZXRQaG9uZV0gPSB1c2VTdGF0ZShcIlwiKVxuICBjb25zdCBbZW1haWwsIHNldEVtYWlsXSA9IHVzZVN0YXRlKFwiXCIpXG4gXG4gIGNvbnN0IGhhbmRsZUNoYW5nZSA9IChlKSA9PiB7XG4gICAgc2V0UGhvbmUoZS50YXJnZXQudmFsdWUpO1xuICB9O1xuICBmdW5jdGlvbiBzdWJtaXRGb3JtKCl7XG4gICBjb25zb2xlLmxvZyhwaG9uZSlcbiAgfVxuICByZXR1cm4gKFxuPENvbnRhaW5lciBhbGlnbkNvbnRlbnQ9e1wiY2VudGVyXCJ9PlxuPEZvcm1Db250cm9sIGlzUmVxdWlyZWQgbWFyZ2luVG9wPXsnMTInfSBtYXJnaW5Cb3R0b209eycxMid9ID5cbjxGb3JtTGFiZWw+RW1haWw8L0Zvcm1MYWJlbD5cbiAgICA8SW5wdXQgcGxhY2Vob2xkZXI9J2hlbGxvQHlraWZlaC50bicgLz5cbiAgICA8Rm9ybUxhYmVsPlRlbGVwaG9uZTwvRm9ybUxhYmVsPlxuICAgIDxJbnB1dCB0eXBlPVwibnVtYmVyXCIgIHZhbHVlPXtwaG9uZX0gb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX0gcGxhY2Vob2xkZXI9JysyMTYgMTIzIDEyMyAxMjMnIC8+XG4gICAgPEJ1dHRvbiAgbWFyZ2luVG9wPXtcIjVcIn0gc3R5bGU9e3sgZmxleDoxLCBhbGlnblNlbGY6XCJjZW50ZXJcIiB9fSAgY29sb3JTY2hlbWU9J3RlYWwnIHZhcmlhbnQ9J291dGxpbmUnPlxuICAgIEJ1dHRvblxuICA8L0J1dHRvbj5cbiAgPC9Gb3JtQ29udHJvbD5cbjwvQ29udGFpbmVyPlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IEZvcm1TZWN0aW9uIl0sIm5hbWVzIjpbIlJlYWN0IiwiQnV0dG9uIiwiQ29udGFpbmVyIiwiRm9ybUNvbnRyb2wiLCJGb3JtTGFiZWwiLCJJbnB1dCIsInVzZVN0YXRlIiwiRm9ybVNlY3Rpb24iLCJyZXMiLCJzZXRSZXMiLCJwaG9uZSIsInNldFBob25lIiwiZW1haWwiLCJzZXRFbWFpbCIsImhhbmRsZUNoYW5nZSIsImUiLCJ0YXJnZXQiLCJ2YWx1ZSIsInN1Ym1pdEZvcm0iLCJjb25zb2xlIiwibG9nIiwiYWxpZ25Db250ZW50IiwiaXNSZXF1aXJlZCIsIm1hcmdpblRvcCIsIm1hcmdpbkJvdHRvbSIsInBsYWNlaG9sZGVyIiwidHlwZSIsIm9uQ2hhbmdlIiwic3R5bGUiLCJmbGV4IiwiYWxpZ25TZWxmIiwiY29sb3JTY2hlbWUiLCJ2YXJpYW50Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./compoments/formSection.js\n"));

/***/ })

});