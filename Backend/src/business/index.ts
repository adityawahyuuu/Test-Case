import { SequelizeBook } from './model/Book'
import { SequelizeMember } from './model/Member'


export async function syncDatabase() {
    try {
      await SequelizeBook.sync({ force: true });
      console.log('SequelizeBook table synchronized successfully');
      
      await SequelizeMember.sync({ force: true });
      console.log('SequelizeMember table synchronized successfully');
    } catch (error) {
      console.error('Error synchronizing database:', error);
    } finally {
      // Close the Sequelize connection if needed
    //   await SequelizeBook.sequelize.close();
    //   await SequelizeMember.sequelize.close();
    }
}