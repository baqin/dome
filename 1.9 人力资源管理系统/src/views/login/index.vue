<template>
	<!-- 登录 -->
	<div class="login">
		<div class="box">
			<div class="titleImg">
				<img src="../../assets/下载.png" alt="" />
			</div>
			<el-form
				ref="ruleFormRef"
				:model="ruleForm"
				:rules="rules"
				label-width="120px"
				class="demo-ruleForm"
				:size="formSize"
				status-icon
			>
				<el-form-item label="" prop="name">
					<el-input
						v-model="ruleForm.name"
						class="w-50 m-2"
						placeholder="username"
					>
						<template #prefix>
							<el-icon :size="20" color="#889aa4" style="margin: 0 15px 0 8px">
								<UserFilled />
							</el-icon>
						</template>
					</el-input>
				</el-form-item>
				<el-form-item label="" prop="word">
					<el-input
						v-model="ruleForm.word"
						type="password"
						show-password
						class="w-50 m-2"
						placeholder="passworc"
					>
						<template #prefix>
							<el-icon :size="20" color="#889aa4" style="margin: 0 15px 0 8px">
								<Lock />
							</el-icon>
						</template>
					</el-input>
				</el-form-item>
				<el-form-item>
					<el-button
						type="primary"
						@click="submitForm(ruleFormRef)"
						style="width: 100%; height: 70px; font-size: 30px"
					>
						登录
					</el-button>
				</el-form-item>
			</el-form>
			<div class="enroll">
				<span>还没有账号？</span>
				<span>立即注册</span>
			</div>
		</div>
	</div>
</template>

<script lang="ts">
	import type { FormInstance, FormRules } from 'element-plus';
	import { ref, reactive, toRefs } from 'vue';
	import { useRouter, useRoute } from 'vue-router';
	import * as Ts from '../../api/login';
	import { login } from '../../untils/login';
	import { ElNotification } from 'element-plus';
	import { setToken } from '../../untils/auth';
	export default {
		setup(props, ctx) {
			const router = useRouter();
			const route = useRoute();
			const data = reactive({});
			const formSize = ref('default');
			const ruleFormRef = ref<FormInstance>();
			const ruleForm = reactive<Ts.LoginFrom>({
				name: '13800000002',
				word: '123456',
			});
			const rules = reactive<FormRules>({
				name: [
					{
						required: true,
						message: '用户名不能为空',
						trigger: 'blur',
					},
					{
						min: 6,
						message: '用户名不能小于6位',
						trigger: 'blur',
					},
				],
				word: [
					{
						required: true,
						message: '密码不能为空',
						trigger: 'blur',
					},
					{
						min: 6,
						message: '密码不能小于6位',
						trigger: 'blur',
					},
				],
			});
			const submitForm = async (formEl: FormInstance | undefined) => {
				if (!formEl) return;
				await formEl.validate((valid, fields) => {
					if (valid) {
						console.log('submit!');
						login({
							mobile: ruleForm.name,
							password: ruleForm.word,
						}).then((res) => {
							console.log(res);
							setToken(res.data.data);
							if (res.status == 200) {
								ElNotification({
									title: '登录成功',
									message: res.data.message,
									duration: 3000,
								});
								router.push('/dashboard');
							}
						});
					} else {
						console.log('error submit!', fields);
					}
				});
			};

			const options = Array.from({ length: 10000 }).map((_, idx) => ({
				value: `${idx + 1}`,
				label: `${idx + 1}`,
			}));
			return {
				...toRefs(data),
				ruleForm,
				rules,
				formSize,
				ruleFormRef,
				submitForm,
				options,
			};
		},
	};
</script>

<style lang="scss" scoped>
	.login {
		height: 100%;
		width: 100%;
		background: url(../../assets/login.c75bab6.jpg) 50% no-repeat;
		background-size: 125% 150%;
		position: relative;
		.box {
			width: 600px;
			height: 500px;
			// background: red;
			margin: auto;
			position: absolute;
			left: 0;
			top: 17%;
			right: 0;
			padding: 35px 35px 15px;
			.titleImg {
				width: 100%;
				height: 60px;
				margin-bottom: 50px;
				img {
					width: 100%;
					height: 100%;
				}
			}
			::v-deep .el-form-item__content {
				color: #454545;
				margin-bottom: 25px;

				display: flex;
				margin-left: 0px !important;
				.el-input__wrapper {
					border-radius: 5px !important;
					border: 1px solid hsla(0, 0%, 100%, 0.1);
					background: hsla(0, 0%, 100%, 0.7);

					.el-input__inner {
						width: 100%;
						height: 65px;
						font-size: 20px;
						color: #72b3fe;
						// .el-input__wrapper {
						// 	border: 0 !important;
						// }
					}
				}
			}
			::v-deep .el-form-item--default .el-form-item {
				margin-bottom: 1 !important;
			}
			::v-deep .el-form-item.is-error .el-input__wrapper {
				box-shadow: 0 0 0 0 !important;
			}

			::v-deep .el-form-item__error {
				color: white;
				font-size: 16px;
			}
			.enroll {
				color: white;
				text-align: center;
			}
		}
	}
</style>
