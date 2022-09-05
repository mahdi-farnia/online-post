import {
  Box,
  Button,
  Center,
  chakra,
  Heading,
  HStack,
  Link,
  LinkBox,
  LinkOverlay,
  Spacer,
  Text,
  useColorModeValue
} from '@chakra-ui/react';
import styled from '@emotion/styled';
import NextLink from 'next/link';
import { BsFillShareFill } from 'react-icons/bs';

const Navbar: React.FC = () => {
  const navColor = useColorModeValue('white', '#000');

  return (
    <NavWrapper as="nav" bgColor={navColor}>
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
            <Text fontSize={{ base: 'x-small', sm: 'small', md: 'md' }}>Share Your Feelings!</Text>
          </Center>
        </LinkBox>
        <Spacer />
        <NextLink href="/post" passHref>
          <Link textDecor="none" _hover={{ textDecor: 'none' }}>
            <Button colorScheme="cyan" variant="outline" size="sm" leftIcon={<BsFillShareFill />}>
              Share Now
            </Button>
          </Link>
        </NextLink>
      </HStack>
    </NavWrapper>
  );
};

export default Navbar;

const NavWrapper = chakra(Box, {
  baseStyle: {
    w: '100%',
    h: 5.5,
    position: 'fixed',
    top: 0,
    left: 0,
    shadow: 'md',
    px: '22px',
    contain: 'strict',
    zIndex: 2
  }
});

const VerticalDivider = styled('hr')(() => ({
  width: '1px',
  height: '30px',
  backgroundColor: 'grey'
}));
