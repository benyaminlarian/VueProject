<template>
    <input type="number" v-model="fontSize">
    <h1 :style="{fontSize:fontSize+'px'}">testing</h1>
    <div :class="{active:isActive,disactive:!isActive}" @mouseover="changeColor()" @mouseleave="changeColor()"></div>
    <h1>hello {{ name }} {{ lastName }} {{ age }} randomNum: {{ random }}</h1>
    <button @click="randomNumber()">click me</button>
</template>

<script>
export default{
  data () {
    return {
      name: 'benyamin',
      lastName: 'larian',
      age: 20,
      random: null,
      isActive: true,
      fontSize: 8,
    };
  },
  methods:{
    randomNumber(){
      this.random=Math.random()
    },
    changeColor(){
      this.isActive = !(this.isActive)
    }
  },
  changeSize(){
    
  }
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


</style>