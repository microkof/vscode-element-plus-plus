# element-plus-plus README

This extension is a development enhancement tool for Element UI and Element Plus developers. Functions are increasing.

## Function 1. Enhance vetur's Hover content for Element Plus components

### Performance without Element Plus Plus extension

When this extension is not used but only the Vetur extension is used, the Hover of Element Plus components is as follows (take the `<el-row>` component and its `justify` attribute as an example):

1. When the mouse hovers over the label, it will prompt `Docs`. Click `Docs` to go to the official manual. However, you can't see the attributes of this component, so you need to recall or query the official manual. It's annoying.

2. Click `Docs` to open the official manual, but if you open the manual in Simplified Chinese OS, you will see "建议大陆用户访问部署在国内的站点，是否跳转？". It's annoying.

3. When the mouse hovers over the component attribute, it will prompt the text introduction and default value of this attribute. For example, the prompt of `justify` is `horizontal alignment of flex layout, default: start` and `Docs`. However, you can't see the data type and optional values of `justify`, so you need to recall or query the official manual. It's annoying.

### Performance after installing Element Plus Plus extension

This extension enhances the above tips, and you can try to avoid relying on memories or referring to the official Manual:

1. When you hover over a tag, you will be prompted for all the attributes of this tag. The comparison before and after use is as follows:

