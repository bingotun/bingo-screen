


<template>
  <!-- <img alt="Vue logo" src="./assets/logo.png" /> -->
  <a-config-provider :locale="locale">
    <router-view></router-view>
  </a-config-provider>
</template>
<script setup>
import zhCN from 'ant-design-vue/es/locale/zh_CN';
import dayjs from 'dayjs';
import 'dayjs/locale/zh-cn';
dayjs.locale('zh-cn');
const locale = zhCN
</script>
<style>
@import "./assets/style/index.scss";
@import "./assets/style/reset.css";
</style>
