#utils工具

##getComponentRootDom 获取某个组件渲染的Dom根元素
使用方法
```js
// 拿到MessageBox组件的dom
const message = getComponentRootDom(
  MessageBox, //组件
  { //组件需要传的属性
    type,
    content,
    size
  }
)
```


##showMessage 弹出消息框

使用方法
```html
  <!-- 在vue组件中，用ref，可直接操作dom,甚至直接改动子组件 -->
  <div class="home-container" ref="container">
    <h1>这里是首页</h1>
    <button @click="handleClick">按钮</button>
  </div>
```
```js
//把utils中的消息框，添加到原型上，用的时候，直接this.$showMessage
import { showMessage } from './utils';
Vue.prototype.$showMessage = showMessage;
```

```js
this.$showMessage({
  type: 'success',  //消息类型  默认info  error  success  warn
  content: '评论成功', //消息内容
  duration: 3000, //多久后消失, 默认2000
  container: this.$refs.container, //容器，消息会显示到该容器的正中；如果不传，则显示到页面正中
  size: 25px; //icon的大小，默认为20px
  //消失后的回调函数
  callback: function () {
    console.log('完成')
  }
})
```

##formatDate  处理时间格式：2021-05-28

使用方法：
```html
  {{formatDate(时间戳)}}
```
```js
import {formatDate} from '@/utils'
methods:{
  formatDate,
}
```
