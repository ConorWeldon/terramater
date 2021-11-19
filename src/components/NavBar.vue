<template>
  <nav class="navbar navbar-dark bg-dark navbar-expand-lg navbar-light bg-light">
    <h1 class="navbar-brand" style="padding-left: 45px; font-size: 25px">TERRA MATTER</h1>

    <div class=" space collapse navbar-collapse" id="navbarNavAltMarkup">
      <div class="navbar-nav">
        <router-link :to="{ name: 'home' }">
          <a class="nav-item nav-link active" href="#">Home <span class="sr-only">(current)</span></a>
        </router-link>

        <router-link :to="{ name: 'countries' }">
          <a class="nav-item nav-link" href="#">countries</a>
        </router-link>

        <router-link :to="{ name: 'about' }">
          <a class="nav-item nav-link" href="#">about</a>
        </router-link>

        <router-link :to="{ name: 'contact' }">
          <a class="nav-item nav-link" href="#">contact</a>
        </router-link>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "NavBar",
};

</script>

<style scoped>
/* The navigation bar */
.navbar {
  overflow: hidden;
  background-color: #333;
  position: fixed; /* Set the navbar to fixed position */
  top: 0; /* Position the navbar at the top of the page */
  width: 100%; /* Full width */
  z-index: 10; /* This makes it so its always above the others */
}

/* Links inside the navbar */
.navbar a {
  
  display: block;
  color: #f2f2f2;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
}

/* Change background on mouse-over */
.navbar a:hover {
  background: dimgray;
  color: black;
}

/* Main content */
.main {
  margin-top: 30px; /* Add a top margin to avoid content overlay */
}

.space {
  display: flex;
  justify-content: flex-end;
}
</style>