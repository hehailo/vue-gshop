# 面试















# 重点：



## 1、优势：

1. 指定回调函数的方式更加灵活: 

​	 旧的: 必须在启动异步任务前指定

​	 promise: 启动异步任务 => 返回promie对象 => 给promise对象绑定回调函数(甚至可以在异步任务结束后指定)

2. 支持链式调用, 可以解决回调地狱问题

​	 (1)什么是回调地狱：

​			回调函数嵌套调用, 外部回调函数异步执行的结果是嵌套的回调函数执行的条件

​	 (2)回调地狱的弊病：

​			代码不便于阅读、不便于异常的处理

​	 (3)一个不是很优秀的解决方案：

​			then的链式调用

​	 (4)终极解决方案：

​			async/await（底层实际上依然使用then的链式调用）



## 2、catch

​	catch() 方法返回一个Promise (en-US)，并且处理拒绝的情况。

​	它的行为与调用Promise.prototype.then(undefined, onRejected) 相同。放在函数原型对象上是给实例对象用的  放在自己身上是给自己用的









# 1、函数对象与实例对象

每一个函数对象有一个不可修改的属性name  name的值是函数的名字 

  <img src="https://cdn.nlark.com/yuque/0/2021/png/12699685/1640589360455-b408f5b1-3744-4511-959f-7e57513a4ffe.png" alt="img" style="zoom:50%;" /><img src="https://cdn.nlark.com/yuque/0/2021/png/12699685/1640589347313-75da8e3e-3f8d-419e-8cf3-26eeb084a129.png" alt="img" style="zoom:50%;" />

new出来的对象为实例对象





# 2、回调函数分类



**回调函数**：我们定义的 我们没有调用 最终执行了



定时器执行 是将回调函数推入了浏览器的回调队列

回调队列里面的东西是等主线程执行完之后执行

<img src="https://cdn.nlark.com/yuque/0/2021/png/12699685/1640589741600-fe3122b8-9fc6-4ddd-a8b4-57eacc8155a6.png" alt="img" style="zoom:50%;" /><img src="https://cdn.nlark.com/yuque/0/2021/png/12699685/1640589856419-4dcf139b-1bb4-4f91-8d31-e1c04d8aef5a.png" alt="img" style="zoom:50%;" />



同步回调和主线程平级的

<img src="https://cdn.nlark.com/yuque/0/2021/png/12699685/1640594439687-aafbbda8-ceed-469b-ade4-53e024dc2724.png" alt="img" style="zoom:50%;" /><img src="https://cdn.nlark.com/yuque/0/2021/png/12699685/1640594473151-77a91340-933d-4689-b25b-be2bcff9a76c.png" alt="img" style="zoom:50%;" />





**同步的回调函数**

理解：立即在`主线程`上执行，不会放入回调队列中

例子：数组遍历相关的回调函数 、Promise的exeutor函数





**异步的回调函数**

理解：不会立即执行 会放入`回调队列`，等主线程执行完毕后，按顺序执行

例子：定时器回调 、ajax回调、Promise的成功、失败的回调





# 3、错误类型的说明



错误类型

·Error：所有错误的类型	

​	ReferenceError：引用的变量不存在

​	TypeError：数据类型不存在

​	RangeError：数据值不在其所允许的范围内---死循环

​	SyntaxError：语法错误



错误处理：

​	捕获错误：try{}catch(){}

​	抛出错误：throw error



错误对象

​	message属性：错误相关信息

​	stack属性：记录信息

​	

js引擎在执行脚本时，发现错误，便会抛出错误





**message & stack**

