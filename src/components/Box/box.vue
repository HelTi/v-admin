<template>
   <div class="box" :class="borderColor">
       <div class="box-header" >
           <!--<p>boxheader</p>-->
           <slot name="header"></slot>
       </div>

       <div class="box-body">
           <!--<p>boxbody</p>-->
           <slot></slot>
       </div>
       <div class="box-footer">
           <!--<p>boxfooter</p>-->
           <slot name="footer"></slot>
       </div>
   </div>
</template>
<script>
    export default {
        name: 'box',
        data() {
            return {}
        },
        props:['borderColor'],
        methods: {}
    }
</script>
<style lang="scss">
    .box-success{
        border-top-color: #00a65a !important;
    }
    .box-warning{
        border-top-color:#f39c12 !important;
    }
    .box-danger{
        border-top-color:#dd4b39 !important;
    }
    .box-info{
        border-top-color: #00c0ef !important;
    }
    .box{
        position: relative;
        border-radius: 3px;
        background:#ffffff;
        border-top:3px solid #d2d6de;
        margin-bottom: 20px;
        width:100%;
        box-shadow: 0 1px 1px rgba(0,0,0,0.1);
    }
    .box-header{
        color:#444;
        display: block;
        padding:10px;
        position: relative;
        font-size:18px;
        border-bottom: 1px solid #f4f4f4;
        .box-title{
            display: inline-block;
            font-size: 18px;
            margin: 0;
            line-height: 1;
        }
    }
    .box-footer{
        padding:10px 10px 0 10px;
    }

</style>