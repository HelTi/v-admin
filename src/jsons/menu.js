/**
 * Created by Administrator on 2017/5/18 0018.
 */
export default [
    {
        title: '图表',
        icon:'fa fa-pie-chart',
        show:true,
        treeview: [
            {'title': 'ChartJS', 'rt_name': 'chartjs'},
            {'title': 'Echart', 'rt_name': 'echart'}
        ]
    },
    {
        title: 'UI',
        show:false,
        icon:'fa fa-laptop',
        treeview: [
            {title: 'Buttons','rt_name':'stuinfo'},
            {title: 'Sliders'},
            {title: 'Timeline'},
            {title: 'Modals'}
        ]
    },
    {
        title: '表单',
        show:false,
        icon:'fa fa-edit',
        treeview: [
            {title: 'Form'},
            {title: 'Editors'}
        ]
    },
    {
        title:'表格',
        show:false,
        icon:'fa fa-table',
        treeview: [
            {title:'简单表格'},
            {title:'数据表格'}
        ]

    }
]
