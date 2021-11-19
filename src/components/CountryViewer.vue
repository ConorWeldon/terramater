<template>
  <b-col class="padding rounded center">
    <div class="card-header head-color center">{{ country.region }}</div>
    <div class="card-body">
      <div class="center">
        <img :src="country.flags.png" width="100%">
      </div>
      <h5 class="card-titl c-black center">
        <router-link :to="{name: 'singlecountries',params: { country: country.name.official },}">
          {{ country.name.common }}</router-link>
      </h5>
      <p class="card-text c-black center"><b>Capital: </b>{{ country.capital[0] }}<br><b>Population:
        </b>{{ country.population }}</p>
    </div>
  </b-col>
</template>

<script>
export default {
  name: "CountryViewer",
  props: {
    country: Object,
  },
};
</script>

<style>

.center {
  text-align: center;
}

.padding {
  margin-top: 50px !important;
  margin-left: 30px;
  background-color: #ffffff;
}

.head-color {
  background-color: #393E46 !important;
  color: white;
  font-size: 1.5rem;
}

.c-black {
  color: #393E46;
  font-size: 2.5vh;
}
* {
  overflow: visible;
}

h6, .h6, h5, .h5, h4, .h4, h3, .h3, h2, .h2, h1, .h1 {
  line-height:normal !important;
}
</style>
