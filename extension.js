const enhanceElPlusHover = require('./commands/enhanceElPlusHover');
const enhanceEluiHover = require('./commands/enhanceEluiHover');
const browseSvg = require('./commands/browseSvg');

function activate(context) {
  enhanceElPlusHover();
  enhanceEluiHover();
  browseSvg(context);
}

function deactivate() {}

module.exports = {
  activate,
  deactivate,
};
