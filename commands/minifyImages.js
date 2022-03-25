const vscode = require('vscode');
const path = require('path');
const fs = require('fs-extra');
const readdirp = require('readdirp');
// 必须安装7.0.1，因为8.x强制使用ES Modules
const imagemin = require('imagemin');
// 必须安装9.0.0，因为10.x强制使用ES Modules
const imageminMozjpeg = require('imagemin-mozjpeg');
// 最新版本8.0.0无问题
const imageminOptipng = require('imagemin-optipng');
// 最新版本8.0.0无问题。gif通常无法压缩，但是能给动画转成交错的渐进动画
const imageminGifsicle = require('imagemin-gifsicle');
// 必须安装9.0.0，因为10.x强制使用ES Modules
const imageminSvgo = require('imagemin-svgo');

module.exports = function () {
  vscode.commands.registerCommand('element-plus-plus.minifyImages', async function (thisD, dList) {
    let imageFullPathList = [];
    for (let dItem of dList) {
      const dStat = fs.statSync(dItem.fsPath);
      let imageFiles = [];
      if (dStat.isDirectory()) {
        imageFiles = await readdirp.promise(dItem.fsPath, {
          fileFilter: ['*.jpg', '*.jpeg', '*.png', '*.svg', '*.gif'],
          depth: 10,
        });
        imageFullPathList = imageFullPathList.concat(imageFiles.map((i) => i.fullPath));
      } else if (dStat.isFile() && /^\.(jpg|jpeg|png|gif|svg)$/.test(path.extname(dItem.fsPath))) {
        imageFullPathList.push(dItem.fsPath);
      }
    }
    imageFullPathList = [...new Set(imageFullPathList)];

    if (imageFullPathList.length) {
      let outputChannel = vscode.window.createOutputChannel('Element Plus Plus');
      outputChannel.show(true);
      outputChannel.appendLine(`Image compressing and interlacing in progress... It takes a few seconds...`);

      let totalResult = [];
      let minifiedCount = 0;
      let magnifiedCount = 0;
      let unchangedCount = 0;
      for (let imageFullPath of imageFullPathList) {
        const beforeSize = fs.statSync(imageFullPath).size;
        // @ts-ignore
        await imagemin([imageFullPath], {
          destination: path.resolve(imageFullPath, '../'),
          glob: false,
          plugins: [
            imageminMozjpeg({ progressive: true }),
            // @ts-ignore
            imageminOptipng({ interlaced: true }),
            // @ts-ignore
            imageminSvgo(),
            imageminGifsicle({ interlaced: true, optimizationLevel: 3 }),
          ],
        });
        const afterSize = fs.statSync(imageFullPath).size;

        let afterSizeResult = '';
        if (beforeSize > afterSize) {
          minifiedCount += 1;
          afterSizeResult = '↓ ' + Math.round((afterSize * 10) / 1024) / 10;
        } else if (beforeSize < afterSize) {
          magnifiedCount += 1;
          afterSizeResult = '↑ ' + Math.round((afterSize * 10) / 1024) / 10;
        } else {
          unchangedCount += 1;
          afterSizeResult = '==';
        }

        totalResult.push({
          'Image Path': imageFullPath.replace(/\\/g, '/'),
          'Before Size (KiB)': Math.round((beforeSize * 10) / 1024) / 10,
          'After Size (KiB)': afterSizeResult,
        });
      }

      outputChannel.clear();
      outputChannel.appendLine(
        `Image compressing and interlacing result: ${imageFullPathList.length} image files found, ${minifiedCount} minified, ${magnifiedCount} magnified, ${unchangedCount} unchanged.`
      );

      if (totalResult.length) {
        const outputTempPath = path.resolve(vscode.workspace.workspaceFolders[0].uri.fsPath, './_output_temp');
        fs.writeFileSync(outputTempPath, `console.table(${JSON.stringify(totalResult)})`, 'utf-8');
        require('child_process')
          .spawn(`node ${outputTempPath}`, [], { shell: true })
          .stdout.on('data', (data) => {
            outputChannel.append(data.toString());
            fs.removeSync(outputTempPath);
          });
      }
    } else {
      vscode.window.showErrorMessage('Sorry, no image file found.');
    }
  });
};
