const vscode = require('vscode');
const path = require('path');
const fs = require('fs-extra');

module.exports = function () {
  if (!vscode.workspace.workspaceFolders) return;

  for (let workspaceFolder of vscode.workspace.workspaceFolders) {
    const eluiPackageJsonPath = path.resolve(workspaceFolder.uri.fsPath, './node_modules/element-ui/package.json');
    fs.stat(eluiPackageJsonPath, (err) => {
      if (err) return;
      const elementTagsJson = fs.readJSONSync(path.resolve(__dirname, 'element-tags.json'));
      const elementAttributesJson = fs.readJSONSync(path.resolve(__dirname, 'element-attributes.json'));
      vscode.languages.registerHoverProvider(
        { scheme: 'file', language: 'vue' },
        {
          async provideHover(document, position) {
            const editor = vscode.window.activeTextEditor;
            if (!editor) return;

            const text = document.getText(document.getWordRangeAtPosition(position, /el-[a-z\-]+|[a-z\-]+/));
            console.log(text, 'text');

            if (elementTagsJson[text]) {
              const markdownString = new vscode.MarkdownString();
              let mdText =
                'attributes: ' +
                JSON.stringify(elementTagsJson[text].attributes).slice(1, -1).replace(/"/g, '`').replace(/,/g, ' | ');
              markdownString.appendMarkdown(mdText);
              return new vscode.Hover(markdownString);
            } else if (elementAttributesJson[text] && JSON.stringify(elementAttributesJson[text]) !== '{}') {
              const markdownString = new vscode.MarkdownString();
              let mdText = [];
              if (elementAttributesJson[text].description) {
                mdText.push(elementAttributesJson[text].description);
              }
              if (elementAttributesJson[text].type) {
                mdText.push('type: ' + elementAttributesJson[text].type);
              }
              if (elementAttributesJson[text].options) {
                mdText.push(
                  'options: ' +
                    JSON.stringify(elementAttributesJson[text].options).slice(1, -1).replace(/"/g, '`').replace(/,/g, ' | ')
                );
              }
              markdownString.appendMarkdown(mdText.join('\n\n'));
              return new vscode.Hover(markdownString);
            }
          },
        }
      );
    });
  }
};
