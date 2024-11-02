import { createApp } from "vue";
import App from "./App.vue";
import "./assets/css/app.css";
import router from "./router";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import {
  faHouse,
  faHandHoldingHeart,
  faUser,
  faCog,
  faSignOutAlt,
  faMagnifyingGlass,
  faKey,
  faCalendarDay,
  faPencil,
  faTrash,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";

library.add(
  faHouse,
  faHandHoldingHeart,
  faUser,
  faCog,
  faSignOutAlt,
  faKey,
  faMagnifyingGlass,
  faCalendarDay,
  faPencil,
  faTrash,
  faEnvelope
);

const app = createApp(App).component("font-awesome-icon", FontAwesomeIcon);
app.use(router);
app.mount("#app");
