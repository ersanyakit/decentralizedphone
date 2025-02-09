importScripts("https://cdn.jsdelivr.net/npm/@solana/web3.js@1.73.0/lib/index.umd.min.js");
importScripts("https://cdn.jsdelivr.net/npm/ethers@5.7.2/dist/ethers.umd.min.js");

const BLOCKCHAINS = {
  solana: {
    rpc: "wss://api.mainnet-beta.solana.com",
    connection: null,
    watchAddress: "YourSolanaAddressHere",
    explorer: "https://solscan.io/tx/",
    setup: function () {
      this.connection = new solanaWeb3.Connection(this.rpc, "confirmed");
    },
    listen: function () {
      this.connection.onLogs(this.watchAddress, async (logInfo) => {
        sendNotification("🔹 Solana İşlemi", `Yeni işlem: ${logInfo.signature}`, `${this.explorer}${logInfo.signature}`);
      }, "confirmed");
    }
  },
  avalanche: {
    rpc: "https://api.avax.network/ext/bc/C/rpc",
    provider: null,
    watchContract: "YourAvalancheContractHere",
    explorer: "https://snowtrace.io/tx/",
    setup: function () {
      this.provider = new ethers.providers.JsonRpcProvider(this.rpc);
    },
    listen: function () {
      const abi = [
        "event Transfer(address indexed from, address indexed to, uint256 value)"
      ];
      const contract = new ethers.Contract(this.watchContract, abi, this.provider);
      contract.on("Transfer", (from, to, value, event) => {
        sendNotification("🔹 Avalanche Transfer", `Gönderen: ${from} -> Alıcı: ${to}\nMiktar: ${ethers.utils.formatEther(value)} AVAX`, `${this.explorer}${event.transactionHash}`);
      });
    }
  },
  ethereum: {
    rpc: "wss://mainnet.infura.io/ws/v3/YOUR_INFURA_PROJECT_ID",
    provider: null,
    watchContract: "YourEthereumContractHere",
    explorer: "https://etherscan.io/tx/",
    setup: function () {
      this.provider = new ethers.providers.WebSocketProvider(this.rpc);
    },
    listen: function () {
      const abi = [
        "event Transfer(address indexed from, address indexed to, uint256 value)"
      ];
      const contract = new ethers.Contract(this.watchContract, abi, this.provider);
      contract.on("Transfer", (from, to, value, event) => {
        sendNotification("🔹 Ethereum Transfer", `Gönderen: ${from} -> Alıcı: ${to}\nMiktar: ${ethers.utils.formatEther(value)} ETH`, `${this.explorer}${event.transactionHash}`);
      });
    }
  }
};

// 📢 Bildirim Gönderme Fonksiyonu
function sendNotification(title, body, url) {
  self.registration.showNotification(title, {
    body: body,
    icon: "https://cryptologos.cc/logos/ethereum-eth-logo.png",
    data: { url: url }
  });
}

// 🚀 Blockchain’leri Başlat
async function startListening() {
  Object.values(BLOCKCHAINS).forEach(async (chain) => {
    chain.setup();
    chain.listen();
  });
}

// 🟢 Service Worker Aktifleştirildiğinde Dinlemeye Başla
self.addEventListener("activate", (event) => {
  event.waitUntil(startListening());
});

// 🔗 Bildirime Tıklanınca İşlem Sayfasını Aç
self.addEventListener("notificationclick", (event) => {
  event.notification.close();
  const urlToOpen = event.notification.data?.url || "https://google.com";
  event.waitUntil(clients.openWindow(urlToOpen));
});