const vscode = require('vscode');
const fs = require('fs-extra');
const path = require('path');

module.exports = function () {
  if (!vscode.workspace.workspaceFolders) return;

  for (let workspaceFolder of vscode.workspace.workspaceFolders) {
    const elplusPackageJsonPath = path.resolve(workspaceFolder.uri.fsPath, './node_modules/element-plus/package.json');
    fs.stat(elplusPackageJsonPath, (err) => {
      if (err) return;

      const elplusPackageJson = fs.readJsonSync(elplusPackageJsonPath);
      const previousVersion = elplusPackageJson.elppVersion;
      const currentVersion = fs.readJSONSync(path.resolve(__dirname, '../package.json')).version;

      if (previousVersion && previousVersion === currentVersion) return;

      const tagsJsonPath = path.resolve(workspaceFolder.uri.fsPath, './node_modules/element-plus/tags.json');
      const tagsJsonBakPath = path.resolve(workspaceFolder.uri.fsPath, './node_modules/element-plus/tags.json.bak');
      const attributesJsonPath = path.resolve(workspaceFolder.uri.fsPath, './node_modules/element-plus/attributes.json');
      const attributesJsonBakPath = path.resolve(workspaceFolder.uri.fsPath, './node_modules/element-plus/attributes.json.bak');

      if (!previousVersion) {
        fs.copySync(tagsJsonPath, tagsJsonBakPath);
        fs.copySync(attributesJsonPath, attributesJsonBakPath);
      }

      const envIsZhCn = vscode.env.language === 'zh-cn';

      let tagsJson = fs.readJSONSync(tagsJsonBakPath);
      for (let node in tagsJson) {
        const val = tagsJson[node];
        // 修复 el-button 的属性书写错误
        if (node === 'el-button') {
          val.attributes = [
            'type',
            'size',
            'plain',
            'loading',
            'disabled',
            'icon',
            'autofocus',
            'native-type',
            'round',
            'circle',
          ];
        }
        if (tagsJson[node].attributes) {
          val.description = val.description.replace(
            '[Docs](https://element-plus.org',
            `attributes: ${JSON.stringify(val.attributes)
              .slice(1, -1)
              .replace(/"/g, '`')
              .replace(/,/g, ' | ')}\n\n[Docs](https://${envIsZhCn ? 'element-plus.gitee.io' : 'element-plus.org'}`
          );
        } else {
          val.description = val.description.replace(
            '[Docs](https://element-plus.org',
            `attributes: See Docs.\n\n[Docs](https://${envIsZhCn ? 'element-plus.gitee.io' : 'element-plus.org'}`
          );
        }
      }
      fs.writeJSONSync(tagsJsonPath, tagsJson);

      let attributesJson = fs.readJSONSync(attributesJsonBakPath);
      for (let node in attributesJson) {
        const val = attributesJson[node];
        val.description = val.description.replace(
          '[Docs](https://element-plus.org',
          `type: ${val.type}\n\n${
            val.options ? `options: ${JSON.stringify(val.options).slice(1, -1).replace(/"/g, '`').replace(/,/g, ' | ')}\n\n` : ''
          }[Docs](https://${envIsZhCn ? 'element-plus.gitee.io' : 'element-plus.org'}`
        );
      }
      fs.writeJSONSync(attributesJsonPath, attributesJson);

      vscode.window.showInformationMessage('The Hover of VS Code for Element Plus has been enhanced. Enjoy it.');

      elplusPackageJson.elppVersion = currentVersion;
      fs.writeJSONSync(elplusPackageJsonPath, elplusPackageJson, { spaces: 2 });
    });
  }
};
