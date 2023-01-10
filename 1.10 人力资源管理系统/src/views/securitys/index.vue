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
		<el-card shadow="always" class="securitys-body">
			<el-table :data="securitysList" style="width: 100%">
				<el-table-column prop="date" label="序号" width="60px">
					<template #default="scope">{{ scope.$index + 1 }}</template>
				</el-table-column>
				<el-table-column prop="username" label="姓名" sortable />
				<el-table-column prop="mobile" label="手机" sortable />
				<el-table-column prop="workNumber" label="工号" sortable />
				<el-table-column
					prop="departmentName"
					label="部门"
					sortable
				></el-table-column>
				<el-table-column
					prop="timeOfEntry"
					label="入职时间"
					sortable
				></el-table-column>

				<el-table-column prop="leaveTime" label="离职时间" sortable>
					<template #default="scope">
						{{ scope.row.leaveTime == null ? '----' : '' }}
					</template>
				</el-table-column>
				<el-table-column
					prop="participatingInTheCity"
					label="社保城市"
				></el-table-column>
				<el-table-column
					prop="providentFundCity"
					label="公积金城市"
				></el-table-column>
				<el-table-column
					prop="socialSecurityBase"
					label="社保基数"
				></el-table-column>
				<el-table-column
					prop="providentFundBase"
					label="公积金基数"
				></el-table-column>
			</el-table>
			<div class="pagination">
				<el-pagination
					v-model:current-page="currentPage"
					v-model:page-size="pageSize"
					:page-sizes="[10, 20, 30, 40]"
					:small="small"
					:disabled="disabled"
					:background="background"
					:total="total"
					layout="sizes, prev, pager, next, jumper"
					@size-change="handleSizeChange"
					@current-change="handleCurrentChange"
				/>
			</div>
		</el-card>
	</div>
</template>
<script lang="ts">
	import { ref, reactive, defineComponent, toRefs } from 'vue';
	import { getSecurityList } from '../../untils/securitys';
	import * as Ts from '../../api/securitys';
	export default defineComponent({
		setup(props, ctx) {
			const checked1 = ref(false);
			let currentPage = ref<number>(1);
			// 当前第几页
			let pageSize = ref<number>(10);
			// 当前页数
			let total = ref<number>(10);
			// 总数
			const small = ref(true);
			const background = ref(true);
			const disabled = ref(false);
			const securitys = reactive<Ts.securitysList>({
				securitysList: [
					{
						departmentName: '',
						id: '1063705482939731968',
						leaveTime: null,
						mobile: '13800000001',
						participatingInTheCity: '北京',
						participatingInTheCityId: '1084825908823904256',
						providentFundBase: 10000,
						providentFundCity: '北京',
						providentFundCityId: '1084825908823904256',
						socialSecurityBase: 10000,
						timeOfEntry: '2018-11-01',
						username: 'cgx',
						workNumber: '',
					},
				],
			});
			const getList = () => {
				getSecurityList({
					page: currentPage.value,
					pageSize: pageSize.value,
				}).then((res) => {
					console.log(res);
					securitys.securitysList = res.data.data.rows;
					total.value = res.data.data.total;
				});
			};
			getList();
			const handleSizeChange = (val: number) => {
				pageSize.value = val;
				console.log(pageSize);
				getList();
				// console.log(`${val}`);
			};
			const handleCurrentChange = (val: number) => {
				currentPage.value = val;
				getList();
				// console.log(`${val}`);
			};
			return {
				checked1,
				...toRefs(securitys),
				pageSize,
				currentPage,
				small,
				background,
				disabled,
				handleSizeChange,
				handleCurrentChange,
				total,
			};
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
	.securitys-body {
		margin-top: 20px;
		position: relative;
		padding-bottom: 60px;
	}
	.pagination {
		margin-top: 20px;
		position: absolute;
		bottom: 30px;
		right: 20px;
	}
</style>
