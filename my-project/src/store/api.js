var iposHeader = 'http://dev.pos.ipos100.cn/pos'// pos测试环境地址,现在
var serverApi = {
  // province: 'storedata/count/province',
  // billCount: 'storedata/billcount/every',
  // billAmount: 'storedata/billamount/every',
  // orderCount: 'storedata/ordercount/every',
  // orderAmount: 'storedata/orderamount/every',
  // adminLogin: 'datalogin/submit',
  // adminLogout: 'datalogout'

  login: 'store/login', // 登录
  register: 'store/register/commit',  // 注册提交
  registerNext: 'store/register/next', // 注册下一步
  sendCode: 'store/checkcode/send', // 发送验证码
  // 商品
  goods: 'goods/list' // 商品列表
}
for (var i in serverApi) {
  serverApi[i] = iposHeader + '/' + serverApi[i]
}
module.exports = serverApi
