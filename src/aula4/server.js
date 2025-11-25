const app = require('./app')
const PORT = process.env.PORT || 5000;
const path = require('path')

app.set('views', path.resolve(__dirname, 'src', 'views'))
app.set('view engine', 'ejs')

app.listen(PORT, () => {
    console.log(`O servidor está rodando na porta ${PORT} 👋`)
})