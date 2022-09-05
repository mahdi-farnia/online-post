import {
  Avatar,
  Divider,
  Fade,
  HStack,
  LinkOverlay,
  Text,
  useColorModeValue,
  VStack
} from '@chakra-ui/react';
import styled from '@emotion/styled';
import NextImage from 'next/image';
import NextLink from 'next/link';
import ImageFrame from '../../../ui/ImageFrame';
import SkeletonImage from '../../../ui/SkeletonImage';
import { usePostData } from './PostContext';

const fillParent = { w: '100%', h: '100%' };

const PostContent: React.FC<{
  fullPage: boolean;
  postId: number;
}> = ({ fullPage, postId }) => {
  const bg = useColorModeValue('white', 'black');
  const { id, image, title, username, avatar } = usePostData(postId);

  return (
    <VStack
      {...fillParent}
      _hover={{ '& + .time-tag': { opacity: 1 } }}
      bgColor={bg}
      borderRadius="lg"
      p="8px 10px 10px"
      objectFit="cover"
    >
      <HStack height="40px" py="2px" w="100%" justifyContent="flex-start">
        <SkeletonImage w="30px" h="30px" borderRadius="50%">
          {(onLoad) => (
            <Avatar src={avatar as string | undefined} {...fillParent} onLoad={onLoad} />
          )}
        </SkeletonImage>
        <Fade in /** fake skeleton text fade animation */>
          <Text as="h1" fontWeight="semibold" fontSize="xs" noOfLines={1}>
            {username}
          </Text>
        </Fade>
        <Divider orientation="vertical" />
        <Fade in /** fake skeleton text fade animation */>
          <Text as="h2" fontSize="xs" noOfLines={1}>
            {title}
          </Text>
        </Fade>
      </HStack>
      <ConditionalLink id={id} fullPage={fullPage}>
        <ImageFrame frameColor={bg}>
          <SkeletonImage {...fillParent} borderRadius={8}>
            {(onLoad) =>
              image != null && (
                <Img
                  src={image}
                  alt={title}
                  layout="fill"
                  loading="lazy"
                  draggable={!1}
                  onLoad={onLoad}
                />
              )
            }
          </SkeletonImage>
        </ImageFrame>
      </ConditionalLink>
    </VStack>
  );
};

/** Disables Link When On Full Page */
const ConditionalLink: React.FC<{
  fullPage: boolean;
  id?: number /** lazy loading... */;
  children: React.ReactNode;
}> = ({ fullPage, id, children }) => {
  return fullPage || id == null ? (
    <>{children}</>
  ) : (
    <NextLink href={`/post/${id}`} passHref>
      <LinkOverlay {...fillParent}>{children}</LinkOverlay>
    </NextLink>
  );
};

const Img = styled(NextImage)({
  objectFit: 'cover',
  borderRadius: 8 // equal to skeleton
});

export default PostContent;
