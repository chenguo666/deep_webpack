(function () {
  // 定义一个对象 对象里面放的是我们的模块映射
  var __webpack_modules__ = {
    "./src/js/math.js": function (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) {
      // 调用r 记录是一个__esModule
      __webpack_require__.r(__webpack_exports__);
      // 调用d 给exports 设置了一个代理 definition exports对象中本身没有对应的函数
      __webpack_require__.d(__webpack_exports__, {
        mul: function () {
          return /* binding */ mul;
        },
        sum: function () {
          return /* binding */ sum;
        },
      });
      const sum = (num1, num2) => {
        return num1 + num2;
      };
      const mul = (num1, num2) => {
        return num1 * num2;
      };
    },
  };

  // The module cache
  // 模块缓存
  var __webpack_module_cache__ = {};

  // The require function
  // require函数的实现
  function __webpack_require__(moduleId) {
    // Check if module is in cache
    var cachedModule = __webpack_module_cache__[moduleId];
    if (cachedModule !== undefined) {
      return cachedModule.exports;
    }
    // Create a new module (and put it into the cache)
    var module = (__webpack_module_cache__[moduleId] = {
      // no module.id needed
      // no module.loaded needed
      exports: {},
    });

    // Execute the module function
    __webpack_modules__[moduleId](module, module.exports, __webpack_require__);

    // Return the exports of the module
    return module.exports;
  }

  /* webpack/runtime/define property getters */
  !(function () {
    // define getter functions for harmony exports
    // 立即执行函数 给这个函数对象添加一个属性 d-》 function
    __webpack_require__.d = function (exports, definition) {
      for (var key in definition) {
        if (
          __webpack_require__.o(definition, key) &&
          !__webpack_require__.o(exports, key)
        ) {
          Object.defineProperty(exports, key, {
            enumerable: true,
            get: definition[key],
          });
        }
      }
    };
  })();

  /* webpack/runtime/hasOwnProperty shorthand */
  !(function () {
    // 这个函数对象添加一个属性 o =》 值function
    __webpack_require__.o = function (obj, prop) {
      return Object.prototype.hasOwnProperty.call(obj, prop);
    };
  })();

  /* webpack/runtime/make namespace object */
  !(function () {
    // define __esModule on exports
    // 这个函数对象添加一个属性 r =》 值function
    __webpack_require__.r = function (exports) {
      if (typeof Symbol !== "undefined" && Symbol.toStringTag) {
        Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
      }
      Object.defineProperty(exports, "__esModule", { value: true });
    };
  })();

  var __webpack_exports__ = {};
  // This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
  !(function () {
    __webpack_require__.r(__webpack_exports__);
    /* harmony import */ var _js_math__WEBPACK_IMPORTED_MODULE_0__ =
      __webpack_require__(/*! ./js/math */ "./src/js/math.js");

    console.log((0, _js_math__WEBPACK_IMPORTED_MODULE_0__.sum)(20, 30));
    console.log((0, _js_math__WEBPACK_IMPORTED_MODULE_0__.mul)(20, 30));
  })();
})();
