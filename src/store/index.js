/**
 * Created by Administrator on 2017/5/18 0018.
 */
import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

const store = new Vuex.Store({
  state:{
    breadCrumb:{
      rtParent:'',
      rtName:''
    }
  },
  mutations:{
    setBreadCrumb(state,opt){
      state.breadCrumb={
        rtParent:opt.rtParent,
        rtName:opt.rtName
      }
    }
  }
})
export default store;
