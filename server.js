const express = require("express");
const multer = require("multer");
const path = require("path");

const app = express();
const PORT = 3000;

// Configurar onde salvar os arquivos enviados
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/"); // pasta onde as imagens vão ficar
  },
  filename: (req, file, cb) => {
    const uniqueName = Date.now() + "-" + file.originalname;
    cb(null, uniqueName);
  },
});

const upload = multer({ storage: storage });

// Servir os arquivos estáticos (HTML, CSS, JS)
app.use(express.static("public"));

// Rota para receber o formulário com imagens
app.post("/enviar-formulario", upload.array("imagens", 5), (req, res) => {
  const dados = req.body;
  const imagens = req.files;

  console.log("📄 Dados recebidos:", dados);
  console.log("🖼️ Imagens recebidas:", imagens);

  // Aqui você pode salvar os dados num banco de dados se quiser

  res.json({ mensagem: "Venda cadastrada com sucesso!" });
});

// Iniciar o servidor
app.listen(PORT, () => {
  console.log(`🚀 Servidor rodando em http://localhost:${PORT}`);
});
