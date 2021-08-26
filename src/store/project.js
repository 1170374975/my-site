//项目&效果，数据存储到仓库
import { getProject } from '@/api/project.js';


export default {
  namespaced: true, //开启命名空间
  state: {
    loading: false,
    data: []
  },
  mutations: {
    setLoading(state, payload){
      state.loading = payload;
    },
    setData(state, payload){
      state.data = payload;
    }
  },
  actions: {
    async fetchProject(context) {
      if(context.state.data.length){
        return; //如果已经有数据，就不用重新获取
      }
      context.commit('setLoading', true);
      const resp = await getProject();
      context.commit('setData', resp);
      context.commit('setLoading', false);
    }
  }
}