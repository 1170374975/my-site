//函数防抖，参数（函数，时间）
export default function (fn, duration = 100) {
  let timer = null;
  return (...args) => {
    clearTimeout(timer); 
    timer = setTimeout(() => {
      fn(...args);
    }, duration)
  }
}