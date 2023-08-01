import accessMap from './access';

export const menus = [
  {
    key: '/a',
    label: 'AA',
    access: 'A'
  },
  {
    key: '/b',
    label: 'BB',
    access: 'B'
  },
  {
    key: '/c',
    label: 'CC',
    access: 'C'
  },
  {
    key: '/d',
    label: 'DD',
    access: 'D'
  }
].filter((item) => !item.access || accessMap[item.access as keyof typeof accessMap]);
