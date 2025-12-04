import express from 'express'
import path from 'path'
import { fileURLToPath } from 'url';
import { characters } from './database/character.js'


const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const app = express()

// Home route - HTML
app.get('/characters', (req, res) => {
  res.status(200).json(characters)
})

app.get('/characters/:id', (req, res) => {
  const { id } = req.params;
  const idNumber = parseInt(id, 10);
  const characterResult = characters.filter(a => a.id ==  idNumber) || []
  if (characterResult.length == 0) {
    res.status(404).json({ message: "character is note found" })
  }

  res.status(200).json(characterResult[0])
})

app.get('/about', function (req, res) {
  res.sendFile(path.join(__dirname, '..', 'components', 'about.htm'))
})

// Example API endpoint - JSON
app.get('/api-data', (req, res) => {
  res.json({
    message: 'Here is some sample API data',
    items: ['apple', 'banana', 'cherry'],
  })
})

// Health check
app.get('/healthz', (req, res) => {
  res.status(200).json({ status: 'ok', timestamp: new Date().toISOString() })
})

export default app
