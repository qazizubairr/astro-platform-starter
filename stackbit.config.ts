import { defineStackbitConfig } from '@stackbit/types';
import { GitContentSource } from '@stackbit/cms-git';

export default defineStackbitConfig({
  stackbitVersion: '~0.6.0',
  nodeVersion: '18',
  ssgName: 'custom', // "custom" is okay for Astro
  contentSources: [
    new GitContentSource({
      rootPath: __dirname,
      contentDirs: ['content'],
      models: [
        {
          name: 'Page',
          type: 'page',
          label: 'Pages',
          urlPath: '/{slug}',
          filePath: 'content/pages/{slug}.json',
          fields: [
            {
              name: 'title',
              type: 'string',
              required: true,
            },
            {
              name: 'markdown_content',
              label: 'Content',
              type: 'markdown',
              required: false,
            },
          ],
        },
      ],
    }),
  ],
  postInstallCommand: 'npm i --no-save @stackbit/types',
});
