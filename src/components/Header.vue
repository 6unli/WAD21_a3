<template>
  <header>
    <div class="nav">
      <router-link to="/">
        <img
          src="@/assets/post-its.png"
          alt="Page logo of Post-it notes"
          width="40"
          height="40"
        />
      </router-link>
      <div class="search-container">
        <form action="">
          <input type="text" name="search" />
          <button type="submit">Search</button>
        </form>
      </div>
      <div class="links">
        <router-link to="/">Home</router-link> |
        <router-link to="/about">About</router-link> |
        <router-link to="/contact">Contact</router-link>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: "pageHeader",
};
</script>

<style scoped>
.nav {
  background-color: whitesmoke;
  display: flex;
  position: fixed;
  left: 0;
  right: 0;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: center;
  padding: 8px 24px;
  z-index: 2;
  box-shadow: 0 16px 40px -24px rgba(19, 28, 33, 0.4);
}

.nav form {
  display: flex;
  flex-flow: row nowrap;
  width: 45vw;
}

.nav input {
  padding: 6px;
  font-size: small;
  border: 1px solid #d0d0d0;
  flex-grow: 10;
}

.nav a {
  color: #225791;
  text-decoration: none;
  display: inline;
}

.nav a:hover {
  color: #007bff;
}

.nav a.router-link-exact-active {
  color: #007bff;
  text-decoration: underline;
}

button {
  color: white;
  background: #225791;
  font-size: small;
  border: none;
  padding: 4px 24px;
  border-radius: 0 4px 4px 0;
  cursor: pointer;
}

button:hover {
  background: #063662;
}
</style>
