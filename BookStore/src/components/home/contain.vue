<template>
    <div>
       <div class="header">
           <v-header></v-header>  
       </div>
       <div class="side">

       </div>
    </div>
</template>
 
<script>
import header from './header';
export default {
    components:{
      VHeader:header
    },
    data(){
        return {
           userInfo:[]
        }
    },
    created(){
        this.userInfo = this.$route.query;
        this.$store.state.userInfo = this.userInfo;
        console.log(this.$store.state.userInfo )
    }
}
</script>

<style scoped>

</style>
