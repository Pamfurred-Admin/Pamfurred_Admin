import { createRouter, createWebHistory } from "vue-router";
import dashboard from "@/pages/master/dashboard.vue";
import login from "@/pages/login.vue";
import serviceprovider from "@/pages/serviceprovider.vue";
import petowners from "@/pages/petowners.vue";
import settings from "@/pages/settings.vue";
import addpetowners from "@/pages/addpetowners.vue";
import addserviceprovider from "@/pages/addserviceprovider.vue";
import updatepetowners from "@/pages/updatepetowners.vue";
import updateserviceprovider from "@/pages/updateserviceprovider.vue";

const routes = [
  {
    name: "Dashboard",
    path: "/dashboard",
    component: dashboard,
  },
  {
    name: "LogIn",
    path: "/",
    component: login,
  },
  {
    name: "Service-Provider",
    path: "/serviceprovider",
    component: serviceprovider,
  },
  {
    name: "Pet-Owners",
    path: "/petowners",
    component: petowners,
  },
  {
    name: "Settings",
    path: "/settings",
    component: settings,
  },
  {
    name: "AddPetOwners",
    path: "/addpetowners",
    component: addpetowners,
  },
  {
    name: "AddServiceProvider",
    path: "/addserviceprovider",
    component: addserviceprovider,
  },
  {
    name: "UpdatePetOwners",
    path: "/updatepetowners",
    component: updatepetowners,
  },
  {
    name: "UpdateServiceProvider",
    path: "/updateserviceprovider",
    component: updateserviceprovider,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
