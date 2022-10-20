---
title: EchartsMap - 高级地图下钻组件
order: 2
nav:
  order: 1
  title: 通用组件
  path: /pro
group:
  path: /
#   title: 自定义页面名称
# nav:
#   path: /自定义导航路由
#   title: 自定义导航名称
#   order: 控制导航顺序，数字越小越靠前，默认以路径长度和字典序排序
# group:
#   path: /自定义分组路由，注意，分组路由 = 导航路由 + 自己
#   title: 自定义分组名称
#   order: 控制分组顺序，数字越小越靠前，默认以路径长度和字典序排序
---

### 中文文档 地图下钻

## DEMO

```tsx
/**
 * title: 状态徽标
 * desc: 注意：需要在 .umirc 文件配置对应的主题色。<br/> @success-color：#30bf78 <br/>@warning-color：#faad14<br/>@error-color：#e02020<br/>@normal-color：#bfbfbf<br/>@processing-color：#3367d6
 * hideActions: ['CSB', 'EXTERNAL']
 */

import React from 'react';
import { EchartsMap } from '@cwmont/pro-components';

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

export default () => <EchartsMap options={options} />;
```

<API/>
