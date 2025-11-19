import express from 'express';

const app = express()
app.use(express.json())

const users = []

let usuarios = []
app.post('/usuarios', (req, res) => {
usuarios.push(req.body)
res.status(201).send('Usuário criado com sucesso!');
});

app.get('/usuarios', (req, res) => {
    res.status(200).send(usuarios);
});


app.listen(3000)
