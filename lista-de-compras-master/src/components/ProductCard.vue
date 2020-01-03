<template>
  <div class="card">
    <header class="card-header">
      <p class="card-header-title has-text-left">
        {{ today }}
      </p>
      <div class="has-text-right">
        <p class="card-header-title">products: {{ products.length }}</p>
      </div>
    </header>
    <div class="card-content">
      <div class="content">
        <new-product @newProduct="addProduct"></new-product>
      </div>
      <div class="content">
        <product-list :products="products" @check="checkProduct" @remove="removeProduct"></product-list>
      </div>
    </div>
  </div>
</template>

<script>
import NewProduct from './NewProduct';
import ProductList from './ProductList';

export default {
  name: 'product-card',
  components: {
    NewProduct,
    ProductList,
  },
  mounted() {
    this.$store.dispatch('getAllProducts');
  },
  computed: {
    today() {
      this.$store.dispatch('getTime');
      return this.$store.state.today;
    },
    products() {
      return this.$store.state.products;
    },
  },
  methods: {
    addProduct(text) {
      this.$store.dispatch('addProduct', text);
    },
    checkProduct(product) {
      this.$store.dispatch('checkProduct', product);
    },
    removeProduct(id) {
      this.$store.dispatch('removeProduct', id);
    },
  },
};
</script>

<style>
.card {
  border-radius: 10px;
}

.card-header-title {
  color: #636368;
}
</style>
