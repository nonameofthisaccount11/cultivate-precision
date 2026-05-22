import os
import re

# Simple script to search for emoji/unicode characters in the source files
emoji_pattern = re.compile(
    r'[\U00010000-\U0010ffff]|[\u2600-\u27bf]'
)

src_dir = r"i:\Vscode\cultivate-precision\src"

for root, dirs, files in os.walk(src_dir):
    for file in files:
        if file.endswith(('.ts', '.tsx', '.css', '.html')):
            path = os.path.join(root, file)
            try:
                with open(path, 'r', encoding='utf-8') as f:
                    content = f.read()
                matches = emoji_pattern.findall(content)
                if matches:
                    print(f"File: {path}")
                    print(f"Found emojis: {matches}")
            except Exception as e:
                print(f"Error reading {path}: {e}")
