<template>
  <div class="home">
    <div v-for="product in products" :key="product.id">
      <Products :id="product.id" :name="product.name" :color="product.color" :quantity="product.quantity" :price="product.price" :img="product.img" />
    </div>
  </div>
</template>

<script>
import productsData from '@/data/products'
import Products from '@/components/Products'

export default {
  name: 'Home',
  components: {
    Products
  },
  data: function() {
    return {
        products: productsData
      };
    }
  }
</script>

<style>
  .home{
    display: flex;
    flex-wrap: wrap;
    max-width: 70%;
    margin: auto;
    justify-content: space-between;
  }
  .product--list{
    padding: 2rem;
  }
</style>
