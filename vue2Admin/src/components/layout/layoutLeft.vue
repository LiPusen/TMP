<template>
    <div class="g-layout-left" :class="'status' + sta">
        <div class="g-layout-logo"></div>
        <v-layout-menu :isCollapse="sta == 1"></v-layout-menu>
        <div @click="toggle" :class="menuArrow" class="g-layout-left-arrow el-icon-arrow-left t-run"></div>
    </div>
</template>

<script>
    
    export default {
        data() {
            return {
                sta: 2 
            }
        },
        computed: {
            menuArrow() {
                if(this.sta == 1) {
                    return 'posi';
                } else {
                	return '';
                } 
            }
        },
        methods:{
        	toggle() {
                this.sta = this.sta == 1 ? 2 : 1;
            }
        }
    }
</script>

<style scoped lang="less">
    .el-icon-arrow-left.posi{
      transform: rotateY(180deg);
      right: -32px;
      z-index: 100;
      background-color: #404040;
      color: #ffe;
    }
</style>

