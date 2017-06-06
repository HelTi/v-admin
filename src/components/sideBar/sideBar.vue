<template>
    <div class="main-sidebar">
        <div class="sidebar-head">
            <a class="logo">
                <span class="logo-icon">
                   <b>Vue</b>Admin
                </span>
            </a>
        </div>
        <div class="user-panel">
            <div class="pull-left image">
                <img src="../../assets/img/a6.jpg" class="img-circle" alt="User Image">
            </div>
            <div class="pull-left info">
                <p>HelTi</p>
                <a href="#"><i class="fa fa-circle text-success"></i> Online</a>
            </div>
        </div>
        <form action="#" method="get" class="sidebar-form">
            <div class="input-group">
                <input type="text" name="q" class="form-control" placeholder="Search...">
                <span class="input-group-btn">
                    <button type="submit" name="search" id="search-btn" class="btn btn-flat"><i
                            class="fa fa-search"></i>
                    </button>
                </span>
            </div>
        </form>
        <side-menu></side-menu>
    </div>
</template>
<script>
    import sideMenu from '../sideMenu'
    export default {
        name: 'sidebar',
        data(){
            return {}
        },
        methods: {},
        components: {sideMenu}
    }
</script>
<style lang="scss">
    .main-sidebar {
        position: absolute;
        top: 0;
        left: 0;
        /*  padding-top: 50px;*/
        width: 230px;
        z-index: 810;
        min-height: 100%;
        transition: transform .3s ease-in-out, width .3s ease-in-out;
        border-right: 1px solid #eee;
        background-color: #f9fafc;
    }

    .main-sidebar {

    .sidebar-head {

    a {
        display: block;
        width: 100%;
        height: 50px;
        line-height: 50px;
        text-align: center;
        background-color: #605ca8;
        color: #fff;
        border-bottom: 0 solid transparent;
        font-size: 20px;

    .logo-icon {
        color: #ffffff;
    }

    }
    }
    .user-panel {
        position: relative;
        width: 100%;
        padding: 10px;
        overflow: hidden;

    >
    .info {
        padding: 5px 5px 5px 15px;
        line-height: 1;
        position: absolute;
        left: 55px;

    >
    p {
        font-weight: 600;
        margin-bottom: 9px;
    }

    >
    a {
        text-decoration: none;
        padding-right: 5px;
        margin-top: 3px;
        font-size: 11px;
    }

    }
    }
    .user-panel > .image > img {
        width: 100%;
        max-width: 45px;
        height: auto;
        border-radius: 50%;
    }

    }

    .sidebar-form{
        border-radius:3px;
        margin:10px;
        border: 1px solid #d2d6de;
        overflow: hidden;
        text-overflow: clip;

        input[type="text"],.btn{
            box-shadow: none;
            background-color:#ffffff;
            border:1px solid transparent;
            height: 35px;
            font-size:14px;
        }
        .btn{
            color: #999;
            border-top-left-radius: 0;
            border-top-right-radius: 2px;
            border-bottom-right-radius: 2px;
            border-bottom-left-radius: 0;
            cursor: pointer;
            outline: none;
        }
    }
</style>