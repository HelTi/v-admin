<template>
    <div id="app" class="wrapper">
        <top-progress ref="topProgress"></top-progress>
        <side-bar></side-bar>
        <div class="content-wrapper" id="content">
            <!--headnav-->
            <head-nav></head-nav>
            <bread-crumb></bread-crumb>
            <section class="content">
                <router-view></router-view>
            </section>
        </div>
        <footer-bar></footer-bar>
    </div>
</template>
<script>
    import sideBar from './components/sideBar/sideBar'
    import headNav from './components/headNav'
    import footerBar from './components/footerBar'
    import breadCrumb from './components/breadCrumb'
    import topProgress from './components/topProgress'
    export default {
        name: 'app',
        data() {
            return {
                isOpen: false,
                wrapper: 'wrapper'
            }
        },
        methods: {},
        beforeMount(){
          console.log('beforeMount')
        },
        mounted () {
            this.$refs.topProgress.start()

            // Use setTimeout for demo
            setTimeout(() => {
                this.$refs.topProgress.done()
            }, 1000)
        },
        components: {sideBar, footerBar, headNav, breadCrumb, topProgress}
    }
</script>
<style lang="scss">
    @import "styles/color";

    body {
        font-family: -apple-system, PingFang SC, Hiragino Sans GB, Arial, Microsoft YaHei, Helvetica Neue, sans-serif;
        font-weight: 400;
        overflow-x: hidden;
        overflow-y: auto;
    }

    html,
    body {
        height: 100%;
        background-color: $darkWhite !important;
    }

    .wrapper {
        min-height: 100%;
        position: relative;
        overflow-x: hidden;
        overflow-y: auto;
    }

    .content-wrapper {
        .content, .content-header {
            padding: 0px 8px;
        }
    }

    .content-wrapper, .main-footer {
        transition: transform .3s ease-in-out, margin .3s ease-in-out;
        margin-left: 230px;
        z-index: 820;
        min-height: 100%;
    }

    /**
    *  响应式
    */
    @media (min-width: 767px) {
        .sidebar-collapse {

            .main-sidebar {
                -webkit-transform: translate(-230px, 0);
                -moz-transform: translate(-230px, 0);
                -ms-transform: translate(-230px, 0);
                -o-transform: translate(-230px, 0);
                transform: translate(-230px, 0);
            }
            .content-wrapper, .main-footer {
                margin-left: 0px;
            }
        }
    }

    @media (max-width: 767px) {
        .main-sidebar {
            transform: translate(-230px, 0);
            -webkit-transform: translate(-230px, 0);
            -ms-transform: translate(-230px, 0);
            -o-transform: translate(-230px, 0);
        }
        .content-wrapper, .main-footer {
            margin-left: 0px;
        }
        /*打开菜单 .*/
        .sidebarOpen {
            .main-sidebar {
                transform: translate(0, 0);
                -webkit-transform: translate(0, 0);
                -o-transform: translate(0, 0);
                -ms-transform: translate(0, 0);
            }
            .content-wrapper, .main-footer {
                transform: translate(230px, 0);
                -webkit-transform: translate(230, 0);
                -o-transform: translate(230, 0);
                -ms-transform: translate(230, 0);
            }
        }
    }
</style>
