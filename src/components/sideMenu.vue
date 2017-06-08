<template>
  <section class="sidebar" style="height:auto;">
    <ul class="sidebar-menu">
      <li class="header">
        XX后台
      </li>
      <!--treeview-->
      <li class="treeview-menu">
        <!--  <router-link to="/"><i class="fa fa-dashboard"></i>首页</router-link>-->
        <a href="/#" @click="goIndex()"><i class="fa fa-dashboard"></i>首页</a>
      </li>
      <li class="treeview-menu" v-for="(item,i) in menudata" :class="{active:item.show}">
        <a href="javascript:void(0);" v-on:click.stop="toogleMenu(item.show,i,$event)"
           :class="{active:item.show}">
          <i v-bind:class="item.icon"></i>
          <span>{{item.title}}</span>
          <span class="pull-right-container" v-if="item.treeview">
                      <i class="fa fa-angle-right pull-right icon" :class="{icon_rotate:item.show}"></i>
                    </span>
        </a>
        <ul v-if="item.show">
          <li v-for="child in item.treeview">
            <a href="javascript:void(0);" @click="goRouter(child,$event)"><i
              class="fa fa-circle-o"></i> {{child.title}}</a>
          </li>
        </ul>
      </li>
    </ul>
  </section>
</template>
<script>
  import menuData from '../jsons/menu'
  import ripple from '../lib/ripple'
  import eleSibling from '../lib/eleSibling'
  export default {
    name: 'sidemenu',
    data(){
      return {
        menudata: menuData
      }
    },
    methods: {
      goIndex(){
        this.$store.commit('setBreadCrumb', {
          rtParent: '',
          rtName: ''
        });
      },
      goRouter(rt, event){
        var router = rt.rt_name;
        var rtParent = rt.rt_parent ? rt.rt_parent : '';
        this.$store.commit('setBreadCrumb', {
          rtParent: rtParent,
          rtName: router
        });
        if (router) {
          this.$router.push({name: router})
        } else {
          return false;
        }
      },
      toogleMenu(item, i, event){
        var openIndex = i;
        var len = this.menudata.length;
        var that = this;
        for (var i = 0; i < len; i++) {
          if (i == openIndex) {
            that.menudata[i].show = !item;
          } else {
            that.menudata[i].show = false;
          }
        }
      }
    },
    directives: {
      ripple: {
        bind: function (el) {
          ripple(el)
        }
      }
    },
    components: {}
  }
</script>
<style lang="scss">
  .active {
    color: #000;
    background: #eeeeee;
  }

  .icon {
    -webkit-transform-origin: 50% 50%;
    -moz-transform-origin: 50% 50%;
    -ms-transform-origin: 50% 50%;
    -o-transform-origin: 50% 50%;
    transform-origin: 50% 50%;
  }

  .icon_rotate {
    -webkit-transform: rotate(90deg);
    -moz-transform: rotate(90deg);
    -ms-transform: rotate(90deg);
    -o-transform: rotate(90deg);
    transform: rotate(90deg);
    -webkit-transition: all .3s ease-in;
    -moz-transition: all .3s ease-in;
    -ms-transition: all .3s ease-in;
    -o-transition: all .3s ease-in;
    transition: all .3s ease-in;
  }

  .sidebar {
    padding-bottom: 10px;
    a {
      color: #444;
      text-decoration: none !important;
      &:hover {
        background: #eeeeee;
      }
    }
    .sidebar-menu {
      list-style: none;
      padding: 0;
      margin: 0;
      .treeview-menu, .treeview-menu li {
        list-style-type: none;
      }
      > li {
        position: relative;
        margin: 0;
        padding: 0;
        list-style: none;
        .treeview-menu {
          background: #f4f4f5;
          list-style: none;
          padding: 0;
          margin: 0;
          padding-left: 5px;
          display: none;
        }
        > a {
          padding: 12px 5px 12px 15px;
          display: block;
          font-size: 14px;
          position: relative;
          .fa {

          }
        }
      }
      > li.active {
        color: #000;
        background: #f4f4f5;
        font-weight: 600;
        .treeview-menu {
          display: block !important;
        }
      }
      .treeview-menu {
        > li > a {
          padding: 5px 5px 5px 15px;
          display: block;
          font-size: 14px;
          color: #777;
          position: relative;
        }
        ul li a {
          display: block;
          width: 100%;
          position: relative;
          padding: 3px 0 3px 15px;
          font-size: 12px;
          i {
            margin-right: 7px;
          }
        }
        > ul {
          padding-left: 0;
          li {
            padding: 5px 0px;
          }
        }
      }
      li.header {
        color: #848484;
        background: #f9fafc;
        padding: 10px 25px 10px 15px;
        font-size: 12px;
      }
    }
  }
</style>
