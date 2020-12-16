<template>
    <div>
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
    </div>
</template>

<script>
export default {
  name: 'Menu'
}
</script>

<style scoped>

</style>
