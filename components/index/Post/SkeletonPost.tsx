import {
  Divider,
  HStack,
  Skeleton,
  SkeletonCircle,
  Text,
  useColorModeValue,
  VStack
} from '@chakra-ui/react';
import ImageFrame from '../../../ui/ImageFrame';

const fillParent = { w: '100%', h: '100%' };

const SkeletonPost: React.FC = () => {
  const bg = useColorModeValue('white', 'black');

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
        <SkeletonCircle w="30px" h="30px" />
        <Skeleton title="Loading">
          <Text as="h1" fontWeight="semibold" fontSize="xs" noOfLines={1}>
            Loading Username
          </Text>
        </Skeleton>
        <Divider orientation="vertical" />
        <Skeleton title="Loading">
          <Text as="h2" fontSize="xs" noOfLines={1}>
            Loading Title
          </Text>
        </Skeleton>
      </HStack>
      <ImageFrame frameColor={bg}>
        <Skeleton {...fillParent} borderRadius={8} />
      </ImageFrame>
    </VStack>
  );
};

export default SkeletonPost;
