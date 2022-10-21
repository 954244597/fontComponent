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
