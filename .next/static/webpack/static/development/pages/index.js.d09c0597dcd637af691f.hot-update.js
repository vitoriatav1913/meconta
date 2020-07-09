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
  }, "Fa\xE7a sua Cr\xEDtica ou Sugest\xE3o "))), !data && __jsx("p", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 17
    }
  }), !error && data && data.showCoupon && __jsx("p", {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC5qcyJdLCJuYW1lcyI6WyJmZXRjaGVyIiwiZmV0Y2giLCJ0aGVuIiwicmVzIiwianNvbiIsIkluZGV4IiwidXNlU1dSIiwiZGF0YSIsImVycm9yIiwic2hvd0NvdXBvbiIsIm1lc3NhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxPQUFPLEdBQUcsU0FBVkEsT0FBVTtBQUFBLFNBQWFDLEtBQUssTUFBTCxvQkFBZUMsSUFBZixDQUFvQixVQUFBQyxHQUFHO0FBQUEsV0FBSUEsR0FBRyxDQUFDQyxJQUFKLEVBQUo7QUFBQSxHQUF2QixDQUFiO0FBQUEsQ0FBaEI7O0FBRUEsSUFBTUMsS0FBSyxHQUFHLFNBQVJBLEtBQVEsR0FBTTtBQUFBOztBQUFBLGdCQUNJQyxtREFBTSxDQUFDLGdCQUFELEVBQWtCTixPQUFsQixDQURWO0FBQUEsTUFDWE8sSUFEVyxXQUNYQSxJQURXO0FBQUEsTUFDTEMsS0FESyxXQUNMQSxLQURLOztBQUdsQixTQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFHLGFBQVMsRUFBQyxtQkFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtIQURGLEVBRUU7QUFBSyxhQUFTLEVBQUMsbUJBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsZ0RBQUQ7QUFBTSxRQUFJLEVBQUMsV0FBWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0M7QUFBRyxhQUFTLEVBQUMsb0VBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSw4Q0FERCxDQURGLENBRkYsRUFPSSxDQUFDRCxJQUFELElBQVU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQVBkLEVBUUcsQ0FBQ0MsS0FBRCxJQUFVRCxJQUFWLElBQWtCQSxJQUFJLENBQUNFLFVBQXZCLElBQ0Q7QUFBRyxhQUFTLEVBQUMsbUJBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFrQ0YsSUFBSSxDQUFDRyxPQUF2QyxDQVRGLENBREE7QUFhRCxDQWhCRDs7R0FBTUwsSztVQUNrQkMsMkM7OztLQURsQkQsSztBQWtCU0Esb0VBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svc3RhdGljXFxkZXZlbG9wbWVudFxccGFnZXNcXGluZGV4LmpzLmQwOWMwNTk3ZGNkNjM3YWY2OTFmLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcclxuaW1wb3J0IHVzZVNXUiBmcm9tICdzd3InXHJcblxyXG5jb25zdCBmZXRjaGVyID0gKC4uLmFyZ3MpID0+IGZldGNoKC4uLmFyZ3MpLnRoZW4ocmVzID0+IHJlcy5qc29uKCkpXHJcblxyXG5jb25zdCBJbmRleCA9ICgpID0+IHtcclxuICBjb25zdCB7ZGF0YSwgZXJyb3J9ID0gdXNlU1dSKCcvYXBpL2dldC1wcm9tbycsZmV0Y2hlcilcclxuXHJcbiAgcmV0dXJuKFxyXG4gIDxkaXY+XHJcbiAgICA8cCBjbGFzc05hbWU9J210LTEyIHRleHQtY2VudGVyJyAgPkVzdGFtb3Mgc2VtcHJlIGF0ZW50b3MgcGFyYSBvdXZpciBub3Nzb3MgY2xpZW50ZXMgZSBtZWxob3Jhcm1vcyBub3Nzb3Mgc2Vydmljb3MuIEUgYWluZGEgdGUgZGFyIFByw6ptaW9zPC9wPlxyXG4gICAgPGRpdiBjbGFzc05hbWU9J3RleHQtY2VudGVyIG15LTEyJyA+XHJcbiAgICAgIDxMaW5rIGhyZWY9Jy9wZXNxdWlzYSc+XHJcbiAgICAgICA8YSBjbGFzc05hbWU9J2JnLWJsdWUtMzAwIHB4LTEyIHB5LTQgZm9udC1ib2xkIHJvdW5kZWQtbGcgc2hhZG93LWxnIGhvdmVyOnNoYWRvdycgPkZhw6dhIHN1YSBDcsOtdGljYSBvdSBTdWdlc3TDo28gPC9hPlxyXG4gICAgICAgIDwvTGluaz5cclxuICAgIDwvZGl2PlxyXG4gICAgeyAhZGF0YSAgJiYgPHA+PC9wPiB9XHJcbiAgICB7IWVycm9yICYmIGRhdGEgJiYgZGF0YS5zaG93Q291cG9uICYmXHJcbiAgICA8cCBjbGFzc05hbWU9J210LTEyIHRleHQtY2VudGVyJz57ZGF0YS5tZXNzYWdlfTwvcD5cclxuICAgIH1cclxuIDwvZGl2PilcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgSW5kZXgiXSwic291cmNlUm9vdCI6IiJ9