// router.js is the way in which I moved between pages on my website
import Vue from "vue";
import Router from 'vue-router'
import Home from './pages/Home'
import Countries from './pages/Countries'
import About from './pages/About'
import Contact from './pages/Contact'
import SolarSystem from './pages/SolarSystem'
import SingleCountries from './pages/SingleCountries'
import Regions from './pages/Regions'

// Telling it to use my Router
Vue.use(Router)

// Vue router
export default new Router ({
    mode:'history',
    base: process.env.BASE_URL,
    routes:[
        {
            path: '/',
            name: 'home',
            component: Home,
            meta: {
                hideNavbar: true,
               }
        },
        {
            path: '/countries',
            name: 'countries',
            component: Countries
        },
        {
            path: '/about',
            name: 'about',
            component: About
        },        
        {
            path: '/contact',
            name: 'contact',
            component: Contact
        },
        {
            path: '/singlecountries/:country',
            name: 'singlecountries',
            component: SingleCountries
        },
        {
            path: '/solarsystem',
            name: 'solarsystem',
            component: SolarSystem
        },
        {
            path: '/regions',
            name: 'regions',
            component: Regions
        },
    ]
})