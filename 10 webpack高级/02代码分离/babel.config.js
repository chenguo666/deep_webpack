const presets = [["@bable/preset-env"], ["@bable/preset-react"]];
const plugins = [];
const isProduction = process.env.NODE_ENV === "production";
// react hmr 模块热替换 开发才有效
if (!isProduction) {
  plugins.push("react-refresh/babel");
} else {
}
module.exports = {
  presets,
  plugins,
};
