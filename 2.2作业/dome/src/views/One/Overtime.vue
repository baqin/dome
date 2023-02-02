<template>
  <div class="apply">
    <!-- 加班离职弹出框 -->
    <el-dialog title="提示" :visible.sync="dialogVisible" width="30%">
      <el-form :model="sizeForm" ref="sizeForm">
        <el-form-item label="申请类型" label-width="100px">
          <el-select v-model="sizeForm.processName" placeholder="请选择">
            <el-option label="加班" value="加班"> </el-option>
            <el-option label="离职" value="离职"> </el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="加班开始时间" label-width="100px" v-if="sizeForm.processName == '加班'">
          <el-date-picker v-model="sizeForm.start_time" type="datetime" placeholder="选择开始时间"> </el-date-picker>
        </el-form-item>
        <el-form-item label="加班结束时间" label-width="100px" v-if="sizeForm.processName == '加班'">
          <el-date-picker v-model="sizeForm.end_time" type="datetime" placeholder="选择结束时间"> </el-date-picker>
        </el-form-item>
        <el-form-item label="期望离职时间" label-width="100px" v-if="sizeForm.processName == '离职'">
          <el-date-picker v-model="sizeForm.date" type="datetime" placeholder="选择结束时间"> </el-date-picker>
        </el-form-item>
        <el-form-item label="补偿方式" label-width="100px" v-if="sizeForm.processName == '加班'"> 调休 </el-form-item>
        <el-form-item
          label="加班原因"
          label-width="100px"
          style="padding-right: 40px"
          v-if="sizeForm.processName == '加班'"
        >
          <el-input type="textarea" v-model="sizeForm.reason"></el-input>
        </el-form-item>
        <el-form-item
          label="离职原因"
          label-width="100px"
          style="padding-right: 40px"
          v-if="sizeForm.processName == '离职'"
        >
          <el-input type="textarea" v-model="sizeForm.why"></el-input>
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
