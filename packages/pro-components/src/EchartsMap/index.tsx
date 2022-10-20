import React, { useState, useRef, useEffect } from 'react';
import ReactECharts from 'echarts-for-react';
import 'echarts/map/js/province/heilongjiang.js';
import 'echarts/map/js/china.js';
import { IFullScreenCardProps } from './interface';
import { initImportFile, chinaDatas, chinaGeoCoordMap } from './importCity';

const Page: React.FC<IFullScreenCardProps> = ({ label, options }) => {
  const instance = useRef(null);
  const [option, setoption] = useState({ geo: { map: '' } });

  const convertData = data => {
    var res = [];
    for (var i = 0; i < data.length; i++) {
      var dataItem = data[i];
      var fromCoord = chinaGeoCoordMap[dataItem[0].name];
      var toCoord = [119.5313, 29.8773]; //  中心位置
      if (fromCoord && toCoord) {
        res.push([
          {
            coord: fromCoord,
            value: dataItem[0].value,
          },
          {
            coord: toCoord,
          },
        ]);
      }
    }
    return res;
  };

  useEffect(() => {
    const series = [];
    [['浙江', chinaDatas]].forEach(function(item, i) {
      console.log(item);
      series.push(
        {
          type: 'lines',
          zlevel: 2,
          effect: {
            show: true,
            period: 3, //箭头指向速度，值越小速度越快
            trailLength: 0.02, //特效尾迹长度[0,1]值越大，尾迹越长重
            symbol: 'arrow',
            symbolSize: 5, //图标大小
          },
          lineStyle: {
            normal: {
              color: '#1E90FF',
              width: 1, //尾迹线条宽度
              opacity: 1, //尾迹线条透明度
              curveness: 0.2, //尾迹线条曲直度
            },
          },
          data: convertData(item[1]),
        },
        {
          type: 'effectScatter',
          coordinateSystem: 'geo',
          zlevel: 2,
          rippleEffect: {
            //涟漪特效
            period: 4, //动画时间，值越小速度越快
            brushType: 'stroke', //波纹绘制方式 stroke, fill
            scale: 4, //波纹圆环最大限制，值越大波纹越大
          },
          label: {
            normal: {
              show: true,
              position: 'right', //显示位置
              offset: [5, 0], //偏移设置
              formatter: function(params) {
                //圆环显示文字
                return params.data.name;
              },
              fontSize: 13,
            },
            emphasis: {
              show: true,
            },
          },
          symbol: 'circle',
          symbolSize: function(val) {
            return 5 + val[2] * 5; //圆环大小
          },
          itemStyle: {
            normal: {
              show: false,
              color: '#1E90FF',
            },
          },
          data: chinaDatas.map(function(dataItem) {
            return {
              name: dataItem[0].name,
              value: chinaGeoCoordMap[dataItem[0].name].concat([
                dataItem[0].value,
              ]),
            };
          }),
        },
        {
          type: 'scatter',
          coordinateSystem: 'geo',
          zlevel: 2,
          rippleEffect: {
            period: 4,
            brushType: 'stroke',
            scale: 4,
          },
          label: {
            normal: {
              show: true,
              position: 'right',
              //offset:[5, 0],
              color: '#A020F0',
              formatter: '{b}',
              textStyle: {
                color: '#A020F0',
              },
            },
            emphasis: {
              show: true,
              color: '#A020F0',
            },
          },
          color: '#00FFFF',
          symbol: 'pin',
          symbolSize: 19,
          data: [
            {
              name: item[0],
              value: [119.5313, 29.8773].concat([10]),
            },
          ],
        },
      );
    });
    options.series = series;
    console.log(options);
    setoption({ ...options });
  }, []);

  const onEvents = {
    dblclick: params => {
      if (initImportFile(params.name) === 2) {
        option.geo.map = 'china';
        setoption({ ...option });
      } else {
        initImportFile(params.name) === 2;
        option.geo.map = params.name;
        setoption({ ...option });
      }
    },
  };

  return (
    <div
      style={{
        backgroundImage:
          'linear-gradient(-225deg, #D4FFEC 0%, #57F2CC 48%, #4596FB 100%)',
      }}
    >
      <ReactECharts
        option={option}
        style={{ height: 500 }}
        ref={instance}
        onEvents={onEvents}
      />
      <button
        onClick={() => {
          console.log(instance);
        }}
      ></button>
    </div>
  );
};

export default Page;
