// 状态
const state = {
    nm: window.localStorage.getItem('nowNm') || '北京',
    id: window.localStorage.getItem('nowId') || 1 
}
// 操作
const actions = {

}
// 方法
const mutations = {
    CITY_INFO (state, payload) {
        state.nm = payload.nm
        state.id = payload.id
    }
}
export default {
    // vuex 状态管理分模块管理的话，需要在index.js引入各个模块，为了避免命名冲突，设置这个属性
    namespaced: true,
    state,
    actions,
    mutations
}