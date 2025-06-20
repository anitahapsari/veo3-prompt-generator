import React from "react";
import ReactDOM from "react-dom/client";

const App = () => {
  return (
    <div style={{ fontFamily: "sans-serif", padding: "20px" }}>
      <h1>Veo 3 Prompt Generator</h1>
      <p>Masukkan teks dan hasilkan prompt video sinematik.</p>
      <p style={{ color: "gray" }}>Versi sederhana</p>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root")!);
root.render(<App />);
