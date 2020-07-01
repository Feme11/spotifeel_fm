<template>
    <div>
            <div class="container">
      <div class="columns is-multiline is-mobile is-centered">
        <!--<FavUsuario
          v-for="(favorito, index) in favoritos" :key="index"
          :id ="favorito.id"
          :title="favorito.title"
          :img="favorito.album.cover_big"
          :album="favorito.album.name"
          :name="favorito.artist.name"
          :preview="favorito.preview"
          />-->
      </div>
    </div>
    </div>
</template>
<script>
import FavsUsuario from '@/components/Feel/FavsUsuario'
export default {
    name: 'Feel',
    components: {
        FavsUsuario,
    },
}
</script>