<template>
  <div>
    <div>{{schoolName}}实验箱</div>
    <Table :columns="columns" :data="dataSource"></Table>
  </div>
</template>

<script>
  export default{
    data() {
      return {
        columns: [{
            title: 'ID',
            key: 'key_id'
          },
          {
            title: '秘钥',
            key: 'key_uuid',
            render: (h, params) => {
              return h('div',params.row.key_uuid.uuid)
            }
          },
          {
            title: '状态',
            key: 'scop',
            render: (h, params) => {
              const {
                scop
              } = params.row.key_uuid
              if (scop == 0) {
                // return h('strong', "未使用")
                return h('div', [
                  h('Button', {
                    props: {
                      type: 'primary',
                      size: 'small'
                    },
                    style: {
                      marginRight: '5px'
                    },

                  }, "未使用")
                ]);
              } else if (scop == 1) {
                // return h('strong', "已使用")
                return h('div', [
                  h('Button', {
                    props: {
                      type: 'error',
                      size: 'small'
                    },
                    style: {
                      marginRight: '5px'
                    },

                  }, "已使用")
                ]);
              }
            }
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
                  style: {
                      marginRight: '5px'
                      },
                  on: {
                    click: () => {
                     const id =params.row.id
                     let data={
                       id
                     }
                      // delKey(data).then(res =>{
                      //   const {
                      //     code,
                      //     data
                      //   } = res
                      //   if(res.code !=200){
                      //     this.$Message.error(ERROR_SERVER);
                      //     return
                      //   }
                      //   this.$Message.success('删除成功!');
                      //   // this.$router.push('/home/key/list')
                      // })
                    }
                  }
                }, '停用'),
                h('Button', {
                  props: {
                    type: 'error',
                    size: 'small'
                  },
                  on: {
                    click: () => {
                     const id =params.row.id
                     let data={
                       id
                     }
                      // delKey(data).then(res =>{
                      //   const {
                      //     code,
                      //     data
                      //   } = res
                      //   if(res.code !=200){
                      //     this.$Message.error(ERROR_SERVER);
                      //     return
                      //   }
                      //   this.$Message.success('删除成功!');
                      //   // this.$router.push('/home/key/list')
                      // })
                    }
                  }
                }, '删除')
              ]);
            }
          }
        ],
        dataSource: [

        ],
        schoolName:sessionStorage.getItem('schoolName')
      }
    },
    mounted(){
      this.dataSource  = JSON.parse(sessionStorage.getItem("schoolBox"))
    }
 }
</script>

<style>
</style>
