import got from "gh-got";
import fs from "fs";

const USERNAME = "adkimsm";

let README_TEMPLATE = `<h1 align="center">大道至简 | The Best Way is Simple</h1>

- 👋 Hi, I’m Adkimsm.

> 初二摆烂人

> 暑假快没了，作业还没写，赶作业去了

## Badges

![](https://gitwar.herokuapp.com/badge?username=Adkimsm&style=for-the-badge)

### Often Read

![MDN Web Docs](https://img.shields.io/badge/MDN_Web_Docs-black?style=for-the-badge&logo=mdnwebdocs&logoColor=white) 

### My Environment

![Lenovo](https://img.shields.io/badge/lenovo-E2231A?style=for-the-badge&logo=lenovo&logoColor=white) ![Xiaomi](https://img.shields.io/badge/Xiaomi-%23FF6900.svg?style=for-the-badge&logo=xiaomi&logoColor=white) ![Arch](https://img.shields.io/badge/Arch%20Linux-1793D1?logo=arch-linux&logoColor=fff&style=for-the-badge) ![Android](https://img.shields.io/badge/Android-3DDC84?style=for-the-badge&logo=android&logoColor=white) ![Openwrt](https://img.shields.io/badge/OpenWRT-00B5E2?style=for-the-badge&logo=OpenWrt&logoColor=white) ![StarShip](https://img.shields.io/badge/starship-DD0B78?style=for-the-badge&logo=starship&logoColor=white) ![Google Chrome](https://img.shields.io/badge/Google%20Chrome-4285F4?style=for-the-badge&logo=GoogleChrome&logoColor=white) ![Tor](https://img.shields.io/badge/Tor-7D4698?style=for-the-badge&logo=Tor-Browser&logoColor=white) ![Google](https://img.shields.io/badge/google-4285F4?style=for-the-badge&logo=google&logoColor=white) ![Bing](https://img.shields.io/badge/Microsoft%20Bing-258FFA?style=for-the-badge&logo=Microsoft%20Bing&logoColor=white) ![Git](https://img.shields.io/badge/git-%23F05033.svg?style=for-the-badge&logo=git&logoColor=white) ![GitHub](https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white) ![Vim](https://img.shields.io/badge/VIM-%2311AB00.svg?style=for-the-badge&logo=vim&logoColor=white) ![Visual Studio Code](https://img.shields.io/badge/Visual%20Studio%20Code-0078d7.svg?style=for-the-badge&logo=visual-studio-code&logoColor=white)
 
### Where can you find me?

> ~~I don't want you to find me (hhh)~~
 
 ![Notion](https://img.shields.io/badge/Notion-%23000000.svg?style=for-the-badge&logo=notion&logoColor=white) ![Gmail](https://img.shields.io/badge/Gmail-D14836?style=for-the-badge&logo=gmail&logoColor=white) ![Slack](https://img.shields.io/badge/Slack-4A154B?style=for-the-badge&logo=slack&logoColor=white) ![Telegram](https://img.shields.io/badge/Telegram-2CA5E0?style=for-the-badge&logo=telegram&logoColor=white) ![Tencent QQ](https://img.shields.io/badge/Tencent%23QQ-%2312B7F5?style=for-the-badge&logo=tencentqq&logoColor=white) ![Twitter](https://img.shields.io/badge/Twitter-%231DA1F2.svg?style=for-the-badge&logo=Twitter&logoColor=white) ![WeChat](https://img.shields.io/badge/WeChat-07C160?style=for-the-badge&logo=wechat&logoColor=white)

### My Skills

![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white) ![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white) ![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E) ![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white) ![Markdown](https://img.shields.io/badge/markdown-%23000000.svg?style=for-the-badge&logo=markdown&logoColor=white) ![Python](https://img.shields.io/badge/python-3670A0?style=for-the-badge&logo=python&logoColor=ffdd54) ![C](https://img.shields.io/badge/C-00599C?style=for-the-badge&logo=c&logoColor=white) ![GitHub Actions](https://img.shields.io/badge/github%20actions-%232671E5.svg?style=for-the-badge&logo=githubactions&logoColor=white) ![MongoDB](https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=for-the-badge&logo=mongodb&logoColor=white) ![Supabase](https://img.shields.io/badge/Supabase-3ECF8E?style=for-the-badge&logo=supabase&logoColor=white) ![Electron.js](https://img.shields.io/badge/Electron-191970?style=for-the-badge&logo=Electron&logoColor=white)![Node.js](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white) ![NPM](https://img.shields.io/badge/NPM-%23000000.svg?style=for-the-badge&logo=npm&logoColor=white) ![JWT](https://img.shields.io/badge/JWT-black?style=for-the-badge&logo=JSON%20web%20tokens) ![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB) ![Next JS](https://img.shields.io/badge/Next-black?style=for-the-badge&logo=next.js&logoColor=white) ![Pug](https://img.shields.io/badge/Pug-FFF?style=for-the-badge&logo=pug&logoColor=A86454) ![jQuery](https://img.shields.io/badge/jquery-%230769AD.svg?style=for-the-badge&logo=jquery&logoColor=white) ![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white) ![SASS](https://img.shields.io/badge/SASS-hotpink.svg?style=for-the-badge&logo=SASS&logoColor=white) ![Less](https://img.shields.io/badge/less-2B4C80?style=for-the-badge&logo=less&logoColor=white) ![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB) ![React Router](https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white) ![Vite](https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white) ![Webpack](https://img.shields.io/badge/webpack-%238DD6F9.svg?style=for-the-badge&logo=webpack&logoColor=black) ![ESLint](https://img.shields.io/badge/ESLint-4B3263?style=for-the-badge&logo=eslint&logoColor=white) ![Prettier](https://img.shields.io/badge/prettier-1A2C34?style=for-the-badge&logo=prettier&logoColor=F7BA3E) 

### I Deployed at 

![Cloudflare](https://img.shields.io/badge/Cloudflare-F38020?style=for-the-badge&logo=Cloudflare&logoColor=white) ![Heroku](https://img.shields.io/badge/heroku-%23430098.svg?style=for-the-badge&logo=heroku&logoColor=white) ![Netlify](https://img.shields.io/badge/netlify-%23000000.svg?style=for-the-badge&logo=netlify&logoColor=#00C7B7) ![Vercel](https://img.shields.io/badge/vercel-%23000000.svg?style=for-the-badge&logo=vercel&logoColor=white)

![](https://github-readme-stats.vercel.app/api?username=adkimsm&show_icons=true&count_private=true&hide=prs&theme=default_repocard)

![](https://github-readme-stats.vercel.app/api/top-langs/?username=adkimsm&layout=compact)

## Recent Stars

<table>
  <tr>
    <td>Name</td>
    <td>Description</td>
  </tr>
  {{CONTENT}}
</table>

Update At {{DATE}}

---

<h3 align="center">𝓵𝓲𝓯𝓮,𝓵𝓸𝓿𝓮,𝓵𝓲𝓷𝓾𝔁</h3>
`;

let ate = new Date()

let date = ate.getFullYear()+"-"+(ate.getMonth()+1)+"-"+ate.getDate()+ "    "+ate.getHours() + ":" + ate.getMinutes()
let { body } = await got(`/users/${USERNAME}/starred`);
const starred = await body
  .slice(0, 10)
  .reduce((str, cur) => str + generateRepoHTML(cur), "");

function generateRepoHTML(item) {
  return `
  <tr>
    <td><a href=${item.html_url}>${item.full_name}</a></td>
    <td>${item.description || ""}</td>
  </tr>`;
}

let readmeContent = README_TEMPLATE.replace(/{{CONTENT}}/, starred).replace(/{{DATE}}/, date)

fs.writeFileSync("./readme.md", readmeContent, { encoding: "utf-8" });
 
