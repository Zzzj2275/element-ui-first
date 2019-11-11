new Vue({
    el:'#app',
    data() {
        return {
            userInfo:{
                name:'',
                gender:'',
                phoneNum:'',
                birthday:'',
            },
             tableData: [],
            dialogVisible: false,
            editObj:{
                name:'',
                gender:'',
                phoneNum:'',
                birthday:'',
            },
            userIndex: 0,
            options: [{
                // value: '选项1',
                value: '男'
              }, {
                // value: '选项2',
                value: '女'
              }],
            sex: ''
        }
    },
    methods: {
        addUser(){
            if(!this.userInfo.name){
                this.$message({
                    showClose: true,
                    message: '请输入姓名！',
                    type: 'warning'
                  });
                return
            }
            if(!this.sex){
                this.$message({
                    showClose: true,
                    message: '请输入性别！',
                    type: 'warning'
                  });
                return
            }
            if(!this.userInfo.phoneNum){
                this.$message({
                    showClose: true,
                    message: '请输入电话号码！',
                    type: 'warning'
                  });
                return
            }
            if(!/^1[3456789]\d{9}$/.test(this.userInfo.phoneNum)){
                this.$message({
                    showClose: true,
                    message: '请正确的电话号码！',
                    type: 'warning'
                  });
                return
            }
            if(!this.userInfo.birthday){
                this.$message({
                    showClose: true,
                    message: '请输入生日！',
                    type: 'warning'
                  });
                return
            }
            this.userInfo.gender = this.sex
            this.tableData.push(this.userInfo)
            this.userInfo={
                name:'',
                gender:'',
                phoneNum:'',
                birthday:'',
            }
            this.sex=""
        },
        delUser(index){
            this.$confirm('确认删除？')
            .then(_ => {
                this.tableData.splice(index,1)
            })
            .catch(_ => {});
        },
        editUser(item,index){
            this.userIndex = index
            this.editObj = {
                name: item.name,
                gender: item.gender,
                phoneNum: item.phoneNum,
                birthday: item.birthday,
            }
            this.dialogVisible = true
        },
        handleClose(){
            this.dialogVisible = false
        },
        confim(){
            this.dialogVisible = false
            // this.tableData[this.userIndex] = this.editObj
            this.tableData.splice(this.userIndex,1,this.editObj)
        }
    },
})