const app = require('./app')
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`O servidor está rodando na porta ${PORT} 👋`)
})