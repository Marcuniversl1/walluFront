import { Box, Image } from '@chakra-ui/react';

export const PartnerLogo = ({ imgProperties }) => {
  return (
    <Box
      pos={'relative'}
      h={'3.5rem'}
      w={{
        base: '7.5625rem',
        lg: '12.5rem',
      }}
      p={2}
      className={'swiper-slide'}
      px={{ base: 0, lg: 10 }}
    >
      <Image
        alt={'img'}
        {...imgProperties}
        objectFit={'fill'}
        w={'100%'}
        h={'100%'}
      />
    </Box>
  );
};
