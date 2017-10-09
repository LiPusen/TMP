<template>
    <div class="layout-header">
        <button @click="toggleLayoutMenu">〓</button>
        <ul class="menu-root">
            <li>全屏</li>
            <li>消息 10</li>
            <li class="relative" @mouseenter="mouseEnter" @mouseleave="mouseLeave">
                <span class="header-pic"><img src="../../assets/b1.jpg" /></span>
                <transition name="fade">
                    <v-header-menu v-show="isShowHeaderMenu" @mouseenter="mouseEnter" @mouseleave="mouseLeave" @itemHandle="isShowHeaderMenu = false"></v-header-menu>
                </transition>
            </li>
        </ul>
    </div>
</template>

<script>
    import { mapGetters, mapMutations } from 'vuex'

    export default {
        data() {
            return {
                isShowHeaderMenu: false,
                isHover: false
            }
        },
        computed: {
            ...mapGetters(['custom'])
        },
        methods: {
            ...mapMutations(['_custom']),
            toggleLayoutMenu() {
                this.custom.toggleMenuStatus = !(this.custom.toggleMenuStatus - 1) + 1;
                this._custom(this.custom);
            },
            mouseEnter() {
                this.isHover = true;
                this.isShowHeaderMenu = true;
            },
            mouseLeave() {
                this.isHover = false;
                setTimeout(() => {
                    if(!this.isHover) {
                        this.isShowHeaderMenu = false;
                    }
                }, 200);
            }
        }
    }
</script>

<style scoped lang="less">
    .layout-header {
        background: rgb(255, 255, 255);
        height: 64px;
        line-height: 64px;
        padding: 0 20px;
        .menu-root {
            float: right;
            li {
                float: left;
                height: 64px;
                padding: 0 20px;
                border-bottom: 2px solid #fff;
                transition: all 0.3s;
                &:hover {
                    border-bottom: 2px solid #404040;
                }
                .header-pic {
                    display: inline-block;
                    width: 40px;
                    img {
                        border-radius: 500px;
                        width: 100%;
                    }
                }
            }
        }
    }
    
    .fade-enter-active,
    .fade-leave-active {
        transition: opacity .5s
    }
    
    .fade-enter,
    .fade-leave-to {
        opacity: 0
    }
</style>