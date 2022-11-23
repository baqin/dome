<template>
  <div>
    <quill-editor class="quills" v-model="richtext" ref="myQuillEditor">
 </quill-editor>
    <el-button class="but" type="primary" @click="tj">提交</el-button>
 </div>
</template>

<script>
export default {
  data () {
    return {
        richtext:'',
    }
  },
  methods: {
    tj(){
       this.$message({
          message: '提交成功',
          type: 'success'
        });
        this.richtext=''
    }
  },
  created () {

  },
  mounted () {

  },
  components: {

  },
  computed: {

  },
  watch: {

  },
}
</script>

<style lang='scss' scoped>
.quills{
    width: 100%;
    height: 400px;
}
.but{
    position: fixed;
    margin-left: 48%;
}
</style>
