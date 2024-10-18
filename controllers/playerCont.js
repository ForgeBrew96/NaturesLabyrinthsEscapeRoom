const Category = require('../models/category');

const getAllCategories = async (req, res) => {
    try {
        const categories = await Category.find()
        res.json(categories)
    } catch (error) {
        return res.status(500).send(error.message);
    }
}

const getCategoryById = async (req, res) => {
    try {
        const { id } = req.params;
        const category = await Category.findById(id)
        if (category) {
            return res.json(category);
        }
        return res.status(404).send('Category with the specified ID does not exists');
    } catch (error) {
        return res.status(500).send(error.message);
    }
}

const createCategory = async (req, res) => {
    try {
        const category = await new Category(req.body)
        await category.save()
        return res.status(201).json({
            category,
        });
    } catch (error) {
        return res.status(500).json({ error: error.message })
    }
}
const updateCategory = async (req, res) => {
    try {
        let { id } = req.params;
        let category = await Category.findByIdAndUpdate(id, req.body, { new: true })
        if (category) {
            return res.status(200).json(category)
        }
        throw new Error("Category not found")
    } catch (error) {
        return res.status(500).send(error.message);
    }
}

const deleteCategory = async (req, res) => {
    try {
        const { id } = req.params;
        const deleted = await Category.findByIdAndDelete(id)
        if (deleted) {
            return res.status(200).send("Category deleted");
        }
        throw new Error("Category not found");
    } catch (error) {
        return res.status(500).send(error.message);
    }
}

module.exports = {
    getAllCategories,
    getCategoryById,
    updateCategory,
    deleteCategory,
    createCategory
}