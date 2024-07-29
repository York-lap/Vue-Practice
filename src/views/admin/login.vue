<script setup>
    import '@/assets/admin/css/login.css'
    import {User, Lock} from "@element-plus/icons-vue"
    import { reactive,ref } from 'vue';
    // 1. Axios & ElMessage
    import axios from "axios"
    import {ElMessage} from "element-plus"
    // 2.Pinia 
    import {useAdminStore} from '@/stores/admin'
    // 3.Router
    import { useRouter } from 'vue-router';

    // 3.1 Init
    const router = useRouter()
    // 2.1 Init
    const adminstore = useAdminStore()
    const data = reactive({
        name: '',
        password: '',
    })

    const elFormRef = ref() // el-form ref
    const rules = {
        name:[
            {required: true, message:'Input your account', trigger:'blur'},
            {min:2, max:10, message:'Limit len[2-10]', trigger:'blur'}
        ],
        password: [
            {required:true, message:'Input tour password', trigger:'blur'}
        ]
    }

    // 测试
    const login = ()=>{
        console.log(data);

        elFormRef.value.validate((valid, fields) => {
            // console.log("valid:",valid,"fields:",fields)
            if (!valid){
                return
            }
            axios.post('http://127.0.0.1:8008/api/adm/login',data).then(response =>{
                console.log("data", response.data);

                if(!response.data.status){
                    ElMessage.error(response.data.msg)
                    return
                }

                let token = response.data.data.token
                console.log("token:", token)
                let [headerBase64, payloadBase64, signature] = token.split('.')
                let payload = atob(payloadBase64)
                let payloadObj = JSON.parse(payload)
                adminstore.save(payloadObj.name,token,payloadObj.expireDate)
                console.log("payloadObj",payloadObj)
                
                router.push("admin")

            }).catch(err=>{
                console.log("err: ",err);
                })
        })


        
    }

</script>

<template>
    <div class="login">
        <el-form :model="data" :rules="rules" ref="elFormRef">
            <div class="title">
                York-lap
            </div>
            <el-form-item prop="name">
                <el-input :prefix-icon = "User" v-model="data.name"/>
            </el-form-item>

            <el-form-item prop="password">
                <el-input show-password :prefix-icon = "Lock" v-model="data.password"/>
            </el-form-item>

            <el-form-item>
                <el-button type="primary" @click="login">Login</el-button>
            </el-form-item>
        </el-form>
    </div>
    
</template>

<style scoped>

</style>