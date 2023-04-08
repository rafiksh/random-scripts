const fs = require("fs");

const urls = [];

async function download(url) {
  const { default: fetch } = await import("node-fetch");
  const response = await fetch(url);
  const buffer = await response.buffer();
  const filename = url.substring(url.lastIndexOf("/") + 1);
  fs.writeFile(filename, buffer, () => console.log(`Downloaded ${url}`));
}

async function downloadAll(urls) {
  for (let url of urls) {
    await download(url);
  }
}

downloadAll(urls);
