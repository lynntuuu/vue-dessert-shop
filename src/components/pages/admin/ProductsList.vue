<template>
  <div>
    <div class="d-flex justify-content-between my-4" >
      <h1 class="h3 text-gray-800">產品列表</h1>
      <div class="text-right">
        <button class="btn btn-secondary text-light" @click="openModal(true)">建立新的產品</button>
      </div>
    </div>

    <div class="card shadow mb-4">
      <div class="card-header py-3">
      </div>
      <div class="card-body">
        <div class="table-responsive">
          <table class="table table-bordered" id="dataTable" width="100%" cellspacing="0">
            <thead>
              <tr>
                <th width="120">產品分類</th>
                <th>產品名稱</th>
                <th width="100" class="text-right">原價</th>
                <th width="100" class="text-right">售價</th>
                <th width="100" class="text-center">是否啟用</th>
                <th width="130" class="text-center">編輯</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(item,key) in products" :key="item.id" class="align-middle">
                <td class="text-center align-middle">{{item.category}}</td>
                <td class="align-middle">{{item.title}}</td>
                <td class="text-right align-middle">
                  {{item.origin_price | currency}}
                </td>
                <td class="text-right align-middle">
                  {{item.price | currency}}
                </td>
                <td class="text-center align-middle">
                  <span class="text-success" v-if="item.is_enabled">啟用</span>
                  <span v-else>未啟用</span>
                </td>
                <td class="text-center"> 
                    <button class="btn btn-outline-secondary btn-sm" 
                    @click="openModal(false, false, item)">編輯</button>
                    <button class="btn btn-outline-danger btn-sm" 
                    @click="openModal(false, true, item)">刪除</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>

    <!-- pagination -->
    <Pagination :pages="pagination" @emit="getProducts"></Pagination>

    <!-- Modal -->
    <div class="modal fade" id="productModal" tabindex="-1" role="dialog"
    aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog modal-lg" role="document">
        <div class="modal-content border-0">
          <div class="modal-header bg-secondary text-white">
            <h5 class="modal-title" id="exampleModalLabel">
              <span>新增產品</span>
            </h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <div class="row">
              <div class="col-sm-4">
                <div class="form-group">
                  <label for="image">輸入圖片網址</label>
                  <input type="text" class="form-control" id="image"
                    v-model="tempProduct.imageUrl"
                    placeholder="請輸入圖片連結">
                </div>
                <div class="form-group">
                  <label for="customFile">或 上傳圖片
                    <i class="fas fa-spinner fa-spin" v-if="status.fileUploading"></i>
                  </label>
                  <input type="file" id="customFile" class="form-control"
                    ref="files" @change="uploadFile">
                </div>
                <img class="img-fluid" :src="tempProduct.imageUrl" alt="">  
              </div>
              <div class="col-sm-8">
                <div class="form-group">
                  <label for="title">標題</label>
                  <input type="text" class="form-control" id="title"
                    v-model="tempProduct.title"
                    placeholder="請輸入標題">
                </div>

                <div class="form-row">
                  <div class="form-group col-md-6">
                    <label for="category">分類</label>
                    <input type="text" class="form-control" id="category"
                      v-model="tempProduct.category"
                      placeholder="請輸入分類">
                  </div>
                  <div class="form-group col-md-6">
                    <label for="price">單位</label>
                    <input type="unit" class="form-control" id="unit"
                      v-model="tempProduct.unit"
                      placeholder="請輸入單位">
                  </div>
                </div>

                <div class="form-row">
                  <div class="form-group col-md-6">
                  <label for="origin_price">原價</label>
                    <input type="number" class="form-control" id="origin_price"
                      v-model="tempProduct.origin_price"
                      placeholder="請輸入原價">
                  </div>
                  <div class="form-group col-md-6">
                    <label for="price">售價</label>
                    <input type="number" class="form-control" id="price"
                      v-model="tempProduct.price"
                      placeholder="請輸入售價">
                  </div>
                </div>
                <hr>

                <div class="form-group">
                  <label for="description">產品描述</label>
                  <textarea type="text" class="form-control" id="description"
                    v-model="tempProduct.description"
                    placeholder="請輸入產品描述"></textarea>
                </div>
                <div class="form-group">
                  <label for="content">說明內容</label>
                  <textarea type="text" class="form-control" id="content"
                    v-model="tempProduct.content"
                    placeholder="請輸入產品說明內容"></textarea>
                </div>
                <div class="form-group">
                  <div class="form-check">
                    <input class="form-check-input" type="checkbox"
                      v-model="tempProduct.is_enabled"
                      :true-value="1" 
                      :false-value="0"
                      id="is_enabled">
                    <label class="form-check-label" for="is_enabled">
                      是否啟用
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-outline-secondary" data-dismiss="modal">取消</button>
          <button type="button" class="btn btn-secondary text-light" @click="updateProduct">確認</button>
        </div>
      </div>
    </div>
  </div>

  <!-- delModal -->
    <div class="modal fade" id="delProductModal" tabindex="-1" role="dialog" 
    aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog" role="document">
        <div class="modal-content border-0">
          <div class="modal-header bg-danger text-white">
            <h5 class="modal-title" id="exampleModalLabel">
              <span>刪除產品</span>
            </h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            是否刪除 
            <strong class="text-danger">{{tempProduct.title}}</strong> 商品(刪除後將無法恢復)。
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-outline-secondary" data-dismiss="modal">取消</button>
            <button type="button" class="btn btn-danger" @click="removeProduct()">
            確認刪除
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import $ from 'jquery';
import Pagination from '@/components/Pagination';

