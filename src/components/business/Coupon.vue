<template>
  <div :id="id" class="coupon piece" :data-id="couponId" :class="[ 'coupon-' + couponId ]">
    <template v-html="CSRFToken"></template>
    <!-- <div v-if="!content.couponData.id" class="coupon-placeholder"></div> -->
    <div class="coupon-piece-content">
      <input type="hidden" name="site_id" class="site-id-val hide" :value="'{{site_id}}'" />
      <input type="hidden" name="csrf" class="csrf-token-val hide" :value="'{{csrf_token}}'"/>

      <!-- cpatcha0 -->
      <captcha></captcha>

      <!-- coupon -->

      <div class="coupon-icon-wrapper" :class="{ floating: computedContent.couponDisplayType == 'floating', server: $isServer, web: !$isServer}">
         <template v-if="computedContent.couponDisplayType == 'custom' && computedContent.iconImage.src">
          <img class="coupon-icon" :src="computedContent.iconImage.src" width="100%" height="100%"/>
        </template>
        <template v-if="computedContent.couponDisplayType == 'custom' && !computedContent.iconImage.src">
          <div class="empty-coupon-icon"></div>
        </template>
        <template v-if="computedContent.couponDisplayType == 'floating'">
          <img class="coupon-icon" :class="{animate: $isServer}" src="//p1.pstatp.com/origin/4e0a00059d40bf3039af" alt="">
        </template>
      </div>

      <div class="agree-info-alert hide">
        <div class="close-wrapper">
          <i class="icon-close"></i>
        </div>
        <div class="agree-info">
          尚未同意用户协议和隐私条款
        </div>
      </div>

      <div class="coupon-mask hide" v-if="$isServer">
      </div>

      <div class="coupon-dialog hide" :class="{ server: $isServer, floating: $isServer, style1: isStyle1, style2: isStyle2}">

        <!-- style-1 -->
        <div v-if="appearance.styleType==1" class="coupon-container coupon-style-1">
          <div class="caidai"></div>
          <div class="coupon-part1">
            <div class="coupon-merchan-icon">
              <img :src="computedContent.logourl" alt="" class="src">
            </div>
            <div class="coupon-merchan-name">
                {{computedContent.name}}
            </div>
            <div class="coupon-title">
                {{computedContent.title}}
            </div>
            <div class="coupon-count" :class="{hide: !isCount}">
              <span class="text">
                已有<span class="count"></span>人领取
              </span>
            </div>
          </div>
          <div class="part-border">
          </div>
          <!-- style1  -->
          <div class="coupon-part2">
            <div class="coupon-info coupon-period">
              <!-- <span class="info-label">使用期限:</span> -->
              <span class="info-text">使用期限: {{computedContent.startTime}} - {{computedContent.endTime}}</span>
            </div>
            <div class="coupon-info coupon-condition">
              <!-- <span class="info-label">使用条件:</span> -->
              <span class="info-text">使用条件: {{computedContent.condition}}</span>
            </div>
            <div class="coupon-info coupon-location">
              <!-- <span class="info-label">查询位置:</span> -->
              <span class="info-text">查询位置: 我的-头条商城-卡包</span>
            </div>
            <div v-if="content.requirePhone" class="coupon-phone-wrapper">
              <input type="text" v-if="content.requirePhone" class="form-control phone-number" placeholder="请输入您的手机号"/>
              <div class="phone-number-tips">
                <span class="text"></span>
              </div>
            </div>
            <div class="coupon-tips" :class="{hide: content.requirePhone, nophone: !content.requirePhone}">
            </div>
            <div class="btn coupon-submit-btn">
              <template v-if="content.requirePhone">
                填好了，立即领取
              </template>
              <template v-else>
                立即领取
              </template>
            </div>
            <div class="btn coupon-use-btn hide">
              立即使用
            </div>
            <div class="btn coupon-share-btn hide">
              立即分享
            </div>
          </div>
          <div class="coupon-part3">

          </div>
          <div class="close-wrapper">
            <i class="icon-close">
            </i>
          </div>
        </div>

        <!-- style2 -->
        <div v-if="appearance.styleType==2" class="coupon-container coupon-style-2">
          <div class="caidai"></div>
          <div class="coupon-part1"></div>
          <!-- style2 -->
          <!-- 绝对定位 固定 bottom -->
          <div class="coupon-part2">
            <div class="title-wrapper">
              <div class="coupon-title">
                  {{computedContent.title}}
              </div>
              <div class="coupon-count" :class="{hide: !isCount}">
                <span class="text">
                  已有<span class="count"></span>人领取
                </span>
              </div>
            </div>
            <div class="part-border">

            </div>
            <div class="coupon-info coupon-period">
              <!-- <span class="info-label">使用期限:</span> -->
              <span class="info-text">使用期限: {{computedContent.startTime}} - {{computedContent.endTime}}</span>
            </div>
            <div class="coupon-info coupon-condition">
              <!-- <span class="info-label">使用条件:</span> -->
              <span class="info-text">使用条件: {{computedContent.condition}}</span>
            </div>
            <div class="coupon-info coupon-location">
              <!-- <span class="info-label">查询位置:</span> -->
              <span class="info-text">查询位置: 我的-头条钱包-卡券包</span>
            </div>
          </div>
          <!-- style2 -->
          <div class="coupon-part3">

            <!-- bg 绝对定位 固定 top -->
            <div class="bg">
                <!-- H75 -->
                <div class="curve-wrapper">
                  <div class="coupon-merchan-icon">
                    <img :src="computedContent.logourl" alt="" class="src">
                  </div>
                </div>
                <div class="coupon-cover-content">
                  <div class="coupon-merchan-name">
                      {{computedContent.name}}
                  </div>
                  <div v-if="content.requirePhone" class="coupon-phone-wrapper">
                    <input type="text" v-if="content.requirePhone" class="form-control phone-number" placeholder="请输入您的手机号"/>
                    <div class="phone-number-tips">
                      <!-- 有字和没有字的时候样式不一样  设计确认这里会抖动 -->
                      <span class="text"></span>
                    </div>
                  </div>
                  <div class="coupon-tips" :class="{hide: content.requirePhone}">
                  </div>
                  <div class="btn coupon-submit-btn">
                    <template v-if="content.requirePhone">
                      填好了，立即领取
                    </template>
                    <template v-else>
                      立即领取
                    </template>
                  </div>
                  <div class="btn coupon-use-btn hide">
                    立即使用
                  </div>
                  <div class="btn coupon-share-btn hide">
                    立即分享
                  </div>
                </div>
                <div class="radius-part">

                </div>
                <div class="close-wrapper">
                  <i class="icon-close">
                  </i>
                </div>
              </div>

            <!-- </div> -->


          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import captcha from "./Captcha.vue";
