<!--
 * @Author: yk
 * @Date: 2024-07-28 16:21:19
 * @Description: 
-->
<script setup>
    import '@/assets/admin/css/home.css'
    import HomeSide from '@/components/admin/home/HomeSide.vue'
    import HomeHeader from '@/components/admin/home/HomeHeader.vue';
</script>

<template>
  <div class="home">
    <el-container>
      <el-header>
        <HomeHeader/>
      </el-header>
      <el-container>
        <el-aside width="200px">
          <HomeSide/>
        </el-aside>
        <el-main>
          <router-view />
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>
 
<style scoped>
.el-aside{

}
</style>