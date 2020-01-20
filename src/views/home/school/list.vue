<template>
  <div>
  <div>全部学校</div>
  <div>
    <router-link to="/home/school/add">
    <Button type="primary" icon="ios-add-circle-outline">添加学校</Button>
    </router-link>
  </div>
  <Table :columns="columns" :data="dataSource"></Table>
  </div>
</template>

<script>
  import {getSchool,getSchoolBox} from '../../../api/index.js'
  import {ERROR_SERVER} from '../../../config/error.js'
  export default{
    data(){
      return{
        columns: [{
              title: 'ID',
              key: 'id'
            },
            {
              title: '学校名称',
              key: 'school_name'
            },
            {
              title: '实验箱个数',
              key: 'box_number',
            },
            {
              title: '所在城市',
              key: 'city',
            },
            {
              title: '操作',
              key: 'del',
              render: (h, params) => {
                return h('div', [
                  h('Button', {
                    props: {
                      type: 'primary',
                      size: 'small'
                    },
                    on: {
                      click: () => {
                       const school_id =params.row.id
                       let data={
                         school_id
                       }
                       getSchoolBox(data).then(res =>{
                        const {code,data} =res
                        if(res.code !=200){
                           this.$Message.warning("此学校无实验箱！")
                           return
                        }
                        res = JSON.stringify(res.data)
                        sessionStorage.setItem('schoolBox',res)
                        sessionStorage.setItem("schoolName",params.row.school_name)
                        this.$router.push('/home/school/box')
                       })

                      }
                    }
                  }, '查看')
                ]);
              }
            }
          ],
          dataSource: [

          ]
        }
      },
    mounted(){
      getSchool().then(res =>{
        const {code,data}=res
        if(res.code !=200){
          this.$Message.error(ERROR_SERVER)
          return
        }
        this.dataSource = res.data
      })
    }
  }
</script>

<style>
</style>
