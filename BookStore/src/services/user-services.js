import axios from 'axios';
import HttpClient from '../http-client/env';
import apiRequest from '../common/url';

const httpUrl = HttpClient.baseUrl;
class UserServices {
    // 用户登录
    userLogin(username, password) {
        let url = `${httpUrl}${apiRequest.login}?userName=${username}&password=${password}`;
        return axios.get(url);
    }
    // 用户注册
    userRegistor(userInfo) {
        let url = `${httpUrl}${apiRequest.registor}`;
        return axios.post(url, userInfo);
    }
}
export const userServices = new UserServices();
