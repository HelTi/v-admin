<template>
    <div class="info-box">
        <span class="info-box-icon" :class="iconBgcolor">
            <i :class="boxIcon"></i>
        </span>
        <div class="info-box-content">
            <span class="info-box-text">{{boxText}}</span>
            <span class="info-box-number">{{boxNumber}}</span>
        </div>
    </div>
</template>
<script>
    export default {
        name: 'infobox',
        data() {
            return {

            }
        },
        props:['boxIcon','boxText','boxNumber','iconBgcolor'],
        methods: {}
    }
</script>
<style lang="scss">
    @import "../../styles/color";
    .bg-aqua{
        background-color:#00c0ef !important;
    }
    .bg-red{
        background-color:#dd4b39 !important;
    }
    .bg-green{
        background-color:#00a65a !important;
    }
    .bg-yellow{
        background-color:#f39c12 !important;
    }
    .info-box {
        display: block;
        min-height: 90px;
        background: #ffffff;
        width: 100%;
        box-shadow: 0 1px 1px rgba(0, 0, 0, 0.1);
        border-radius: 2px;
        margin-bottom: 15px;

        .info-box-icon {
            display:block;
            width:90px;
            height: 90px;
            line-height:90px;
            float:left;
            text-align: center;
            font-size:45px;
            background: rgba(0,0,0,0.2);
            color:#ffffff;
        }
        .info-box-content{
            padding:5px 10px;
            margin-left: 90px;
            .info-box-text{
                text-transform: uppercase;
                display: block;
                font-size:14px;
                white-space: nowrap;
                overflow: hidden;
                text-overflow: ellipsis;
            }
            .info-box-number{
                display: block;
                font-weight: bold;
                font-size: 18px;
            }
        }

    }

</style>