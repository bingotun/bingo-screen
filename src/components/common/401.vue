<template>
  <div class="errPage-container">
    <a-button class="pan-back-btn" @click="back">
      返回
    </a-button>
    <a-row>
      <a-col :span="12">
        <h1 class="text-jumbo text-ginormous">
          Oops!
        </h1>
        <h2>你没有权限去该页面</h2>
        <h6>如有不满请联系你领导</h6>
        <ul class="list-unstyled">
          <li>或者你可以去:</li>
          <li class="link-type">
            <router-link to="/">
              回首页
            </router-link>
          </li>
        </ul>
      </a-col>
      <a-col :span="12">
        <img :src="errGif" width="313" height="428" alt="Girl has dropped her ice cream.">
      </a-col>
    </a-row>
  </div>
</template>

<script setup>
import ErrGif from '@/assets/401_images/401.gif'
import { useRouter, useRoute } from 'vue-router'
const router = useRouter()
const route = useRoute()
const errGif = ref(ErrGif + '?' + +new Date())
const back = () => {
  if(route.query.noGoBack) {
    router.push({path: './login'})
  }else{
    router.go(-1)
  }
}
</script>

<style lang="scss" scoped>
  .errPage-container {
    width: 800px;
    max-width: 100%;
    margin: 100px auto;
    .pan-back-btn {
      background: #008489;
      color: #fff;
      border: none!important;
    }
    .pan-gif {
      margin: 0 auto;
      display: block;
    }
    .pan-img {
      display: block;
      margin: 0 auto;
      width: 100%;
    }
    .text-jumbo {
      font-size: 60px;
      font-weight: 700;
      color: #484848;
    }
    .list-unstyled {
      font-size: 14px;
      li {
        padding-bottom: 5px;
      }
      a {
        color: #008489;
        text-decoration: none;
        &:hover {
          text-decoration: underline;
        }
      }
    }
  }
</style>
