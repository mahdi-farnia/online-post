import nextConnect from 'next-connect';
import prisma from '../../lib/prisma';

const handler = nextConnect();

handler.get('/api/posts', async (req, res) => {
  const posts = await prisma.post.findMany();

  res.writeHead(200, 'Ok', { 'Content-Type': 'application/json' }).end(JSON.stringify(posts));
});

export const config = {
  api: {
    responseLimit: false
  }
};

export default handler;
