require('dotenv').config();
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const User = require('./src/models/user.model');
const Book = require('./src/models/book.model');

(async () => {
    await mongoose.connect(process.env.MONGO_URL);
    console.log('Connected for seeding');


    await User.deleteMany({});
    await Book.deleteMany({});


    const admin = new User({
    name: 'Admin',
    email: 'admin@veritas.local',
    password: await bcrypt.hash('password', 10),
    role: 'admin'
});

await admin.save();


// NOTE: example cover file path from your uploaded image
const sampleCover = '/mnt/data/4abdd7eb-0c4b-4ae7-9811-3f899e54d532.png';


const books = [
    { title: 'Introduction to Algorithms', author: 'Cormen', year: 2009, pages: 1312, size: '5 MB', format: 'PDF', coverUrl: sampleCover },
    { title: 'Clean Code', author: 'Robert C. Martin', year: 2008, pages: 464, size: '2 MB', format: 'PDF', coverUrl: sampleCover },
    { title: 'Design Patterns', author: 'GoF', year: 1994, pages: 395, size: '3 MB', format: 'PDF', coverUrl: sampleCover }
];


    await Book.insertMany(books);
    console.log('Seeding done');
    process.exit(0);
}) ();