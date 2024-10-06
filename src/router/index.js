import {createRouter, createWebHistory} from 'vue-router'
import Home from "../views/home.vue";
import Project from "../views/project.vue";
import Tutorial from "../views/tutorial.vue";
import Info from "../views/info.vue";
import Contact from "../views/contact.vue";

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home
        },
        {
            path: '/project',
            name: 'project',
            component: Project
        },
        {
            path: '/tutorial',
            name: 'tutorial',
            component: Tutorial
        },
        {
            path: '/info',
            name: 'info',
            component: Info

        },
        {
            path: '/contact',
            name: 'contact',
            component: Contact
        }
    ]
})
export default router
