import fs from "fs";

let README_TEMPLATE = fs.readFileSync("./README-template.md", { encoding: "utf-8" });

let ate = new Date()

let date = ate.getFullYear()+"-"+(ate.getMonth()+1)+"-"+ate.getDate()+ "    "+ate.getHours() + ":" + ate.getMinutes()
let fetcher = await fetch(`https://api.github.com/users/${USERNAME}/starred`);
const body = await fetcher.json()
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
 
