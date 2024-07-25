<script setup>
    import { useAdminStore } from '@/stores/admin'

    const adminstore = useAdminStore()
    adminstore.save("york-lap", "1234", "2024")
    console.log(adminstore.data)

</script>

<template>
    <h3>Login</h3>

    <el-icon><User/></el-icon>
    <el-button type="primary">Login</el-button>
    
</template>

<style scoped>

</style>