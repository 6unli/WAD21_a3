<template>
  <div id="app">
    <page-header></page-header>
    <router-view></router-view>
    <page-footer></page-footer>
  </div>
</template>

<script>
import pageHeader from "@/components/Header";
import PageFooter from "@/components/Footer";

export default {
  name: "app",
  components: { PageFooter, pageHeader },
};
</script>

<style>
@import "css/reset.css";
@import "https://fonts.googleapis.com/css2?family=PT+Serif:ital,wght@0,400;0,700;1,400;1,700&display=swap";

* {
  font-family: "PT Serif", serif;
}

body {
  background-color: #095ca4;
}
</style>
