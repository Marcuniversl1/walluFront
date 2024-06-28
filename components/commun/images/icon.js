import { Box } from '@chakra-ui/react';
import { colors, images } from '@theme';
import Image from 'next/image';

export const RoundedIcon = ({ icon }) => {
  const { black } = colors;
  return (
    <Box
      borderRadius="full"
      overflow="hidden"
      bg={black}
      p={2}
      mr={-2}
      boxSize="2rem"
      data-testid={'RoundedIcon'}
    >
      <Image {...(icon || images.logo)} alt={'Orange Dev'} />
    </Box>
  );
};
