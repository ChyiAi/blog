---
title: macOS系统目录
categories: macOS
excerpt: "macOS文件系统介绍"
---
[摘录自官方文档](https://developer.apple.com/library/archive/documentation/FileManagement/Conceptual/FileSystemProgrammingGuide/FileSystemOverview/FileSystemOverview.html#/)

| 目录       | 官方描述    | 简述 |
| :------------- | :------------- | :------------- |
|/Applications | This directory is where you install apps intended for use by all users of a computer. The App Store installs apps purchased by the user in this directory automatically.   |app存储目录|
|Library | There are multiple Library directories on the system, each one associated with a different domain or specific user. Apps should use the Library directory to store app-specific (or system-specific) resources. |资源目录，很多目录的子目录下都有关联的library|
|/Network | This directory contains the list of computers in the local area network.  |网络相关|
|/System   | This directory contains the system resources required by macOS to run. These resources are provided by Apple and must not be modified.This directory comprises the contents of the system domain.  |macOS运行所需资源目录|
|/Users  | This directory contains one or more user home directories. The user home directory is where user-related files are stored. A typical user’s home directory includes the following subdirectories:</br>Applications—Contains user-specific apps.</br>Desktop—Contains the items on the user’s desktop.</br>Downloads—Contains files downloaded from the Internet.</br>Library—Contains user-specific app files (hidden in macOS 10.7 and later).</br>Movies—Contains the user’s video files.</br>Music—Contains the user’s music files.</br>Pictures—Contains the user’s photos.</br>Public—Contains content the user wants to share.</br>Sites—Contains web pages used by the user’s personal site. (Web Sharing must be enabled to display these pages.)  |用户目录 |
unix文件介绍
