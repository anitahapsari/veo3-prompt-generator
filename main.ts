// main.ts
import { GeminiService } from "./services/GeminiService";

// Prompt contoh – kamu bisa ubah ini sesuai keinginanmu
const input = "Saya ingin membuat video tentang pentingnya menjaga lingkungan bagi anak-anak.";

const run = async () => {
  const apiKey = process.env.GOOGLE_API_KEY || "";
  const gemini = new GeminiService(apiKey);

  try {
    const hasil = await gemini.generatePrompt(input);
    console.log("✅ Prompt berhasil dibuat:\n", hasil);
  } catch (err) {
    console.error("❌ Gagal menghasilkan prompt:", err);
  }
};

run();
