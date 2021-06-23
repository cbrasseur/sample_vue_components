<template>
  <v-card
    min-width="344"
  >
    <a href="" class="product--link">
      <v-list-item three-line>
        <v-list-item-content>
          <!-- <div class="text-overline mb-4">
            <img :src="require(img)" :alt="name">
          </div> -->
          <div class="text-overline mb-4 name--stock">
            <p>{{name}}</p>
            <div v-if="quantity > 0">
              <p class="inStock">In stock</p>
            </div>
            <div v-if="quantity == 0">
              <p class="outOfStock">Out of stock</p>
            </div>
          </div>
          <v-list-item-title class="text-h5 mb-1">
            <p>Price {{ price }} $</p>
          </v-list-item-title>
          <v-list-item-subtitle>
            <p>Quantity {{ quantity }}</p>
          </v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>

      <v-card-actions class="button--container">
        <v-btn
          @click.prevent="addToCard"
          outlined
          rounded
          text
        >
          Add to cart
        </v-btn>
      </v-card-actions>
    </a>
  </v-card>

</template>

<script>
import { mapActions } from 'vuex'
export default {
  name: 'Product',
  props: {
    id: Number,
    name: String,
    color: String,
    quantity: String,
    price: String,
    img: String,
  },
  methods: {
    ...mapActions(["updateCart"]),
    addToCard() {
      let item = {
        id: this.id,
        name: this.name,
        color: this.color,
        quantity: this.quantity,
        price: this.price,
        img: this.img
      }
      this.updateCart(item)
    }
  }
}
</script>

<style>
  p{
    margin: 5px 0;
  }
  a{
    text-decoration: none;
  }
  .name--stock{
    display: flex !important;
    justify-content: center;
  }
  .name--stock > p{
    margin-right: 10px
  }
  .inStock{
    color: green;
  }
  .outOfStock{
    color: red;
  }
  .button--container{
    justify-content: flex-end;
  }
</style>
