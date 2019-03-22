---
title: Intellij Idea 使用常见问题总结
tags: Idea
---
### Plugins
1. 安装插件
`Settings/Preference` `⌘,` -> `Plugins` -> `Install plugin from disk..` （选择下载完成的`jar`）
2. 浏览插件
`Settings/Preference` `⌘,` -> `Plugins` -> `Browse repositories..`

### ToolBars
在工具栏添加自定义按钮（以添加git工具push按钮为例）
`Settings/Preference` `⌘,` -> `Appearance & Behavior` -> `Menus and Toolbars` -> `Navigation Bar Toolbar` -> `NavBarVcsGroup`
由于git组件按钮属于`Navigation Bar`所以在这里添加 通过`Add After`找到`push`按钮

###  mac下 idea debugger [加载慢的问题](https://stackoverflow.com/questions/20658400/intellij-idea-hangs-while-finished-saving-caches)
