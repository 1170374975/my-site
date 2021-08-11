//自定义指令v-loading(是否显示loading)

import loadingUrl from '@/assets/loading.svg';
import styles from './loading.module.less';

//得到el中是loading效果的img元素
function getLoadingImage(el) {
  //通过自定义属性，查找是否存在该img元素
  return el.querySelector('img[data-role=loading]');
}

//创建loading的img元素
function createdLoadingImg() {
  const img = document.createElement('img');
  //给img添加自定义属性
  img.dataset.role = 'loading';
  img.src = loadingUrl;
  img.className = styles.loading;
  return img;
}

//导出指令的配置对象
//根据binding.value 的值，决定创建或删除img元素
export default function(el, binding) {//这样写，是同时触发bind和update钩子
  //得到el中是loading效果的img元素
    const curImg = getLoadingImage(el);
    if(binding.value){ //isLoading为true
      //判断是否存在img元素
      if(!curImg) {
        // console.log('创建img元素');
        const img = createdLoadingImg();
        el.appendChild(img);
      }
    }else {
      // console.log('删除img元素');
      if(curImg){
        curImg.remove();//移除img元素
      }
    }
  }
