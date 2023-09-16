const express = require('express')
const app = express()
const pg = require('pg-promise')()
const port = 3000


const db = pg('postgres://corcoding@localhost:5432/corcoding')

app.get('/videos', async (req, res) => {
    const vids = await db.any('SELECT media_path FROM media') 
    res.send(vids)
})

app.listen(port, () => {
    console.log('Server is running on port 3000')
})