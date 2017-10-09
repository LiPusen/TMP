<template>
    <ul class="layout-menu">
        <li v-for="(item, index) in menu">
            <div class="menu-title ellipsis" :class="{active: expanded == index, children: custom.toggleMenuStatus == 2 && item.children.length}" @click="expendMenu(item, index)">
                <span class="icon" :class="{'fs-16': custom.toggleMenuStatus == 1}">★</span>
                <span v-if="custom.toggleMenuStatus == 2">{{item.name}}</span>
            </div>
            <v-layout-menu-second v-show="expanded == index" :data="item.children"></v-layout-menu-second>
        </li>
    </ul>
</template>

<script>
    import { mapGetters } from 'vuex'

    export default {
        data() {
            return {
                menu: [{
                    name: '首页',
                    children: [],
                    url: 'index'
                }, {
                    name: 'UI',
                    children: [{
                        name: '按钮',
                        url: 'ui-menu'
                    }, {
                        name: '图标',
                        url: 'ui-icon'
                    }, {
                        name: '加载中',
                        url: 'ui-loading'
                    }, {
                        name: '对话框',
                        url: 'ui-dialog'
                    }]
                }, {
                    name: '动画',
                    children: [{
                        name: '基础动画',
                        url: 'ani-basic'
                    }, {
                        name: '动画案例',
                        url: 'ani-case'

                    }]
                }],
                expanded: null
            }
        },
        computed: {
            ...mapGetters(['custom'])
        },
        methods: {
            //展开收起菜单
            expendMenu(item, index) {
                if(!item.children.length) {
                    this.$router.push(item.url);
                } else {
                    if(this.expanded == index) {
                        this.expanded = null;
                    } else {
                        this.expanded = index;
                    }
                }
            }
        }
    }
</script>

<style scoped lang="less">
    .layout-menu {
        outline: none;
        margin-bottom: 0;
        padding-left: 0;
        list-style: none;
        z-index: 1050;
        box-shadow: 0 1px 6px rgba(0, 0, 0, 0.2);
        color: rgba(0, 0, 0, 0.65);
        background: #fff;
        line-height: 46px;
        transition: background .3s, width .2s;
        color: rgba(255, 255, 255, 0.67);
        background: #404040;
        .menu-title {
            padding: 0 16px;
            font-size: 12px;
            line-height: 42px;
            height: 42px;
            padding-left: 24px;
            position: relative;
            display: block;
            cursor: pointer;
            &:hover {
                color: #fff;
            }
            &.children:after {
                font-family: "anticon" !important;
                font-style: normal;
                vertical-align: baseline;
                text-align: center;
                text-transform: none;
                text-rendering: auto;
                position: absolute;
                content: "∧";
                right: 16px;
                top: 0;
                display: inline-block;
                font-size: 16px;
                transform: rotate(180deg) scale(0.75);
                transition: transform 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
            }
            &.children.active:after {
                transform: rotate(0deg) scale(0.75);
            }
            .icon {
                transition: font-size 0.2s;
            }
        }
    }
</style>