import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    component: () => import("@/components/CommonLayout.vue"),
    children:[
      {
        path:'',
        component:()=>import("@/views/Home.vue")
      },
      {
        path:'/detail/:id',
        component:() => import("@/views/Detail.vue")
      }
    ]
  },
];

const router = new VueRouter({
  routes,
});

export default router;
