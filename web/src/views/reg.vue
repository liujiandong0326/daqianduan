<template>
  <div class="layui-container fly-marginTop">
    <div class="fly-panel fly-panel-user" pad20>
      <div class="layui-tab layui-tab-brief" lay-filter="user">
        <ul class="layui-tab-title">
          <li><router-link :to="{ name: 'login' }">登入</router-link></li>
          <li class="layui-this">注册</li>
        </ul>
        <div
          class="layui-form layui-tab-content"
          id="LAY_ucm"
          style="padding: 20px 0"
        >
          <div class="layui-tab-item layui-show">
            <div class="layui-form layui-form-pane">
              <form method="post">
                <div class="layui-form-item" style="margin-bottom: 0">
                  <validation-provider
                    name="邮箱"
                    rules="required|email"
                    v-slot="{ errors }"
                  >
                    <div class="layui-row">
                      <label class="layui-form-label">邮箱</label>
                      <div class="layui-input-inline">
                        <input
                          type="text"
                          name="username"
                          v-model.trim="username"
                          autocomplete="off"
                          class="layui-input"
                        />
                      </div>
                      <div class="layui-form-mid layui-word-aux">
                        将会成为您唯一的登入名
                      </div>
                    </div>
                    <div class="error layui-form-mid">
                      {{ errors[0] }}
                    </div>
                  </validation-provider>
                </div>
                <div class="layui-form-item">
                  <validation-provider
                    name="昵称"
                    rules="required|min:6"
                    v-slot="{ errors }"
                  >
                    <label class="layui-form-label">昵称</label>
                    <div class="layui-input-inline">
                      <input
                        type="text"
                        name="name"
                        v-model.trim="name"
                        autocomplete="off"
                        class="layui-input"
                      />
                    </div>
                    <div class="error layui-form-mid">{{ errors[0] }}</div>
                  </validation-provider>
                </div>
                <div class="layui-form-item" style="margin-bottom: 0">
                  <validation-provider
                    name="密码"
                    rules="required|min:6"
                    v-slot="{ errors }"
                  >
                    <div class="layui-row">
                      <label class="layui-form-label">密码</label>
                      <div class="layui-input-inline">
                        <input
                          type="password"
                          name="password"
                          v-model.trim="password"
                          autocomplete="off"
                          class="layui-input"
                        />
                      </div>
                      <div class="layui-form-mid layui-word-aux">
                        6到16个字符
                      </div>
                    </div>
                    <div class="error layui-form-mid">{{ errors[0] }}</div>
                  </validation-provider>
                </div>
                <div class="layui-form-item">
                  <validation-provider
                    name="确认密码"
                    rules="required|confirmPassword"
                    v-slot="{ errors }"
                  >
                    <label class="layui-form-label">确认密码</label>
                    <div class="layui-input-inline">
                      <input
                        type="password"
                        name="confirmPassword"
                        v-model.trim="confirmPassword"
                        autocomplete="off"
                        class="layui-input"
                      />
                    </div>
                    <div class="error layui-form-mid">{{ errors[0] }}</div>
                  </validation-provider>
                </div>
                <div class="layui-form-item" style="margin-bottom: 0">
                  <validation-provider
                    name="验证码"
                    rules="required|length:6"
                    v-slot="{ errors }"
                  >
                    <div class="layui-row">
                      <label class="layui-form-label">验证码</label>
                      <div class="layui-input-inline">
                        <input
                          type="text"
                          name="code"
                          v-model.trim="code"
                          placeholder="请输入验证码"
                          autocomplete="off"
                          class="layui-input"
                        />
                      </div>
                      <div>
                        <span
                          class="svg"
                          style="color: #c00"
                          v-html="svg"
                          @click="_getCode"
                        />
                      </div>
                    </div>
                    <div class="error layui-form-mid">{{ errors[0] }}</div>
                  </validation-provider>
                </div>
                <div class="layui-form-item">
                  <button class="layui-btn" lay-filter="*" lay-submit>
                    立即注册
                  </button>
                </div>
                <div class="layui-form-item fly-form-app">
                  <span>或者直接使用社交账号快捷注册</span>
                  <a
                    href=""
                    onclick="layer.msg('正在通过QQ登入', {icon:16, shade: 0.1, time:0})"
                    class="iconfont icon-qq"
                    title="QQ登入"
                  ></a>
                  <a
                    href=""
                    onclick="layer.msg('正在通过微博登入', {icon:16, shade: 0.1, time:0})"
                    class="iconfont icon-weibo"
                    title="微博登入"
                  ></a>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { extend } from 'vee-validate'
import { getCode } from '@/api/login'

export default {
  data() {
    return {
      username: '',
      name: '',
      password: '',
      confirmPassword: '',
      code: '',
      svg: '',
    }
  },
  mounted() {
    extend('confirmPassword', confirmPassword => {
      if (confirmPassword === this.password) return true
      return '两次密码不一致'
    })
    this._getCode()
  },
  methods: {
    _getCode() {
      getCode().then(res => {
        if (res.code === 200) {
          this.svg = res.data
        }
      })
    },
  },
}
</script>

<style scoped lang="scss">
.error {
  color: #c00;
}
.svg {
  position: relative;
  top: -2px;
}
</style>
