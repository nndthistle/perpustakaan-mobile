const express = require('express');
const router = express.Router();
const BookController = require('../controllers/book.controller');
const auth = require('../middleware/auth.middleware');


// public
router.get('/', BookController.getBooks);
router.get('/:id', BookController.getBook);


// protected (admin/upload)
router.post('/', auth, BookController.createBook);
router.put('/:id', auth, BookController.updateBook);
router.delete('/:id', auth, BookController.deleteBook);


module.exports = router;