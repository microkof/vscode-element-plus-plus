const browseSvg = require('./commands/browseSvg');
const enhanceElPlusHover = require('./commands/enhanceElPlusHover');
const enhanceEluiHover = require('./commands/enhanceEluiHover');

function activate(context) {
  context.subscriptions.push(browseSvg(context));

  enhanceElPlusHover();
  enhanceEluiHover();
}

function deactivate() {}

module.exports = {
  activate,
  deactivate,
};
