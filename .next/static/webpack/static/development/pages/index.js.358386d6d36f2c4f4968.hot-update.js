webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! swr */ "./node_modules/swr/esm/index.js");
var _this = undefined,
    _jsxFileName = "C:\\Users\\dikvi\\Desktop\\meconta\\pages\\index.js",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




var fetcher = function fetcher() {
  return fetch.apply(void 0, arguments).then(function (res) {
    return res.json();
  });
};

var Index = function Index() {
  _s();

  var _useSWR = Object(swr__WEBPACK_IMPORTED_MODULE_2__["default"])('/api/get-promo', fetcher),
      data = _useSWR.data,
      error = _useSWR.error;

  return __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 3
    }
  }, __jsx("p", {
    className: "mt-12 text-center",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 5
    }
  }, "Estamos sempre atentos para ouvir nossos clientes e melhorarmos nossos servicos. E ainda te dar Pr\xEAmios"), __jsx("div", {
    className: "text-center my-12",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 5
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/pesquisa",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 7
    }
  }, __jsx("a", {
    className: "bg-blue-300 px-12 py-4 font-bold rounded-lg shadow-lg hover:shadow",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 8
    }
  }, "Fa\xE7a sua Cr\xEDtica ou Sugest\xE3o "))), !error && data && data.showCoupon && __jsx("p", {
    className: "mt-12 text-center",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 5
    }
  }, data.message));
};

_s(Index, "PLUSh3GLacfZJClYQJks7Deieck=", false, function () {
  return [swr__WEBPACK_IMPORTED_MODULE_2__["default"]];
});

_c = Index;
/* harmony default export */ __webpack_exports__["default"] = (Index);

var _c;

$RefreshReg$(_c, "Index");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports_1 = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports_1;
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
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {
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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC5qcyJdLCJuYW1lcyI6WyJmZXRjaGVyIiwiZmV0Y2giLCJ0aGVuIiwicmVzIiwianNvbiIsIkluZGV4IiwidXNlU1dSIiwiZGF0YSIsImVycm9yIiwic2hvd0NvdXBvbiIsIm1lc3NhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxPQUFPLEdBQUcsU0FBVkEsT0FBVTtBQUFBLFNBQWFDLEtBQUssTUFBTCxvQkFBZUMsSUFBZixDQUFvQixVQUFBQyxHQUFHO0FBQUEsV0FBSUEsR0FBRyxDQUFDQyxJQUFKLEVBQUo7QUFBQSxHQUF2QixDQUFiO0FBQUEsQ0FBaEI7O0FBRUEsSUFBTUMsS0FBSyxHQUFHLFNBQVJBLEtBQVEsR0FBTTtBQUFBOztBQUFBLGdCQUNJQyxtREFBTSxDQUFDLGdCQUFELEVBQWtCTixPQUFsQixDQURWO0FBQUEsTUFDWE8sSUFEVyxXQUNYQSxJQURXO0FBQUEsTUFDTEMsS0FESyxXQUNMQSxLQURLOztBQUdsQixTQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFHLGFBQVMsRUFBQyxtQkFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtIQURGLEVBRUU7QUFBSyxhQUFTLEVBQUMsbUJBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsZ0RBQUQ7QUFBTSxRQUFJLEVBQUMsV0FBWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0M7QUFBRyxhQUFTLEVBQUMsb0VBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSw4Q0FERCxDQURGLENBRkYsRUFRRyxDQUFDQSxLQUFELElBQVVELElBQVYsSUFBa0JBLElBQUksQ0FBQ0UsVUFBdkIsSUFDRDtBQUFHLGFBQVMsRUFBQyxtQkFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQWtDRixJQUFJLENBQUNHLE9BQXZDLENBVEYsQ0FEQTtBQWFELENBaEJEOztHQUFNTCxLO1VBQ2tCQywyQzs7O0tBRGxCRCxLO0FBa0JTQSxvRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9zdGF0aWNcXGRldmVsb3BtZW50XFxwYWdlc1xcaW5kZXguanMuMzU4Mzg2ZDZkMzZmMmM0ZjQ5NjguaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xyXG5pbXBvcnQgdXNlU1dSIGZyb20gJ3N3cidcclxuXHJcbmNvbnN0IGZldGNoZXIgPSAoLi4uYXJncykgPT4gZmV0Y2goLi4uYXJncykudGhlbihyZXMgPT4gcmVzLmpzb24oKSlcclxuXHJcbmNvbnN0IEluZGV4ID0gKCkgPT4ge1xyXG4gIGNvbnN0IHtkYXRhLCBlcnJvcn0gPSB1c2VTV1IoJy9hcGkvZ2V0LXByb21vJyxmZXRjaGVyKVxyXG5cclxuICByZXR1cm4oXHJcbiAgPGRpdj5cclxuICAgIDxwIGNsYXNzTmFtZT0nbXQtMTIgdGV4dC1jZW50ZXInICA+RXN0YW1vcyBzZW1wcmUgYXRlbnRvcyBwYXJhIG91dmlyIG5vc3NvcyBjbGllbnRlcyBlIG1lbGhvcmFybW9zIG5vc3NvcyBzZXJ2aWNvcy4gRSBhaW5kYSB0ZSBkYXIgUHLDqm1pb3M8L3A+XHJcbiAgICA8ZGl2IGNsYXNzTmFtZT0ndGV4dC1jZW50ZXIgbXktMTInID5cclxuICAgICAgPExpbmsgaHJlZj0nL3Blc3F1aXNhJz5cclxuICAgICAgIDxhIGNsYXNzTmFtZT0nYmctYmx1ZS0zMDAgcHgtMTIgcHktNCBmb250LWJvbGQgcm91bmRlZC1sZyBzaGFkb3ctbGcgaG92ZXI6c2hhZG93JyA+RmHDp2Egc3VhIENyw610aWNhIG91IFN1Z2VzdMOjbyA8L2E+XHJcbiAgICAgICAgPC9MaW5rPlxyXG4gICAgPC9kaXY+XHJcbiAgICBcclxuICAgIHshZXJyb3IgJiYgZGF0YSAmJiBkYXRhLnNob3dDb3Vwb24gJiZcclxuICAgIDxwIGNsYXNzTmFtZT0nbXQtMTIgdGV4dC1jZW50ZXInPntkYXRhLm1lc3NhZ2V9PC9wPlxyXG4gICAgfVxyXG4gPC9kaXY+KVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBJbmRleCJdLCJzb3VyY2VSb290IjoiIn0=