import got from "gh-got";
import fs from "fs";

const USERNAME = "adkimsm";

let README_TEMPLATE = `<h1 align="center">Welcome To Adkinsm's Profile On GitHub</h1>

- 👋 Hi, I’m Adkimsm.

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

let date = Date.getFullYear()+"-"+(Date.getMonth()+1)+"-"+Date.getDate();
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

let readmeContent = README_TEMPLATE.replace(/{{CONTENT}}/, starred);

fs.writeFileSync("./readme.md", readmeContent, { encoding: "utf-8" });
