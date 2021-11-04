<template>
  <div>
    <!-- <h1 class="title">Single Countries</h1> -->
    <!-- <b-container> -->
      <!-- <b-row class="header">
        <b-col>
          <img :src="country.flags.png" />
        </b-col>
        <b-col>
          <h1>{{ $route.params.country }}</h1>
        </b-col>
      </b-row>
      <b-row>
        <b-col>
          <h3>{{ $route.params.country }}</h3>
          <h4>Country Offical Name: {{ country.name.offical }}</h4>
          <h4>Region: {{ country.region }}</h4>
          <h4>Region: {{ country.subregion }}</h4>
          <h4>Population: {{ country.population }}</h4>
          <h4>Capital City: {{ country.capital }}</h4>
          <h4>Languages: {{ country.languages }}</h4>
          <h4>Currency: {{ country.currencies }}</h4>
        </b-col>
      </b-row> -->


    <div class="bottom-marg">
        <img class="country-background" src="../assets/images/Ireland.png">

        <div class="margin-country">
            <h1 class="country-title">{{ $route.params.country }}</h1>
            <h1 class="country-subTitle">{{ country.subregion }}</h1>
            <h1 class="country-bio">The Republic of Ireland is off the coast of England and Wales. Dubbed the "Emerald Isle” for its lush landscape, the country is dotted with castles like medieval Cahir Castle.</h1>
        </div>
    </div>

    <img class="country-img" src="../assets/images/capital.png">

    <div class="margin-capital">
        <h1 class="country-capital">{{ country.capital.join(', ') }},<br>{{ $route.params.country }} Capital</h1>
    </div>

    <div class="black-box">
        <h1 class="country-explore">Explore</h1>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "SingleCountries",
  components: {},
  data() {
    return {
      country: [],
    };
  },
  mounted() {
    axios
      .get(
        `https://restcountries.com/v3.1/name/${this.$route.params.country}?fullText=true`
      )
      .then((response) => {
        console.log(response.data);
        this.country = response.data[0];
      })
      .catch((error) => console.log(error));
  },
};
</script>

<style>

*{ 
  overflow: visible;
}
</style>
