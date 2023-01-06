<template>
  <div>
    <div class="top">
      <img src="../assets/头像.jpg" alt="" />
      <div class="top1">
        <h1>早安,管理员1,祝你开心每一天!</h1>
        <p>管理员1 | 传智播客-总裁办</p>
      </div>
    </div>
    <div></div>
    <div class="left2">
			<p>公告</p>
			<hr/>
			<ul>
				<li>
					<div class="top1">
						<img src="../assets/苹果.jpg" alt="">
					</div>
					<div class="top2">
						<h4><span>朱继柳</span> 发布了 第1期“传智大讲堂”互动讨论获奖名单公布</h4>
						<p>2018-07-21 15:21:38</p>
					</div>
				</li>
				<li>
					<div class="top1">
						<img src="../assets/苹果.jpg" alt="">
					</div>
					<div class="top2">
						<h4><span>朱继柳</span> 发布了 第1期“传智大讲堂”互动讨论获奖名单公布</h4>
						<p>2018-07-21 15:21:38</p>
					</div>
				</li>
				<li>
					<div class="top1">
						<img src="../assets/苹果.jpg" alt="">
					</div>
					<div class="top2">
						<h4><span>朱继柳</span> 发布了 第1期“传智大讲堂”互动讨论获奖名单公布</h4>
						<p>2018-07-21 15:21:38</p>
					</div>
				</li>
			</ul>
		</div>
    <div class="right1">
			<p>流程申请</p>
			<div class="right11">
				<button>加班离职</button>
			<button>请假调休</button>
			<button>审批列表</button>
			<button>我的信息</button>
			</div>
		</div>
    <div></div>
    <div></div>
  </div>
</template>

<script>
import { ref, reactive, toRefs, onBeforeUnmount, onMounted } from 'vue'
import { useStore } from 'vuex'
import { useRouter, useRoute } from 'vue-router'
export default {
  setup(props, ctx) {
    const store = useStore()
    const router = useRouter()
    const route = useRoute()
    const data = reactive({})
    return { ...toRefs(data) }
  }
}
</script>

<style lang="scss" scoped>
.top {
  height: 150px;
  width: 98%;
  background: #ffffff;
  display: flex;
  img {
    height: 120px;
    margin: 15px 0 0 15px;
  }
  .top1 {
    width: 100%;
    line-height: 70px;
		margin-left: 10px;
    p {
      color: #7f8c9b;
    }
  }
}
.left2{
	background: #fff;
	margin-top: 10px;
	width: 60%;
	li{
		margin-top: 20px;
		height: 70px;
		border-bottom: 1px solid #ccc;
		display: flex;
		img{
			width: 50px;
			height: 50px;
		}
	}
}
.right1{
	width: 400px;
	background: #fff;
	p{
		font-style: 30px;
		border-bottom: 1px solid #ccc;

	}
	.right11{
		margin: 10px 0 0 10px;
		display: flex;
		justify-content: space-between;
		flex-wrap: wrap;
		button{
			width: 80px;
			height: 40px;
			line-height: 40px;
		}
	}
}
</style>
