<template>
  <section>
    <div class="main-flex-container">
      <div class="flex-items" v-for="post in postList" :key="post.id">
        <div class="flex-items-header">
          <div class="flex-items-avatar">
            <img
              :src="post.avatar"
              :alt="post.username"
              width="32"
              height="32"
            />
            <p>{{ post.username }}</p>
          </div>
          <p>{{ post.time }}</p>
        </div>
        <div class="flex-items-image">
          <img
            :src="post.image"
            alt="user uploaded image"
            width="100%"
            height="auto"
            v-if="post.image"
          />
        </div>
        <div class="flex-items-content">
          <p>{{ post.content }}</p>
          <div class="flex-items-avatar">
            <button @click="post.likes++">&#128077;</button>
            <p>{{ post.likes }}</p>
          </div>
        </div>
      </div>
    </div>
    <button class="reset" :click="ResetLikes">Reset Likes</button>
  </section>
</template>

<script>
export default {
  name: "Newsfeed",
  data: function () {
    return {};
  },
  methods: {
    ResetLikes: function () {
      this.$store.dispatch("ResetLikesAct");
    },
  },
  computed: {
    postList() {
      return this.$store.state.postList;
    },
  },
};
</script>

<style scoped>
.main-flex-container {
  margin: auto;
  background-color: whitesmoke;
  width: 45%;
  display: flex;
  flex-flow: column nowrap;
  padding: 104px 4vw 80px;
}

.flex-items {
  margin: 8px 0;
  border-radius: 8px;
  box-shadow: 0 4px 24px -4px #adb1b7;
}

.flex-items-header {
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: center;
  padding: 12px 16px;
}

.flex-items-avatar {
  display: flex;
  flex-flow: row nowrap;
  justify-content: flex-start;
  align-items: center;
}

.flex-items-avatar > p {
  padding-left: 8px;
}

.flex-items-avatar ~ p {
  color: #adb1b7;
  font-size: 12px;
}

.flex-items-content {
  display: flex;
  flex-flow: column wrap;
  gap: 16px;
  padding: 16px;
}

.flex-items-content > p {
  color: #131c21;
  line-height: 150%;
}

.flex-items-image {
  width: 100%;
  height: auto;
}

button {
  font-size: 20px;
  width: 56px;
  height: 32px;
  background-color: #225791;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.reset {
  width: 104px;
  font-size: 16px;
  margin-bottom: 16px;
  background-color: whitesmoke;
  color: #225791;
  position: fixed;
  z-index: 3;
  right: 40px;
  bottom: 16px;
  box-shadow: 0 16px 24px -8px rgba(19, 28, 33, 0.4);
}

button:hover {
  background: #063662;
  color: whitesmoke;
}

button ~ p {
  color: #225791;
}
</style>
