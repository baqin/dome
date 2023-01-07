<template>
	<!-- 页面盒子 -->
	<div class="common-layout">
		<el-container>
			<el-aside :width="isCollapse == false ? '250px' : '70px'">
				<div class="logo">
					<img src="../../assets/baimg.png" alt="" />
				</div>
				<!-- <ul>
					<li
						@click="clickTabs(0)"
						@mouseover="handoffTabs(0)"
						@mouseout="handoffTabs(9)"
						:class="{ active: flag == 0 || handoffFlag == 0 }"
					>
						<el-icon :size="30"><Stamp /></el-icon>
						<p>首页</p>
					</li>
					<li
						@click="clickTabs(1)"
						@mouseover="handoffTabs(1)"
						@mouseout="handoffTabs(9)"
						:class="{ active: flag == 1 || handoffFlag == 1 }"
					>
						<el-icon :size="30"><Guide /></el-icon>
						<p>组织架构</p>
					</li>
					<li
						@click="clickTabs(2)"
						@mouseover="handoffTabs(2)"
						@mouseout="handoffTabs(9)"
						:class="{ active: flag == 2 || handoffFlag == 2 }"
					>
						<el-icon :size="30"><Avatar /></el-icon>
						<p>员工</p>
					</li>
					<li
						@click="clickTabs(3)"
						@mouseover="handoffTabs(3)"
						@mouseout="handoffTabs(9)"
						:class="{ active: flag == 3 || handoffFlag == 3 }"
					>
						<el-icon :size="30"><Setting /></el-icon>
						<p>公司设置</p>
					</li>
					<li
						@click="clickTabs(4)"
						@mouseover="handoffTabs(4)"
						@mouseout="handoffTabs(9)"
						:class="{ active: flag == 4 || handoffFlag == 4 }"
					>
						<el-icon :size="30"><Setting /></el-icon>
						<p>权限设置</p>
					</li>
					<li
						@click="clickTabs(5)"
						@mouseover="handoffTabs(5)"
						@mouseout="handoffTabs(9)"
						:class="{ active: flag == 5 || handoffFlag == 5 }"
					>
						<el-icon :size="30"><Menu /></el-icon>
						<p>社保</p>
					</li>
					<li
						@click="clickTabs(6)"
						@mouseover="handoffTabs(6)"
						@mouseout="handoffTabs(9)"
						:class="{ active: flag == 6 || handoffFlag == 6 }"
					>
						<el-icon :size="30"><List /></el-icon>
						<p>考勤</p>
					</li>
					<li
						@click="clickTabs(7)"
						@mouseover="handoffTabs(7)"
						@mouseout="handoffTabs(9)"
						:class="{ active: flag == 7 || handoffFlag == 7 }"
					>
						<el-icon :size="30"><CreditCard /></el-icon>
						<p>工资</p>
					</li>
					<li
						@click="clickTabs(8)"
						@mouseover="handoffTabs(8)"
						@mouseout="handoffTabs(9)"
						:class="{ active: flag == 8 || handoffFlag == 8 }"
					>
						<el-icon :size="30"><Platform /></el-icon>
						<p>审批</p>
					</li>
				</ul> -->
				<el-menu
					default-active="/dashboard"
					class="el-menu-vertical-demo"
					:collapse="isCollapse"
					background-color="#5080fd"
					text-color="#ffffff"
					active-text-color="#43a7fe"
					router
				>
					<el-menu-item index="/dashboard">
						<el-icon :size="30"><Stamp /></el-icon>
						<template #title>首页</template>
					</el-menu-item>
					<el-menu-item index="2">
						<el-icon :size="30"><Guide /></el-icon>
						<template #title>组织架构</template>
					</el-menu-item>
					<el-menu-item index="3">
						<el-icon :size="30"><Avatar /></el-icon>
						<template #title>员工</template>
					</el-menu-item>
					<el-menu-item index="4">
						<el-icon :size="30"><Setting /></el-icon>
						<template #title>公司设置</template>
					</el-menu-item>
					<el-menu-item index="/permissions/index">
						<el-icon :size="30"><Setting /></el-icon>
						<template #title>权限设置</template>
					</el-menu-item>
					<el-menu-item index="/securitys">
						<el-icon :size="30"><Menu /></el-icon>
						<template #title>社保</template>
					</el-menu-item>
					<el-menu-item index="/attendances/index">
						<el-icon :size="30"><List /></el-icon>
						<template #title>考勤</template>
					</el-menu-item>
					<el-menu-item index="/salarys">
						<el-icon :size="30"><CreditCard /></el-icon>
						<template #title>工资</template>
					</el-menu-item>
					<el-menu-item index="/approvals/index">
						<el-icon :size="30"><Platform /></el-icon>
						<template #title>审批</template>
					</el-menu-item>
				</el-menu>
			</el-aside>
			<el-container>
				<el-header>
					<div class="collapse">
						<el-icon @click="isCollapse = !isCollapse" :size="25">
							<Fold v-if="isCollapse == false" />
							<Expand v-else />
						</el-icon>
					</div>
					<div class="firmTitle">
						江苏传智播客教育科技股份有限公司
						<span>体验版</span>
					</div>
					<div class="rightTabs">
						<div class="icons">
							<el-tooltip
								class="box-item"
								effect="dark"
								content="站内搜索"
								placement="bottom"
							>
								<el-icon size="30px"><Search /></el-icon>
							</el-tooltip>
						</div>
						<div class="icons">
							<el-tooltip
								class="box-item"
								effect="dark"
								content="使用文档"
								placement="bottom"
							>
								<el-icon size="30px"><QuestionFilled /></el-icon>
							</el-tooltip>
						</div>
						<div class="icons">
							<el-tooltip
								class="box-item"
								effect="dark"
								content="全屏"
								placement="bottom"
							>
								<svg
									data-v-0c576603=""
									t="1508738709248"
									viewBox="0 0 1024 1024"
									version="1.1"
									xmlns="http://www.w3.org/2000/svg"
									p-id="2069"
									xmlns:xlink="http://www.w3.org/1999/xlink"
									width="30"
									height="30"
									class="screenfull-svg"
								>
									<path
										data-v-0c576603=""
										d="M333.493443 428.647617 428.322206 333.832158 262.572184 168.045297 366.707916 64.444754 64.09683 64.444754 63.853283 366.570793 167.283957 262.460644Z"
										p-id="2070"
									></path>
									<path
										data-v-0c576603=""
										d="M854.845439 760.133334 688.61037 593.95864 593.805144 688.764889 759.554142 854.56096 655.44604 958.161503 958.055079 958.161503 958.274066 656.035464Z"
										p-id="2071"
									></path>
									<path
										data-v-0c576603=""
										d="M688.535669 428.550403 854.31025 262.801405 957.935352 366.921787 957.935352 64.34754 655.809313 64.081481 759.919463 167.535691 593.70793 333.731874Z"
										p-id="2072"
									></path>
									<path
										data-v-0c576603=""
										d="M333.590658 594.033341 167.8171 759.804852 64.218604 655.67219 64.218604 958.270996 366.342596 958.502263 262.234493 855.071589 428.421466 688.86108Z"
										p-id="2073"
									></path>
								</svg>
							</el-tooltip>
						</div>
						<div class="icons">
							<el-tooltip
								class="box-item"
								effect="dark"
								content="多语言"
								placement="bottom"
							>
								<el-icon size="30px"><HelpFilled /></el-icon>
							</el-tooltip>
						</div>
						<el-tooltip
							class="box-item"
							effect="dark"
							content="换肤"
							placement="bottom"
						>
							<div class="demo-color-block" style="width: 40px; height: 40px">
								<el-color-picker v-model="color" />
							</div>
						</el-tooltip>
						<el-dropdown @command="handleCommand">
							<span class="el-dropdown-link">
								<img
									src="../../assets/1.jpg"
									alt=""
								/>
								<p>{{ username }}</p>

								<el-icon class="el-icon--right"><arrow-down /></el-icon>
							</span>
							<template #dropdown>
								<el-dropdown-menu>
									<el-dropdown-item command="a">首页</el-dropdown-item>
									<el-dropdown-item command="b">退出登录</el-dropdown-item>
								</el-dropdown-menu>
							</template>
						</el-dropdown>
					</div>
				</el-header>
				<el-main>
					<router-view></router-view>
				</el-main>
			</el-container>
		</el-container>
	</div>
