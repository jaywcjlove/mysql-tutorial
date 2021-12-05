
export const footer = (editPath) => {
  return {
    type: 'element',
    tagName: 'div',
    properties: {
      className: 'footer',
    },
    children: [
      {
        type: 'element',
        tagName: 'a',
        properties: {
          'data-edit': true,
          target: '__blank',
          title: `https://github.com/jaywcjlove/handbook/edit/master/${editPath}`, 
          href: `https://github.com/jaywcjlove/handbook/edit/master/${editPath}`,
        },
        children: [ { type: 'text', value: '编辑当前页面' } ]
      },
      {
        type: 'element',
        tagName: 'a',
        properties: {
          target: '__blank',
          href: 'https://jaywcjlove.gitee.io/handbook/',
        },
        children: [ { type: 'text', value: '国内镜像站点 🇨🇳' } ]
      },
      {
        type: 'element',
        tagName: 'a',
        properties: {
          target: '__blank',
          href: 'https://github.com/jaywcjlove/handbook',
        },
        children: [ { type: 'text', value: 'Github' } ]
      },
      {
        type: 'element',
        tagName: 'a',
        properties: {
          target: '__blank',
          href: 'https://gitee.com/jaywcjlove/handbook',
        },
        children: [ { type: 'text', value: 'Gitee' } ]
      },
      {
        type: 'element',
        tagName: 'div',
        properties: {
          className: 'copyright',
        },
        children: [
          { type: 'text', value: 'Copyright © 2021. All rights reserved.' }
        ]
      }
    ]
  }
}