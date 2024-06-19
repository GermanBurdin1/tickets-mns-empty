import { faker } from "@faker-js/faker";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  const promises = new Array(35).fill(null).map((_, index) => {
    return prisma.evenement.create({
      data: {
        id: String(index),
        titre: faker.lorem.words(3),
        description: faker.lorem.paragraphs(),
        image: faker.image.url({ width: 256, height: 256 }),
        date: faker.date.future({ refDate: new Date(), years: 1 }),
      },
    });
  });
  return Promise.all(promises);
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
