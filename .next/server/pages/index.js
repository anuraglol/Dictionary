"use strict";
(() => {
var exports = {};
exports.id = "pages/index";
exports.ids = ["pages/index"];
exports.modules = {

/***/ "./pages/Footer.jsx":
/*!**************************!*\
  !*** ./pages/Footer.jsx ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Header)
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "C:\\Users\\RANJEET\\OneDrive\\Documents\\my-projects\\dictionary\\pages\\Footer.jsx";

function Header() {
  const Link = props => {
    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
      href: props.src,
      className: "p-2 bg-purple rounded shadow text-white m-2",
      target: "blank",
      children: props.title
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 4,
      columnNumber: 7
    }, this);
  };

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: "p-4 bg-white rounded-xl shadow-2xl mt-16  flex flex-col text-center text-xl font-source font-semibold",
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Link, {
      src: "https://kr-anurag.netlify.app/",
      title: "Anurag"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Link, {
      src: "https://github.com/kr-anurag",
      title: "Github"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Link, {
      src: "https://twitter.com/kr_anurag_",
      title: "Twitter"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Link, {
      src: "https://anuragkr.hashnode.dev/",
      title: "Hashnode"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 14,
    columnNumber: 5
  }, this);
}

/***/ }),

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
/* harmony import */ var _Footer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Footer */ "./pages/Footer.jsx");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__);
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
  var {
    0: example,
    1: setEx
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");

  const fetchWord = async () => {
    try {
      let url = `https://api.dictionaryapi.dev/api/v2/entries/en/${val}`;
      const res = await fetch(url);
      const data = await res.json();
      setWord(data[0].word);
      setDef(data[0].meanings[0].definitions[0].definition);
      setPhonetic(data[0].phonetic);
      setEx(data[0].meanings[0].definitions[0].example);
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

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_0___default()), {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("link", {
        rel: "shortcut icon",
        href: "./sticky-note-solid.svg",
        type: "image/x-icon"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 38,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("title", {
        children: "Dictionary"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 43,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("link", {
        href: "https://fonts.googleapis.com/css?family=Poppins:100,100italic,200,200italic,300,300italic,regular,italic,500,500italic,600,600italic,700,700italic,800,800italic,900,900italic",
        rel: "stylesheet"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 44,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("link", {
        href: "https://fonts.googleapis.com/css?family=Source+Code+Pro:200,200italic,300,300italic,regular,italic,500,500italic,600,600italic,700,700italic,900,900italic",
        rel: "stylesheet"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 48,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
      className: "main font-poppins font-medium text-xl bg-white p-4 rounded-lg shadow-2xl w-main m-4 overflow-hidden",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("p", {
        className: "w-full flex justify-center",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("input", {
          type: "text",
          onChange: e => setVal(e.target.value),
          className: "outline-none text-center overflow-hidden"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 55,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 54,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("p", {
        className: "w-full flex justify-center",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("button", {
          onClick: fetchWord,
          className: "text-white p-2 rounded bg-primary m-3",
          children: "Search"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 62,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 61,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("span", {
          children: [word, " ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("span", {
            children: phonetic
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 72,
            columnNumber: 20
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 71,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("p", {
          className: "m-1",
          children: def
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 75,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("p", {
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("p", {
            children: "example:"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 77,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("p", {
            children: example
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 78,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 76,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("audio", {
          src: src,
          controls: true
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 80,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 70,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_Footer__WEBPACK_IMPORTED_MODULE_2__.default, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 83,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBUkYsZUFpQkU7QUFBQSxnQ0FDRTtBQUFBLHFCQUNHSixJQURILG9CQUNTO0FBQUEsc0JBQU9IO0FBQVA7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFEVDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBREYsZUFLRTtBQUFHLG1CQUFTLEVBQUMsS0FBYjtBQUFBLG9CQUFvQkY7QUFBcEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFMRixlQU1FO0FBQUEsa0NBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBREYsZUFFRTtBQUFBLHNCQUFJTztBQUFKO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQU5GLGVBVUU7QUFBTyxhQUFHLEVBQUVmLEdBQVo7QUFBaUIsa0JBQVE7QUFBekI7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFWRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FqQkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBakJGLGVBK0NFLDhEQUFDLDRDQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUEvQ0Y7QUFBQSxrQkFERjtBQW1ERDs7Ozs7Ozs7OztBQ3JGRDs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7O0FDQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9Gb290ZXIuanN4Iiwid2VicGFjazovLy8uL3BhZ2VzL2luZGV4LmpzeCIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L2hlYWRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhlYWRlcigpIHtcbiAgY29uc3QgTGluayA9IChwcm9wcykgPT4ge1xuICAgIHJldHVybiAoXG4gICAgICA8YVxuICAgICAgICBocmVmPXtwcm9wcy5zcmN9XG4gICAgICAgIGNsYXNzTmFtZT1cInAtMiBiZy1wdXJwbGUgcm91bmRlZCBzaGFkb3cgdGV4dC13aGl0ZSBtLTJcIlxuICAgICAgICB0YXJnZXQ9XCJibGFua1wiXG4gICAgICA+XG4gICAgICAgIHtwcm9wcy50aXRsZX1cbiAgICAgIDwvYT5cbiAgICApO1xuICB9O1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwicC00IGJnLXdoaXRlIHJvdW5kZWQteGwgc2hhZG93LTJ4bCBtdC0xNiAgZmxleCBmbGV4LWNvbCB0ZXh0LWNlbnRlciB0ZXh0LXhsIGZvbnQtc291cmNlIGZvbnQtc2VtaWJvbGRcIj5cbiAgICAgIDxMaW5rIHNyYz1cImh0dHBzOi8va3ItYW51cmFnLm5ldGxpZnkuYXBwL1wiIHRpdGxlPVwiQW51cmFnXCIgLz5cbiAgICAgIDxMaW5rIHNyYz1cImh0dHBzOi8vZ2l0aHViLmNvbS9rci1hbnVyYWdcIiB0aXRsZT1cIkdpdGh1YlwiIC8+XG4gICAgICA8TGluayBzcmM9XCJodHRwczovL3R3aXR0ZXIuY29tL2tyX2FudXJhZ19cIiB0aXRsZT1cIlR3aXR0ZXJcIiAvPlxuICAgICAgPExpbmsgc3JjPVwiaHR0cHM6Ly9hbnVyYWdrci5oYXNobm9kZS5kZXYvXCIgdGl0bGU9XCJIYXNobm9kZVwiIC8+XG4gICAgPC9kaXY+XG4gICk7XG59XG4iLCJpbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCI7XHJcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcblxyXG5pbXBvcnQgRm9vdGVyIGZyb20gXCIuL0Zvb3RlclwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSgpIHtcclxuICAvLyBob29rc1xyXG4gIHZhciBbdmFsLCBzZXRWYWxdID0gdXNlU3RhdGUoXCJoZWxsb1wiKTtcclxuICB2YXIgW2RlZiwgc2V0RGVmXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gIHZhciBbcGhvbmV0aWMsIHNldFBob25ldGljXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gIHZhciBbc3JjLCBzZXRTcmNdID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgdmFyIFt3b3JkLCBzZXRXb3JkXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gIHZhciBbZXhhbXBsZSwgc2V0RXhdID0gdXNlU3RhdGUoXCJcIik7XHJcblxyXG4gIGNvbnN0IGZldGNoV29yZCA9IGFzeW5jICgpID0+IHtcclxuICAgIHRyeSB7XHJcbiAgICAgIGxldCB1cmwgPSBgaHR0cHM6Ly9hcGkuZGljdGlvbmFyeWFwaS5kZXYvYXBpL3YyL2VudHJpZXMvZW4vJHt2YWx9YDtcclxuICAgICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2godXJsKTtcclxuICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlcy5qc29uKCk7XHJcblxyXG4gICAgICBzZXRXb3JkKGRhdGFbMF0ud29yZCk7XHJcbiAgICAgIHNldERlZihkYXRhWzBdLm1lYW5pbmdzWzBdLmRlZmluaXRpb25zWzBdLmRlZmluaXRpb24pO1xyXG4gICAgICBzZXRQaG9uZXRpYyhkYXRhWzBdLnBob25ldGljKTtcclxuICAgICAgc2V0RXgoZGF0YVswXS5tZWFuaW5nc1swXS5kZWZpbml0aW9uc1swXS5leGFtcGxlKTtcclxuICAgICAgbGV0IFNSQyA9IGRhdGFbMF0ucGhvbmV0aWNzWzBdLmF1ZGlvO1xyXG4gICAgICBzZXRTcmMoYGh0dHBzOiR7U1JDfWApO1xyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgc2V0UGhvbmV0aWMoXCJcIik7XHJcbiAgICAgIHNldFdvcmQoXCJcIik7XHJcbiAgICAgIHNldERlZihcIm9vcHMhISBlbnRlciBhIG1lYW5pbmdmdWwgd29yZFwiKTtcclxuICAgICAgc2V0U3JjKFwiXCIpO1xyXG4gICAgICBjb25zb2xlLmxvZyhlcnJvcik7XHJcbiAgICB9XHJcbiAgfTtcclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPEhlYWQ+XHJcbiAgICAgICAgPGxpbmtcclxuICAgICAgICAgIHJlbD1cInNob3J0Y3V0IGljb25cIlxyXG4gICAgICAgICAgaHJlZj1cIi4vc3RpY2t5LW5vdGUtc29saWQuc3ZnXCJcclxuICAgICAgICAgIHR5cGU9XCJpbWFnZS94LWljb25cIlxyXG4gICAgICAgIC8+XHJcbiAgICAgICAgPHRpdGxlPkRpY3Rpb25hcnk8L3RpdGxlPlxyXG4gICAgICAgIDxsaW5rXHJcbiAgICAgICAgICBocmVmPVwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PVBvcHBpbnM6MTAwLDEwMGl0YWxpYywyMDAsMjAwaXRhbGljLDMwMCwzMDBpdGFsaWMscmVndWxhcixpdGFsaWMsNTAwLDUwMGl0YWxpYyw2MDAsNjAwaXRhbGljLDcwMCw3MDBpdGFsaWMsODAwLDgwMGl0YWxpYyw5MDAsOTAwaXRhbGljXCJcclxuICAgICAgICAgIHJlbD1cInN0eWxlc2hlZXRcIlxyXG4gICAgICAgIC8+XHJcbiAgICAgICAgPGxpbmtcclxuICAgICAgICAgIGhyZWY9XCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9U291cmNlK0NvZGUrUHJvOjIwMCwyMDBpdGFsaWMsMzAwLDMwMGl0YWxpYyxyZWd1bGFyLGl0YWxpYyw1MDAsNTAwaXRhbGljLDYwMCw2MDBpdGFsaWMsNzAwLDcwMGl0YWxpYyw5MDAsOTAwaXRhbGljXCJcclxuICAgICAgICAgIHJlbD1cInN0eWxlc2hlZXRcIlxyXG4gICAgICAgIC8+XHJcbiAgICAgIDwvSGVhZD5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYWluIGZvbnQtcG9wcGlucyBmb250LW1lZGl1bSB0ZXh0LXhsIGJnLXdoaXRlIHAtNCByb3VuZGVkLWxnIHNoYWRvdy0yeGwgdy1tYWluIG0tNCBvdmVyZmxvdy1oaWRkZW5cIj5cclxuICAgICAgICA8cCBjbGFzc05hbWU9XCJ3LWZ1bGwgZmxleCBqdXN0aWZ5LWNlbnRlclwiPlxyXG4gICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRWYWwoZS50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJvdXRsaW5lLW5vbmUgdGV4dC1jZW50ZXIgb3ZlcmZsb3ctaGlkZGVuXCJcclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgPC9wPlxyXG4gICAgICAgIDxwIGNsYXNzTmFtZT1cInctZnVsbCBmbGV4IGp1c3RpZnktY2VudGVyXCI+XHJcbiAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgIG9uQ2xpY2s9e2ZldGNoV29yZH1cclxuICAgICAgICAgICAgY2xhc3NOYW1lPVwidGV4dC13aGl0ZSBwLTIgcm91bmRlZCBiZy1wcmltYXJ5IG0tM1wiXHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIFNlYXJjaFxyXG4gICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgPC9wPlxyXG5cclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgPHNwYW4+XHJcbiAgICAgICAgICAgIHt3b3JkfSA8c3Bhbj57cGhvbmV0aWN9PC9zcGFuPlxyXG4gICAgICAgICAgPC9zcGFuPlxyXG5cclxuICAgICAgICAgIDxwIGNsYXNzTmFtZT1cIm0tMVwiPntkZWZ9PC9wPlxyXG4gICAgICAgICAgPHA+XHJcbiAgICAgICAgICAgIDxwPmV4YW1wbGU6PC9wPlxyXG4gICAgICAgICAgICA8cD57ZXhhbXBsZX08L3A+XHJcbiAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICA8YXVkaW8gc3JjPXtzcmN9IGNvbnRyb2xzPjwvYXVkaW8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8Rm9vdGVyPjwvRm9vdGVyPlxyXG4gICAgPC8+XHJcbiAgKTtcclxufVxyXG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2hlYWRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIpOyJdLCJuYW1lcyI6WyJIZWFkZXIiLCJMaW5rIiwicHJvcHMiLCJzcmMiLCJ0aXRsZSIsIkhlYWQiLCJ1c2VTdGF0ZSIsIkZvb3RlciIsIkhvbWUiLCJ2YWwiLCJzZXRWYWwiLCJkZWYiLCJzZXREZWYiLCJwaG9uZXRpYyIsInNldFBob25ldGljIiwic2V0U3JjIiwid29yZCIsInNldFdvcmQiLCJleGFtcGxlIiwic2V0RXgiLCJmZXRjaFdvcmQiLCJ1cmwiLCJyZXMiLCJmZXRjaCIsImRhdGEiLCJqc29uIiwibWVhbmluZ3MiLCJkZWZpbml0aW9ucyIsImRlZmluaXRpb24iLCJTUkMiLCJwaG9uZXRpY3MiLCJhdWRpbyIsImVycm9yIiwiY29uc29sZSIsImxvZyIsImUiLCJ0YXJnZXQiLCJ2YWx1ZSJdLCJzb3VyY2VSb290IjoiIn0=