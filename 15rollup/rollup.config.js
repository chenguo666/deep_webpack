// module.exports = {

// }
// export default {
//   input: "./src/main.js",
//   //   output: {
//   //     format: "umd",
//   //     name: "whyUtils",
//   //     file: "why.umd.js",
//   //   },
//   output: [
//     {
//       format: "umd",
//       name: "whyUtils",
//       file: "dist/why.umd.js",
//     },
//     {
//       format: "cjs",
//       file: "dist/why.commonjs.js",
//     },
//     {
//       format: "amd",
//       file: "dist/why.amd.js",
//     },
//   ],
// };
import commonjs from "@rollup/plugin-commonjs";
import resolve from "@rollup/plugin-node-resolve";
import babel from "@rollup/plugin-babel";
import { terser } from "rollup-plugin-terser";
export default {
  input: "./src/main.js",
  output: [
    {
      format: "umd",
      name: "whyUtils",
      file: "dist/why.umd.js",
    },
  ],
  external: ["lodash"],
  plugins: [
    commonjs(),
    //  resolve(),
    babel({
      babelHelpers: "bundled",
    }),
    terser(),
  ],
};
