import {Server} from "socket.io";

const PORT = 3002;
const usersSocket = {}
let io;
export const startSocketServer = () => {
    io = new Server(PORT)
    io.on('connection', onConnectListener);
    return true
}
const onConnectListener = (socket) => {
    const email = socket.handshake.query.email
    usersSocket[email] = socket
    onDisconnectListener(socket, email);
}
const onDisconnectListener = (socket, email) => {
    socket.on('disconnect', () => {
        delete usersSocket[email];
    });
}
export const sendMessageToSocket = (requestData) => {
    if (!usersSocket[requestData.messages.receiverEmail]) return

    const socketId = usersSocket[requestData.messages.receiverEmail].id
    io.to(socketId).emit('message', requestData.messages.text);
}
