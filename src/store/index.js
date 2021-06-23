import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    shoppingCart: 0,
    itemList: [
      {
        id: 1,
        name: "Chaussette",
        color: "green",
        quantity: "10",
        price: "5",
        img: "/products/sockets.jpg"
      },
      {
        id: 2,
        name: "Chaussette",
        color: "grey",
        quantity: "10",
        price: "5",
        img: "/products/sockets.jpg"
      },
      {
        id: 3,
        name: "Gants",
        color: "blue",
        quantity: "0",
        price: "15",
        img: "/products/gloves.jpg"
      },
      {
        id: 4,
        name: "Gants",
        color: "pink",
        quantity: "5",
        price: "15",
        img: "/products/gloves.jpg"
      }
    ],
    cart: [],
  },
  getters: {
    cart: state => state.cart,
  },
  mutations: {
    INCREMENT_SHOPPING_CART(state, amount) {
      state.shoppingCart += amount;
    },
    ADD_TO_SHOPPING_CART(state, item) {
      state.cart.push(item);
    },
  },
  actions: {
    updateShoppingCart({ commit }, amount) {
      commit('INCREMENT_SHOPPING_CART', amount);
    },
    updateCart({ commit }, item) {
      commit('ADD_TO_SHOPPING_CART', item);
    },
  },
  modules: {},
});
