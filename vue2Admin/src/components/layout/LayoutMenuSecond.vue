<template>
    <ul class="layout-menu-second">
        <router-link v-for="item in data" tag="li" :to="{name: item.url}">{{item.name}}</router-link>
    </ul>
</template>

<script>
    export default {
        data() {
            return {

            }
        },
        props: ['data']
    }
</script>

<style scoped lang="less">
    .layout-menu-second {
        overflow: hidden;
        li {
            padding-left: 48px;
            &:hover {
                color: #fff;
            }
        }
    }
</style>