import React, { Fragment } from "react";
import { Flex, Box, Text, Stack, HStack, VStack } from "@chakra-ui/react";
import Image from "next/image";
import theme, { colors } from "@/theme";

export default function HeroSection({ title, subtitle, cover }) {
  return (
    <Stack direction={"row"} h={"32.6875rem"}>
      <Stack ml={10}>
        <Box w={"30rem"}>
          <Text fontWeight={"bold"} fontSize={31}>
            {title}
          </Text>
          <Text fontSize={20}>{subtitle}</Text>
          <Text color={colors.gray.regular}>{subtitle}</Text>
        </Box>
      </Stack>
      <Stack>
        <Box pos={"relative"} w={"60rem"} h={"60rem"}>
          <Image alt="Cover" src={cover} fill />
        </Box>
      </Stack>
    </Stack>
  );
}
