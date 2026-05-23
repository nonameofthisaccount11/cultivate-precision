const fs = require("fs");
const path = require("path");

const srcDir = path.join(__dirname, "..", "src");

function walk(dir) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    if (stat.isDirectory()) {
      walk(filePath);
    } else if (filePath.match(/\.(ts|tsx|css|html)$/)) {
      const content = fs.readFileSync(filePath, "utf8");
      // Simple regex for emojis/special characters
      const emojiRegex = /[\uD800-\uDBFF][\uDC00-\uDFFF]|\p{Emoji_Presentation}/gu;
      const matches = content.match(emojiRegex);
      if (matches) {
        // Filter out common harmless characters like bullets, dashes, etc., or keep if actually emojis
        const actualEmojis = matches.filter((m) => {
          // Exclude checkmark, circle, dots, and common text symbols that might match
          const code = m.codePointAt(0);
          // Emojis are usually in higher ranges
          return code > 0x2000;
        });
        if (actualEmojis.length > 0) {
          console.log(`File: ${filePath}`);
          console.log(`Found emojis: ${actualEmojis.join(", ")}`);
        }
      }
    }
  }
}

walk(srcDir);
