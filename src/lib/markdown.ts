import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';

const contentDirectory = path.join(process.cwd(), 'src/content/logs');

export interface LogEntry {
  id: string;
  title: string;
  date: string;
  week: string;
  tags: string[];
  contentHtml: string;
}

export async function getSortedLogsData(): Promise<LogEntry[]> {
  // Create dir if not exists
  if (!fs.existsSync(contentDirectory)) {
    fs.mkdirSync(contentDirectory, { recursive: true });
  }

  const fileNames = fs.readdirSync(contentDirectory);
  const allLogsData = await Promise.all(
    fileNames
      .filter((fn) => fn.endsWith('.md'))
      .map(async (fileName) => {
        const id = fileName.replace(/\.md$/, '');
        const fullPath = path.join(contentDirectory, fileName);
        const fileContents = fs.readFileSync(fullPath, 'utf8');

        // Use gray-matter to parse the post metadata section
        const matterResult = matter(fileContents);

        // Use remark to convert markdown into HTML string
        const processedContent = await remark()
          .use(html)
          .process(matterResult.content);
        const contentHtml = processedContent.toString();

        return {
          id,
          title: matterResult.data.title || 'Untitled',
          date: matterResult.data.date || '1970-01-01',
          week: matterResult.data.week || '',
          tags: matterResult.data.tags || [],
          contentHtml,
        };
      })
  );

  // Sort logs by date (oldest first, so Week 1 appears first, or newest first depending on preference)
  // Let's sort oldest first so it reads chronologically Week 1 -> Week 4
  return allLogsData.sort((a, b) => {
    if (a.date > b.date) {
      return 1;
    } else {
      return -1;
    }
  });
}
