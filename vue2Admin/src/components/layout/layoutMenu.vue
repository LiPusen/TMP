<template>
	<el-menu :router="true" :default-active="defaultIndex" :unique-opened="true" class="g-menu" :collapse="isCollapse" >
		<template v-for="(menu1, index1) in tree">
			<el-menu-item v-if="!menu1.children" :index="menu1.path">
				<i class="el-icon-message"></i>
				<span slot="title">{{menu1.name}}</span>
			</el-menu-item>
			<el-submenu v-else :index="menu1.name">
				<template slot="title">
					<i v-bind:class="icon[index1]"></i>
					<span slot="title">{{menu1.name}}</span>
				</template>
				<template v-for="(menu2, index2) in menu1.children">
					<el-menu-item v-if="!menu2.children" :index="menu2.path">{{menu2.name}}</el-menu-item>
					<el-submenu v-else :index="menu2.path">
						<span slot="title">{{menu2.name}}</span>
						<el-menu-item v-for="(menu3, index3) in menu2.children" :index="menu3.path" :key="index3">{{menu3.name}}</el-menu-item>
					</el-submenu>
				</template>
			</el-submenu>
		</template>
	</el-menu>
</template>

<script>
	export default {
		data() {
			return {
				icon: ['el-icon-message', 'el-icon-edit', 'el-icon-view', 'el-icon-setting'],
				tree: ['首页', 'UI', '动画'],
				sort: [],
				defaultIndex: ''
			}
		},
		props: ['isCollapse'],
		created() {
			this.treeList();
		},
		computed: {

		},
		watch: {
		},
		methods: {
			treeList() {
				const list = this.$router.options.routes[0].children;
				const uu = {};

				list.forEach((item, index) => {
					if(item.meta.tree && item.meta.tree.length) {
						if(item.meta.tree[0] == 'main') {
							uu[item.name] = item;
						} else {
							uu[item.meta.tree[0]] = {name: item.meta.tree[0], children: list.filter(k => k.meta.tree[0] == item.meta.tree[0])};
						}
					} else { }
				})

				this.tree.forEach((k, i) => {
					this.tree[i] = uu[k];
				})

				this.defaultIndex = this.tree[0].path;
			}
		}
	}
</script>
