<template>
    <ul class="header-menu">
        <li v-for="item in menus" @click="$emit('itemHandle')">{{item}}</li>
    </ul>
</template>

<script>
    export default {
        data() {
            return {
                menus: [11, 22, 33]
            }
        }
    }
</script>

<style scoped lang="less">
    .header-menu {
        width: 120px;
        top: 100%;
        left: 0;
        position: absolute;
        min-width: 100%;
        margin-top: 7px;
        z-index: 1050;
        background-color: #fff;
        border-radius: 4px;
        left: -24px;
        color: rgba(0, 0, 0, 0.65);
        box-shadow: 0 1px 6px rgba(0, 0, 0, 0.2);
        li {
            padding: 10px 20px;
            line-height: initial;
            cursor: pointer;
            &:hover {
                color: #000;
            }
        }
    }
</style>