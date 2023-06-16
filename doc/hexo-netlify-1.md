# Hexo 博客搭建

Hexo，一个强大的静态博客生成器。

## 起手技

目前，网络上大部分 Hexo 教程如出一辙：装 `git` `node`，安装 `hexo` `hexo-cli` 包，然后本地 init、预览，然后安装对应的 deploy 包，再 `hexo deploy` 。这样能用，但麻烦且门槛高。经过我个人的使用，发现采用 GitHub + Netlify + Hexo 持续集成的方案更适合新手上路（Vercel 今日需要手机号验证，不太方便）

准备工作：一个**非国内邮箱注册**的 GitHub 账号，一个**稳定**的科学上网环境，一台**具有现代浏览器**的设备（最好是**电脑**）

> 其实国内邮箱经我注册尝试是**可以使用**的，但有人说国内邮箱会出一些**奇怪的问题**，这里就提前说一下防止进坑了。

### 注册 Netlify 并新建项目

进入 [Netlify 登录页面](https://app.netlify.com)，并选择 **GitHub 登陆**(**Log In With GitHub**)，在弹出页面中登陆 GitHub。

然后点击这个按钮：

[![](https://www.netlify.com/img/deploy/button.svg)](https://www.netlify.com/img/deploy/button.svg)

接着点击 **Connect GitHub**，在弹出窗口中点击 **Authorize Netlify** ，接着点击 **Save & Deploy**.

然后等待，直到出现**Deploy success!** 的告示框。

然后，点击 **Get Started**。

此时会回到首页，点击 Sites 中的那个项目（如果你是新注册的，这应该是你唯一的一个项目），你会发现如图鼠标处有一个超链接，那就是你的博客地址。

发现有点长，是吧？

这里我们点击就在它下面的 **Site settings**，然后点击接下来页面中的**change site name**，使用它来更改我们站点的名称。

这里我们随便起一个，比如 blog，点击 **save**，他会提示我们**This site name is already taken**，也就是 这个名字已经被起了。

在起一个，比如 adkblog,就更改成功了。此时你博客的地址就会变成 **你改的名字.netlify.app**

当然，如果你有域名的话，也可以添加自己的域名，只不过是在 **domain settings** 当中。

到这里，一个博客基本就搭建完成了。接下来，你就要问了：我怎么写文章呀？

## 充能强化

管理文章有很多方法。

*   无需配置的方式是直接在 GitHub 上更改。你只需要在 GitHub 中进入 **source/\_post** 目录，在里面新建扩展名为 **.md** 的文件即可。当然你也可以复制已经存在的 **hello-world.md** 更改。另外，在 **source** 文件夹中新建文件夹并放入一个 **index.md** 文件，就是一个页面。
*   你还可以使用 **netlify cms**. 这个也是 netlify一个很好的特性。
*   你也可以用一些其他的项目，比如[Wexagonal](https://wexa.top) [Qexo](https://www.oplog.cn/qexo/) 但似乎这两个都没有对 netlify 进行专门支持，更适合 vercel 用户。

至于后两种具体的部署方法，由于其文档写的十分出色，这里就不再赘述。至于 netlify cms的方案，这里稍微提一下。

大致流程可参考[这篇文章](https://zhuanlan.zhihu.com/p/77651304?utm_id=0)的**Netlify CMS操作记录**部分。这一部分的第一个步骤由于我们没有使用本地环境，所以需要不同的实现方法。

我们要在我们项目根目录的 **package.json** 中，在 **dependencies** 字段中，新加一条:

```json
"hexo-netlify-cms": "^3.0.0"
```

修改后的可能是这样:

```json
{
 "name": "hexo-site",
 "version": "0.0.0",
 "private": true,
 "scripts": {
   "build": "hexo generate",
   "clean": "hexo clean",
   "deploy": "hexo deploy",
   "server": "hexo server"
 },
 "hexo": {
   "version": ""
 },
 "dependencies": {
   "hexo": "6.3.0",
   "crypto-js": "4.1.1",
   "hexo-generator-searchdb": "1.4.1",
   "hexo-generator-archive": "2.0.0",
   "hexo-generator-category": "2.0.0",
   "hexo-generator-index": "3.0.0",
   "hexo-generator-feed": "3.0.0",
   "hexo-generator-sitemap": "3.0.1",
   "hexo-generator-search": "2.4.3",
   "hexo-generator-tag": "2.0.0",
   "hexo-renderer-ejs": "2.0.0",
   "hexo-renderer-marked": "6.0.0",
   "hexo-renderer-stylus": "3.0.0",
   "hexo-renderer-pug": "3.0.0",
   "hexo-server": "3.0.0",
   "hexo-theme-butterfly": "4.8.5",
   "hexo-wordcount": "6.0.1",
   "hexo-netlify-cms": "^3.0.0"
 }
}
```

需要注意的是在家的这一条之前，一定要补一个**英文逗号**。然后的流程可以按照上面那篇文章进行。

## 配置文件

方才，我们没有进行配置。这时我们需要进行配置。配置主要在项目根目录中的 **\_config.yml** 中进行。

我们主要修改前两段。其中以 **#** 开头的是注释，没有用处，不需要更改。

```yaml
# Hexo Configuration
## Docs: https://hexo.io/docs/configuration.html
## Source: https://github.com/hexojs/hexo/

# Site
title: Hexo
subtitle: ''
description: ''
keywords:
author: John Doe
language: zh-CN
timezone: ''

# URL
## Set your site url here. For example, if you use GitHub Page, set url as 'https://username.github.io/project'
url: https://example.com
permalink: :category/:title/
permalink_defaults:
pretty_urls:
  trailing_index: true # Set to false to remove trailing 'index.html' from permalinks
  trailing_html: true # Set to false to remove trailing '.html' from permalinks

```

主要更改的是如下字段 **title subtitle description author url** 这几个。语义性很强，可以直接翻译为**标题 副标题 介绍 作者 网址**。注意这几个是整个站点的配置，而非某个页面。

至于目录中的 **\_config.butterfly.yml** ，是 butterfly 的主题配置文件，可以参照 [butterfly 文档](https://butterfly.js.org)。

你也可以在 [Hexo 主题页面](https://hexo.io/themes/)选择你喜欢的，根据其教程更换即可。
