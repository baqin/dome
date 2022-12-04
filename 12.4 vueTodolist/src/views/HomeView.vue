<template>
  <div>
    <el-button type="primary" @click="add">添加</el-button>
     <!-- <el-calendar>
      <template slot="dateCell" slot-scope="{ date, data }">
        <p @click="qq(val)">
          {{ data.day.split("-").slice(2).join("-") }}
        </p>
        <div v-for="item in $store.state.list" :key="item.id">
          <div v-if="item.date1.indexOf(data.day.split('-').slice(0).join('-')) != -1">
            <el-button
              type="primary"
              size="mini"
              v-show="item.resource == '已完成'"
              @click="edit(item, item.id)"
              >{{ item.name }}</el-button>
          </div>
          <div v-if="item.date1.indexOf(data.day.split('-').slice(0).join('-')) != -1">
            <el-button
              type="danger"
              size="mini"
              v-show="item.resource == '未完成'"
              @click="edit(item, item.id)"
              >{{ item.name }}</el-button>
          </div>
        </div>
      </template>
    </el-calendar> -->
    <el-calendar>
      <template slot="dateCell" slot-scope="{ date, data }">
        <p @click="qq(data)">
          {{ data.day.split("-").slice(2).join("-") }}
        </p>
        <div v-for="item in $store.state.list" :key="item.id">
          <div
            v-if="item.date1.indexOf(data.day.split('-').slice(0).join('-')) != -1">
            <el-button
              type="primary"
              size="mini"
              v-show="item.resource == '已完成'"
              @click="undata(item, item.id)"
              >{{ item.name }}</el-button
            >
          </div>
          <div
            v-if="
              item.date1.indexOf(data.day.split('-').slice(0).join('-')) != -1"
          >
            <el-button
              type="danger"
              size="mini"
              v-show="item.resource == '未完成'"
              @click="undata(item, item.id)"
              >{{ item.name }}</el-button
            >
          </div>
        </div>
      </template>
    </el-calendar>
  <!-- 添加模态框 -->   
<el-dialog
  title="添加"
  :visible.sync="dialogVisible"
  width="50%">
  <el-form ref="form" :model="form" label-width="80px">
  <el-form-item label="事件名称">
    <el-input v-model="form.name"></el-input>
  </el-form-item>
  <el-form-item label="待办事项">
    <el-col :span="11">
      <el-date-picker type="date" placeholder="选择日期" v-model="form.date1" style="width: 100%;"></el-date-picker>
    </el-col>
    <el-col class="line" :span="2">-</el-col>
    <el-col :span="11">
      <el-time-picker placeholder="选择时间" v-model="form.date2" style="width: 100%;"></el-time-picker>
    </el-col>
  </el-form-item>
  <el-form-item label="事项状态">
    <el-radio-group v-model="form.resource">
      <el-radio label="已完成"></el-radio>
      <el-radio label="未完成"></el-radio>
    </el-radio-group>
  </el-form-item>
  <el-form-item>
    <el-button type="primary" @click="onSubmit">立即创建</el-button>
    
  </el-form-item>
</el-form>
</el-dialog>
  <!-- 添加模态框 -->
  <!-- 编辑模态框 -->
<el-dialog
  title="编辑"
  :visible.sync="dialogVisible1"
  width="50%">
  <el-form ref="form" :model="form" label-width="80px">
  <el-form-item label="事件名称">
    <el-input v-model="form.name"></el-input>
  </el-form-item>
  <el-form-item label="待办事项">
    <el-col :span="11">
      <el-date-picker type="date" placeholder="选择日期" v-model="form.date1" style="width: 100%;"></el-date-picker>
    </el-col>
    <el-col class="line" :span="2">-</el-col>
    <el-col :span="11">
      <el-time-picker placeholder="选择时间" v-model="form.date2" style="width: 100%;"></el-time-picker>
    </el-col>
  </el-form-item>
  <el-form-item label="事项状态">
    <el-radio-group v-model="form.resource">
      <el-radio label="已完成"></el-radio>
      <el-radio label="未完成"></el-radio>
    </el-radio-group>
  </el-form-item>
  <el-form-item>
    <el-button type="primary" @click="onundata">保存更改</el-button>  
  </el-form-item>
</el-form>
</el-dialog>
<!-- 编辑模态框 -->
 </div>
</template>

<script>
export default {
  data() {
    return {
      dialogVisible: false,
      dialogVisible1: false,
      ids: 0,
      form: {
        name: "",
        date1: "",
        date2: "",
        resource: ""
      },
      list: []
    };
  },
  methods: {
    add() {
      this.dialogVisible = true;
    },
    onSubmit() {
      this.dialogVisible = false;
      let res = new Date(this.form.date1).toLocaleDateString();
      // console.log(res);
      // console.log(res.split("/").slice(2).join("-"));
      this.form.date1 = res
        .split("/")
        .slice(0)
        .join("-");
      this.$store.commit("add", this.form);
      this.form = {};
    },
    undata(obj,id) {
      this.dialogVisible1 = true;
      this.form.name = obj.name;
      this.form.resource = obj.resource;
      this.form.date1 = obj.date1
      this.form.date2 = obj.date2;
      this.ids = id;
    },
    onundata(obj) {
      this.dialogVisible1 = false;
      this.$store.commit('undata',{ form: this.form, id: this.ids })
       this.form = {};
    },
    qq(val) {
      console.log(val);
    }
  },
  created() {},
  mounted() {},
  components: {},
  computed: {},
  watch: {}
};
</script>

<style lang='scss' scoped>
</style>
