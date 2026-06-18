const express = require("express");
const app = express();

const aura = {};

// 🔥 sorteia e soma, mas NÃO mostra total
app.get("/aura/:user", (req, res) => {
    const user = req.params.user.toLowerCase();

    const valor = Math.floor(Math.random() * 2001) - 1000;

    aura[user] = (aura[user] || 0) + valor;

    res.send(
        `@${user} recebeu ${valor >= 0 ? "+" : ""}${valor} de Aura!`
    );
});

// 👀 só consulta o total
app.get("/saldo/:user", (req, res) => {
    const user = req.params.user.toLowerCase();

    res.send(
        `@${user}, sua Aura atual é ${aura[user] || 0}`
    );
});

app.listen(3000, () => {
    console.log("API rodando na porta 3000");
});