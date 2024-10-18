const express = require('express');
const cors = require('cors');
const { connectDB } = require('./db');
const bodyParser = require('body-parser');
const logger = require('morgan');
const { Category, Product } = require('./models')

const categoryController = require('./controllers/categoryController');
const productController = require('./controllers/productController');

const PORT = process.env.PORT || 3001;

const app = express();
app.use(cors());
app.use(express.json());
app.use(logger('dev'));
app.use(bodyParser.json());

(async () => {
    try {
        await connectDB();
    } catch (error) {
        console.error('Failed to connect to the database');
        process.exit(1); // Exit process if the DB connection fails
    }
})();

app.listen(PORT, () => console.log(`Listening on port: ${PORT}`))

app.get('/', (req, res) => res.send('This is our landing page!'))

app.get('/categories', categoryController.getAllCategories)
app.get('/categories/:id', categoryController.getCategoryById)
app.post('/categories', categoryController.createCategory)
app.put('/categories/:id', categoryController.updateCategory)
app.delete('/categories/:id', categoryController.deleteCategory)

app.get('/products', productController.getAllProducts)
app.get('/products/:id', productController.getProductById)
app.post('/products', productController.createProduct)
app.put('/products/:id', productController.updateProduct)
app.delete('/products/:id', productController.deleteProduct)

process.on('SIGINT', async () => {
    await mongoose.connection.close();
    console.log('Database connection closed');
    process.exit(0);
});