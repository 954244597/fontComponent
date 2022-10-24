import React, { useState, useRef, useEffect } from 'react';
import ReactECharts from 'echarts-for-react';
import 'echarts/map/js/china.js';
import { IFullScreenCardProps } from './interface';
import { initImportFile, chinaDatas, chinaGeoCoordMap } from './importCity';

const Page: React.FC<IFullScreenCardProps> = ({ label, options }) => {
  const instance = useRef(null);
  const [option, setoption] = useState({ geo: { map: '' } });
  const [index, setIndex] = useState(-1);

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
    console.log(res, 'res');
    return res;
  };

  useEffect(() => {
    const series = [];
    series.push({
      tooltip: {
        // 显示的窗口
        trigger: 'item',
        formatter: function(item) {
          console.log(item);
          var tipHtml = '';
          tipHtml = `<div style="padding: .6rem .8rem;font-size: .325rem;color:#fff;border-radius:10%;background: linear-gradient(#cccecf, #cccecf) left top,
                linear-gradient(#cccecf, #cccecf) left top,
                linear-gradient(#cccecf, #cccecf) right top,
                linear-gradient(#cccecf, #cccecf) right top,
                linear-gradient(#cccecf, #cccecf) left bottom,
                linear-gradient(#cccecf, #cccecf) left bottom,
                linear-gradient(#cccecf, #cccecf) right bottom,
                linear-gradient(#cccecf, #cccecf) right bottom;
            background-repeat: no-repeat;
            background-size: .08rem .3rem, .3rem .08rem;background-color:rgba(6, 79, 111,.6);">测试数据 <span style="color:#f9eb59;font-size:.4rem">5家</span> </div>`;
          return tipHtml;
        },
        borderWidth: 0,
      },
      // name: '广东省数据',
      type: 'map',
      map: 'china', // 自定义扩展图表类型
      zoom: 0.65, // 缩放
      showLegendSymbol: true,
      roam: true,
      label: {
        // 文字
        show: true,
        color: '#fff',
        fontSize: 10,
      },
      itemStyle: {
        // 地图样式
        borderColor: 'rgba(147, 235, 248, 1)',
        borderWidth: 1,
        areaColor: {
          type: 'radial',
          x: 0.5,
          y: 0.5,
          r: 0.8,
          colorStops: [
            {
              offset: 0,
              color: 'rgba(147, 235, 248, 0)', // 0% 处的颜色
            },
            {
              offset: 1,
              color: 'rgba(147, 235, 248, .2)', // 100% 处的颜色
            },
          ],
          globalCoord: false, // 缺省为 false
        },
        shadowColor: 'rgba(128, 217, 248, 1)',
        // shadowColor: 'rgba(255, 255, 255, 1)',
        shadowOffsetX: -2,
        shadowOffsetY: 2,
        shadowBlur: 10,
      },
      emphasis: {
        // 鼠标移入动态的时候显示的默认样式
        itemStyle: {
          areaColor: '#4adcf0',
          borderColor: '#404a59',
          borderWidth: 1,
        },
        label: {
          // 文字
          show: true,
          color: '#fff',
          fontSize: 10,
        },
      },
      layoutCenter: ['50%', '50%'],
      layoutSize: '160%',
      markPoint: {
        symbol: 'none',
      },
      data: [
        { name: '黑龙江', value: 'cwm1' },
        { name: '吉林', value: 'cwm2' },
        { name: '辽宁', value: 'cwm3' },
      ],
    });

    [['浙江', chinaDatas]].forEach(function(item, i) {
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
            console.log({
              name: dataItem[0].name,
              value: chinaGeoCoordMap[dataItem[0].name].concat([
                dataItem[0].value,
              ]),
            });
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
          symbolSize: 17,
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
    console.log(series);
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
          const echarts = instance.current.getEchartsInstance();
          console.log(instance);
          // instance.current.getEchartsInstance().dispatchAction({
          //   type: 'downplay',
          //   seriesIndex: 0,
          //   dataIndex: index,
          // });
          echarts.dispatchAction({
            type: 'highlight',
            seriesIndex: 0,
            dataIndex: 13,
          });
          echarts.dispatchAction({
            type: 'showTip',
            seriesIndex: 0,
            dataIndex: 13,
          });
          // setIndex(index + 1);
        }}
      ></button>
    </div>
  );
};

export default Page;
