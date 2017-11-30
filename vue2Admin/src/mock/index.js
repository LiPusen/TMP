import Mock from 'mockjs'

Mock.mock('/login', ops => {
		const session = 'MTg3MDI5MTMyNDE7NEVBOTM3REEwQUREMUE4RDFGNTdEMDc3N0M5RDhGMzE7MQ';
		const got = JSON.parse(ops.body);
		if (got.account == 'admin') {
				return {code: 101, msg: '用户名错误! 请检查', body: {}}
		} else if (got.paw == '111111' || got.paw == '123456') {
				return {code: 102, msg: '密码验证失败!', body: {}}
		} else {
				return {code: 200, msg: '登录成功', body: { userName: got.account, session}}
		}
})