import { http, apis } from '../http';

function getUserTitle() {
	return http({
		url: apis('/sys/user/1063705989926227968?id=1063705989926227968'),
		method: 'get',
	});
}
// 获取用户名公司部门

export { getUserTitle };
