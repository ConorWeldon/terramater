<template>
  
      
        <div class="padding rounded">
            <div class="card-header head-color">{{ country.region }}</div>
            <div class="card-body">
              <div class="center">
                <img :src="country.flags.png" width="100%">
              </div>
              <h5 class="card-title"><router-link :to="{name: 'singlecountries',params: { country: country.name.official },}">{{ country.name.common }}</router-link></h5>
              <p class="card-text"><b>Capital: </b>{{ country.capital[0] }}<b>Population: </b>{{ country.population }}</p>
            </div>
        </div>
      <!-- <b-row>
        <b-col class="">
          <b-card-group>
            <b-card class="center">
              <img :src="country.flags.png">
              <p>
              </p>
              <h4>
                <b>Name: </b>
                <router-link :to="{name: 'singlecountries',params: { country: country.name.official },}">{{ country.name.common }}</router-link>
              </h4>
              <p>
                <b>Capital: </b>{{ country.capital[0] }}
              </p>
              <p>
                <b>Population: </b>{{ country.population }}
              </p>
              <hr />
            </b-card>
          </b-card-group>
        </b-col>
      </b-row> -->
 
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
.center{
  text-align: center;
}

.padding {
  margin-top: 50px;
  background-color: #ffffff;
}

.head-color {
  background-color: #393E46 !important;
  color: white;
  font-size: 1.5rem;
}
</style>
