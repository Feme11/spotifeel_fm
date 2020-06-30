<template>
    <div class="columns">
        <div class="column columna-login">   
            <div class="column has-text-centered">
                <b-field class="label" label="Email">
                    <b-input type="email"
                        placeholder="usuario@correo.com"
                        icon-pack="fas"
                        icon="envelope"
                        maxlength="30">
                    </b-input>
                </b-field>

                <b-field class="label" label="Password">
                    <b-input  type="password"
                    maxlength="30"
                    icon-pack="fas"
                    icon="lock"
                    placeholder="123456">
                    </b-input>
                </b-field>
                <b-button type="is-primary">Ingresar</b-button>
            </div>
        </div>
        <div class="columna-spotifeel column is-two-thirds">
        </div>
    </div>             
</template>
<script>
export default {
    name: 'FormularioSignUp',
}
</script>
<style scoped>
@media screen and (max-width: 600px){
    .columna-spotifeel{
        display: none;
    }
}
</style>