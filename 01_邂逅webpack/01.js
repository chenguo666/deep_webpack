/*
 * @Author: fruitchan
 * @Date: 2022-04-08 14:47:36
 * @Last Modified by: fruitchan
 * @Last Modified time: 2022-04-11 09:41:00
 */

// webpack 是一个静态的模块打包工具 为现代的javascript应用程序

// 打包 bundler webpack 可以将帮助我们进行打包 所以它是一个打包工具
// 静态的static 这样表述的原因是我们最终可以将代码打包成最终的静态资源（部署到静态服务器）
// 模块化module webpack默认支持各种模块化开发 ES Module CommonJs AMD等
// 现代的modern 正是因为现代前端开发面临各种各样的问题 才催生了webpack的出现和发展

// // webpack 和 webpack-cli 俩者关系
// 执行webpack命令 会执行node_modules 下.bin目录下的webapack
// webpack在执行时是依赖webpack-cli的 如果没有安装就会报错
// 而webpack-cli中代码执行时 才是真正利用webpack进行编译和打包的过程
// 所以在安装webpack时 我们需要同时安装webpack-cli（第三方的脚手架事实上是没有使用webpack-cli的，而是类似于自己的vue-service-cli的东西）
