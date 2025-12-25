const LOGIN_URL = "https://medique-1-5t6w.onrender.com/api/user/login";

const statusEl = document.getElementById("status");
const timeEl = document.getElementById("time");

function randomInterval() {
  return (Math.floor(Math.random() * 5) + 1) * 60 * 1000;
}

async function pingLogin() {
  const now = new Date().toLocaleTimeString();
  statusEl.textContent = "🔄 Sending login request…";
  timeEl.textContent = `Last attempt: ${now}`;

  try {
    const response = await fetch(LOGIN_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        email: "manscientificks@gmail.com",
        password: "12345678"
      })
    });

    const data = await response.json();

    if (response.ok) {
      statusEl.textContent = "✅ Login ping successful";
      console.log("Success:", data);
    } else {
      statusEl.textContent = "⚠️ Login failed (server alive)";
      console.log("Error response:", data);
    }

  } catch (error) {
    statusEl.textContent = "❌ Network error";
    console.error("Request failed:", error);
  }

  setTimeout(pingLogin, randomInterval());
}

pingLogin();
