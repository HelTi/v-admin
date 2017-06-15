<template>
    <div class="table-responsive btable">
        <table class="table data-table table-hover table-bordered" style="min-width: 700px;">
            <thead>
            <tr>
                <th><input type="checkbox" class="checkedAll"></th>
                <th>校区</th>
                <th>科目</th>
                <th>时间段</th>
                <th>班次类型</th>
                <th>教室</th>
                <th>教师</th>
                <th>学生人数</th>
                <th>星期</th>
                <th>操作</th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="student in students">
                <td><input type="checkbox" :value="student.uid" v-model="checkboxModel"></td>
                <td>{{student.campusName}}</td>
                <td>{{student.subject}}</td>
                <td>{{student.timeduration}}</td>
                <td>{{student.courseType}}</td>
                <td>{{student.classroomName}}</td>
                <td>{{student.teacherCodeName}}</td>
                <td>{{student.studentNumber}}</td>
                <td>{{student.weekdays}}</td>
                <td>
                    <button @click="editFun(student)" type="button" class="btn btn-xs btn-success" data-toggle="tooltip"
                            data-placement="top" title="" data-original-title="编辑"><i
                            class="fa fa-coffee text-navy"></i>编辑
                    </button>
                    <button @click="deleteData(student.uid)" type="button" class="btn btn-xs btn-danger" data-toggle="tooltip"
                            data-placement="top" title="" data-original-title="删除"><i class="fa fa-recycle"></i>删除
                    </button>
                </td>
            </tr>
            </tbody>
        </table>
        <!--dialog-->
        <el-dialog title="收货地址" :visible.sync="dialogFormVisible">
            <el-form :model="editForm">
                <el-form-item label="校区" :label-width="formLabelWidth">
                    <el-input v-model="editForm.campusName" auto-complete="off"></el-input>
                </el-form-item>
                <el-form-item label="科目" :label-width="formLabelWidth">
                    <el-input v-model="editForm.subject" auto-complete="off"></el-input>
                </el-form-item>
                <el-form-item label="时间段" :label-width="formLabelWidth">
                    <el-time-picker
                            is-range
                            v-model="editForm.dateValue"
                            placeholder="选择时间范围">
                    </el-time-picker>
                </el-form-item>
                <el-form-item label="班次类型" :label-width="formLabelWidth">
                    <el-input v-model="editForm.courseType" auto-complete="off"></el-input>
                </el-form-item>
                <el-form-item label="教室" :label-width="formLabelWidth">
                    <el-input v-model="editForm.classroomName" auto-complete="off"></el-input>
                </el-form-item>
                <el-form-item label="教师" :label-width="formLabelWidth">
                    <el-input v-model="editForm.teacherCodeName" auto-complete="off"></el-input>
                </el-form-item>
                <el-form-item label="学生人数" :label-width="formLabelWidth">
                    <el-input v-model="editForm.studentNumber" auto-complete="off"></el-input>
                </el-form-item>
                <el-form-item label="星期" :label-width="formLabelWidth">
                    <el-input v-model="editForm.weekdays" auto-complete="off"></el-input>
                </el-form-item>
                <el-form-item label="活动区域" :label-width="formLabelWidth">
                    <el-select v-model="editForm.region" placeholder="请选择活动区域">
                        <el-option label="区域一" value="shanghai"></el-option>
                        <el-option label="区域二" value="beijing"></el-option>
                    </el-select>
                </el-form-item>
            </el-form>
            <div slot="footer" class="dialog-footer">
                <el-button @click="editFormCancel">取 消</el-button>
                <el-button type="primary" @click="editFormSave">确 定</el-button>
            </div>
        </el-dialog>
    </div>
</template>
<script>
    import mookData from '../../jsons/tableData'
    export default {
        name: 'btable',
        data() {
            return {
                subjectSl: '',
                gradeSl: '',
                timeSl: '',
                weekdaySl: '',
                status: '0',
                teachername: '',
                checkboxData: [],//select集合/初始值为全选。
                size: 10,
                total: 0,
                /*显示分页按钮个数*/
                pageCounter: 5,
                pageNow: 1,
                students: [],
                checkboxModel: [],//存放select数据
                checked: false,
                dialogFormVisible: false,
                editForm: {
                    campusName: '',
                    subject: '',
                    timeduration: '',
                    courseType: '',
                    classroomName: '',
                    teacherCodeName: '',
                    studentNumber: '',
                    weekdays: '',
                    region: '',
                    dateValue: [new Date(2016, 9, 10, 8, 40), new Date(2016, 9, 10, 9, 40)]
                },
                formLabelWidth: '80px'
            }
        },
        methods: {
            deleteData(data){
                this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    type: 'warning'
                }).then(() => {
                    console.log('发送ajax请求...')
                    this.$message({
                        type: 'success',
                        message: '删除成功!',
                        duration:1000
                    });
                }).catch(() => {
                    this.$message({
                        type: 'info',
                        message: '已取消删除',
                        duration:1000
                    });
                });
            },
            editFun(student){
                this.dialogFormVisible=true;
                this.editForm={
                    campusName:student.campusName,
                    subject: student.subject,
                    timeduration: student.timeduration,
                    courseType: student.courseType,
                    classroomName: student.classroomName,
                    teacherCodeName: student.teacherCodeName,
                    studentNumber: student.studentNumber,
                    weekdays: student.weekdays,
                    region: student.region,
                    dateValue: [new Date(2016, 9, 10, 8, 40), new Date(2016, 9, 10, 9, 40)]
                }
                console.log(student)
            },
            editFormSave(){
                this.dialogFormVisible = false
                this.$message({
                    type: 'success',
                    message: '保存成功!',
                    duration:1000
                });
            },
            editFormCancel(){
                this.dialogFormVisible = false
                this.$message({
                    type: 'info',
                    message: '取消成功！',
                    duration:1000
                });
            }
        },
        mounted(){
            this.students = mookData.data;
        }
    }
</script>
<style lang="scss">
     button:hover{
         cursor: pointer;
     }
    .btable table tr:nth-child(even){background:#fafbfc !important;}
    .btable table tr:hover{background-color:#edf1f2 !important; }
    .data-table{
        font-size: 13px;
        margin-bottom: 0;
    }
    .btn-xs{
        padding: 1px 5px !important;
        font-size: 12px !important;
        line-height: 1.5 !important;
        border-radius: 3px;
    }
</style>