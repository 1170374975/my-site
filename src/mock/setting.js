//模拟全局设置数据
import Mock from 'mockjs';
import qqCode from '@/assets/qq.jpg';
import weixinCode from '@/assets/weixin.jpg';
import avatarWn from '@/assets/avatar-wn.png';
import faviconIcon from '@/assets/favicon-icon.png';

Mock.mock('/api/setting', 'get', {
  code: 0,
  msg: '',
  data: {
    avatar: avatarWn, //个人空间的头像
    siteTitle: '妮儿的个人空间', //个人空间的标题
    github: 'https://github.com/1170374975', //我的github地址
    qq: '1170374975', 
    qqQrCode: qqCode, //qq二维码
    weixin: '1170374975ni',
    weixinQrCode: weixinCode, //微信二维码
    mail: 'w1170374975@gmail.com',
    icp: '黑ICP备17001719号', //备案号
    githubName: '1170374975', //github名称
    //网站标题图标favicon的地址
    favicon: faviconIcon,
  }
})