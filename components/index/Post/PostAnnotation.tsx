import { Tag } from '@chakra-ui/react';
import { usePostData } from './PostContext';

interface PostAnnotationProps {
  postId: number;
}

const PostAnnotation: React.FC<PostAnnotationProps> = ({ postId: id }) => {
  const { time } = usePostData(id);

  return (
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
      {time.toString()}
    </Tag>
  );
};

export default PostAnnotation;