import moment from "moment";

export default {
  name: "coupon",
  components: {
    captcha
  },
  props: ["content", "appearance"],
  data() {
    let CSRFToken = "";
    debugger;
    return {
      // hiddenInput: ``,
      couponId: this.content.couponData.id,
      CSRFToken: "{%csrf_token%}"
    };
  },
  computed: {
    computedContent: function() {
      // var tmpContent = this.content.couponData;

      var strStart = this.content.couponData.startTime;
      var strEnd = this.content.couponData.endTime;
      var couponData = Object.assign({}, this.content.couponData);
      couponData.startTime = moment(strStart, "YYYY-MM-DD").format(
        "YYYY.MM.DD"
      );
      couponData.endTime = moment(strEnd, "YYYY-MM-DD").format("YYYY.MM.DD");
      // moment()
      return couponData;
    },
    computedAppearance: function() {
      return this.appearance;
    },
    computedStartTime: function() {
      var strStart = this.content.couponData.startTime;
      return moment(strStart, "YYYY-MM-DD").format("YYYY.MM.DD");
    },
    computedEndTime: function() {
      var strEnd = this.content.couponData.strEnd;
      return moment(strEnd, "YYYY-MM-DD").format("YYYY.MM.DD");
    },
    isStyle1: function() {
      return this.appearance.styleType == 1;
    },
    isStyle2: function() {
      return this.appearance.styleType == 2;
    },
    isCount: function() {
      return this.content.isCouponCount;
    }
  }
  // watch: {
  //   id: function(newId) {
  //   }
  // }
};
</script>

<style lang="less">
html.modal-open {
  // height: 100%;
  body {
    overflow: hidden;
    height: 100%;
  }
}
.coupon-mask {
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.6);

  z-index: 22;
}

