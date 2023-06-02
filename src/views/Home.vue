<template>
      <!-- <input type="number" v-model.lazy="fontSize">
    <h1 :style="{fontSize:fontSize+'px'}">testing</h1>

    <div :class="{active:isActive,disactive:!isActive}" @mouseover="changeColor()" @mouseleave="changeColor()"></div>

    <h1>hello {{ name }} {{ lastName }} {{ age }} randomNum: {{ random }}</h1>
    <button @click="randomNumber()">click me</button>

    <h2>developed with love:</h2>
    <p :class="{red:isActiveH}" :style="{fontSize:'50px'}">&#9829</p>
    
    <ul v-for="st in students">
      <li v-if="st.isActive">{{ st.name }}</li>
    </ul> -->

<body>

  <header>
    <div  style="display: flex; justify-content: center;">
      <Menubar :model="navbar" style="width:40rem; justify-content: center;"/>
    </div>
  </header>
  
    <div style="display: flex; justify-content:center;">
        <DataTable  :value="forcasts" dataKey="dt" tableStyle="max-width: 50rem;" paginator="true" paginatorPosition="top" :rowsPerPageOptions="[5,10,20]" :rows=10>
        <Column field="dt_txt" header="date and time"></Column>
        <Column field=main.temp header="temp"></Column>
        <Column field=main.feels_like header="feels like"></Column>
        <Column field=weather.0.main header="weather"></Column>
        <Column field=weather.0.description header="details"></Column>
        <Paginator rows="10"/>
      </DataTable>
    </div>
</body>
</template>

<script>
import { onMounted } from 'vue';
import axios from 'axios';
import Button from 'primevue/button';
import { RouterView } from 'vue-router';

export default {
  data() {
    return {
      name: 'benyamin',
      lastName: 'larian',
      age: 20,
      random: null,
      isActive: true,
      isActiveH: true,
      fontSize: 24,
      students: [{ id: 1, name: 'ben', isActive: true }, { id: 2, name: 'notben', isActive: false }],
      today: null,
      forcasts: [],
      navbar: [
        { label: 'Home', to: '/' },
        { label: 'Page one' },
        { label: 'Search', to: 'Search' }
      ]


    };
  },




  computed: {
  },

  methods: {

    randomNumber() {
      this.random = Math.random()
    },
    changeColor() {
      this.isActive = !this.isActive
    },

    getData() {
      axios.get('https://api.openweathermap.org/data/2.5/forecast?q=Qom&appid=4458e02c4ca6b15c7b3469d370dd3931')
        .then(res => { this.forcasts = res.data.list })
    }

  },

  mounted() {
    this.getData(),
      setInterval(() => this.isActiveH = !this.isActiveH
        , 1000)
  },



}

</script>

<style>

.active {
  background-color: black;
  width: 100px;
  height: 100px;
}

.disactive {
  background-color: red;
  width: 100px;
  height: 100px;
}

.red {
  color: red;
}

.aqua {
  background-color: aqua;
}
</style>