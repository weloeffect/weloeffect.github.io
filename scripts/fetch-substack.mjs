import { access, mkdir, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const feedUrl = 'https://walidabdela.substack.com/feed';
const projectRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const outputPath = path.join(projectRoot, 'src', 'data', 'substack-posts.json');

const decodeEntities = (value) =>
  value
    .replace(/<!\[CDATA\[([\s\S]*?)\]\]>/g, '$1')
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&#39;|&apos;/g, "'")
    .replace(/&#(\d+);/g, (_, code) => String.fromCodePoint(Number(code)));

const readTag = (item, tag) => {
  const escapedTag = tag.replace(':', '\\:');
  const match = item.match(new RegExp(`<${escapedTag}(?:\\s[^>]*)?>([\\s\\S]*?)<\\/${escapedTag}>`, 'i'));
  return match ? decodeEntities(match[1]).trim() : '';
};

const textOnly = (html) =>
  decodeEntities(html.replace(/<[^>]*>/g, ' ').replace(/\s+/g, ' ').trim());

try {
  const response = await fetch(feedUrl, { headers: { 'User-Agent': 'Walid-Abdela-Portfolio/1.0' } });
  if (!response.ok) throw new Error(`Substack returned ${response.status}`);

  const xml = await response.text();
  const items = [...xml.matchAll(/<item>([\s\S]*?)<\/item>/gi)].slice(0, 3);
  const posts = items.map(([, item]) => {
    const content = readTag(item, 'content:encoded') || readTag(item, 'description');
    const description = textOnly(readTag(item, 'description'));
    const imageMatch = content.match(/<img[^>]+src=["']([^"']+)["']/i);

    return {
      title: textOnly(readTag(item, 'title')),
      url: readTag(item, 'link').split('?')[0],
      publishedAt: new Date(readTag(item, 'pubDate')).toISOString(),
      excerpt: description.length >= 40 ? description.slice(0, 220) : '',
      image: imageMatch ? decodeEntities(imageMatch[1]) : '',
    };
  }).filter((post) => post.title && post.url);

  if (posts.length === 0) throw new Error('No public articles were found in the feed');

  await mkdir(path.dirname(outputPath), { recursive: true });
  await writeFile(outputPath, `${JSON.stringify(posts, null, 2)}\n`, 'utf8');
  console.log(`Updated ${posts.length} Substack article${posts.length === 1 ? '' : 's'}.`);
} catch (error) {
  try {
    await access(outputPath);
    console.warn(`Substack sync skipped: ${error.message}. Using cached articles.`);
  } catch {
    throw error;
  }
}
