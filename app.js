
const watch = require('watch'),
      tempalater = require('./templater');

const App = {
  run (once, confFilename) {
    const targetPath = process.cwd();
    tempalater.process(targetPath, confFilename);

    if (!once) {
      watch.watchTree(targetPath, function (f, curr, prev) {
        if (typeof f == 'object' && prev === null && curr === null) {
            // no change
        } else if (prev === null) {
            // add
            tempalater.process(targetPath, confFilename);
        } else if (curr.nlink === 0) {
            // delete
            tempalater.process(targetPath, confFilename);
        } else {
            // change
            tempalater.process(targetPath, confFilename);
        }
      });
    }
  }
};

module.exports = App;

