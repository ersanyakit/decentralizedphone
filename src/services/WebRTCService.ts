import { Subject } from 'rxjs';

interface RTCMessage {
  type: 'offer' | 'answer' | 'candidate';
  payload: RTCSessionDescriptionInit | RTCIceCandidateInit;
}

export class WebRTCService {
  private peerConnection: RTCPeerConnection | null = null;
  private localStream: MediaStream | null = null;
  private remoteStream: MediaStream | null = null;
  
  public onRemoteStream = new Subject<MediaStream>();
  public onConnectionStateChange = new Subject<RTCPeerConnectionState>();
  
  constructor() {
    // WebRTC API kontrolü
    if (typeof window !== 'undefined' && 'RTCPeerConnection' in window) {
      this.initializePeerConnection();
    } else {
      console.error('WebRTC is not supported in this browser');
    }
  }

  private initializePeerConnection() {
    try {
      const configuration: RTCConfiguration = {
        iceServers: [
          { urls: 'stun:stun.l.google.com:19302' },
          {
            urls: 'turn:your-turn-server.com',
            username: 'username',
            credential: 'credential'
          }
        ]
      };

      this.peerConnection = new RTCPeerConnection(configuration);

      this.peerConnection.onicecandidate = (event) => {
        if (event.candidate) {
          // Signaling sunucusuna candidate'i gönder
          this.sendSignalingMessage({
            type: 'candidate',
            payload: event.candidate
          });
        }
      };

      this.peerConnection.ontrack = (event) => {
        this.remoteStream = event.streams[0];
        this.onRemoteStream.next(this.remoteStream);
      };

      this.peerConnection.onconnectionstatechange = () => {
        if (this.peerConnection) {
          this.onConnectionStateChange.next(this.peerConnection.connectionState);
        }
      };
    } catch (error) {
      console.error('Failed to initialize WebRTC:', error);
    }
  }

  public async startCall(isVideo: boolean = false): Promise<MediaStream> {
    try {
      // Önce mevcut stream'i temizle
      this.endCall();

      // Yeni medya erişimi iste
      const constraints = {
        audio: true,
        video: isVideo ? {
          width: { ideal: 1280 },
          height: { ideal: 720 },
          facingMode: 'user'
        } : false
      };

      // MediaStream'i al
      this.localStream = await navigator.mediaDevices.getUserMedia(constraints);
      
      // Stream'i peer connection'a ekle
      if (this.peerConnection && this.localStream) {
        this.localStream.getTracks().forEach(track => {
          if (this.peerConnection) {
            this.peerConnection.addTrack(track, this.localStream!);
          }
        });

        // Offer oluştur ve gönder
        const offer = await this.peerConnection.createOffer();
        await this.peerConnection.setLocalDescription(offer);
        
        this.sendSignalingMessage({
          type: 'offer',
          payload: offer
        });
      }

      if (!this.localStream) {
        throw new Error('Failed to get local stream');
      }

      return this.localStream;

    } catch (error) {
      console.error('Error starting call:', error);
      throw error;
    }
  }

  public async handleIncomingCall(offer: RTCSessionDescriptionInit): Promise<void> {
    try {
      await this.peerConnection!.setRemoteDescription(new RTCSessionDescription(offer));
      
      const answer = await this.peerConnection!.createAnswer();
      await this.peerConnection!.setLocalDescription(answer);

      // Signaling sunucusuna answer'ı gönder
      this.sendSignalingMessage({
        type: 'answer',
        payload: answer
      });

    } catch (error) {
      console.error('Error handling incoming call:', error);
      throw error;
    }
  }

  public async handleAnswer(answer: RTCSessionDescriptionInit): Promise<void> {
    try {
      await this.peerConnection!.setRemoteDescription(new RTCSessionDescription(answer));
    } catch (error) {
      console.error('Error handling answer:', error);
      throw error;
    }
  }

  public async handleCandidate(candidate: RTCIceCandidateInit): Promise<void> {
    try {
      await this.peerConnection!.addIceCandidate(new RTCIceCandidate(candidate));
    } catch (error) {
      console.error('Error handling candidate:', error);
      throw error;
    }
  }

  private sendSignalingMessage(message: RTCMessage): void {
    // Burada signaling sunucusuna mesaj gönderme işlemi yapılacak
    // Örneğin WebSocket veya HTTP kullanılabilir
    console.log('Sending signaling message:', message);
  }

  public endCall(): void {
    this.localStream?.getTracks().forEach(track => track.stop());
    this.peerConnection?.close();
    this.localStream = null;
    this.remoteStream = null;
    this.initializePeerConnection();
  }

  public getLocalStream(): MediaStream | null {
    return this.localStream;
  }

  public getRemoteStream(): MediaStream | null {
    return this.remoteStream;
  }
}

export const webRTCService = new WebRTCService(); 