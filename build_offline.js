const fs = require('fs');
const path = require('path');

const indexHtmlPath = path.join(__dirname, 'index.html');
const styleCssPath = path.join(__dirname, 'style.css');
const appJsPath = path.join(__dirname, 'app.js');
const outputPath = path.join(__dirname, 'index_offline.html');

console.log('Building offline-ready standalone HTML...');

let indexHtml = fs.readFileSync(indexHtmlPath, 'utf8');
let styleCss = fs.readFileSync(styleCssPath, 'utf8');
let appJs = fs.readFileSync(appJsPath, 'utf8');

// 1. Replace the stylesheet link tag with inline <style> block
const styleLinkRegex = /<link rel="stylesheet" href="style\.css">/i;
if (styleLinkRegex.test(indexHtml)) {
  indexHtml = indexHtml.replace(styleLinkRegex, `<style>\n${styleCss}\n</style>`);
  console.log('Inlined style.css successfully.');
} else {
  console.log('Warning: <link rel="stylesheet" href="style.css"> not found.');
}

// 2. Replace the script tag with inline <script> block
const scriptTagRegex = /<script src="app\.js"><\/script>/i;
if (scriptTagRegex.test(indexHtml)) {
  indexHtml = indexHtml.replace(scriptTagRegex, `<script>\n${appJs}\n</script>`);
  console.log('Inlined app.js successfully.');
} else {
  console.log('Warning: <script src="app.js"></script> not found.');
}

// 3. Write the compiled content to index_offline.html
fs.writeFileSync(outputPath, indexHtml, 'utf8');
console.log(`Successfully created standalone offline file: ${outputPath}`);
