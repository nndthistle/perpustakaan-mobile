    const Book = require('../models/book.model');

    exports.createBook = async (req, res) => {
        try {
            const data = req.body;
            
            if (req.file) {
                data.pdfUrl = '/uploads/books/' + req.file.filename;
            }
        
            const book = await Book.create(data);
            res.status(201).json(book);
        } catch (err) {
            console.error(err);
            res.status(500).json({ message: 'Server error' });
        }
    };


    exports.getBooks = async (req, res) => {
        try {   
            const { q, page = 1, limit = 12 } = req.query;
            const filter = {};
            if (q) filter.$or = [ { title: new RegExp(q, 'i') }, { author: new RegExp(q, 'i') } ];


            const skip = (page - 1) * limit;
            const [books, total] = await Promise.all([
                Book.find(filter).skip(Number(skip)).limit(Number(limit)).sort({ createdAt: -1 }),
                Book.countDocuments(filter)
            ]);


            res.json({ data: books, meta: { total, page: Number(page), limit: Number(limit) } });
        } catch (err) {
            console.error(err);
            res.status(500).json({ message: 'Server error' });
        }
    };

    exports.getBook = async (req, res) => {
        try {
            const book = await Book.findById(req.params.id);
            if (!book) return res.status(404).json({ message: 'Book not found' });
            res.json(book);
        } catch (err) {
            console.error(err);
            res.status(500).json({ message: 'Server error' });
        }
    };

    exports.updateBook = async (req, res) => {
        try {
            const book = await Book.findByIdAndUpdate(req.params.id, req.body, { new: true });
            res.json(book);
        } catch (err) {
            console.error(err);
            res.status(500).json({ message: 'Server error' });
        }
    };

    exports.deleteBook = async (req, res) => {
        try {
            await Book.findByIdAndDelete(req.params.id);
            res.json({ message: 'Book deleted' });
        } catch (err) {
            console.error(err);
            res.status(500).json({ message: 'Server error' });
        }
    };