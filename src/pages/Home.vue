<template>
  <div class="">
        <div class="d-flex justify-content-center">
            <img class="title-img" src="../assets/images/TerraMater.png" alt="">
        </div>

        <h1 class="subTitle d-flex justify-content-center">Terra Mater Terra Mater Terra Mater Terra Mater</h1>

        <router-link :to="{ name: 'countries' }">
          <div class="d-flex justify-content-center">
            <div class="explore-box">
                <h2 class="explore-text">Explore More</h2>
            </div>
          </div>
        </router-link>

        <router-link :to="{ name: 'solarsystem' }">
          <div class="d-flex justify-content-center">
              <h2 class="explore-subText">Connect as guest</h2>
          </div>
        </router-link>

        <!-- PLANETS -->
        <img class="earth img-fluid" src="../assets/images/earth-trial.png" alt="">
        <img class="moon" src="../assets/images/Moon-trial.png" alt="">
        <img class="mars" src="../assets/images/Mars-trial.png" alt="">

        <!-- BACKGROUND -->
        <img class="lines" src="images/lines.png" alt="">
        <img class="background" src="../assets/images/Space-Background.png" alt="">
    </div>
</template>

<script>

export default {
  name: "home",
  components: {
  },
};
</script>

<style scoped>

.hero {
  text-align: center;
  color: #74c69d;
  font-weight: lighter;
  letter-spacing: 1px;
}
.searchtext{
    color: #74c69d;
  font-size: 18px;
}

a:link {
  text-decoration: none;
}

a:visited {
  text-decoration: none;
}

a:hover {
  text-decoration: underline;
  color: #000000;
}

a:active {
  text-decoration: underline;
}
</style>