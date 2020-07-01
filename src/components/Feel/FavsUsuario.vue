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
    </div>    
</template>

<script>
import Firebase from "firebase"
import axios from "axios"
import { mapState } from "vuex"
export default {
    name: "FavsUsuario",
      computed: {
        ...mapState(["favs"])
        },
}
</script>