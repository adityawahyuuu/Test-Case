import express from 'express';
import swaggerJsdoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';
import {syncDatabase} from './business/index'
import {seedData} from './business/seed/seed'
import router from './controllers/entrypoint';
import swaggerOptions from './utils/swagger'
import {sequelize} from './business/sequelize'

async function initDb() {
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

async function connDb() {
  await sequelize.sync()
}

function runServer() {
  const app = express();
  const specs = swaggerJsdoc(swaggerOptions);
  
  app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs));
  app.use('/api', router);
  
  const PORT = 3000;
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
}

async function run(){
  // jalankan initDb ketika pertama kali
  // await initDb()
  await connDb()
  await runServer()
}

run()