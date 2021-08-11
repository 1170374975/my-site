<template>
  <img class="avatar-container"
    :src="url" 
    :style="{width: size + 'px', height: size + 'px'}">
</template>

<script>
export default {
    props: {
        url: {
            type: String,
            required: true
        },
        size: {
            type: Number,
            default: 150
        }
    }
}
</script>

<style scoped>
.avatar-container{
    border-radius: 50%;
    display: block;
    /* 
    object-fit如何去适应指定容器的高度与宽度
    cover:	保持原有尺寸比例。但部分内容可能被剪切。
    */
    object-fit: cover;
}
</style>