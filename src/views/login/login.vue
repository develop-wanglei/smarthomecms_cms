<template>
  <div class="index">

    <div class="card">
      <h2 class="title">AndroidThings实验箱秘钥管理系统</h2>
      <Card class='login'>

        <Form ref="formInline" :model="formInline" :rules="ruleInline" inline>
          <FormItem prop="user">
            <Input type="text" v-model="formInline.user" placeholder="用户名">
            <Icon type="ios-person-outline" slot="prepend"></Icon>
            </Input>
          </FormItem>
          <FormItem prop="password">
            <Input type="password" v-model="formInline.password" placeholder="密码">
            <Icon type="ios-lock-outline" slot="prepend"></Icon>
            </Input>
          </FormItem>
          <FormItem>
            <Button class='but' type="primary" @click="handleSubmit('formInline')">登录</Button>
          </FormItem>
        </Form>
      </Card>

    </div>
    <div class="bottom">Copyright © {{time}} <a href="https://www.newtechcollege.com" target="_blank" class="href">上海蔺克科技有限公司</a></div>
  </div>
</template>
<script>
  import {
    login
  } from '../../api/index.js'

  export default {

    data() {
      return {
        time: 2019,
        formInline: {
          user: '',
          password: ''
        },
        ruleInline: {
          user: [{
            required: true,
            message: '请输入用户名',
            trigger: 'blur'
          }],
          password: [{
              required: true,
              message: '请输入密码',
              trigger: 'blur'
            },
            {
              type: 'string',
              min: 6,
              message: '密码长度不能少于6位',
              trigger: 'blur'
            }
          ]
        }
      }
    },
    created() {


      const token = sessionStorage.getItem('hbgvnybtfctrgv')
      if (token) {
        this.$router.push('/home')
      }

      this.getYear();
    },
    methods: {
      getYear() {
        var getTime = new Date()
        this.time = getTime.getFullYear()
      },
      handleSubmit(name) {
        this.$refs[name].validate((valid) => {
          if (valid) {
            const {
              user,
              password
            } = this.formInline
            const userInfo = {
              name: user,
              password
            }
            login(userInfo).then(res => {
              const {
                code,
                data
              } = res
              if (Number(code) != 0) {
                this.$Message.error('用户名和密码错误');
                return
              }
              const token = res.data
              sessionStorage.setItem("token", token)

              this.$Message.success('登录成功!');
              this.$router.push('/home')
            })
          } else {
            this.$Message.error('请检查用户名和密码');
          }
        })
      }
    }
  }
</script>
<style lang="less">
  .index {
    width: 100vw;
    height: 100vh;
    background: #DDDDFF;
    overflow: hidden;

    .card {
      width: 600px;
      height: 300px;

      position: absolute;
      top: 50%;
      left: 50%;
      margin-top: -150px;
      margin-left: -300px;

      .title {
        text-align: center;
        font-size: 35px;
        // text-shadow: 2px 2px 3px #000;
      }

      .login {
        width: 230px;
        height: 200px;
        margin: 40px auto;

        // border:1px solid red;
        .but {
          width: 182px;
        }
      }
    }

    .bottom {
      width: 300px;
      position: fixed;
      bottom: 20px;
      left: 50%;
      margin-left: -150px;

      .href {
        color: #000000;
      }
    }
  }
</style>
