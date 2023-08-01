import React, { Suspense } from 'react';
// 导入路由表
import routes, { route } from './routes';
import { Routes, Route, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
// 权限
import accessMap from '../access';
import { Spin } from 'antd';

const Element = (props: route) => {
  const { component: Component } = props;

  // 无论是 函数式组件 类式组件 都可使用 hooks
  return <Component />;
};

/* 递归创建Route */
const createRoute = (routes: route[]) => {
  return routes.map((item, index) => {
    const { path, children, access } = item;
    // 路由表中没有access字段 正常渲染
    if (!access) {
      return (
        <Route
          key={index}
          path={path}
          element={
            <Suspense fallback={<Spin />}>
              <Element {...item} />
            </Suspense>
          }
          handle={{ crumb: () => item.meta?.title }}
        >
          {children?.length ? createRoute(children) : null}
        </Route>
      );
    }

    // 路由表中存在access字段 判断权限渲染
    if (accessMap[access]) {
      return (
        <Route
          key={index}
          path={path}
          element={
            <Suspense fallback={<>加载中...</>}>
              <Element {...item} />
            </Suspense>
          }
          handle={{ crumb: () => item.meta?.title }}
        >
          {children?.length ? createRoute(children) : null}
        </Route>
      );
    }

    // access字段存在 但是无权限
    return null;
  });
};

/* 路由容器 */
export default function RouterView() {
  return (
    <Suspense fallback={<>加载中...</>}>
      <Routes>{createRoute(routes)}</Routes>
    </Suspense>
  );
}

export const router = createBrowserRouter(createRoutesFromElements(createRoute(routes)));
