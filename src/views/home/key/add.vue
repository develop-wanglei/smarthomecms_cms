<template>
<div>
  <div>添加秘钥</div>
  <Input v-model="value14" placeholder="输入数量" clearable style="width: 200px" />
  <Button type="primary" :loading="loading2" icon="ios-add-circle-outline" @click="toLoading2">
          <span v-if="!loading2">生成秘钥</span>
          <span v-else>Loading...</span>
  </Button>

  <Modal
          title="已生成秘钥"
          v-model="flag"
          class-name="vertical-center-modal">
          <div class="secret-key-box">
            <p class="secret-key" v-for="(item, index) in keys">
              {{item.uuid}}
            </p>
          </div>

      </Modal>
</div>
</template>

<script>
  import {setKey} from '../../../api/index.js'
  export default {
         data () {
             return {
                 loading2: false,
                 value14:'',
                 keys : [],
                 flag : false

             }
         },
         methods: {
             toLoading2 () {
                this.loading2=true
                 const size =this.value14
                 let data ={size}
                 setKey(data).then(res =>{
                   const {
                     code,
                     data
                   }=res
                   if (Number(code) != 200) {
                     this.$Message.error('生成失败！');
                     return
                   }
                   this.$Message.success('添加成功!')
                   this.loading2=false
                   this.keys=res.data
                   this.flag=true

                 })

             }
         }
     }
</script>

<style lang="less">
  .secret-key-box{
    background: #d0cacd;
    border-radius: 10px;
    .secret-key{
      text-align: center;
      padding: 5px ;
    }
  }

</style>
