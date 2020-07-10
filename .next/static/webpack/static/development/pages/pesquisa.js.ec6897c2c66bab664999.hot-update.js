webpackHotUpdate("static\\development\\pages\\pesquisa.js",{

/***/ "./pages/pesquisa.js":
/*!***************************!*\
  !*** ./pages/pesquisa.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_PageTitle__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/PageTitle */ "./components/PageTitle.js");




var _this = undefined,
    _jsxFileName = "C:\\Users\\dikvi\\Desktop\\meconta\\pages\\pesquisa.js",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }




var Pesquisa = function Pesquisa() {
  _s();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])({
    Nome: '',
    Email: '',
    Whatsapp: '',
    Form: '',
    Nota: 0
  }),
      form = _useState[0],
      setForm = _useState[1];

  var notas = [0, 1, 2, 3, 4, 5];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(false),
      sucess = _useState2[0],
      setSucess = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])({}),
      retorno = _useState3[0],
      setRetorno = _useState3[1];

  var save = /*#__PURE__*/function () {
    var _ref = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee() {
      var response, data;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              _context.next = 3;
              return fetch('/api/save', {
                method: 'POST',
                body: JSON.stringify(form)
              });

            case 3:
              response = _context.sent;
              _context.next = 6;
              return response.json();

            case 6:
              data = _context.sent;
              setSucess(true);
              setRetorno(data);
              _context.next = 13;
              break;

            case 11:
              _context.prev = 11;
              _context.t0 = _context["catch"](0);

            case 13:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[0, 11]]);
    }));

    return function save() {
      return _ref.apply(this, arguments);
    };
  }();

  var onChange = function onChange(evt) {
    var value = evt.target.value;
    var key = evt.target.name;
    setForm(function (old) {
      return _objectSpread(_objectSpread({}, old), {}, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({}, key, value));
    });
  };

  return __jsx("div", {
    className: "pt-12 px-8 py-12 max-w-md mx-auto sm:max-w-xl ",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 9
    }
  }, __jsx(_components_PageTitle__WEBPACK_IMPORTED_MODULE_4__["default"], {
    title: "Pesquisa",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 11
    }
  }), __jsx("h1", {
    className: "text-center font-bold my-6 text-2xl mb-6",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 13
    }
  }, "Cr\xEDticas e Sugest\xF5es"), __jsx("p", {
    className: "text-center",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 13
    }
  }, "Esse estabelecimento est\xE1 atento a todas as sugest\xF5es dos nossos clientes.", __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 114
    }
  }), " E estamos prontos para melhor atender-los "), !sucess && __jsx("div", {
    className: "flex flex-col justify-center",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 25
    }
  }, __jsx("label", {
    className: "font-bold ",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 15
    }
  }, "Seu Nome:"), __jsx("input", {
    type: "text",
    className: "p-4 block shadow  bg-blue-100 my-6  rounded ",
    placeholder: "Nome",
    onChange: onChange,
    name: "Nome",
    value: form.Nome,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 15
    }
  }), __jsx("label", {
    className: "font-bold text-center",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 15
    }
  }, "Email:"), __jsx("input", {
    type: "text",
    className: "lg:w-2/5 lg:mx-auto mx-2 p-4 block shadow bg-blue-100 my-4 rounded",
    placeholder: "Email",
    onChange: onChange,
    name: "Email",
    value: form.Email,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 15
    }
  }), __jsx("label", {
    className: "font-bold text-center",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 15
    }
  }, "Whatsapp:"), __jsx("input", {
    type: "text",
    className: "lg:w-2/5 lg:mx-auto mx-2 p-4 block shadow bg-blue-100 my-4 rounded",
    placeholder: "Whatsapp",
    onChange: onChange,
    name: "Whatsapp",
    value: form.Whatsapp,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 15
    }
  }), __jsx("label", {
    className: "font-bold text-center",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 15
    }
  }, "Digite aqui sua Sugest\xE3o ou Cr\xEDtica:"), __jsx("input", {
    type: "text",
    className: "lg:w-2/5 lg:mx-auto mx-2 p-4 block shadow bg-blue-100 my-4 rounded",
    placeholder: "Form",
    onChange: onChange,
    name: "Form",
    value: form.Form,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 15
    }
  }), __jsx("label", {
    className: "font-bold text-center",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 15
    }
  }, "Nota para o Estabelecimento:"), __jsx("div", {
    className: "flex",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 15
    }
  }, notas.map(function (nota) {
    return __jsx("label", {
      className: "mx-2 block text-center",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 58,
        columnNumber: 23
      }
    }, nota, __jsx("br", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 59,
        columnNumber: 30
      }
    }), __jsx("input", {
      type: "radio",
      name: "Nota",
      value: nota,
      onChange: onChange,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 60,
        columnNumber: 24
      }
    }));
  })), __jsx("button", {
    className: "mx-2 lg:w-2/5 lg:mx-auto bg-blue-300 px-20 p-4 font-bold rounded-lg shadow-lg hover:shadow ",
    onClick: save,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 15
    }
  }, "Enviar")), sucess && __jsx("div", {
    className: "mx-auto",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 24
    }
  }, __jsx("p", {
    className: "mx-2 mb-6 bg-teal-100 border-t-4 border-teal-500 rounded-b text-teal-900 px-4 py-3 shadow-md p-4",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 15
    }
  }, "Obrigado por Participar"), retorno.showCoupon && __jsx("div", {
    className: "text-center  p-4 mb-4",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 39
    }
  }, "Seu Cupom: ", __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 30
    }
  }), __jsx("span", {
    className: "font-bold border text-xl",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 18
    }
  }, retorno.Cupom)), retorno.showCoupon && __jsx("div", {
    className: "text-center border p-4 mb-4",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 39
    }
  }, __jsx("span", {
    className: "font-bold block mb-2",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78,
      columnNumber: 18
    }
  }, retorno.Promo), __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79,
      columnNumber: 18
    }
  }), __jsx("span", {
    className: "italic",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 18
    }
  }, " Tire um print ou foto desta tela e apresente no estabelecimento."))));
};

