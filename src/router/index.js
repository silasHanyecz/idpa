import {createRouter, createWebHistory} from 'vue-router'
import Home from "../views/home.vue";
import Project from "../views/projects.vue";
import Tutorial from "../views/drone.vue";
import Info from "../views/info.vue";
import Contact from "../views/contact.vue";
import Offer from "@/views/offer.vue";
import Drone from "@/views/drone.vue";

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home
        },
        {
            path: '/offer',
            name: 'offer',
            component: Offer
        },
        {
            path: '/projects',
            name: 'projects',
            component: Project
        },
        {
            path: '/drone',
            name: 'drone',
            component: Drone
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
