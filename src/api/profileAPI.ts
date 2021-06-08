import {instance} from './api';
import {ProfileType} from '../types/types';

export const profileAPI = {
  getProfile(userId: number) {
    return instance.get<ProfileType>(`profile/${userId}`).then(res => res.data)
  },
  getStatus(userId: number) {
    return instance.get<string>(`profile/status/${userId}`).then(res => res.data)
  },
  updateStatus(status: string) {
    return instance.put(`profile/status`, {status})
  },
  savePhoto(photofile: any) {
    let formData = new FormData()
    formData.append('image', photofile)
    return instance.put(`profile/photo`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    })
  }
}