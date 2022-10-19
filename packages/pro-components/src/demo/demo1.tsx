import React from 'react';
import { EchartsMap } from '../index';

const option = {
  title: {
    text: 'ECharts 入门示例',
  },
  toolbox: {
    feature: {
      saveAsImage: {},
      dataZoom: {},
      restore: {},
    },
  },
  tooltip: {},
  legend: {
    data: ['销量'],
  },
  xAxis: {
    data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子'],
  },
  yAxis: {},
  series: [
    {
      name: '销量',
      type: 'line',
      data: [5, 20, 36, 10, 10, 20],
    },
  ],
};

const index = () => {
  return <EchartsMap options={option} />;
};

export default index;
