const marked = require("marked");
module.exports = function (content) {
  console.log("mdloader-start");
  const htmlContent = marked(content);
  console.log(htmlContent);
  const innnerContent = "`" + htmlContent + "`";
  const moduleCode = `var code =${innnerContent}; export default code;`;
  return moduleCode;
};
