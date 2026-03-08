import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const articlesDirectory = path.join(process.cwd(), 'content/articles');

export interface ArticleData {
  slug: string;
  frontmatter: {
    title: string;
    description: string;
    date: string;
    tags: string[];
    [key: string]: any;
  };
  content: string;
}

export function getArticlesSlugs() {
  if (!fs.existsSync(articlesDirectory)) {
    return [];
  }
  return fs.readdirSync(articlesDirectory).filter((file) => file.endsWith('.mdx'));
}

export function getArticleBySlug(slug: string): ArticleData {
  const realSlug = slug.replace(/\.mdx$/, '');
  const fullPath = path.join(articlesDirectory, `${realSlug}.mdx`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { data, content } = matter(fileContents);

  return {
    slug: realSlug,
    frontmatter: data as ArticleData['frontmatter'],
    content,
  };
}

export function getAllArticles(): ArticleData[] {
  const slugs = getArticlesSlugs();
  const articles = slugs
    .map((slug) => getArticleBySlug(slug))
    // Sort articles by date in descending order
    .sort((article1, article2) => (article1.frontmatter.date > article2.frontmatter.date ? -1 : 1));
  return articles;
}
