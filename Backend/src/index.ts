import express from 'express';
import {syncDatabase} from './business/index'
import {seedData} from './business/seed/seed'
import router from './controllers/entrypoint';

async function runDb() {
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

function runServer() {
  const app = express();
  
  app.use('/api', router);
  
  const PORT = process.env.PORT || 3000;
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
}

async function run(){
  // await runDb()
  await runServer()
}

run()