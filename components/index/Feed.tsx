import { Container, SimpleGrid, useToast } from '@chakra-ui/react';
import Post from './Post';
import PostProvider from './Post/PostContext';
import usePosts from '../../hooks/usePosts';

// IMPROVE complete windowing...
const Feed: React.FC = () => {
  const { posts = new Array(10), error, isLoaded } = usePosts();
  const toast = useToast();

  if (error) {
    console.error(`An error ocurred while getting posts...`);
    toast({ status: 'error', title: 'Could not load feed!', position: 'bottom', isClosable: true });
  }

  return (
    <Container maxW="container.xl" pt="80px">
      <SimpleGrid minChildWidth={200} gridAutoRows="350px" spacing={2}>
        <PostProvider posts={posts} isLoaded={isLoaded}>
          {posts.map((_, postId) => (
            <Post postId={postId} key={postId} />
          ))}
        </PostProvider>
      </SimpleGrid>
    </Container>
  );
};

export default Feed;
