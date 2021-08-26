//获取项目&效果，数据
import request from './request';

export async function getProject() {
  return await request.get('/api/project');
}