![img](https://cdn.nlark.com/yuque/0/2021/png/12699685/1640599675185-541d7a80-0198-4dae-837c-85d3a9687644.png)







# 4、初始Promise



promise 是什么？

抽象表达：

1、promise是一种新的技术

2、promise是Js异步编程的新方案（旧方案？---纯回调）

具体表达

1、promise是一个内置的构造函数

2、功能上讲，promise的实例对象可以用来封装一个异步操作，并可以获取其成功、失败的值





梳理

1. promise 不是回调，是一个内置的构造函数，是程序员自己new调用的
2. new Promise（executor）的时候，需要传入一个回调函数 他是一个`同步的回调`，会立即在主线程上执行它被称为executor函数

3. 每一个promise有三种状态 pending（初始化） fulfilled（成功） rejected（失败）
4. 每一个promise 在被new出来的那一刻，状态都是初始化（pending）

5. executor函数会接收两个参数，他们都是函数，用形参 resolve 、reject接收

（1）调用resole会使得promise的状态变为fulfilled ，同时可以指定成功的value

（2）调用reject会使得promise的状态变为rejected，同时可以指定失败的reason





![img](https://cdn.nlark.com/yuque/0/2021/png/12699685/1640658452075-d946ffb5-6545-480b-85e8-019b7ea16a72.png)![img](https://cdn.nlark.com/yuque/0/2021/png/12699685/1640658402258-1a506620-3ac1-449b-9efc-66ee550c2d8f.png)

```javascript
const myFirstPromise = new Promise((resolve, reject) => {
  //做一些异步操作，最终会调用下面两者之一:
  //   resolve(someValue); // fulfilled
  //或
  //   reject("failure reason"); // rejected
})
```













# [5、then](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Promise/then)





**then()** 方法返回一个 [Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)。



它最多需要有两个参数：Promise 的成功和失败情况的回调函数

通过 then 方法为 Promise 的实例指定成功、失败的回调函数，来获取成功的 value 失败的 reason

注意:then 方法所指定的：成功的回调、失败的回调 都是**异步的回调**



因为 [Promise.prototype.then](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Promise/then) 和  Promise.prototype.catch 方法返回的是 promise， 所以它们可以被链式调用

```css
注意：如果忽略针对某个状态的回调函数参数，或者提供非函数 (nonfunction) 参数，那么 then 方法将会丢失关于该状态的回调函数信息，但是并不会产生错误。

如果调用 then 的 Promise 的状态（fulfillment 或 rejection）发生改变，但是 then 中并没有关于这种状态的回调函数，那么 then 将创建一个没有经过回调函数处理的新 Promise 对象，这个新 Promise 只是简单地接受调用这个 then 的原 Promise 的终态作为它的终态。
```



## 关于状态的注意点：

1.三个状态:

  pending: 未确定的------初始状态

  fulfilled: 成功的------调用resolve()后的状态

  rejected: 失败的-------调用reject()后的状态

2.两种状态改变

  pending ==> fulfilled

  pending ==> rejected

3.**状态只能改变一次**！！（then里面只有一个方法会被调用）

4.一个promise指定多个成功/失败回调函数, 都会调用吗? **都会**，底层使用的是队列！



![img](https://cdn.nlark.com/yuque/0/2021/png/12699685/1640660597555-43864a48-cdc7-43dc-9cd5-fbd3d5128310.png)![img](https://cdn.nlark.com/yuque/0/2021/png/12699685/1640660580042-2daff9d3-41c5-43e3-8372-e1f82d570e03.png)





# 6、使用promise 和 xhr 封装ajax



```javascript
function sendAjax(url, data) {
  return new Promise((resolve, reject) => {
    //实例xhr
    const xhr = new XMLHttpRequest();
    //绑定监听
    xhr.onreadystatechange = () => {
      if (xhr.readyState === 4) {
        if (xhr.status >= 200 && xhr.status < 300) resolve(xhr.response);
        else reject("请求出了点问题");
      }
    };
    //整理参数
    let str = "";
    for (let key in data) {
      str += `${key}=${data[key]}&`;
    }
    str = str.slice(0, -1);
    xhr.open("GET", url + "?" + str);
    xhr.responseType = "json";
    xhr.send();
  });
}

const x = sendAjax("https://api.apiopen.top/getJoke", {
  page: 1,
  count: 2,
  type: "video",
});

x.then(
  (data) => {
    console.log("成功了", data);
  },
  (reason) => {
    console.log("失败了", reason);
  }
);

```





这一段不在主线程上执行

![img](https://cdn.nlark.com/yuque/0/2021/png/12699685/1640663013764-ef42aa75-998b-4942-84ab-bb5d5eb33217.png)







# 7、纯回调封装ajax

自定义success成功回调

自定义error失败回调

手动设置：xhr.status为2xx的时候调用success 其他调用error

<img src="C:\Users\vnian\AppData\Roaming\Typora\typora-user-images\image-20220105163406075.png" alt="image-20220105163406075" style="zoom: 50%;" />





# 8、包管理器的对比





cnpm  下载包的时候 会多一个快捷方式

​     移除包的时候会移除所有

npm  当自己的包名（npm init的时候） 和主流的包名重复的时候

  不能安装主流包名

yarn  没有上述问题



包管理器的使用：使用yarn的命令 cnpm的仓库地址







# 9、promise 的API





1. Promise构造函数: new Promise (executor) {}

​	    executor函数: 是同步执行的，(resolve, reject) => {}

​	    resolve函数: 调用resolve将Promise实例内部状态改为成功(fulfilled)。

​	    reject函数: 调用reject将Promise实例内部状态改为失败(rejected)。

​	    说明: excutor函数会在Promise内部立即同步调用,异步代码放在excutor函数中。



2. Promise.prototype.then方法: Promise实例.then(onFulfilled,onRejected)

​	    onFulfilled: 成功的回调函数 (value) => {}

​	    onRejected: 失败的回调函数 (reason) => {}

​	    特别注意(难点)：then方法会返回一个新的Promise实例对象

​      

3. Promise.prototype.catch方法: Promise实例.catch(onRejected)

​        onRejected: 失败的回调函数 (reason) => {}

​        说明: catch方法是then方法的语法糖, 相当于: then(undefined, onRejected)



4. Promise.resolve方法: Promise.resolve(value)

​		说明: 用于快速返回一个状态为fulfilled或rejected的Promise实例对象

​		备注：value的值可能是：(1)非Promise值  (2)Promise值

​    

5. Promise.reject方法: Promise.reject方法(reason)

​        说明: 用于快速返回一个状态必为rejected的Promise实例对象

​	

6. Promise.all方法: Promise.all(promiseArr)

​        promiseArr: 包含n个Promise实例的数组

​        说明: 返回一个新的Promise实例, 只有所有的promise都成功才成功, 只要有一个失败了就直接失败。

​			

7. Promise.race方法: Promise.race(promiseArr)

​        promiseArr: 包含n个Promise实例的数组

​        说明: 返回一个新的Promise实例, 成功还是很失败？以最先出结果的promise为准。











## (1) catch()



**catch()** 方法返回一个[Promise (en-US)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)，并且处理拒绝的情况。它的行为与调用[Promise.prototype.then(undefined, onRejected)](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Promise/then) 相同



注意：promise失败，却未指定失败的回调 会报错

但是成功了 没有指定成功的回调 却不会报错

![img](https://cdn.nlark.com/yuque/0/2021/png/12699685/1640681218404-26b4ddb9-bdbe-47b0-ba52-2f74829726f8.png) 



**阿里外包面试题**



![img](https://cdn.nlark.com/yuque/0/2021/png/12699685/1640676710087-c8f40e76-643c-4a67-aa21-c69daa7d0c49.png)

![img](https://cdn.nlark.com/yuque/0/2021/png/12699685/1640677019699-893ff20a-e14a-47d1-ab72-0d5cd13b01fd.png)



## (2) resolve()  &  reject()



Promise.resolve(value)

​        说明: 用于快速返回一个状态为fulfilled或rejected的Promise实例对象

​        备注：value的值可能是：(1)非Promise值（成功的结果）  (2)**Promise值，由传入的promise状态决定**



Promise.reject方法: Promise.reject方法(reason)

​        说明: 用于快速返回一个状态**必为rejected**的Promise实例对象



resolve 传世一个失败的promise 实例

<img src="https://cdn.nlark.com/yuque/0/2021/png/12699685/1640681440417-71d9649b-c20b-4316-baa1-92a00356a4de.png" alt="img" style="zoom:67%;" />![img](https://cdn.nlark.com/yuque/0/2021/png/12699685/1640681550024-8be2c03d-0f5a-4212-990c-921eddefabcb.png)

reject 传入一个成功的promise 实例



<img src="https://cdn.nlark.com/yuque/0/2021/png/12699685/1640681765485-d718a012-239c-4ad3-bd7d-0b254fc3df0a.png" alt="img" style="zoom:50%;" />



<img src="https://cdn.nlark.com/yuque/0/2021/png/12699685/1640681818255-94e4513d-f585-416f-a94d-1e0aa877f188.png" alt="img" style="zoom:50%;" />





## (3) all()



返回一个新的Promise实例, 只有所有的promise都成功才成功, 只要有一个失败了就直接失败。

和传入的顺序无关

成功的返回结果：所有成功的结果组成的数组

失败的返回结果：谁失败，返回谁的失败结果





<img src="https://cdn.nlark.com/yuque/0/2021/png/12699685/1640829992393-84dbfe4c-8ede-4853-b27f-bc3f0925a8a2.png" alt="img" style="zoom:50%;" />![img](https://cdn.nlark.com/yuque/0/2021/png/12699685/1640830056233-957c2453-207d-493a-8582-3ead13fbeeaa.png)





<img src="https://cdn.nlark.com/yuque/0/2021/png/12699685/1640830168822-31a24852-541e-4ab8-9a97-c6f830370166.png" alt="img" style="zoom:50%;" />![img](https://cdn.nlark.com/yuque/0/2021/png/12699685/1640830240988-60a9963a-f1bc-4c06-ab20-6874f3389eba.png)



## (4) race()

传你个promise组成的数组

 返回一个新的Promise实例, 成功还是很失败？以最先出结果的promise为准。



不用等 第一个成功就是成功的！和传入的顺序无关

![img](https://cdn.nlark.com/yuque/0/2021/png/12699685/1640830437790-ccd6ee86-4d37-4977-8621-0cc3a847d72b.png)![img](https://cdn.nlark.com/yuque/0/2021/png/12699685/1640830452944-f9426320-5c44-4b15-87c2-0c8ad48ac28c.png)







# 9、如何改变promise实例的状态



如何改变一个Promise实例的状态?

​	(1)执行resolve(value): 如果当前是pending就会变为fulfilled

​	(2)执行reject(reason): 如果当前是pending就会变为rejected

​	(3)执行器函数(executor)抛出异常: 如果当前是pending就会变为rejected



状态只能改变一次！

\-----------------------------------------------------------------------------------------------------------

```javascript
		const p  = new Promise((resolve,reject)=>{
			console.log(a); //引擎抛异常
			// throw 900 //编码抛异常
		})
		p.then(
			value => {console.log('成功了',value);},
			reason => {console.log('失败了',reason);}
		)
```

![image-20220105164015462](C:\Users\vnian\AppData\Roaming\Typora\typora-user-images\image-20220105164015462.png)

------------------------------------------------------------------------------------------------------------

![img](https://cdn.nlark.com/yuque/0/2021/png/12699685/1640830885177-b5ce6f5a-5441-4763-8db1-cf0631432cfd.png)![img](https://cdn.nlark.com/yuque/0/2021/png/12699685/1640830980730-a606554f-beeb-499f-bc01-a9ac98369b3c.png)





# 10、改变状态与指定回调（then）的顺序





改变promise实例的状态和指定回调函数的状态谁先谁后？

1.都有可能，正常先指定回调再改变状态，但也可以先改状态再指定回调

2.如何先改状态在指定回调？

延迟一会在调用then

3.promise实例什么时候才能得到数据

先指定回调，状态改变，回调就会调用，得到数据

先改变状态，指定回调时，回调就会调用，得到数据



![img](https://cdn.nlark.com/yuque/0/2021/png/12699685/1640831839986-9a41788f-5791-4672-b4e3-68a4a6854d20.png)



# 11、then的链式调用￥￥￥





## (1)值和状态由什么决定

then()返回的是一个新的Promise实例，它的值和状态由什么决定？

1、简单表达：由then指定的回调函数的结果决定

2、复杂表达：如果then指定的回调函数返回的结果是

​     (1)如果then所指定的回调返回的是**非Promise值a**:

​      	那么【新Promise实例】状态为：`成功(fulfilled)`, 成功的value为a

​     (2)如果then所指定的回调抛出**异常**:

​     	 那么【新Promise实例】状态为`失败rejected`, reason为抛出的那个异常

​     (3)如果then所指定的回调返回的是一个**Promise实例p**:

​      	那么【新Promise实例】的状态、值，都`与p一致`

3.中断promise链  

（1）.当使用promise的链式调用时，在中间中断，不再调用后面的回调函数

（2）.办法：在失败的回调函数中返回一个pending状态的Promise实例

​		由着2.3可知，返回一个全新的promise实例，则既不会走成功的也不会走失败的，因此中断









\--------------------------------------------------------------------------------------------------------------------------

<img src="https://cdn.nlark.com/yuque/0/2021/png/12699685/1640834629958-0bf3a8ff-1447-4206-b2c6-1954b5008d84.png" alt="img" style="zoom:50%;" /><img src="https://cdn.nlark.com/yuque/0/2021/png/12699685/1640834935073-08993fcf-7451-476c-9683-4e69ccac78b0.png" alt="img" style="zoom:50%;" />

\--------------------------------------------------------------------------------------------------------------------------

<img src="https://cdn.nlark.com/yuque/0/2021/png/12699685/1640834783536-9fe0c8fc-57bd-4043-bf17-307e5efb3bf2.png" alt="img" style="zoom:50%;" /><img src="https://cdn.nlark.com/yuque/0/2021/png/12699685/1640834793269-937f9b3f-e274-4b46-a895-de2a4f288bbc.png" alt="img" style="zoom:50%;" />







## (2)中断 promise链



当使用promise的then链式调用时, 在中间中断, 不再调用后面的回调函数。

​	在失败的回调函数中返回一个`pendding`状态的Promise实例。



<img src="https://cdn.nlark.com/yuque/0/2021/png/12699685/1640940585909-ddf30304-e3ec-4450-b3cf-711324fee33d.png" alt="img" style="zoom: 67%;" />

<img src="C:\Users\vnian\AppData\Roaming\Typora\typora-user-images\image-20220105165107090.png" style="zoom: 67%;" />









## (3)错误的穿透



promise错误穿透：

​	(1)当使用promise的then链式调用时, **不指定失败的回调**的情况下，可以在最后用catch指定一个失败的回调,

​	(2)前面任何操作出了错误, 都会传到最后失败的回调中处理了

备注：如果不存在then的链式调用，就不需要考虑then的错误穿透。





产生的问题：



<img src="https://cdn.nlark.com/yuque/0/2021/png/12699685/1640942591238-6af18bc8-5785-4218-84ce-006f14cc11ac.png" alt="img" style="zoom:50%;" />

<img src="https://cdn.nlark.com/yuque/0/2021/png/12699685/1640942633816-4c55083d-d60a-4e53-ac7b-1a0c57b61717.png" alt="img" style="zoom: 80%;" />







**错误的穿透**



不指定失败的回调的情况下，**使用catch兜底**

<img src="https://cdn.nlark.com/yuque/0/2021/png/12699685/1640943424407-cd79c4f3-e9c2-4444-9782-cac50e47b0c0.png" alt="img" style="zoom:50%;" />



底层原理

给每个失败的回调一个抛出异常，那么后面就会一直走失败的回调，直到最后被catch

<img src="https://cdn.nlark.com/yuque/0/2021/png/12699685/1640943309192-d69808c2-d196-4c05-8a8c-bd55ca693d90.png" alt="img" style="zoom:50%;" />





# 12、await 和 async

## (1)await和async的使用





**注意**

1、await右侧的表达式一般为Promise实例对象, 但也可以是其它的值

2、await只能等到成功的结果，失败的结果会报错，未被抓住的错误

​	注意：a是返回的错误 reject("a")

![image-20220105182259650](C:\Users\vnian\AppData\Roaming\Typora\typora-user-images\image-20220105182259650.png)

3、await必须被包裹在async修饰的方法的里面



**笔记**

1. async修饰的函数 

   async写在function关键字前面

   函数的返回值为`promise实例对象`

   Promise实例的结果由async函数执行的返回值决定



2. await表达式

   await右侧的表达式一般为Promise实例对象, 但`也可以是其它的值`

​	(1).如果表达式是Promise实例对象,将等待，await后的返回值是promise成功的值

​	(2).如果表达式是其它值, 直接将此值作为await的返回值,不需要等待

​			let a = await 100;

3. 注意:

   await必须写在async函数中, 但async函数中可以没有await

   如果await的Promise实例对象失败了, 就会抛出异常, 需要通过try...catch来捕获处理

   



## (2)原理



await的原理是 最终还是使用了.then 把函数中的其他代码放在了成功的回调里面



> 若我们使用async配合await这种写法：
>
> ​	1.表面上不出现任何的回调函数
>
> ​	2.但实际上底层把我们写的代码进行了加工，把回调函数“还原”回来了。
>
> ​	3.最终运行的代码是依然有回调的，只是程序员没有看见。



示例：

1 一开始就展示了

<img src="C:\Users\vnian\AppData\Roaming\Typora\typora-user-images\image-20220106105545214.png" alt="image-20220106105545214" style="zoom: 50%;" /> <img src="C:\Users\vnian\AppData\Roaming\Typora\typora-user-images\image-20220106105646977.png" alt="image-20220106105646977" style="zoom:50%;" />



2、await的原理是 最终还是使用了.then 把函数中的其他代码放在了成功的回调里面

<img src="C:\Users\vnian\AppData\Roaming\Typora\typora-user-images\image-20220106105857972.png" alt="image-20220106105857972" style="zoom:50%;" /> 





# 13、宏队列与微队列

注意：

异步的回调不能直接在主线程上执行 而是加入到回调队列排队，待主线程执行完毕后再按顺序执行

1、回调队列分宏队列和微队列，

2、微队列优先级高于宏队列 先执行微队列,`每次要执行宏队列里的一个任务`之前，先看微队列里是否有待执行的微任务

3、常见的微任务：promise的回调



> 笔记：
>
> 1. JS中用来存储待执行回调函数的队列包含2个不同特定的列队
>    1. 宏列队: 用来保存待执行的宏任务(回调), 比如: 定时器回调/DOM事件回调/ajax回调
>
>    2. 微列队: 用来保存待执行的微任务(回调), 比如: promise的回调/MutationObserver的回调
>
> 
>
> 宏队列:[宏任务1，宏任务2.....]
>
> 微队列:[微任务1，微任务2.....]
>
> 规则：`每次要执行宏队列里的一个任务`之前，先看微队列里是否有待执行的微任务
>
> ​      1.如果有，先执行微任务
>
> ​      2.如果没有，按照宏队列里任务的顺序，依次执行



  <img src="C:\Users\vnian\AppData\Roaming\Typora\typora-user-images\image-20220106111239322.png" alt="image-20220106111239322" style="zoom:50%;" /> <img src="C:\Users\vnian\AppData\Roaming\Typora\typora-user-images\image-20220106110607531.png" alt="image-20220106110607531" style="zoom:50%;" />

## (1)面试题



> 注意：`每次要执行宏队列里的一个任务`之前，先看微队列里是否有待执行的微任务



> <img src="C:\Users\vnian\AppData\Roaming\Typora\typora-user-images\image-20220106112302640.png" alt="image-20220106112302640" style="zoom:50%;" />  <img src="C:\Users\vnian\AppData\Roaming\Typora\typora-user-images\image-20220106112333566.png" alt="image-20220106112333566" style="zoom: 80%;" />





## (2)面试题



​	1、什么时候进队列？ 需要执行回调的时候

​	2、promise先指定then里面的回调，回调没有丢，而是缓存在实例对象身上，执行的时候仍然要推进微队列

​	3、new Promise（executor）传入的执行器函数是一个同步的回调 在主线程执行

<img src="C:\Users\vnian\AppData\Roaming\Typora\typora-user-images\image-20220106114338542.png" alt="image-20220106114338542" style="zoom: 50%;" /> <img src="C:\Users\vnian\AppData\Roaming\Typora\typora-user-images\image-20220106114407626.png" alt="image-20220106114407626" style="zoom: 67%;" />
