import fs from "fs";
import path from "path";

const distClient = path.resolve("dist", "client");
const assetsDir = path.join(distClient, "assets");

if (!fs.existsSync(distClient)) {
  throw new Error("dist/client directory does not exist. Run npm run build first.");
}
if (!fs.existsSync(assetsDir)) {
  throw new Error("dist/client/assets directory does not exist.");
}

const assets = fs.readdirSync(assetsDir);
const jsAsset = assets.find((file) => /^index-.*\.js$/.test(file));
const cssAsset = assets.find((file) => /^styles-.*\.css$/.test(file));

if (!jsAsset) {
  throw new Error("Unable to find client entry JavaScript asset in dist/client/assets.");
}
if (!cssAsset) {
  throw new Error("Unable to find styles asset in dist/client/assets.");
}

const indexHtml = `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Dr. Faisal Sohail Fateh — Plant Pathology</title>
    <link rel="stylesheet" href="./assets/${cssAsset}" />
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="./assets/${jsAsset}"></script>
  </body>
</html>
`;

fs.writeFileSync(path.join(distClient, "index.html"), indexHtml, "utf8");

console.log("Wrote dist/client/index.html");
