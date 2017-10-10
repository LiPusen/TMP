# VUE2  后台管理系统通用模板

This project was bootstrapped with [admin](https://github.com/yezihaohao/react-admin)

## 运行

``` javascript
# 安装依赖
npm install 

# serve with hot reload at localhost:8005
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

注: 采用主流合理的后台管理风格及交互设计开发!    已完善注释,欢迎大家任意扩展

------

### NOTE

设计此模板项目为了适应敏捷开发的要求, 快速构建您的后台管理系统, 请尽量遵循设计规范和交互原则!

**常用插件**

- less@2.7.1

- moment@2.18.1

- vuex@2.4.0

- vue-router@2.3.1

- vue-resource@1.3.4

- ......

  ------

  ### Something Missing

  好像还有点什么忘说了....   呃,记起来再说吧

  ​

  ------

  ## 开发规范

  ```javascript
  +-- build/                                  --- webpack构建目录,包含各种构建打包规则设置
  +-- config/                                 --- webpack构建配置项,生产环境或开发环境个性化参数配置
  +-- node_modules/                           --- npm包管理目录
  +-- static/                                 --- 静态文件目录,包含所有不需要编译的文件
  |   --- base.css						    --- 全局初始化样式库
  |   --- config.js						    --- 配置全局环境或接口地址,因为环境变更需要改变的参数
  +-- src/                                    --- 未编译的.vue源码目录
  |   +-- assets                              --- 静态文件目录,包含所有的小图标或者需要编译的第三方库
  |   +-- components                          --- 组件目录
  |   |    +-- animation                      --- 动画组件目录  
  |   |    +-- layout                         --- 布局组件目录    
  |   |    +-- forms                          --- 表单组件目录   
  |   |    +-- tables                         --- 表格组件目录  
  |   |    +-- ui                             --- ui组件目录
  |   |    +-- ...                            --- 其他不同类型的组件目录
  |   |    --- index.js                       --- 组件注册文件,主输出文件
  |   +-- http                                --- 接口管理及请求处理目录
  |   |    --- api.js                         --- 接口管理文件
  |   |    --- index.js                       --- 请求处理公用方法,请求拦截,数据预验证...
  |   +-- pages                               --- 页面目录,只允许一级目录
  |   +-- router                              --- 路由管理目录
  |   |    --- index.js                       --- 路由主输出文件,处理路由拦截及路由相关配置
  |   |    --- router.js                      --- pages目录下路由映射表
  |   +-- store                               --- 状态机管理目录
  |   |    --- actions.js                     --- 管理状态机异步请求及数据组装
  |   |    --- getters.js                     --- 获取状态机数据过滤及组装
  |   |    --- index.js                       --- 状态机主输出文件
  |   |    --- mutations.js                   --- 获取状态机数据,仅支持同步获取
  |   |    --- state.js                       --- 状态机初始化参数
  |   +-- style                               --- 样式目录，主要采用less编写
  |   |    +-- skin                           --- 皮肤目录,包含一组框架外观皮肤定义
  |   |    --- global.less                    --- 全局样式文件,应以用途进行命名的结构类组样式文件
  |   |    --- tool.less                      --- 全局工具类样式,仅包含单样式,属页面增强类样式
  |   +-- utils                               --- 工具类目录,包含不处理业务的公共逻辑,具有强移植性
  |   --- App.vue                             --- 页面入口文件
  |   --- main.js                             --- 项目的整体逻辑入口文件
  --- index.html                              --- 项目将要渲染的单页面文件
  --- .eslintrc                               --- 自定义eslint配置文件
  --- package.json                            --- 项目运行环境定义,包映射,运行命令管理及其他配置参数
  --- README.md                               --- 项目说明文档
  ```

  #### 注:

  ​

