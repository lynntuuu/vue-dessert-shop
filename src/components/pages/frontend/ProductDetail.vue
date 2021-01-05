<template>
  <div id="detail" v-cloak>
    <loading :active.sync="isLoading">
      <template slot="default">
        <img src="@/assets/images/loading.png">
      </template>
    </loading>
    <div class="container p-3 p-md-4">
      <nav aria-label="breadcrumb">
        <ol class="breadcrumb bg-white">
          <li class="breadcrumb-item">
            <router-link to="/index" class="text-gray-600">首頁</router-link>
          </li>
          <li class="breadcrumb-item">
            <router-link to="/products" class="text-gray-600">購物商場</router-link>
          </li>
          <li class="breadcrumb-item text-secondary active" aria-current="page">{{product.title}}</li>
        </ol>
      </nav>
      <div class="row detail mb-5">
        <div class="col-md-6">
          <div
            class="detail-img mb-4 mb-md-0"
            :style="{ 'backgroundImage': `url('${product.imageUrl}')`}"
          ></div>
        </div>
        <div class="col-md-6">
          <h2>{{product.title}}</h2>
          <span class="orange-price d-block" v-if="product.origin_price">{{product.origin_price | currency}} 元</span>
          <span class="price text-danger d-block mb-4">{{product.price | currency}} 元</span>

          <p class="text-gray-600 py-4 mh-100">{{product.description}}</p>
          <form class="border-bottom border-gray-600 py-4 mb-4">
            <div class="input-group align-items-end mb-4">
              <button
                type="button"
                class="btn btn-sm btn-outline-primary mr-2 rounded"
                @click="decreaseQty()"
                :disabled="qty === 1 ? true : false"
              >－</button>
              <input
                type="number"
                disabled
                class="form-control form-control-sm border-primary rounded text-center"
                v-model="qty"
              >
              <button
                type="button"
                class="btn btn-sm btn-outline-primary ml-2 rounded"
                @click="qty++"
              >＋</button>
              <strong class="flex-grow-1 text-right">小計： {{(product.price * qty) | currency}}元</strong>
            </div>
            <button
              type="button"
              class="btn btn-secondary text-light w-100"
              @click="addtoCart(product.id, qty)"
              :disabled="addtoCartLoading === product.id ? true : false"
            >
              加入購物車
              <font-awesome-icon icon="shopping-cart" class="shopping-cart" transform="grow-3"/>
              <font-awesome-icon icon="spinner" spin v-if="addtoCartLoading === product.id"/>
            </button>
          </form>
          <table class="py-4 detail-content">
            <tbody>
              <tr>
                <td width="80" height="35">
                  <strong>內容物</strong>
                </td>
                <td>{{product.content}}</td>
              </tr>
              <tr>
                <td width="80" height="35">
                  <strong>賞味期限</strong>
                </td>
                <td>餅乾可存放30天，蛋糕類商品冷藏2-3天，冷凍7天</td>
              </tr>
              <tr>
                <td width="80" height="35" valign="top">
                  <strong>保存方法</strong>
                </td>
                <td>
                  ＊餅乾請放置乾燥陰涼處(室溫25度c)，避免放置於高溫潮濕及日光照射處。
                  <br>＊蛋糕類商品請存放於冷藏或冷凍。
                  <br>＊開封後請儘早食用完畢，以保持新鮮美味。
                </td>
              </tr>
              <tr>
                <td width="80" height="35">
                  <strong>運送</strong>
                </td>
                <td>本產品以低溫冷藏運送</td>
              </tr>
              <tr>
                <td colspan="2" height="35">
                  <strong>購買一件（含以上）商品即可運送</strong>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {mapGetters, mapActions} from 'vuex';

export default {
  data() {
    return {
      qty: 1,
      isLoading: false,
      addtoCartLoading: '',
    };
  },
  created() {
    this.getProduct();
  },
  computed: {
    ...mapGetters('productsModules', ['product']),
    ...mapGetters('cartModules', ['cart']),
  },
  methods: {
    getProduct() {
      const id = this.$route.params.id;
      this.$store.dispatch('productsModules/getProduct', id);
    },
    decreaseQty() {
      if (this.qty === 1) {
        return;
      } else {
        this.qty--;
      }
    },
    addtoCart(id, qty = 1) {
      const target = this.cart.carts.filter((item) => item.product_id === id);
      if (target.length > 0) {
        const originCartId = target[0].id;
        const originQty = target[0].qty;
        const originProductId = target[0].product_id;
        const newQty = Number(qty) + Number(originQty);
        this.$store.dispatch('cartModules/changeQty', { originCartId, originProductId, newQty });
      } else {
        this.$store.dispatch('cartModules/addtoCart', {id, qty})
      }
    }
  }
};
</script>