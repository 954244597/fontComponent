import React, { useEffect, useRef } from 'react';
import ReactECharts from 'echarts-for-react';
import 'echarts/map/js/china';
import { IFullScreenCardProps } from './interface';

const Page: React.FC<IFullScreenCardProps> = ({ label, options }) => {
  const instance = useRef(null);

  useEffect(() => {}, []);

  return (
    <div>
      <ReactECharts option={options} style={{ height: 500 }} ref={instance} />
    </div>
  );
};

export default Page;
