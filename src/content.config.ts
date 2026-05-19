import { defineCollection } from "astro:content";
import { z } from "astro/zod";
import { glob } from "astro/loaders";

// ── Tools / Equipment ────────────────────────────────────────────────────────
const tools = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/tools" }),
  schema: z.object({
    name: z.string(),
    category: z.string(),
    description: z.string(),
    icon: z.string().optional(),
    difficulty: z.enum(["Beginner", "Intermediate", "Advanced"]).optional(),
    requiresTraining: z.boolean().default(false),
    featured: z.boolean().default(false),
    order: z.number().default(99),
  }),
});

// ── Team members / PIs ───────────────────────────────────────────────────────
const team = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/team" }),
  schema: z.object({
    name: z.string(),
    role: z.string(),
    bio: z.string().optional(),
    email: z.string().email().optional(),
    photo: z.string().optional(),
    order: z.number().default(99),
  }),
});

// ── FAQ entries ──────────────────────────────────────────────────────────────
const faq = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/faq" }),
  schema: z.object({
    question: z.string(),
    category: z.string().default("General"),
    order: z.number().default(99),
  }),
});

export const collections = { tools, team, faq };
