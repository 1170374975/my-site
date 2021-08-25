//关于我   模拟数据
import Mock from 'mockjs';

Mock.mock('/api/about', 'get', {
  code: 0,
  msg: '',
  data: 'https://resume.flqin.com/'
})