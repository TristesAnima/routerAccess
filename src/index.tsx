import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import { ConfigProvider } from 'antd';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <ConfigProvider
    theme={{
      components: {
        Menu: {
          itemBorderRadius: 0,
          subMenuItemBorderRadius: 0,
          itemHoverColor: '#1890ff',
          itemSelectedColor: '#1890ff',
          itemSelectedBg: '#e6f7ff',
          activeBarWidth: 3,
          itemMarginInline: 0,
          itemHoverBg: 'transparent'
        },
      }
    }}
  >
    <App />
  </ConfigProvider>
);
