<template>
  <div id="app">
    <section class="hero is-primary is-bold is-fullheight">
      <div class="hero-head">
        <nav class="navbar">
          <div class="container">
            <div class="navbar-brand">
              <div class="navbar-item">
                Shopping List
              </div>
            </div>
          </div>
        </nav>
      </div>

      <div class="hero-body">
        <div class="container has-text-centered">
          <div class="row">
            <div class="columns">
              <div class="column is-half is-offset-one-quarter">
                <product-card></product-card>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="hero-foot">
        <div class="container">
          <div class="content has-text-centered">
            <strong>https://github.com/SamuelPinho</strong>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import ProductCard from './ProductCard';

export default {
  name: 'App',
  components: {
    ProductCard,
  },
};
</script>

<style>

</style>

