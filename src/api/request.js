//请求拦截
import axios from 'axios';
import showMessage from '@/utils/showMessage';

const ins = axios.create();//创建axios实例
//拦截数据,凡是用ins这个实例得到的响应，先会运行use传进去的函数
ins.interceptors.response.use(function(resp) {
  // console.log(resp)
  if(resp.data.code !== 0) { //不等于0说明有错误
    //如果code为0，则弹出错误消息框
    showMessage({
      content: resp.data.msg,
      type: "error",
      duration: 1500
    });
    return null;
  }
  return resp.data.data;
})
export default ins;
