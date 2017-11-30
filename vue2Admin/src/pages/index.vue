<template>
    <div class="g-layout">
        <v-layout-left></v-layout-left>
        <div class="g-layout-main">
        	<v-layout-header></v-layout-header>
            <v-breadcrumb></v-breadcrumb>
            <div class="g-view">
	            <router-view></router-view>
	        </div>
        </div>
    </div>
</template>

<script>
    export default {

    }
</script>