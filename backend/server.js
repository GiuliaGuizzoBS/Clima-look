import "dotenv/config"
import express from "express"
import cors from "cors"
import path from "path"
import { fileURLToPath } from "url"
import { db } from "./db.js"

const app = express()
app.use(cors())
app.use(express.json())

// Ajuste para usar __dirname com import
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

// Servir frontend
app.use(express.static(path.join(__dirname, "../public")))

// Rota da API para registrar acesso
app.post("/registrar-acesso", (req, res) => {
  const { tempMax, tempMin, cidade } = req.body

  const sql = `
    INSERT INTO acessos (data_hora, temp_max, temp_min, cidade)
    VALUES (NOW(), ?, ?, ?)
  `

  db.query(sql, [tempMax, tempMin, cidade], (err) => {
    if (err) return res.status(500).json(err)
    res.json({ ok: true })
  })
})

// Página principal
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/index.html"))
})

app.listen(3000, () => {
  console.log("Servidor rodando em http://localhost:3000")
})
