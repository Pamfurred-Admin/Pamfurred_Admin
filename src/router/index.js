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
import serviceproviderregistrations from "@/pages/serviceproviderregistrations.vue";
import { supabase } from "@/supabase/supabase";

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
    name: "UpdateServiceProvider/:userId",
    path: "/updateserviceprovider",
    component: updateserviceprovider,
  },
  {
    name: "ServiceProviderRegistrations",
    path: "/serviceproviderregistrations",
    component: serviceproviderregistrations,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

// Global route guard
router.beforeEach(async (to, from, next) => {
  // Skip the check for the login route
  if (to.name === "LogIn") {
    return next();
  }

  // Check if user is logged in using supabase.auth.getSession()
  const {
    data: { session },
  } = await supabase.auth.getSession();

  if (session) {
    next(); // Allow access if logged in
  } else {
    next("/"); // Redirect to login if not logged in
  }
});

export default router;
