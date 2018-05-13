const path = require('path');
const Handlebars = require('handlebars');
const glob = require('glob');
const fs = require('fs');

module.exports = {
  process (targetPath, confFilename) {
    if (!confFilename) {
      confFilename = 'doce.conf.json';
    }

    const conf = require(path.join(targetPath, confFilename));

    glob(conf.partials, (err, files) => {
      if (err) {
        console.error(err);
      } else {
        files.forEach(this.handlePartialFile);
      }

      var templateSource = fs.readFileSync(path.join(targetPath, conf.template), 'utf8'),
      template = Handlebars.compile(templateSource);    
      
      fs.writeFileSync(path.join(targetPath, conf.output), template(conf), 'utf8');
    });
  },

  handlePartialFile (file) {
    var basename = path.basename(file);
    var content = fs.readFileSync(file, 'utf8');
    Handlebars.registerPartial(basename.split('.')[0], content);
  }
}