<template>
    <div class="card">
        <div class="card-image">
            <figure class="image is-4by3">
            <img :src="img" :alt="album">
            </figure>
        </div>
        <div class="media-content">
            <p class="title is-5">{{title}}</p>
            <P class="title is-6">{{name}}</P>
        </div>
        <audio controls>
            <source :src="preview" type="audio/mpeg">
        </audio>    
        <b-button type="is-primary" expanded @click="addFavs">Agregar a Favoritos</b-button>  
    </div>    
</template>
<script>
export default {
    name: 'Buscador',
    props: [ "id", "title", "img", "album", "name", "preview"],
    methods: {
        addFavs() {
            let favorito = {
                id: this.id,
                title: this.title,
                img: this.img,
                album: this.album,
                name: this.name,
                preview: this.preview,
            }
            this.$store.dispatch('set_favoritos' , favorito)
        }
    },
}
</script>

<style>
.titulo-h1{
    padding-top: 15px;;
    text-align: center;
    color: #101010;
}
.container{
    padding: 20px;
}
.card{
    margin: 5px;
    background-color: #f1f3f4;
}
.media-content {
    padding-top: 5px;
}
.title.is-5 {
    margin-bottom: 5px;
}
.button {
    border-radius: 0;
}
</style>