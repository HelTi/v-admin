<template>
  <div>
    <div class="row">
      <div class="col-md-12">
         <box>
           <h3 slot="header" class="box-title">bootstrap表格</h3>
           <b-table></b-table>
         </box>
      </div>
    </div>
    <div class="row">
      <div class="col-md-12">
        <box border-color="box-success">
          <h3 slot="header" class="box-title">静态表格</h3>
          <div class="row" slot="footer">
            <div class="col-sm-3 col-xs-6">
              <div class="description-block border-right">
                <span class="description-percentage text-green"><i class="fa fa-caret-up"></i> 17%</span>
                <h5 class="description-header">$35,210.43</h5>
                <span class="description-text">TOTAL REVENUE</span>
              </div>
            </div>
            <div class="col-sm-3 col-xs-6">
              <div class="description-block border-right">
                <span class="description-percentage text-yellow"><i class="fa fa-caret-left"></i> 0%</span>
                <h5 class="description-header">$10,390.90</h5>
                <span class="description-text">TOTAL COST</span>
              </div>
            </div>
            <div class="col-sm-3 col-xs-6">
              <div class="description-block border-right">
                <span class="description-percentage text-green"><i class="fa fa-caret-up"></i> 20%</span>
                <h5 class="description-header">$24,813.53</h5>
                <span class="description-text">TOTAL PROFIT</span>
              </div>
            </div>
            <div class="col-sm-3 col-xs-6">
              <div class="description-block">
                <span class="description-percentage text-red"><i class="fa fa-caret-down"></i> 18%</span>
                <h5 class="description-header">1200</h5>
                <span class="description-text">GOAL COMPLETIONS</span>
              </div>
            </div>
          </div>
        </box>
      </div>
    </div>
  </div>
</template>
<script>
  import box from '../../components/Box/box'
  import bTable from '../../components/Table/bTable'
  export default {
    name: 'btable',
    data() {
      return {}
    },
    methods: {},
    components:{box,bTable}
  }
</script>
<style>

</style>
