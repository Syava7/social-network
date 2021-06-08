import {GetItemsType, instance, ResponseType} from './api';
import {profileAPI} from './profileAPI';

export const usersAPI = {
  getUsers(currentPage: number, pageSize: number) {
    return instance.get<GetItemsType>(`users?page=${currentPage}&count=${pageSize}`)
      .then(response => response.data)
  },
  follow(userId: number) {
    return instance.post<ResponseType>(`follow/${userId}`).then(res => res.data)
  },
  unfollow(userId: number) {
    return instance.delete(`follow/${userId}`).then(res => res.data) as Promise<ResponseType>
  },
  getProfile(userId: number) {
    return profileAPI.getProfile(userId)
  }
}