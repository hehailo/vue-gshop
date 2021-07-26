# vue-gshop

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).


开发日志

#路由组件和非路由组件的区别:
    使用都是三大步:定义 注册使用
    定义都是一样去定义的，只是定义的文件夹不同
    注册的时候区别:
        非路由组件是注册在要使用的组件当中，而路由组件是要在路由配置当中注册的
    使用的时候区别:
        非路由组件使用注册的组件标签,
        而路由组件使用声明式导航(router-link, router-view)和编程式导航来使用(push rep lace)
    非路由组件和路由组件生命周期不同
        路由组件在切换的时候，会销毁重建(keep-alive) 
        而非路由组件不会


##安装路由
        npm install vue-router
    配置注册
        使用插件
        暴露对象

##安装less
    npm install less less-loader
    引入对应的HTML和css
    再引入公共css
        <link rel="stylesheet" href="./css/reset.css">

