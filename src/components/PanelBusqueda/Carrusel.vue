<template>
    <section>
        <b-carousel-list
            v-model="values"
            :data="items"
            :arrow="arrow"
            :arrow-hover="arrowHover"
            :items-to-list="perList"
            :repeat="repeat"
            :has-drag="drag"
            :has-grayscale="gray"
            :has-opacity="opacity" 
            />
    </section>
</template>

<script>
export default {
    data() {
        return {
            isActive: true,
            arrow: true,
            arrowHover: true,
            drag: true,
            gray: false,
            opacity: false,
            values: 2,
            perList: 1,
            repeat: true,
            items: [
                {
                    image: 'https://e-cdns-images.dzcdn.net/images/artist/9ea95d6322381399eb5a5d3e5691b146/500x500-000000-80-0-0.jpg'
                },
                {
                    image: 'https://e-cdns-images.dzcdn.net/images/artist/c3cbc4309cf09aec8914784270f194e4/500x500-000000-80-0-0.jpg'
                },
                {
                    image: 'https://e-cdns-images.dzcdn.net/images/artist/22c83631d238c4e21800a75a79c54c61/500x500-000000-80-0-0.jpg'
                },
                {
                    image: 'https://e-cdns-images.dzcdn.net/images/artist/e8d37bdf545b869db5dcb9b6b06e71c0/500x500-000000-80-0-0.jpg'
                },
                {
                    image: 'https://cdns-images.dzcdn.net/images/artist/2e9ec51e69cca1c53b74db5f0727cc8b/500x500-000000-80-0-0.jpg'
                },
                {
                    image: 'https://e-cdns-images.dzcdn.net/images/artist/6c4574118dffc45e38ef7841f625aefb/500x500-000000-80-0-0.jpg'
                },
                {
                    image: 'https://cdns-images.dzcdn.net/images/artist/e6a04d735093a46dcc8be197681d1199/500x500-000000-80-0-0.jpg'
                },
                {
                    image: 'https://e-cdns-images.dzcdn.net/images/artist/e229f43725496f054c2c7db70a5e953d/500x500-000000-80-0-0.jpg'
                },
                {
                    image: 'https://e-cdns-images.dzcdn.net/images/artist/1c25b7dfc483dfdcdd6cfeae74f42d3e/500x500-000000-80-0-0.jpg'
                },
                {
                    image: 'https://e-cdns-images.dzcdn.net/images/artist/0b17b99897d17ceb7027ed57cdbb7044/500x500-000000-80-0-0.jpg'
                },
            ]
        }
    }
}
</script>