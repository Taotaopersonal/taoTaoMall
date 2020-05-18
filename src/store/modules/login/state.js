import local from '@/util/local'
export default {
  staticImgBaseUrl:"http://localhost:4000",
  loginData: {},
  token: local.get('token') || ''
}
