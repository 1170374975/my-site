//处理时间格式：2021-05-28   showTime=true时，显示时分秒
export default function formatDate(timestamp, showTime = false) {
  const date = new Date(+timestamp);
  const year = date.getFullYear();
  //padStrat接收两个参数,第一个参数用来指定字符串的最小长度，第二个参数是用来补全的字符串。
  //padStart()用于头部补全，padEnd()用于尾部补全。
  const month = (date.getMonth() + 1).toString().padStart(2, '0'); //最小长度是两位，不够则以零填充
  const day = date.getDate().toString().padStart(2, '0');
  let str = `${year}-${month}-${day}`;

  //显示时分秒
  if(showTime) {
    const h = date.getHours().toString().padStart(2, '0');
    const m = date.getMinutes().toString().padStart(2, '0');
    const s = date.getSeconds().toString().padStart(2, '0');
    str += ` ${h}:${m}:${s}`;
  }
  return str;
}