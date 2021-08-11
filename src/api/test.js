import axios from "axios";

async function getNews() {
  //协议域名端口号省略的话，会默认跟当前的网页保持一致
  // const resp = await axios.get('http://localhost:8080/commercial_api/banners_v3/home_up')
  const resp = await axios.get('/commercial_api/banners_v3/home_up');
  console.log(resp.data, '远程请求数据')
}

getNews();