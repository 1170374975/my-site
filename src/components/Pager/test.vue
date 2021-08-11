<template>
  <div>
      <Pager 
        :current="current" 
        :total="total" 
        @pageChange="handlePageChange($event)" 
      />
  </div>
</template>

<script>
import Pager from './index'
export default {
    components: {
        Pager
    },
    data(){
        return {
            current: 1,
            total: 304
        }
    },
    methods: {
        handlePageChange(newPage){    
            console.log(newPage)  
            this.current = newPage
        }
    }
}
</script>

<style>

</style>