const vscode = require('vscode');
const path = require('path');
const fs = require('fs-extra');
const readdirp = require('readdirp');

module.exports = function (context) {
  vscode.commands.registerCommand('element-plus-plus.browseSvg', async function (thisD, dList) {
    let svgFullPathList = [];
    for (let dItem of dList) {
      const dStat = fs.statSync(dItem.fsPath);
      let svgFiles = [];
      if (dStat.isDirectory()) {
        svgFiles = await readdirp.promise(dItem.fsPath, {
          fileFilter: ['*.svg'],
          depth: 6,
        });
        svgFullPathList = svgFullPathList.concat(svgFiles.map((i) => i.fullPath));
      } else if (dStat.isFile() && /^\.svg$/.test(path.extname(dItem.fsPath))) {
        svgFullPathList.push(dItem.fsPath);
      }
    }
    svgFullPathList = [...new Set(svgFullPathList)];

    if (svgFullPathList.length) {
      const panel = vscode.window.createWebviewPanel('browseSvg', 'Browse SVG', vscode.ViewColumn.One, {
        enableCommandUris: true,
        enableScripts: true,
      });

      svgFullPathList = svgFullPathList.map((p) => {
        const webviewUri = panel.webview.asWebviewUri(vscode.Uri.file(p)).toString();
        const filename = decodeURIComponent(path.basename(webviewUri));
        const filenameWithoutExt = path.parse(filename).name;
        return {
          webviewUri,
          filename,
          filenameWithoutExt,
          elUICode: `<svg-icon icon-class="${filenameWithoutExt}" />`,
          elPlusCode: fs.readFileSync(p, 'utf-8'),
        };
      });

      let webviewHtml = fs.readFileSync(path.resolve(__dirname, '../webviews/browseSvg.html'), 'utf-8');

      const localContentPathList = [
        'libs/vue.min.js',
        'libs/element-plus.css',
        'browseSvg.css',
        'libs/element-plus.min.js',
        'libs/tinycolor.min.js',
        'libs/jQuery.min.js',
      ];

      localContentPathList.forEach((p) => {
        webviewHtml = webviewHtml.replace(
          p,
          panel.webview.asWebviewUri(vscode.Uri.file(path.join(context.extensionPath, 'webviews', p))).toString()
        );
      });
      webviewHtml = webviewHtml.replace('svgFullPathList: []', 'svgFullPathList: ' + JSON.stringify(svgFullPathList));
      panel.webview.html = webviewHtml;
    } else {
      vscode.window.showErrorMessage('Sorry, SVG file no found.');
    }
  });
};
