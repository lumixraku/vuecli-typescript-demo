<template>
  <div id="app">
    <img src="./assets/logo.png">
    <div class="coupon-wrapper">
      <CreateCoupon></CreateCoupon>
    </div>
    <!-- <HelloWorld msg="Welcome to Your Vue.js + TypeScript App"/> -->
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
// import HelloWorld from "./components/HelloWorld.vue";
// import Coupon from "./components//Coupon.vue";
import CreateCoupon from "@/components/business/CreateCoupon.vue"
import HelloWorld from "@/components/business/HelloWorld.vue"
@Component({
  components: {
    CreateCoupon,
    HelloWorld
  }
})
export default class App extends Vue {
  currentComponent = "Coupon";

  componentData = {
    name: "Coupon",
    content: {
      couponData: {
        id: "1",
        name: "2",
        title: "3"
      },
      couponDisplayType: "floating",
      iconImage: {
        src: ""
      },
      isCouponCount: false,
      couponCountStart: "0",
      autoShow: false,
      requirePhone: true,
      captcha: false,
      autoFill: true,
      smsText: {
        sms:
          "亲爱的用户，${title}已发放到您的账户，券码为${code}，请您凭此短信或今日头条app中的卡券到店享受优惠，商家${cname}感谢您的关注。",
        vars: {
          cname: "商家名",
          title: "卡券名"
        }
      },
      shareWithCouponStyle: false
    },
    appearance: {
      styleType: 1
    }
  };

  instance = null;
  mounted() {
    console.log("greet");
    // coupon = new Coupon
  }
  method() {

  }
}
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
