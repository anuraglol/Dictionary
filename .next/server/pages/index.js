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
      className: "main font-poppins font-medium text-xl bg-white p-4 rounded-lg shadow-2xl w-main m-4",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("input", {
        type: "text",
        onChange: e => setVal(e.target.value),
        className: "outline-none text-center"
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
          lineNumber: 60,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 59,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("span", {
          children: [word, " ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("span", {
            children: phonetic
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 70,
            columnNumber: 20
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 69,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("p", {
          className: "m-1",
          children: def
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 73,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("p", {
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("p", {
            children: "example:"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 75,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("p", {
            children: example
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 76,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 74,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("audio", {
          src: src,
          controls: true
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 78,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 68,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_Footer__WEBPACK_IMPORTED_MODULE_2__.default, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 81,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUEsZ0NBQ0U7QUFBQSxxQkFDR0osSUFESCxvQkFDUztBQUFBLHNCQUFPSDtBQUFQO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBRFQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQURGLGVBS0U7QUFBRyxtQkFBUyxFQUFDLEtBQWI7QUFBQSxvQkFBb0JGO0FBQXBCO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBTEYsZUFNRTtBQUFBLGtDQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQURGLGVBRUU7QUFBQSxzQkFBSU87QUFBSjtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFORixlQVVFO0FBQU8sYUFBRyxFQUFFZixHQUFaO0FBQWlCLGtCQUFRO0FBQXpCO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBVkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBZkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBakJGLGVBNkNFLDhEQUFDLDRDQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUE3Q0Y7QUFBQSxrQkFERjtBQWlERDs7Ozs7Ozs7OztBQ25GRDs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7O0FDQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9Gb290ZXIuanN4Iiwid2VicGFjazovLy8uL3BhZ2VzL2luZGV4LmpzeCIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L2hlYWRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhlYWRlcigpIHtcbiAgY29uc3QgTGluayA9IChwcm9wcykgPT4ge1xuICAgIHJldHVybiAoXG4gICAgICA8YVxuICAgICAgICBocmVmPXtwcm9wcy5zcmN9XG4gICAgICAgIGNsYXNzTmFtZT1cInAtMiBiZy1wdXJwbGUgcm91bmRlZCBzaGFkb3cgdGV4dC13aGl0ZSBtLTJcIlxuICAgICAgICB0YXJnZXQ9XCJibGFua1wiXG4gICAgICA+XG4gICAgICAgIHtwcm9wcy50aXRsZX1cbiAgICAgIDwvYT5cbiAgICApO1xuICB9O1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwicC00IGJnLXdoaXRlIHJvdW5kZWQteGwgc2hhZG93LTJ4bCBtdC0xNiAgZmxleCBmbGV4LWNvbCB0ZXh0LWNlbnRlciB0ZXh0LXhsIGZvbnQtc291cmNlIGZvbnQtc2VtaWJvbGRcIj5cbiAgICAgIDxMaW5rIHNyYz1cImh0dHBzOi8va3ItYW51cmFnLm5ldGxpZnkuYXBwL1wiIHRpdGxlPVwiQW51cmFnXCIgLz5cbiAgICAgIDxMaW5rIHNyYz1cImh0dHBzOi8vZ2l0aHViLmNvbS9rci1hbnVyYWdcIiB0aXRsZT1cIkdpdGh1YlwiIC8+XG4gICAgICA8TGluayBzcmM9XCJodHRwczovL3R3aXR0ZXIuY29tL2tyX2FudXJhZ19cIiB0aXRsZT1cIlR3aXR0ZXJcIiAvPlxuICAgICAgPExpbmsgc3JjPVwiaHR0cHM6Ly9hbnVyYWdrci5oYXNobm9kZS5kZXYvXCIgdGl0bGU9XCJIYXNobm9kZVwiIC8+XG4gICAgPC9kaXY+XG4gICk7XG59XG4iLCJpbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCI7XG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuXG5pbXBvcnQgRm9vdGVyIGZyb20gXCIuL0Zvb3RlclwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKCkge1xuICAvLyBob29rc1xuICB2YXIgW3ZhbCwgc2V0VmFsXSA9IHVzZVN0YXRlKFwiaGVsbG9cIik7XG4gIHZhciBbZGVmLCBzZXREZWZdID0gdXNlU3RhdGUoXCJcIik7XG4gIHZhciBbcGhvbmV0aWMsIHNldFBob25ldGljXSA9IHVzZVN0YXRlKFwiXCIpO1xuICB2YXIgW3NyYywgc2V0U3JjXSA9IHVzZVN0YXRlKFwiXCIpO1xuICB2YXIgW3dvcmQsIHNldFdvcmRdID0gdXNlU3RhdGUoXCJcIik7XG4gIHZhciBbZXhhbXBsZSwgc2V0RXhdID0gdXNlU3RhdGUoXCJcIik7XG5cbiAgY29uc3QgZmV0Y2hXb3JkID0gYXN5bmMgKCkgPT4ge1xuICAgIHRyeSB7XG4gICAgICBsZXQgdXJsID0gYGh0dHBzOi8vYXBpLmRpY3Rpb25hcnlhcGkuZGV2L2FwaS92Mi9lbnRyaWVzL2VuLyR7dmFsfWA7XG4gICAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaCh1cmwpO1xuICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlcy5qc29uKCk7XG5cbiAgICAgIHNldFdvcmQoZGF0YVswXS53b3JkKTtcbiAgICAgIHNldERlZihkYXRhWzBdLm1lYW5pbmdzWzBdLmRlZmluaXRpb25zWzBdLmRlZmluaXRpb24pO1xuICAgICAgc2V0UGhvbmV0aWMoZGF0YVswXS5waG9uZXRpYyk7XG4gICAgICBzZXRFeChkYXRhWzBdLm1lYW5pbmdzWzBdLmRlZmluaXRpb25zWzBdLmV4YW1wbGUpO1xuICAgICAgbGV0IFNSQyA9IGRhdGFbMF0ucGhvbmV0aWNzWzBdLmF1ZGlvO1xuICAgICAgc2V0U3JjKGBodHRwczoke1NSQ31gKTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgc2V0UGhvbmV0aWMoXCJcIik7XG4gICAgICBzZXRXb3JkKFwiXCIpO1xuICAgICAgc2V0RGVmKFwib29wcyEhIGVudGVyIGEgbWVhbmluZ2Z1bCB3b3JkXCIpO1xuICAgICAgc2V0U3JjKFwiXCIpO1xuICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPEhlYWQ+XG4gICAgICAgIDxsaW5rXG4gICAgICAgICAgcmVsPVwic2hvcnRjdXQgaWNvblwiXG4gICAgICAgICAgaHJlZj1cIi4vc3RpY2t5LW5vdGUtc29saWQuc3ZnXCJcbiAgICAgICAgICB0eXBlPVwiaW1hZ2UveC1pY29uXCJcbiAgICAgICAgLz5cbiAgICAgICAgPHRpdGxlPkRpY3Rpb25hcnk8L3RpdGxlPlxuICAgICAgICA8bGlua1xuICAgICAgICAgIGhyZWY9XCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9UG9wcGluczoxMDAsMTAwaXRhbGljLDIwMCwyMDBpdGFsaWMsMzAwLDMwMGl0YWxpYyxyZWd1bGFyLGl0YWxpYyw1MDAsNTAwaXRhbGljLDYwMCw2MDBpdGFsaWMsNzAwLDcwMGl0YWxpYyw4MDAsODAwaXRhbGljLDkwMCw5MDBpdGFsaWNcIlxuICAgICAgICAgIHJlbD1cInN0eWxlc2hlZXRcIlxuICAgICAgICAvPlxuICAgICAgICA8bGlua1xuICAgICAgICAgIGhyZWY9XCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9U291cmNlK0NvZGUrUHJvOjIwMCwyMDBpdGFsaWMsMzAwLDMwMGl0YWxpYyxyZWd1bGFyLGl0YWxpYyw1MDAsNTAwaXRhbGljLDYwMCw2MDBpdGFsaWMsNzAwLDcwMGl0YWxpYyw5MDAsOTAwaXRhbGljXCJcbiAgICAgICAgICByZWw9XCJzdHlsZXNoZWV0XCJcbiAgICAgICAgLz5cbiAgICAgIDwvSGVhZD5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWFpbiBmb250LXBvcHBpbnMgZm9udC1tZWRpdW0gdGV4dC14bCBiZy13aGl0ZSBwLTQgcm91bmRlZC1sZyBzaGFkb3ctMnhsIHctbWFpbiBtLTRcIj5cbiAgICAgICAgPGlucHV0XG4gICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0VmFsKGUudGFyZ2V0LnZhbHVlKX1cbiAgICAgICAgICBjbGFzc05hbWU9XCJvdXRsaW5lLW5vbmUgdGV4dC1jZW50ZXJcIlxuICAgICAgICAvPlxuICAgICAgICA8cCBjbGFzc05hbWU9XCJ3LWZ1bGwgZmxleCBqdXN0aWZ5LWNlbnRlclwiPlxuICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgIG9uQ2xpY2s9e2ZldGNoV29yZH1cbiAgICAgICAgICAgIGNsYXNzTmFtZT1cInRleHQtd2hpdGUgcC0yIHJvdW5kZWQgYmctcHJpbWFyeSBtLTNcIlxuICAgICAgICAgID5cbiAgICAgICAgICAgIFNlYXJjaFxuICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICA8L3A+XG5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICA8c3Bhbj5cbiAgICAgICAgICAgIHt3b3JkfSA8c3Bhbj57cGhvbmV0aWN9PC9zcGFuPlxuICAgICAgICAgIDwvc3Bhbj5cblxuICAgICAgICAgIDxwIGNsYXNzTmFtZT1cIm0tMVwiPntkZWZ9PC9wPlxuICAgICAgICAgIDxwPlxuICAgICAgICAgICAgPHA+ZXhhbXBsZTo8L3A+XG4gICAgICAgICAgICA8cD57ZXhhbXBsZX08L3A+XG4gICAgICAgICAgPC9wPlxuICAgICAgICAgIDxhdWRpbyBzcmM9e3NyY30gY29udHJvbHM+PC9hdWRpbz5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxGb290ZXI+PC9Gb290ZXI+XG4gICAgPC8+XG4gICk7XG59XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2hlYWRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIpOyJdLCJuYW1lcyI6WyJIZWFkZXIiLCJMaW5rIiwicHJvcHMiLCJzcmMiLCJ0aXRsZSIsIkhlYWQiLCJ1c2VTdGF0ZSIsIkZvb3RlciIsIkhvbWUiLCJ2YWwiLCJzZXRWYWwiLCJkZWYiLCJzZXREZWYiLCJwaG9uZXRpYyIsInNldFBob25ldGljIiwic2V0U3JjIiwid29yZCIsInNldFdvcmQiLCJleGFtcGxlIiwic2V0RXgiLCJmZXRjaFdvcmQiLCJ1cmwiLCJyZXMiLCJmZXRjaCIsImRhdGEiLCJqc29uIiwibWVhbmluZ3MiLCJkZWZpbml0aW9ucyIsImRlZmluaXRpb24iLCJTUkMiLCJwaG9uZXRpY3MiLCJhdWRpbyIsImVycm9yIiwiY29uc29sZSIsImxvZyIsImUiLCJ0YXJnZXQiLCJ2YWx1ZSJdLCJzb3VyY2VSb290IjoiIn0=