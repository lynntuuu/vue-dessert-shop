webpackJsonp([10],{d6Zb:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=a("woOf"),s=a.n(o),n=a("7t+N"),i=a.n(n),l={props:{config:Object},data:function(){return{coupons:{},tempCoupon:{title:"",is_enabled:0,percent:100,due_date:0,code:""},due_date:new Date,isNew:!1}},watch:{due_date:function(){var t=Math.floor(new Date(this.due_date)/1e3);this.tempCoupon.due_date=t}},methods:{openCouponModal:function(t,e){var a=this;if(i()("#couponModal").modal("show"),a.isNew=t,a.isNew)a.tempCoupon={};else{a.tempCoupon=s()({},e);var o=new Date(1e3*a.tempCoupon.due_date).toISOString().split("T");a.due_date=o[0]}},getCoupons:function(){var t=this,e=this;this.$store.commit("LOADING",!0,{root:!0}),this.$http.get("https://vue-course-api.hexschool.io/api/lynntuuu/admin/coupons",e.tempProduct).then(function(a){t.$store.commit("LOADING",!1,{root:!0}),e.coupons=a.data.coupons})},updateCoupon:function(){var t=this,e=this;if(e.isNew){this.$http.post("https://vue-course-api.hexschool.io/api/lynntuuu/admin/coupon",{data:e.tempCoupon}).then(function(e){i()("#couponModal").modal("hide"),t.getCoupons()})}else{var a="https://vue-course-api.hexschool.io/api/lynntuuu/admin/coupon/"+e.tempCoupon.id;e.due_date=new Date(1e3*e.tempCoupon.due_date),this.$http.put(a,{data:e.tempCoupon}).then(function(e){i()("#couponModal").modal("hide"),t.getCoupons()})}}},created:function(){this.getCoupons()}},d={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"mt-4"},[a("div",{staticClass:"d-flex justify-content-between my-4"},[a("h1",{staticClass:"h3 text-gray-800"},[t._v("優惠券")]),t._v(" "),a("div",{staticClass:"text-right"},[a("button",{staticClass:"btn btn-secondary text-light",on:{click:function(e){return t.openCouponModal(!0)}}},[t._v("建立新的產品")])])]),t._v(" "),a("table",{staticClass:"table mt-4 table-bordered table-hover"},[t._m(0),t._v(" "),a("tbody",t._l(t.coupons,function(e,o){return a("tr",{key:o,staticClass:"align-middle"},[a("td",{staticClass:"align-middle"},[t._v(t._s(e.title))]),t._v(" "),a("td",{staticClass:"text-left align-middle text-success",class:{"text-black-50":!e.is_enabled}},[t._v("\n          "+t._s(e.code)+"\n        ")]),t._v(" "),a("td",{staticClass:"text-left align-middle"},[t._v(t._s(e.percent)+"%")]),t._v(" "),a("td",{staticClass:"text-left align-middle"},[t._v(t._s(t._f("date")(e.due_date)))]),t._v(" "),a("td",{staticClass:"text-center align-middle"},[1===e.is_enabled?a("span",{staticClass:"text-success"},[t._v("啟用")]):a("span",{staticClass:"text-muted"},[t._v("未啟用")])]),t._v(" "),a("td",{staticClass:"text-center"},[a("button",{staticClass:"btn btn-outline-secondary btn-sm",on:{click:function(a){return t.openCouponModal(!1,e)}}},[t._v("\n            編輯\n          ")])])])}),0)]),t._v(" "),a("div",{staticClass:"modal fade",attrs:{id:"couponModal",tabindex:"-1",role:"dialog","aria-labelledby":"exampleModalLabel","aria-hidden":"true"}},[a("div",{staticClass:"modal-dialog",attrs:{role:"document"}},[a("div",{staticClass:"modal-content border-0"},[t._m(1),t._v(" "),a("div",{staticClass:"modal-body"},[a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"title"}},[t._v("標題")]),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.tempCoupon.title,expression:"tempCoupon.title"}],staticClass:"form-control",attrs:{type:"text",id:"title",placeholder:"請輸入標題"},domProps:{value:t.tempCoupon.title},on:{input:function(e){e.target.composing||t.$set(t.tempCoupon,"title",e.target.value)}}})]),t._v(" "),a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"coupon_code"}},[t._v("優惠碼")]),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.tempCoupon.code,expression:"tempCoupon.code"}],staticClass:"form-control",attrs:{type:"text",id:"coupon_code",placeholder:"請輸入優惠碼"},domProps:{value:t.tempCoupon.code},on:{input:function(e){e.target.composing||t.$set(t.tempCoupon,"code",e.target.value)}}})]),t._v(" "),a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"due_date"}},[t._v("到期日")]),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.due_date,expression:"due_date"}],staticClass:"form-control",attrs:{type:"date",id:"due_date"},domProps:{value:t.due_date},on:{input:function(e){e.target.composing||(t.due_date=e.target.value)}}})]),t._v(" "),a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"price"}},[t._v("折扣百分比")]),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.tempCoupon.percent,expression:"tempCoupon.percent"}],staticClass:"form-control",attrs:{type:"number",id:"price",placeholder:"請輸入折扣百分比"},domProps:{value:t.tempCoupon.percent},on:{input:function(e){e.target.composing||t.$set(t.tempCoupon,"percent",e.target.value)}}})]),t._v(" "),a("div",{staticClass:"form-group"},[a("div",{staticClass:"form-check"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.tempCoupon.is_enabled,expression:"tempCoupon.is_enabled"}],staticClass:"form-check-input",attrs:{type:"checkbox","true-value":1,"false-value":0,id:"is_enabled"},domProps:{checked:Array.isArray(t.tempCoupon.is_enabled)?t._i(t.tempCoupon.is_enabled,null)>-1:t._q(t.tempCoupon.is_enabled,1)},on:{change:function(e){var a=t.tempCoupon.is_enabled,o=e.target,s=o.checked?1:0;if(Array.isArray(a)){var n=t._i(a,null);o.checked?n<0&&t.$set(t.tempCoupon,"is_enabled",a.concat([null])):n>-1&&t.$set(t.tempCoupon,"is_enabled",a.slice(0,n).concat(a.slice(n+1)))}else t.$set(t.tempCoupon,"is_enabled",s)}}}),t._v(" "),a("label",{staticClass:"form-check-label",attrs:{for:"is_enabled"}},[t._v("\n                是否啟用\n              ")])])])]),t._v(" "),a("div",{staticClass:"modal-footer"},[a("button",{staticClass:"btn btn-outline-secondary",attrs:{type:"button","data-dismiss":"modal"}},[t._v("\n            取消\n          ")]),t._v(" "),a("button",{staticClass:"btn btn-secondary text-light",attrs:{type:"button"},on:{click:t.updateCoupon}},[t._v("\n            更新優惠券\n          ")])])])])])])},staticRenderFns:[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("thead",[a("tr",[a("th",[t._v("名稱")]),t._v(" "),a("th",{staticClass:"text-left",attrs:{width:"150"}},[t._v("優惠代碼")]),t._v(" "),a("th",{staticClass:"text-left",attrs:{width:"150"}},[t._v("折扣百分比")]),t._v(" "),a("th",{staticClass:"text-left",attrs:{width:"150"}},[t._v("到期日")]),t._v(" "),a("th",{staticClass:"text-center",attrs:{width:"150"}},[t._v("是否啟用")]),t._v(" "),a("th",{staticClass:"text-center",attrs:{width:"130"}},[t._v("編輯")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"modal-header bg-secondary text-white"},[e("h5",{staticClass:"modal-title",attrs:{id:"exampleModalLabel"}},[this._v("優惠券")]),this._v(" "),e("button",{staticClass:"close",attrs:{type:"button","data-dismiss":"modal","aria-label":"Close"}},[e("span",{attrs:{"aria-hidden":"true"}},[this._v("×")])])])}]},c=a("VU/8")(l,d,!1,null,null,null);e.default=c.exports}});
//# sourceMappingURL=10.61baf332bd093ab117eb.js.map