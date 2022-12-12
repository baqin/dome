<template>
  <div>
    <!-- 查看物流信息对话框 -->
    <el-dialog title="物流进度" :visible.sync="dialogVisible" width="50%">
      <span slot="footer" class="dialog-footer">
        <div class="orders-aa">
          <el-timeline>
            <el-timeline-item
              v-for="(activity, index) in arr"
              :key="index"
              :icon="activity.icon"
              :type="activity.type"
              :color="activity.color"
              :size="activity.size"
              :timestamp="activity.time"
            >
              {{ activity.context }}
            </el-timeline-item>
          </el-timeline>
        </div>

        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogVisible = false"
          >确 定</el-button
        >
      </span>
    </el-dialog>

    <!-- 修改订单地址 -->
    <el-dialog title="修改地址" :visible.sync="dialogVisible1" width="50%">
      <el-form ref="form" :model="form" label-width="80px" :rules="rules">
        <el-form-item label="省市区" prop="region">
          <el-cascader
            :options="cityOptions"
            @change="changeProvince"
            change-on-select
          >
          </el-cascader>
        </el-form-item>
        <el-form-item label="详细地址" prop="address">
          <el-input v-model="form.address"></el-input>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible1 = false">取 消</el-button>
        <el-button type="primary" @click="dialogVisible1 = false"
          >确 定</el-button
        >
      </span>
    </el-dialog>
  </div>
</template>

<script>
import cityOptions from "@/assets/city_data2017_element"
export default {
  data() {
    return {
      dialogVisible: false, //查看物流信息
      dialogVisible1: false, //点击编辑
      cityOptions: [], //地址内容
      arr: [], //拿到物流单号
      form: {
        region: "",
        address: ""
      }, //修改订单表单
      rules: {
        region: [
          { required: true, message: "请选择收货地址", trigger: "blur" }
        ],
        address: [
          { required: true, message: "请输入详细地址", trigger: "blur" }
        ]
      } //修改正则
    }
  },
  methods: {
    info(val) {
      this.dialogVisible = true
      if (val) {
        // console.log(val)
        this.arr = val
      }
    },

    info1(val) {
      this.dialogVisible1 = true
    },

    changeProvince(val) {
      console.log(val)
    }
  },
  created() {
    this.cityOptions = cityOptions
  },
  mounted() {},
  components: {},
  computed: {},
  watch: {}
}
</script>

<style lang="scss" scoped></style>
