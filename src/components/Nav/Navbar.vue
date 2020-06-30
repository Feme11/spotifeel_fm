<template>
    <b-navbar class="navbar is-dark" role="navigation" aria-label="main navigation">
        <template slot="brand">
                <img
                    src="@/assets/img/spotifeel.png"
                    width="170" 
                    alt="Spotifeel-logo"
                >
        </template>
        <template slot="start">
            <b-navbar-item tag="router-link" :to="{ path: '/buscarfavoritos' }" href="#">
                Busca tus Favoritos
            </b-navbar-item>
            <b-navbar-item tag="router-link" :to="{ path: '/feel' }" href="#">
                Feel
            </b-navbar-item>
        </template>

        <template slot="end">
            <b-navbar-item tag="router-link" :to="{ path: '/login' }"  href="#">
                Ingresar
            </b-navbar-item>
            <!--<b-navbar-item tag="router-link" :to="{ path: '/signup' }"  href="#">
                Registrate
            </b-navbar-item>-->
        </template>
    </b-navbar>
</template>
<script>
export default {
    name: 'Navbar',
}
</script>