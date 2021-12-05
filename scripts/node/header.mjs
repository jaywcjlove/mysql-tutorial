import { favicon } from './favicon.mjs';

export const header = (homeUrl) => {
  return {
      type: 'element',
      tagName: 'header',
      properties: { className: 'header', },
      children: [
        {
          type: 'element',
          tagName: 'article',
          properties: { className: 'inner', },
          children: [
            {
              type: 'element',
              tagName: 'a',
              properties: {
                className: 'logo',
                href: homeUrl || 'https://jaywcjlove.github.io/mysql-tutorial',
              },
              children: [
                {
                  type: 'element',
                  tagName: 'img',
                  properties: {
                    src: favicon,
                    alt: 'mysql-tutorial logo',
                  },
                  children: []
                }
              ]
            }, {
              type: 'element',
              tagName: 'div',
              properties: {
                className: 'title',
              },
              children: [
                { type: 'text', value: 'mysql-tutorial' }
              ]
            }, {
              type: 'element',
              tagName: 'nav',
              properties: {
                className: 'nav',
              },
              children: [
                
              ]
            }
          ]
        }
      ]
  }
}