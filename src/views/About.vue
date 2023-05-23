<template>
        <header>
        <div class="card relative z-2" style="display: flex; justify-content: center;">
        <Menubar :model="name" style="min-width: 40rem; justify-content: center;"/>
      </div>
    </header>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit</p>
</template>

<script>
export default{
    data(){
        return{

            name: [
                { label: 'Home', to: '/' },
                { label: 'Page one' },
                { label: 'About', to: 'About' }
            ]
        }
    }
}
</script>