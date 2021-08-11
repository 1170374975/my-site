//请求远程banner数据

import request from './request';//拦截器


export async function getBanners() {
  const resp = await request.get('/api/banner');
  // console.log(resp)
  return resp;
} 

// getBanners();