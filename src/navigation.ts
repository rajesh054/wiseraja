import { getPermalink, getBlogPermalink, getAsset } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: 'Home',
      href: getPermalink('/'),
    },
    {
      text: 'About',
      href: getPermalink('/#about'),
    },
    {
      text: 'WiseNotes',
      href: getPermalink('/blog'),
    },
    // {
    //   text: 'Blog',
    //   links: [
    //     {
    //       text: 'Blog List',
    //       href: getBlogPermalink(),
    //     },
    //     {
    //       text: 'Article',
    //       href: getPermalink('get-started-website-with-astro-tailwind-css', 'post'),
    //     },
    //     {
    //       text: 'Article (with MDX)',
    //       href: getPermalink('markdown-elements-demo-post', 'post'),
    //     },
    //     {
    //       text: 'Category Page',
    //       href: getPermalink('tutorials', 'category'),
    //     },
    //     {
    //       text: 'Tag Page',
    //       href: getPermalink('astro', 'tag'),
    //     },
    //   ],
    // },
  ],
  actions: [{ text: 'Join the WiseTribe', href: '#', target: '_blank' }],
};

export const footerData = {
  links: [
    {
      title: 'Products',
      links: [
        { text: 'Courses', href: '/courses' },
        { text: 'Templates', href: '/templates' },
      ],
    },
    {
      title: 'WiseRaja',
      links: [
        { text: 'About', href: getPermalink('/#about') },
        { text: 'Blog', href: getPermalink('/blog') },
        { text: 'Shop', href: '#' },
        { text: 'Team', href: '#' },
        { text: 'WiseTribe on WhatsApp', href: '#' },
        { text: 'WiseTribe on Telegram', href: 'https://t.me/equityhouse' },
      ],
    },
  ],
  secondaryLinks: [
    { text: 'Terms', href: getPermalink('/terms') },
    { text: 'Privacy Policy', href: getPermalink('/privacy') },
  ],
  socialLinks: [
    { ariaLabel: 'X', icon: 'tabler:brand-x', href: '#' },
    { ariaLabel: 'Instagram', icon: 'tabler:brand-instagram', href: '#' },
    { ariaLabel: 'Facebook', icon: 'tabler:brand-facebook', href: '#' },
    { ariaLabel: 'RSS', icon: 'tabler:rss', href: getAsset('/rss.xml') },
    { ariaLabel: 'Github', icon: 'tabler:brand-github', href: 'https://github.com/djsiddz' },
  ],
  footNote: `
    Made by <a class="text-blue-600 underline dark:text-muted" href="https://github.com/djsiddz">Siddhesh Thadeshwar</a> · All rights reserved.
  `,
};
