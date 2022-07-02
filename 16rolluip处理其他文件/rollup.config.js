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
import postcss from "rollup-plugin-postcss";
import vue from "rollup-plugin-vue";
import replace from "rollup-plugin-replace";
import serve from "rollup-plugin-serve";
import livereload from "rollup-plugin-livereload";
console.log(process.env.NODE_ENV);
const isProduction = process.env.NODE_ENV === "production";
const plugins = [
  commonjs(),
  resolve(),
  replace({
    "process.env.NODE_ENV": JSON.stringify(process.env.NODE_ENV),
  }),
  babel({
    babelHelpers: "bundled",
  }),
  postcss(),
  vue(),
];
if (isProduction) {
  plugins.push(terser());
} else {
  const devPlugin = [
    serve({
      open: true,
      port: 3030,
      contentBase: ".", // 服务那个文件夹
    }),
    livereload(),
  ];
  plugins.push(...devPlugin);
}
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
  plugins: plugins,
};
