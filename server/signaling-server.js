const WebSocket = require('ws');
const wss = new WebSocket.Server({ port: 8080 });

const clients = new Map();

wss.on('connection', (ws) => {
  const userId = generateUserId(); // Kullanıcı ID'si oluştur
  clients.set(userId, ws);
  console.log("connection",userId)

  ws.on('message', (message) => {
    console.log("gelenMessage",message)
    const data = JSON.parse(message);
    
    switch (data.type) {
      case 'offer':
        const targetClient = clients.get(data.targetUserId);
        if (targetClient) {
          targetClient.send(JSON.stringify({
            type: 'offer',
            offer: data.offer,
            fromUserId: userId,
            fromName: data.fromName
          }));
        }
        break;

      case 'answer':
        const callerClient = clients.get(data.targetUserId);
        if (callerClient) {
          callerClient.send(JSON.stringify({
            type: 'answer',
            answer: data.answer
          }));
        }
        break;

      case 'ice-candidate':
        const otherClient = clients.get(data.targetUserId);
        if (otherClient) {
          otherClient.send(JSON.stringify({
            type: 'ice-candidate',
            candidate: data.candidate
          }));
        }
        break;
    }
  });

  ws.on('close', () => {
    clients.delete(userId);
  });
});

function generateUserId() {
  return Math.random().toString(36).substr(2, 9);
} 