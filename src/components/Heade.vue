<template>
   <div class="heade">
       <p>{{msg}}</p>
   </div>
</template>
<script>
    export default {
        name:'Heade',
        data(){
            return{
                msg:'this is heade'
            }
        }
    }
</script>

<style lang="css" scoped>
    .heade p{
        font-color:green;
    }
</style>