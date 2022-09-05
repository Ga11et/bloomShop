import { AuthData } from '../types/clientApiTypes'
import { authAPIUtils } from '../../utils/authAPI/authUtils';

export const postAPI = {
  async authMe (loginData: AuthData) {
    const response = await fetch(`/api/auth`, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(loginData) }).then(authAPIUtils.handleResponse)
    return response
  },
  async registerMe (loginData: AuthData) {
    const response = await fetch(`/api/register`, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(loginData) }).then(resp => resp.json())
    return response
  }
}