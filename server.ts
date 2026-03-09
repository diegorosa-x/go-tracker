import express from "express";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

async function startServer() {
  const app = express();
  const PORT = 3002;

  app.use(cors());
  app.use(express.json());

  app.post("/api/contact", async (req, res) => {
    const { name, email, phone, city, message } = req.body;

    console.log("Novo contato recebido:", { name, email, phone, city, message });

    try {
      const response = await fetch("https://formspree.io/f/xovajpoy", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          phone,
          city,
          message,
          _subject: `Novo Contato do Site - ${name}`,
        }),
      });

      if (response.ok) {
        return res.status(200).json({
          success: true,
          message: "Mensagem enviada com sucesso!",
        });
      }

      const errorText = await response.text();
      console.error("Erro ao enviar para Formspree:", errorText);

      return res.status(500).json({
        success: false,
        message: "Não foi possível enviar a mensagem.",
      });
    } catch (error) {
      console.error("Erro no processamento do contato:", error);

      return res.status(500).json({
        success: false,
        message: "Erro ao processar sua mensagem.",
      });
    }
  });

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();