<template>
  <div class="body">
     <div class="box">
        <!-- 头部 -->
        <div class="nav">
            <img src="https://www.todolist.cn/img/note.75134fb0.svg" alt="">
            <div class="title">To-Do List</div>
        </div>
        <!-- 第二层 -->
        <div class="by">
            <p>~ Today I need to ~</p>
        </div>
        <!-- 第三层 -->
        <div class="cen">
            <input type="text" @change="add" placeholder="Add new todo ..." class="input" v-model="value">
            <button @click="add" class="but1">Submit</button>
        </div>
        <!-- 第四层 -->
            <ul v-show="flag==false">
                <li v-for="(item,index) in list" :key="index" class="footer">
                  <input type="checkbox" class="inp" @change="undate" v-model="item.flag">
                  <span>{{item.value}}</span>
                  <span @click="del(index)">X</span>
                </li>
            </ul>
            <ul v-show="flag==true">
                <li v-for="(item,index) in list" :key="index" class="footer" >
                  <input type="checkbox" class="inp" v-model="item.flag">
                  <span>{{item}}</span>
                  <span @click="del(index)">X</span>
                </li>
            </ul>
        <!-- 底部 -->
        <div class="en">
            <p><span class="span">√</span> Congrat, you have no more tasks to do</p>
        </div>
        <div class="unq">
            <p><span class="spp">{{num}}</span> item left</p>
            <p class="titlee">All</p>
            <p v-show="list.length>1">Active</p>
            <p v-show="list.length>1">Conmpleted</p>
            <span @click="dels">Clear completed</span>
        </div>
    </div>
 </div>
</template>

<script>
export default {
  data() {
    return {
      value: "", //输入的值
      list: [],   //定义数组
      flag: false, //定义状态
    };
  },
  methods: {
    undate(){
        
    },
    add() {
      // 不能为空
      if (this.value == "") {
        return;
      } else {
        // 添加
        this.list.push({
          // flag:false,
          flag:this.flag,
          value:this.value,
        });
        // 不能为空
        this.value = "";
      }
    },
    // 删除
    del(index) {
      this.list.splice(index, 1);
    },
    // 批量删除
    dels(){
      this.list = this.list.filter(i => i.flag == false);
    }
  },
  created() {},
  mounted() {},
  components: {},
  computed: {
    // 计算数量
    num(){
      return this.list.length
    }
  },
  watch: {}
};
</script>

<style lang='scss' scoped>
.footer {
  display: flex;
  justify-content: space-between;
  .inp {
    width: 20%;
    padding-right: 10px;
  }
  span {
    width: 30%;
  }
}
.flag {
  background-color: #fe7345;
  color: #fff;
  text-decoration: line-through;
}
.body {
  background-image: linear-gradient(90deg, #ffb0bb, #ffc2a2);
  display: flex;
  width: 100vw;
  height: 100vh;
}
.box {
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translateX(-50%) translateY(-50%);
  width: 400px;
  background-color: #fff;
  border-radius: 20px;
}
.nav {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 40px;
}
img {
  width: 100px;
  height: 70px;
}
.title {
  color: aliceblue;
  background-color: #fe7345;
  transform: rotate(5deg);
  padding: 10px 10px 10px 10px;
  border-radius: 12px;
  font-weight: 700;
}
.by {
  text-align: center;
  font-weight: 700;
}
.cen {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 40px 50px;
}
input {
  outline: none;
  width: 100%;
  border: 0;
  border-bottom: 3px dashed #fe7345;
  padding: 5px 0 3px;
}
.but1 {
  background-color: #fff;
  padding: 5px;
  margin-left: 10px;
  transform: rotate(3deg);
  border: 2px solid #000;
  border-radius: 5px;
  box-shadow: 0 4px 0 #a0492c;
}
li {
  list-style: none;
  display: flex;
  justify-content: space-around;
  align-items: center;
}
.sp {
  padding-right: 70px;
  padding-left: 200px;
}
.en {
  display: flex;
  justify-content: center;
  align-items: center;
}

.en p {
  font-size: 12px;
  color: #a8a6a7;
}

.span {
  margin: 0 10px 0 0;
  width: 15px;
  height: 15px;
  text-align: center;
  line-height: 15px;
  background: #b7b7b8;
  color: #fff;
}
.unq {
  display: flex;
  justify-content: space-around;
  align-items: center;
}
.unq .titlee {
  background-color: #fe7345;
  color: #fff;
  padding: 4px;
}
</style>
