import { Container, SimpleGrid, useToast } from '@chakra-ui/react';
import Post from './Post';
import usePosts from '../../hooks/usePosts';

// TODO complete windowing...
const Feed: React.FC = () => {
  const { data = new Array(7), error } = usePosts();
  const toast = useToast();

  if (error) {
    console.error(`An error ocurred while getting posts...`);
    toast({ status: 'error', title: 'Could not load feed!', position: 'bottom', isClosable: true });
  }

  return (
    <Container maxW="container.xl" pt="80px">
      <SimpleGrid minChildWidth={200} gridAutoRows="350px" spacing={2}>
        {data.map((post, i) => (
          <Post post={post} key={i} />
        ))}
      </SimpleGrid>
    </Container>
  );
};

export default Feed;
