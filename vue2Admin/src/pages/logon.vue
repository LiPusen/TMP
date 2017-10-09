<template>
	<div class="box">
		<div class="logon">
			<h2 class="title">后台管理系统</h2>
			<dl class="content">
				<dd><input type="text" placeholder="手机号/邮箱" /></dd>
				<dd><input type="password" placeholder="密码" /></dd>
				<dd><button type="button">登录</button></dd>
			</dl>
			<div class="autoLogon clear">
				<div class="logonCheck left"><img src="../assets/logon/c.png"/> 下次自动登录</div>
				<div class="logonLinks right">
					<a href="javascript:;">忘记密码</a>&nbsp;|&nbsp;<a href="javascript:;">注册</a>
				</div>
			</div>
			<p class="thirdAccount">第三方帐号登录 </p>
			<div class="accountLogon">
				<a class="wechatLogon" href="javascript:;"></a>
				<a class="weiboLogon" href="javascript:;"></a>
				<a class="qqLogon" href="javascript:;"></a>
			</div>
		</div>
	</div>
</template>

<script>
	export default {

	}
</script>

<style lang="less" scoped="scoped">
	* {
		margin: 0px;
		padding: 0px;
	}
	
	.left {
		float: left;
	}
	
	.right {
		float: right;
	}
	
	.clear:after {
		content: '';
		display: block;
		clear: both;
	}
	
	.clear {
		zoom: 1;
	}
	
	a {
		text-decoration: none;
	}
	
	.box {
		position: absolute;
		width: 100%;
		height: 100%;
		background: #ccc;
		left: 0;
		top: 0;
		z-index: 1;
	}
	
	.logon {
		position: absolute;
		width: 336px;
		left: 50%;
		top: 15%;
		margin-left: -200px;
		border-radius: 3px;
		background: #fff;
		padding: 35px 32px;
	}
	
	.logon {
		h2.title {
			color: #282828;
			font-size: 16px;
			font-weight: normal;
			margin: 0 0 30px;
			border-bottom: 1px solid #eee;
			padding-bottom: 20px;
		}
		dl.content {
			dd {
				margin-bottom: 20px;
			}
			input {
				width: 100%;
				border: none;
				height: 42px;
				color: #666;
				background: #f4f4f4;
				padding: 0 20px;
				box-sizing: border-box;
				border-radius: 4px;
				border: 1px solid #ddd;
			}
			button {
				width: 100%;
				border: none;
				font-size: 16px;
				height: 42px;
				color: #bbb;
				background: #eee;
				border: 1px solid #eee;
				border-radius: 4px;
				text-align: center;
				cursor: default;
			}
		}
		.autoLogon {
			margin-bottom: 32px;
			line-height: 14px;
			.logonCheck {
				img{
					vertical-align: middle;
				}
			}
			.logonLinks {
				color: #d36f16;
				a {
					color: #d36f16;
				}
			}
		}
		.thirdAccount {
			margin-bottom: 15px;
			text-align: center;
		}
		.accountLogon {
			text-align: center;
			a {
				display: inline-block;
				width: 42px;
				height: 42px;
				background-color: #ddd;
				border-radius: 50%;
				background-repeat: no-repeat;
				background-position: center;
			}
			.wechatLogon {
				background-image: url(../assets/logon/wechat.png);
			}
			.wechatLogon:hover {
				background-color: #58bc46;
			}
			.weiboLogon {
				background-image: url(../assets/logon/weibo.png);
				margin: 0 20px;
			}
			.weiboLogon:hover {
				background-color: #e90e24;
			}
			.qqLogon {
				background-image: url(../assets/logon/qq.png);
			}
			.qqLogon:hover {
				background-color: #3caae3;
			}
		}
	}
</style>