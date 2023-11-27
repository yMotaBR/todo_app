const express = require("express")

const app = express()

app.get('/', (requisicao, resposta) => {
    resposta.send("Olá, viadinho!")
})

app.listen(3000, () => {
    console.log("Trabalho do Marcio rodando na porta 3000!")
})