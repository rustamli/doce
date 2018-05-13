const pjson = require('./package.json');

module.exports = {
  version () {
    console.log(pjson.version);
  }
}

