exports.paginaInicial = (req,res) => {
    res.send('Conectado ao Express!')
}

exports.trataPost = (req,res) => {
    res.send('Sou sua nova rota de post!')
}