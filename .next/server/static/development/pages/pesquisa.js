module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 5);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/PageTitle.js":
/*!*********************************!*\
  !*** ./components/PageTitle.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\Users\\dikvi\\Desktop\\meconta\\components\\PageTitle.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const PageTitle = ({
  title
}) => {
  return __jsx(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 9
    }
  }, __jsx("title", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 13
    }
  }, title, " - MeConta "));
};

/* harmony default export */ __webpack_exports__["default"] = (PageTitle);

/***/ }),

/***/ "./pages/pesquisa.js":
/*!***************************!*\
  !*** ./pages/pesquisa.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_PageTitle__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/PageTitle */ "./components/PageTitle.js");
var _jsxFileName = "C:\\Users\\dikvi\\Desktop\\meconta\\pages\\pesquisa.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




const Pesquisa = () => {
  const {
    0: form,
    1: setForm
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])({
    Nome: '',
    Email: '',
    Whatsapp: '',
    Form: '',
    Nota: 0
  });
  const notas = [0, 1, 2, 3, 4, 5];
  const {
    0: sucess,
    1: setSucess
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const {
    0: retorno,
    1: setRetorno
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])({});

  const save = async () => {
    try {
      const response = await fetch('/api/save', {
        method: 'POST',
        body: JSON.stringify(form)
      });
      const data = await response.json();
      setSucess(true);
      setRetorno(data);
    } catch (err) {}
  };

  const onChange = evt => {
    const value = evt.target.value;
    const key = evt.target.name;
    setForm(old => _objectSpread(_objectSpread({}, old), {}, {
      [key]: value
    }));
  };

  return __jsx("div", {
    className: "pt-12 px-8 py-12 max-w-md mx-auto sm:max-w-xl ",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 9
    }
  }, __jsx(_components_PageTitle__WEBPACK_IMPORTED_MODULE_1__["default"], {
    title: "Pesquisa",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 11
    }
  }), __jsx("h1", {
    className: "text-center font-bold my-6 text-2xl mb-6",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 13
    }
  }, "Cr\xEDticas e Sugest\xF5es"), __jsx("p", {
    className: "text-center",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 13
    }
  }, "Esse estabelecimento est\xE1 atento a todas as sugest\xF5es dos nossos clientes.", __jsx("br", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 114
    }
  }), " E estamos prontos para melhor atender-los "), !sucess && __jsx("div", {
    className: "w-1/5 mx-auto ",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 25
    }
  }, __jsx("label", {
    className: "font-bold ",
    __self: undefined,
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
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 15
    }
  }), __jsx("label", {
    className: "font-bold",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 15
    }
  }, "Email:"), __jsx("input", {
    type: "text",
    className: "p-4 block shadow bg-blue-100 my-2 rounded",
    placeholder: "Email",
    onChange: onChange,
    name: "Email",
    value: form.Email,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 15
    }
  }), __jsx("label", {
    className: "font-bold",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 15
    }
  }, "Whatsapp:"), __jsx("input", {
    type: "text",
    className: "p-4 block shadow bg-blue-100 my-2 rounded",
    placeholder: "Whatsapp",
    onChange: onChange,
    name: "Whatsapp",
    value: form.Whatsapp,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 15
    }
  }), __jsx("label", {
    className: "font-bold",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 15
    }
  }, "Digite aqui sua Sugest\xE3o ou Cr\xEDtica:"), __jsx("input", {
    type: "text",
    className: "p-4 block shadow bg-blue-100 my-2 rounded",
    placeholder: "Form",
    onChange: onChange,
    name: "Form",
    value: form.Form,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 15
    }
  }), __jsx("label", {
    className: "font-bold",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 15
    }
  }, "Nota para o Estabelecimento:"), __jsx("div", {
    className: "flex",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 15
    }
  }, notas.map(nota => {
    return __jsx("label", {
      className: "block w-1/6 text-center",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 58,
        columnNumber: 23
      }
    }, nota, __jsx("br", {
      __self: undefined,
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
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 60,
        columnNumber: 24
      }
    }));
  })), __jsx("button", {
    className: " bg-blue-300 px-20 p-4 font-bold rounded-lg shadow-lg hover:shadow ",
    onClick: save,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 15
    }
  }, "Enviar")), sucess && __jsx("div", {
    className: "w-1/5 mx-auto",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 24
    }
  }, __jsx("p", {
    className: "mb-6 bg-teal-100 border-t-4 border-teal-500 rounded-b text-teal-900 px-4 py-3 shadow-md p-4",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 15
    }
  }, "Obrigado por Participar"), retorno.showCoupon && __jsx("div", {
    className: "text-center  p-4 mb-4",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 39
    }
  }, "Seu Cupom: ", __jsx("br", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 30
    }
  }), __jsx("span", {
    className: "font-bold border text-xl",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 18
    }
  }, retorno.Cupom)), retorno.showCoupon && __jsx("div", {
    className: "text-center border p-4 mb-4",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 39
    }
  }, __jsx("span", {
    className: "font-bold block mb-2",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78,
      columnNumber: 18
    }
  }, retorno.Promo), __jsx("br", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79,
      columnNumber: 18
    }
  }), __jsx("span", {
    className: "italic",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 18
    }
  }, " Tire um print ou foto desta tela e apresente no estabelecimento."))));
};

