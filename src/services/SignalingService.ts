import { webRTCService } from './WebRTCService';

export class SignalingService {
  private ws: WebSocket | null = null;

  constructor() {
    this.connect();
  }

  private connect() {
    this.ws = new WebSocket('wss://your-signaling-server.com');

    this.ws.onopen = () => {
      console.log('Connected to signaling server');
    };

    this.ws.onmessage = async (event) => {
      const message = JSON.parse(event.data);

      switch (message.type) {
        case 'offer':
          await webRTCService.handleIncomingCall(message.payload);
          break;
        case 'answer':
          await webRTCService.handleAnswer(message.payload);
          break;
        case 'candidate':
          await webRTCService.handleCandidate(message.payload);
          break;
      }
    };

    this.ws.onerror = (error) => {
      console.error('WebSocket error:', error);
    };

    this.ws.onclose = () => {
      console.log('Disconnected from signaling server');
      // Yeniden bağlanma mantığı eklenebilir
    };
  }

  public send(message: any) {
    if (this.ws?.readyState === WebSocket.OPEN) {
      this.ws.send(JSON.stringify(message));
    }
  }
}

export const signalingService = new SignalingService(); 