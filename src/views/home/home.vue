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
  width: 130px;
  height: 100%;
  padding-top: 10px;
  img{
    width: 100%;
    height: 40px;
    // border: 1px red solid;
  }
}
.titles{
     color: red;
     margin-left: 500px;
     border: 1px solid red;
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
          <a href="https://www.newtechcollege.com" target="_blank"> <img src="../../../public/img/logo/logo.jpg"></a>
          <div class="titles">AndroidThings实验箱秘钥管理系统</div>
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
              <Icon type="md-add-circle" />
              <router-link to="/home/key/add">添加秘钥</router-link>
              </MenuItem>
              <MenuItem name="2-2">
              <Icon type="md-book" />
              <router-link to="/home/key/list">查看秘钥</router-link>
              </MenuItem>
            </Submenu>
            <Submenu name="3">
              <template slot="title">
                <Icon type="md-briefcase" />
                实验箱管理
              </template>
              <MenuItem name="3-1">
              <Icon type="ios-battery-charging" />
              <router-link to="/home/box/list">实验箱状态</router-link>
              </MenuItem>
              <MenuItem name="3-2">
              <Icon type="md-calculator" />
              <router-link to="/home/box/num">实验箱个数</router-link>
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
  export default {
    data() {
      return {
        time: 2019
      }
    },
    created() {
      this.getYear();
      const token = sessionStorage.getItem("token")
      if (!token) {
        this.$router.push('/login')
      }
    },
    methods: {
      getYear() {
        var getTime = new Date()
        this.time = getTime.getFullYear()
      }
    }
  }
</script>
