# Hexo  博客搭建

Hexo，一个强大的静态博客生成器。

## 起手技

目前，网络上大部分 Hexo 教程如出一辙：装 `git`  `node`，安装 `hexo` `hexo-cli` 包，然后本地 init、预览，然后安装对应的 deploy 包，再 `hexo deploy` 。这样能用，但麻烦且门槛高。经过我个人的使用，发现采用 GitHub + Netlify + Hexo 持续集成的方案更适合新手上路（Vercel 今日需要手机号验证，不太方便）

准备工作：一个**非国内邮箱注册**的 GitHub 账号，一个**稳定**的科学上网环境，一台**具有现代浏览器**的设备（最好是**电脑**）

### 注册 Netlify 并新建项目

进入 [Netlify 登录页面](https://app.netlify.com)，并选择 **GitHub 登陆**(**Log In With GitHub**)，在弹出页面中登陆 GitHub。

然后点击这个按钮：

[![](https://www.netlify.com/img/deploy/button.svg)](https://www.netlify.com/img/deploy/button.svg)

接着点击 **Connect GitHub**，在弹出窗口中点击 **Authorize Netlify** ，接着点击 **Save & Deploy**.

然后等待，直到出现**Deploy success!** 的告示框。


点击 **Get Started**。


此时点击 Sites 中的那个项目，你会发现如图鼠标处有一个超链接，那就是你的博客。
