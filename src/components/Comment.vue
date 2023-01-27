<template>
  <div class="comment-box">
    <div v-if="isSignIn === 0" class="signInText">Login and Comment</div>
    <div v-else class="input-box">
      <div class="input-top">
        <div class="img">
          <img class="avatar" src="" alt="avatar" />
          <p class="username">user</p>
        </div>
        <div class="text">
          <textarea class="comment-content" v-model="submitText"></textarea>
        </div>
      </div>
      <div class="input-bottom">
        <a href="javascript:void(0)" class="submit">Comment</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isSignIn: 1,
    };
  },
};
</script>

<style lang="scss" scoped>
.comment-box {
  padding: 50px 30px;
  -webkit-box-shadow: 0 0px 3px rgba(0, 0, 0, 0.157),
    0 0px 3px rgba(0, 0, 0, 0.227);
  box-shadow: 0 0px 3px rgba(0, 0, 0, 0.157), 0 0px 3px rgba(0, 0, 0, 0.227);
  background: #fafafa;
  .signInText {
    text-align: center;
    color: #3b99fc;
    font-size: 18px;
    cursor: pointer;
  }
}
.input-box {
  .input-top {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    .img {
      width: 100px;
      text-align: center;
      .avatar {
        display: inline-block;
        width: 60px;
        height: 60px;
        border-radius: 50%;
        border: 1px solid #000;
      }
      .username {
        color: #3b99fc;
        cursor: pointer;
        word-break: break-all;
      }
    }
    .text {
      -webkit-box-flex: 1;
      -ms-flex: 1;
      flex: 1;
      textarea {
        width: 98%;
        margin-left: 2%;
        min-height: 90px;
        font-size: 14px;
        border: 1px solid #ddd;
        border-radius: 6px;
        padding: 20px;
        box-sizing: border-box;
      }
    }
  }
  .input-bottom {
    margin-top: 20px;
    overflow: hidden;
    .submit {
      float: right;
      width: 100px;
      height: 50px;
      line-height: 50px;
      background: rgba(0, 0, 0, 0.2);
      text-align: center;
      border-radius: 6px;
      color: #fff;
      &:hover {
        background: rgba(0, 129, 255, 0.7);
      }
    }
  }
}
</style>
