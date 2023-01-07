import { http, apis } from '../http';

function getProfile() {
	return http({
		url: apis('/sys/profile'),
		method: 'post',
	});
}
// 获取用户名

export { getProfile };
