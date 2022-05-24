(async () => {
  require('dotenv').config();

  const express = require('express');
  const ejs = require('ejs');
  const app = express();
  const PORT = process.env.PORT ?? 3000;

  app.use(express.json());
  app.use(express.urlencoded({extended:true}));

  app.get('*', (req, res) => {
    res.status(404).render('404');
  });

  app.listen(PORT, console.log(`Listening on port ${PORT}...`));
})();
