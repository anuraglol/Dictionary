"use strict";
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./pages/index.jsx":
/*!*************************!*\
  !*** ./pages/index.jsx ***!
  \*************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Home; }
/* harmony export */ });
/* harmony import */ var C_Users_RANJEET_OneDrive_Documents_my_projects_dictionary_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var C_Users_RANJEET_OneDrive_Documents_my_projects_dictionary_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var C_Users_RANJEET_OneDrive_Documents_my_projects_dictionary_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(C_Users_RANJEET_OneDrive_Documents_my_projects_dictionary_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ "./node_modules/next/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__);
/* module decorator */ module = __webpack_require__.hmd(module);


var _jsxFileName = "C:\\Users\\RANJEET\\OneDrive\\Documents\\my-projects\\dictionary\\pages\\index.jsx",
    _s = $RefreshSig$();






function Home() {
  _s();

  // hooks
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)("hello"),
      val = _useState[0],
      setVal = _useState[1];

  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(""),
      def = _useState2[0],
      setDef = _useState2[1];

  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(""),
      phonetic = _useState3[0],
      setPhonetic = _useState3[1];

  var _useState4 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(""),
      src = _useState4[0],
      setSrc = _useState4[1];

  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(""),
      word = _useState5[0],
      setWord = _useState5[1];

  var fetchWord = /*#__PURE__*/function () {
    var _ref = (0,C_Users_RANJEET_OneDrive_Documents_my_projects_dictionary_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)( /*#__PURE__*/C_Users_RANJEET_OneDrive_Documents_my_projects_dictionary_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee() {
      var url, res, data, SRC;
      return C_Users_RANJEET_OneDrive_Documents_my_projects_dictionary_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              url = "https://api.dictionaryapi.dev/api/v2/entries/en/".concat(val);
              _context.next = 4;
              return fetch(url);

            case 4:
              res = _context.sent;
              _context.next = 7;
              return res.json();

            case 7:
              data = _context.sent;
              setWord(data[0].word);
              setDef(data[0].meanings[0].definitions[0].definition);
              setPhonetic(data[0].phonetic);
              SRC = data[0].phonetics[0].audio;
              setSrc("https:".concat(SRC));
              _context.next = 22;
              break;

            case 15:
              _context.prev = 15;
              _context.t0 = _context["catch"](0);
              setPhonetic("");
              setWord("");
              setDef("oops!! enter a meaningful word");
              setSrc("");
              console.log(_context.t0);

            case 22:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[0, 15]]);
    }));

    return function fetchWord() {
      return _ref.apply(this, arguments);
    };
  }();

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_2___default()), {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("link", {
        rel: "shortcut icon",
        href: "./sticky-note-solid.svg",
        type: "image/x-icon"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 34,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("title", {
        children: "Dictionary"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 39,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("link", {
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
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
      className: "main font-poppins font-medium text-xl bg-white p-4 rounded-lg shadow-2xl w-main",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("input", {
        type: "text",
        onChange: function onChange(e) {
          return setVal(e.target.value);
        },
        className: "outline-none"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 46,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("p", {
        className: "w-full flex justify-center",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("button", {
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
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("br", {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 59,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("span", {
          children: [word, " ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("span", {
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
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("p", {
          children: def
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 64,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("audio", {
          src: src,
          controls: true
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 65,
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

_s(Home, "Cfdi5P7l1X9PjGQVc6+sZQ/C1Xo=");

_c = Home;

var _c;

$RefreshReg$(_c, "Home");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguNjczNDY0ZDUwY2FkZjJjOTY0NzcuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7OztBQUVlLFNBQVNFLElBQVQsR0FBZ0I7QUFBQTs7QUFDN0I7QUFDQSxrQkFBb0JELCtDQUFRLENBQUMsT0FBRCxDQUE1QjtBQUFBLE1BQUtFLEdBQUw7QUFBQSxNQUFVQyxNQUFWOztBQUNBLG1CQUFvQkgsK0NBQVEsQ0FBQyxFQUFELENBQTVCO0FBQUEsTUFBS0ksR0FBTDtBQUFBLE1BQVVDLE1BQVY7O0FBQ0EsbUJBQThCTCwrQ0FBUSxDQUFDLEVBQUQsQ0FBdEM7QUFBQSxNQUFLTSxRQUFMO0FBQUEsTUFBZUMsV0FBZjs7QUFDQSxtQkFBb0JQLCtDQUFRLENBQUMsRUFBRCxDQUE1QjtBQUFBLE1BQUtRLEdBQUw7QUFBQSxNQUFVQyxNQUFWOztBQUNBLG1CQUFzQlQsK0NBQVEsQ0FBQyxFQUFELENBQTlCO0FBQUEsTUFBS1UsSUFBTDtBQUFBLE1BQVdDLE9BQVg7O0FBRUEsTUFBTUMsU0FBUztBQUFBLHFVQUFHO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRVZDLGNBQUFBLEdBRlUsNkRBRStDWCxHQUYvQztBQUFBO0FBQUEscUJBR0lZLEtBQUssQ0FBQ0QsR0FBRCxDQUhUOztBQUFBO0FBR1JFLGNBQUFBLEdBSFE7QUFBQTtBQUFBLHFCQUlLQSxHQUFHLENBQUNDLElBQUosRUFKTDs7QUFBQTtBQUlSQyxjQUFBQSxJQUpRO0FBTWROLGNBQUFBLE9BQU8sQ0FBQ00sSUFBSSxDQUFDLENBQUQsQ0FBSixDQUFRUCxJQUFULENBQVA7QUFDQUwsY0FBQUEsTUFBTSxDQUFDWSxJQUFJLENBQUMsQ0FBRCxDQUFKLENBQVFDLFFBQVIsQ0FBaUIsQ0FBakIsRUFBb0JDLFdBQXBCLENBQWdDLENBQWhDLEVBQW1DQyxVQUFwQyxDQUFOO0FBQ0FiLGNBQUFBLFdBQVcsQ0FBQ1UsSUFBSSxDQUFDLENBQUQsQ0FBSixDQUFRWCxRQUFULENBQVg7QUFDSWUsY0FBQUEsR0FUVSxHQVNKSixJQUFJLENBQUMsQ0FBRCxDQUFKLENBQVFLLFNBQVIsQ0FBa0IsQ0FBbEIsRUFBcUJDLEtBVGpCO0FBVWRkLGNBQUFBLE1BQU0saUJBQVVZLEdBQVYsRUFBTjtBQVZjO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBWWRkLGNBQUFBLFdBQVcsQ0FBQyxFQUFELENBQVg7QUFDQUksY0FBQUEsT0FBTyxDQUFDLEVBQUQsQ0FBUDtBQUNBTixjQUFBQSxNQUFNLENBQUMsZ0NBQUQsQ0FBTjtBQUNBSSxjQUFBQSxNQUFNLENBQUMsRUFBRCxDQUFOO0FBQ0FlLGNBQUFBLE9BQU8sQ0FBQ0MsR0FBUjs7QUFoQmM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBSDs7QUFBQSxvQkFBVGIsU0FBUztBQUFBO0FBQUE7QUFBQSxLQUFmOztBQW1CQSxzQkFDRTtBQUFBLDRCQUNFLDhEQUFDLGtEQUFEO0FBQUEsOEJBQ0U7QUFDRSxXQUFHLEVBQUMsZUFETjtBQUVFLFlBQUksRUFBQyx5QkFGUDtBQUdFLFlBQUksRUFBQztBQUhQO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FERixlQU1FO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBTkYsZUFPRTtBQUNFLFlBQUksRUFBQyxnTEFEUDtBQUVFLFdBQUcsRUFBQztBQUZOO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FQRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFERixlQWFFO0FBQUssZUFBUyxFQUFDLGlGQUFmO0FBQUEsOEJBQ0U7QUFDRSxZQUFJLEVBQUMsTUFEUDtBQUVFLGdCQUFRLEVBQUUsa0JBQUNjLENBQUQ7QUFBQSxpQkFBT3ZCLE1BQU0sQ0FBQ3VCLENBQUMsQ0FBQ0MsTUFBRixDQUFTQyxLQUFWLENBQWI7QUFBQSxTQUZaO0FBR0UsaUJBQVMsRUFBQztBQUhaO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FERixlQU1FO0FBQUcsaUJBQVMsRUFBQyw0QkFBYjtBQUFBLCtCQUNFO0FBQ0UsaUJBQU8sRUFBRWhCLFNBRFg7QUFFRSxtQkFBUyxFQUFDLHVDQUZaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQU5GLGVBY0U7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQWRGLGVBZUU7QUFBQSxnQ0FDRTtBQUFBLHFCQUNHRixJQURILG9CQUNTO0FBQUEsc0JBQU9KO0FBQVA7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFEVDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBREYsZUFJRTtBQUFBLG9CQUFJRjtBQUFKO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBSkYsZUFLRTtBQUFPLGFBQUcsRUFBRUksR0FBWjtBQUFpQixrQkFBUTtBQUF6QjtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUxGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQWZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQWJGO0FBQUEsa0JBREY7QUF1Q0Q7O0dBbEV1QlA7O0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2luZGV4LmpzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCI7XG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKCkge1xuICAvLyBob29rc1xuICB2YXIgW3ZhbCwgc2V0VmFsXSA9IHVzZVN0YXRlKFwiaGVsbG9cIik7XG4gIHZhciBbZGVmLCBzZXREZWZdID0gdXNlU3RhdGUoXCJcIik7XG4gIHZhciBbcGhvbmV0aWMsIHNldFBob25ldGljXSA9IHVzZVN0YXRlKFwiXCIpO1xuICB2YXIgW3NyYywgc2V0U3JjXSA9IHVzZVN0YXRlKFwiXCIpO1xuICB2YXIgW3dvcmQsIHNldFdvcmRdID0gdXNlU3RhdGUoXCJcIik7XG5cbiAgY29uc3QgZmV0Y2hXb3JkID0gYXN5bmMgKCkgPT4ge1xuICAgIHRyeSB7XG4gICAgICBsZXQgdXJsID0gYGh0dHBzOi8vYXBpLmRpY3Rpb25hcnlhcGkuZGV2L2FwaS92Mi9lbnRyaWVzL2VuLyR7dmFsfWA7XG4gICAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaCh1cmwpO1xuICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlcy5qc29uKCk7XG5cbiAgICAgIHNldFdvcmQoZGF0YVswXS53b3JkKTtcbiAgICAgIHNldERlZihkYXRhWzBdLm1lYW5pbmdzWzBdLmRlZmluaXRpb25zWzBdLmRlZmluaXRpb24pO1xuICAgICAgc2V0UGhvbmV0aWMoZGF0YVswXS5waG9uZXRpYyk7XG4gICAgICBsZXQgU1JDID0gZGF0YVswXS5waG9uZXRpY3NbMF0uYXVkaW87XG4gICAgICBzZXRTcmMoYGh0dHBzOiR7U1JDfWApO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBzZXRQaG9uZXRpYyhcIlwiKTtcbiAgICAgIHNldFdvcmQoXCJcIik7XG4gICAgICBzZXREZWYoXCJvb3BzISEgZW50ZXIgYSBtZWFuaW5nZnVsIHdvcmRcIik7XG4gICAgICBzZXRTcmMoXCJcIik7XG4gICAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gICAgfVxuICB9O1xuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8SGVhZD5cbiAgICAgICAgPGxpbmtcbiAgICAgICAgICByZWw9XCJzaG9ydGN1dCBpY29uXCJcbiAgICAgICAgICBocmVmPVwiLi9zdGlja3ktbm90ZS1zb2xpZC5zdmdcIlxuICAgICAgICAgIHR5cGU9XCJpbWFnZS94LWljb25cIlxuICAgICAgICAvPlxuICAgICAgICA8dGl0bGU+RGljdGlvbmFyeTwvdGl0bGU+XG4gICAgICAgIDxsaW5rXG4gICAgICAgICAgaHJlZj1cImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1Qb3BwaW5zOjEwMCwxMDBpdGFsaWMsMjAwLDIwMGl0YWxpYywzMDAsMzAwaXRhbGljLHJlZ3VsYXIsaXRhbGljLDUwMCw1MDBpdGFsaWMsNjAwLDYwMGl0YWxpYyw3MDAsNzAwaXRhbGljLDgwMCw4MDBpdGFsaWMsOTAwLDkwMGl0YWxpY1wiXG4gICAgICAgICAgcmVsPVwic3R5bGVzaGVldFwiXG4gICAgICAgIC8+XG4gICAgICA8L0hlYWQ+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1haW4gZm9udC1wb3BwaW5zIGZvbnQtbWVkaXVtIHRleHQteGwgYmctd2hpdGUgcC00IHJvdW5kZWQtbGcgc2hhZG93LTJ4bCB3LW1haW5cIj5cbiAgICAgICAgPGlucHV0XG4gICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0VmFsKGUudGFyZ2V0LnZhbHVlKX1cbiAgICAgICAgICBjbGFzc05hbWU9XCJvdXRsaW5lLW5vbmVcIlxuICAgICAgICAvPlxuICAgICAgICA8cCBjbGFzc05hbWU9XCJ3LWZ1bGwgZmxleCBqdXN0aWZ5LWNlbnRlclwiPlxuICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgIG9uQ2xpY2s9e2ZldGNoV29yZH1cbiAgICAgICAgICAgIGNsYXNzTmFtZT1cInRleHQtd2hpdGUgcC0yIHJvdW5kZWQgYmctcHJpbWFyeSBtLTNcIlxuICAgICAgICAgID5cbiAgICAgICAgICAgIFNlYXJjaFxuICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICA8L3A+XG4gICAgICAgIDxiciAvPlxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIDxzcGFuPlxuICAgICAgICAgICAge3dvcmR9IDxzcGFuPntwaG9uZXRpY308L3NwYW4+XG4gICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgIDxwPntkZWZ9PC9wPlxuICAgICAgICAgIDxhdWRpbyBzcmM9e3NyY30gY29udHJvbHM+PC9hdWRpbz5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8Lz5cbiAgKTtcbn1cbiJdLCJuYW1lcyI6WyJIZWFkIiwidXNlU3RhdGUiLCJIb21lIiwidmFsIiwic2V0VmFsIiwiZGVmIiwic2V0RGVmIiwicGhvbmV0aWMiLCJzZXRQaG9uZXRpYyIsInNyYyIsInNldFNyYyIsIndvcmQiLCJzZXRXb3JkIiwiZmV0Y2hXb3JkIiwidXJsIiwiZmV0Y2giLCJyZXMiLCJqc29uIiwiZGF0YSIsIm1lYW5pbmdzIiwiZGVmaW5pdGlvbnMiLCJkZWZpbml0aW9uIiwiU1JDIiwicGhvbmV0aWNzIiwiYXVkaW8iLCJjb25zb2xlIiwibG9nIiwiZSIsInRhcmdldCIsInZhbHVlIl0sInNvdXJjZVJvb3QiOiIifQ==