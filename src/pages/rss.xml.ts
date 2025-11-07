import { getCollection } from 'astro:content';
import type { APIRoute } from 'astro';

export const GET: APIRoute = async ({ site }) => {
    const posts = (await getCollection('blog'))
        .sort((a, b) => +new Date(b.data.pubDate) - +new Date(a.data.pubDate))
        .slice(0, 20);

    const baseURL = site?.href || 'https://example.com';
    
    const rssItems = posts.map((post) => {
        const pubDate = new Date(post.data.pubDate).toUTCString();
        const link = `${baseURL}/blog/${post.slug}`;
        
        return `    <item>
      <title><![CDATA[${post.data.title}]]></title>
      <description><![CDATA[${post.data.description}]]></description>
      <link>${link}</link>
      <guid isPermaLink="true">${link}</guid>
      <pubDate>${pubDate}</pubDate>
    </item>`;
    }).join('\n');

    const rss = `<?xml version="1.0" encoding="UTF-8" ?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>Bharath N — Blog</title>
    <description>Technical articles, notes, and insights by Bharath N.</description>
    <link>${baseURL}</link>
    <atom:link href="${baseURL}/rss.xml" rel="self" type="application/rss+xml" />
    <language>en-us</language>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
${rssItems}
  </channel>
</rss>`;

    return new Response(rss, {
        headers: {
            'Content-Type': 'application/xml; charset=utf-8',
        },
    });
};
