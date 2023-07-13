import { createRouter, createWebHistory } from "vue-router";

const routes = [
  
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes: [
    {
      path: "", name:'Home', component: ()=>import('../views/Search.vue')
    },
    {
      path: "/Search", name:'Search', component: ()=>import('../views/Search.vue')
    },
    {
      path: "/result", name:'Result', component: ()=>import('../views/results.vue')
    }
  ]
});

export default router;
