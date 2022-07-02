(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
  typeof define === 'function' && define.amd ? define(['exports'], factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.whyUtils = {}));
})(this, (function (exports) { 'use strict';

  const message = "i am a message xxxxx";
  console.log(message);
  const sum = (num1, num2) => {
    return num1 + num2;
  };

  exports.sum = sum;

  Object.defineProperty(exports, '__esModule', { value: true });

}));
