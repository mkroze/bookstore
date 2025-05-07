import mongoose from 'mongoose';
import dotenv from 'dotenv';
import fs from 'fs';
import path from 'path';
import connectToDatabase from './config/db.js';
import User from './models/userModel.js';
import Product from './models/productModel.js';


dotenv.config();
await connectToDatabase();

const load = (file) =>
  JSON.parse(fs.readFileSync(path.resolve('data', file)));

try {
  await User.deleteMany();
  await Product.deleteMany();


  await User.insertMany(load('users.json'));
  await Product.insertMany(load('products.json'));


  console.log('Seed complete');
  process.exit();
} catch (err) {
  console.error(err);
  process.exit(1);
}