<template>
    <div class="test-container">
        <ImageLoader :src="src" :placeholder="placeholder" :duration="2000" @load="handleLoaded" />
    </div>
</template>

<script>
import ImageLoader from './'
export default {
    components: {
        ImageLoader
    },
    data(){
        return{
           src: 'https://images.pexels.com/photos/33109/fall-autumn-red-season.jpg?fit=crop&crop=entropy&w=3456&h=2304',
           placeholder: 'https://images.pexels.com/photos/33109/fall-autumn-red-season.jpg?w=100'
        }
    },
    methods: {
        handleLoaded(){
            console.log('ImageLoader组件加载完成，原图已显示')
        }
    }
}
</script>

<style scoped>
.test-container{
    width: 500px;
    height: 400px;
    border: 1px solid;
    margin: 0 auto;
}
</style>