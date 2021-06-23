

<script>
import Product from "@/components/Products";
import { mapState, mapGetters } from "vuex"
export default {
  name: "Cart",
  components: {Product},
  computed: {
    ...mapState({
      shoppingCart: "shoppingCart",
      itemList: "itemList",
    }),
    ...mapGetters({
      cart: 'cart',
    }),
  }
}
</script>

<template>
  <div>
    <Product
        v-for="item in cart"
        :name="item.name"
        :image="item.image"
        :price="item.price"
        :quantity="item.quantity"
        :inStock="item.inStock"
        :key="item.name"
    />
  </div>

</template>

<style scoped>

</style>
