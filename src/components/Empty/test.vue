<template>
    <div class="test-container">
        <Empty />
    </div>
</template>

<script>
import Empty from './'
export default {
    components: {
        Empty
    }
}
</script>

<style scoped>
.test-container{
    width: 500px;
    height: 500px;
    border: 1px solid;
    position: relative;
}
</style>