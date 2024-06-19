import dynamic from 'next/dynamic';
import React from 'react';
import '../app.css';

const DynamicAppRouter = dynamic(() => import('../components/router'), { ssr: false });

const Home = () => {
  return <DynamicAppRouter />;
};

export default Home;
