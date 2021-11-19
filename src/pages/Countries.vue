<template>
  <div class="background-c" style="padding-bottom: 100px">
    <div class="" style="padding-top: 125px; padding-bottom: 30px">
      <div class="search-box center">
        <input type="text" v-model="term" v-on:keyup.enter="searchCountries()" />
        <b-button style="margin-left: 10px;" variant="outline-success" @click="searchCountries()">Search</b-button>
      </div>
    </div>

    <div class="container-con">
      <h1 class="title text-center">All Countries</h1>
      <b-card-group>
        <b-row cols-sm="4" style="min-width: 120rem !important;" class="d-flex justify-content-center">

          <CountryViewer v-for="country in countries" :key="country.ccn3" :country="country" />
        </b-row>
      </b-card-group>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import NavBar from "../components/NavBar.vue";
import CountryViewer from "@/components/CountryViewer";
const REST_URL = "https://restcountries.com/v3.1/";

export default {
  name: "AllCountries",
  components: {
    CountryViewer,
  },
  data() {
    return {
      countries: [],
      NavBar,
    };
  },
  mounted() {
    axios
      .get("https://restcountries.com/v3.1/all")
      .then((response) => {
        console.log(response.data);
        this.countries = response.data;
      })
      .catch((error) => console.log(error));
  },
  
  methods: {
    searchCountries() {
      if (!this.term) {
        alert("Please enter a country name");
        this.$byToast.toast("Please enter a country name", {
          title: "Warning",
          variant: "danger",
          toaster: "b-toaster-top-center",
          autoHideDelay: 6900,
          solid: true,
        });
        return;
      }
      axios
        .get(`${REST_URL}/name/${this.term}`)
        .then((response) => {
          console.log(response.data);
          this.countries = response.data;
        })
        .catch((error) => console.log(error));
    },
  },
};

// export default {
//   name: 'css',
// };
</script>

<style>
.boxes {
  text-align: center;
  color: #000000;
  width: 22rem;
  margin: 50px 30px 0px 30px;
}

.background-c {
  background-color: black;
  height: 100%;
}

.container {
  background-color: #343a40 !important;
}

* {
    overflow-y:initial !important;
}

body {
  background-color: #000000 !important;
  overflow: visible !important;
}
</style>

