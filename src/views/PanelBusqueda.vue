<template>
  <div class="panelbusqueda">
    <Carrusel />
    <h1 class="title is-3 titulo-h1">Busca esa canción o artista que tanto te inspira</h1>
    <div class="column is-three-fifths is-offset-one-fifth">
        <b-input placeholder="Busca esa canción"
            icon="magnify"
            v-model="mostrar"
            v-on:keyup.enter="searchData"
            >
        </b-input>
    </div>
    <div class="has-text-centered">
        <b-button 
        type="is-primary"
        @click="searchData"
        >
            Buscar
        </b-button>
    </div>
    <div class="container">
      <div class="columns is-multiline is-mobile is-centered">
        <Buscador
          v-for="(busqueda, index) in busquedas" :key="index"
          :id ="busqueda.id"
          :title="busqueda.title"
          :img="busqueda.album.cover_big"
          :album="busqueda.album.name"
          :name="busqueda.artist.name"
          :preview="busqueda.preview"
          />  
      </div>
    </div>
    <div class="container">
      <h1 class="title is-3 titulo-h1">Top Ten</h1>
      <div class="columns is-multiline is-mobile is-centered">
        <TopTen
          v-for="(track, index) in tracks" :key="index"
          :id ="track.id"
          :title="track.title"
          :img="track.album.cover_medium"
          :album="track.album.title"
          :name="track.artist.name"
          :preview="track.preview"
          />  
      </div>
    </div>
  </div>
</template>
<script>
import Carrusel from '@/components/PanelBusqueda/Carrusel'
import Buscador from '@/components/PanelBusqueda/Buscador'
import TopTen from '@/components/PanelBusqueda/TopTen'
import axios from 'axios'

export default {
  name: 'PanelBusqueda',
  components: {
    Carrusel,
    Buscador,
    TopTen,  
  },
  data() {
    return {
      tracks: [],
      busquedas: [],
      mostrar : "",
    }
  },
  beforeMount() {
    this.getTracks();
  },
  methods : {
    getTracks() {
      axios.get('https://cors-anywhere.herokuapp.com/https://api.deezer.com/chart/0/tracks')
      .then((res) => {
        this.tracks = res.data.data
        console.log("mostrar Top Ten")
      })
      .catch((error) => {
        console.log(error)
      })
    },
    async searchData() {
      await axios.get(`https://cors-anywhere.herokuapp.com/https://api.deezer.com/search/?q=${this.mostrar}`)
      .then((res) => {
        this.busquedas = res.data.data
        console.log("busqueda de " + this.mostrar)
        this.mostrar = ""
      })
      .catch((error) => {
        console.log(error)
      })
    },

  },


}
</script>
