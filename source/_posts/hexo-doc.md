---
title: 本站 搭建教程
---
## 简介
搭建博客的心由来已久，本篇文章为记录搭建过程。
博客引擎 [Hexo](https://hexo.io/) 模版 [next](https://theme-next.org)，搭建系统环境为`macOS MoJave 10.14.2`，详细文档请移步官网。
## 配置安装环境
- 安装git
- 安装Node.js
- 安装Hexo

### 创建博客目录
进入到要创建博客的工作目录，例如：`$ cd /User/username/WorkSpaces`
```
$ hexo init blog
$ cd blog
$ npm install
```
### blog目录结构
| 目录名称 | 描述     |
| :------------- | :------------- |
|themes       | 主题安装目录       |
|source   |  资源文件夹 |
|source/\_posts   | 文章资源文件夹 |
### Hexo创建文件命令
由于init命令是创建极简博客环境，所以标签`tags`、分类`categories`、关于`about`均没有对应目录，需要用到以下命令：
```
$ hexo new [layout] <title>
```
布局 [layout](https://hexo.io/docs/writing#Layout) 三种类型见官网
```
$ hexo new page tags
$ hexo new page categories
$ hexo new page about
```
创建完以上三个文件在 `blog/source` 目录下有对应文件生成，修改文件
`source/about/index.md`中type类型为about
`source/tags/index.md`中type类型为tags
`source/categories/index.md`中type类型为categories

## 主题
- 下载next
[Hexo](https://hexo.io/) 官网有大量的主题提供下载，这里以 [next](https://theme-next.org) 为例
```
$ cd blog
$ git clone https://github.com/theme-next/hexo-theme-next themes/next
```
### 配置
在下载完 [next](https://theme-next.org) 主题之后，进入 `themes/next`目录，可以看到`_config.yml`文件
1. 配置主题风格
```
# ---------------------------------------------------------------
# Scheme Settings
# ---------------------------------------------------------------

# Schemes
scheme: Muse
#scheme: Mist
#scheme: Pisces
#scheme: Gemini
```
以上四种主题风格可自行选择，详见[官方文档](https://theme-next.org/docs/getting-started/#Choosing-Scheme)
2. 配置标签`tags`、分类`categories`、关于`about`目录
```
menu:
  home: / || home
  #about: /about/ || user
  #tags: /tags/ || tags
  #categories: /categories/ || th
  archives: /archives/ || archive
  #schedule: /schedule/ || calendar
  #sitemap: /sitemap.xml || sitemap
  #commonweal: /404/ || heartbeat
```
取消`tags`、`categories`、`about`的注释
3. 配置语言环境
这里要注意配置语言环境需要在`blog/\_config.yml`文件中配置，而在`blog/themes/next/\_config.yml`中是不起作用的
```
# language: en
language: zh-Hans
```
4. 设置博客目录
hexo在本地环境运行时将占用`4000`端口，地址为：`http://localhost:4000`，
但是实际部署情况，你可能需要自定义根目录,例如：`http://localhost:4000/blog` 那么需要修改`\_config.yml`文件中的`root: /`为`root: /blog`

### 拓展功能
- [搜索](https://theme-next.org/docs/third-party-services/search-services/#Local-Search)
- [分享](https://theme-next.org/docs/third-party-services/content-sharing-services/#AddThis)

## 本地部署
[hexo命令](https://hexo.io/docs/commands)
```
$ hexo g  // 生成静态文件
$ hexo s  // 启动服务可添加启动参数
//访问地址 http://localhost:4000/
```
## 服务器自动部署
安装部署插件 [hexo-deployer-git](https://github.com/hexojs/hexo-deployer-git)
```
$ npm install hexo-deployer-git --save
```
在`blog/_config.yml`中添加配置
```
deploy:
  type: git
  // 单环境配置
  repo: <repository url>  
  // 多环境配置
  repo:
    github: <github repository url>
    gitee: <gitee repository url>
  branch: [branch]
  message: [message]
```
配置完成执行命令`hexo deploy`
