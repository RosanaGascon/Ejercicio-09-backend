const express = require('express');
const path = require('path');
const app = express();

// Configurar el motor de plantillas
app.set('view engine', 'hbs');

// Configurar el directorio de archivos estáticos
app.use(express.static('public'));

// Rutas que renderizan las plantillas HBS
app.get('/index', (req, res) => {
  res.render('index', {
    title: 'Página Principal',
    description: 'Bienvenido a nuestro sitio web. Explora para aprender más sobre nosotros.',
  });
});

app.get('/about', (req, res) => {
  res.render('about', {
    title: 'Sobre Nosotros',
    description: 'Esta es la página sobre nosotros, donde describimos nuestra misión y visión.',
  });
});

app.get('/contact', (req, res) => {
  res.render('contact', {
    title: 'Contáctanos',
    description: 'Completa el formulario para comunicarte con nosotros.',
  });
});

// Manejo de errores 404
app.use((req, res) => {
  res.status(404).render('404', {
    title: 'Página no encontrada',
    message: 'Lo sentimos, pero la página que estás buscando no existe.',
  });
});

// Manejo de errores 500
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).render('500', {
    title: 'Error del servidor',
    message: 'Ocurrió un problema en el servidor. Por favor, intenta nuevamente más tarde.',
  });
});

// Iniciar el servidor
app.listen(3000, () => {
  console.log('Servidor corriendo en http://localhost:3000');
});
