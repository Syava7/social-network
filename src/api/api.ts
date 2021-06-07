import axios from 'axios'


export enum ResultCode {
  Success = 0,
  Error = 1,
  CaptchaIsRequired = 10
}

export enum ResultCodeForCaptcha {
  CaptchaIsRequired = 10
}


export const instance = axios.create({
  withCredentials: true,
  baseURL: 'https://social-network.samuraijs.com/api/1.0/',
  headers: {
    'API-KEY': '8a4ddf1f-f60c-4f9d-8b0a-fc3f789364fb'
  }
})


