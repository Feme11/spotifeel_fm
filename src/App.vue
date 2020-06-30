<template>
  <div id="app">
    <Navbar :brand="'Mi Espacio'"/>

    <router-view />
  </div>
</template>
<script>
import Navbar from '@/components/Nav/Navbar'
export default {
  name: 'App',
  components: {
    Navbar,
  }
}
</script>
<style>
 #app{
   font-family: 'Lato', sans-serif;
   background-color:#fffffb ;
 }
</style>
