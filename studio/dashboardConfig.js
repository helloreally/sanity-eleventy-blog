export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-eleventy-blog'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '6219e399d0478d9036bbfdf0',
                  title: 'Sanity Studio',
                  name: 'sanity-eleventy-blog-studio-hkrg7mrh',
                  apiId: '967c96f6-5da3-41f3-b98f-ce48d342adad'
                },
                {
                  buildHookId: '6219e399d9ab74751450e33e',
                  title: 'Blog Website',
                  name: 'sanity-eleventy-blog-web-fh4pao8y',
                  apiId: '30a8a680-858c-49c0-a465-9bc0e01e6f10'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/helloreally/sanity-eleventy-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-eleventy-blog-web-fh4pao8y.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
