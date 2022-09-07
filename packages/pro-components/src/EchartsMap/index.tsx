import React from 'react';
import ReactECharts from 'echarts-for-react';
import { IFullScreenCardProps } from './interface';

const Page: React.FC<IFullScreenCardProps> = ({ label }) => {
  const options = {
    tooltip: {
      show: false,
    },
    title: {
      top: 20,
      // text: '用户注册区域展示',
      subtext: '',
      x: 'center',
      textStyle: {
        color: '#000',
      },
    }, 
    geo: {
      map: 'china',
      roam: true,
      zoom: 1.23,
      center: [105, 36],
      showLegendSymbol: false, // 存在legend时显示
      label: {
        normal: {
          show: true,
          fontSize: '12',
          color: '#FFF',
        },
        emphasis: {
          fontSize: '12',
          color: '#FFF',
        },
      },
      itemStyle: {
        normal: {
          borderColor: '#4C63E5', // 地图边框颜色
          borderWidth: 2, // 地图边框大小
          areaColor: '#050934', // 各个省份颜色
        },
        emphasis: {
          areaColor: '#050934', // hover颜色
        },
      },
    },
  };

  return <ReactECharts option={options} style={{ height: 500 }} />;
};

export default Page;
