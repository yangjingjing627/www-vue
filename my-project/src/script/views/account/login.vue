<template>
  <div id="login">
    <div id="login-wrap">
  		<form class="login">
  			<div class="logo">好升益数据查询平台</div>
  			<input id="username" type="text" placeholder="账号/手机号" maxlength="12" v-model="user.username">
  			<input id="password" type="password"  placeholder="密码" maxlength="12" v-model="user.password">
  			<button class="login-btn" @click="login">登录</button>
  			<div class="tips">
  				<a class="left" href="#/license-key">注册</a>
  				<a class="right" href="#/find-password">找回密码</a>
  			</div>
  		</form>
  		<div class="warning" id="login-warning" style="display:none">
  			<h2>提示</h2>
  			<p>账号或密码错误。如果使用员工账号登录，请确保该收银机已绑定至账号所属店铺。修改绑定请用店主账号登录并在“店铺资料” 处绑定。</p>
  			<a class="red-box">知道了</a>
  		</div>
  	</div>
  </div>
</template>
<script>
import API from '../../../store/api.js'

export default {
  name: 'login',
  data () {
    return {
      newligin: false,
      user: {
        password: '123456',
        username: '13661179320',
        imeCode: '2021414914044598'
      },
      codeImg: '',
      Timestamp: '',
      hasCode: true
    }
  },
  methods: {
    login (e) {
      var self = this
      e.preventDefault(e)
      let params = self.user
      self.$http.post(API.login, params).then((res) => {
        ('--login--')
        var localStorage = window.localStorage
        // var sessionStorage = window.sessionStorage
        self.data = res.data
        if (self.data.code === 1) {
          if (localStorage) {
            localStorage.userInfo = JSON.stringify(res.data)
          }
          self.$router.replace('/sales')
        }
      })
    }
  }
}
</script>
<style>

</style>
