import {
  Avatar,
  Box,
  Divider,
  HStack,
  LinkBox,
  LinkBoxProps,
  LinkOverlay,
  Skeleton,
  Tag,
  Text,
  VStack
} from '@chakra-ui/react';
import styled from '@emotion/styled';
import type { Post as IPost } from '@prisma/client';
import Image from 'next/image';
import NextLink from 'next/link';
import SkeletonImage from '../ui/SkeletonImage';

interface PostProps extends LinkBoxProps {
  fullPage?: boolean;
  post?: IPost; // lazy loading...
}

const fillParent = { w: '100%', h: '100%' };
const EmptyPost: Record<keyof IPost, undefined> = {
  avatar: void 0,
  id: void 0,
  username: void 0,
  image: void 0,
  time: void 0,
  title: void 0
};

const Post: React.FC<PostProps> = ({ post = EmptyPost, fullPage = false, ...props }) => {
  const { avatar, id, username, image, time, title } = post!;

  return (
    <LinkBox height={fullPage ? '100vh' : undefined} {...props}>
      <VStack
        {...fillParent}
        _hover={{ '& + .time-tag': { opacity: 1 } }}
        bgColor="#fff"
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
          <Skeleton w="max-content" isLoaded={post != EmptyPost} title={username || 'Loading'}>
            <Text fontSize="xs" noOfLines={1}>
              {username || 'Loading Username'}
            </Text>
          </Skeleton>
          <Divider orientation="vertical" />
          <Skeleton w="max-content" isLoaded={post != EmptyPost} title={title || 'Loading'}>
            <Text fontSize="xs" noOfLines={1}>
              {title || 'Loading Title'}
            </Text>
          </Skeleton>
        </HStack>
        <ConditionalLink id={id} fullPage={fullPage}>
          <ImageFrame>
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
        {time && time.toString()}
      </Tag>
    </LinkBox>
  );
};

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

const ImageFrame = styled(Box)(() => ({
  width: '100%',
  height: '100%',
  position: 'relative',
  overflow: 'hidden',
  '::after': {
    content: "''",
    width: '64px',
    height: '18px',
    position: 'absolute',
    right: 0,
    top: 0,
    transform: 'translate(25%, 25%) rotate(45deg)',
    backgroundColor: '#fff',
    opacity: 0.8
  },
  '::before': {
    content: "''",
    width: '64px',
    height: '18px',
    position: 'absolute',
    left: 0,
    bottom: 0,
    transform: 'translate(-25%, -25%) rotate(45deg)',
    backgroundColor: '#fff',
    zIndex: 1,
    opacity: 0.8
  }
}));

const Img = styled(Image)(() => ({
  objectFit: 'cover',
  borderRadius: 8 // equal to skeleton
}));

export default Post;
