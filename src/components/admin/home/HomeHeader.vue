<!--
 * @Author: yk
 * @Date: 2024-07-29 10:06:55
 * @Description: 
-->
<script setup>
    import {useAdminStore} from "@/stores/admin"
    import local from '@/utils/local'
    import { useRouter } from "vue-router";

    const adminstore = useAdminStore()
    const router = useRouter()

    const logout = ()=>{
        local.remove("admin")
        router.push("/login")
    }
</script>

<template>

    <div class="title">
        <div class="logo">
            <el-icon><MostlyCloudy/></el-icon>
        </div>
        <div class="text">
            <a href="/admin">Yorklap</a>
        </div>
    </div>

    <div class="info">
        <div class="admin">
            <div class="name">
                <span>{{adminstore.data.name}}</span> <el-icon><Bell/></el-icon>  
            </div>

            <div class="exit" @click="logout">
                退出
            </div>

        </div>
    </div>
</template>

<style scoped>

</style>