
const servers = [
  "https://medique-hu66.onrender.com/",
  "https://medique-1-5t6w.onrender.com/"
];

function randomDelay() {
  return Math.floor(Math.random() * 5 + 1) * 60 * 1000; // 1–5 minutes
}

async function pingServers() {
  document.getElementById("status").innerText =
    "Pinging at " + new Date().toLocaleTimeString();

  for (const url of servers) {
    try {
      await fetch(url, { method: "GET", cache: "no-store" });
      console.log("Pinged:", url);
    } catch (err) {
      console.error("Failed to ping:", url, err);
    }
  }

  const next = randomDelay();
  setTimeout(pingServers, next);
}

pingServers();
