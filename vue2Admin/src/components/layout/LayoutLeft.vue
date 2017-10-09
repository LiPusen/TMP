<template>
    <div class="layout-left layout-flex" :class="'menu-status' + custom.toggleMenuStatus">
        <div class="logo"></div>
        <v-layout-menu></v-layout-menu>
    </div>
</template>

<script>
    import { mapGetters } from 'vuex'

    export default {
        data() {
            return {

            }
        },
        computed: {
            ...mapGetters(['custom'])
        }
    }
</script>

<style scoped="" lang="less">
    .layout-left {
        transition: all .2s;
        position: relative;
        background: #404040;
        overflow-y: auto;
        flex: 0 0 200px;
        width: 200px;
        &.menu-status0 {
            width: 0;
            flex: 0;
        }
        &.menu-status1 {
            width: 64px;
            flex: 0 0 64px;
        }
        &.menu-status2 {
            width: 200px;
            flex: 0 0 200px;
        }
    }
    
    .logo {
        height: 32px;
        background: #333;
        border-radius: 6px;
        margin: 16px;
    }
</style>