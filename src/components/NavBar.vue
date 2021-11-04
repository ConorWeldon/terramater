<template>
  <div>
    <b-nav class="navbar">
      <b-nav-item class="h1" active>
        <router-link :to="{ name: 'home' }">Hellow World</router-link></b-nav-item>
      <div class="d-flex justify-content-end">
        <b-nav-item>
          <router-link :to="{ name: 'countries' }">Countries</router-link>
          </b-nav-item>
        <b-nav-item>
          <router-link :to="{ name: 'about' }">About</router-link></b-nav-item>
        <b-nav-item>
          <router-link :to="{ name: 'contact' }">Contact</router-link></b-nav-item>
      </div>
    </b-nav>
  </div>
</template>

<script>
export default {
  name: "NavBar",
};
</script>

<style scoped>
.navbar {
  padding: 10px;
  background: #d8f3dc;
  text-decoration-line: none;
}

.h1 {
  font-size: 36px;
}
.links {
  align-content: flex-end;
}

ul.nav li a,
ul.nav li a:visited {
  color: #74c69d !important;
      text-decoration-line: none;

}

ul.nav li a:hover,
ul.nav li a:active {
  color: #2D6A4F !important;
      text-decoration-line: none;

}

ul.nav li.active a {
  color: #74c69d !important;
      text-decoration-line: none;

}
</style>