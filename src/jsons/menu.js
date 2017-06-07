/**
 * Created by Administrator on 2017/5/18 0018.
 */
export default [
    {
        title: '图表',
        icon:'fa fa-pie-chart',
        show:true,
        treeview: [
            {'title': 'ChartJS', 'rt_name': 'chartjs','rt_parent':'图表'},
            {'title': 'Echart', 'rt_name': 'echart','rt_parent':'图表'}
        ]
    },
    {
        title: 'UI',
        show:false,
        icon:'fa fa-laptop',
        treeview: [
            {title: 'Buttons','rt_name':'stuinfo','rt_parent':'UI'},
            {title: 'Sliders','rt_parent':'UI'},
            {title: 'Timeline','rt_parent':'UI'},
            {title: 'Modals','rt_parent':'UI'}
        ]
    },
    {
        title: '表单',
        show:false,
        icon:'fa fa-edit',
        treeview: [
            {title: 'Form','rt_parent':'表单'},
            {title: 'Editors','rt_parent':'表单'}
        ]
    },
    {
        title:'表格',
        show:false,
        icon:'fa fa-table',
        treeview: [
            {title:'element表格','rt_name':'etable','rt_parent':'表格'},
            {title:'bootstrap表格','rt_name':'btable','rt_parent':'表格'}
        ]

    }
]
