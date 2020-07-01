<template>
    <div>
        <div class="container">
        <div class="columns is-multiline is-mobile is-centered">
            <FavsUsuario
                v-for="(fav, index) in favs" :key="index"
                :id ="fav.id"
                :title="fav.title"
                :img="fav.cover_big"
                :album="fav.album.title"
                :name="fav.artist.name"
                :preview="fav.preview"      
            />
        </div>
        </div>
    </div>
</template>
<script>
import FavsUsuario from '@/components/Feel/FavsUsuario'
import Firebase from "firebase"
import axios from "axios"
import { mapState } from "vuex"
export default {
    name: 'Feel',
    components: {
        FavsUsuario,
    },
        computed: {
        ...mapState(["favs"])
        },
        mounted() {
            this.getFavs();
        },
        methods: {
            async getFavs() {
                await axios
                    .get('https://us-central1-spotifeel-fm.cloudfunctions.net/usuarios/usuarios/' + 
                        Firebase.auth().currentUser.email
                    )
                    .then(data => {
                        let favoritos = data.data.favoritos;
                        this.$store.dispatch("setfavs", favoritos)
                    })
            }
        },
}
</script>