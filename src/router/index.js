import {createRouter, createWebHistory} from "vue-router"
import { useAdminStore } from "@/stores/admin.js"
const routes = [
    {
      path: "/",
      redirect: "/admin"  
    },
    {
        path: "/login",
        component: () => import("@/views/admin/login.vue")
        // http://localhost:5173/login
    },
    {
        path:"/admin",
        component: () => import('@/views/admin/home.vue'),
        meta: {requireAuth: true},
        children: [
            {
                path:"adminstrator/add",
                component: () => import('@/views/admin/adminstrator/add.vue'),
            },
            {
                path:"adminstrator/list",
                component: () => import('@/views/admin/adminstrator/list.vue'),
            },
            {
                path:"category/list",
                component: () => import('@/views/admin/category/list.vue'),
            }
        ]
    }
]

const router = createRouter(
    {
    history: createWebHistory(),
    routes
    }
)

router.beforeEach((to,from,next) => {
    if(to.meta.requireAuth){
        console.log("Need Authorition");

        const adminstore = useAdminStore()
        if(adminstore.data.token === "") {
            console.log("Not Logged");
            router.push("login")
        }

        next()
    }else{
        console.log("Free Authorition");
        next()
    }
})

export default router