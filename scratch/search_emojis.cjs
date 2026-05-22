const fs = require('fs');
const path = require('path');

const srcDir = path.join(__dirname, '..', 'src');

function walk(dir) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    if (stat.isDirectory()) {
      walk(filePath);
    } else if (filePath.match(/\.(ts|tsx|css|html)$/)) {
      const content = fs.readFileSync(filePath, 'utf8');
      const emojiRegex = /[\uD800-\uDBFF][\uDC00-\uDFFF]|\p{Emoji}/gu;
      const matches = content.match(emojiRegex);
      if (matches) {
        // Just print everything matched
        console.log(`File: ${filePath}`);
        console.log(`Found: ${Array.from(new Set(matches)).join(', ')}`);
      }
    }
  }
}

walk(srcDir);
