import { cloneDeep } from 'lodash';
export const initImportFile = province => {
  var filaName = {
    浙江: 'zhejiang.js',
    安徽: 'anhui.js',
    澳门: 'aomen.js',
    北京: 'beijing.js',
    重庆: 'chongqing.js',
    福建: 'fujian.js',
    甘肃: 'gansu.js',
    广东: 'guangdong.js',
    广西: 'guangxi.js',
    贵州: 'guizhou.js',
    海南: 'hainan.js',
    河北: 'hebei.js',
    黑龙江: 'heilongjiang.js',
    河南: 'henan.js',
    湖北: 'hubei.js',
    湖南: 'hunan.js',
    江苏: 'jiangsu.js',
    江西: 'jiangxi.js',
    吉林: 'jilin.js',
    辽宁: 'liaoning.js',
    内蒙古: 'neimenggu.js',
    宁夏: 'ningxia.js',
    青海: 'qinghai.js',
    山东: 'shandong.js',
    上海: 'shanghai.js',
    山西: 'shanxi.js',
    陕西: 'shanxi1.js',
    四川: 'sichuan.js',
    台湾: 'taiwan.js',
    天津: 'tianjin.js',
    香港: 'xianggang.js',
    新疆: 'xinjiang.js',
    西藏: 'xizang.js',
    云南: 'yunnan.js',
  };
  if (!filaName[province]) {
    return 2;
  } else {
    require(`echarts/map/js/province/${filaName[province]}`);
  }
};

export const proviceObj = {
  天津: '天津',
  河北省: '河北',
  山西省: '山西',
  内蒙古自治区: '内蒙古',
  辽宁省: '辽宁',
  吉林省: '吉林',
  黑龙江省: '黑龙江',
  上海: '上海',
  江苏省: '江苏',
  浙江省: '浙江',
  安徽省: '安徽',
  福建省: '福建',
  江西省: '江西',
  山东省: '山东',
  河南省: '河南',
  湖北省: '湖北',
  湖南省: '湖南',
  广东省: '广东',
  广西壮族自治区: '广西',
  海南省: '海南',
  重庆: '重庆',
  四川省: '四川',
  贵州省: '贵州',
  云南省: '云南',
  西藏自治区: '西藏',
  陕西省: '陕西',
  甘肃省: '甘肃',
  青海省: '青海',
  宁夏回族自治区: '宁夏',
  新疆维吾尔自治区: '新疆',
  北京: '北京',
};

export const proviceMapList = () => {
  let mapList = cloneDeep(proviceObj);
  for (let k in mapList) {
    let value = mapList[k]; //将原来的value赋值给一个变量
    mapList[value] = k; // 为cluster_info赋新key，不能直接使用cluster_info = {cluster_info[k] : k},会报语法错误
    if (mapList[k] !== k) {
      delete mapList[k]; // 删除原来的属性
    }
  }
  return mapList;
};

export const chinaDatas = [
  [
    {
      name: '黑龙江',
      value: 0,
    },
  ],
  [
    {
      name: '内蒙古',
      value: 0,
    },
  ],
  [
    {
      name: '吉林',
      value: 0,
    },
  ],
  [
    {
      name: '辽宁',
      value: 0,
    },
  ],
  // [
  //   {
  //     name: '河北',
  //     value: 0,
  //   },
  // ],
  // [
  //   {
  //     name: '天津',
  //     value: 0,
  //   },
  // ],
  // [
  //   {
  //     name: '山西',
  //     value: 0,
  //   },
  // ],
  // [
  //   {
  //     name: '陕西',
  //     value: 0,
  //   },
  // ],
  // [
  //   {
  //     name: '甘肃',
  //     value: 0,
  //   },
  // ],
  // [
  //   {
  //     name: '宁夏',
  //     value: 0,
  //   },
  // ],
  // [
  //   {
  //     name: '青海',
  //     value: 0,
  //   },
  // ],
  // [
  //   {
  //     name: '新疆',
  //     value: 0,
  //   },
  // ],
  // [
  //   {
  //     name: '西藏',
  //     value: 0,
  //   },
  // ],
  // [
  //   {
  //     name: '四川',
  //     value: 0,
  //   },
  // ],
  // [
  //   {
  //     name: '重庆',
  //     value: 0,
  //   },
  // ],
  // [
  //   {
  //     name: '山东',
  //     value: 0,
  //   },
  // ],
  // [
  //   {
  //     name: '河南',
  //     value: 0,
  //   },
  // ],
  // [
  //   {
  //     name: '江苏',
  //     value: 0,
  //   },
  // ],
  // [
  //   {
  //     name: '安徽',
  //     value: 0,
  //   },
  // ],
  // [
  //   {
  //     name: '湖北',
  //     value: 0,
  //   },
  // ],
  // [
  //   {
  //     name: '浙江',
  //     value: 0,
  //   },
  // ],
  // [
  //   {
  //     name: '福建',
  //     value: 0,
  //   },
  // ],
  // [
  //   {
  //     name: '江西',
  //     value: 0,
  //   },
  // ],
  // [
  //   {
  //     name: '湖南',
  //     value: 0,
  //   },
  // ],
  // [
  //   {
  //     name: '贵州',
  //     value: 0,
  //   },
  // ],
  // [
  //   {
  //     name: '广西',
  //     value: 0,
  //   },
  // ],
  // [
  //   {
  //     name: '海南',
  //     value: 0,
  //   },
  // ],
  // [
  //   {
  //     name: '上海',
  //     value: 1,
  //   },
  // ],
];

export const chinaGeoCoordMap = {
  黑龙江: [127.9688, 45.368],
  内蒙古: [110.3467, 41.4899],
  吉林: [125.8154, 44.2584],
  北京市: [116.4551, 40.2539],
  辽宁: [123.1238, 42.1216],
  河北: [114.4995, 38.1006],
  天津: [117.4219, 39.4189],
  山西: [112.3352, 37.9413],
  陕西: [109.1162, 34.2004],
  甘肃: [103.5901, 36.3043],
  宁夏: [106.3586, 38.1775],
  青海: [101.4038, 36.8207],
  新疆: [87.9236, 43.5883],
  西藏: [91.11, 29.97],
  四川: [103.9526, 30.7617],
  重庆: [108.384366, 30.439702],
  山东: [117.1582, 36.8701],
  河南: [113.4668, 34.6234],
  江苏: [118.8062, 31.9208],
  安徽: [117.29, 32.0581],
  湖北: [114.3896, 30.6628],
  浙江: [119.5313, 29.8773],
  福建: [119.4543, 25.9222],
  江西: [116.0046, 28.6633],
  湖南: [113.0823, 28.2568],
  贵州: [106.6992, 26.7682],
  云南: [102.9199, 25.4663],
  广东: [113.12244, 23.009505],
  广西: [108.479, 23.1152],
  海南: [110.3893, 19.8516],
  上海: [121.4648, 31.2891],
};
