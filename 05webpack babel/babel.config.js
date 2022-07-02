module.exports = {
  presets: [
    [
      "@babel/preset-env",
      // {
      //   // targets: "last 2 version",

      //   // false不使用 usage根据源代码需要引入  entry目标浏览器需要的全部都引入
      //   useBuiltIns: "usage",
      //   corejs: 3,
      // },
    ],
    ["@babel/preset-react"],
  ],
  // plugins: [
  //   [
  //     "@babel/plugin-transform-runtime",
  //     {
  //       corejs: 3,
  //     },
  //   ],
  // ],
};
