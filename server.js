const express = require('express')
const app = express()
const PORT = process.env.PORT || 4000;

app.set('view engine', 'ejs');
app.use(express.json());
app.use(express.static('public'));


app.get('/', (req, res) => {
    res.render('zork.ejs')
})

app.listen(PORT, () => console.log(`SERVER STARTED AT http://localhost:${PORT}/`))
