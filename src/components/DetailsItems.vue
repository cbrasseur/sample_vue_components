<template>
  <div class="storetest">
    <div>
      <v-card
          max-width="375"
          class="mx-auto"
          style="margin:auto"
      >
        <v-img
            :src="item.img"
            height="300px"
            dark
        ></v-img>

        <v-list two-line>
          <v-list-item>
                Product Name
            <v-list-item-content>
              <v-list-item-title>{{item.name}}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list>
        <v-list two-line>
          <v-list-item>
            Color
            <v-list-item-content>
              <v-list-item-title>{{item.color}}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list>
        <v-list two-line>
          <v-list-item>
            Quantity
            <v-list-item-content>
              <v-list-item-title>{{item.quantity}}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list>
        <v-list two-line>
          <v-list-item>
            Price
            <v-list-item-content>
              <v-list-item-title>{{item.price}}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-card>
    </div>
  </div>
</template>

<script lang="ts">

import {mapState} from "vuex";

export default {
  name : "storeComponent",
  computed:{
    ...mapState(["itemList"])
  },
  data() {
    return {
      item: {}
    }
  },
  mounted() {
      this.item = this.itemList.find(x => {return x.id == this.$route.params.id})
      console.log(this.item)
  }
}

</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
