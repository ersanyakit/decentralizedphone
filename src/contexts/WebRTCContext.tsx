import React, { createContext, useContext, useEffect, useRef, useState } from 'react';

interface WebRTCContextType {
  localStream: MediaStream | null;
  remoteStream: MediaStream | null;
  startCall: (targetUserId: string) => Promise<void>;
  answerCall: (callData: any) => Promise<void>;
  endCall: () => void;
  isInCall: boolean;
  incomingCall: any | null;
  setIncomingCall: (call: any | null) => void;
}

const WebRTCContext = createContext<WebRTCContextType | null>(null);

const WS_URL = 'ws://localhost:8080'; // Sinyal sunucunuzun URL'si

export function WebRTCProvider({ children }: { children: React.ReactNode }) {
  const [localStream, setLocalStream] = useState<MediaStream | null>(null);
  const [remoteStream, setRemoteStream] = useState<MediaStream | null>(null);
  const [isInCall, setIsInCall] = useState(false);
  const [incomingCall, setIncomingCall] = useState<any | null>(null);
  
  const peerConnection = useRef<RTCPeerConnection | null>(null);
  const ws = useRef<WebSocket | null>(null);

  useEffect(() => {
    // WebSocket bağlantısını kur
    ws.current = new WebSocket(WS_URL);

    ws.current.onmessage = async (event) => {
      const data = JSON.parse(event.data);

      switch (data.type) {
        case 'offer':
          setIncomingCall(data);
          break;

        case 'answer':
          if (peerConnection.current) {
            await peerConnection.current.setRemoteDescription(new RTCSessionDescription(data.answer));
          }
          break;

        case 'ice-candidate':
          if (peerConnection.current) {
            await peerConnection.current.addIceCandidate(new RTCIceCandidate(data.candidate));
          }
          break;
      }
    };

    return () => {
      ws.current?.close();
    };
  }, []);

  const setupPeerConnection = async () => {
    const configuration = {
      iceServers: [
        { urls: 'stun:stun.l.google.com:19302' },
        { urls: 'stun:stun1.l.google.com:19302' },
        // TURN sunucularınızı buraya ekleyin
      ],
    };

    peerConnection.current = new RTCPeerConnection(configuration);
    
    // Yerel medya akışını alma
    const stream = await navigator.mediaDevices.getUserMedia({
      video: true,
      audio: true,
    });
    setLocalStream(stream);
    
    stream.getTracks().forEach((track) => {
      peerConnection.current?.addTrack(track, stream);
    });

    // Uzak akışı dinleme
    peerConnection.current.ontrack = (event) => {
      setRemoteStream(event.streams[0]);
    };

    // ICE adaylarını gönderme
    peerConnection.current.onicecandidate = (event) => {
      if (event.candidate) {
        ws.current?.send(JSON.stringify({
          type: 'ice-candidate',
          candidate: event.candidate,
        }));
      }
    };
  };

  const startCall = async (targetUserId: string) => {
    await setupPeerConnection();
    setIsInCall(true);
    
    // Offer oluştur
    const offer = await peerConnection.current?.createOffer();
    await peerConnection.current?.setLocalDescription(offer);
    
    // Offer'ı sinyal sunucusuna gönder
    ws.current?.send(JSON.stringify({
      type: 'offer',
      offer,
      targetUserId,
    }));
  };

  const answerCall = async (callData: any) => {
    await setupPeerConnection();
    setIsInCall(true);
    
    await peerConnection.current?.setRemoteDescription(new RTCSessionDescription(callData.offer));
    const answer = await peerConnection.current?.createAnswer();
    await peerConnection.current?.setLocalDescription(answer);
    
    // Answer'ı sinyal sunucusuna gönder
    ws.current?.send(JSON.stringify({
      type: 'answer',
      answer,
      targetUserId: callData.fromUserId,
    }));
  };

  const endCall = () => {
    localStream?.getTracks().forEach(track => track.stop());
    peerConnection.current?.close();
    peerConnection.current = null;
    setLocalStream(null);
    setRemoteStream(null);
    setIsInCall(false);
    setIncomingCall(null);
  };

  return (
    <WebRTCContext.Provider value={{
      localStream,
      remoteStream,
      startCall,
      answerCall,
      endCall,
      isInCall,
      incomingCall,
      setIncomingCall,
    }}>
      {children}
    </WebRTCContext.Provider>
  );
}

export const useWebRTC = () => {
  const context = useContext(WebRTCContext);
  if (!context) {
    throw new Error('useWebRTC must be used within a WebRTCProvider');
  }
  return context;
}; 