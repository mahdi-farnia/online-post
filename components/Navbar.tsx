import {
  Box,
  Button,
  Center,
  Heading,
  HStack,
  Link,
  LinkBox,
  LinkOverlay,
  Spacer,
  Text
} from '@chakra-ui/react';
import styled from '@emotion/styled';
import NextLink from 'next/link';
import { BsFillShareFill } from 'react-icons/bs';

const Navbar: React.FC = () => {
  return (
    <Box
      as="nav"
      w="100%"
      h={5.5}
      position="fixed"
      top={0}
      left={0}
      bgColor="white"
      shadow="md"
      px={22}
      sx={{ contain: 'strict' }}
    >
      <HStack h="100%">
        <LinkBox>
          <Center gap="10px">
            <NextLink href="/" passHref>
              <LinkOverlay>
                <Heading as="h1" fontSize="large">
                  Poster
                </Heading>
              </LinkOverlay>
            </NextLink>
            <VerticalDivider aria-orientation="vertical" />
            <Text>Share Your Feelings!</Text>
          </Center>
        </LinkBox>
        <Spacer />
        <NextLink href="/post" passHref>
          <Link textDecor="none" _hover={{ textDecor: 'none' }}>
            <Button colorScheme="cyan" variant="outline" leftIcon={<BsFillShareFill />}>
              Share Now
            </Button>
          </Link>
        </NextLink>
      </HStack>
    </Box>
  );
};

export default Navbar;

const VerticalDivider = styled('hr')(() => ({
  width: '1px',
  height: '30px',
  backgroundColor: 'grey'
}));
