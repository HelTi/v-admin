<template>
       <footer class="main-footer" id="footer">
           <p>footer</p>
       </footer>
</template>
<script>
    export default {
        name:'footerbar',
        data(){
            return{
                msg:'footerbar'
            }
        },
        methods:{
            goRouter(index){
               switch(index){
                   case 1:
                   this.$router.push({name:'index'})
                   break;
                   case 2:
                   this.$router.push({name:'about'})
                   break;
               }
            }
        }
    }
</script>

<style lang="css" scoped>
    
</style>