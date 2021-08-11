import {createRouter, createWebHistory} from 'vue-router'
import Home from "@/views/home/Home";

const Category = () => import("@/views/category/Category")
const Cart = () => import("@/views/cart/Cart")
const Profile = () => import("@/views/profile/Profile")
const routes = [
    {
        path: '',
        redirect: '/home',
    },

    {
        path: '/home',
        name: 'Home',
        component: Home
    },
    {
        path: '/category',
        name: 'Category',
        component: Category
    },
    {
        path: '/cart',
        name: 'Cart',
        component: Cart
    },
    {
        path: '/profile',
        name: 'Profile',
        component: Profile
    },
    // {
    //   path: '/about',
    //   name: 'About',
    //   // route level code-splitting
    //   // this generates a separate chunk (about.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
    // }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router
