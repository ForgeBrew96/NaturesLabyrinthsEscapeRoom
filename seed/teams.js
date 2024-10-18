const mongoose = require('mongoose');
const { connectDB } = require('../db');
const { Product, Category } = require('../models');

const main = async () => {

    const CounterTop = await Category.findOne({ name: 'Counter Top' });

const counterTopProducts = [
    {
        name: 'KitchenAid Stand Mixer',
        priceUSD: 299.99,
        image: 'https://m.media-amazon.com/images/I/71KiX7LRTML._AC_UF894,1000_QL80_.jpg',
        brand: 'KitchenAid',
        category: CounterTop._id,
        type: "equipment"
    },
    {
        name: 'Ninja Blender',
        priceUSD: 129.99,
        image: 'https://m.media-amazon.com/images/I/611fTyu1SPL.jpg',
        brand: 'Ninja',
        category: CounterTop._id,
        type: "equipment"
    }
];
await Product.insertMany(counterTopProducts);

const Cooking = await Category.findOne({ name: 'Cooking' });

const cookingProducts = [
    {
        name: 'Instant Pot Duo 7-in-1',
        priceUSD: 89.99,
        image: 'https://m.media-amazon.com/images/I/41rWzhsm-tL._AC_.jpg',
        brand: 'Instant Pot',
        category: Cooking._id,
        type: "equipment"
    },
    {
        name: 'Breville Smart Oven Air Fryer',
        priceUSD: 399.95,
        image: 'https://m.media-amazon.com/images/I/611+0k4S02L._AC_UF894,1000_QL80_.jpg',
        brand: 'Breville',
        category: Cooking._id,
        type: "equipment"
    }
];
await Product.insertMany(cookingProducts);

const Storage = await Category.findOne({ name: 'Storage' });

const storageProducts = [
    {
        name: 'Whirlpool French Door Refrigerator',
        priceUSD: 1599.99,
        image: 'https://images.thdstatic.com/productImages/84a7593f-49f8-48c5-b56d-1a3803469acb/svn/fingerprint-resistant-stainless-steel-whirlpool-french-door-refrigerators-wrx735sdhz-64_1000.jpg',
        brand: 'Whirlpool',
        category: Storage._id,
        type: "equipment"
    },
    {
        name: 'Samsung Chest Freezer',
        priceUSD: 599.99,
        image: 'https://image-us.samsung.com/SamsungUS/home/home-appliances/refrigerators/pdp/rp22t31137z-aa/gallery/RP22T31137Z_01_Silver_SCOM.jpg?$product-details-jpg$',
        brand: 'Samsung',
        category: Storage._id,
        type: "equipment"
    }
];
await Product.insertMany(storageProducts);

const Cleaning = await Category.findOne({ name: 'Cleaning' });

const cleaningProducts = [
    {
        name: 'Bosch 300 Series Dishwasher',
        priceUSD: 799.99,
        image: 'https://images.webfronts.com/cache/metmnwgarogw.jpg?imgeng=/w_500/h_500/m_letterbox_ffffff_100',
        brand: 'Bosch',
        category: Cleaning._id,
        type: "equipment"
    },
    {
        name: 'Dyson V11 Vacuum Cleaner',
        priceUSD: 599.99,
        image: 'https://www.bestvacuum.com/cdn/shop/files/DysonV11CordlessVacuum44792101_9.jpg?v=1715625241&width=2000',
        brand: 'Dyson',
        category: Cleaning._id,
        type: "equipment"
    }
];
await Product.insertMany(cleaningProducts);

console.log("Created some products!")

}


const run = async () => {
    await connectDB();
    await main();
    mongoose.connection.close();
};

run();