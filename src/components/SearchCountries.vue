<template>
  <div>
    <b-container>
      <b-row>
        <b-col>
          <b-button pill variant="outline-secondary">
            <b-icon icon="search"></b-icon>
          </b-button>
        </b-col>
        <b-col>
          <p class="searchtext">Search Countries</p>
        </b-col>
        <b-col class="search-box">
          <b-form-input size="sm" class="" placeholder="Search" type="text" v-model="term" v-on:keyup.enter="SearchCountry()"></b-form-input>
        </b-col>
        <b-col>
          <b-button size="sm" class="" type="submit" variant="primary" @click="SearchCountries()">Search</b-button>
        </b-col>
      </b-row>
    </b-container>
    </div>
</template>

<script>
import axios from "axios";
const REST_URL = "https://restcountries.com/v3.1/";
export default {
  name: "SearchCountries",
  data() {
    return {
      countries: [],
    };
  },
  mounted() {},
  methods: {
    searchCountries() {
      if (!this.term) {
        alert("Please enter a search term");
        this.$byToast.toast("Please enter a search term", {
          title: "Warning",
          variant: "danger",
          toaster: "b-toaster-top-center",
          autoHideDelay: 5000,
          solid: true,
        });
        return;
      }
      axios
        .get(`${REST_URL}name/${this.term}`)
        .then((response) => {
          console.log(response.data.data);
          this.countries = response.data.data;
        })
        .catch((error) => console.log(error));
    },
  },
};
</script>
<style>
</style>