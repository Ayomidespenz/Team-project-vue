import { createRouter, createWebHistory } from "vue-router"

// import Home from "../views/Home.vue"
// import About from "../views/About.vue"
import LoginView from "../views/LoginView.vue"
import LandingView from "../views/LandingView.vue"
import BlogView from "../views/BlogView.vue"
import ContactView from "../views/ContactView.vue"


const routes = [
  {
   
    path: "/",
    name: "Landing",
    component: LandingView

  },

  {
    path: "/login",
    name: "Login",
    component: LoginView
  },
    {
    path: "/blog",
    name: "blog",
    component: BlogView
  },
      {
    path: "/contact",
    name: "contact",
    component: ContactView
  },

  
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router