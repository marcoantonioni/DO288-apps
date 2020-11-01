const express = require('express');

const router = express.Router();

/* GET home page. */
router.get('/', (req, res) => {
  res.render('index', { title: 'The Book List in branch Marco1' });
});

module.exports = router;
