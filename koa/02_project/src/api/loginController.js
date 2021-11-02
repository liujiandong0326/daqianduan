import send from '../config/mailConfig'
import moment from 'moment'

class LoginController {
  constructor() {}
  async forget(ctx) {
    const { body } = ctx.request

    try {
      let result = await send({
        code: '1234',
        // 过期时间
        expire: moment().add(30, 'minutes').format('YYYY-MM-DD HH:mm:ss'),
        // 接收邮件方
        email: body.username,
        // 用户昵称
        user: 'Mike',
      })
      ctx.body = {
        code: 200,
        data: result,
        msg: '邮件发送成功',
      }
    } catch (e) {}
  }
}

export default new LoginController()
