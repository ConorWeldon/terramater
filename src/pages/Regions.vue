<template>
  <div class="background-c">
    <div class="">
      <div class="search-box center">
        <input type="text" v-model="term" v-on:keyup.enter="searchCountries()" />
        <b-button
          class="float-end"
          variant="outline-success"
          @click="searchCountries()"
          >Search</b-button
        >
      </div>
    </div>

<div class="">
    <b-card-group class="d-flex justify-content-center">
      <div class="boxes">
        <h1 class="title">Europe</h1>
            <CountryViewer
              v-for="country in europes"
              :key="country.ccn3"
              :country="country"
            />
      </div>

      <div class="boxes">
        <h1 class="title">Asia</h1>
            <CountryViewer
              v-for="country in asia"
              :key="country.ccn3"
              :country="country"
            />
      </div>

      <div class="boxes">
        <h1 class="title">Africa</h1>
            <CountryViewer
              v-for="country in africa"
              :key="country.ccn3"
              :country="country"
            />
      </div>

      <div class="boxes">
        <h1 class="title">America</h1>
            <CountryViewer
              v-for="country in america"
              :key="country.ccn3"
              :country="country"
            />
      </div>
    </b-card-group>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import CountryViewer from "@/components/CountryViewer";
// const REST_URL = "https://restcountries.com/v3.1/";

export default {
  name: "Regions",
  components: {
    CountryViewer,
  },
  data() {
    return {
      europes: [],
      africa: [],
      asia: [],
      america: [],
    };
  },
  mounted() {
    
    axios
        .get("https://restcountries.com/v3.1/region/europe")
        .then((response) => {
          console.log(response.data);
          this.europes = response.data;
        })
        .catch((error) => console.log(error));

    axios
        .get("https://restcountries.com/v3.1/region/asia")
        .then((response) => {
          console.log(response.data);
          this.asia = response.data;
        })
        .catch((error) => console.log(error));

    axios
        .get("https://restcountries.com/v3.1/region/africa")
        .then((response) => {
          console.log(response.data);
          this.africa = response.data;
        })
        .catch((error) => console.log(error));

    axios
        .get("https://restcountries.com/v3.1/region/america")
        .then((response) => {
          console.log(response.data);
          this.america = response.data;
        })
        .catch((error) => console.log(error));
    },
  
  methods: {

  }
}
</script>

<style>
.boxes {
  text-align: center;
  color: #000000;
  width: 22rem;
  margin: 50px 30px 0px 30px;
}

/* *{
  overflow: visible !important;
} */

.background-c {
  background-color: black;
}
</style>

