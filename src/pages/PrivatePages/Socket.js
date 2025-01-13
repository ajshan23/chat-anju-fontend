import { io } from 'socket.io-client';
const userId = JSON.parse(localStorage.getItem("userId"));

export const socket = io(`http://localhost:5000?userId=${userId}`, { autoConnect: true });