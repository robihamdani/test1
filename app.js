const express = require('express');
const app = express();
const db = require('./config/config');
const Orang = require('./models/Orang');

// set bodyparser express
app.use(express.urlencoded({ extended: true }));


db.authenticate()
    .then(() => console.log('berhasil di load'))

app.get('/', (req, res) => res.send('berhasil di buka'))

app.post('/', (req, res) => {
    const { nama } = req.body

    const newOrang = new Orang({
        nama
    })

    newOrang.save()
        .then(() => res.send('berhasil dikirim'))
})

app.listen(4500, () => console.log('berhasil di bukan di port 4500'))