import express from 'express'
const app = express()

app.use(express.static('pub'))

app.listen(8081)
