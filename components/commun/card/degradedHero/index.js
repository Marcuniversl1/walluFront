import {
  Box,
  Center,
  Flex,
  HStack,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";
import Image from "next/image";
import React, { Fragment, useState } from "react";
import { colors } from "../../../../theme";
import { Media } from "utils/media";

export default function DegradedHero({ title, subtitle, coverDesc, coverMob }) {
  const [degradationWidth, setDegradationWidth] = useState(180); // Adjust the width of the white overlay

  return (
    <Fragment>
      <Media greaterThanOrEqual="lg">
        <HStack
          mt={-2}
          position="relative"
          maxW="full"
          w="full"
          bgGradient="linear(to-r, #DDE4F1, transparent)"
          boxShadow="md"
          rounded="md"
          overflow="hidden"
          h="25rem"
        >
          <Box
            pl={{ base: "0.5rem", lg: "9rem" }}
            pt={{ base: "10rem", lg: "6rem" }}
            width="40rem"
            height="35rem"
          >
            <Text fontWeight={"bold"} fontSize={{ base: "2rem", lg: "4.5rem" }}>
              {title}
            </Text>
            <Text fontSize={"1.3rem"}>{subtitle}</Text>
          </Box>

          <Box
            width={{ base: "35rem", lg: "60rem" }}
            height={{ base: "20rem", lg: "35rem" }}
            pos={"relative"}
          >
            <Image src={coverDesc} alt="Your Image" fill />
          </Box>
        </HStack>
      </Media>
      <Media lessThan="lg">
        <Stack bgSize="cover" bgImage={coverMob} h={"12rem"} w={"100%"}>
          <Box
            pt={"1.5rem"}
            h="100vh"
            bgImage="linear(to-r, white, transparent)"
            bgSize="cover"
          >
            <Box maxW={"14rem"} pl={2}>
              <Text fontWeight={"bold"} fontSize={31}>
                {title}
              </Text>
              <Text color={colors.gray.regular}>{subtitle}</Text>
            </Box>
          </Box>
        </Stack>
      </Media>
    </Fragment>
  );
}
