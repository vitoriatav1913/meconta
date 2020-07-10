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
    className: "font-bold text-center",
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
    className: "flex flex-row justify-center",
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9wZXNxdWlzYS5qcyJdLCJuYW1lcyI6WyJQZXNxdWlzYSIsInVzZVN0YXRlIiwiTm9tZSIsIkVtYWlsIiwiV2hhdHNhcHAiLCJGb3JtIiwiTm90YSIsImZvcm0iLCJzZXRGb3JtIiwibm90YXMiLCJzdWNlc3MiLCJzZXRTdWNlc3MiLCJyZXRvcm5vIiwic2V0UmV0b3JubyIsInNhdmUiLCJmZXRjaCIsIm1ldGhvZCIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5IiwicmVzcG9uc2UiLCJqc29uIiwiZGF0YSIsIm9uQ2hhbmdlIiwiZXZ0IiwidmFsdWUiLCJ0YXJnZXQiLCJrZXkiLCJuYW1lIiwib2xkIiwibWFwIiwibm90YSIsInNob3dDb3Vwb24iLCJDdXBvbSIsIlByb21vIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7O0FBRUEsSUFBTUEsUUFBUSxHQUFHLFNBQVhBLFFBQVcsR0FBTTtBQUFBOztBQUFBLGtCQUNLQyxzREFBUSxDQUFDO0FBQ2pDQyxRQUFJLEVBQUUsRUFEMkI7QUFFakNDLFNBQUssRUFBRSxFQUYwQjtBQUdqQ0MsWUFBUSxFQUFFLEVBSHVCO0FBSWpDQyxRQUFJLEVBQUUsRUFKMkI7QUFLakNDLFFBQUksRUFBRTtBQUwyQixHQUFELENBRGI7QUFBQSxNQUNiQyxJQURhO0FBQUEsTUFDUEMsT0FETzs7QUFRckIsTUFBTUMsS0FBSyxHQUFHLENBQUMsQ0FBRCxFQUFJLENBQUosRUFBTyxDQUFQLEVBQVUsQ0FBVixFQUFhLENBQWIsRUFBZ0IsQ0FBaEIsQ0FBZDs7QUFScUIsbUJBU1NSLHNEQUFRLENBQUMsS0FBRCxDQVRqQjtBQUFBLE1BU2JTLE1BVGE7QUFBQSxNQVNMQyxTQVRLOztBQUFBLG1CQVVXVixzREFBUSxDQUFDLEVBQUQsQ0FWbkI7QUFBQSxNQVViVyxPQVZhO0FBQUEsTUFVSkMsVUFWSTs7QUFXckIsTUFBTUMsSUFBSTtBQUFBLGdNQUFH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QUFHLGFBQVMsRUFBQyxrR0FBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLCtCQURTLEVBR1BFLE9BQU8sQ0FBQ29CLFVBQVIsSUFBc0I7QUFBSyxhQUFTLEVBQUMsdUJBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFDVDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBRFMsRUFFckI7QUFBTSxhQUFTLEVBQUMsMEJBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBNkNwQixPQUFPLENBQUNxQixLQUFyRCxDQUZxQixDQUhmLEVBU1ByQixPQUFPLENBQUNvQixVQUFSLElBQXNCO0FBQUssYUFBUyxFQUFDLDZCQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDckI7QUFBTSxhQUFTLEVBQUMsc0JBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBeUNwQixPQUFPLENBQUNzQixLQUFqRCxDQURxQixFQUVyQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBRnFCLEVBR3JCO0FBQU0sYUFBUyxFQUFDLFFBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEseUVBSHFCLENBVGYsQ0EvQmYsQ0FESjtBQWtESCxDQWxGRDs7R0FBTWxDLFE7O0tBQUFBLFE7QUFtRlNBLHVFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3N0YXRpY1xcZGV2ZWxvcG1lbnRcXHBhZ2VzXFxwZXNxdWlzYS5qcy5mOTI1NTM1NzVkYTcwZTA3MzRiOS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCBQYWdlVGl0bGUgZnJvbSAnLi4vY29tcG9uZW50cy9QYWdlVGl0bGUnXHJcblxyXG5jb25zdCBQZXNxdWlzYSA9ICgpID0+IHtcclxuICBjb25zdCBbIGZvcm0sIHNldEZvcm0gXSA9IHVzZVN0YXRlKHtcclxuICAgIE5vbWU6ICcnLFxyXG4gICAgRW1haWw6ICcnLFxyXG4gICAgV2hhdHNhcHA6ICcnLFxyXG4gICAgRm9ybTogJycsXHJcbiAgICBOb3RhOiAwXHJcbiAgfSlcclxuICBjb25zdCBub3RhcyA9IFswLCAxLCAyLCAzLCA0LCA1XVxyXG4gIGNvbnN0IFsgc3VjZXNzLCBzZXRTdWNlc3MgXSA9IHVzZVN0YXRlKGZhbHNlKVxyXG4gIGNvbnN0IFsgcmV0b3Jubywgc2V0UmV0b3JubyBdID0gdXNlU3RhdGUoe30pXHJcbiAgY29uc3Qgc2F2ZSA9IGFzeW5jICgpID0+IHtcclxuICAgIFxyXG4gICAgdHJ5e1xyXG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCgnL2FwaS9zYXZlJyx7XHJcbiAgICAgICBtZXRob2Q6ICdQT1NUJyxcclxuICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KGZvcm0pXHJcbiAgIH0pXHJcbiAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKClcclxuICAgc2V0U3VjZXNzKHRydWUpXHJcbiAgIHNldFJldG9ybm8oZGF0YSlcclxufWNhdGNoKGVycil7XHJcbiAgfVxyXG59XHJcbmNvbnN0IG9uQ2hhbmdlID0gZXZ0ID0+IHtcclxuICBjb25zdCB2YWx1ZSA9IGV2dC50YXJnZXQudmFsdWVcclxuICBjb25zdCBrZXkgPSBldnQudGFyZ2V0Lm5hbWVcclxuICBzZXRGb3JtKG9sZCA9PiAoe1xyXG4gICAgLi4ub2xkLFxyXG4gICAgW2tleV06IHZhbHVlXHJcbiAgfSkpXHJcbn1cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J3B0LTEyIHB4LTggcHktMTIgbWF4LXctbWQgbXgtYXV0byBzbTptYXgtdy14bCAnID5cclxuICAgICAgICAgIDxQYWdlVGl0bGUgdGl0bGU9J1Blc3F1aXNhJy8+XHJcbiAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9J3RleHQtY2VudGVyIGZvbnQtYm9sZCBteS02IHRleHQtMnhsIG1iLTYnID5DcsOtdGljYXMgZSBTdWdlc3TDtWVzPC9oMT5cclxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPSd0ZXh0LWNlbnRlcic+RXNzZSBlc3RhYmVsZWNpbWVudG8gZXN0w6EgYXRlbnRvIGEgdG9kYXMgYXMgc3VnZXN0w7VlcyBkb3Mgbm9zc29zIGNsaWVudGVzLjxici8+IEUgZXN0YW1vcyBwcm9udG9zIHBhcmEgbWVsaG9yIGF0ZW5kZXItbG9zIDwvcD5cclxuICAgICAgICAgIHsgIXN1Y2VzcyAmJiAgPGRpdiBjbGFzc05hbWU9J2ZsZXggZmxleC1jb2wganVzdGlmeS1jZW50ZXInID5cclxuICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPSdmb250LWJvbGQgdGV4dC1jZW50ZXInPlNldSBOb21lOjwvbGFiZWw+XHJcblxyXG4gICAgICAgICAgICAgIDxpbnB1dCB0eXBlPSd0ZXh0JyBjbGFzc05hbWU9J3AtNCBibG9jayBzaGFkb3cgIGJnLWJsdWUtMTAwIG15LTYgIHJvdW5kZWQgJyBwbGFjZWhvbGRlcj0nTm9tZScgb25DaGFuZ2U9e29uQ2hhbmdlfSBuYW1lPSdOb21lJyB2YWx1ZT17Zm9ybS5Ob21lfSAvPlxyXG5cclxuICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPSdmb250LWJvbGQgdGV4dC1jZW50ZXInID5FbWFpbDo8L2xhYmVsPlxyXG4gICAgICAgICAgICAgIDxpbnB1dCB0eXBlPSd0ZXh0JyBjbGFzc05hbWU9J2xnOnctMi81IGxnOm14LWF1dG8gbXgtMiBwLTQgYmxvY2sgc2hhZG93IGJnLWJsdWUtMTAwIG15LTQgcm91bmRlZCcgcGxhY2Vob2xkZXI9J0VtYWlsJyBvbkNoYW5nZT17b25DaGFuZ2V9IG5hbWU9J0VtYWlsJyB2YWx1ZT17Zm9ybS5FbWFpbH0gICAvPlxyXG5cclxuICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPSdmb250LWJvbGQgdGV4dC1jZW50ZXInID5XaGF0c2FwcDo8L2xhYmVsPlxyXG4gICAgICAgICAgICAgIDxpbnB1dCB0eXBlPSd0ZXh0JyBjbGFzc05hbWU9J2xnOnctMi81IGxnOm14LWF1dG8gbXgtMiBwLTQgYmxvY2sgc2hhZG93IGJnLWJsdWUtMTAwIG15LTQgcm91bmRlZCcgcGxhY2Vob2xkZXI9J1doYXRzYXBwJyBvbkNoYW5nZT17b25DaGFuZ2V9IG5hbWU9J1doYXRzYXBwJyB2YWx1ZT17Zm9ybS5XaGF0c2FwcH0gLz5cclxuXHJcbiAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT0nZm9udC1ib2xkIHRleHQtY2VudGVyJyA+RGlnaXRlIGFxdWkgc3VhIFN1Z2VzdMOjbyBvdSBDcsOtdGljYTo8L2xhYmVsPlxyXG4gICAgICAgICAgICAgIDxpbnB1dCB0eXBlPSd0ZXh0JyBjbGFzc05hbWU9J2xnOnctMi81IGxnOm14LWF1dG8gbXgtMiBwLTQgYmxvY2sgc2hhZG93IGJnLWJsdWUtMTAwIG15LTQgcm91bmRlZCcgcGxhY2Vob2xkZXI9J0Zvcm0nIG9uQ2hhbmdlPXtvbkNoYW5nZX0gbmFtZT0nRm9ybScgdmFsdWU9e2Zvcm0uRm9ybX0gLz5cclxuXHJcbiAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT0nZm9udC1ib2xkIHRleHQtY2VudGVyJyA+Tm90YSBwYXJhIG8gRXN0YWJlbGVjaW1lbnRvOjwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2ZsZXggZmxleC1yb3cganVzdGlmeS1jZW50ZXInID5cclxuICAgICAgICAgICAgIHtub3Rhcy5tYXAobm90YT0+IHtcclxuICAgICAgICAgICAgICByZXR1cm4gKDxsYWJlbCBjbGFzc05hbWU9J214LTIgYmxvY2sgdGV4dC1jZW50ZXInID5cclxuICAgICAgICAgICAgICAgICAgICAgICB7bm90YX08YnIvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPSdyYWRpbycgbmFtZT0nTm90YScgdmFsdWU9e25vdGF9IG9uQ2hhbmdlPXtvbkNoYW5nZX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD4gKVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT0nbXgtMiBsZzp3LTIvNSBsZzpteC1hdXRvIGJnLWJsdWUtMzAwIHB4LTIwIHAtNCBmb250LWJvbGQgcm91bmRlZC1sZyBzaGFkb3ctbGcgaG92ZXI6c2hhZG93ICcgb25DbGljaz17c2F2ZX0+RW52aWFyPC9idXR0b24+XHJcbiAgICAgICAgICAgIDwvZGl2Pn1cclxuICAgICAgICAgICAge3N1Y2VzcyAmJiA8ZGl2IGNsYXNzTmFtZT0nbXgtYXV0bycgPlxyXG4gICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT0nbXgtMiBtYi02IGJnLXRlYWwtMTAwIGJvcmRlci10LTQgYm9yZGVyLXRlYWwtNTAwIHJvdW5kZWQtYiB0ZXh0LXRlYWwtOTAwIHB4LTQgcHktMyBzaGFkb3ctbWQgcC00JyA+T2JyaWdhZG8gcG9yIFBhcnRpY2lwYXI8L3A+IFxyXG4gICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHJldG9ybm8uc2hvd0NvdXBvbiAmJiA8ZGl2IGNsYXNzTmFtZT0ndGV4dC1jZW50ZXIgIHAtNCBtYi00JyA+XHJcbiAgICAgICAgICAgICAgICAgIFNldSBDdXBvbTogPGJyLz5cclxuICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9J2ZvbnQtYm9sZCBib3JkZXIgdGV4dC14bCcgPntyZXRvcm5vLkN1cG9tfTwvc3Bhbj4gXHJcbiAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHJldG9ybm8uc2hvd0NvdXBvbiAmJiA8ZGl2IGNsYXNzTmFtZT0ndGV4dC1jZW50ZXIgYm9yZGVyIHAtNCBtYi00JyA+XHJcbiAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPSdmb250LWJvbGQgYmxvY2sgbWItMicgPntyZXRvcm5vLlByb21vfTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICA8YnIvPlxyXG4gICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT0naXRhbGljJz4gVGlyZSB1bSBwcmludCBvdSBmb3RvIGRlc3RhIHRlbGEgZSBhcHJlc2VudGUgbm8gZXN0YWJlbGVjaW1lbnRvLjwvc3Bhbj4gXHJcbiAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICA8L2Rpdj4gfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59XHJcbmV4cG9ydCBkZWZhdWx0IFBlc3F1aXNhIl0sInNvdXJjZVJvb3QiOiIifQ==