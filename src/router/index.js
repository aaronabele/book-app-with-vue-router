import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "recommendations",
    component: () =>
      import(/* webpackChunkName: "recommendations" */ "../views/RecView.vue"),
  },
  {
    path: "/bookList",
    name: "bookList",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/BookListView.vue"),
  },
  {
    path: "/books/:id",
    name: "details",
    component: () =>
      import(/* webpackChunkName: "book" */ "../views/DetailsView.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
