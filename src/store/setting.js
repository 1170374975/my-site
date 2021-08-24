//全局设置-共享数据
import { getSetting } from '@/api/setting.js';
import { titleControl } from '@/utils';

export default {
  namespaced: true, //命名空间
  state: {
    loading: false,
    data: null
  },
  mutations: {
    setLoading(state, payload) {
      state.loading = payload;
    },
    setData(state, payload) {
      state.data = payload;
    }
  },
  actions: {
    async fetchSetting(context) {
      context.commit('setLoading', true);
      const resp = await getSetting();
      // console.log('setting/actions',resp)
      context.commit('setData', resp);
      context.commit('setLoading', false)
      if(resp.favicon) {
        //给网站标题前，设置小图标
        let link = document.querySelector('link[rel="shortcut icon"]');
        if(link) { //图标已存在
          return;
        }
        link = document.createElement('link');
        link.rel = 'shortcut icon';
        link.type = 'images/x-icon';
        link.href = resp.favicon;
        document.querySelector('head').appendChild(link)
      }
      //设置网站标题
      if(resp.siteTitle) {
        titleControl.setSiteTitle(resp.siteTitle);
      }
      
    }
  }
}