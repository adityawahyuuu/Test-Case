import { SequelizeBook } from '../model/Book'
import { SequelizeMember } from '../model/Member'

export async function seedData() {
  try {
    // Seed data for SequelizeBook
    await SequelizeBook.bulkCreate([
        {
            Code: "JK-45",
            Title: "Harry Potter",
            Author: "J.K Rowling",
            Stock: 1
        },
        {
            Code: "SHR-1",
            Title: "A Study in Scarlet",
            Author: "Arthur Conan Doyle",
            Stock: 1
        },
        {
            Code: "TW-11",
            Title: "Twilight",
            Author: "Stephenie Meyer",
            Stock: 1
        },
        {
            Code: "HOB-83",
            Title: "The Hobbit, or There and Back Again",
            Author: "J.R.R. Tolkien",
            Stock: 1
        },
        {
            Code: "NRN-7",
            Title: "The Lion, the Witch and the Wardrobe",
            Author: "C.S. Lewis",
            Stock: 1
        },
    ]);

    console.log('SequelizeBook data seeded successfully');

    // Seed data for SequelizeMember
    await SequelizeMember.bulkCreate([
        {
            Code: "M001",
            Name: "Angga",
        },
        {
            Code: "M002",
            Name: "Ferry",
        },
        {
            Code: "M003",
            Name: "Putri",
        },
    ]);

    console.log('SequelizeMember data seeded successfully');
  } catch (error) {
    console.error('Error seeding data:', error);
  } finally {
    // Close the Sequelize connection if needed
    // await SequelizeBook.sequelize.close();
    // await SequelizeMember.sequelize.close();
  }
}
