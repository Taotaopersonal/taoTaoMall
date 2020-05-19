import Vue from 'vue'
import {
  ValidationProvider,
  ValidationObserver,
  localize,
  extend,
  // setInteractionMode
} from "vee-validate"

import {
  required,
  regex,
  digits
} from 'vee-validate/dist/rules';
extend('required', required)
extend('regex', regex)
extend('digits', digits)

// setInteractionMode('lazy');

// import * as rules from 'vee-validate/dist/rules';

// Object.keys(rules).forEach(rule => {
//   extend(rule, rules[rule]);
// });

// // with typescript
// for (let [rule, validation] of Object.entries(rules)) {
//   extend(rule, {
//     ...validation
//   });
// }

import zh_CN from 'vee-validate/dist/locale/zh_CN.json';
localize('zh_CN', zh_CN)
localize({
  zh_CN: {
    names: {
      phone: "手机号",
      code: "验证码",
      name: "用户名",
      pwd: "密码",
      imgCode: "图形验证码"
    },
    fields: {
      phone: {
        required: `{_field_}不能为空`,
        regex: `请输入11位数字{_field_}`
      },
      code: {
        required: `{_field_}不能为空`,
        digits: `请输入6位数字{_field_}`
      },
      name: {
        required: `{_field_}不能为空`,
      },
      pwd: {
        required: `{_field_}不能为空`,
      },
      imgCode: {
        required: `{_field_}不能为空`,
      }
    }
  }
})



// Register it globally
Vue.component('ValidationProvider', ValidationProvider);
Vue.component('ValidationObserver', ValidationObserver);
