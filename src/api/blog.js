//请求博客文章数据
import request from './request';

/**
 * 获取博客列表数据
 * @param {*} page  当前页码
 * @param {*} limit 页容量
 * @param {*} categoryid 所属分类，-1表示全部
 */
export async function getBlogs(page = 1, limit = 10, categoryid = -1) {
  const resp = await request.get('/api/blog', {
    params: {
      page, 
      limit, 
      categoryid 
    }
  });
  // console.log('api/blog.js',resp);
  return resp;
}


/**
 * 获取博客分类数据
 */
export async function getBlogTypes() {
  return await request.get('/api/blogtype');
}

//获取单个博客(id为博客的id)
export async function getBlog(id) {
  return await request.get(`/api/blog/${id}`);
}

//提交评论信息,参数{nickname: '昵称', content:'评论内容', blogId:'文章id'}
export async function postComment(commentInfo) {
  return await request.post('/api/comment', commentInfo);
}

//分页获取评论
export async function getComments(blogId, page = 1, limit = 10) {
  return await request.get('/api/comment', {
    params: {
      blogId,
      page,
      limit
    }
  })
}


