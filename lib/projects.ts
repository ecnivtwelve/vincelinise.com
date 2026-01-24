import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import type { Locale } from '@/i18n/config';

const projectsDirectory = path.join(process.cwd(), 'content/projects');

export interface ProjectData {
  slug: string;
  frontmatter: {
    title: string;
    description: string;
    date: string;
    tags: string[];
    image: string;
    logo: string;
    accentColor: string;
    [key: string]: any;
  };
  content: string;
}

export function getProjectSlugs() {
  if (!fs.existsSync(projectsDirectory)) {
    return [];
  }
  const files = fs.readdirSync(projectsDirectory).filter((file) => file.endsWith('.mdx'));
  // Extract unique slugs (remove language suffixes like .fr or .en)
  const slugs = Array.from(new Set(
    files.map(file => file.replace(/\.(fr|en)\.mdx$/, '.mdx'))
  ));
  return slugs;
}

export function getProjectBySlug(slug: string, locale: Locale = 'fr'): ProjectData {
  const realSlug = slug.replace(/\.mdx$/, '');

  // Try to load locale-specific version first
  let fullPath = path.join(projectsDirectory, `${realSlug}.${locale}.mdx`);

  // Fallback to French version if locale version doesn't exist
  if (!fs.existsSync(fullPath)) {
    console.warn(`Project file not found for locale '${locale}': ${fullPath}, falling back to French version`);
    fullPath = path.join(projectsDirectory, `${realSlug}.fr.mdx`);
  }

  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { data, content } = matter(fileContents);

  return {
    slug: realSlug,
    frontmatter: data as ProjectData['frontmatter'],
    content,
  };
}

export function getAllProjects(locale: Locale = 'fr'): ProjectData[] {
  const slugs = getProjectSlugs();
  const projects = slugs
    .map((slug) => getProjectBySlug(slug, locale))
    // Sort projects by date in descending order
    .sort((project1, project2) => (project1.frontmatter.date > project2.frontmatter.date ? -1 : 1));
  return projects;
}
