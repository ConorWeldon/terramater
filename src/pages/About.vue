<template>
  <div class="about">
    <b-container>
      <b-row>
        <b-col class="greentext">
          <h1>This is the About Page</h1>
          <p>
            This page is used to show that I can use the router.js package and
            can trasnsition and link pages without the use of a href
          </p>
          <b-img
            center
            src="https://images.unsplash.com/photo-1627199219038-e8263f729e3d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1631&q=80"
            fluid
            alt="Responsive image"
          >
          </b-img>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>

export default {
  name: "about",
};
</script>

<style scoped>
.greentext {
  color: #74c69d;
}
</style>