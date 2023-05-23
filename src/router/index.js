import { createRouter, createWebHistory } from "vue-router";

const routes = [
  
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes: [
    {
      path: "", name:'Home', component: ()=>import('../views/Home.vue')
    },
    {
      path: "/About", name:'About', component: ()=>import('../views/About.vue')
    }
  ]
});

export default router;
