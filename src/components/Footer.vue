<template>
  <footer>
    <div class="contact-info">
      <div class="contact-title">
        <router-link to="/">
          <img
            src="@/assets/post-its.png"
            alt="Page logo of Post-it notes"
            width="64"
            height="64"
          />
        </router-link>
        <h2>Homework 3</h2>
      </div>
      <p>Nov 2021 by Rasmus Lääne, Maiko Mõtsar, Janeli Õun</p>
    </div>
    <div class="nav">
      <h5>Links:</h5>
      <div class="links">
        <router-link to="/">Home</router-link>
        <router-link to="/about">About</router-link>
        <router-link to="/contact">Contact</router-link>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: "pageFooter",
};
</script>

<style scoped>
footer {
  background-color: #063662;
  display: flex;
  left: 0;
  right: 0;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: center;
  padding: 16px 24px 80px 24px;
  color: #efefef;
}

.contact-title {
  display: flex;
  left: 0;
  right: 0;
  flex-flow: row nowrap;
  align-items: center;
}

p {
  padding-left: 80px;
  max-width: 200px;
  line-height: 130%;
}

img {
  padding-right: 16px;
}

.nav {
  padding-top: 24px;
  display: flex;
  left: 0;
  right: 0;
  flex-flow: row nowrap;
}

h5 {
  line-height: 200%;
  padding-right: 16px;
  font-weight: 400;
}

.links {
  display: flex;
  left: 0;
  right: 0;
  flex-flow: column nowrap;
  width: 15vw;
}

a {
  color: #4b9cfa;
  text-decoration: none;
  line-height: 200%;
}

a:hover{
  color: #bbdbff;
}
</style>
