import MessageBox from '@/components/MessageBox';
import getComponentRootDom from './getComponentRootDom';
import styles from './showMessage.module.less';

/**
 * 弹出消息框
 * @param {String} content  消息内容
 * @param {String} type  消息类型  默认info  error  success  warn
 * @param {Number} duration 多久后消失，默认2000
 * @param {HTMLElement} container 容器，消息会显示到该容器的正中；如果不传，则显示到页面正中
 * @param {Number} size icon的大小，默认为20px
 * @param {Function} callback  成功后的回调函数
 */
export default function(options = {}) {
  const content = options.content || '';
  const type = options.type || 'info';
  const duration = options.duration || 2000;
  const container = options.container || document.body;
  const size = options.size || 20;

  // const div = document.createElement('div');
  
  //拿到MessageBox组件dom
  const message = getComponentRootDom(MessageBox, {
    type,
    content,
    size
  })
  const messageClassName = message.className;
  //设置样式:
  message.className = `${ messageClassName } ${ styles.message }`;//拼接className,styles.message为css module命名

  // 如果不是放在body里，判断container的position是否更改过
  if(options.container){
    if(getComputedStyle(container).position === 'static') {
      container.style.position = 'relative';
    }
  }
  container.appendChild(message)
  //浏览器强行渲染(只要读取元素的位置、尺寸这些，就能强行渲染)
  message.clientHeight; //导致reflow
  //回到正常位置
  message.style.opacity = 1;
  message.style.transform = `translate(-50%, -50%)`;
  //等duration时间后，自动向上消失
  setTimeout(() => {
    message.style.opacity = 0;
    message.style.transform = `translate(-50%, -50%) translateY(-20px)`;
    message.addEventListener('transitionend', function() {
      message.remove(); //transition运动结束，移除
      //运行回调函数
      options.callback && options.callback(); //传入的回调函数
    }, {once: true});//once是事件只触发一次
  }, duration)

}

//可以在main.js中，把方法加入到vue原型上,以后使用时，直接用this.$showMessage()
// import { showMessage } from './utils';
// Vue.prototype.$showMessage = showMessage;

// 在组件中调用的时候
// 需要用ref获取到vue的DOM
// this.$showMessage({
//   type: 'success',
//   content: '评论成功',
//   duration: 3000,
//   container: this.$refs.container, //在需要插入的元素上，加上ref=""
//   callback: function () {
//     console.log('完成')
//   }
// })

