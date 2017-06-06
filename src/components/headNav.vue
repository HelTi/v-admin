<template>
    <header class="main-header">
        <nav class="navbar">
            <a href="javascript:void(0);" @click="openToggle"><i class="fa fa-navicon"></i></a>
            <div class="navbar-menu">
                <ul class="nav-bar-nav">
                    <li class="dropdown">
                        <a href="javascript:void(0);"><img id="user-photo" src="/static/img/a6.jpg"/>HelTi</a>
                    </li>
                    <li class="dropdown">
                        <a class="dropdown-toggle" href="javascript:void(0);" @click.stop="toogleOne"><i class="fa fa-envelope-o"></i></a>
                        <ul class="dropdown-menu" style="display: block;" v-if="openOne">
                            <li>11</li>
                            <li>22</li>
                        </ul>
                    </li>
                    <li class="dropdown">
                        <a class="dropdown-toggle" href="javascript:void(0);" @click.stop="toogleTwo"><i class="fa fa-bell-o"></i></a>
                        <ul class="dropdown-menu" style="display: block;" v-if="openTwo">
                            <li>11</li>
                            <li>22</li>
                        </ul>
                    </li>
                    <li class="dropdown">
                        <a class="dropdown-toggle" href="javascript:void(0);" @click.stop="toogleThree"><i class="fa fa-flag-o"></i></a>
                        <ul class="dropdown-menu" style="display: block;" v-if="openThree">
                            <li>11</li>
                            <li>22</li>
                        </ul>
                    </li>
                </ul>
            </div>
        </nav>
    </header>
</template>
<script>
    export default {
        name: 'headnav',
        data() {
            return {
                openOne:false,
                openTwo:false,
                openThree:false
            }
        },
        methods: {
            openToggle(e){
                var screenWidth = document.body.clientWidth;
                if (screenWidth >= 768) {
                    document.getElementById("app").classList.toggle("sidebar-collapse");
                } else {
                    document.getElementById("app").classList.toggle("sidebarOpen");
                }
            },
            toogleOne(){
                this.openOne =!this.openOne;
                this.openTwo=false;
                this.openThree=false;
            },
            toogleTwo(){
                this.openTwo=!this.openTwo;
                this.openOne=false;
                this.openThree=false;
            },
            toogleThree(){
               this.openThree=!this.openThree;
               this.openOne=false;
               this.openTwo=false;
            }
        }
    }
</script>
<style lang="scss">
    @import "../styles/color";
    #user-photo{
        width: 35px;
        height: 35px;
        border-radius: 50%;
        margin-right: 5px;
    }
    .main-header {
        .navbar {
            height: 50px;
            background-color: $white;
            -webkit-box-shadow: 0 2px 1px #eee;
            -moz-box-shadow: 0 2px 1px #eee;
            box-shadow: 0 2px 1px #eee;
        }
        .navbar-menu {
            .nav-bar-nav {
                height: 100%;
                margin-bottom: 0;
                .dropdown {
                    a {
                        color: $baseColor;
                        text-decoration: none;
                    }
                    .dropdown-menu {
                        margin-top: 0;
                        right: 0 !important;
                        left: auto !important;
                    }
                }
            }
        }
        .navbar-menu ul.nav-bar-nav {
            > li {
                list-style-type: none;
                float: left;
                margin-left: 12px;
                position: relative;
            }
        }

    }
</style>
