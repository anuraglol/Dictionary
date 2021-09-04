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
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("p", {
          children: def
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 65,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("audio", {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguZGZhZDM5YjZlMmVkOWZjZTljY2IuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7OztBQUVlLFNBQVNFLElBQVQsR0FBZ0I7QUFBQTs7QUFDN0I7QUFDQSxrQkFBb0JELCtDQUFRLENBQUMsT0FBRCxDQUE1QjtBQUFBLE1BQUtFLEdBQUw7QUFBQSxNQUFVQyxNQUFWOztBQUNBLG1CQUFvQkgsK0NBQVEsQ0FBQyxFQUFELENBQTVCO0FBQUEsTUFBS0ksR0FBTDtBQUFBLE1BQVVDLE1BQVY7O0FBQ0EsbUJBQThCTCwrQ0FBUSxDQUFDLEVBQUQsQ0FBdEM7QUFBQSxNQUFLTSxRQUFMO0FBQUEsTUFBZUMsV0FBZjs7QUFDQSxtQkFBb0JQLCtDQUFRLENBQUMsRUFBRCxDQUE1QjtBQUFBLE1BQUtRLEdBQUw7QUFBQSxNQUFVQyxNQUFWOztBQUNBLG1CQUFzQlQsK0NBQVEsQ0FBQyxFQUFELENBQTlCO0FBQUEsTUFBS1UsSUFBTDtBQUFBLE1BQVdDLE9BQVg7O0FBRUEsTUFBTUMsU0FBUztBQUFBLHFVQUFHO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRVZDLGNBQUFBLEdBRlUsNkRBRStDWCxHQUYvQztBQUFBO0FBQUEscUJBR0lZLEtBQUssQ0FBQ0QsR0FBRCxDQUhUOztBQUFBO0FBR1JFLGNBQUFBLEdBSFE7QUFBQTtBQUFBLHFCQUlLQSxHQUFHLENBQUNDLElBQUosRUFKTDs7QUFBQTtBQUlSQyxjQUFBQSxJQUpRO0FBTWROLGNBQUFBLE9BQU8sQ0FBQ00sSUFBSSxDQUFDLENBQUQsQ0FBSixDQUFRUCxJQUFULENBQVA7QUFDQUwsY0FBQUEsTUFBTSxDQUFDWSxJQUFJLENBQUMsQ0FBRCxDQUFKLENBQVFDLFFBQVIsQ0FBaUIsQ0FBakIsRUFBb0JDLFdBQXBCLENBQWdDLENBQWhDLEVBQW1DQyxVQUFwQyxDQUFOO0FBQ0FiLGNBQUFBLFdBQVcsQ0FBQ1UsSUFBSSxDQUFDLENBQUQsQ0FBSixDQUFRWCxRQUFULENBQVg7QUFDSWUsY0FBQUEsR0FUVSxHQVNKSixJQUFJLENBQUMsQ0FBRCxDQUFKLENBQVFLLFNBQVIsQ0FBa0IsQ0FBbEIsRUFBcUJDLEtBVGpCO0FBVWRkLGNBQUFBLE1BQU0saUJBQVVZLEdBQVYsRUFBTjtBQVZjO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBWWRkLGNBQUFBLFdBQVcsQ0FBQyxFQUFELENBQVg7QUFDQUksY0FBQUEsT0FBTyxDQUFDLEVBQUQsQ0FBUDtBQUNBTixjQUFBQSxNQUFNLENBQUMsZ0NBQUQsQ0FBTjtBQUNBSSxjQUFBQSxNQUFNLENBQUMsRUFBRCxDQUFOO0FBQ0FlLGNBQUFBLE9BQU8sQ0FBQ0MsR0FBUjs7QUFoQmM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBSDs7QUFBQSxvQkFBVGIsU0FBUztBQUFBO0FBQUE7QUFBQSxLQUFmOztBQW1CQSxzQkFDRTtBQUFBLDRCQUNFLDhEQUFDLGtEQUFEO0FBQUEsOEJBQ0U7QUFDRSxXQUFHLEVBQUMsZUFETjtBQUVFLFlBQUksRUFBQyx5QkFGUDtBQUdFLFlBQUksRUFBQztBQUhQO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FERixlQU1FO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBTkYsZUFPRTtBQUNFLFlBQUksRUFBQyxnTEFEUDtBQUVFLFdBQUcsRUFBQztBQUZOO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FQRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFERixlQWFFO0FBQUssZUFBUyxFQUFDLGlGQUFmO0FBQUEsOEJBQ0U7QUFDRSxZQUFJLEVBQUMsTUFEUDtBQUVFLGdCQUFRLEVBQUUsa0JBQUNjLENBQUQ7QUFBQSxpQkFBT3ZCLE1BQU0sQ0FBQ3VCLENBQUMsQ0FBQ0MsTUFBRixDQUFTQyxLQUFWLENBQWI7QUFBQSxTQUZaO0FBR0UsaUJBQVMsRUFBQztBQUhaO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FERixlQU1FO0FBQUcsaUJBQVMsRUFBQyw0QkFBYjtBQUFBLCtCQUNFO0FBQ0UsaUJBQU8sRUFBRWhCLFNBRFg7QUFFRSxtQkFBUyxFQUFDLHVDQUZaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQU5GLGVBZUU7QUFBQSxnQ0FDRTtBQUFBLHFCQUNHRixJQURILG9CQUNTO0FBQUEsc0JBQU9KO0FBQVA7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFEVDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBREYsZUFJRTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUpGLGVBS0U7QUFBQSxvQkFBSUY7QUFBSjtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUxGLGVBTUU7QUFBTyxhQUFHLEVBQUVJLEdBQVo7QUFBaUIsa0JBQVE7QUFBekI7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFORjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FmRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFiRjtBQUFBLGtCQURGO0FBd0NEOztHQW5FdUJQOztLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9pbmRleC5qc3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEhlYWQgZnJvbSBcIm5leHQvaGVhZFwiO1xuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSgpIHtcbiAgLy8gaG9va3NcbiAgdmFyIFt2YWwsIHNldFZhbF0gPSB1c2VTdGF0ZShcImhlbGxvXCIpO1xuICB2YXIgW2RlZiwgc2V0RGVmXSA9IHVzZVN0YXRlKFwiXCIpO1xuICB2YXIgW3Bob25ldGljLCBzZXRQaG9uZXRpY10gPSB1c2VTdGF0ZShcIlwiKTtcbiAgdmFyIFtzcmMsIHNldFNyY10gPSB1c2VTdGF0ZShcIlwiKTtcbiAgdmFyIFt3b3JkLCBzZXRXb3JkXSA9IHVzZVN0YXRlKFwiXCIpO1xuXG4gIGNvbnN0IGZldGNoV29yZCA9IGFzeW5jICgpID0+IHtcbiAgICB0cnkge1xuICAgICAgbGV0IHVybCA9IGBodHRwczovL2FwaS5kaWN0aW9uYXJ5YXBpLmRldi9hcGkvdjIvZW50cmllcy9lbi8ke3ZhbH1gO1xuICAgICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2godXJsKTtcbiAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXMuanNvbigpO1xuXG4gICAgICBzZXRXb3JkKGRhdGFbMF0ud29yZCk7XG4gICAgICBzZXREZWYoZGF0YVswXS5tZWFuaW5nc1swXS5kZWZpbml0aW9uc1swXS5kZWZpbml0aW9uKTtcbiAgICAgIHNldFBob25ldGljKGRhdGFbMF0ucGhvbmV0aWMpO1xuICAgICAgbGV0IFNSQyA9IGRhdGFbMF0ucGhvbmV0aWNzWzBdLmF1ZGlvO1xuICAgICAgc2V0U3JjKGBodHRwczoke1NSQ31gKTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgc2V0UGhvbmV0aWMoXCJcIik7XG4gICAgICBzZXRXb3JkKFwiXCIpO1xuICAgICAgc2V0RGVmKFwib29wcyEhIGVudGVyIGEgbWVhbmluZ2Z1bCB3b3JkXCIpO1xuICAgICAgc2V0U3JjKFwiXCIpO1xuICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPEhlYWQ+XG4gICAgICAgIDxsaW5rXG4gICAgICAgICAgcmVsPVwic2hvcnRjdXQgaWNvblwiXG4gICAgICAgICAgaHJlZj1cIi4vc3RpY2t5LW5vdGUtc29saWQuc3ZnXCJcbiAgICAgICAgICB0eXBlPVwiaW1hZ2UveC1pY29uXCJcbiAgICAgICAgLz5cbiAgICAgICAgPHRpdGxlPkRpY3Rpb25hcnk8L3RpdGxlPlxuICAgICAgICA8bGlua1xuICAgICAgICAgIGhyZWY9XCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9UG9wcGluczoxMDAsMTAwaXRhbGljLDIwMCwyMDBpdGFsaWMsMzAwLDMwMGl0YWxpYyxyZWd1bGFyLGl0YWxpYyw1MDAsNTAwaXRhbGljLDYwMCw2MDBpdGFsaWMsNzAwLDcwMGl0YWxpYyw4MDAsODAwaXRhbGljLDkwMCw5MDBpdGFsaWNcIlxuICAgICAgICAgIHJlbD1cInN0eWxlc2hlZXRcIlxuICAgICAgICAvPlxuICAgICAgPC9IZWFkPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYWluIGZvbnQtcG9wcGlucyBmb250LW1lZGl1bSB0ZXh0LXhsIGJnLXdoaXRlIHAtNCByb3VuZGVkLWxnIHNoYWRvdy0yeGwgdy1tYWluXCI+XG4gICAgICAgIDxpbnB1dFxuICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldFZhbChlLnRhcmdldC52YWx1ZSl9XG4gICAgICAgICAgY2xhc3NOYW1lPVwib3V0bGluZS1ub25lXCJcbiAgICAgICAgLz5cbiAgICAgICAgPHAgY2xhc3NOYW1lPVwidy1mdWxsIGZsZXgganVzdGlmeS1jZW50ZXJcIj5cbiAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICBvbkNsaWNrPXtmZXRjaFdvcmR9XG4gICAgICAgICAgICBjbGFzc05hbWU9XCJ0ZXh0LXdoaXRlIHAtMiByb3VuZGVkIGJnLXByaW1hcnkgbS0zXCJcbiAgICAgICAgICA+XG4gICAgICAgICAgICBTZWFyY2hcbiAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgPC9wPlxuXG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgPHNwYW4+XG4gICAgICAgICAgICB7d29yZH0gPHNwYW4+e3Bob25ldGljfTwvc3Bhbj5cbiAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgPGJyIC8+XG4gICAgICAgICAgPHA+e2RlZn08L3A+XG4gICAgICAgICAgPGF1ZGlvIHNyYz17c3JjfSBjb250cm9scz48L2F1ZGlvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvPlxuICApO1xufVxuIl0sIm5hbWVzIjpbIkhlYWQiLCJ1c2VTdGF0ZSIsIkhvbWUiLCJ2YWwiLCJzZXRWYWwiLCJkZWYiLCJzZXREZWYiLCJwaG9uZXRpYyIsInNldFBob25ldGljIiwic3JjIiwic2V0U3JjIiwid29yZCIsInNldFdvcmQiLCJmZXRjaFdvcmQiLCJ1cmwiLCJmZXRjaCIsInJlcyIsImpzb24iLCJkYXRhIiwibWVhbmluZ3MiLCJkZWZpbml0aW9ucyIsImRlZmluaXRpb24iLCJTUkMiLCJwaG9uZXRpY3MiLCJhdWRpbyIsImNvbnNvbGUiLCJsb2ciLCJlIiwidGFyZ2V0IiwidmFsdWUiXSwic291cmNlUm9vdCI6IiJ9