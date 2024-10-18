const mongoose = require('mongoose');
const { connectDB } = require('../db');
const { Product, Category } = require('../models');

const main = async () => {

    //Counter top------------------------
    const counterTop = await new Category({
        name: "Counter Top",
        description: "Counter top appliances are compact and versatile kitchen essentials designed to fit neatly on your counters, offering convenience and functionality without the need for major installations. Perfect for small tasks and quick meal preparation.",
        installationNeeded: false,
        averagePriceRange: "low",
    });
    await counterTop.save()

    //cooking------------------------
    const cooking = await new Category({
        name: "Cooking",
        description: "Cooking appliances are the heart of any kitchen, providing the tools needed to prepare meals efficiently and deliciously. From ovens and stoves to microwaves and air fryers, these appliances help bring culinary creations to life.",
        installationNeeded: true,
        averagePriceRange: "medium"
    });
    await cooking.save()
    
    //storage------------------------
    const storage = await new Category({
        name: "Storage",
        description: "Storage appliances are designed to preserve and organize your food and ingredients, keeping them fresh and easily accessible. Refrigerators, freezers, and wine coolers are key examples, ensuring food safety and longevity.",
        installationNeeded: true,
        averagePriceRange: "high"
    });
    await storage.save()

    //cleaning------------------------
    const cleaning = await new Category({
        name: "Cleaning",
        description: "Cleaning appliances make kitchen maintenance a breeze, handling everything from dishwashing to surface cleaning. These time-saving machines ensure your kitchen stays hygienic and spotless with minimal effort.",
        installationNeeded: true,
        averagePriceRange: "low"
    });
    await cleaning.save()

    console.log("Created some categories!")
}

const run = async () => {
    await connectDB();
    await main();
    mongoose.connection.close();
};

run();