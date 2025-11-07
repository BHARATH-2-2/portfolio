import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
    type: 'content',
    schema: z.object({
        title: z.string(),
        description: z.string().max(160),
        pubDate: z.coerce.date(),
        updatedDate: z.coerce.date().optional(),
        tags: z.array(z.string()).default([]),
        heroImage: z.string().optional()
    })
});

const projects = defineCollection({
    type: 'content',
    schema: z.object({
        title: z.string(),
        description: z.string().max(180),
        year: z.number(),
        tech: z.array(z.string()).default([]),
        link: z.string().url().optional(),
        repo: z.string().url().optional(),
        cover: z.string().optional()
    })
});

export const collections = { blog, projects };

