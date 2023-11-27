const express = require("express")
const exphbs = require("express-handlebars")

const app = express()

app.engine('handlebars', exphbs.engine())
app.set('view engine', 'handlebars')

app.get('/', (requisicao, resposta) => {
    resposta.send("Olá, viadinho!")
})

app.listen(3000, () => {
    console.log("Trabalho do Marcio rodando na porta 3000!")
})