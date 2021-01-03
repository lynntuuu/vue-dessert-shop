<template>
  <div>
    <loading :active.sync="isLoading">
    </loading>
    <div class="bg-login-image vh-100">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-xl-6 col-lg-6 col-md-9">
            <div class="card o-hidden border-0 shadow-lg my-5">
              <div class="card-body p-0">
                <div class="row">
                  <div class="col-lg">
                    <div class="p-5">
                      <div class="text-center">
                        <h1 class="h4 text-gray-900 mb-4">後台登入</h1>
                      </div>
                      <form class="user" @submit.prevent="signin">
                        <div class="form-group">
                          <input
                            type="email"
                            class="form-control form-control-user"
                            id="exampleInputEmail"
                            aria-describedby="emailHelp"
                            placeholder="請輸入信箱帳號"
                            v-model="user.username"
                          >
                        </div>
                        <div class="form-group">
                          <input
                            type="password"
                            class="form-control form-control-user"
                            id="exampleInputPassword"
                            placeholder="請輸入密碼"
                            v-model="user.password"
                          >
                        </div>
                        <div class="form-group">
                          <div class="custom-control custom-checkbox small">
                            <input type="checkbox" class="custom-control-input" id="customCheck">
                            <label class="custom-control-label" for="customCheck">Remember Me</label>
                          </div>
                        </div>
                        <button class="btn btn-secondary btn-user btn-block text-light" type="submit">Login</button>
                        <hr>
                        <a href="index.html" class="btn btn-google btn-user btn-block">
                          <font-awesome-icon :icon="['fab', 'google']"/>
                          Login with Google
                        </a>
                        <a href="index.html" class="btn btn-facebook btn-user btn-block">
                          <font-awesome-icon :icon="['fab', 'facebook']"/>
                          Login with Facebook
                        </a>
                      </form>
                      <hr>
                      <div class="text-center">
                        <a class="small" href="forgot-password.html">Forgot Password?</a>
                      </div>
                      <div class="text-center">
                        <a class="small" href="register.html">Create an Account!</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {mapGetters} from 'vuex';

export default {
  data () {
    return {
      // 定義資料結構
      user:{
        username: '',
        password: ''
      }
    }
  },
  methods:{
    // 登入的事件
    signin(){
      const api = `${process.env.APIPATH}/admin/signin`;
      const vm = this;
      this.$store.commit('LOADING', true, { root: true });
      this.$http.post(api, vm.user).then((response) => {
        console.log(response.data.message);
        if (response.data.success) {
          this.$store.commit('LOADING', false, { root: true });
          const token = response.data.token;
          const expired = response.data.expired;
          document.cookie = `hexToken=${token};expires=${new Date(expired)};`;
          vm.$router.push('/admin/products')
        }else {
          this.$store.commit('LOADING', false, { root: true });
          alert('資料輸入錯誤！');
        }
      });
    }
  },
  computed: {
    ...mapGetters(['isLoading'])
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
</style>
