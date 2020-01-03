import Vue from 'vue';
import Router from 'vue-router';
import ProductList from '@/components/ProductCard';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: __dirname,
  routes: [
    {
      path: '/',
      name: 'ProductList',
      component: ProductList,
    },
  ],
});
