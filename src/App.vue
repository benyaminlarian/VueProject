<template>
    <div :class="{active:isActive,disactive:!isActive}" @mouseover="changeColor()"></div>
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
    };
  },
  methods:{
    randomNumber(){
      this.random=Math.random()
    },
    changeColor(){
      this.isActive = !(this.isActive)
    }
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