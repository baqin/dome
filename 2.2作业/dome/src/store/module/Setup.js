import { Setup } from "@/api/Setup"
const state = {
  list: [], //定义的空数组
  total: 0 //总数量
}
const mutations = {
  SetupList(state, obj) {
    state.total = obj.total
    state.list = obj.rows
  }
}
const actions = {
  //请求数据
  getList(ctx, obj) {
    Setup(obj).then((res) => {
      console.log(res)
      ctx.commit("SetupList", res.data.data)
    })
  }
}
//导出
export default {
  namespaced: true,
  state,
  mutations,
  actions
}
