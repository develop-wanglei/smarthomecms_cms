<style scoped lang="less">
  .layout{
    // border: 1px solid #d7dde4;
    background: #f5f7f9;
    position: relative;
    border-radius: 4px;
    overflow: hidden;
    height: 100%;
    // border: 1px solid red;
}
.layout-logo{
    width: 100px;
    height: 30px;
    background: #5b6270;
    border-radius: 3px;
    float: left;
    position: relative;
    top: 15px;
    left: 20px;
}
.layout-nav{
    width: 420px;
    margin: 0 auto;
    margin-right: 20px;
}
.logo{
  height: 100%;
  padding-top: 10px;
  display: flex;
  justify-content: space-between;
  .logo-a{
    height: 100%;
    img{
      height: 40px;
      width: auto;
    }
  }
  .titles{
    color: #ffffff;
    font-size: 20px;
    width: 100%;
    text-align: center;
  }
  .logout{
    margin-top: 10px;
  }
}

.Sider{
  height: 100%;
  // border: 1px solid red;
}
.Layout_box{
  height: 100%;
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
</style>
<template>
  <div class="layout">

    <Layout class='Layout_box'>
      <Header>
       <div class="logo">
          <a class="logo-a" href="https://www.newtechcollege.com" target="_blank"> <img src="../../../public/img/logo/logo.jpg"></a>
          <div class="titles">AndroidThings实验箱秘钥管理系统</div>
           <Button @click='logout' class="logout" type="default" ghost>退出</Button>
        </div>
      </Header>
      <Layout>
        <Sider class='Sider' hide-trigger :style="{background: '#fff'}">
          <Menu active-name="1-2" theme="light" width="auto" :open-names="['1']">
            <MenuItem name="1-1">
            <Icon type="md-desktop" />
            <span>
              <router-link to="/home"> 首页</router-link>
            </span>
            </MenuItem>
            <Submenu name="2">
              <template slot="title">
                <Icon type="ios-key" />
                秘钥管理
              </template>
              <MenuItem name="2-1">
              <router-link to="/home/key/add">
                <Icon type="md-add-circle" />添加秘钥</router-link>
              </MenuItem>
              <MenuItem name="2-2">
              <router-link to="/home/key/list">
                <Icon type="md-book" />查看秘钥</router-link>
              </MenuItem>
            </Submenu>
            <Submenu name="3">
              <template slot="title">
                <Icon type="md-school" />
                学校管理
              </template>
              <MenuItem name="3-1">
              <router-link to="/home/school/list">
                <Icon type="md-eye" />查看学校
              </router-link>
              </MenuItem>
              <MenuItem name="3-2">
              <router-link to="/home/school/num">
                <Icon type="md-calculator" />学校实验箱
              </router-link>
              </MenuItem>
            </Submenu>
          </Menu>
        </Sider>
        <Layout :style="{padding: '0 24px 24px'}">

          <Content :style="{padding: '24px', minHeight: '280px', background: '#fff'}">
            <router-view></router-view>
          </Content>
          <div class="bottom">Copyright © 2019- {{time}} <a href="https://www.newtechcollege.com" target="_blank" class="href">上海蔺克科技有限公司</a></div>
        </Layout>

      </Layout>
    </Layout>

  </div>

</template>
<script>
import {validToken,delToken} from '../../api/index.js'
  export default {
    data() {
      return {
        time: 2019
      }
    },
    created() {
      this.getYear();
      const token = sessionStorage.getItem("token")
      if(!token){
        this.$router.push('/login')
        return
      }
      let data = {
        token
      }
      validToken(data).then(res =>{
        if(Number(res.code) != 200){
          sessionStorage.removeItem('token')
          this.$router.push('/login')
        }
      })

    },
    methods: {
      getYear() {
        var getTime = new Date()
        this.time = getTime.getFullYear()
      },
      logout(){
        const token=sessionStorage.getItem("token")
        sessionStorage.removeItem('token')
        let data = {
          token
        }
        delToken(data).then(res =>{
            if(Number(res.code == 200)){
              this.$router.push('/login')
              return
            }
            this.$Message.warning('请重试！')
        })
      }
    }
  }
</script>
