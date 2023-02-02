// 员工页面模块
import { user } from "@/api/staff"

const state = {
  list: [], // 定义空数组
  total: 0 // 总数量
}

const mutations = {
  staffList(state, obj) {
    state.total = obj.total
    state.list = obj.rows
  }
}

const actions = {
  //请求数据
  getList(ctx, obj) {
    user(obj).then((res) => {
      ctx.commit("staffList", res.data.data)
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
