<template>
  <div class="test-container">
    <div class="item" v-for="type in types" :key="type">
      <Icon :type="type" />
      <label>{{ type }}</label>
    </div>
      
  </div>
</template>

<script>
import Icon, { types } from './index'
export default {
    components: {
        Icon
    },
    data() {
      return {
        types,
      }
    }
}
</script>

<style>
.test-container{
  display: flex;
  justify-content: center;
  margin: 30px auto;
  width: 600px;
  flex-wrap: wrap;
}
.item{
  margin: 1.5em;
  text-align: center;
}

.icon-container{
  display: block;
  color: blueviolet;
  font-size: 50px;
}

</style>