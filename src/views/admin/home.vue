<script setup>
    import '@/assets/admin/css/home.css'
    import HomeSide from '@/components/admin/home/HomeSide.vue'
</script>

<template>
  <div class="home">
    <el-container>
      <el-header>Header</el-header>
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

</style>