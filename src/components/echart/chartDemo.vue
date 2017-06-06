<template>
    <div class="echarts">
        <IEcharts :option="bar" @ready="onReady" @click="onClick"></IEcharts>
    </div>
</template>
<script type="text/babel">
    import IEcharts from 'vue-echarts-v3/src/full.vue';
    export default {
        name: 'view',
        components: {
            IEcharts
        },
        props: {
        },
        data: () => ({
            loading: true,
            bar: {
                title: {
                    text: 'Demo',
                    subtext: '纯属虚构',
                    x:'center'
                },
                tooltip: {},
                xAxis: {
                    data: ['Shirt', 'Sweater', 'Chiffon Shirt', 'Pants', 'High Heels', 'Socks']
                },
                yAxis: {},
                series: [{
                    name: 'Sales',
                    type: 'bar',
                    data: [5, 20, 36, 10, 10, 20]
                }]
            }
        }),
        methods: {
            doRandom() {
                const that = this;
                let data = [];
                for (let i = 0, min = 5, max = 99; i < 6; i++) {
                    data.push(Math.floor(Math.random() * (max + 1 - min) + min));
                }
                that.loading = !that.loading;
                that.bar.series[0].data = data;
            },
            onReady(instance) {
                console.log(instance);
            },
            onClick(event, instance, echarts) {
                console.log(arguments);
            }
        }
    };
</script>

<style scoped>
    .echarts {
        width: 600px;
        height: 400px;
    }
</style>