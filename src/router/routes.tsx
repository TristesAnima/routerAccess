import React, { lazy, ComponentType } from 'react';
import { Navigate } from 'react-router-dom';
import accessMap from '../access';

export interface route {
  /**
   * 路由路径
   */
  path: string;

  /**
   * 路径所展示的组件
   */
  component: ComponentType;

  /**
   * 子路由
   */
  children?: route[];

  /**
   * 路由原信息
   */
  meta?: { [K: string]: any };

  /**
   * 权限名称
   */
  access?: keyof typeof accessMap;
}

const Layout = lazy(() => import('../layout'));
const A = lazy(() => import('../pages/a'));
const B = lazy(() => import('../pages/b'));

const routes: route[] = [
  {
    path: '/',
    component: () => <Navigate to="/a" />
  },
  {
    path: '/',
    component: Layout,
    meta: {
      title: 'Layout'
    },
    children: [
      {
        path: '/a',
        component: A,
        meta: {
          title: 'A'
        },
        access: 'A'
      },
      {
        path: '/b',
        component: B,
        meta: {
          title: 'B'
        },
        access: 'B'
      },
      {
        path: '/c',
        component: ()=> <h2>C</h2>,
        meta: {
          title: 'C'
        },
        access: 'C'
      },
      {
        path: '/d',
        component: ()=> <h2>D</h2>,
        meta: {
          title: 'D'
        },
        access: 'D'
      },
    ]
  },
  {
    path: '*',
    component: () => <h1>404 NOT FOUND</h1>
  }
];

export default routes;
