import React from "react";
import {
  Stack,
  VStack,
  HStack,
  Box,
  Button,
  Grid,
  GridItem,
  Text,
} from "@chakra-ui/react";
import Image from "next/image";
import theme, { colors } from "@/theme";
export default function Card({
  picture,
  title,
  description,
  month,
  day,
  button,
}) {
  return (
    <>
      <VStack w="100%" bg={colors.white}>
        <Box>
          <Image alt="event" src={picture} />
        </Box>
        <HStack p={3}>
          <VStack minW={"fit-content"} gap={0}>
            <Text color={colors.green.regular} fontWeight="bold" fontSize={30}>
              {month.slice(0, 3)}
            </Text>
            <Text fontWeight="bold" fontSize={30}>
              {day}
            </Text>
          </VStack>
          <Box>
            <Text fontWeight={"bold"}>{title}</Text>
            <Text>{description}</Text>
          </Box>
        </HStack>
      </VStack>
    </>
  );
}
