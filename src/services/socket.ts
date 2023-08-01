import { webSocket, WebSocketSubject } from 'rxjs/webSocket';
import { BehaviorSubject } from 'rxjs';

const socketStatus = new BehaviorSubject<boolean>(false);

const socket: WebSocketSubject<any> = webSocket({
  url: 'ws://localhost:8425/',
});

socket.subscribe(
  () => socketStatus.next(true), // WebSocket connection open
  () => socketStatus.next(false), // WebSocket connection closed
);

const sendWebSocketData = (data: object): void => {
  if (socket.closed) {
    socket.subscribe();
    console.error('WebSocket connection is closed');
    return;
  }

  socket.next(data);
};

export { socket, socketStatus, sendWebSocketData };
