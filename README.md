# element-plus-plus README

This extension is a development enhancement tool for Element UI and Element Plus developers. Functions are increasing.

## 1. Enhance vetur's Hover content for Element Plus components

### Performance without this extension

The Hover of Element Plus component is shown in the following when using the vetur extension only:

1. When the mouse hovers over the tag, taking the `El Row` component as an example, it will prompt `Docs`. Click `Docs` can go to the official manual.

2. When the mouse hovers over the attribute, it will prompt the text introduction and default value. For example, the prompt of `justify` is `horizontal alignment of flex layout, default: start. Docs`.

3. Click `Docs` can open the official manual, but if you open the manual in Simplified Chinese, you will see "建议大陆用户访问部署在国内的站点，是否跳转？". It's annoying.

### Performance after installing this extension

This extension enhances the above hover tips, which can avoid the tedious of consulting the official manual as far as possible:

1. When you hover over a label, you are prompted for all the attributes of the label. The comparison is as follows:

```
Docs
```

```
attributes: <"gutter" | "justify" | "align" | "tag">

Docs
```

2. When you hover over an attribute, you are prompted for the type and optional value of the attribute. Take `justify` as an example, the comparison is as follows:

```
horizontal alignment of flex layout, default: start.

Docs
```

```
horizontal alignment of flex layout, default: start.

type: string

options: <"start" | "end" | "center" | "space-around" | "space-between" | "space-evenly">

Docs
```

3. This extension modifies the link of `Docs` to directly link to the sites of the official manual deployed in China to avoid the annoying "建议大陆用户访问部署在国内的站点，是否跳转？" Tips.

Originally: [https://element-plus.org/en-US/component/layout.html](https://element-plus.org/en-US/component/layout.html)

Now: [https://element-plus.gitee.io/zh-CN/component/layout.html](https://element-plus.gitee.io/zh-CN/component/layout.html)

Note: only the simplified Chinese operating system will be modified, and other language operating systems will not be changed.

## 2. Lossless compression of picture size and default conversion to interleaved progressive format

### Supported picture formats

- jpg、jpeg (Lossy)
- png (Lossless)
- gif (Lossless)
- svg (Lossless)

### Default conversion to interleaved progressive format

By default, JPG, JPEG, PNG and GIF are interleaved and gradually converted.

### Usage

Right click one or more folders / files in the Explorer area of VS Code and click "Compress Images".

### Attention

In practice, the size of very few pictures will become larger after being compressed by this expansion. This is because they have been compressed earlier. They are already compressed pictures, so they can not be compressed losslessly. In addition, after this expansion adds the interleaved progressive format to the pictures, it is normal that the picture size becomes larger. Although the picture size becomes larger, it enhances the user experience, which is also worth it.

## Release Notes

### 1.0.0 - 2022-03-25

Initialize Release.

# element-plus-plus 中文文档

本扩展是针对 Element UI 和 Element Plus 开发者的开发增强工具。功能不断增加中。

## 1. 增强 Vetur 对 Element Plus 组件的鼠标提示

### 未使用本扩展时的表现

未使用本扩展，只使用 Vetur 扩展时，Element Plus 组件的鼠标提示功能表现于：

1. 鼠标悬停在标签上时，以`el-row`组件为例，会提示`Docs`，点击`Docs`可前往官方手册。

2. 鼠标悬停在属性上时，会提示文字介绍和默认值，例如`justify`的提示是`horizontal alignment of flex layout, default: start. Docs`。

3. 点击`Docs`可打开官方手册，但是简体中文用户打开手册会看到“建议大陆用户访问部署在国内的站点，是否跳转？”的提示，很烦。

### 安装了本扩展后的表现

本扩展增强了以上提示，可以尽量避免查阅官方手册的繁琐：

1. 鼠标悬停在标签上时，提示该标签的所有属性。对比如下：

```
Docs
```

```
attributes: <"gutter" | "justify" | "align" | "tag">

Docs
```

2. 鼠标悬停在属性上时，提示该属性的类型和可选值。以`justify`为例，对比如下：

```
horizontal alignment of flex layout, default: start.

Docs
```

```
horizontal alignment of flex layout, default: start.

type: string

options: <"start" | "end" | "center" | "space-around" | "space-between" | "space-evenly">

Docs
```

3. 本扩展修改了`Docs`的链接，直接链接到官方手册部署在国内的站点，避免出现烦人的“建议大陆用户访问部署在国内的站点，是否跳转？”提示。

原本是：[https://element-plus.org/en-US/component/layout.html](https://element-plus.org/en-US/component/layout.html)

现在是：[https://element-plus.gitee.io/zh-CN/component/layout.html](https://element-plus.gitee.io/zh-CN/component/layout.html)

注意：只针对简体中文操作系统做修改，其他语言操作系统不受改动。

## 2. 无损压缩图片大小且默认转换为交错渐进格式

### 支持的图片格式

- jpg、jpeg（有损）
- png（无损）
- gif（无损）
- svg（无损）

### 默认转换为交错渐进格式

默认即对 jpg、jpeg、png、gif 进行交错渐进转换。

### 使用方法

在资源管理器区域右击一个或多个文件夹/文件，点击 Compress Images 即可。

### 注意事项

实践中极少数图片经过本扩展工具压缩之后大小反而会变大，这是因为它早前已经被压缩过，已经是压缩过的图片，所以它在无损前提下无法被继续压缩，并且，本扩展为图片加入交错渐进格式之后，图片大小变大一点属于正常现象，尽管图片大小变大了一点，但增强了用户体验，也是值得的。
