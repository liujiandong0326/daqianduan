class DemoController {
  async demo(ctx) {
    ctx.body = {
      msg: 'body message',
    }
  }
}

export default new DemoController()
