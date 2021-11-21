<template>
  <div class="home">
    <newsfeed></newsfeed>
  </div>
</template>

<script>
import Newsfeed from "@/components/Newsfeed";

export default {
  name: "Home",
  components: { Newsfeed },
  props: ["postList"],
};
</script>
