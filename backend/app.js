const express = require('express')
const cors = require('cors')
const app = express()
const port = 3000

app.use(cors())
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.post('/registration', (req, res) => {
	res.status(200).send({ id: 1 })
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
