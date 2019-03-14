<template>
    <div class="cm_home_bg">
        <div>
            <d-player :options="options"
              @play="play"
              ref="player">
            </d-player>
        </div>
    </div>
</template>
<script>
import VueDPlayer from 'vue-dplayer'
import 'vue-dplayer/dist/vue-dplayer.css'
let dataUrl = require('@/assets/banch.mp4')
let pic = require('@/assets/video_start.jpg')
export default {
    components: {
        'd-player': VueDPlayer
    },
    data() {
        return {
            options: {
                video: {
                    // url: '/static/banch.mp4',
                    url: dataUrl,
                    pic: pic
                },
                autoplay: false
                // contextmenu: [
                //     {
                //         text: 'GitHub',
                //         link: 'https://github.com/MoePlayer/vue-dplayer'
                //     }
                // ]
            },
            player: null
        }
    },
    methods: {
        play() {
            console.log('play callback')
        }
    },
    mounted() {
        // const player = this.$refs.player.dp
        // player.play()
        // setTimeout(() => {
        //     player.pause()
        // }, 2000)
    }
}
</script>
<style lang="scss">
    .cm_home_bg{
        height: 100vh;
        background: url('../../assets/a1.jpeg') fixed
    }
</style>
