<template>
	<div class="g-login">
		<canvas height="100%" width="100%" class="g-login-bg" id="bg"></canvas>
		<div class="g-login-view login">
			<h2 class="title">后台管理模板系统</h2>
			<dl class="content">
				<dd><input :class="{bgWhite: isFocusTel}" type="text" placeholder="请输入用户名" @click="focus(1)" v-on:blur="blur(1)" v-model.trim="login.account" autocomplete="off"/></dd>
				<dd><input :class="{bgWhite: isFocusPwd}" type="password" placeholder="请输入密码" @click="focus(2)" v-on:blur="blur(2)" v-model="login.paw" autocomplete="off"/></dd>
				<dd><button :class="{bgYellow: login.account && login.paw}" type="button" @click="logonBtn">登录</button></dd>
			</dl>
			<div class="autoLogon clear">
				<div class="logonCheck t-left" @click="isCheckFn">
					<img v-if="isCheck" src="../assets/login/checkbox.png" />
					<img v-else src="../assets/login/c.png" /> 下次自动登录
				</div>
				<div class="logonLinks t-right">
					<a href="javascript:void(0);">忘记密码</a>&nbsp;|&nbsp;
					<a href="javascript:void(0);">注册</a>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import { mapActions } from 'vuex'
	import Bg from '../mixins/techBg.vue'

	export default {
		mixins: [Bg],
		data() {
			return {
				// 手机号input是否获得焦点
				isFocusTel: false,
				// 密码input是否获得焦点
				isFocusPwd: false,
				// 登陆信息
				login: {
					account: '',
					paw: ''
				},
				// 是否记住密码
				isCheck: false
			}
		},
		created() {},

		methods: {
			...mapActions(['aLogin']),
			focus(value) {
				if(value == 1) {
					this.isFocusTel = true;
				} else {
					this.isFocusPwd = true;
				}
			},
			blur(value) {
				if(value == 1) {
					this.isFocusTel = false;
				} else {
					this.isFocusPwd = false;
				}
			},
			isCheckFn() {
				this.isCheck = !this.isCheck;
			},
			logonBtn() {
				if(this.login.account && this.login.paw) {
					this.aLogin({
						ops: this.login,
						isCheck: this.isCheck,
						callback: () => {
							this.oMsg.success('登录成功!')
							this.$router.push('/home')
						}
					})
				} else {
					this.oMsg.error('请完善登录信息!')
				}
			}
		}
	}
</script>

<style lang="less" scoped="scoped">
	.login {
		width: 400px;
	    height: 350px;
	    border-radius: 6px;
	    background-color: rgba(50,50,50,.4);
	    padding: 35px 32px;
	}

	.login {
		.title {
			color: #fee;
			font-size: 16px;
			font-weight: normal;
			margin: 0 0 30px;
			border-bottom: 1px solid #eee;
			padding-bottom: 20px;
		}
		.content {
			dd {
				margin-bottom: 20px;
			}
			input {
				width: 100%;
				border: none;
				height: 42px;
				color: #444;
				background-color: rgba(215,215,215,.7);
				padding: 0 20px;
				box-sizing: border-box;
				border-radius: 4px;
				border: 1px solid #ddd;
				font-size: 14px;
			}
			.bgWhite {
				background-color: #fff;
				color: #333;
			}
			button {
				width: 100%;
				border: none;
				font-size: 16px;
				height: 42px;
				color: #888;
				background-color: #ccc;
				letter-spacing: 5px;
				border-radius: 4px;
				text-align: center;
				cursor: pointer;
			}
			.bgYellow {
				color: #fff;
				background-color: #67c23a;
			}
		}
		.autoLogon {
			margin-bottom: 32px;
			line-height: 14px;
			font-size: 14px;
			.logonCheck {
				color: #fee;
				img {
					vertical-align: middle;
				}
			}
			.logonLinks {
				color: #20a0ff;
				a {
					color: #20a0ff;
				}
			}
		}
	}
</style>
