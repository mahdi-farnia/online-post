import { PrismaClient, type Prisma } from '@prisma/client';

const Posts: Prisma.PostCreateInput[] = [
  {
    username: 'Mahdi Farnia',
    image:
      'https://i.picsum.photos/id/326/720/1080.jpg?hmac=i5hlaBkb4sdnfwRSCmiq0Rj1TAsCf277ze8GmWryOl8',
    title: 'My First Post ✏️',
    avatar: '/avatars/mahdi.png'
  },
  {
    username: 'Mahdi Farnia',
    image:
      'https://i.picsum.photos/id/521/720/1080.jpg?hmac=X2T0t1RSStHcCrt1AGfdlU2MITBMLgda7EW-etWWve8',
    title: 'What A Nice Day!',
    avatar: '/avatars/mahdi.png'
  },
  {
    username: 'SoR',
    image: 'https://picsum.photos/720/1080',
    title: 'Lets HOPE 😊',
    avatar: 'https://github.com/mahdi-farnia.png'
  },
  {
    username: 'Mahdi Farnia',
    image:
      'https://i.picsum.photos/id/575/720/1080.jpg?hmac=qBzuiNT0ld9GZGbTNtKO_xdf3vP2DP-ljAlNPFP1_Yk',
    title: 'Nature Nature Nature!',
    avatar: '/avatars/mahdi.png'
  }
];

const prisma = new PrismaClient();

async function main() {
  console.log('Seeding Database...');
  for (const data of Posts) {
    await prisma.post.create({ data });
    console.log(`  - Successfuly Created '${data.title}'`);
  }
}

main()
  .then(() => prisma.$disconnect())
  .catch(async (err) => {
    console.error(err instanceof Error ? err.message : err);

    await prisma.$disconnect();
    process.exit(0);
  });
