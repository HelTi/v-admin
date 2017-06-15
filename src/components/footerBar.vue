<template>
       <footer class="main-footer" id="footer">
        <p><strong>Copyright © 2017-2018</strong><span class="pull-right">By  <a href="https://github.com/HelTi">HelTi</a></span></p>
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

<style lang="scss" scoped>
      #footer{
         p{
           margin:0;
           padding:6px;
         }
      }
</style>
