<template>
  <div>
    <section id="brand">
      <div
        class="container brand-info d-flex flex-wrap flex-md-nowrap p-3 px-md-5 pt-md-5 pb-md-3 justify-content-around align-items-center animated"
      >
        <div class="brand-content py-5 py-md-0">
          <h3>
            菓實日
          </h3>
          <p>
            製菓、真實、日常
            <br>希望我們的理念能 開花結菓
            <br>每日的工作生活能 誠實實在
            <br>各位朋友吃到我們的甜點都 日日健康。
          </p>
        </div>
        <img class src="@/assets/images/introduction_1@.jpg" alt="">
      </div>
    </section>
    <!-- 特色 -->
    <section id="features">
      <div
        class="container features-info d-flex flex-wrap flex-md-nowrap p-3 px-md-5 py-md-3 align-items-center animated"
      >
        <div class="features-imgs order-2 order-md-0">
          <img class="top-img" src="@/assets/images/features2.jpg" alt>
          <img class="under-img" src="@/assets/images/features1.jpg" alt>
        </div>
        <div class="features-content my-5 my-md-0 ml-md-3 ml-lg-5">
          <p>
            <font-awesome-icon icon="heart" class="heart-icon"/>我們仍深信台灣在地美好價值
          </p>
          <p>
            <font-awesome-icon icon="heart" class="heart-icon"/>期望透過食物，保存並詮釋台灣文化的美好
          </p>
          <p>
            <font-awesome-icon icon="heart" class="heart-icon"/>以傳承者的視角，讓人們被台灣的文化感動
          </p>
        </div>
      </div>
    </section>
    <section id="flagship1" class="bg-pink">
      <div class="container p-3 p-md-5 animated">
        <div class="row">
          <div class="col-md-8 flagship py-5 py-md-0">
            <p>
              紅龜慕斯蛋糕是基於傳統去做創新的
              <br>我們選擇紫米的手工甜酒釀、萬丹紅豆、沖繩產的本和香糖
              <br>紅龜的淋面使用自然的莓果果泥，與天然的紅麴色素
              <br>清新爽口又味道豐富
            </p>
            <router-link
              to="/product_detail/-MLBjkdntMiSlk2Drh3w"
              class="btn d-block btn-light-red text-light align-self-end"
            >
              More
              <font-awesome-icon icon="angle-right" class="angle-right mr-1"/>
            </router-link>
          </div>
          <div class="col-md-4 text-center image1-container"></div>
        </div>
      </div>
    </section>
    <section id="flagship2" class="bg-green">
      <div class="container p-3 p-md-5 animated">
        <div class="row">
          <div class="col-md-8 flagship py-5 py-md-0">
            <p>
              人之島命名是受到喜愛樂團-「青春大衛」的影響
              <br>使用翠玉烏龍來作為慕斯的基調
              <br>底部搭配生巧克力般的巧克力蛋糕
              <br>表面藉由少量的天然綠色色素還加入大量的奇異果汁
              <br>整體表現了從內到外的土壤與植栽
            </p>
            <router-link
              to="/product_detail/-MLBjqt4UaZytHFbiui5"
              class="btn d-block btn-light-green text-light align-self-end"
            >
              More
              <font-awesome-icon icon="angle-right" class="angle-right mr-1"/>
            </router-link>
          </div>
          <div class="col-md-4 text-center image2-container"></div>
        </div>
      </div>
    </section>
    <section id="flagship3" class="bg-yellow">
      <div class="container p-3 p-md-5 animated">
        <div class="row">
          <div class="col-md-8 flagship py-5 py-md-0">
            <p>
              法式甜點和臺灣味之間的衝突感
              <br>使用八角製作的慕斯，以及當作滷肉的蜜漬地瓜丁
              <br>兩者都象徵著草根性與傳統
              <br>和滷肉飯帶給人的情懷相似
              <br>滷肉飯的底部又是另外一場驚喜
              <br>等著你來挖掘
            </p>
            <router-link
              to="/product_detail/-MLBjidYBGwd7LNNR3tV"
              class="btn d-block btn-deep-yellow text-light align-self-end"
            >
              More
              <font-awesome-icon icon="angle-right" class="angle-right mr-1"/>
            </router-link>
          </div>
          <div class="col-md-4 text-center image3-container"></div>
        </div>
      </div>
    </section>
    <section id="newProducts">
      <div class="container p-3 p-md-5 animated">
        <h3 class="title">最新商品</h3>
        <div class="row">
          <div class="col-lg-4 col-md-6 col-12 mb-3" v-for="item in newProducts" :key="item.id">
            <div class="card product-card" @click="goProductDetail(item.id)">
              <div class="product-img" :style="{ 'backgroundImage':`url('${item.imageUrl}')` }">
                <div class="more">詳細商品...</div>
              </div>  
              <div class="card-body p-0 pt-4 pm-2 align-items-">
                <h5 class="card-title">{{item.title}}</h5>
                <p class="card-text card-content text-gray-700">{{item.description}}</p>
                <div class="card-price pt-3 d-flex justify-content-between align-items-end">
                  <span class="price text-danger">{{item.price | currency}} 元</span>
                  <span
                    class="orange-price"
                    v-if="item.origin_price"
                  >{{item.origin_price | currency}} 元</span>
                </div>
                <button
                  type="button"
                  class="btn btn-outline-secondary w-100 mt-3"
                  @click.stop="addtoCart(item.id)">
                  加入購物車
                </button>
              </div>
            </div>
          </div>
        </div>
        <div class="text-right">
          <router-link to="/products">
            <button type="button" class="btn btn-deep-yellow text-white btn-lg">
              逛更多甜點
              <font-awesome-icon icon="angle-right" class="angle-right mr-1"/>
            </button>
          </router-link>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import {mapGetters, mapActions} from 'vuex';

export default {
  data() {
    return {};
  },
  created() {
    this.getProducts();
  },
  computed: {
    ...mapGetters('productsModules',['products']),
    ...mapGetters('cartModules', ['cart']),
    newProducts() {
      const vm = this;
      const allNewProducts = vm.$store.state.productsModules.products.filter(item => {
        return item.category === "最新商品";
      });
      let allLen = allNewProducts.length;
      return allNewProducts.filter((item, index) => {
        return index <= allLen - 1 && index >= allLen - 3;
      });
    }
  },
  methods: {
    ...mapActions('productsModules',['getProducts']),
    addtoCart(id, qty = 1) {
      // 如果過濾結果大於 0 就執行更新購物車，反之則新增購物車內容
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
    },
    goProductDetail(productId) {
      this.$store.dispatch('productsModules/goProductDetail', productId);
    },
  },
  mounted() {
    $(window).scroll(function() {
      var scrollPos = $(window).scrollTop();
      var windowHeight = $(window).height();

      $(".animated").each(function() {
        var thisPos = $(this).offset().top;
        if (windowHeight + scrollPos >= thisPos) {
          $(this).addClass("fadeIn");
        }
      });
    });
  }
};
</script>