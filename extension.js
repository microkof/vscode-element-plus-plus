const minifyImages = require('./commands/minifyImages');
const enhanceElPlusHover = require('./commands/enhanceElPlusHover');

function activate(context) {
  context.subscriptions.push(minifyImages());

  enhanceElPlusHover();
}

function deactivate() {}

module.exports = {
  activate,
  deactivate,
};
