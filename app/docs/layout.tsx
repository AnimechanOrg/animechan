import { DocsLayout } from 'fumadocs-ui/layouts/docs';
import type { ReactNode } from 'react';
import { baseOptions } from '../layout.config';
import type { PageTree } from 'fumadocs-core/server';

const docsTree: PageTree.Root = {
  name: 'Animechan API',
  children: [
    {
      type: 'page',
      name: 'Overview',
      url: '/docs#animechan-api-docs',
    },
    {
      type: 'separator',
      name: 'Getting Started',
    },
    {
      type: 'page',
      name: 'Authentication & Keys',
      url: '/docs#authentication',
    },
    {
      type: 'page',
      name: 'Rate Limits',
      url: '/docs#rate-limits',
    },
    {
      type: 'separator',
      name: 'Anime Endpoints',
    },
    {
      type: 'page',
      name: 'Get Anime Info',
      url: '/docs#get-information-of-a-given-anime',
    },
    {
      type: 'separator',
      name: 'Quotes Endpoints',
    },
    {
      type: 'page',
      name: 'Quote Object Schema',
      url: '/docs#quote-object',
    },
    {
      type: 'page',
      name: 'Random Quote',
      url: '/docs#get-a-random-quote',
    },
    {
      type: 'page',
      name: 'Random via Anime',
      url: '/docs#get-a-random-quote-via-anime',
    },
    {
      type: 'page',
      name: 'Random via Character',
      url: '/docs#get-a-random-quote-via-character',
    },
    {
      type: 'page',
      name: 'Quotes from Anime',
      url: '/docs#get-quotes-from-an-anime',
    },
    {
      type: 'page',
      name: 'Quotes from Character',
      url: '/docs#get-quotes-from-a-character',
    },
    {
      type: 'page',
      name: 'Pagination & Querying',
      url: '/docs#pagination',
    },
    {
      type: 'separator',
      name: 'Resources & Community',
    },
    {
      type: 'page',
      name: 'Pricing & Pro Plan',
      url: '/pricing',
      external: true,
    },
    {
      type: 'page',
      name: 'GitHub Repository',
      url: 'https://github.com/AnimechanOrg/animechan',
      external: true,
    },
  ],
};

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <DocsLayout
      tree={docsTree}
      {...baseOptions}
      sidebar={{
        defaultOpenLevel: 1,
      }}
    >
      {children}
    </DocsLayout>
  );
}


