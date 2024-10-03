import { createRouter, createWebHistory } from "vue-router";
import dashboard from "@/assets/pages/master/dashboard.vue";
import serviceprovider from "@/assets/pages/serviceprovider.vue";
import petowners from "@/assets/pages/petowners.vue";

const routes = [
    {
        name:'Dashboard',
        path: '/',
        component: dashboard 
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