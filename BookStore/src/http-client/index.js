import axios from 'axios';
import rxEvent from 'pubsub-js';
import EventKeys from '../common/event-keys';
/**
 * 相应数据的拦截
 */
axios.interceptors.response.use((val)=>{
    return val.data
}, (error)=>{
    switch (error.response.status) {
        case 400:
            rxEvent.publish(EventKeys.PAARAMS_ERROR, error.response.data)
            break;
    
        default:
            break;
    }
});