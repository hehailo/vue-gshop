\# vue-gshop



\## Project setup

\```

npm install

\```



\### Compiles and hot-reloads for development

\```

npm run serve

\```



\### Compiles and minifies for production

\```

npm run build

\```



\### Lints and fixes files

\```

npm run lint

\```



\### Customize configuration

See [Configuration Reference](https://cli.vuejs.org/config/).





开发日志



# 路由组件和非路由组件的区别:

  使用都是三大步:定义 注册使用

  定义都是一样去定义的，只是定义的文件夹不同

  注册的时候区别:

​    	非路由组件是注册在要使用的组件当中，而路由组件是要在路由配置当中注册的

  使用的时候区别:

​    	非路由组件使用注册的组件标签,

​    	而路由组件使用声明式导航(router-link, router-view)和编程式导航来使用(push rep lace)

  非路由组件和路由组件生命周期不同

​    	路由组件在切换的时候，会销毁重建(keep-alive) 

​    	而非路由组件不会





# 安装路由

​    npm install vue-router

  配置注册

​    使用插件

​    暴露对象



# 安装less

  npm install less less-loader

  引入对应的HTML和css

  再引入公共css

​    <link *rel*="stylesheet" *href*="./css/reset.css">



# 路由总结

   一、路由传参种类：params参数和query参数

  		 params参数是属于路径的一部分，路由当中匹配的时候，path路径是要照顾到这个参数的

 		  query 参数是在路径后面，以？分割 ，？后面的 a = b & c = d就是你的query参数

  		 query参数是不属于路径的一部分，路由匹配的时候，path路径不需要关心我这个参数



   二、路由路径带参数的三种写法

   1、字符串写法

```javascript
this.$router.push('/search/'+this.keyword + '?keyword1=' + this.keyword.toUpperCase())
```

   2、模板字符串

```javascript
this.$router.push(`/search/${this.keyword}?keyword1=${this.keyword.toUpperCase()}`)
```

   3、对象写法（重点）

```js
 this.$router.push({
   	 name: "search",
   	 params: { keyword: this.keyword },
   	 query: { keyword1: this.keyword.toUpperCase() },
});
```

   面试1 指定params参数时可不可以用path和params配置的组合?（对象写法）

​	   如果传递的参数只有query参数，没有params参数，那么我们可以不用name,可以使用path

 	  如果传递的参数包含params参数，就不能使用path去配合，只能用name去配合

​	   对象写法，最好以后写name,因为name既能和params去配合也能和query去配合

​	   而path，只能和query去配合，不能和params配合



```
   this.$router.push({
       // path:'/search',
       name:'search',
       params: { keyword: this.keyword },
       query: { keyword1: this.keyword.toUpperCase() },
   });
```

   面试2  如何让params参数可传可不传  路由配置path路径后面占位后+？



   面试3  如果指定name与params配置, 但params中数据是一个"", 无法跳转，路径会出问题

  	1、不传params参数

​	 2、首先必须在params参数可传可不传的前提下，当传递的参数是空串的时候，传递成undefined,就不出问题