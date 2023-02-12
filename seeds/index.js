const seedRecipe = require('./recipe_seed');
const sequelize = require('../config/connection');

const seedAll = async () => {// Define an asynchronous function to seed the database
    try {
        await sequelize.sync({ force: true });// Synchronize the database, dropping any existing tables and recreating them
        console.log('\n ===== DATABASE SYNCED =====\n');// Log a message to the console

        await seedRecipe();// Seed the database with the "seedFood" array
        console.log('\n ===== FOOD SEEDED =====\n');// Log a message to the console
        
        // await seedUser();// Seed the database with the "seedUser" array
        // console.log('\n ===== USER SEEDED =====\n');// Log a message to the console

        process.exit(0);// Exit the process
    } catch (error) {
        console.error(error);
        process.exit(1);
        }
};
seedAll();// Call the "seedDb" function