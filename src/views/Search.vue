<template>


    <body>
        <div class="searchbox">
                <span class="p-input-icon-left">
                    <span class="p-input-icon-right" style="margin-top: 59%;">
                        <InputText v-model="searched" placeholder="جست و جو کنید" @keypress="getData" class="p-inputtext"/>
                        <i class="pi pi-microphone" @click="voiceSearch()"/>
                    </span>
                    <i class="pi pi-search" @click="getDataClick()" style="padding-top: 29.5%;"/>
                </span>
        </div>
    </body>

</template>

<style scoped>

@font-face {
  font-family: 'Vazirmatn';
  font-style: normal;
  font-weight: 400;
  font-display: swap;
  src: url(https://fonts.gstatic.com/s/vazirmatn/v13/Dxx78j6PP2D_kU2muijPEe1n2vVbfJRklWgzCRWT7lDF.woff2) format('woff2');
  unicode-range: U+0600-06FF, U+0750-077F, U+0870-088E, U+0890-0891, U+0898-08E1, U+08E3-08FF, U+200C-200E, U+2010-2011, U+204F, U+2E41, U+FB50-FDFF, U+FE70-FE74, U+FE76-FEFC;
}
/* latin-ext */
@font-face {
  font-family: 'Vazirmatn';
  font-style: normal;
  font-weight: 400;
  font-display: swap;
  src: url(https://fonts.gstatic.com/s/vazirmatn/v13/Dxx78j6PP2D_kU2muijPEe1n2vVbfJRklWgzCR6T7lDF.woff2) format('woff2');
  unicode-range: U+0100-02AF, U+0304, U+0308, U+0329, U+1E00-1E9F, U+1EF2-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
}
/* latin */
@font-face {
  font-family: 'Vazirmatn';
  font-style: normal;
  font-weight: 400;
  font-display: swap;
  src: url(https://fonts.gstatic.com/s/vazirmatn/v13/Dxx78j6PP2D_kU2muijPEe1n2vVbfJRklWgzCRCT7g.woff2) format('woff2');
  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+0304, U+0308, U+0329, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
 }

body {
    font-family: 'Vazirmatn', sans-serif;
    margin: 0px;
    background-image: url('../assets/t-foz-3NLPLfoLM3I-unsplash.jpg');
    background-size: cover;
    height: 100vh;
    width: 100%;
}

.searchbox {
    display: flex;
    justify-content: center;
    align-items: center;
    direction: rtl;
}

.p-input-icon-left {
  display: flex;
  align-items: center;
}

.p-input-icon-right {
  display: flex;
  align-items: center;
}
.pi-search {
  font-size: 1rem;
  cursor: pointer;
}
.pi-microphone {
    font-size: 1.1rem;
    cursor: pointer;
}


.p-inputtext {
  font-family: 'Vazirmatn',sans-serif;
  opacity: 60%;
  padding-top: 1.1rem ;
  padding-bottom: 1.1rem;
  width: 40rem;
  border: none;
  outline: none;
  box-shadow: none;
}
.p-inputtext:focus{
  opacity: 100%;
  border: none;
  outline: none;
  box-shadow: none;
}

.p-inputtext:hover{
opacity:100%;
border: none;
outline: none;
box-shadow: none;
}

@media (max-width: 768px) {
 .p-inputtext {
    width: 100%; /* reduce width on smaller screens */
  }
}
</style>

<script>
import axios from 'axios';


export default {
    data() {
        return {
            searched: null,
            result: [],
            isListening: false

        }
    },
    methods: {
      getData(e) {
            if (e.key == "Enter" && this.searched) {
                this.$router.push({ name: "Result", query: { "searched": this.searched } })
            }
        },
        getDataClick() {
          if (this.searched){
            this.$router.push({ name: "Result", query: { "searched": this.searched } })
          }
        },

        voiceSearch(){

        } 
    },

}

    ;
</script>