.coupon-icon-wrapper {
  img {
    vertical-align: top;
  }
  &.floating.web {
    padding: 15px;
    justify-content: flex-end;
    display: flex;
    img {
      display: block;
      width: 56px;
      height: 60px;
      margin: 0;
      -webkit-animation: shake 2s infinite linear;
    }
  }

  .empty-coupon-icon {
    width: 100%;
    height: 140px;
    overflow: hidden;
    background-image: url(//p2.pstatp.com/origin/589d000ab9a7bb6cc6b3);
    background-repeat: no-repeat;
    background-position: center center;
  }
  &.floating {
    &.server {
      position: fixed;
      top: 30%;
      left: 100%;
      -webkit-transform: translate(0, -50%);
      transform: translate(-60px, -50%);
      z-index: 3;

      img {
        width: 46px;
        margin: 10px 5px;
        // box-shadow: inset 0 0 100px 3px rgba(250,180,12,1), 2px 2px 100px 3px rgba(250,180,12,1);
      }
      .animate {
        -webkit-animation: shake 2s infinite linear;
      }
    }
  }
}

.coupon {
  .coupon-placeholder {
    width: 100%;
    height: 140px;
    overflow: hidden;
    background-image: url("//p2.pstatp.com/origin/589d000ab9a7bb6cc6b3");
    background-repeat: no-repeat;
    background-position: center center;
  }
  label {
    display: inline-block;
    max-width: 100%;
    margin-bottom: 5px;
  }
  span {
    display: inline-block;
  }

  .clear {
    clear: both;
  }

  @keyframes shake {
    0% {
      transform: rotate(0deg);
    }
    5% {
      transform: rotate(5deg);
    }
    15% {
      transform: rotate(-5deg);
    }
    25% {
      transform: rotate(5deg);
    }
    35% {
      transform: rotate(0deg);
    }
    45% {
      transform: rotate(5deg);
    }
    50% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(0deg);
    }
  }

  .close-wrapper {
    display: flex;
    padding: 14px;
    justify-content: center;
    .icon-close {
      background-image: url('data:image/svg+xml;utf8,<svg width="36" height="36" xmlns="http://www.w3.org/2000/svg"><path d="M34.55 10.97a17.9 17.9 0 0 0-9.57-9.56 17.89 17.89 0 0 0-7-1.41A17.9 17.9 0 0 0 5.27 5.26 17.9 17.9 0 0 0 1.4 24.95a17.9 17.9 0 0 0 9.57 9.56 18 18 0 0 0 7 1.4 17.9 17.9 0 0 0 12.72-5.25 17.9 17.9 0 0 0 3.85-19.7zM17.98 35.02A17.1 17.1 0 0 1 .9 17.96a17.1 17.1 0 0 1 34.18 0 17.1 17.1 0 0 1-17.09 17.06zm5.6-24.6l-5.76 5.77-5.77-5.75a1.28 1.28 0 1 0-1.8 1.8L16 18l-5.76 5.77a1.28 1.28 0 1 0 1.81 1.8l5.77-5.76 5.77 5.75a1.28 1.28 0 0 0 1.8-1.8L19.63 18l5.76-5.77a1.28 1.28 0 1 0-1.8-1.8z" fill="#FFF" fill-rule="evenodd" fill-opacity=".85"/></svg>');
      background-size: contain;
      width: 36px;
      height: 36px;
      //svg 实现 因为涉及到颜色的修改
    }
  }

  /*................................*/
  @couponWidth: 302px;

  .coupon-dialog {
    position: fixed;
    width: @couponWidth;
    transform: translate(-50%, -50%);
    &.style2 {
      transform: translate(-50%, -111%);
    }

    left: 50%;
    top: 45%;
    margin: 0 auto;
    z-index: 23;
    .coupon-container {
      position: relative;
      width: @couponWidth;
      // height: ;
    }

    .coupon-title {
      font-size: 22px;
    }
    .coupon-count {
      font-size: 10px;
      text-align: center;
      width: 64px;
      height: 64px;
      margin: 0 auto;
      margin-bottom: -10px;
      background: pink;
      display: -webkit-box;
      display: flex;
      -webkit-box-pack: center;
      justify-content: center;
      -webkit-box-align: center;
      align-items: center;
      background: url('data:image/svg+xml;utf8,<svg width="64" height="64" xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd"><path d="M61.484 19.543a31.888 31.888 0 0 0-6.857-10.17 31.885 31.885 0 0 0-10.172-6.858A31.803 31.803 0 0 0 32.001 0c-4.319 0-8.51.846-12.456 2.515A31.89 31.89 0 0 0 9.373 9.372a31.894 31.894 0 0 0-6.857 10.17A31.803 31.803 0 0 0 0 32.002c0 4.319.846 8.51 2.516 12.456a31.892 31.892 0 0 0 6.857 10.17 31.89 31.89 0 0 0 10.172 6.858A31.8 31.8 0 0 0 32 64c4.317 0 8.508-.846 12.455-2.515a31.893 31.893 0 0 0 10.171-6.857 31.89 31.89 0 0 0 6.857-10.17A31.796 31.796 0 0 0 64 32c0-4.32-.846-8.511-2.516-12.458zm-29.48 37.333c-13.717 0-24.876-11.157-24.876-24.873 0-13.717 11.16-24.875 24.875-24.875 13.714 0 24.873 11.158 24.873 24.875 0 13.716-11.16 24.873-24.873 24.873z" fill="#FFF"/><path d="M32.244.019c17.558.134 31.75 14.409 31.75 31.999 0 17.673-14.326 32-32 32-9.528 0-18.083-4.165-23.945-10.773l.013-.012a3.5 3.5 0 1 1 5.308-4.538 24.916 24.916 0 0 0 18.625 8.323c13.807 0 25-11.193 25-25 0-13.808-11.193-25-25-25v-.005a3.5 3.5 0 1 1 .25-6.994z" fill="#F4DD00" fill-rule="nonzero"/></g></svg>');

      &.count-style-1 {
        background: url('data:image/svg+xml;utf8,<svg width="64" height="64" xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd"><path d="M61.484 19.543a31.888 31.888 0 0 0-6.857-10.17 31.885 31.885 0 0 0-10.172-6.858A31.803 31.803 0 0 0 32.001 0c-4.319 0-8.51.846-12.456 2.515A31.89 31.89 0 0 0 9.373 9.372a31.894 31.894 0 0 0-6.857 10.17A31.803 31.803 0 0 0 0 32.002c0 4.319.846 8.51 2.516 12.456a31.892 31.892 0 0 0 6.857 10.17 31.89 31.89 0 0 0 10.172 6.858A31.8 31.8 0 0 0 32 64c4.317 0 8.508-.846 12.455-2.515a31.893 31.893 0 0 0 10.171-6.857 31.89 31.89 0 0 0 6.857-10.17A31.796 31.796 0 0 0 64 32c0-4.32-.846-8.511-2.516-12.458zm-29.48 37.333c-13.717 0-24.876-11.157-24.876-24.873 0-13.717 11.16-24.875 24.875-24.875 13.714 0 24.873 11.158 24.873 24.875 0 13.716-11.16 24.873-24.873 24.873z" fill="#FFF"/><path d="M54.498 21.216l-.02.01A25 25 0 0 0 31.928 7.04v-.006a3.5 3.5 0 0 1 0-6.993V.04h.04a3.563 3.563 0 0 1 .292.001c12.573.128 23.41 7.506 28.527 18.154l-.01.004a3.5 3.5 0 0 1-6.28 3.018z" fill="#F4DD00" fill-rule="nonzero"/></g></svg>');
      }

      &.count-style-1 {
        background: url('data:image/svg+xml;utf8,<svg width="64" height="64" xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd"><path d="M61.484 19.543a31.888 31.888 0 0 0-6.857-10.17 31.885 31.885 0 0 0-10.172-6.858A31.803 31.803 0 0 0 32.001 0c-4.319 0-8.51.846-12.456 2.515A31.89 31.89 0 0 0 9.373 9.372a31.894 31.894 0 0 0-6.857 10.17A31.803 31.803 0 0 0 0 32.002c0 4.319.846 8.51 2.516 12.456a31.892 31.892 0 0 0 6.857 10.17 31.89 31.89 0 0 0 10.172 6.858A31.8 31.8 0 0 0 32 64c4.317 0 8.508-.846 12.455-2.515a31.893 31.893 0 0 0 10.171-6.857 31.89 31.89 0 0 0 6.857-10.17A31.796 31.796 0 0 0 64 32c0-4.32-.846-8.511-2.516-12.458zm-29.48 37.333c-13.717 0-24.876-11.157-24.876-24.873 0-13.717 11.16-24.875 24.875-24.875 13.714 0 24.873 11.158 24.873 24.875 0 13.716-11.16 24.873-24.873 24.873z" fill="#FFF"/><path d="M54.498 21.216l-.02.01A25 25 0 0 0 31.928 7.04v-.006a3.5 3.5 0 0 1 0-6.993V.04h.04a3.563 3.563 0 0 1 .292.001c12.573.128 23.41 7.506 28.527 18.154l-.01.004a3.5 3.5 0 0 1-6.28 3.018z" fill="#F4DD00" fill-rule="nonzero"/></g></svg>');
      }

      &.count-style-2 {
        background: url('data:image/svg+xml;utf8,<svg width="64" height="64" xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd"><path d="M61.484 19.543a31.888 31.888 0 0 0-6.857-10.17 31.885 31.885 0 0 0-10.172-6.858A31.803 31.803 0 0 0 32.001 0c-4.319 0-8.51.846-12.456 2.515A31.89 31.89 0 0 0 9.373 9.372a31.894 31.894 0 0 0-6.857 10.17A31.803 31.803 0 0 0 0 32.002c0 4.319.846 8.51 2.516 12.456a31.892 31.892 0 0 0 6.857 10.17 31.89 31.89 0 0 0 10.172 6.858A31.8 31.8 0 0 0 32 64c4.317 0 8.508-.846 12.455-2.515a31.893 31.893 0 0 0 10.171-6.857 31.89 31.89 0 0 0 6.857-10.17A31.796 31.796 0 0 0 64 32c0-4.32-.846-8.511-2.516-12.458zm-29.48 37.333c-13.717 0-24.876-11.157-24.876-24.873 0-13.717 11.16-24.875 24.875-24.875 13.714 0 24.873 11.158 24.873 24.875 0 13.716-11.16 24.873-24.873 24.873z" fill="#FFF"/><path d="M54.506 21.214l-.02.01a25 25 0 0 0-22.55-14.188V7.03a3.5 3.5 0 0 1 0-6.992V.036h.04a3.563 3.563 0 0 1 .292.002c12.573.127 23.41 7.506 28.527 18.153l-.01.005a3.5 3.5 0 0 1-6.28 3.018z" fill="#F4DD00" fill-rule="nonzero"/></g></svg>');
      }

      background-size: contain;
      background-repeat: no-repeat;

      .text {
        display: block;
        width: 33px;
        text-align: center;
        justify-content: center;
      }
    }
    .coupon-desc {
      display: none;
      padding: 10px;
      span {
        text-indent: 2rem;
        font-size: 14px;
      }
    }
    .coupon-style-1 {
      // margin: 30px;
      // background: orange;
      @caidaiMarginLeft: 10px;
      border-radius: 10px;
      .caidai {
        position: absolute;
        width: ~"calc(@{couponWidth} + 2*@{caidaiMarginLeft})";
        margin: -@caidaiMarginLeft;
        height: ~"calc(144px + 1*@{caidaiMarginLeft})"; //part1 height + margin
        top: 0;
        background-image: url('data:image/svg+xml;utf8,<svg width="322" height="154" xmlns="http://www.w3.org/2000/svg"><defs><linearGradient x1="19.548%" y1="0%" x2="44.176%" y2="87.886%" id="a"><stop stop-color="#AE8EF8" offset="0%"/><stop stop-color="#B298FF" offset="100%"/></linearGradient><linearGradient x1="11.759%" y1="11.325%" x2="87.319%" y2="100%" id="b"><stop stop-color="#A3E988" offset="0%"/><stop stop-color="#9BD784" offset="100%"/></linearGradient></defs><g transform="translate(-3 -9)" stroke-width="2" fill="none" fill-rule="evenodd"><circle stroke="#76E4EC" cx="315.5" cy="117.5" r="8.5"/><path d="M269.317 11.401l5.245 19.266a1 1 0 0 0 1.675.441l19.205-19.35a1 1 0 0 0-.713-1.705l-24.45.085a1 1 0 0 0-.962 1.263z" stroke="#FFE991"/><path d="M5.066 148.298l-2.21 14.323a1 1 0 0 0 1.35 1.085l18.448-7.162a1 1 0 0 0 .041-1.847l-16.237-7.161a1 1 0 0 0-1.392.762z" stroke="url(#a)" transform="rotate(144 13.068 155.612)"/><path d="M53.467 12.581l7.816-1.975a1 1 0 0 1 1.184 1.313l-2.343 6.4a1 1 0 0 0 1.082 1.333l8.343-1.201a1 1 0 0 1 1.042 1.427l-3.745 7.705a1 1 0 0 0 1.01 1.431l8.067-.888" stroke="url(#b)" stroke-linecap="round" transform="rotate(-3 64.695 19.798)"/></g></svg>');
        background-size: 100% 100%;
        background-repeat: no-repeat;
      }

      //style1 part1
      .coupon-part1 {
        padding: 15px 20px;
        background-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="302" height="172" preserveAspectRatio="none"><defs><linearGradient x1="0%" y1="100%" y2="6.296%" id="a"><stop stop-color="#FFAB15" offset="0%"/><stop stop-color="#FF4C3A" offset="49.41%"/><stop stop-color="#FF012C" offset="99.291%"/><stop stop-color="#FF002B" offset="100%"/></linearGradient><path d="M0 172V22C0 9.85 9.85 0 22 0h258c12.15 0 22 9.85 22 22v150.041c-6.16.508-11 5.668-11 11.959 0 6.29 4.84 11.45 11 11.959V361c0 12.15-9.85 22-22 22H22c-12.15 0-22-9.85-22-22V196c6.627 0 12-5.373 12-12s-5.373-12-12-12z" id="b"/></defs><use fill="url(#a)" xlink:href="#b" fill-rule="evenodd"/></svg>');

        background-size: 100% 100%;
        background-repeat: no-repeat;
        min-height: 164px;

        .coupon-merchan-name {
          padding: 6px 0 10px 0;
          font-size: 14px;
        }
        .coupon-merchan-icon {
          img {
            width: 52px;
            height: 52px;
            border-radius: 50%;
            border: 1px solid #fff;
            margin-bottom: 5px;
          }
        }
        .coupon-count {
          text-align: center;
          // font-size: 12px;
          // padding-top: 12px;
          // padding-bottom: 20px;
        }
      }
      .part-border {
        height: 20px;
        margin-bottom: -1px; //为了修复两个 SVG 中间的缝隙问题
        margin-top: -1px;
        .part-border-svg {
          background-size: 100% 100%;
        }

        background: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" class="part-border-svg" width="302" height="24" preserveAspectRatio="none"><defs><linearGradient x1="0%" y1="100%" y2="6.296%" id="a"><stop stop-color="#FFAB15" offset="0%"/><stop stop-color="#FF4C3A" offset="49.41%"/><stop stop-color="#FF012C" offset="99.291%"/><stop stop-color="#FF002B" offset="100%"/></linearGradient><path d="M0 172V22C0 9.85 9.85 0 22 0h258c12.15 0 22 9.85 22 22v150.041c-6.16.508-11 5.668-11 11.959 0 6.29 4.84 11.45 11 11.959V361c0 12.15-9.85 22-22 22H22c-12.15 0-22-9.85-22-22V196c6.627 0 12-5.373 12-12s-5.373-12-12-12z" id="b"/></defs><g transform="translate(0 -172)"><use fill="url(#a)" xlink:href="#b"/><path d="M15.36 184.75h274.664" stroke="#FFF" stroke-dasharray="3,2"/></g></svg>');

        background-size: 100% 102%;
        background-position: center center;
        background-repeat: no-repeat;
      }

      //style1 part2
      .coupon-part2 {
        padding: 10px 20px 0;
        overflow: hidden; //BFC
        background-image: url('data:image/svg+xml;utf8,<svg width="302" height="163" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><defs><linearGradient x1="0%" y1="100%" y2="6.295833%" id="a"><stop stop-color="#FFAB15" offset="0%"/><stop stop-color="#FF4C3A" offset="49.410182%"/><stop stop-color="#FF012C" offset="99.291184%"/><stop stop-color="#FF002B" offset="100%"/></linearGradient><path d="M0 172V22C0 9.849735 9.849735 0 22 0h258c12.150264 0 22 9.849735 22 22v150.041074c-6.159531.508151-11 5.668262-11 11.958926s4.840469 11.450775 11 11.958926V361c0 12.150264-9.849736 22-22 22H22c-12.150265 0-22-9.849736-22-22V196c6.627417 0 12-5.372583 12-12s-5.372583-12-12-12z" id="b"/></defs><use fill="url(#a)" xlink:href="#b" transform="translate(0 -196)" fill-rule="evenodd"/></svg>');
        background-size: 100% 100%;
        background-repeat: no-repeat;

        .coupon-info {
          font-size: 13px;
          line-height: 21px;
        }

        .coupon-phone-wrapper {
          margin-top: 19px;
        }
        .coupon-tips {
          margin-top: 24px;
          // height: 66px;
        }
      }

      // style1 part3
      .coupon-part3 {
        height: 22px;
        margin-top: -1px; //不加这个的话 部分机型会有一条缝隙
        background-image: url('data:image/svg+xml;utf8,<svg width="302" height="24" preserveAspectRatio="none"  xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><defs><linearGradient x1="0%" y1="100%" y2="6.295833%" id="a"><stop stop-color="#FFAB15" offset="0%"/><stop stop-color="#FF4C3A" offset="49.410182%"/><stop stop-color="#FF012C" offset="99.291184%"/><stop stop-color="#FF002B" offset="100%"/></linearGradient><path d="M0 172V22C0 9.849735 9.849735 0 22 0h258c12.150264 0 22 9.849735 22 22v150.041074c-6.159531.508151-11 5.668262-11 11.958926s4.840469 11.450775 11 11.958926V361c0 12.150264-9.849736 22-22 22H22c-12.150265 0-22-9.849736-22-22V196c6.627417 0 12-5.372583 12-12s-5.372583-12-12-12z" id="b"/></defs><use fill="url(#a)" xlink:href="#b" transform="translate(0 -359)" fill-rule="evenodd"/></svg>');
        background-size: 100% 100%;
        background-repeat: no-repeat;
      }
      color: #fff;
      background-size: 100% 100%;
      background-repeat: no-repeat;
    }

    .coupon-style-2 {
      @partupheight: 155px;
      @bgPadding: 80px; //155 - 85
      @caidaiMarginLeft: 30px;
      @part2margin: 20px;
      @coupon2Width: 266px;
      width: @coupon2Width;
      margin: 0 auto;
      padding-top: @partupheight;

      .caidai {
        position: absolute;
        top: -40px;
        height: 260px;
        width: ~"calc(@{coupon2Width} + 2*@{caidaiMarginLeft})";
        margin: -10px -@caidaiMarginLeft;
        z-index: 10;

        background-image: url('data:image/svg+xml;utf8,<svg width="318" height="249" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><defs><path d="M60.2 154.7l3.7-2.2c-.8-.6-1.7-1-2.5-1.5-3.5-1.7-6.8-2-10-.6.6 0 2 1.8 2 1.8.8 0 5.8 1 6.8 2.5z" id="b"/><filter x="-8%" y="-57.8%" width="132.2%" height="177.1%" filterUnits="objectBoundingBox" id="a"><feOffset dx="2" dy="-2" in="SourceAlpha" result="shadowOffsetOuter1"/><feColorMatrix values="0 0 0 0 0.734853316 0 0 0 0 0 0 0 0 0 0 0 0 0 1 0" in="shadowOffsetOuter1"/></filter><linearGradient x1="-18.3%" y1="68.3%" x2="111.3%" y2="27.7%" id="c"><stop stop-color="#52E4F0" offset="0%"/><stop stop-color="#322AF3" offset="100%"/></linearGradient><path d="M265.1 159.4l3.9 2v-2.9c0-3.8-1.4-6.6-4.1-8.5.5.5 4 3.2.2 9.4z" id="e"/><filter x="-23.9%" y="-8.7%" width="195.5%" height="117.5%" filterUnits="objectBoundingBox" id="d"><feOffset dx="2" in="SourceAlpha" result="shadowOffsetOuter1"/><feColorMatrix values="0 0 0 0 0.412069515 0 0 0 0 0 0 0 0 0 0 0 0 0 0.400588768 0" in="shadowOffsetOuter1"/></filter><path d="M33.1 250.4l3.9 2v-2.9c0-3.8-1.4-6.6-4.1-8.5.5.5 4 3.2.2 9.4z" id="g"/><filter x="-23.9%" y="-8.7%" width="195.5%" height="117.5%" filterUnits="objectBoundingBox" id="f"><feOffset dx="2" in="SourceAlpha" result="shadowOffsetOuter1"/><feColorMatrix values="0 0 0 0 0.412069515 0 0 0 0 0 0 0 0 0 0 0 0 0 0.400588768 0" in="shadowOffsetOuter1"/></filter><linearGradient x1="0%" y1="0%" y2="91.9%" id="h"><stop stop-color="#52E4F0" offset="0%"/><stop stop-color="#322AF3" offset="100%"/></linearGradient></defs><g fill="none" fill-rule="evenodd"><g transform="rotate(165 56.8 151)"><use fill="#000" filter="url(#a)" xlink:href="#b"/><use fill="#EEEB00" xlink:href="#b"/></g><path d="M7.2 119.6l3.2 1.2a21.2 21.2 0 0 1 3 2l5.6-3.4a25.3 25.3 0 0 0-3.6-2.2 21.2 21.2 0 0 0-3.6-1.4 18.4 18.4 0 0 0-3.7-.7 17.6 17.6 0 0 0-3.8.1l-3.6 4A15.7 15.7 0 0 1 4 119c1 0 2.1.2 3.2.5z" fill="url(#c)" transform="rotate(-30 5.1 121.6)"/><path d="M24 5.5a13.8 13.8 0 0 1 5.3-.4L31.7 1a19.2 19.2 0 0 0-3.2-.1c-1 0-2 .2-3 .4a14 14 0 0 0-2.6 1c-.9.4-1.7.9-2.5 1.5l-.8 4c.6-.6 1.3-1 2-1.4a12.3 12.3 0 0 1 2.4-.8z" fill="#FCF100"/><g transform="rotate(120 266.6 154)"><use fill="#000" filter="url(#d)" xlink:href="#e"/><use fill="#00E8FF" xlink:href="#e"/></g><g transform="rotate(120 34.6 245)"><use fill="#000" filter="url(#f)" xlink:href="#g"/><use fill="#00E8FF" xlink:href="#g"/></g><path d="M301 175.7c.4 1.5.6 3 .6 4.7a29.2 29.2 0 0 1-.3 5.2l9.8 9c.3-2.1.5-4.1.4-6a28 28 0 0 0-.6-5.5 23.6 23.6 0 0 0-1.7-5 22.4 22.4 0 0 0-2.7-4.4l-9.4-6.2a20 20 0 0 1 2.4 3.8 20.8 20.8 0 0 1 1.5 4.4z" fill="url(#h)" transform="rotate(-60 301.6 181.7)"/><path d="M284.1 52a16.1 16.1 0 0 1 3-1.2 19.6 19.6 0 0 1 3.4-.6l4-8-3.8.8a18.8 18.8 0 0 0-3.5 1.4 15.8 15.8 0 0 0-3 2 15 15 0 0 0-2.3 2.5l-2.4 7.1a13.4 13.4 0 0 1 2-2.2 14 14 0 0 1 2.6-1.8z" fill="#00EAFF"/><path fill="#FF001A" d="M292 70.4h6.5l1.7-9.4z"/></g></svg>');
        background-size: 100% 100%;
        background-repeat: no-repeat;
      }

      .coupon-part1 {
        position: absolute;
        height: @couponWidth;
        width: @coupon2Width;
        z-index: -5;
        top: 0;
        // bottom: 0;
        background-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="266" height="240" preserveAspectRatio="none"><path d="M0 82.193C59.57 27.49 103.84.093 132.809 0 161.777-.093 206.174 27.304 266 82.193V210c0 16.569-13.431 30-30 30H30c-16.569 0-30-13.431-30-30V82.193z" fill="#FB0000" fill-rule="evenodd"/></svg>');
        background-size: contain;
        background-repeat: no-repeat;
        // background-position: 0px 70px;
      }

      //style2 part2
      .coupon-part2 {
        position: absolute;
        width: 236px;
        padding: 20px;
        padding-bottom: 50px;
        margin: 0 auto;
        bottom: 0px;
        left: 0px;
        right: 0px;
        z-index: -1;

        background-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="236" height="263" preserveAspectRatio="none"><defs><linearGradient x1="50%" y1="0%" x2="50%" y2="98.252%" id="a"><stop stop-color="#F5AE00" offset="0%"/><stop stop-color="#CF9500" offset="100%"/></linearGradient></defs><g fill="none" fill-rule="evenodd"><path d="M8.277 0h219.446A6.486 6.486 0 0 0 236 8.28V263H0V8.28c.676.238 1.404.368 2.162.368A6.486 6.486 0 0 0 8.277 0z" fill="#FFF"/><path d="M18.878 9.432a6.927 6.927 0 0 1-6.712 8.655 6.95 6.95 0 0 1-1.734-.218v234.699h216.136v-234.7a6.95 6.95 0 0 1-1.734.22 6.927 6.927 0 0 1-6.712-8.656H18.878z" stroke="url(#a)" stroke-width=".865"/></g></svg>');

        background-size: 100% 100%;
        background-repeat: no-repeat;

        color: #f1b100;
        .title-wrapper {
          padding-top: 21px;
          padding-bottom: 18px;
        }
        .coupon-title {
          font-size: 20px;
          line-height: 28px;
          margin-bottom: 7px; //18 + 7
          overflow: hidden;
        }
        .coupon-count {
        }
        .part-border {
          border-top: 1px dashed #f1b100;
          margin: 0 -5px;
          margin-bottom: 10px;
        }
        .coupon-info {
          line-height: 21px;
          font-size: 11px;
        }
      }

      // style2 part3
      .coupon-part3 {
        position: relative;
        // margin-top: 50%;
        z-index: 5;
        font-size: 10px;
        // height: 250px; //由coupon-cover-content决定高度
        .bg {
          position: absolute;
          width: @coupon2Width;
          top: -60px;
        }

        .curve-wrapper {
          height: 75px;
          width: 100%;
          // height: 100%;
          // z-index: -1;
          background-image: url('data:image/svg+xml;utf8,<svg width="266" height="59" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg"><g fill="none"><path d="M0 0c34.1 24.1 78.4 36.2 133 36.3 54.6.1 98.9-12 133-36.3v123a30 30 0 0 1-30 30H30a30 30 0 0 1-30-30V0z" fill-opacity=".2" fill="#000"/><path d="M0 0c34.1 29.4 78.4 44.2 133 44.3 54.6.1 98.9-14.7 133-44.3v191a30 30 0 0 1-30 30H30a30 30 0 0 1-30-30V0z" fill="#FF000D"/></g></svg>');
          background-size: 100% 100%;
          background-repeat: no-repeat;
        }

        .coupon-merchan-icon {
          padding-top: 23px;
          width: 52px;
          // height: 52px;
          margin: 0 auto;
        }
        .coupon-cover-content {
          position: relative;
          top: 0;
          padding: 6px 27px 0;
          width: 100%;
          background: #ff000d;
          overflow: hidden; //BFC
          // padding-bottom: 24px;
          // height: 100%;
          // z-index: -1;
          // background-image: url('data:image/svg+xml;utf8,<svg width="266" height="59" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg"><g fill="none"><path d="M0 0c34.1 24.1 78.4 36.2 133 36.3 54.6.1 98.9-12 133-36.3v123a30 30 0 0 1-30 30H30a30 30 0 0 1-30-30V0z" fill-opacity=".2" fill="#000"/><path d="M0 0c34.1 29.4 78.4 44.2 133 44.3 54.6.1 98.9-14.7 133-44.3v191a30 30 0 0 1-30 30H30a30 30 0 0 1-30-30V0z" fill="#FF000D"/></g></svg>');
          // background-size: 100% 100%;
          // background-repeat: no-repeat;
        }
        .coupon-merchan-name {
          font-size: 16px;
          // line-height: 50px;
          padding: 8px 0 19px;
        }
        .radius-part {
          height: 25px;
          width: 100%;
          display: block;
          background-image: url('data:image/svg+xml;utf8,<svg width="266" height="31" preserveAspectRatio="none"  xmlns="http://www.w3.org/2000/svg"><path d="M0-190c34.11198 29.431251 78.445313 44.197656 133 44.299215 54.554688.101559 98.888021-14.664846 133-44.299215V1c0 16.568542-13.431458 30-30 30H30C13.431458 31 0 17.568542 0 1v-191z" fill="#FF000D" fill-rule="evenodd"/></svg>');
          background-size: 100% 100%;
        }
      }
      //end part3
    }
    .coupon-merchan-icon {
      display: flex;
      justify-content: center;
      img {
        width: 52px;
        height: 52px;
        border-radius: 50%;
        border: 1px solid #fff;
      }
    }
    .coupon-merchan-name {
      color: #fff;
    }
    .coupon-merchan-name,
    .coupon-title {
      text-align: center;
    }
    .coupon-phone-wrapper {
      // height: 66px;//前面有
      input[type="text"] {
        display: block;
        width: 100%;
        height: 46px;
        padding: 6px 12px;
        font-size: 14px;
        line-height: 1.42857143;
        color: #555;
        background-color: #fff;
        background-image: none;
        // border: 1px solid #ccc;
        border: none;
        border-radius: 6px;
        box-sizing: border-box;
        -webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075);
        box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075);
        -webkit-transition: border-color ease-in-out 0.15s,
          -webkit-box-shadow ease-in-out 0.15s;
        -o-transition: border-color ease-in-out 0.15s,
          box-shadow ease-in-out 0.15s;
        transition: border-color ease-in-out 0.15s, box-shadow ease-in-out 0.15s;
      }
      .phone-number-tips {
        color: #fff;
        font-size: 0;
        padding: 2px 0px 10px 0;
        .text {
          // margin: 2px 0px 10px 0;
          font-size: 12px;
          line-height: 26px;
          vertical-align: top;
          //确认需要有字的时候才有高度
        }
      }
    }
    .agreement-wrapper {
      padding-bottom: 16px;

      .agreement {
        line-height: 17px;
        display: flex;
        display: -webkit-flex;
        align-items: flex-start;
        font-size: 13px;

        &.style2 {
          color: #fff;
        }
        .text {
          display: flex;
          display: -webkit-flex;
          flex-wrap: wrap;
        }
        label {
          margin: 0;
          height: 14px;
          width: 14px;
          margin-right: 8px;
          margin-top: 2px;
        }
        input {
          height: 14px;
          width: 14px;
          margin-right: 8px;
        }
        a {
          //不加 margin 文字有些许对不齐
          margin: 1px 2px 0 2px;
          color: #3e7fd2;
        }
        &.style1 {
          a {
            margin: 1px 2px 0 2px;
          }
        }
        &.style2 {
          a {
            margin: 1px 2px 0 2px;
          }
        }
      }
    }

    .coupon-tips {
      font-size: 21px;
      color: #fff;
      text-align: center;
      margin-bottom: 28px;
      // line-height: 54px;
      // height: 64px;
      // &[out-tt="1"] {
      //   font-size: 12px;
      // }
    }
    .coupon-submit-btn,
    .coupon-use-btn,
    .coupon-share-btn {
      background: #ffe800;
      height: 44px;
      line-height: 44px;
      text-align: center;
      border-radius: 6px;
      font-size: 20px;
      color: #666;
      &:active {
        background: #ebd20a;
      }
    }
    .coupon-use-btn {
      // background: #ffe800;
      background: transparent;
      color: #ffe800;
      border: 1px solid #ffe800;
    }

    .coupon-share-btn {
      margin-top: 12px; //V
    }
  }

  .agree-info-alert {
    position: fixed;
    z-index: 200;
    height: 120px;
    background: rgba(0, 0, 0, 0.75);
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;
    width: 180px;
    text-align: center;
    border-radius: 4px;

    color: white;
    .icon-close {
      width: 30px;
      height: 30px;
    }
    .agree-info {
      padding: 10px 20px;
    }
    &.fade-out {
      opacity: 0;
      -webkit-transition: all 600ms ease-in;
      transition: all 600ms ease-in;
    }
  }
}
</style>
