<template>
  <div class="captcha-wrapper coupon-captcha-wrapper hide">
      <div class="captcha-dialog">
          <div class="dialog-area">
            <div class="title">
              <div class="backbtn">
                <i class="icon-back"></i>
              </div>
              <div class="close"><i class="iconeditor-cross"></i></div>
            </div>
            <div class="warning-info">请先填写图片验证码进行获取</div>
            <div class="dialog-pic-wrapper hide">
              <div class="input-area">
                <input type="number" pattern="[0-9]*" class="form-control validate-item pic-captcha" placeholder="图片验证码" />
                <span class="nor-btn validate-item refresh-pic-btn">
                    <i class="icon-refresh"></i>
                </span>
                <img class="captcha-img validate-item" origin-src="" />
              </div>
              <div class="pic-check-info">

              </div>
            </div>

            <div class="dialog-sms-wrapper">
                <div class="input-area">
                  <input type="text" pattern="[0-9]*" class="form-control validate-item sms-captcha" placeholder="短信验证码" />
                  <span class="nor-btn validate-item send-sms-btn" origin-text="发送短信验证码">
                      <span class="text">发送短信验证码</span>
                      <span class="timer"></span>
                  </span>
                </div>
                <div class="sms-check-info">
                </div>
            </div>
            <div class="nor-btn dialog-submit-btn">
                验证好了,立即领取
            </div>
          </div>
          <div class="close-area">
            <div class="close-btn">

            </div>
          </div>

      </div>
  </div>
</template>


<script>
export default {
  name: "captcha"
};
</script>


