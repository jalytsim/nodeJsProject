const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));

// Routes
app.get('/', (req, res) => {
    res.render('index');
});

app.post('/add', (req, res) => {
    // Récupérer les données du formulaire
    const { numed, nom, nombre_de_jours, taux_journalier, prestation } = req.body;
    // Enregistrer les données dans la base de données (non inclus dans cet exemple)
    // Rediriger vers la page d'accueil
    res.redirect('/');
});

// Lancer le serveur
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Serveur en écoute sur le port ${PORT}`);
});
