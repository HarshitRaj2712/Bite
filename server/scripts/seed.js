const mongoose = require('mongoose');
require('dotenv').config();
const User = require('../models/User');
const Meal = require('../models/Meal');

const MONGO_URI = process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/ai_nutrition_tracker';

const connect = async () => {
  await mongoose.connect(MONGO_URI, { dbName: 'ai_nutrition_tracker' });
  console.log('Connected to Mongo for seeding');
};

const seed = async () => {
  try {
    await connect();

    // Check if users already exist
    const usersCount = await User.countDocuments();
    if (usersCount > 0) {
      console.log('Users already exist — skipping seeding users.');
    } else {
      const user = await User.create({
        name: 'Demo Admin',
        email: 'admin@example.com',
        password: 'password123',
        age: 30,
        weight: 75,
        height: 175,
        fitnessGoal: 'Maintain',
        calorieGoal: 2200,
        role: 'admin',
      });
      console.log('Created demo user:', user.email);

      // Create some sample meals for the demo user
      const meals = [
        {
          userId: user._id,
          mealType: 'Breakfast',
          foodName: 'Oatmeal with Banana',
          calories: 350,
          protein: 10,
          carbs: 60,
          fats: 6,
          sugar: 12,
          fiber: 6,
        },
        {
          userId: user._id,
          mealType: 'Lunch',
          foodName: 'Grilled Chicken Salad',
          calories: 480,
          protein: 45,
          carbs: 18,
          fats: 22,
        },
        {
          userId: user._id,
          mealType: 'Dinner',
          foodName: 'Salmon & Brown Rice',
          calories: 620,
          protein: 40,
          carbs: 55,
          fats: 20,
        },
      ];

      await Meal.insertMany(meals);
      console.log('Inserted sample meals.');
    }

    console.log('Seeding complete.');
    process.exit(0);
  } catch (err) {
    console.error('Seeding error:', err);
    process.exit(1);
  }
};

seed();
