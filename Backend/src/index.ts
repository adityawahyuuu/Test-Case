import {syncDatabase} from './database/index'
import {seedData} from './database/seed/seed'

async function run() {
    try {
      await syncDatabase();
      console.log('Database synchronized successfully');
      
      await seedData();
      console.log('Data seeded successfully');
    } catch (error) {
      console.error('Error:', error);
    } finally {
      // Any cleanup or additional logic after both operations
    }
  }
  
  run();
  