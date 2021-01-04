<template>
  <div>
    <ul
      class="navbar-nav bg-gradient-secondary sidebar sidebar-dark col-md-3 col-lg-2 col-sm-2 navbar-collapse collapse d-sm-block overflow-auto"
      id="accordionSidebar">
      <div class="sidebar-heading mt-4">管理員</div>
      <li class="nav-item">
        <router-link class="nav-link collapsed" :to="{ name: 'ProductsList'}">
          <font-awesome-icon icon="box-open"/>
          <span>產品列表</span>
        </router-link>
      </li>
      <li class="nav-item">
        <router-link class="nav-link collapsed" :to="{ name: 'Orders'}">
          <font-awesome-icon icon="list"/>
          <span>訂單列表</span>
        </router-link>
      </li>
      <li class="nav-item">
        <router-link class="nav-link collapsed" :to="{ name: 'Coupons'}">
          <font-awesome-icon icon="ticket-alt" :transform="{ rotate: 42 }"/>
          <span>優惠券</span>
        </router-link>
      </li>
      <hr class="sidebar-divider">
    </ul>
  </div>
</template>

<style lang="scss" scoped>
.collapsing {
  &.navbar-collapse {
    position: absolute;
    left: -100%;
    transition: all 0.2s ease;
    display: block;
    opacity: 0.8;
    &.collapsing {
      height: auto !important;
      left: -100%;
      margin-left: 1px;
      transition: all 0.1s ease;
      opacity: 0.9;
    }
    &.show {
      margin-left: 100%;
      transition: all 0.1s ease;
      opacity: 1;
    }
  }
}
.nav-item a.active {
  background: rgb(125, 70, 0);
}
</style>