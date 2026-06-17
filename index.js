import express from "express";

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.get("/", (req, res) => {
    res.json({ mensaje: "Bienvenidos a nuestra API" });
});

app.get("/api", (req, res) => {
    res.json({
        nombre: "María José",
        email: "mjhervasmozos26@gmail.com"
    });
});
app.listen(PORT, () => {
    console.log(`Servidor iniciado en puerto ${PORT}`);
});