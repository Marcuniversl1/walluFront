import { Box, HStack, Heading, Stack, Text } from "@chakra-ui/react";
import Image from "next/image";
import { PrimaryButton } from "../../Button";

export const PostCard = ({
  illustration,
  category,
  title,
  date,
  desc,
  cta,
}) => {
  return (
    <Stack w={"100%"} p={4}>
      <Box pos={"relative"} width={"100%"} h={"14rem"}>
        <Image alt="Wallu Diabete" {...illustration} />
      </Box>
      <HStack justify={"space-between"}>
        <Text fontSize={"1.35rem"}>{category}</Text>
        <Text fontSize={"1.35rem"}>{date}</Text>
      </HStack>
      <Heading fontSize={"1.75rem"}>{title}</Heading>
      <Text fontSize={"1.15rem"} noOfLines={2}>
        {desc}
      </Text>
      <Box>
        <PrimaryButton variant={"outline"} message={"Découvrir"} />
      </Box>
    </Stack>
  );
};
