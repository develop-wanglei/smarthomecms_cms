<template>
<div>
  <div>添加学校</div>
  <div>
    <div class='input'>
      <span>学校名称</span><Input class='name' v-model="school_name" placeholder="请输入名称"  />
    </div>
    <div class='input'>
      <span>实验箱数量</span><Input class='name' v-model="box_number" placeholder="数量" style="width: 50px" />
    </div>
    <div class='input'>
      <span>所在城市</span><Input class='name' v-model="city" placeholder="城市" style="width: 100px" />
    </div>
    <div class='button'>
      <Button type="primary" @click='add'>提交</Button>
    </div>
  </div>
</div>
</template>

<script>
  import {addSchool} from '../../../api/index.js'
  export default{
    data(){
      return{
        school_name:'',
        box_number:'',
        city:''
      }
    },
    methods:{
      add(){
        const  {school_name,box_number,city} =this
        let data = {school_name,box_number,city}
        if(!data.school_name){
            this.warning('学校名称不能为空！')
            return
        }
        if(!data.box_number){
            this.warning('实验箱数量不能为空！')
            return
        }
        if(!data.city){
            this.warning('所在城市不能为空！')
            return
        }
        addSchool(data).then(res =>{
          const {code,data} =res
          if(res.code==200){
            this.$Message.success('添加成功!')
            return
          }
          this.$Message.error('服务器异常，添加失败！')
        })

      },
      warning(msg){
        if(!msg){
          msg = "错误信息有误"
        }
        this.$Message.warning(msg)
      }

    }
  }
</script>

<style lang='less'>
  .input{
    height: 50px;
    display:flex;
    margin-top: 30px;
    span{
      display: block;
      line-height: 30px;
      width: 100px;
      text-align: right;
    }
    span::after{
      content: ":";
      margin-right: 10px;
      margin-left: 5px;
    }
    .name{
      width: 200px;
    }
  }
  .button{
    width: 300px;
    /* border: 1px solid red; */
    Button{
      margin-left: 50px;
    }
  }
</style>
