<template>
  <div class="apply">
    <!-- 请假调休弹出框 -->
    <el-dialog title="请假" :visible.sync="dialogVisible" width="30%">
      <el-form :model="sizeForm" ref="sizeForm">
        <el-form-item label="假期类型" label-width="100px">
          <el-select v-model="sizeForm.processName" placeholder="请选择">
            <el-option label="请假" value="请假"> </el-option>
            <el-option label="调休" value="调休"> </el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="申请单位" label-width="100px"> 按天 </el-form-item>
        <el-form-item label="开始时间" label-width="100px">
          <el-date-picker v-model="sizeForm.start_time" type="datetime" placeholder="选择开始时间"> </el-date-picker>
        </el-form-item>
        <el-form-item label="结束时间" label-width="100px">
          <el-date-picker v-model="sizeForm.end_time" type="datetime" placeholder="选择结束时间"> </el-date-picker>
        </el-form-item>
        <el-form-item :label="sizeForm.processName == '请假' ? '请假时长' : '申请天数'" label-width="100px">
          <el-input v-model="sizeForm.date" placeholder="0"></el-input>
        </el-form-item>
        <el-form-item label="申请理由" label-width="100px" style="padding-right: 40px">
          <el-input type="textarea" v-model="sizeForm.reason"></el-input>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">提交</el-button>
        <el-button @click="resetForm('sizeForm')">重置</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
export default {
  data() {
    return {
      dialogVisible: true,
      sizeForm: {
        processName: "请假",
        start_time: "",
        end_time: "",
        date: "",
        reason: "",
        processKey: "process_dimission",
        userId: Date.parse(new Date())
      }
    }
  },
  methods: {
    resetForm(formName) {
      this.$refs[formName].resetFields()
      this.sizeForm = {
        processName: "加班",
        start_time: "",
        end_time: "",
        date: "",
        reason: "",
        why: "",
        processKey: "process_dimission",
        userId: Date.parse(new Date())
      }
    }
  }
}
</script>

<style lang="scss" scoped></style>
