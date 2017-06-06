<template>
    <div class="progress-group">
        <span class="progress-text">{{ptext}}</span>
        <span class="progress-number"><b>{{pNnumber}}</b>/{{pTnumber}}</span>
        <div class="progress">
            <div class="progress-bar" :class="pcolor" role="progressbar" v-bind:style="pstyle"></div>
        </div>
    </div>
</template>
<script>
    export default {
        name: 'progressgroup',
        data() {
            return {

            }
        },
        props:['ptext','pTnumber','pNnumber','pstyle','pcolor'],
        methods: {

        }
    }
</script>
<style lang="scss">

</style>