export default{
  data() {
    return {
      products: [],
      tempProduct: {}, // 對應在Modal裡面要送出的欄位內容
      // isNew: true, // 判斷是「新增」還是「修改」產品
      delProduct: true, // 判斷是是否「刪除」產品
      isLoading: false, // 預設會是停下來的狀況
      status:{
        fileUploading: false,
      },
      pagination:{},
    };
  },
  // 新增 pagination 元件
  components: {
    Pagination
  },
  methods:{
    getProducts(page = 1){
      const api = `${process.env.APIPATH}/api/${process.env.CUSTOMPATH}/admin/products?page=${page}`;
      const vm = this;
      this.$store.commit('LOADING', true, { root: true });
      this.$http.get(api).then((response) => {
        this.$store.commit('LOADING', false, { root: true });
        vm.products = response.data.products;
        vm.pagination = response.data.pagination;
      });
    },
    // 建立新的產品按下後，彈跳出的Modal視窗
    openModal(isNew, delProduct,item){
      if (isNew){
        // 如果 isNew 為 true的話，代表要建立新產品
        this.tempProduct = {};
        this.isNew = true;
        $('#productModal').modal('show');
      }else if (!isNew && !delProduct){ // 都為 true 才會執行
        // 將item 值寫到一個空的物件裡面，避免傳參考
        this.tempProduct = Object.assign({}, item);
        this.isNew = false;
        this.delProduct = false;
        $('#productModal').modal('show');
      }else {
        this.tempProduct = item;
        this.delProduct = true;
        $('#delProductModal').modal('show');
      }
    },
    updateProduct(){
      let api = `${process.env.APIPATH}/api/${process.env.CUSTOMPATH}/admin/product`;
      let httpMethod = 'post';
      const vm = this;
      // 如果是需要編輯的狀態，需要在api多加id，httpMethod 需要用 put
      if (!vm.isNew) {
        api = `${process.env.APIPATH}/api/${process.env.CUSTOMPATH}/admin/product/${vm.tempProduct.id}`;
        httpMethod = 'put';
      }
      // 因為所送出的參數為物件，因此要用花括號包覆
      this.$http[httpMethod](api, { data: vm.tempProduct }).then((response) => {
        if (response.data.success){
          // 如果有新增成功的話，將Modal關起來
          $('#productModal').modal('hide');
          // 再重新取得一次遠端的資料
          vm.getProducts();
        }else{
          $('#productModal').modal('hide');
          vm.getProducts();
        }
      });
    },
    removeProduct() {
      const vm = this;
      // 製作刪除項目的功能
      let api = `${process.env.APIPATH}/api/${process.env.CUSTOMPATH}/admin/product/${vm.tempProduct.id}`;
      this.$http.delete(api).then((response) => {
        if (response.data.success){
          $('#delProductModal').modal('hide');
          vm.$store.dispatch('alertModules/updateMessage', { message: response.data.message, status: 'success' }, { root: true });
          vm.getProducts();
        }else{
          $('#delProductModal').modal('hide');
          vm.getProducts();
        }  
      });
    },
    uploadFile(){
      console.log(this);
      const uploadedFile = this.$refs.files.files[0]; //取得files裡面的內容
      const vm = this;
      const formData = new FormData(); // creates an empty FormData object
      formData.append('file-to-upload', uploadedFile); // 新增欄位
      const url = `${process.env.APIPATH}/api/${process.env.CUSTOMPATH}/admin/upload`;
      vm.status.fileUploading = true;
      this.$http.post(url, formData, {
        headers: {
          'Content-type' : 'multipart/form-data'
        }
      }).then((response) =>{
        vm.status.fileUploading = false;
        // 圖片路徑會對應到tempProduct的imgUrl
        if (response.data.success) {
          vm.$set(vm.tempProduct, 'imageUrl', response.data.imageUrl);
        }else {
          // 可以透過這個方式觸發外層的alert
          vm.$store.dispatch('alertModules/updateMessage', { message: response.data.message, status: 'danger' }, { root: true });
        }  
      })
    }
  },
  created(){
    this.getProducts();
  },
}
</script>
