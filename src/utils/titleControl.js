//标题控制：路由标题routeTitle-网站标题siteTitle
let routeTitle = '';
let siteTitle = '';

function setTitle() {
  if(!routeTitle && !siteTitle) {
    //设置网站标题
    document.title = 'loading...';
  } else if(routeTitle && !siteTitle) {
    document.title = routeTitle;
  } else if(!routeTitle && siteTitle){
    document.title = siteTitle;
  } else {
    document.title = `${routeTitle}-${siteTitle}`;
  }
}

export default {
  //设置路由标题
  setRouteTitle(title){
    routeTitle = title;
    setTitle();
  },
  // 设置网站标题
  setSiteTitle(title) {
    siteTitle = title;
    setTitle();
  }
}