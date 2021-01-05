# 甜點電商網站

![](https://i.imgur.com/3caarDb.png)

## Demo
https://lynntuuu.github.io/vue-dessert-shop/

## 簡介
> 完整電商前後台網站，後台能讓店家自行上架商品、查看訂單以及設定優惠券等功能，前台電商網站能讓消費者瀏覽眾多精緻甜點商品，並且有完整的購物流程，能讓消費者買到用心製作出的甜點！  

此作品的功能有:

* 前台
    * 首頁：介紹與導覽
    * 購物商場：多項商品分類以及單一商品細節、商品列表、加入購物車
    * 購物車：使用優惠券、調整商品（數量增減、刪除）、查看購物車商品項目，無產品時引導至購物商場
    * 下單購買 / 訂單結帳 / 確認訂單
    * 後台登入（登入頁） / 進入後台
* 後台
    * 商品管理：商品的管理（新增/刪除/修改產品）
    * 訂單管理：查看訂單狀況
    * 優惠券管理：優惠券的管理（新增/更新優惠券）

## 主要練習

* Vue.js
* VueCLI
* Vuex 管理
* VueRouter
* VeeValidate 驗證
* Ajax串接API、ES6
* Bootstrap 4 + 搭配手刻前台SCSS
* RWD

## 使用的 Plugin

* [Vue-router](https://router.vuejs.org/zh/)
* [Vue-axios](https://github.com/imcvampire/vue-axios#readme)
* [Vue-loading-overlay](https://github.com/ankurk91/vue-loading-overlay)
* [VeeValidate ](https://logaretm.github.io/vee-validate/)
* [Font Awesome 5](https://fontawesome.com/)
* [Bootstrap 4](https://getbootstrap.com/)
* [Animate.css](https://animate.style/)

## 前台介紹
### loading 動畫
品牌圖像動畫，凸顯特色

![](https://i.imgur.com/kJb2VHn.png)

### 首頁
* 使用 Carousel 輪播 banner 
* 介紹品牌與產品特色
* 呈現最新上架的商品
![](https://i.imgur.com/mXXKB3i.png)

### 購物商場

* 可透過分類連結，選取特定分類
* 滑鼠滑入商品照片時，可進入詳細商品介紹
![](https://i.imgur.com/uZiLaIN.png)

### 詳細商品介紹

觀看更多產品介紹，透過點擊增減按鈕取得購買數量，並且計算出金額
![](https://i.imgur.com/Q8dzwxL.png)

### 購物車

* 小型簡易購物車（每按下加入購物車按鈕後，會彈跳購物車，表示已加入）
* 購物車頁面
    1. 可以增減數量，並且會同步金額
    2. 直接按刪除按鈕，會直接刪除該商品
    3. 優惠券輸入： code
    4. 套用優惠券後，會顯示折購金額

    ![](https://i.imgur.com/AJbt3Ie.png)

* 如果購物車為空，會引導至購物商場購物

### 建立訂單頁面

* 顯示訂單明細
* 請顧客填寫訂單資料，若沒有填寫完整資訊，會顯示警示
* 如果回到上一頁，導航守衛會做出判斷，減少訂單尚未完成而退出

### 付款頁面

![](https://i.imgur.com/Dp7iAJH.png)


### 結帳完成

![](https://i.imgur.com/zSBolP7.png)


## 後台介紹

### 登入
![](https://i.imgur.com/CWnw4WL.png)

### 商品管理、訂單管理、優惠券管理
![](https://i.imgur.com/ffYTlPA.png)


## 過濾功能
* 金額符號與千分位
* 日期格式轉換

## 聲明
* 圖片和資料來源皆來自於[菓實日](https://www.facebook.com/pojowowo/)
* 本作品內的圖片與內容，純粹為個人練習技術使用，不做任何商業用途。

###### tags: `GitHub README`