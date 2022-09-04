import { Skeleton, SkeletonProps } from '@chakra-ui/react';
import { useState } from 'react';

interface SkeletonImageProps extends Omit<SkeletonProps, 'children'> {
  children: (onLoad: VoidFunction) => JSX.Element | React.ReactNode;
}

const SkeletonImage: React.FC<SkeletonImageProps> = ({ children, ...props }) => {
  const [loaded, setLoaded] = useState<boolean>(false);

  return (
    <Skeleton isLoaded={loaded} {...props}>
      {children(() => setLoaded(true))}
    </Skeleton>
  );
};

export default SkeletonImage;
