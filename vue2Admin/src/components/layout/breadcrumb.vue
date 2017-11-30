<template>
    <div class="g-crumb">
        <el-breadcrumb separator-class="el-icon-arrow-right">
            <el-breadcrumb-item v-for="(item, index) in crumb" :to="item.path" :key="index">{{item.name}}</el-breadcrumb-item>
        </el-breadcrumb>
    </div>
</template>

<script>
	import { mapState } from 'vuex'
	
    export default {
        data() {
            return {
            }
        },
        created() {
            
        },
        computed: {
			...mapState(['crumb'])
		},
        methods: {
        }
    }
</script>