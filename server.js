const express = require('express');
const app = express();

// Configurar el motor de plantillas
app.set('view engine', 'hbs');

// Rutas que renderizan las plantillas HBS
app.get('/index', (req, res) => res.render('index'));

app.get('/about', (req, res) => {
  res.render('about', {
    title: 'Sobre Nosotros',
    description: 'Esta es la página sobre nosotros, donde describimos nuestra misión y visión.',
  });
});

app.get('/contact', (req, res) => res.render('contact'));

// Manejo de errores 404 (Página no encontrada)
app.use((req, res) => {
  res.status(404).render('404');
});

// Manejo de errores 500 (Error interno del servidor)
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).render('500');
});

// Iniciar el servidor
app.listen(3000, () => console.log('Servidor corriendo en http://localhost:3000'));