/* harmony default export */ __webpack_exports__["default"] = (Pesquisa);

/***/ }),

/***/ 5:
/*!*********************************!*\
  !*** multi ./pages/pesquisa.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\dikvi\Desktop\meconta\pages\pesquisa.js */"./pages/pesquisa.js");


/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9QYWdlVGl0bGUuanMiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvcGVzcXVpc2EuanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9oZWFkXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3RcIiJdLCJuYW1lcyI6WyJQYWdlVGl0bGUiLCJ0aXRsZSIsIlBlc3F1aXNhIiwiZm9ybSIsInNldEZvcm0iLCJ1c2VTdGF0ZSIsIk5vbWUiLCJFbWFpbCIsIldoYXRzYXBwIiwiRm9ybSIsIk5vdGEiLCJub3RhcyIsInN1Y2VzcyIsInNldFN1Y2VzcyIsInJldG9ybm8iLCJzZXRSZXRvcm5vIiwic2F2ZSIsInJlc3BvbnNlIiwiZmV0Y2giLCJtZXRob2QiLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsImRhdGEiLCJqc29uIiwiZXJyIiwib25DaGFuZ2UiLCJldnQiLCJ2YWx1ZSIsInRhcmdldCIsImtleSIsIm5hbWUiLCJvbGQiLCJtYXAiLCJub3RhIiwic2hvd0NvdXBvbiIsIkN1cG9tIiwiUHJvbW8iXSwibWFwcGluZ3MiOiI7O1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxJQUFJO1FBQ0o7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDeEZBO0FBQ0E7O0FBRUEsTUFBTUEsU0FBUyxHQUFHLENBQUM7QUFBQ0M7QUFBRCxDQUFELEtBQWE7QUFDM0IsU0FDSSxNQUFDLGdEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQVFBLEtBQVIsZ0JBREosQ0FESjtBQUtILENBTkQ7O0FBUWVELHdFQUFmLEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNYQTtBQUNBOztBQUVBLE1BQU1FLFFBQVEsR0FBRyxNQUFNO0FBQ3JCLFFBQU07QUFBQSxPQUFFQyxJQUFGO0FBQUEsT0FBUUM7QUFBUixNQUFvQkMsc0RBQVEsQ0FBQztBQUNqQ0MsUUFBSSxFQUFFLEVBRDJCO0FBRWpDQyxTQUFLLEVBQUUsRUFGMEI7QUFHakNDLFlBQVEsRUFBRSxFQUh1QjtBQUlqQ0MsUUFBSSxFQUFFLEVBSjJCO0FBS2pDQyxRQUFJLEVBQUU7QUFMMkIsR0FBRCxDQUFsQztBQU9BLFFBQU1DLEtBQUssR0FBRyxDQUFDLENBQUQsRUFBSSxDQUFKLEVBQU8sQ0FBUCxFQUFVLENBQVYsRUFBYSxDQUFiLEVBQWdCLENBQWhCLENBQWQ7QUFDQSxRQUFNO0FBQUEsT0FBRUMsTUFBRjtBQUFBLE9BQVVDO0FBQVYsTUFBd0JSLHNEQUFRLENBQUMsS0FBRCxDQUF0QztBQUNBLFFBQU07QUFBQSxPQUFFUyxPQUFGO0FBQUEsT0FBV0M7QUFBWCxNQUEwQlYsc0RBQVEsQ0FBQyxFQUFELENBQXhDOztBQUNBLFFBQU1XLElBQUksR0FBRyxZQUFZO0FBRXZCLFFBQUc7QUFDSCxZQUFNQyxRQUFRLEdBQUcsTUFBTUMsS0FBSyxDQUFDLFdBQUQsRUFBYTtBQUN0Q0MsY0FBTSxFQUFFLE1BRDhCO0FBRXRDQyxZQUFJLEVBQUVDLElBQUksQ0FBQ0MsU0FBTCxDQUFlbkIsSUFBZjtBQUZnQyxPQUFiLENBQTVCO0FBSUQsWUFBTW9CLElBQUksR0FBRyxNQUFNTixRQUFRLENBQUNPLElBQVQsRUFBbkI7QUFDQVgsZUFBUyxDQUFDLElBQUQsQ0FBVDtBQUNBRSxnQkFBVSxDQUFDUSxJQUFELENBQVY7QUFDRixLQVJHLENBUUgsT0FBTUUsR0FBTixFQUFVLENBQ1I7QUFDRixHQVpDOztBQWFGLFFBQU1DLFFBQVEsR0FBR0MsR0FBRyxJQUFJO0FBQ3RCLFVBQU1DLEtBQUssR0FBR0QsR0FBRyxDQUFDRSxNQUFKLENBQVdELEtBQXpCO0FBQ0EsVUFBTUUsR0FBRyxHQUFHSCxHQUFHLENBQUNFLE1BQUosQ0FBV0UsSUFBdkI7QUFDQTNCLFdBQU8sQ0FBQzRCLEdBQUcsb0NBQ05BLEdBRE07QUFFVCxPQUFDRixHQUFELEdBQU9GO0FBRkUsTUFBSixDQUFQO0FBSUQsR0FQRDs7QUFRSSxTQUNJO0FBQUssYUFBUyxFQUFDLGdEQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLDZEQUFEO0FBQVcsU0FBSyxFQUFDLFVBQWpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixFQUVJO0FBQUksYUFBUyxFQUFDLDBDQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0NBRkosRUFHSTtBQUFHLGFBQVMsRUFBQyxhQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEseUZBQXFHO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFBckcsZ0RBSEosRUFJSSxDQUFDaEIsTUFBRCxJQUFZO0FBQUssYUFBUyxFQUFDLGdCQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDVjtBQUFPLGFBQVMsRUFBQyxZQUFqQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURVLEVBR1Y7QUFBTyxRQUFJLEVBQUMsTUFBWjtBQUFtQixhQUFTLEVBQUMsOENBQTdCO0FBQTRFLGVBQVcsRUFBQyxNQUF4RjtBQUErRixZQUFRLEVBQUVjLFFBQXpHO0FBQW1ILFFBQUksRUFBQyxNQUF4SDtBQUErSCxTQUFLLEVBQUV2QixJQUFJLENBQUNHLElBQTNJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFIVSxFQUtWO0FBQU8sYUFBUyxFQUFDLFdBQWpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FMVSxFQU1WO0FBQU8sUUFBSSxFQUFDLE1BQVo7QUFBbUIsYUFBUyxFQUFDLDJDQUE3QjtBQUF5RSxlQUFXLEVBQUMsT0FBckY7QUFBNkYsWUFBUSxFQUFFb0IsUUFBdkc7QUFBaUgsUUFBSSxFQUFDLE9BQXRIO0FBQThILFNBQUssRUFBRXZCLElBQUksQ0FBQ0ksS0FBMUk7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQU5VLEVBUVY7QUFBTyxhQUFTLEVBQUMsV0FBakI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFSVSxFQVNWO0FBQU8sUUFBSSxFQUFDLE1BQVo7QUFBbUIsYUFBUyxFQUFDLDJDQUE3QjtBQUF5RSxlQUFXLEVBQUMsVUFBckY7QUFBZ0csWUFBUSxFQUFFbUIsUUFBMUc7QUFBb0gsUUFBSSxFQUFDLFVBQXpIO0FBQW9JLFNBQUssRUFBRXZCLElBQUksQ0FBQ0ssUUFBaEo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQVRVLEVBV1Y7QUFBTyxhQUFTLEVBQUMsV0FBakI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrREFYVSxFQVlWO0FBQU8sUUFBSSxFQUFDLE1BQVo7QUFBbUIsYUFBUyxFQUFDLDJDQUE3QjtBQUF5RSxlQUFXLEVBQUMsTUFBckY7QUFBNEYsWUFBUSxFQUFFa0IsUUFBdEc7QUFBZ0gsUUFBSSxFQUFDLE1BQXJIO0FBQTRILFNBQUssRUFBRXZCLElBQUksQ0FBQ00sSUFBeEk7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQVpVLEVBY1Y7QUFBTyxhQUFTLEVBQUMsV0FBakI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQ0FkVSxFQWVWO0FBQUssYUFBUyxFQUFDLE1BQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNBRSxLQUFLLENBQUNzQixHQUFOLENBQVVDLElBQUksSUFBRztBQUNqQixXQUFRO0FBQU8sZUFBUyxFQUFDLHlCQUFqQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0VBLElBREYsRUFDTztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BRFAsRUFFQztBQUFPLFVBQUksRUFBQyxPQUFaO0FBQW9CLFVBQUksRUFBQyxNQUF6QjtBQUFnQyxXQUFLLEVBQUVBLElBQXZDO0FBQTZDLGNBQVEsRUFBRVIsUUFBdkQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQUZELENBQVI7QUFJRCxHQUxDLENBREEsQ0FmVSxFQXlCVjtBQUFRLGFBQVMsRUFBQyxxRUFBbEI7QUFBd0YsV0FBTyxFQUFFVixJQUFqRztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBekJVLENBSmhCLEVBK0JLSixNQUFNLElBQUk7QUFBSyxhQUFTLEVBQUMsZUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ1Q7QUFBRyxhQUFTLEVBQUMsNkZBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSwrQkFEUyxFQUdQRSxPQUFPLENBQUNxQixVQUFSLElBQXNCO0FBQUssYUFBUyxFQUFDLHVCQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBQ1Q7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURTLEVBRXJCO0FBQU0sYUFBUyxFQUFDLDBCQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQTZDckIsT0FBTyxDQUFDc0IsS0FBckQsQ0FGcUIsQ0FIZixFQVNQdEIsT0FBTyxDQUFDcUIsVUFBUixJQUFzQjtBQUFLLGFBQVMsRUFBQyw2QkFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ3JCO0FBQU0sYUFBUyxFQUFDLHNCQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQXlDckIsT0FBTyxDQUFDdUIsS0FBakQsQ0FEcUIsRUFFckI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUZxQixFQUdyQjtBQUFNLGFBQVMsRUFBQyxRQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHlFQUhxQixDQVRmLENBL0JmLENBREo7QUFrREgsQ0FsRkQ7O0FBbUZlbkMsdUVBQWYsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN0RkEsc0M7Ozs7Ozs7Ozs7O0FDQUEsa0MiLCJmaWxlIjoic3RhdGljXFxkZXZlbG9wbWVudFxccGFnZXNcXHBlc3F1aXNhLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSByZXF1aXJlKCcuLi8uLi8uLi9zc3ItbW9kdWxlLWNhY2hlLmpzJyk7XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdHZhciB0aHJldyA9IHRydWU7XG4gXHRcdHRyeSB7XG4gXHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG4gXHRcdFx0dGhyZXcgPSBmYWxzZTtcbiBcdFx0fSBmaW5hbGx5IHtcbiBcdFx0XHRpZih0aHJldykgZGVsZXRlIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHR9XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDUpO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnXHJcblxyXG5jb25zdCBQYWdlVGl0bGUgPSAoe3RpdGxlfSkgPT4ge1xyXG4gICAgcmV0dXJuKFxyXG4gICAgICAgIDxIZWFkPlxyXG4gICAgICAgICAgICA8dGl0bGU+e3RpdGxlfSAtIE1lQ29udGEgPC90aXRsZT5cclxuICAgICAgICAgIDwvSGVhZD5cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUGFnZVRpdGxlIiwiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCBQYWdlVGl0bGUgZnJvbSAnLi4vY29tcG9uZW50cy9QYWdlVGl0bGUnXHJcblxyXG5jb25zdCBQZXNxdWlzYSA9ICgpID0+IHtcclxuICBjb25zdCBbIGZvcm0sIHNldEZvcm0gXSA9IHVzZVN0YXRlKHtcclxuICAgIE5vbWU6ICcnLFxyXG4gICAgRW1haWw6ICcnLFxyXG4gICAgV2hhdHNhcHA6ICcnLFxyXG4gICAgRm9ybTogJycsXHJcbiAgICBOb3RhOiAwXHJcbiAgfSlcclxuICBjb25zdCBub3RhcyA9IFswLCAxLCAyLCAzLCA0LCA1XVxyXG4gIGNvbnN0IFsgc3VjZXNzLCBzZXRTdWNlc3MgXSA9IHVzZVN0YXRlKGZhbHNlKVxyXG4gIGNvbnN0IFsgcmV0b3Jubywgc2V0UmV0b3JubyBdID0gdXNlU3RhdGUoe30pXHJcbiAgY29uc3Qgc2F2ZSA9IGFzeW5jICgpID0+IHtcclxuICAgIFxyXG4gICAgdHJ5e1xyXG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCgnL2FwaS9zYXZlJyx7XHJcbiAgICAgICBtZXRob2Q6ICdQT1NUJyxcclxuICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KGZvcm0pXHJcbiAgIH0pXHJcbiAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKClcclxuICAgc2V0U3VjZXNzKHRydWUpXHJcbiAgIHNldFJldG9ybm8oZGF0YSlcclxufWNhdGNoKGVycil7XHJcbiAgfVxyXG59XHJcbmNvbnN0IG9uQ2hhbmdlID0gZXZ0ID0+IHtcclxuICBjb25zdCB2YWx1ZSA9IGV2dC50YXJnZXQudmFsdWVcclxuICBjb25zdCBrZXkgPSBldnQudGFyZ2V0Lm5hbWVcclxuICBzZXRGb3JtKG9sZCA9PiAoe1xyXG4gICAgLi4ub2xkLFxyXG4gICAgW2tleV06IHZhbHVlXHJcbiAgfSkpXHJcbn1cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J3B0LTEyIHB4LTggcHktMTIgbWF4LXctbWQgbXgtYXV0byBzbTptYXgtdy14bCAnID5cclxuICAgICAgICAgIDxQYWdlVGl0bGUgdGl0bGU9J1Blc3F1aXNhJy8+XHJcbiAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9J3RleHQtY2VudGVyIGZvbnQtYm9sZCBteS02IHRleHQtMnhsIG1iLTYnID5DcsOtdGljYXMgZSBTdWdlc3TDtWVzPC9oMT5cclxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPSd0ZXh0LWNlbnRlcic+RXNzZSBlc3RhYmVsZWNpbWVudG8gZXN0w6EgYXRlbnRvIGEgdG9kYXMgYXMgc3VnZXN0w7VlcyBkb3Mgbm9zc29zIGNsaWVudGVzLjxici8+IEUgZXN0YW1vcyBwcm9udG9zIHBhcmEgbWVsaG9yIGF0ZW5kZXItbG9zIDwvcD5cclxuICAgICAgICAgIHsgIXN1Y2VzcyAmJiAgPGRpdiBjbGFzc05hbWU9J3ctMS81IG14LWF1dG8gJyA+XHJcbiAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT0nZm9udC1ib2xkICcgPlNldSBOb21lOjwvbGFiZWw+XHJcblxyXG4gICAgICAgICAgICAgIDxpbnB1dCB0eXBlPSd0ZXh0JyBjbGFzc05hbWU9J3AtNCBibG9jayBzaGFkb3cgIGJnLWJsdWUtMTAwIG15LTYgIHJvdW5kZWQgJyBwbGFjZWhvbGRlcj0nTm9tZScgb25DaGFuZ2U9e29uQ2hhbmdlfSBuYW1lPSdOb21lJyB2YWx1ZT17Zm9ybS5Ob21lfSAvPlxyXG5cclxuICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPSdmb250LWJvbGQnID5FbWFpbDo8L2xhYmVsPlxyXG4gICAgICAgICAgICAgIDxpbnB1dCB0eXBlPSd0ZXh0JyBjbGFzc05hbWU9J3AtNCBibG9jayBzaGFkb3cgYmctYmx1ZS0xMDAgbXktMiByb3VuZGVkJyBwbGFjZWhvbGRlcj0nRW1haWwnIG9uQ2hhbmdlPXtvbkNoYW5nZX0gbmFtZT0nRW1haWwnIHZhbHVlPXtmb3JtLkVtYWlsfSAgIC8+XHJcblxyXG4gICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9J2ZvbnQtYm9sZCcgPldoYXRzYXBwOjwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgPGlucHV0IHR5cGU9J3RleHQnIGNsYXNzTmFtZT0ncC00IGJsb2NrIHNoYWRvdyBiZy1ibHVlLTEwMCBteS0yIHJvdW5kZWQnIHBsYWNlaG9sZGVyPSdXaGF0c2FwcCcgb25DaGFuZ2U9e29uQ2hhbmdlfSBuYW1lPSdXaGF0c2FwcCcgdmFsdWU9e2Zvcm0uV2hhdHNhcHB9IC8+XHJcblxyXG4gICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9J2ZvbnQtYm9sZCcgPkRpZ2l0ZSBhcXVpIHN1YSBTdWdlc3TDo28gb3UgQ3LDrXRpY2E6PC9sYWJlbD5cclxuICAgICAgICAgICAgICA8aW5wdXQgdHlwZT0ndGV4dCcgY2xhc3NOYW1lPSdwLTQgYmxvY2sgc2hhZG93IGJnLWJsdWUtMTAwIG15LTIgcm91bmRlZCcgcGxhY2Vob2xkZXI9J0Zvcm0nIG9uQ2hhbmdlPXtvbkNoYW5nZX0gbmFtZT0nRm9ybScgdmFsdWU9e2Zvcm0uRm9ybX0gLz5cclxuXHJcbiAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT0nZm9udC1ib2xkJyA+Tm90YSBwYXJhIG8gRXN0YWJlbGVjaW1lbnRvOjwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2ZsZXgnID5cclxuICAgICAgICAgICAgIHtub3Rhcy5tYXAobm90YT0+IHtcclxuICAgICAgICAgICAgICByZXR1cm4gKDxsYWJlbCBjbGFzc05hbWU9J2Jsb2NrIHctMS82IHRleHQtY2VudGVyJyA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAge25vdGF9PGJyLz5cclxuICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT0ncmFkaW8nIG5hbWU9J05vdGEnIHZhbHVlPXtub3RhfSBvbkNoYW5nZT17b25DaGFuZ2V9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+IClcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9JyBiZy1ibHVlLTMwMCBweC0yMCBwLTQgZm9udC1ib2xkIHJvdW5kZWQtbGcgc2hhZG93LWxnIGhvdmVyOnNoYWRvdyAnIG9uQ2xpY2s9e3NhdmV9PkVudmlhcjwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8L2Rpdj59XHJcbiAgICAgICAgICAgIHtzdWNlc3MgJiYgPGRpdiBjbGFzc05hbWU9J3ctMS81IG14LWF1dG8nID5cclxuICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9J21iLTYgYmctdGVhbC0xMDAgYm9yZGVyLXQtNCBib3JkZXItdGVhbC01MDAgcm91bmRlZC1iIHRleHQtdGVhbC05MDAgcHgtNCBweS0zIHNoYWRvdy1tZCBwLTQnID5PYnJpZ2FkbyBwb3IgUGFydGljaXBhcjwvcD4gXHJcbiAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgcmV0b3Juby5zaG93Q291cG9uICYmIDxkaXYgY2xhc3NOYW1lPSd0ZXh0LWNlbnRlciAgcC00IG1iLTQnID5cclxuICAgICAgICAgICAgICAgICAgU2V1IEN1cG9tOiA8YnIvPlxyXG4gICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT0nZm9udC1ib2xkIGJvcmRlciB0ZXh0LXhsJyA+e3JldG9ybm8uQ3Vwb219PC9zcGFuPiBcclxuICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgcmV0b3Juby5zaG93Q291cG9uICYmIDxkaXYgY2xhc3NOYW1lPSd0ZXh0LWNlbnRlciBib3JkZXIgcC00IG1iLTQnID5cclxuICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9J2ZvbnQtYm9sZCBibG9jayBtYi0yJyA+e3JldG9ybm8uUHJvbW99PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgIDxici8+XHJcbiAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPSdpdGFsaWMnPiBUaXJlIHVtIHByaW50IG91IGZvdG8gZGVzdGEgdGVsYSBlIGFwcmVzZW50ZSBubyBlc3RhYmVsZWNpbWVudG8uPC9zcGFuPiBcclxuICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIDwvZGl2PiB9XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgUGVzcXVpc2EiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2hlYWRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7Il0sInNvdXJjZVJvb3QiOiIifQ==