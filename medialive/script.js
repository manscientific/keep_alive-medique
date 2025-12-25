
const BASE_URL = "https://medique-hu66.onrender.com";
const ROUTES = [
  "/count/mahesh"
];

function randomDelay() {
  // random delay between 1 and 5 minutes
  return (Math.floor(Math.random() * 5) + 1) * 60 * 1000;
}

async function pingBackend() {
  const status = document.getElementById("status");
  const time = new Date().toLocaleTimeString();

  for (const route of ROUTES) {
    try {
      await fetch(BASE_URL + route, {
        method: "GET",
        cache: "no-store"
      });
      console.log(`Pinged ${route} at ${time}`);
      status.innerText = `Last ping: ${route} @ ${time}`;
    } catch (err) {
      console.error("Ping failed:", err);
      status.innerText = `Ping failed @ ${time}`;
    }
  }

  const next = randomDelay();
  setTimeout(pingBackend, next);
}

pingBackend();
