<template>
	<div class="g-header">
		<div class="g-header-title">VUE后台管理系统模板</div>
		<div class="g-header-info">
			<i>您好 {{userInfo.userName}}</i>
			<i class="g-header-info-fun" v-on:click="signOut">退出系统</i>
		</div>
	</div>
</template>

<script>
	import { mapState, mapMutations } from 'vuex'

	export default {
		data() {
			return {
				
			}
		},
		computed: {
			...mapState(['userInfo'])
		},
		methods: {
			...mapMutations(['mlogout']),
			signOut() {
				this.mlogout();
				this.$router.push('/login');
			}
		}
	}
</script>