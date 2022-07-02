const path = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { DefinePlugin } = require("webpack");
const CopyWebpackPlugin = require("copy-webpack-plugin");
module.exports = {
  entry: "./src/main.js",
  output: {
    filename: "js/bundle.js",
    path: path.resolve(__dirname, "./build"),
    // assetModuleFilename: "img/[name].[hash:6][ext]",
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: "webpack use plugin",
      template: "./public/index.html",
    }),
    new DefinePlugin({
      BASE_URL: '"./"',
    }),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: "public",
          globOptions: {
            ignore: ["**/index.html", "**/.DS_Store"],
          },
        },
      ],
    }),
  ],
  module: {
    rules: [
      {
        test: /\.css$/,
        // loader: "css-loader",
        use: [
          // {
          //   loader: "css-loader",
          // },
          // 处理从下往上 从右往左处理的
          "style-loader",
          // "css-loader",
          {
            loader: "css-loader",
            options: {
              // .css文件里有其他css less文件 会回头处理
              importLoaders: 1,
            },
          },
          "postcss-loader",
          // {
          //   loader: "postcss-loader",
          //   options: {
          //     postcssOptions: {
          //       plugins: [
          //         // require("autoprefixer"),
          //         require("postcss-preset-env"),
          //       ],
          //     },
          //   },
          // },
        ],
      },
      {
        test: /\.less$/,
        use: [
          "style-loader",
          // "css-loader",
          {
            loader: "css-loader",
            options: {
              // .css文件里有其他css less文件 会回头处理
              importLoaders: 2,
            },
          },
          "postcss-loader",
          "less-loader",
        ],
      },
      // {
      //   test: /\.(jpe?g|png|gif|svg)$/,
      //   use: [
      //     {
      //       loader: "file-loader",
      //       options: {
      //         // 指定文件名
      //         name: "[name].[hash:6].[ext]",
      //         // 指定输出路径
      //         // name: "img/[name].[hash:6].[ext]",
      //         outputPath: "img",
      //       },
      //     },
      //   ],
      // },
      {
        test: /\.(jpe?g|png|gif|svg)$/,
        type: "asset",
        // type: "asset/inline",
        generator: {
          filename: "img/[name].[hash:6][ext]",
        },
        parser: {
          dataUrlCondition: {
            maxSize: 100 * 1024,
          },
        },
        // use: [
        //   {
        //     loader: "url-loader",
        //     options: {
        //       // 指定文件名
        //       name: "[name].[hash:6].[ext]",
        //       // 指定输出路径
        //       // name: "img/[name].[hash:6].[ext]",
        //       outputPath: "img",
        //       limit: 10240,
        //     },
        //   },
        // ],
      },
      {
        test: /\.(ttf|eot|woff2?)$/,
        type: "asset/resource",
        generator: {
          filename: "font/[name].[hash:6][ext]",
        },
      },
    ],
  },
};
