import { http, apis } from '../http';

function getSecurityList(data?: { page: Number; pageSize: Number }) {
	return http({
		url: apis('/social_securitys/list'),
		method: 'post',
		data,
	});
}

export {getSecurityList}
