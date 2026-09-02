const fs = require('fs');
const path = require('path');
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

console.log("=========================================");
console.log("🚀 INTERNSHIP WORK LOGGER SCRIPT 🚀");
console.log("=========================================\n");

rl.question('1. Project Title (e.g. Email Automation): ', (title) => {
  rl.question('2. Week Number (e.g. Week 5): ', (week) => {
    rl.question('3. Tags (comma separated, e.g. Node.js, API): ', (tags) => {
      console.log("\n4. What did you accomplish? (Type '\\n' for new bullet points)");
      rl.question('Tasks: ', (content) => {
        
        const date = new Date().toISOString().split('T')[0];
        // Create a URL-safe filename
        const filename = `${date}-${title.toLowerCase().replace(/[^a-z0-9]+/g, '-')}.md`;
        const filepath = path.join(__dirname, 'src', 'content', 'logs', filename);
        
        // Format tags and content
        const formattedTags = tags.split(',').map(t => `"${t.trim()}"`).join(', ');
        const formattedContent = content.split('\\n').map(line => `- ${line.trim()}`).join('\n');

        const markdown = `---
title: "${title}"
date: "${date}"
week: "${week}"
tags: [${formattedTags}]
---
${formattedContent}
`;

        // Write the file to the Next.js directory
        fs.writeFileSync(filepath, markdown);
        
        console.log(`\n✅ Success! File generated at: src/content/logs/${filename}`);
        console.log(`The website will automatically read this and update the Project Gallery!`);
        rl.close();
      });
    });
  });
});
