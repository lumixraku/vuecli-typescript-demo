<template>
  <div :id="id" class="coupon piece" :data-id="couponId">
      <div class="btn" @click="toggleMobile" style="background:pink;">TOGGLE MOBILE</div>
  </div>
</template>

<script lang="ts">
import {ClueWindow} from '@/common/clue.window';
import { Component, Vue } from "vue-property-decorator";

@Component({})
export default class CreateCoupon extends Vue{
  text = '这里相当于data'
  couponId = ""
  need_mobile = false

  mounted() {

  }
  toggleMobile() {
    this.need_mobile = !this.need_mobile;
    window.thirdComp && window.manipulateComp('content.requirePhone', this.need_mobile);
  }
}

// export default {
//   name: "createcoupon",
//   data() {
//     return {
//       couponId:"",
//       need_mobile:true
//     }
//   },
//   mounted() {

//   },
//   methods: {
//     toggleMobile: function() {
//       console.log('toggle')
//       this.need_mobile = !this.need_mobile
//       window.manipulateComp && window.manipulateComp('content.requirePhone', this.need_mobile)
//     }
//   }
// }
</script>

<style lang="less">

</style>
