<template>
  <div>
    <div class="bottom-marg">
        <!-- <img class="country-background" src="../assets/images/Ireland.png"> -->
        <img class="country-background" style="height: 55.729166666666664vw; width: auto; max-height: 1903px !important;" :src=this.pictures>

        <!-- https://live.staticflickr.com/{server-id}/{id}_{secret}_{size-suffix}.jpg -->
        <!-- <img class="country-background" src="https://live.staticflickr.com/{{ photos.photo[Object.keys(photos.photo)[0]].server }}/{{ photos.photo[Object.keys(photos.photo)[0]].id }}_{{ photos.photo[Object.keys(photos.photo)[0]].secret }}.jpg">; -->
        <!-- <img :src=this.pictures> -->

        <div class="margin-country">
            <h1 class="country-title" style="max-width: 1200px;">{{ $route.params.country }}</h1>
            <h1 class="country-subTitle">{{ country.subregion }}</h1>
            <h1 class="country-bio">The Republic of Ireland is off the coast of England and Wales. Dubbed the "Emerald Isle” for its lush landscape, the country is dotted with castles like medieval Cahir Castle.</h1>
        </div>
    </div>

    <img class="country-img" src="../assets/images/capital.png">

    <div class="margin-capital">
        <h1 class="country-capital" style="max-width: 450px;">{{ country.capital.join(', ') }},<br>{{ $route.params.country }} Capital</h1>
    </div>

    <div class="black-box">
        <h1 class="country-explore">Explore</h1>
    </div>

    <div class="c-marg center">
      <b-row class="header">
          <b-col>
            <h1>{{ $route.params.country }}</h1>
            <img :src="country.flags.png" />
          </b-col>
          
        </b-row>
        <b-row>
          <b-col>
            <!-- All my Params -->
            <h3>{{ $route.params.country }}</h3>
            <h4>Country Offical Name: {{ country.name.offical }}</h4>
            <h4>Region: {{ country.region }}</h4>
            <!-- TESTING FOR MY IMAGES -->
            <h4>Image: https://live.staticflickr.com/{{ photos.photo[Object.keys(photos.photo)[0]].server }}/{{ photos.photo[Object.keys(photos.photo)[0]].id }}_{{ photos.photo[Object.keys(photos.photo)[0]].secret }}.jpg</h4>
            <h4>Sub-Region: {{ country.subregion }}</h4>
            <h4>Population: {{ country.population }}</h4>
            <h4>Capital City: {{ country.capital.join(', ') }},<br>{{ $route.params.country }}</h4>
            <h4>Languages: {{Object.values(country.languages).join(', ')}}</h4> <!-- join gets rid of brackets -->
            <h4>Currency: {{ country.currencies[Object.keys(country.currencies)[0]].name}} Symbol: {{ country.currencies[Object.keys(country.currencies)[0]].symbol}}</h4> <!-- Going inside its subgroups which gets rid of brackets -->
          </b-col>
        </b-row>
      </div>
  </div>
</template>

<script>
import axios from "axios";


const api_key = "d91b635db03fce33c29bcf919a3d12ff";


export default {
  name: "SingleCountries",
  components: {},
  data() {
    return {
      country: [],
      photos: [],
      // picture,
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
  
  axios
      .get(
        `https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${api_key}&tags=${this.$route.params.country}&format=json&nojsoncallback=1&per_page=1`
      )
      .then((responseTwo) => {
        console.log(responseTwo.data);
        this.photos = responseTwo.data.photos;
        this.pictures = "https://live.staticflickr.com/"+ responseTwo.data.photos.photo[Object.keys(responseTwo.data.photos.photo)[0]].server +"/"+ responseTwo.data.photos.photo[Object.keys(responseTwo.data.photos.photo)[0]].id +"_"+ responseTwo.data.photos.photo[Object.keys(responseTwo.data.photos.photo)[0]].secret +"_b.jpg"
        console.log(this.pictures);
      })
      .catch((error) => console.log(error));
  },
 };
 
</script>

<style>

*{ 
  overflow: visible;
}

.c-marg {
  color: black;
  margin-top: 200px;
}

body {
  background-color: white !important;
}
</style>
