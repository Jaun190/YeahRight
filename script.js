let user = {
  connected: false,
  subscribed: false,
  plan: null,
  hashrate: 0,
  rewards: 0
};

// Connect Wallet
document.getElementById("connectBtn").addEventListener("click", async () => {
  if (typeof window.ethereum !== "undefined") {
    try {
      await ethereum.request({ method: "eth_requestAccounts" });
      user.connected = true;
      document.getElementById("mainContent").classList.remove("hidden");
      document.getElementById("subscriptionModal").classList.remove("hidden");
    } catch (err) {
      alert("Wallet Verbindung fehlgeschlagen!");
    }
  } else {
    alert("Bitte installiere MetaMask!");
  }
});

// Subscription kaufen
function buySubscription(plan) {
  user.subscribed = true;
  user.plan = plan;

  if (plan === 1) user.hashrate = 50;
  if (plan === 2) user.hashrate = 200;
  if (plan === 3) user.hashrate = 1000;

  document.getElementById("status").innerText = "Aktiv ✅";
  document.getElementById("status").classList.remove("text-red-400");
  document.getElementById("status").classList.add("text-green-400");
  document.getElementById("hashrate").innerText = user.hashrate + " H/s";
  document.getElementById("subscriptionModal").classList.add("hidden");

  // Fake Reward Update Loop
  setInterval(() => {
    user.rewards += user.hashrate * 0.000001;
    document.getElementById("rewards").innerText = user.rewards.toFixed(4) + " ETH";
  }, 2000);
}

// Navigation
function switchPage(page) {
  if (page === "dashboard") {
    alert("Dashboard geöffnet.");
  }
  if (page === "admin") {
    alert("Admin-Bereich geöffnet. Hier kannst du Pools und Raten festlegen.");
  }
  if (page === "withdraw") {
    alert("Auszahlung geöffnet.");
  }
}