![Before](https://microkof.gitee.io/vscode-e-p-p/enhance-plus-tag-before.png)

<center>⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇</center>

![After](https://microkof.gitee.io/vscode-e-p-p/enhance-plus-tag-after.png)

2. This extension determines the link of `Docs` according to the language of the operating system. If it is in the Simplified Chinese OS, replace the link with the domestic site to avoid the annoying "建议大陆用户访问部署在国内的站点，是否跳转？" Tips.

Originally: [https://element-plus.org/en-US/component/layout.html](https://element-plus.org/en-US/component/layout.html)

Now: [https://element-plus.gitee.io/zh-CN/component/layout.html](https://element-plus.gitee.io/zh-CN/component/layout.html)

Note: only the simplified Chinese operating system will be modified, and other language operating systems will not be changed.

3. When you hover over an attribute, you will be prompted for the data type and optional value of this attribute. The comparison before and after use is as follows:

![Before](https://microkof.gitee.io/vscode-e-p-p/enhance-plus-attr-before.png)

<center>⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇</center>

![After](https://microkof.gitee.io/vscode-e-p-p/enhance-plus-attr-after.png)

### Attention

At present, due to incomplete data collection, there is a lack of attribute list of individual components and optional value list of individual attributes, which the author will try to supplement in the future.

## Function 2. Enhance vetur's Hover content for Element UI components

Similar to the above Function 1, this time is to enhance the mouse over prompt of vetur on the Element UI components.

### Performance after installing Element Plus Plus extension

1. When you hover over a tag, you will be prompted for all the attributes of this tag. The comparison before and after use is as follows:

![Before](https://microkof.gitee.io/vscode-e-p-p/enhance-ui-tag-before.png)

<center>⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇</center>

![After](https://microkof.gitee.io/vscode-e-p-p/enhance-ui-tag-after.png)

2. When you hover over an attribute, you will be prompted for the data type and optional value of this attribute. The comparison before and after use is as follows:

![Before](https://microkof.gitee.io/vscode-e-p-p/enhance-ui-attr-before.png)

<center>⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇</center>

![After](https://microkof.gitee.io/vscode-e-p-p/enhance-ui-attr-after.png)

Note: Due to incomplete data collection at present, some attributes have no options prompt, and all official manual links have not been added. Later versions will be added one after another.

## Function 3. Browse SVG list

### Defects of other extensions

Other SVG extensions will allow you to preview a single SVG icon, and perhaps some extensions will allow you to preview multiple icons, but:

No extension can help you automatically generate template code fragments suitable for major mainstream UI frameworks (Element UI and Element Plus). This extension solves this problem.

### Usage

Select any number of SVG files or folders containing SVG file from the Explorer on the left of VS Code, right-click and click Browse SVG to open a browsing interface.

### Functions

1. You can browse the SVG list.

2. Built in search file name function.

3. Each SVG can export template code fragments applicable to Element UI and Element Plus.

## Release Notes

### 2.0.1 - 2022-03-27

Add the function of "browse SVG list and export code fragments".

The function of compressing pictures has been removed because it has nothing to do with this extension.

### 1.0.0 - 2022-03-25

Initialize Release.

# element-plus-plus 中文文档

本扩展是针对 Element UI 和 Element Plus 开发者的开发增强工具。功能不断增加中。

## 功能 1. 增强 Vetur 对 Element Plus 组件的鼠标悬停提示

### 安装本扩展前的表现

未使用本扩展，只使用 Vetur 扩展时，Element Plus 组件的鼠标悬停提示功能表现为（以`el-row`组件和它的`justify`属性为例）：

1. 鼠标悬停在标签上时，会提示`Docs`，点击`Docs`可前往官方手册。但是，看不到组件有哪些属性，需要依靠回忆或查询官方手册，很烦。

2. 点击`Docs`可打开官方手册，但是简体中文用户打开手册会看到“建议大陆用户访问部署在国内的站点，是否跳转？”的提示，很烦。

3. 鼠标悬停在组件属性上时，会提示属性的文字介绍和默认值，例如`justify`的提示是`horizontal alignment of flex layout, default: start. Docs`。但是，看不到`justify`的数据类型和可选值，需要靠回忆或查询官方手册，很烦。

### 安装本扩展后的表现

本扩展增强了以上提示，可以尽量避免依赖回忆或查阅官方手册：

1. 鼠标悬停在标签上时，会提示该标签的所有属性。使用前后对比如下：

![安装前](https://microkof.gitee.io/vscode-e-p-p/enhance-plus-tag-before.png)

<center>⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇</center>

![安装后](https://microkof.gitee.io/vscode-e-p-p/enhance-plus-tag-after.png)

2. 本扩展根据操作系统的语言确定`Docs`的链接，如果处于简体中文操作系统中，则替换链接为国内站点，以避免出现烦人的“建议大陆用户访问部署在国内的站点，是否跳转？”提示。

官方手册国际站链接举例：[https://element-plus.org/en-US/component/layout.html](https://element-plus.org/en-US/component/layout.html)

官方手册中文站链接举例：[https://element-plus.gitee.io/zh-CN/component/layout.html](https://element-plus.gitee.io/zh-CN/component/layout.html)

注意：只针对简体中文操作系统做修改，其他语言操作系统不受改动。

3. 鼠标悬停在属性上时，会提示该属性的类型和可选值。使用前后对比如下：

![安装前](https://microkof.gitee.io/vscode-e-p-p/enhance-plus-attr-before.png)

<center>⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇</center>

![安装后](https://microkof.gitee.io/vscode-e-p-p/enhance-plus-attr-after.png)

### 注意事项

目前由于资料收集不全，所以缺少个别组件的属性列表和个别属性的可选值列表，今后作者会想办法补齐。

## 功能 2. 增强 Vetur 对 Element UI 组件的鼠标悬停提示

类似于上述的功能 1，这次是增强 Vetur 对 Element UI 组件的鼠标悬停提示。

### 安装本扩展后的表现

1. 鼠标悬停在标签上时，会提示该标签的所有属性。使用前后对比如下：

![安装前](https://microkof.gitee.io/vscode-e-p-p/enhance-ui-tag-before.png)

<center>⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇</center>

![安装后](https://microkof.gitee.io/vscode-e-p-p/enhance-ui-tag-after.png)

2. 鼠标悬停在属性上时，会提示该属性的类型和可选值。使用前后对比如下：

![安装前](https://microkof.gitee.io/vscode-e-p-p/enhance-ui-attr-before.png)

<center>⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇</center>

![安装后](https://microkof.gitee.io/vscode-e-p-p/enhance-ui-attr-after.png)

### 注意事项

由于目前资料收集不全，所以一部分属性没有可选项提示、并且全部没有添加官方手册链接，之后版本会陆续添加。

## 功能 3. 浏览 SVG 列表

### 其他扩展的缺陷

其他 SVG 扩展会让你预览单个 SVG 图标，或许也有扩展能让你预览多个图标，但是：

没有扩展能帮你自动生成适用于各大主流 UI 框架（Element UI 和 Element Plus）的 template 代码片段。本扩展解决了这个问题。

### 用法

从 VS Code 左侧的资源管理器中选中任意多个含有 SVG 的文件夹和 SVG 文件，右击，点击 Browse Svg 即可打开浏览界面。

### 功能

1. 可浏览 SVG 列表。

2. 内置搜索文件名功能。

3. 每个 SVG 可导出适用于 Element UI、Element Plus 的 template 代码片段。
