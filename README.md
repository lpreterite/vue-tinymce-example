# vue-tinymce-example

在vue中使用tinymce的例子

## 介绍

这个例子提供给各位想在项目中使用tinymce的伙计。

例子主要分为两个大类：

1. 按需引用（use import）：使用import的方式引用tinymce项目，最终经过webpack打包至项目内部。
2. 全局挂载（use in global）：使用tinymce优秀的插件懒加载功能，tinymce将会以外挂的方式应用至项目。

两种方式任君选择，如何选可以继续阅读下面详情，不想看可以直接下载项目跑起来看看再做选择。

## 按需引用

按需引用能帮你彻底隐藏tinymce，它将被完整地打包至项目。自然其缺点就是打包后文件巨大的体积将会成为一个问题。

> 主题和插件请仔细引用，因为少了漏了功能就会缺失。

选择你的项目：

- [vue-cli](./vue-cli/use_import/README.md)
- [vite](./vite/use_import/README.md)

## 全局挂载

全局挂载的方式可以说是非常便利，一次设置无需管理。当然，后续你将要面对tinymce代码外露和全局作用等风险。

> 这种方式只推荐内部系统使用，防不了小人提防君子还是要的。

选择你的项目：

- [vue-cli](./vue-cli/use_in_global/README.md)
- [vite](./vite/use_in_global/README.md)

