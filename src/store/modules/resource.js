import {getMenus} from '@/api/userApi'
const state = {
  datas:[],
}



const getters ={

}

const mutations = {
  SET_DATAS(state,datas){
    state.datas = datas
  }
}



const actions = {
  queryMenus({commit}){
    getMenus().then(res=>{
      const result = res.result;
      commit('SET_DATAS', result)
    })
  },

  updateMenu({commit},data){
    return new Promise((resolve,reject) => {
      getMenus().then(response =>{
        const data = response.result;
        //const
        resolve(data)
      }).catch(error => {
        reject(error)
      })
    })
  },




}
export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}




