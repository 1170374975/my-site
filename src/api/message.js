//留言板数据
import request from './request';

/**
 * 分页获取留言
 * @param {*} page 当前页码
 * @param {*} limit 页容量
 */
export async function getMessage(page = 1, limit = 10) {
  const resp = await request('/api/message', {
    params: {
      page,
      limit
    }
  });
  // console.log('api/message/getMessage', resp)
  return resp;
}
/**
 * 提交留言
 * @param {*} msgInfo 留言昵称和内容
 */
export async function postMessage(msgInfo) {
  const resp = await request.post('/api/message', msgInfo);
  // console.log('api/message/postMessage', resp)
  return resp;
}