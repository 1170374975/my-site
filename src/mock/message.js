//模拟留言板数据
import Mock from 'mockjs';
import qs from 'querystring';//查询字符串

Mock.mock('/api/message', 'post', {
  code: 0,
  msg: '',
  data: {
    id: '@guid',
    nickname: '@cname',
    content: '@cparagraph(1, 10)',
    createDate: Date.now(), 
    'avatar|1': [
      "https://qiheizhiya.oss-cn-shenzhen.aliyuncs.com/image/avatar6.jpg",
      "https://qiheizhiya.oss-cn-shenzhen.aliyuncs.com/image/avatar4.jpg",
      "https://qiheizhiya.oss-cn-shenzhen.aliyuncs.com/image/avatar8.jpg",
      "https://qiheizhiya.oss-cn-shenzhen.aliyuncs.com/image/avatar2.jpg",
    ]
  }
})

Mock.mock(/^\/api\/message\/?(\?.+)?$/, 'get', function (options) {
  const query = qs.parse(options.url);
  return Mock.mock({
    code: 0,
    msg: '',
    data: {
      total: 80,
      [`rows|${query.limit || 10}`]: [
        {
          id: '@guid',
          nickname: '@cname',
          content: '@cparagraph(1, 10)',
          createDate: Date.now(),
          'avatar|1': [
            "https://qiheizhiya.oss-cn-shenzhen.aliyuncs.com/image/avatar6.jpg",
            "https://qiheizhiya.oss-cn-shenzhen.aliyuncs.com/image/avatar4.jpg",
            "https://qiheizhiya.oss-cn-shenzhen.aliyuncs.com/image/avatar8.jpg",
            "https://qiheizhiya.oss-cn-shenzhen.aliyuncs.com/image/avatar2.jpg",
          ]
        }
      ]
    }
  })
})