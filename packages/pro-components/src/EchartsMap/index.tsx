import React, { useEffect } from 'react';
import ReactECharts from 'echarts-for-react';
import { IFullScreenCardProps } from './interface';

const Page: React.FC<IFullScreenCardProps> = ({ label, options }) => {
  useEffect(() => {}, []);
  return <ReactECharts option={options} style={{ height: 500 }} />;
};

export default Page;
