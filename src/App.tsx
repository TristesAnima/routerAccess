import React from 'react';
import { router } from './router';
import { RouterProvider } from 'react-router-dom';

const Index: React.FC = () => {
  return <RouterProvider router={router} />;
};

export default Index;
