<template>
  <div>
    <loading :active.sync="isLoading">
    </loading>
    <Navbar/>
    <Alert></Alert>
    <div class="container-fluid" style="margin-top:70px;">
      <div class="row">
        <Sidebar></Sidebar>
        <main role="main" class="col-md-9 ml-sm-auto col-lg-10 col-sm-10 px-md-4">
          <router-view></router-view>
        </main>
      </div>
    </div>
  </div>
</template>

<script>
import Sidebar from '@/components/admin/Sidebar';
import Navbar from '@/components/admin/Navbar';
import Alert from '@/components/AlertMessage';

import {mapGetters} from 'vuex';

export default {
  components: {
    Sidebar,
    Navbar,
    Alert
  },
  created () {
    const myCookie = document.cookie.replace(/(?:(?:^|.*;\s*)hexToken\s*=\s*([^;]*).*$)|^.*$/, '$1');
    this.$http.defaults.headers.common.Authorization = `${myCookie}`;
  },
  computed: {
    ...mapGetters(['isLoading'])
  }
};
</script>
