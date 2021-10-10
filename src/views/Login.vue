<template>

  <a-layout class="login container h-100">
    <a-layout-header style="background: transparent" class="mt-4 h-auto">
      <a-row type="flex" justify="space-between" align="middle">
        <a-button type="danger" class="btn-back">
          Back
        </a-button>
        <a-avatar shape="square" :size="100" src=""/>
      </a-row>
    </a-layout-header>
    <a-layout-content class="mt-5 pt-5">
      <a-form
          id="components-form-demo-normal-login"
          :form="form"
          class="login-form"
          @submit="handleSubmit"
      >
        <a-form-item>
          <a-input
              v-decorator="[
          'userName',
          { rules: [{ required: true, message: 'Пожалуйста введите ваш username!' }] },
        ]"
              placeholder="Username"
          >
            <a-icon slot="prefix" type="user" style="color: rgba(0,0,0,.25)"/>
          </a-input>
        </a-form-item>
        <a-form-item>
          <a-input
              v-decorator="[
          'password',
          { rules: [{ required: true, message: 'Пожалуйста введите ваш пароль!' }] },
        ]"
              type="password"
              placeholder="Password"
          >
            <a-icon slot="prefix" type="lock" style="color: rgba(0,0,0,.25)"/>
          </a-input>

        </a-form-item>

        <a-form-item>
          <a-row type="flex" justify="start" align="top">
            <a-col :span="12" :offset="12">
              <a-button type="primary" html-type="submit" class="login-form-button ">
                Войти
              </a-button>
            </a-col>
            <a-col :span="11">
              <router-link style="font-size: 12px" to="#">
                Забыли пароль?
              </router-link>
            </a-col>
            <a-col :span="2" type="flex" justify="center" class="height-100"> <span style="border: 1px solid black;" class="height-100"></span> </a-col>
            <a-col :span="11" class="">
              <router-link style="font-size: 12px" to="#">
                Как зарегистрироваться?
              </router-link>
            </a-col>
          </a-row>


        </a-form-item>
      </a-form>
    </a-layout-content>
  </a-layout>

</template>

<script>
import {required, minLength} from 'vuelidate/lib/validators'
export default {
  name: "login",
  data: () => ({
    username: '',
    password: ''
    }),
  validation: {
    username: {required, minLength: minLength(6)},
    password: {required, minLength: minLength(6)},
  },
  beforeCreate() {
    this.form = this.$form.createForm(this, {name: 'normal_login'});
  },
  methods: {
    handleSubmit(e) {
      e.preventDefault();
      this.form.validateFields((err, values) => {
        if (!err) {
          console.log('Received values of form: ', values);
          this.$router.push('map')
        }
      });
    },
  },
};
</script>
<style>

#components-form-demo-normal-login .login-form-button {
  width: 100%;
}

.btn-back {
}
</style>
