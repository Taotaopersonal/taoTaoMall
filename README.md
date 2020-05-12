# taotao_mall

## 项目介绍

该项目是一个不B/S架构的微型网上商城应用,仿网易严选商城.

开发技术栈为:Vue | Node.js | [mongoDB]

开发环境:vueRouter | Vuex 

所用组件以及相关插件:vant | better-scroll | lib-flexible+postcss-pxtorem | swiper

## 项目亮点

1.项目根目录下的http文件夹+util文件夹下http.js文件,实现对发送ajax请求的axios库进行二次封装,懒人式发请求.对多种请求方式以及携带参数进行统一化.

2.项目满足模块化 + 组件化 + 工程化规范,组件拆分合理,极易维护.

## 项目不足

1.由于时间原因,代码注释比较少,但是命名规范,见名思意可弥补注释不足的问题

2.部分机型适配依旧存在问题,主要原因是由于第三方ui库附带的内联样式造成,暂时未对内联样式进行适配处理.

## Project setup
```
1.在项目根目录下终端中运行该命令下载项目运行环境中,所需相关依赖
npm install
```

### Compiles and hot-reloads for development
```
2.在项目根目录下终端中运行该命令启动项目
npm run serve
```

### Compiles and minifies for production
```
3.打包项目(项目上线,调试或预览无需打包)
npm run build
```

### Lints and fixes files
```
4.检查项目错误(检查项目错误时使用,不会调试无需启动)
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
