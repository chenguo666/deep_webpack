const babel = require("@babel/core");
const { getOptions } = require("loader-utils");
module.exports = function (content) {
  const callback = this.async();
  const options = getOptions(this);
  babel.transform(content, options, (err, result) => {
    if (err) {
      callback(err);
    } else {
      callback(null, result.code);
    }
  });
};
