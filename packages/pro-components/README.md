# @cwmont/pro-components 公共增强组件 基于 dumi + father-build + lerna 多包管理模版

## feature

1. ✅ 多包管理
2. ✅ 单元测试
3. ✅ 文档阅读
4. ✅ eslint 规范
5. ✅ cjs + esm 编译
6. ✅ typescript

## 项目规范

- packages
  - pro-components ---> @cwmont/pro-components 通用 ppfish 增强组件，不涉及业务逻辑
    - EchartsMap(地图组件下钻)
    - ......

### 测试约定

目录规范

```
.
├── package.json
├── packages
│   ├── bs-components
│   │   └── src
│   │       └── YsHeader
│   │           └── __test__
│   │               └── index.test.tsx # 插件测试用例
├── tsconfig.json
├── .fatherrc.ts
└── yarn.lock
```

## 组件使用

```bash
npm i @cwmont/pro-components

...
import { EchartsMap } from '@cwmont/pro-components';
...
<EchartsMap options={options} />

options传入方式和echars一致  目前只做了地图下钻 后续修改 完善组件包

option例子：
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
    // zoom: 1.23,
    // center: [105, 36], 如果下钻 不传这个值
    showLegendSymbol: false, // 存在legend时显示
    label: {
      normal: {
        show: false,
        fontSize: '12',
        color: '#FFF',
      },
      emphasis: {
        // show: false,
        fontSize: '8',
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

```
