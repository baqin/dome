<template>
	<!-- 社保 -->
	<div class="social-securitys">
		<el-card shadow="always">
			<div class="box">
				<div class="careful-lab">
					<div>
						<el-icon style="margin-top: 3px; margin-right: 6px; color: #409eff">
							<InfoFilled />
						</el-icon>
					</div>
					<div>本月：社保在缴 公积金在缴 增员 减员 入职 离职</div>
				</div>
				<div class="title">
					<span>历史归档</span>
					<span class="text">202002月报表</span>
				</div>
			</div>
			<div class="bottom">
				<div class="list">
					<h5>部门：</h5>
					<ul>
						<li>
							<el-checkbox v-model="checked1" size="large" />
							<span>总裁办</span>
						</li>
						<li>
							<el-checkbox v-model="checked1" size="large" />
							<span>行政部</span>
						</li>
						<li>
							<el-checkbox v-model="checked1" size="large" />
							<span>人事部</span>
						</li>
						<li>
							<el-checkbox v-model="checked1" size="large" />
							<span>财务部</span>
						</li>
						<li>
							<el-checkbox v-model="checked1" size="large" />
							<span>技术部</span>
						</li>
						<li>
							<el-checkbox v-model="checked1" size="large" />
							<span>运营部</span>
						</li>
						<li>
							<el-checkbox v-model="checked1" size="large" />
							<span>市场部</span>
						</li>
						<li>
							<el-checkbox v-model="checked1" size="large" />
							<span>财务核算部</span>
						</li>
						<li>
							<el-checkbox v-model="checked1" size="large" />
							<span>Java研发部</span>
						</li>
						<li>
							<el-checkbox v-model="checked1" size="large" />
							<span>Python研发部</span>
						</li>
						<li>
							<el-checkbox v-model="checked1" size="large" />
							<span>Pht研发部</span>
						</li>
						<li>
							<el-checkbox v-model="checked1" size="large" />
							<span>北京事业部</span>
						</li>
						<li>
							<el-checkbox v-model="checked1" size="large" />
							<span>上海事业部</span>
						</li>
						<li>
							<el-checkbox v-model="checked1" size="large" />
							<span>寄中寄</span>
						</li>
					</ul>
				</div>
				<div class="list">
					<h5>社保城市：</h5>
					<ul>
						<li>
							<el-checkbox v-model="checked1" size="large" />
							<span>北京</span>
						</li>
					</ul>
				</div>
				<div class="list">
					<h5>公积金城市：</h5>
					<ul>
						<li>
							<el-checkbox v-model="checked1" size="large" />
							<span>北京</span>
						</li>
					</ul>
				</div>
			</div>
		</el-card>
	</div>
</template>
<script lang="ts">
	import { ref, reactive, defineComponent, toRefs } from 'vue';
	import { useRouter, useRoute } from 'vue-router';
	export default defineComponent({
		setup(props, ctx) {
			const checked1 = ref(false);
			return { checked1 };
		},
	});
</script>
<style lang="scss" scoped>
	.box {
		display: flex;
		justify-content: space-between;

		.careful-lab {
			display: flex;
			padding: 5px 10px;
			font-size: 18px;
			border-radius: 3px;
			border: 1px solid #91d5ff;
			background: #e6f7ff;
			width: 420px;
		}
		.title {
			font-size: 14px;
			.text {
				margin-left: 15px;
			}
		}
	}
	.bottom {
		margin-top: 20px;
		.list {
			display: flex;
			align-items: center;
			h5 {
				margin: 0;
				width: 100px;
			}
			ul {
				display: flex;
				flex-wrap: wrap;
				li {
					margin-right: 20px;
					font-size: 14px;
					list-style: none;
					span {
						margin-left: 10px;
					}
				}
			}
		}
	}
</style>