_s(Pesquisa, "TVzvo9Fs/NsJyXSBu+n93+0dT+o=");

_c = Pesquisa;
/* harmony default export */ __webpack_exports__["default"] = (Pesquisa);

var _c;

$RefreshReg$(_c, "Pesquisa");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9wZXNxdWlzYS5qcyJdLCJuYW1lcyI6WyJQZXNxdWlzYSIsInVzZVN0YXRlIiwiTm9tZSIsIkVtYWlsIiwiV2hhdHNhcHAiLCJGb3JtIiwiTm90YSIsImZvcm0iLCJzZXRGb3JtIiwibm90YXMiLCJzdWNlc3MiLCJzZXRTdWNlc3MiLCJyZXRvcm5vIiwic2V0UmV0b3JubyIsInNhdmUiLCJmZXRjaCIsIm1ldGhvZCIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5IiwicmVzcG9uc2UiLCJqc29uIiwiZGF0YSIsIm9uQ2hhbmdlIiwiZXZ0IiwidmFsdWUiLCJ0YXJnZXQiLCJrZXkiLCJuYW1lIiwib2xkIiwibWFwIiwibm90YSIsInNob3dDb3Vwb24iLCJDdXBvbSIsIlByb21vIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7O0FBRUEsSUFBTUEsUUFBUSxHQUFHLFNBQVhBLFFBQVcsR0FBTTtBQUFBOztBQUFBLGtCQUNLQyxzREFBUSxDQUFDO0FBQ2pDQyxRQUFJLEVBQUUsRUFEMkI7QUFFakNDLFNBQUssRUFBRSxFQUYwQjtBQUdqQ0MsWUFBUSxFQUFFLEVBSHVCO0FBSWpDQyxRQUFJLEVBQUUsRUFKMkI7QUFLakNDLFFBQUksRUFBRTtBQUwyQixHQUFELENBRGI7QUFBQSxNQUNiQyxJQURhO0FBQUEsTUFDUEMsT0FETzs7QUFRckIsTUFBTUMsS0FBSyxHQUFHLENBQUMsQ0FBRCxFQUFJLENBQUosRUFBTyxDQUFQLEVBQVUsQ0FBVixFQUFhLENBQWIsRUFBZ0IsQ0FBaEIsQ0FBZDs7QUFScUIsbUJBU1NSLHNEQUFRLENBQUMsS0FBRCxDQVRqQjtBQUFBLE1BU2JTLE1BVGE7QUFBQSxNQVNMQyxTQVRLOztBQUFBLG1CQVVXVixzREFBUSxDQUFDLEVBQUQsQ0FWbkI7QUFBQSxNQVViVyxPQVZhO0FBQUEsTUFVSkMsVUFWSTs7QUFXckIsTUFBTUMsSUFBSTtBQUFBLGdNQUFH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RyxhQUFTLEVBQUMsa0dBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSwrQkFEUyxFQUdQRSxPQUFPLENBQUNvQixVQUFSLElBQXNCO0FBQUssYUFBUyxFQUFDLHVCQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBQ1Q7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURTLEVBRXJCO0FBQU0sYUFBUyxFQUFDLDBCQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQTZDcEIsT0FBTyxDQUFDcUIsS0FBckQsQ0FGcUIsQ0FIZixFQVNQckIsT0FBTyxDQUFDb0IsVUFBUixJQUFzQjtBQUFLLGFBQVMsRUFBQyw2QkFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ3JCO0FBQU0sYUFBUyxFQUFDLHNCQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQXlDcEIsT0FBTyxDQUFDc0IsS0FBakQsQ0FEcUIsRUFFckI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUZxQixFQUdyQjtBQUFNLGFBQVMsRUFBQyxRQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHlFQUhxQixDQVRmLENBL0JmLENBREo7QUFrREgsQ0FsRkQ7O0dBQU1sQyxROztLQUFBQSxRO0FBbUZTQSx1RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9zdGF0aWNcXGRldmVsb3BtZW50XFxwYWdlc1xccGVzcXVpc2EuanMuZWM2ODk3YzJjNjZiYWI2NjQ5OTkuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgUGFnZVRpdGxlIGZyb20gJy4uL2NvbXBvbmVudHMvUGFnZVRpdGxlJ1xyXG5cclxuY29uc3QgUGVzcXVpc2EgPSAoKSA9PiB7XHJcbiAgY29uc3QgWyBmb3JtLCBzZXRGb3JtIF0gPSB1c2VTdGF0ZSh7XHJcbiAgICBOb21lOiAnJyxcclxuICAgIEVtYWlsOiAnJyxcclxuICAgIFdoYXRzYXBwOiAnJyxcclxuICAgIEZvcm06ICcnLFxyXG4gICAgTm90YTogMFxyXG4gIH0pXHJcbiAgY29uc3Qgbm90YXMgPSBbMCwgMSwgMiwgMywgNCwgNV1cclxuICBjb25zdCBbIHN1Y2Vzcywgc2V0U3VjZXNzIF0gPSB1c2VTdGF0ZShmYWxzZSlcclxuICBjb25zdCBbIHJldG9ybm8sIHNldFJldG9ybm8gXSA9IHVzZVN0YXRlKHt9KVxyXG4gIGNvbnN0IHNhdmUgPSBhc3luYyAoKSA9PiB7XHJcbiAgICBcclxuICAgIHRyeXtcclxuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goJy9hcGkvc2F2ZScse1xyXG4gICAgICAgbWV0aG9kOiAnUE9TVCcsXHJcbiAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShmb3JtKVxyXG4gICB9KVxyXG4gICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpXHJcbiAgIHNldFN1Y2Vzcyh0cnVlKVxyXG4gICBzZXRSZXRvcm5vKGRhdGEpXHJcbn1jYXRjaChlcnIpe1xyXG4gIH1cclxufVxyXG5jb25zdCBvbkNoYW5nZSA9IGV2dCA9PiB7XHJcbiAgY29uc3QgdmFsdWUgPSBldnQudGFyZ2V0LnZhbHVlXHJcbiAgY29uc3Qga2V5ID0gZXZ0LnRhcmdldC5uYW1lXHJcbiAgc2V0Rm9ybShvbGQgPT4gKHtcclxuICAgIC4uLm9sZCxcclxuICAgIFtrZXldOiB2YWx1ZVxyXG4gIH0pKVxyXG59XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdwdC0xMiBweC04IHB5LTEyIG1heC13LW1kIG14LWF1dG8gc206bWF4LXcteGwgJyA+XHJcbiAgICAgICAgICA8UGFnZVRpdGxlIHRpdGxlPSdQZXNxdWlzYScvPlxyXG4gICAgICAgICAgICA8aDEgY2xhc3NOYW1lPSd0ZXh0LWNlbnRlciBmb250LWJvbGQgbXktNiB0ZXh0LTJ4bCBtYi02JyA+Q3LDrXRpY2FzIGUgU3VnZXN0w7VlczwvaDE+XHJcbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT0ndGV4dC1jZW50ZXInPkVzc2UgZXN0YWJlbGVjaW1lbnRvIGVzdMOhIGF0ZW50byBhIHRvZGFzIGFzIHN1Z2VzdMO1ZXMgZG9zIG5vc3NvcyBjbGllbnRlcy48YnIvPiBFIGVzdGFtb3MgcHJvbnRvcyBwYXJhIG1lbGhvciBhdGVuZGVyLWxvcyA8L3A+XHJcbiAgICAgICAgICB7ICFzdWNlc3MgJiYgIDxkaXYgY2xhc3NOYW1lPSdmbGV4IGZsZXgtY29sIGp1c3RpZnktY2VudGVyJyA+XHJcbiAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT0nZm9udC1ib2xkICcgPlNldSBOb21lOjwvbGFiZWw+XHJcblxyXG4gICAgICAgICAgICAgIDxpbnB1dCB0eXBlPSd0ZXh0JyBjbGFzc05hbWU9J3AtNCBibG9jayBzaGFkb3cgIGJnLWJsdWUtMTAwIG15LTYgIHJvdW5kZWQgJyBwbGFjZWhvbGRlcj0nTm9tZScgb25DaGFuZ2U9e29uQ2hhbmdlfSBuYW1lPSdOb21lJyB2YWx1ZT17Zm9ybS5Ob21lfSAvPlxyXG5cclxuICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPSdmb250LWJvbGQgdGV4dC1jZW50ZXInID5FbWFpbDo8L2xhYmVsPlxyXG4gICAgICAgICAgICAgIDxpbnB1dCB0eXBlPSd0ZXh0JyBjbGFzc05hbWU9J2xnOnctMi81IGxnOm14LWF1dG8gbXgtMiBwLTQgYmxvY2sgc2hhZG93IGJnLWJsdWUtMTAwIG15LTQgcm91bmRlZCcgcGxhY2Vob2xkZXI9J0VtYWlsJyBvbkNoYW5nZT17b25DaGFuZ2V9IG5hbWU9J0VtYWlsJyB2YWx1ZT17Zm9ybS5FbWFpbH0gICAvPlxyXG5cclxuICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPSdmb250LWJvbGQgdGV4dC1jZW50ZXInID5XaGF0c2FwcDo8L2xhYmVsPlxyXG4gICAgICAgICAgICAgIDxpbnB1dCB0eXBlPSd0ZXh0JyBjbGFzc05hbWU9J2xnOnctMi81IGxnOm14LWF1dG8gbXgtMiBwLTQgYmxvY2sgc2hhZG93IGJnLWJsdWUtMTAwIG15LTQgcm91bmRlZCcgcGxhY2Vob2xkZXI9J1doYXRzYXBwJyBvbkNoYW5nZT17b25DaGFuZ2V9IG5hbWU9J1doYXRzYXBwJyB2YWx1ZT17Zm9ybS5XaGF0c2FwcH0gLz5cclxuXHJcbiAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT0nZm9udC1ib2xkIHRleHQtY2VudGVyJyA+RGlnaXRlIGFxdWkgc3VhIFN1Z2VzdMOjbyBvdSBDcsOtdGljYTo8L2xhYmVsPlxyXG4gICAgICAgICAgICAgIDxpbnB1dCB0eXBlPSd0ZXh0JyBjbGFzc05hbWU9J2xnOnctMi81IGxnOm14LWF1dG8gbXgtMiBwLTQgYmxvY2sgc2hhZG93IGJnLWJsdWUtMTAwIG15LTQgcm91bmRlZCcgcGxhY2Vob2xkZXI9J0Zvcm0nIG9uQ2hhbmdlPXtvbkNoYW5nZX0gbmFtZT0nRm9ybScgdmFsdWU9e2Zvcm0uRm9ybX0gLz5cclxuXHJcbiAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT0nZm9udC1ib2xkIHRleHQtY2VudGVyJyA+Tm90YSBwYXJhIG8gRXN0YWJlbGVjaW1lbnRvOjwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2ZsZXgnID5cclxuICAgICAgICAgICAgIHtub3Rhcy5tYXAobm90YT0+IHtcclxuICAgICAgICAgICAgICByZXR1cm4gKDxsYWJlbCBjbGFzc05hbWU9J214LTIgYmxvY2sgdGV4dC1jZW50ZXInID5cclxuICAgICAgICAgICAgICAgICAgICAgICB7bm90YX08YnIvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPSdyYWRpbycgbmFtZT0nTm90YScgdmFsdWU9e25vdGF9IG9uQ2hhbmdlPXtvbkNoYW5nZX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD4gKVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT0nbXgtMiBsZzp3LTIvNSBsZzpteC1hdXRvIGJnLWJsdWUtMzAwIHB4LTIwIHAtNCBmb250LWJvbGQgcm91bmRlZC1sZyBzaGFkb3ctbGcgaG92ZXI6c2hhZG93ICcgb25DbGljaz17c2F2ZX0+RW52aWFyPC9idXR0b24+XHJcbiAgICAgICAgICAgIDwvZGl2Pn1cclxuICAgICAgICAgICAge3N1Y2VzcyAmJiA8ZGl2IGNsYXNzTmFtZT0nbXgtYXV0bycgPlxyXG4gICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT0nbXgtMiBtYi02IGJnLXRlYWwtMTAwIGJvcmRlci10LTQgYm9yZGVyLXRlYWwtNTAwIHJvdW5kZWQtYiB0ZXh0LXRlYWwtOTAwIHB4LTQgcHktMyBzaGFkb3ctbWQgcC00JyA+T2JyaWdhZG8gcG9yIFBhcnRpY2lwYXI8L3A+IFxyXG4gICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHJldG9ybm8uc2hvd0NvdXBvbiAmJiA8ZGl2IGNsYXNzTmFtZT0ndGV4dC1jZW50ZXIgIHAtNCBtYi00JyA+XHJcbiAgICAgICAgICAgICAgICAgIFNldSBDdXBvbTogPGJyLz5cclxuICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9J2ZvbnQtYm9sZCBib3JkZXIgdGV4dC14bCcgPntyZXRvcm5vLkN1cG9tfTwvc3Bhbj4gXHJcbiAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHJldG9ybm8uc2hvd0NvdXBvbiAmJiA8ZGl2IGNsYXNzTmFtZT0ndGV4dC1jZW50ZXIgYm9yZGVyIHAtNCBtYi00JyA+XHJcbiAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPSdmb250LWJvbGQgYmxvY2sgbWItMicgPntyZXRvcm5vLlByb21vfTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICA8YnIvPlxyXG4gICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT0naXRhbGljJz4gVGlyZSB1bSBwcmludCBvdSBmb3RvIGRlc3RhIHRlbGEgZSBhcHJlc2VudGUgbm8gZXN0YWJlbGVjaW1lbnRvLjwvc3Bhbj4gXHJcbiAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICA8L2Rpdj4gfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59XHJcbmV4cG9ydCBkZWZhdWx0IFBlc3F1aXNhIl0sInNvdXJjZVJvb3QiOiIifQ==