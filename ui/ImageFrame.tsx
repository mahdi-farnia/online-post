import { Box, BoxProps } from '@chakra-ui/react';
import styled from '@emotion/styled';

interface ImageFrameProps extends BoxProps {
  frameColor: string;
}

const ImageFrame: React.FC<ImageFrameProps> = ({
  frameColor /** used in chakra factory */,
  ...props
}) => <Box _after={{ bgColor: frameColor }} _before={{ bgColor: frameColor }} {...props} />;

export default styled(ImageFrame)({
  width: '100%',
  height: '100%',
  position: 'relative',
  overflow: 'hidden',
  '::after, ::before': {
    content: "''",
    width: '64px',
    height: '18px',
    position: 'absolute',
    opacity: 0.8
  },
  '::after': {
    right: 0,
    top: 0,
    transform: 'translate(25%, 25%) rotate(45deg)'
  },
  '::before': {
    left: 0,
    bottom: 0,
    transform: 'translate(-25%, -25%) rotate(45deg)',
    zIndex: 1
  }
});
