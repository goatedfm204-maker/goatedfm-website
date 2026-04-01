import { useState } from "react";

export default function Home() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const whatsappLink = "https://chat.whatsapp.com/KrAq2hk2bQB2px9QaoNLVe";
  const payfastBasic = "https://payfast.io/basic";
  const payfastStandard = "https://payfast.io/standard";
  const payfastPremium = "https://payfast.io/premium";

  const handleLogin = (e) => {
    e.preventDefault();
    if(username === "user" && password === "1234") {
      setLoggedIn(true);
    } else {
      alert("Invalid credentials");
    }
  };

  if(!loggedIn) {
    return (
      <div style={{ textAlign: "center", padding: 40, background: "#111", color: "#fff", minHeight: "100vh" }}>
        <h1>GOATEDFM Forex Academy</h1>
        <p>Learn Forex for FREE. Grow your skills. Build real trading income.</p>
        <a href={whatsappLink} target="_blank" rel="noreferrer">
          <button style={{ marginTop: 16, padding: "12px 24px", borderRadius: 12, background: "#4f46e5", color: "#fff", border: "none" }}>
            Join WhatsApp Community
          </button>
        </a>
        <h2 style={{ marginTop: 40 }}>Member Login</h2>
        <form onSubmit={handleLogin} style={{ display: "flex", flexDirection: "column", gap: 12, maxWidth: 300, margin: "20px auto" }}>
          <input type="text" placeholder="Username" value={username} onChange={e => setUsername(e.target.value)} required style={{ padding: 12, borderRadius: 8 }} />
          <input type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} required style={{ padding: 12, borderRadius: 8 }} />
          <button type="submit" style={{ padding: "12px 24px", borderRadius: 12, background: "#4f46e5", color: "#fff", border: "none" }}>Login</button>
        </form>
      </div>
    );
  }

  return (
    <div style={{ background: "#111", color: "#fff", minHeight: "100vh", padding: 40 }}>
      <h1 style={{ textAlign: "center" }}>Dashboard</h1>
      <button onClick={() => setLoggedIn(false)} style={{ display: "block", margin: "20px auto", padding: "12px 24px", borderRadius: 12, background: "#e11d48", color: "#fff", border: "none" }}>
        Logout
      </button>
      <div style={{ display: "flex", flexWrap: "wrap", gap: 20, justifyContent: "center", marginTop: 20 }}>
        <div style={{ border: "1px solid #444", padding: 16, borderRadius: 12, width: 200, textAlign: "center" }}>
          <h3>Exclusive Courses</h3>
          <ul>
            <li>Beginner Forex</li>
            <li>Technical Analysis</li>
            <li>Risk Management</li>
          </ul>
        </div>
        <div style={{ border: "1px solid #444", padding: 16, borderRadius: 12, width: 200, textAlign: "center" }}>
          <h3>Download EA Bots</h3>
          <a href={payfastBasic} target="_blank" rel="noreferrer">
            <button style={{ marginTop: 8, padding: "12px 24px", borderRadius: 12, background: "#4f46e5", color: "#fff", border: "none" }}>Basic Bot</button>
          </a>
          <a href={payfastStandard} target="_blank" rel="noreferrer">
            <button style={{ marginTop: 8, padding: "12px 24px", borderRadius: 12, background: "#4f46e5", color: "#fff", border: "none" }}>Standard Bot</button>
          </a>
          <a href={payfastPremium} target="_blank" rel="noreferrer">
            <button style={{ marginTop: 8, padding: "12px 24px", borderRadius: 12, background: "#4f46e5", color: "#fff", border: "none" }}>Premium Bot</button>
          </a>
        </div>
        <div style={{ border: "1px solid #444", padding: 16, borderRadius: 12, width: 200, textAlign: "center" }}>
          <h3>Signals & Alerts</h3>
          <a href={whatsappLink} target="_blank" rel="noreferrer">
            <button style={{ marginTop: 8, padding: "12px 24px", borderRadius: 12, background: "#4f46e5", color: "#fff", border: "none" }}>Join WhatsApp Signals</button>
          </a>
        </div>
      </div>
      <footer style={{ textAlign: "center", marginTop: 40, borderTop: "1px solid #444", paddingTop: 16 }}>
        © {new Date().getFullYear()} GOATEDFM Forex Academy
      </footer>
    </div>
  );
)
