<template>
  <div>
    <b-container-fluid> <!-- bootstrap container -->
          <NavBar v-if="!$route.meta.hideNavbar" />  <!-- NavBar component (this stays constant)-->
              <router-view /> <!-- Vue Router component which is the only thing that changes in the page -->
          <Footer v-if="!$route.meta.hideNavbar" /> <!-- Footer component (this stays constant too)-->
    </b-container-fluid>
  </div>
</template>

<script>
// where components are called upon
import NavBar from "@/components/NavBar.vue";
import Footer from './components/Footer.vue';

export default {
  name: "App",
  components: {
    NavBar,
    Footer,
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Be+Vietnam+Pro:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap");
#app {
  font-family: "Be Vietnam", sans-serif;
}
.container{
    background-color: #d8f3dc;
}

</style>