import io from 'socket.io-client';
import HttpClent from '../http-client/env';
import WebSocketsKey from '../common/websocket-key';
const SocketIO = io(`${HttpClent.baseUrl}`); //路径


// 发送
SocketIO.emit(WebSocketsKey.SEND_MESSAGE, message);

// 接收
SocketIO.on("alarmToWeb", data => {
    console.log("alarmToWeb：socket", data);
});