<style lang="less">
.captcha-wrapper {
  position: fixed;
  width: 100%;
  height: 100%;
  display: block;
  top: 0px;
  left: 0px;
  z-index: 15;
  background: rgba(0, 0, 0, 0.6);
  .captcha-dialog {
    // width: 85%;
    width: 302px;
    position: fixed;
    -webkit-transform: translate(-50%, 20%);
    transform: translate(-50%, 20%); // position: fixed;
    // -webkit-transform: translate(-50%, -60%);
    // transform: translate(-50%, -60%);
    // top: 50%;
    left: 50%;
    text-align: center;
    border-radius: 4px;
    z-index: 50;
    .dialog-area {
      padding: 0 15px 25px 15px;
      background: #fff !important;
      border-radius: 6px;
    }

    .title {
      font-size: 18px;
      text-align: center;
      background: #f5f5f5;
      border-radius: 4px 4px 0 0;
      height: 41px;
      margin: 0 -15px;
      display: flex;
      position: relative;
      .close {
        position: absolute;
        top: 0;
        right: 0;
        text-align: center;
        width: 30px;
        height: 40px;
        padding: 10px 0;
      }
      .backbtn {
        height: 40px;
        width: 50px;
        i {
          display: block;
          width: 100%;
          height: 100%;
          background-repeat: no-repeat;
          // fill: red;
          background-position: 40% 50%;
          background-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="9" height="14"><path d="M2.1 5.4l5-5.07a1.09 1.09 0 0 1 1.56 0c.43.44.43 1.15 0 1.6L3.87 6.78a.3.3 0 0 0 0 .42l4.77 4.87c.43.44.43 1.15 0 1.6a1.1 1.1 0 0 1-1.57-.01L2.1 8.59l-.87-.89a1 1 0 0 1 0-1.4l.87-.9z" fill="#666" fill-rule="evenodd"/></svg>');
          background-size: 19%;
        }
      }
    }
    input {
      border: 1px solid #d7d7d7;
      border-radius: 6px;
      outline: none;
      box-shadow: 0 0;
      height: 44px;
      margin-top: 0;
      font-size: 14px;
      padding: 5px 10px;
    }
    .sms-info,
    .warning-info {
      // color: red;
      color: #222;
      // height: 70px;
      line-height: 21px;
      text-align: center;
      // padding: 20px 0 0 0;
      margin: 12px 0 24px;
      font-size: 14px;
    }
    .dialog-pic-wrapper,
    .dialog-sms-wrapper {
      margin: 16px 0;
      .validate-item {
        // margin: 0 10px;
      }
      .input-area {
        display: flex;
      }

      .sms-check-info,
      .pic-check-info {
        font-size: 12px;
        color: #ff2833;
        text-align: left;
        margin-top: 8px;
      }
      img {
        min-width: 80px;
        height: 44px;
        // margin: 0 0 0 10px;
        border: 1px solid #d7d7d7;
        // border-radius: 6px 0 0 6px;
        border-radius: 6px;
      }
      // .decor-line {
      //   margin-left: 10px;
      //   flex-shrink: 0;
      //   border-right: 1px solid #e8e8e8;
      // }
      .nor-btn {
        height: 44px;
        padding: 0 10px;
        min-width: 100px;
      }
      input.pic-captcha {
        width: 100px;
        flex-grow: 1;
        flex-shrink: 1;
        // border-radius: 6px;
        border-radius: 6px 0 0 6px;
      }

      .refresh-pic-btn {
        width: 16%;
        min-width: 50px;
        font-size: 20px;
        font-weight: bold;
        color: #999;
        background-color: #f5f5f5;
        flex-shrink: 0;
        padding: 0;
        border-radius: 0 6px 6px 0;
        border: 1px solid #d7d7d7;
        margin-right: 16px;
        border-left: none;
        display: flex;
        justify-content: center;
        align-items: center;
        &:active {
          opacity: 0.5;
        }
        i {
          background-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="18" height="20"><path d="M12.55 12.2a5.93 5.93 0 0 1-3.9.99l-.18-.03a5 5 0 0 1-.37-.05l-.22-.05a5.54 5.54 0 0 1-.36-.09l-.16-.06a4.6 4.6 0 0 1-.4-.13l-.08-.04-.45-.2-.01-.02a5.81 5.81 0 0 1-1.33-.96l-.02-.02a4.8 4.8 0 0 1-.35-.37l-.07-.09a5.5 5.5 0 0 1-1.27-3.51H4.9L2.46 4 0 7.57h1.53c0 1.56.5 3 1.36 4.2l.03.06.28.35.1.13.45.47.04.04c.52.5 1.1.92 1.73 1.26l.05.02c.18.1.37.19.56.27l.14.05a7.67 7.67 0 0 0 1.18.37l.3.07.12.02.43.06.15.02c.26.02.52.04.77.04 1.56 0 3.08-.46 4.39-1.35a.87.87 0 0 0 .22-1.24.93.93 0 0 0-1.28-.22zm3.91-4.77c0-1.56-.5-3-1.35-4.2l-.03-.06a9.14 9.14 0 0 0-.37-.47A7.66 7.66 0 0 0 11.84.6l-.1-.03a9.4 9.4 0 0 0-.53-.2L11 .32a7.88 7.88 0 0 0-.48-.12l-.27-.06c-.05 0-.09-.02-.14-.03L9.76.07C9.68.06 9.6.04 9.51.04L8.91 0h-.15C7.22 0 5.7.46 4.4 1.34a.87.87 0 0 0-.22 1.25c.29.4.86.5 1.28.21a5.91 5.91 0 0 1 3.9-.99l.15.02.42.06.17.04a5.66 5.66 0 0 1 .96.3l.04.01c.86.36 1.61.91 2.2 1.6l.01.01a5.52 5.52 0 0 1 1.32 3.58H13.1L15.55 11 18 7.43h-1.54z" fill="#666" fill-rule="evenodd"/></svg>');
          display: block;
          background-repeat: no-repeat;
          background-size: 90% 100%;
          background-position: 0 1px;
          width: 18px;
          height: 18px;
        }
      }
      input.sms-captcha {
        flex-grow: 1;
        flex-shrink: 1;
        width: 108px;
        border-radius: 6px 0 0 6px;
      }
      .send-sms-btn {
        color: #d7d7d7;
        border-radius: 0 6px 6px 0;
        background-color: #f5f5f5;
        border: 1px solid #d7d7d7;
        border-left: none;
        background: #ffe800;
        font-size: 14px;
        color: #444;
        &.disabled {
          color: #9b9b9b;
        }
        &:active {
          opacity: 0.5;
        }
        width: 144px;
        flex-shrink: 0;
      }
    }
    .nor-btn {
      display: block;
      cursor: pointer;
      height: 44px;
      line-height: 44px;
      text-align: center;
      box-sizing: border-box;
      text-decoration: none;
      border: none;
    }

    .dialog-submit-btn {
      margin-top: 50px;
      border-radius: 2px;
      display: block;
      cursor: pointer;
      color: #444444;
      height: 44px;
      line-height: 44px;
      text-align: center;
      box-sizing: border-box;
      text-decoration: none;
      font-size: 20px;
      padding: 0;
      border: none;
      border-radius: 6px;
      -webkit-user-select: none;
      background: #ffe800;
      border: 1px solid #e0bc00;
      margin-top: 16px;
      &:active {
        outline: none;
        outline: 0 !important;
        opacity: 0.5;
      }
    }
  }

  .close-area {
    padding: 14px;
    display: flex;
    justify-content: center;

    .close-btn {
      background-image: url('data:image/svg+xml;utf8,<svg width="36" height="36" xmlns="http://www.w3.org/2000/svg"><path d="M34.55 10.97a17.9 17.9 0 0 0-9.57-9.56 17.89 17.89 0 0 0-7-1.41A17.9 17.9 0 0 0 5.27 5.26 17.9 17.9 0 0 0 1.4 24.95a17.9 17.9 0 0 0 9.57 9.56 18 18 0 0 0 7 1.4 17.9 17.9 0 0 0 12.72-5.25 17.9 17.9 0 0 0 3.85-19.7zM17.98 35.02A17.1 17.1 0 0 1 .9 17.96a17.1 17.1 0 0 1 34.18 0 17.1 17.1 0 0 1-17.09 17.06zm5.6-24.6l-5.76 5.77-5.77-5.75a1.28 1.28 0 1 0-1.8 1.8L16 18l-5.76 5.77a1.28 1.28 0 1 0 1.81 1.8l5.77-5.76 5.77 5.75a1.28 1.28 0 0 0 1.8-1.8L19.63 18l5.76-5.77a1.28 1.28 0 1 0-1.8-1.8z" fill="#FFF" fill-rule="evenodd" fill-opacity=".85"/></svg>');
      background-size: contain;
      width: 36px;
      height: 36px;
    }
  }
}
</style>
