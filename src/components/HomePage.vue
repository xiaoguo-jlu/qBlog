<template>
    <el-container class="home_container">
        <el-header class="home-header">
            <Nav />
        </el-header>
        <el-container>
            <el-aside class="home-aside">
                <el-row>
                    <el-col>
                        <el-menu class="main-menu  el-menu-vertical-demo">
                            <el-menu-item index="0">首页</el-menu-item>
                            <el-submenu index="1" >
                                <template slot="title">
                                    <span>文章管理</span>
                                </template>
                                <el-menu-item index="1-1" @click="selectMenu('write')">写文章</el-menu-item>
                                <el-menu-item index="1-2">我的文章</el-menu-item>
                            </el-submenu>
                            <el-menu-item @click="selectMenu('statics')">统计数据</el-menu-item>
                        </el-menu>
                    </el-col>
                </el-row>
            </el-aside>
            <el-container>
                <el-main class="main-window">
                    <router-view></router-view>
                </el-main>
            </el-container>
        </el-container>
    </el-container>
</template>

<script>
import Nav from './Nav'
export default {
  name: 'HomePage',
  components: {
    Nav
  },
  data () {
    return {
      path: '/'
    }
  },
  methods: {
    selectMenu: function (menuId) {
      this.$router.push(menuId)
    }
  }
}
</script>

<style>
    .home-header {
        height: 100%;
        position: absolute;
        top: 0px;
        left: 0px;
        width: 100%;
    }
    .home-aside {
        background-color: darkgrey;
        position: absolute;
        top: 0px;
        width: 100%;
        height: 100%;
    }
    .main-menu {
        background-color: inherit;
        color: black;
        position: relative;
        top: 3%;
    }
    .main-window {
        position: relative;
        left: 20%;
        /*width: 75%;*/
        /*height: 75%;*/
    }

    /*.el-header {*/
    /*    background-color: #20a0ff;*/
    /*    color: #333;*/
    /*    text-align: center;*/
    /*    display: flex;*/
    /*    align-items: center;*/
    /*    justify-content: space-between;*/
    /*}*/

    /*.el-aside {*/
    /*    background-color: #ECECEC;*/
    /*}*/

    .el-main {
        background-color: white;
        color: #000;
        text-align: center;
    }

</style>
