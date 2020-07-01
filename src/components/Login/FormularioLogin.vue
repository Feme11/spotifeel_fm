<template>
    <div class="columns">
        <div class="columna-spotifeel column is-two-thirds">
        </div>
        <div class="column columna-login">   
            <div class="card">
                <div class="column has-text-centered">
                    <b-field class="label" label="Correo Electrónico">
                        <b-input type="email"
                            placeholder="usuario@correo.com"
                            icon-pack="fas"
                            icon="envelope"
                            maxlength="30"
                            v-model="correo"
                            >
                        </b-input>
                    </b-field>

                    <b-field class="label" label="Contraseña">
                        <b-input  type="password"
                        maxlength="30"
                        icon-pack="fas"
                        icon="lock"
                        placeholder="123456"
                        v-model="password"
                        >
                        </b-input>
                    </b-field>
                    <div class="boton">
                        <b-button type="is-primary" @click="login">Ingresar</b-button>
                    </div>

                    <div class="router-signup">
                    <router-link :to="{ path: '/signup' }"><strong>¿No tienes una cuenta? ¡Pincha aquí!</strong></router-link>
                    </div>
                </div>
            </div>
        </div>
    </div>             
</template>
<script>
import Firebase from 'firebase'
export default {
    name: 'FormularioLogin',
    data() {
        return {
            correo: '',
            password: ''
        }
    },
    methods: {
        login() {
            Firebase
            .auth()
            .signInWithEmailAndPassword(this.correo, this.password)
            .then(
                accept => {
                    this.$router.push('buscarfavoritos')
                },
                reject => {
                    alert('No estás logeado :(')
                }
            )
        }
    },
}
</script>
<style scoped>
@media screen and (max-width: 600px){
    .columna-spotifeel{
        display: none;
    }
}
.columns{
  background-image: url('https://images.pexels.com/photos/2718571/pexels-photo-2718571.jpeg?cs=srgb&dl=almacenamiento-audio-cintas-cintas-de-casete-2718571.jpg&fm=jpg');
    background-size: cover;
    min-height: 95vh;
}
.card{
    margin: 60px 20px 20px 30px;
    border-radius: 15px;
    background-color: #fffffb;
    opacity: 0.7;
}
.card:hover{
    opacity: 1.0;
}
</style>