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
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("br", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 64,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("br", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 65,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("p", {
          children: def
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 66,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("audio", {
          src: src,
          controls: true
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 67,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguMGI5MGUyOTUxMjkwNDAxODAwOWEuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7OztBQUVlLFNBQVNFLElBQVQsR0FBZ0I7QUFBQTs7QUFDN0I7QUFDQSxrQkFBb0JELCtDQUFRLENBQUMsT0FBRCxDQUE1QjtBQUFBLE1BQUtFLEdBQUw7QUFBQSxNQUFVQyxNQUFWOztBQUNBLG1CQUFvQkgsK0NBQVEsQ0FBQyxFQUFELENBQTVCO0FBQUEsTUFBS0ksR0FBTDtBQUFBLE1BQVVDLE1BQVY7O0FBQ0EsbUJBQThCTCwrQ0FBUSxDQUFDLEVBQUQsQ0FBdEM7QUFBQSxNQUFLTSxRQUFMO0FBQUEsTUFBZUMsV0FBZjs7QUFDQSxtQkFBb0JQLCtDQUFRLENBQUMsRUFBRCxDQUE1QjtBQUFBLE1BQUtRLEdBQUw7QUFBQSxNQUFVQyxNQUFWOztBQUNBLG1CQUFzQlQsK0NBQVEsQ0FBQyxFQUFELENBQTlCO0FBQUEsTUFBS1UsSUFBTDtBQUFBLE1BQVdDLE9BQVg7O0FBRUEsTUFBTUMsU0FBUztBQUFBLHFVQUFHO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRVZDLGNBQUFBLEdBRlUsNkRBRStDWCxHQUYvQztBQUFBO0FBQUEscUJBR0lZLEtBQUssQ0FBQ0QsR0FBRCxDQUhUOztBQUFBO0FBR1JFLGNBQUFBLEdBSFE7QUFBQTtBQUFBLHFCQUlLQSxHQUFHLENBQUNDLElBQUosRUFKTDs7QUFBQTtBQUlSQyxjQUFBQSxJQUpRO0FBTWROLGNBQUFBLE9BQU8sQ0FBQ00sSUFBSSxDQUFDLENBQUQsQ0FBSixDQUFRUCxJQUFULENBQVA7QUFDQUwsY0FBQUEsTUFBTSxDQUFDWSxJQUFJLENBQUMsQ0FBRCxDQUFKLENBQVFDLFFBQVIsQ0FBaUIsQ0FBakIsRUFBb0JDLFdBQXBCLENBQWdDLENBQWhDLEVBQW1DQyxVQUFwQyxDQUFOO0FBQ0FiLGNBQUFBLFdBQVcsQ0FBQ1UsSUFBSSxDQUFDLENBQUQsQ0FBSixDQUFRWCxRQUFULENBQVg7QUFDSWUsY0FBQUEsR0FUVSxHQVNKSixJQUFJLENBQUMsQ0FBRCxDQUFKLENBQVFLLFNBQVIsQ0FBa0IsQ0FBbEIsRUFBcUJDLEtBVGpCO0FBVWRkLGNBQUFBLE1BQU0saUJBQVVZLEdBQVYsRUFBTjtBQVZjO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBWWRkLGNBQUFBLFdBQVcsQ0FBQyxFQUFELENBQVg7QUFDQUksY0FBQUEsT0FBTyxDQUFDLEVBQUQsQ0FBUDtBQUNBTixjQUFBQSxNQUFNLENBQUMsZ0NBQUQsQ0FBTjtBQUNBSSxjQUFBQSxNQUFNLENBQUMsRUFBRCxDQUFOO0FBQ0FlLGNBQUFBLE9BQU8sQ0FBQ0MsR0FBUjs7QUFoQmM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBSDs7QUFBQSxvQkFBVGIsU0FBUztBQUFBO0FBQUE7QUFBQSxLQUFmOztBQW1CQSxzQkFDRTtBQUFBLDRCQUNFLDhEQUFDLGtEQUFEO0FBQUEsOEJBQ0U7QUFDRSxXQUFHLEVBQUMsZUFETjtBQUVFLFlBQUksRUFBQyx5QkFGUDtBQUdFLFlBQUksRUFBQztBQUhQO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FERixlQU1FO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBTkYsZUFPRTtBQUNFLFlBQUksRUFBQyxnTEFEUDtBQUVFLFdBQUcsRUFBQztBQUZOO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FQRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFERixlQWFFO0FBQUssZUFBUyxFQUFDLGlGQUFmO0FBQUEsOEJBQ0U7QUFDRSxZQUFJLEVBQUMsTUFEUDtBQUVFLGdCQUFRLEVBQUUsa0JBQUNjLENBQUQ7QUFBQSxpQkFBT3ZCLE1BQU0sQ0FBQ3VCLENBQUMsQ0FBQ0MsTUFBRixDQUFTQyxLQUFWLENBQWI7QUFBQSxTQUZaO0FBR0UsaUJBQVMsRUFBQztBQUhaO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FERixlQU1FO0FBQUcsaUJBQVMsRUFBQyw0QkFBYjtBQUFBLCtCQUNFO0FBQ0UsaUJBQU8sRUFBRWhCLFNBRFg7QUFFRSxtQkFBUyxFQUFDLHVDQUZaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQU5GLGVBZUU7QUFBQSxnQ0FDRTtBQUFBLHFCQUNHRixJQURILG9CQUNTO0FBQUEsc0JBQU9KO0FBQVA7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFEVDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBREYsZUFJRTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUpGLGVBS0U7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFMRixlQU1FO0FBQUEsb0JBQUlGO0FBQUo7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFORixlQU9FO0FBQU8sYUFBRyxFQUFFSSxHQUFaO0FBQWlCLGtCQUFRO0FBQXpCO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBUEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBZkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBYkY7QUFBQSxrQkFERjtBQXlDRDs7R0FwRXVCUDs7S0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIjtcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoKSB7XG4gIC8vIGhvb2tzXG4gIHZhciBbdmFsLCBzZXRWYWxdID0gdXNlU3RhdGUoXCJoZWxsb1wiKTtcbiAgdmFyIFtkZWYsIHNldERlZl0gPSB1c2VTdGF0ZShcIlwiKTtcbiAgdmFyIFtwaG9uZXRpYywgc2V0UGhvbmV0aWNdID0gdXNlU3RhdGUoXCJcIik7XG4gIHZhciBbc3JjLCBzZXRTcmNdID0gdXNlU3RhdGUoXCJcIik7XG4gIHZhciBbd29yZCwgc2V0V29yZF0gPSB1c2VTdGF0ZShcIlwiKTtcblxuICBjb25zdCBmZXRjaFdvcmQgPSBhc3luYyAoKSA9PiB7XG4gICAgdHJ5IHtcbiAgICAgIGxldCB1cmwgPSBgaHR0cHM6Ly9hcGkuZGljdGlvbmFyeWFwaS5kZXYvYXBpL3YyL2VudHJpZXMvZW4vJHt2YWx9YDtcbiAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKHVybCk7XG4gICAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzLmpzb24oKTtcblxuICAgICAgc2V0V29yZChkYXRhWzBdLndvcmQpO1xuICAgICAgc2V0RGVmKGRhdGFbMF0ubWVhbmluZ3NbMF0uZGVmaW5pdGlvbnNbMF0uZGVmaW5pdGlvbik7XG4gICAgICBzZXRQaG9uZXRpYyhkYXRhWzBdLnBob25ldGljKTtcbiAgICAgIGxldCBTUkMgPSBkYXRhWzBdLnBob25ldGljc1swXS5hdWRpbztcbiAgICAgIHNldFNyYyhgaHR0cHM6JHtTUkN9YCk7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIHNldFBob25ldGljKFwiXCIpO1xuICAgICAgc2V0V29yZChcIlwiKTtcbiAgICAgIHNldERlZihcIm9vcHMhISBlbnRlciBhIG1lYW5pbmdmdWwgd29yZFwiKTtcbiAgICAgIHNldFNyYyhcIlwiKTtcbiAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxIZWFkPlxuICAgICAgICA8bGlua1xuICAgICAgICAgIHJlbD1cInNob3J0Y3V0IGljb25cIlxuICAgICAgICAgIGhyZWY9XCIuL3N0aWNreS1ub3RlLXNvbGlkLnN2Z1wiXG4gICAgICAgICAgdHlwZT1cImltYWdlL3gtaWNvblwiXG4gICAgICAgIC8+XG4gICAgICAgIDx0aXRsZT5EaWN0aW9uYXJ5PC90aXRsZT5cbiAgICAgICAgPGxpbmtcbiAgICAgICAgICBocmVmPVwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PVBvcHBpbnM6MTAwLDEwMGl0YWxpYywyMDAsMjAwaXRhbGljLDMwMCwzMDBpdGFsaWMscmVndWxhcixpdGFsaWMsNTAwLDUwMGl0YWxpYyw2MDAsNjAwaXRhbGljLDcwMCw3MDBpdGFsaWMsODAwLDgwMGl0YWxpYyw5MDAsOTAwaXRhbGljXCJcbiAgICAgICAgICByZWw9XCJzdHlsZXNoZWV0XCJcbiAgICAgICAgLz5cbiAgICAgIDwvSGVhZD5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWFpbiBmb250LXBvcHBpbnMgZm9udC1tZWRpdW0gdGV4dC14bCBiZy13aGl0ZSBwLTQgcm91bmRlZC1sZyBzaGFkb3ctMnhsIHctbWFpblwiPlxuICAgICAgICA8aW5wdXRcbiAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRWYWwoZS50YXJnZXQudmFsdWUpfVxuICAgICAgICAgIGNsYXNzTmFtZT1cIm91dGxpbmUtbm9uZVwiXG4gICAgICAgIC8+XG4gICAgICAgIDxwIGNsYXNzTmFtZT1cInctZnVsbCBmbGV4IGp1c3RpZnktY2VudGVyXCI+XG4gICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgb25DbGljaz17ZmV0Y2hXb3JkfVxuICAgICAgICAgICAgY2xhc3NOYW1lPVwidGV4dC13aGl0ZSBwLTIgcm91bmRlZCBiZy1wcmltYXJ5IG0tM1wiXG4gICAgICAgICAgPlxuICAgICAgICAgICAgU2VhcmNoXG4gICAgICAgICAgPC9idXR0b24+XG4gICAgICAgIDwvcD5cblxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIDxzcGFuPlxuICAgICAgICAgICAge3dvcmR9IDxzcGFuPntwaG9uZXRpY308L3NwYW4+XG4gICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgIDxiciAvPlxuICAgICAgICAgIDxiciAvPlxuICAgICAgICAgIDxwPntkZWZ9PC9wPlxuICAgICAgICAgIDxhdWRpbyBzcmM9e3NyY30gY29udHJvbHM+PC9hdWRpbz5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8Lz5cbiAgKTtcbn1cbiJdLCJuYW1lcyI6WyJIZWFkIiwidXNlU3RhdGUiLCJIb21lIiwidmFsIiwic2V0VmFsIiwiZGVmIiwic2V0RGVmIiwicGhvbmV0aWMiLCJzZXRQaG9uZXRpYyIsInNyYyIsInNldFNyYyIsIndvcmQiLCJzZXRXb3JkIiwiZmV0Y2hXb3JkIiwidXJsIiwiZmV0Y2giLCJyZXMiLCJqc29uIiwiZGF0YSIsIm1lYW5pbmdzIiwiZGVmaW5pdGlvbnMiLCJkZWZpbml0aW9uIiwiU1JDIiwicGhvbmV0aWNzIiwiYXVkaW8iLCJjb25zb2xlIiwibG9nIiwiZSIsInRhcmdldCIsInZhbHVlIl0sInNvdXJjZVJvb3QiOiIifQ==