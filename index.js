import got from "gh-got";
import fs from "fs";

const USERNAME = "adkimsm";

let README_TEMPLATE = `<h1 align="center">Welcome To Adkinsm's Profile On GitHub</h1>

- 👋 Hi, I’m Adkimsm.

> 初二摆烂人

> 暑假快没了，作业还没写，赶作业去了

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
`;

let ate = new Date()

let date = ate.getFullYear()+"-"+(ate.getMonth()+1)+"-"+ate.getDate();
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
