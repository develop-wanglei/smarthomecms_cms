<template>
  <div>
    <div>全部秘钥</div>
    <Table :columns="columns" :data="dataSource"></Table>
    <!-- <Page  :total="100" show-sizer class='page' /> -->
  </div>
</template>

<script>
  import {
    getKey,
    delKey
  } from '../../../api/index.js'
  import {
    ERROR_SERVER
  } from '../../../config/error.js'

  export default {
    data() {
      return {
        columns: [{
            title: 'ID',
            key: 'id'
          },
          {
            title: '秘钥',
            key: 'uuid'
          },
          {
            title: '状态',
            key: 'scop',
            render: (h, params) => {
              const {
                scop
              } = params.row
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
                    type: 'error',
                    size: 'small'
                  },
                  on: {
                    click: () => {
                     const id =params.row.id
                     let data={
                       id
                     }
                      delKey(data).then(res =>{
                        const {
                          code,
                          data
                        } = res
                        if(res.code !=200){
                          this.$Message.error(ERROR_SERVER);
                          return
                        }
                        this.$Message.success('删除成功!');
                        // this.$router.push('/home/key/list')
                      })
                    }
                  }
                }, '删除')
              ]);
            }
          }
        ],
        dataSource: [

        ]
      }
    },
    mounted() {
      getKey().then(res => {
        const {
          code,
          data
        } = res
        if (res.code != 200) {
          this.$Message.error(ERROR_SERVER)
          return
        }
        this.dataSource = res.data
      })
    }

  }
</script>

<style lang="less">
  .page {
    margin-right: 10px;
  }
</style>
