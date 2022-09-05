import {
  Box,
  Divider,
  FormControl,
  HStack,
  Icon,
  Input,
  InputGroup,
  InputLeftAddon,
  Text,
  useColorModeValue,
  VisuallyHidden,
  VStack
} from '@chakra-ui/react';
import { AiOutlineCloudUpload } from 'react-icons/ai';
import ChooseAvatar from './ChooseAvatar';

const CreatePost: React.FC = () => {
  const val = useColorModeValue('white', '#000');

  return (
    <Box p="50px 8px 0" h="calc(100vh - 50px)">
      <VisuallyHidden>
        <h1>Create Your Own Post</h1>
      </VisuallyHidden>
      <FormControl h="100%" as="form" bgColor={val} borderRadius="12px" py="2">
        <HStack h="40px" justifyContent="flex-start" px="10px">
          <ChooseAvatar />
          <Input
            fontWeight="semibold"
            type="text"
            variant="unstyled"
            placeholder="My Name"
            size="sm"
          />
          <Divider orientation="vertical" />
          <Input type="text" variant="unstyled" placeholder="Post Title" size="sm" />
        </HStack>
        <Divider />
        <VStack h="40vh" justifyContent="center" px="10px">
          <Icon as={AiOutlineCloudUpload} fontSize={{ base: '9xl', md: '200px' }} color="grey" />
          <Text fontWeight="bold" fontSize="xl">
            Drag {'&'} Drop Image Here
          </Text>
          <Text py="20px">or</Text>
          <Box w="80%">
            <InputGroup variant="outline" size="sm">
              <InputLeftAddon>{'http://'}</InputLeftAddon>
              <Input type="url" placeholder="Avatar Url" colorScheme="telegram" />
            </InputGroup>
          </Box>
        </VStack>
      </FormControl>
    </Box>
  );
};
export default CreatePost;
