webpackJsonp([0],{LV82:function(t,a){},PYFA:function(t,a,s){t.exports=s.p+"static/img/loading.4d26c3e.png"},UTfT:function(t,a,s){t.exports=s.p+"static/img/logo_white_font.a68ebbf.png"},VO8C:function(t,a,s){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var e=s("Dd8w"),n=s.n(e),i=s("NYxO"),o={data:function(){return{}},computed:n()({},Object(i.c)("cartModules",["cart","addAnimated"]),Object(i.c)(["status"])),methods:n()({},Object(i.b)("cartModules",["getCart"]),{removeCartItem:function(t){this.$store.dispatch("cartModules/removeCartItem",t)}}),created:function(){this.getCart(),this.$store.dispatch("check")},mounted:function(){$(window).scroll(function(){var t=$(window).height();$(".nav").each(function(){var a=$(this).offset().top;t/2<a?$(this).addClass("nav-light"):$(this).removeClass("nav-light")})}),$(".dropdown-menu").click(function(t){return t.preventDefault(),t.stopPropagation(),!1})}},r={render:function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[e("nav",{staticClass:"navbar navbar-expand-md p-md-0 fixed-top nav"},[e("div",{staticClass:"container"},[e("button",{staticClass:"navbar-toggler",staticStyle:{outline:"none"},attrs:{type:"button","data-toggle":"collapse","data-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"}},[e("font-awesome-icon",{attrs:{icon:"bars"}})],1),t._v(" "),e("h1",{staticClass:"text-hide mb-0"},[e("router-link",{staticClass:"navbar-brand mx-0 py-0 py-md-1",attrs:{to:"/index"}},[e("img",{staticStyle:{height:"55px"},attrs:{src:s("uEd0")}}),t._v(" "),e("img",{staticClass:"d-none d-md-inline-block",staticStyle:{height:"32px"},attrs:{src:s("3WUk")}})]),t._v("菓實日\n      ")],1),t._v(" "),e("div",{staticClass:"collapse navbar-collapse justify-content-end order-2",attrs:{id:"navbarSupportedContent"}},[e("ul",{staticClass:"navbar-nav"},[e("li",{staticClass:"nav-item"},[e("router-link",{staticClass:"nav-link px-md-3",attrs:{to:"/index"}},[t._v("首頁")])],1),t._v(" "),e("li",{staticClass:"nav-item"},[e("router-link",{staticClass:"nav-link px-md-3",attrs:{to:"/products"}},[t._v("購物商場")])],1),t._v(" "),t.status?t._e():e("li",{staticClass:"nav-item"},[e("router-link",{staticClass:"nav-link px-md-3",attrs:{to:"/login"}},[t._v("後台登入")])],1),t._v(" "),t.status?e("li",{staticClass:"nav-item"},[e("router-link",{staticClass:"nav-link px-md-3",attrs:{to:"/admin/products_list"}},[t._v("進入後台")])],1):t._e()])]),t._v(" "),e("div",{staticClass:"nav-item dropdown cart-icon order-md-2"},[e("a",{staticClass:"nav-link dropdown-toggle pulse-animated",class:{"bounce-animated":t.addAnimated},attrs:{href:"#",id:"navbarDropdown",role:"button","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false"}},[e("font-awesome-icon",{staticClass:"shopping-cart text-secondary",attrs:{icon:"shopping-cart",transform:"grow-3"}}),t._v(" "),t.cart.total?e("span",{staticClass:"badge badge-light-red rounded-circle text-light"},[t._v(t._s(t.cart.carts.length))]):t._e()],1),t._v(" "),e("div",{staticClass:"dropdown-menu dropdown-menu-right px-2",attrs:{"aria-labelledby":"navbarDropdown"}},[t.cart.total?e("div",[e("div",{staticClass:"overflow-auto",staticStyle:{"max-height":"300px"}},[e("table",{staticClass:"table table-borderless"},[t._m(0),t._v(" "),e("tbody",{},t._l(t.cart.carts,function(a){return e("tr",{key:a.id,staticClass:"border-top"},[e("th",{staticClass:"align-middle cart-product"},[t._v(t._s(a.product.title))]),t._v(" "),e("td",{staticClass:"text-center align-middle"},[t._v(t._s(a.qty))]),t._v(" "),e("td",{staticClass:"text-right align-middle text-nowrap"},[t._v(t._s(t._f("currency")(a.total)))]),t._v(" "),e("td",[e("button",{staticClass:"btn btn-sm btn-outline-light-red",on:{click:function(s){return t.removeCartItem(a.id)}}},[e("font-awesome-icon",{attrs:{icon:"trash-alt"}})],1)])])}),0)])]),t._v(" "),e("router-link",{staticClass:"btn btn-secondary w-100 text-white mt-2",attrs:{to:"/cart"}},[t._v("\n              查看我的購物車\n            ")])],1):e("div",{staticClass:"mt-3 text-center"},[e("p",[t._v("購物車是空的！")]),t._v(" "),e("router-link",{staticClass:"btn btn-secondary w-100 text-light",attrs:{to:"/products"}},[t._v("前往購物商場")])],1)])])])]),t._v(" "),e("div",{staticClass:"carousel slide carousel-fade",attrs:{id:"carouselIndicators","data-ride":"carousel","data-touch":"true"}},[e("div",{staticClass:"carousel-inner vw-100"},[e("div",{staticClass:"carousel-item active mw-100 vh-100 d-flex"},[e("div",{staticClass:"carousel-content container"},[e("p",{staticClass:"mb-0 text-light px-3"},[t._v("製菓、真實、日常")]),t._v(" "),e("h2",{staticClass:"mt-2"},[t._v("\n            菓實日\n          ")]),t._v(" "),e("font-awesome-icon",{staticClass:"angle-double-down",attrs:{icon:"angle-double-down"}})],1)]),t._v(" "),e("div",{staticClass:"carousel-item mw-100 vh-100 d-flex"}),t._v(" "),e("div",{staticClass:"carousel-item mw-100 vh-100 d-flex"}),t._v(" "),e("div",{staticClass:"carousel-item mw-100 vh-100 d-flex"})])])])},staticRenderFns:[function(){var t=this.$createElement,a=this._self._c||t;return a("thead",[a("th",[this._v("名稱")]),this._v(" "),a("th",{staticClass:"text-center text-nowrap"},[this._v("數量")]),this._v(" "),a("th",{staticClass:"text-right",attrs:{width:"80"}},[this._v("金額")]),this._v(" "),a("th",{staticClass:"text-center"},[this._v("刪除")])])}]};var c=s("VU/8")(o,r,!1,function(t){s("jfs2")},null,null).exports,l=s("jeBE"),d=s("elsE"),v={methods:{scrollToTop:function(){$("html,body").animate({scrollTop:0},1e3)}},mounted:function(){$(window).scroll(function(){$(window).scrollTop()>550?$(".animated-top").addClass("fadeIn"):$(".animated-top").removeClass("fadeIn")})}},u={render:function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"to-top bg-light rounded-circle animated-top"},[s("a",{staticClass:"text-secondary",on:{click:function(a){return a.preventDefault(),t.scrollToTop(a)}}},[s("font-awesome-icon",{attrs:{icon:"arrow-circle-up"}})],1)])},staticRenderFns:[]};var p=s("VU/8")(v,u,!1,function(t){s("mX92")},null,null).exports,m={data:function(){return{}},components:{Nav:c,Footer:l.default,Alert:d.a,GoTop:p},computed:n()({},Object(i.c)(["isLoading"]))},h={render:function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[e("loading",{attrs:{active:t.isLoading},on:{"update:active":function(a){t.isLoading=a}}},[e("template",{slot:"default"},[e("img",{attrs:{src:s("PYFA")}})])],2),t._v(" "),e("Nav"),t._v(" "),e("Alert"),t._v(" "),e("router-view"),t._v(" "),e("GoTop"),t._v(" "),e("Footer")],1)},staticRenderFns:[]},f=s("VU/8")(m,h,!1,null,null,null);a.default=f.exports},adpi:function(t,a){},jeBE:function(t,a,s){"use strict";var e=s("LV82"),n=s.n(e),i=s("n+ba");var o=function(t){s("adpi")},r=s("VU/8")(n.a,i.a,!1,o,null,null);a.default=r.exports},jfs2:function(t,a){},mX92:function(t,a){},"n+ba":function(t,a,s){"use strict";var e={render:function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"bg-secondary"},[a("div",{staticClass:"container p-3"},[a("div",{staticClass:"row text-center text-light"},[this._m(0),this._v(" "),this._m(1),this._v(" "),a("div",{staticClass:"col py-3 d-flex justify-content-center align-items-center"},[a("a",{staticClass:"link-icon",attrs:{href:"https://www.facebook.com/pojowowo",target:"_blank"}},[a("font-awesome-icon",{attrs:{icon:["fab","facebook-square"],size:"2x"}})],1),this._v(" "),a("a",{staticClass:"link-icon",attrs:{href:"https://www.instagram.com/kajitsu_patisserie/?hl=zh-tw",target:"_blank"}},[a("font-awesome-icon",{attrs:{icon:["fab","instagram-square"],size:"2x"}})],1)])])])])},staticRenderFns:[function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"col py-3"},[a("img",{staticStyle:{"max-height":"45px"},attrs:{src:s("UTfT")}})])},function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"col-md-6 py-3 d-flex flex-column justify-content-end",staticStyle:{"font-size":".5rem"}},[a("span",[this._v("僅個人練習使用，不做任何商業用途")]),this._v(" "),a("span",[this._v("Copyright © 2020 - Lynn")])])}]};a.a=e}});
//# sourceMappingURL=0.044e8eb0de7252470ede.js.map