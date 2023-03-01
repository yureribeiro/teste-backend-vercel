const express = require('express')
const app = express()
app.use(cors())

const port = process.env.PORT || 4000

app.get('/', (req, res) => {
  return res.json('hello world')
})


app.listen(port, () => {
  console.log(`App running on port ${port}.`)
})