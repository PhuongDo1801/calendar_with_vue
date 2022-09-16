require('./bootstrap');

// window.Vue = require('vue');

// Vue.component('calendar-component', require('./components/CalendarComponent.vue').default);
import Vue from 'vue';
import CalendarComponent from './components/CalendarComponent.vue';
console.log(123);
const app = new Vue({
    el: '#app',
    component: { CalendarComponent }
});