</template>
<script lang="ts">
	import { ref, reactive, toRefs } from 'vue';
	import { useRouter, useRoute } from 'vue-router';
	import { ElMessage } from 'element-plus';
	import { getProfile } from '../../untils/pageing';
	export default {
		setup(props, ctx) {
			const router = useRouter();
			const route = useRoute();
			// let flag = ref<number>(0);
			// // 控制点击tab切换颜色
			// let handoffFlag = ref<number>(9);
			// // 控制移入移出tab切换颜色
			// const clickTabs = (val: number) => {
			// 	flag.value = val;
			// };
			// // 点击tab切换颜色
			// const handoffTabs = (val: number) => {
			// 	handoffFlag.value = val;
			// };
			// // 移入移出tab切换颜色
			let isCollapse = ref<boolean>(false);
			// 控制左边展开隐藏
			const color = ref<string>('#409eff');
			// 换肤颜色
			const handleCommand = (command: string | number | object) => {
				ElMessage(`click on item ${command}`);
			};
			// 下拉菜单点击事件
			const username = ref<string>('管理员');
			getProfile().then((res) => {
				// console.log(res);
				username.value = res.data.data.username;
			});
			// 获取用户名
			return { isCollapse, color, handleCommand, username };
		},
	};
</script>
<style lang="scss" scoped>
	.common-layout {
		width: 100%;
		height: 100%;
		.el-container {
			width: 100%;
			height: 100%;
			background: #edeff2;
		}
		.el-aside {
			height: 100%;
			background: url(../../assets/dabg.png) no-repeat;
			background-position: 0px 772px;
			background-color: #5080fd;
			background-size: 100%;
			box-shadow: 2px 0 6px rgb(0 21 41 / 35%);
			.logo {
				height: 75px;
				width: 100%;
				text-align: center;
				img {
					width: 80%;
					// height: 100%;
					margin: 7px;
				}
			}
			// ul {
			// 	width: 100%;
			// 	height: 742px;
			// 	background: #5080fd;
			// 	padding-top: 15px;
			// 	li {
			// 		height: 11%;
			// 		padding: 0 26px;
			// 		line-height: 82px;
			// 		font-size: 20px;
			// 		display: flex;
			// 		color: white;
			// 		i {
			// 			margin-top: 24px;
			// 			margin-right: 24px;
			// 		}
			// 	}
			// }
			.el-menu {
				width: 100%;
				height: 742px;
				margin-top: 15px;
				border-right: 0 !important;
				.el-menu-item {
					height: 11%;
					padding: 0 26px;
					line-height: 82px;
					font-size: 20px;
					display: flex;
					color: white;
					i {
						// margin-top: 24px;
						margin-right: 24px;
					}
				}
				.el-menu-item:hover {
					background: #ecf5ff !important;
					color: #5080fd !important;
				}
			}
		}
		.el-header {
			height: 66px;
			background: #4e7efc;
			padding: 0;
			display: flex;
			position: relative;
			.collapse {
				line-height: 66px;
				margin-top: 8px;
				padding: 0 14px;
				color: white;
				overflow: hidden;
			}
			.firmTitle {
				font-size: 24px;
				line-height: 66px;
				margin-left: 10px;
				color: #fff;
				span {
					background: #84a9fe;
					font-size: 20px;
					padding: 5px 10px;
					display: inline-block;
					height: 30px;
					line-height: 30px;
					border-radius: 10px;
					margin-left: 15px;
				}
			}
			.rightTabs {
				// line-height: 66px;
				// margin-top: 8px;
				display: flex;
				color: white;
				position: absolute;
				right: 0;
				top: 0;
				.icons {
					padding-top: 18px;
					margin-right: 20px;
				}
				::v-deep .el-color-picker__trigger {
					width: 40px !important;
					height: 40px !important;
					margin-top: 13px;
					margin-right: 20px;
				}
				.screenfull-svg[data-v-0c576603] {
					fill: #ffffff;
				}
				.el-dropdown {
					margin-left: 25px;
					color: black;
					font-size: 20px;
					padding-right: 20px;
					.el-dropdown-link {
						display: flex;
						i {
							color: white;
							margin-top: 18px;
							font-size: 26px;
						}
						p {
							margin-top: 20px;
							font-size: 18px;
							margin-left: 5px;
						}
						img {
							width: 34px;
							height: 34px;
							border-radius: 50%;
							margin-top: 15px;
						}
					}
				}
			}
		}
	}
	.is-active {
		background: white;
		color: #43a7fe !important;
	}
</style>
