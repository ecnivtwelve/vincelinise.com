import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

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
  return fs.readdirSync(projectsDirectory).filter((file) => file.endsWith('.mdx'));
}

export function getProjectBySlug(slug: string): ProjectData {
  const realSlug = slug.replace(/\.mdx$/, '');
  const fullPath = path.join(projectsDirectory, `${realSlug}.mdx`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { data, content } = matter(fileContents);

  return {
    slug: realSlug,
    frontmatter: data as ProjectData['frontmatter'],
    content,
  };
}

export function getAllProjects(): ProjectData[] {
  const slugs = getProjectSlugs();
  const projects = slugs
    .map((slug) => getProjectBySlug(slug))
    // Sort projects by date in descending order
    .sort((project1, project2) => (project1.frontmatter.date > project2.frontmatter.date ? -1 : 1));
  return projects;
}
