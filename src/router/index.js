import { createRouter, createWebHistory } from "vue-router";
import dashboard from "@/pages/master/dashboard.vue";
import login from "@/pages/login.vue";
import serviceprovider from "@/pages/serviceprovider.vue";
import petowners from "@/pages/petowners.vue";
import settings from "@/pages/settings.vue";

const routes = [
    {
        name:'Dashboard',
        path: '/dashboard',
        component: dashboard 
    },
    {
        name:'LogIn',
        path: '/',
        component: login
    },
    {
        name:'Service-Provider',
        path: '/serviceprovider',
        component: serviceprovider 
    },
    {
        name:'Pet-Owners',
        path: '/petowners',
        component: petowners 
    },
    {
        name:'Settings',
        path: '/settings',
        component: settings 
    },
];

const router = Router();
export default router;
function Router() {
    const router = new createRouter({
        history: createWebHistory(),
        routes,
    });
    return router;
}