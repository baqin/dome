<template>
  <div>
    <!-- 编辑对话框 -->
    <el-dialog title="编辑商品" :visible.sync="dialogVisible" width="50%">
      <el-form ref="form" :model="form" label-width="80px">
        <el-form-item label="商品名称">
          <el-input v-model="form.goods_name"></el-input>
        </el-form-item>
        <el-form-item label="价格">
          <el-input v-model="form.goods_price"></el-input>
        </el-form-item>
        <el-form-item label="数量">
          <el-input v-model="form.goods_number"></el-input>
        </el-form-item>
        <el-form-item label="重量">
          <el-input v-model="form.goods_weight"></el-input>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="goddsqd">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        goods_name: "",
        goods_price: "",
        goods_number: "",
        goods_weight: ""
      }, //编辑表单
      dialogVisible: false, //编辑模态框
      id: 0 //用来保存编辑当前的id
    }
  },
  methods: {
    /**组件初始化 */
    info(row) {
      this.dialogVisible = true
      /**
       * 没有值的话,就关闭模态框
       * 有值得话就进行回填内容
       */
      if (row) {
        this.id = row.id
        /**解构一下 防止浅拷贝得发生 */
        this.form = { ...row }
      }
    },

    /**编辑确定按钮 */
    goddsqd() {
      this.$http({
        method: "put",
        url: this.$http.addorUrl(`goods/${this.id}`),
        data: this.form
      }).then((res) => {
        // console.log(res)
      })
      this.dialogVisible = false
    }
  },
  created() {},
  mounted() {},
  components: {},
  computed: {},
  watch: {}
}
</script>

<style lang="scss" scoped></style>
