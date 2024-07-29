<script setup>

</script>

<template>
    <el-menu router background-color="#2D3E50 " active-text-color="#1ABC9C" text-color="#fff">
    <el-sub-menu index="admin">
        <template #title>
            <el-icon><UserFilled /></el-icon>
            <span>管理员</span>
        </template>
        <el-menu-item-group>
            <el-menu-item index="/admin/adminstrator/add">添加管理员</el-menu-item>
            <el-menu-item index="/admin/adminstrator/list">管理员列表</el-menu-item>
        </el-menu-item-group>

    </el-sub-menu>

    <el-menu-item index="/admin/category/list?parent_id=0">
        <el-icon><Files/></el-icon>类别管理
    </el-menu-item>

      </el-menu>
</template>

<style scoped>

</style>