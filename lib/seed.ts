import { prisma } from "./prisma";

async function main() {
  const article = await prisma.article.create({
    data: {
      title: "test article",
      content: "this is the content",
    },
  });
  console.log("Created:", article);
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
