import HttpClient from '../http-client/env';
import Url from '../common/url';
import axios from 'axios';

class MessageServices  {
    talkMessage(messageInfo) {
        const url = HttpClient.baseUrl + Url.sendMessage;
        return axios.post(url, messageInfo);
    }
}

export const messageServices = new MessageServices();