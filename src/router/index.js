import { createRouter, createWebHistory } from "vue-router";
import PassengerList from "../views/PassengerList.vue"
import PassengerDetail from "../views/PassengerDetail.vue"
import NotFound from "../views/NotFound.vue"

const routes = [
  {
    path: "/",
    name: "PassengerList",
    component: PassengerList,
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
  {
    path: '/passenger/:id',
    name: 'PassengerDetail',
    props: true,
    component: PassengerDetail,
  },
  {
    path: '/:catchAll(.*)*',
    name: 'NotFound',
    component: NotFound,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
