import { LinkBox, LinkBoxProps, Tag } from '@chakra-ui/react';
import type { Post as IPost } from '@prisma/client';
import PostProvider from './PostContext';
import PostContent from './PostContent';

interface PostProps extends LinkBoxProps {
  fullPage?: boolean;
  post?: IPost; // lazy loading...
}

const Post: React.FC<PostProps> = ({ post, fullPage = false, ...props }) => (
  <PostProvider post={post}>
    <LinkBox height={fullPage ? '100vh' : undefined} {...props}>
      <PostContent fullPage={fullPage} />
      <Tag
        colorScheme="telegram"
        size="sm"
        position="absolute"
        bottom="10px"
        opacity={0}
        transition="opacity 0.2s ease"
        right="10px"
        className="time-tag"
      >
        {post?.time && post.time.toString()}
      </Tag>
    </LinkBox>
  </PostProvider>
);

export default Post;
