//获取关于我的数据
import request from './request';//拦截器

export async function getAbout(){
  const resp = await request.get('/api/about');
  return resp;
}
