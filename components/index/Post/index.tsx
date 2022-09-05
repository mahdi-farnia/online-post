import { LinkBox, LinkBoxProps } from '@chakra-ui/react';
import PostAnnotation from './PostAnnotation';
import PostContent from './PostContent';
import { usePostIsLoaded } from './PostContext';
import SkeletonPost from './SkeletonPost';

interface PostProps extends LinkBoxProps {
  fullPage?: boolean;
  postId: number;
}

// TODO Make Index More Generic => <PostHeader /> <PostContent /> <PostAnnotation />
const Post: React.FC<PostProps> = ({ postId, fullPage = false, ...props }) => {
  const isLoaded = usePostIsLoaded();

  return (
    <LinkBox height={fullPage ? '100vh' : undefined} {...props}>
      {isLoaded ? (
        <>
          <PostContent fullPage={fullPage} postId={postId} />
          <PostAnnotation postId={postId} />
        </>
      ) : (
        <SkeletonPost />
      )}
    </LinkBox>
  );
};

export default Post;
