<style scoped lang="less">
.layout{
    // border: 1px solid #d7dde4;
    background: #f5f7f9;
    position: relative;
    border-radius: 4px;
    overflow: hidden;
    height: 100%;
    border: 1px solid red;
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
  }

}
.Sider{
  height: 100%;
  border: 1px solid red;
}
.Layout_box{
  height: 100%;
}
</style>
<template>
    <div class="layout">
        <Layout class='Layout_box' >
            <Header>
                <Menu mode="horizontal" theme="dark" active-name="1">
                    <div class="logo">
                      <img  src="https://www.newtechcollege.com/static/media/logo.c2946b15.jpg" >
                    </div>

                </Menu>
            </Header>
            <Layout >
                <Sider class='Sider' hide-trigger :style="{background: '#fff'}">
                    <Menu active-name="1-2" theme="light" width="auto" :open-names="['1']">
                       <MenuItem name="1-1">
                           <Icon type="ios-navigate"></Icon>
                           <span><router-link to="/home">首页</router-link></span>
                       </MenuItem>
                        <Submenu name="2">
                            <template slot="title">
                                <Icon type="ios-keypad"></Icon>
                               秘钥管理
                            </template>
                           <MenuItem name="2-1">
                             <router-link to="/home/key/add">添加秘钥</router-link>
                           </MenuItem>
                           <MenuItem name="2-2">
                             <router-link to="/home/key/list">查看秘钥</router-link>
                             </MenuItem>
                        </Submenu>
                        <Submenu name="3">
                            <template slot="title">
                                <Icon type="ios-analytics"></Icon>
                                Item 3
                            </template>
                            <MenuItem name="3-1">Option 1</MenuItem>
                            <MenuItem name="3-2">Option 2</MenuItem>
                        </Submenu>
                    </Menu>
                </Sider>
                <Layout :style="{padding: '0 24px 24px'}">

                    <Content :style="{padding: '24px', minHeight: '280px', background: '#fff'}">
                        <router-view></router-view>
                    </Content>
                </Layout>
            </Layout>
        </Layout>
    </div>
</template>
<script>
    export default {

    }
</script>
