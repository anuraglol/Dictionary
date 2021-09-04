"use strict";
(() => {
var exports = {};
exports.id = "pages/index";
exports.ids = ["pages/index"];
exports.modules = {

/***/ "./pages/index.jsx":
/*!*************************!*\
  !*** ./pages/index.jsx ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Home)
/* harmony export */ });
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "C:\\Users\\RANJEET\\OneDrive\\Documents\\my-projects\\dictionary\\pages\\index.jsx";




function Home() {
  // hooks
  var {
    0: val,
    1: setVal
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("hello");
  var {
    0: def,
    1: setDef
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
  var {
    0: phonetic,
    1: setPhonetic
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
  var {
    0: src,
    1: setSrc
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
  var {
    0: word,
    1: setWord
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");

  const fetchWord = async () => {
    try {
      let url = `https://api.dictionaryapi.dev/api/v2/entries/en/${val}`;
      const res = await fetch(url);
      const data = await res.json();
      setWord(data[0].word);
      setDef(data[0].meanings[0].definitions[0].definition);
      setPhonetic(data[0].phonetic);
      let SRC = data[0].phonetics[0].audio;
      setSrc(`https:${SRC}`);
    } catch (error) {
      setPhonetic("");
      setWord("");
      setDef("oops!! enter a meaningful word");
      setSrc("");
      console.log(error);
    }
  };

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_0___default()), {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("link", {
        rel: "shortcut icon",
        href: "./sticky-note-solid.svg",
        type: "image/x-icon"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 34,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("title", {
        children: "Dictionary"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 39,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("link", {
        href: "https://fonts.googleapis.com/css?family=Poppins:100,100italic,200,200italic,300,300italic,regular,italic,500,500italic,600,600italic,700,700italic,800,800italic,900,900italic",
        rel: "stylesheet"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 40,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
      className: "main font-poppins font-medium text-xl bg-white p-4 rounded-lg shadow-2xl w-main",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("input", {
        type: "text",
        onChange: e => setVal(e.target.value),
        className: "outline-none"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 46,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("p", {
        className: "w-full flex justify-center",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("button", {
          onClick: fetchWord,
          className: "text-white p-2 rounded bg-primary m-3",
          children: "Search"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 52,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 51,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("span", {
          children: [word, " ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("span", {
            children: phonetic
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 62,
            columnNumber: 20
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 61,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("p", {
          className: "m-1",
          children: def
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 65,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("audio", {
          src: src,
          controls: true
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 66,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 60,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 7
    }, this)]
  }, void 0, true);
}

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/***/ ((module) => {

module.exports = require("next/head");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/index.jsx"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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TkYsZUFlRTtBQUFBLGdDQUNFO0FBQUEscUJBQ0dGLElBREgsb0JBQ1M7QUFBQSxzQkFBT0o7QUFBUDtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQURUO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFERixlQUtFO0FBQUcsbUJBQVMsRUFBQyxLQUFiO0FBQUEsb0JBQW9CRjtBQUFwQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUxGLGVBTUU7QUFBTyxhQUFHLEVBQUVJLEdBQVo7QUFBaUIsa0JBQVE7QUFBekI7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFORjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FmRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFiRjtBQUFBLGtCQURGO0FBd0NEOzs7Ozs7Ozs7O0FDdEVEOzs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7QUNBQSIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3BhZ2VzL2luZGV4LmpzeCIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L2hlYWRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIjtcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoKSB7XG4gIC8vIGhvb2tzXG4gIHZhciBbdmFsLCBzZXRWYWxdID0gdXNlU3RhdGUoXCJoZWxsb1wiKTtcbiAgdmFyIFtkZWYsIHNldERlZl0gPSB1c2VTdGF0ZShcIlwiKTtcbiAgdmFyIFtwaG9uZXRpYywgc2V0UGhvbmV0aWNdID0gdXNlU3RhdGUoXCJcIik7XG4gIHZhciBbc3JjLCBzZXRTcmNdID0gdXNlU3RhdGUoXCJcIik7XG4gIHZhciBbd29yZCwgc2V0V29yZF0gPSB1c2VTdGF0ZShcIlwiKTtcblxuICBjb25zdCBmZXRjaFdvcmQgPSBhc3luYyAoKSA9PiB7XG4gICAgdHJ5IHtcbiAgICAgIGxldCB1cmwgPSBgaHR0cHM6Ly9hcGkuZGljdGlvbmFyeWFwaS5kZXYvYXBpL3YyL2VudHJpZXMvZW4vJHt2YWx9YDtcbiAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKHVybCk7XG4gICAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzLmpzb24oKTtcblxuICAgICAgc2V0V29yZChkYXRhWzBdLndvcmQpO1xuICAgICAgc2V0RGVmKGRhdGFbMF0ubWVhbmluZ3NbMF0uZGVmaW5pdGlvbnNbMF0uZGVmaW5pdGlvbik7XG4gICAgICBzZXRQaG9uZXRpYyhkYXRhWzBdLnBob25ldGljKTtcbiAgICAgIGxldCBTUkMgPSBkYXRhWzBdLnBob25ldGljc1swXS5hdWRpbztcbiAgICAgIHNldFNyYyhgaHR0cHM6JHtTUkN9YCk7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIHNldFBob25ldGljKFwiXCIpO1xuICAgICAgc2V0V29yZChcIlwiKTtcbiAgICAgIHNldERlZihcIm9vcHMhISBlbnRlciBhIG1lYW5pbmdmdWwgd29yZFwiKTtcbiAgICAgIHNldFNyYyhcIlwiKTtcbiAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxIZWFkPlxuICAgICAgICA8bGlua1xuICAgICAgICAgIHJlbD1cInNob3J0Y3V0IGljb25cIlxuICAgICAgICAgIGhyZWY9XCIuL3N0aWNreS1ub3RlLXNvbGlkLnN2Z1wiXG4gICAgICAgICAgdHlwZT1cImltYWdlL3gtaWNvblwiXG4gICAgICAgIC8+XG4gICAgICAgIDx0aXRsZT5EaWN0aW9uYXJ5PC90aXRsZT5cbiAgICAgICAgPGxpbmtcbiAgICAgICAgICBocmVmPVwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PVBvcHBpbnM6MTAwLDEwMGl0YWxpYywyMDAsMjAwaXRhbGljLDMwMCwzMDBpdGFsaWMscmVndWxhcixpdGFsaWMsNTAwLDUwMGl0YWxpYyw2MDAsNjAwaXRhbGljLDcwMCw3MDBpdGFsaWMsODAwLDgwMGl0YWxpYyw5MDAsOTAwaXRhbGljXCJcbiAgICAgICAgICByZWw9XCJzdHlsZXNoZWV0XCJcbiAgICAgICAgLz5cbiAgICAgIDwvSGVhZD5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWFpbiBmb250LXBvcHBpbnMgZm9udC1tZWRpdW0gdGV4dC14bCBiZy13aGl0ZSBwLTQgcm91bmRlZC1sZyBzaGFkb3ctMnhsIHctbWFpblwiPlxuICAgICAgICA8aW5wdXRcbiAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRWYWwoZS50YXJnZXQudmFsdWUpfVxuICAgICAgICAgIGNsYXNzTmFtZT1cIm91dGxpbmUtbm9uZVwiXG4gICAgICAgIC8+XG4gICAgICAgIDxwIGNsYXNzTmFtZT1cInctZnVsbCBmbGV4IGp1c3RpZnktY2VudGVyXCI+XG4gICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgb25DbGljaz17ZmV0Y2hXb3JkfVxuICAgICAgICAgICAgY2xhc3NOYW1lPVwidGV4dC13aGl0ZSBwLTIgcm91bmRlZCBiZy1wcmltYXJ5IG0tM1wiXG4gICAgICAgICAgPlxuICAgICAgICAgICAgU2VhcmNoXG4gICAgICAgICAgPC9idXR0b24+XG4gICAgICAgIDwvcD5cblxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIDxzcGFuPlxuICAgICAgICAgICAge3dvcmR9IDxzcGFuPntwaG9uZXRpY308L3NwYW4+XG4gICAgICAgICAgPC9zcGFuPlxuXG4gICAgICAgICAgPHAgY2xhc3NOYW1lPVwibS0xXCI+e2RlZn08L3A+XG4gICAgICAgICAgPGF1ZGlvIHNyYz17c3JjfSBjb250cm9scz48L2F1ZGlvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvPlxuICApO1xufVxuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9oZWFkXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTsiXSwibmFtZXMiOlsiSGVhZCIsInVzZVN0YXRlIiwiSG9tZSIsInZhbCIsInNldFZhbCIsImRlZiIsInNldERlZiIsInBob25ldGljIiwic2V0UGhvbmV0aWMiLCJzcmMiLCJzZXRTcmMiLCJ3b3JkIiwic2V0V29yZCIsImZldGNoV29yZCIsInVybCIsInJlcyIsImZldGNoIiwiZGF0YSIsImpzb24iLCJtZWFuaW5ncyIsImRlZmluaXRpb25zIiwiZGVmaW5pdGlvbiIsIlNSQyIsInBob25ldGljcyIsImF1ZGlvIiwiZXJyb3IiLCJjb25zb2xlIiwibG9nIiwiZSIsInRhcmdldCIsInZhbHVlIl0sInNvdXJjZVJvb3QiOiIifQ==