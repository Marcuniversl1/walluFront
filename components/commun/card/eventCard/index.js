import React from "react";
import { HStack, VStack, Text, Box, Image } from "@chakra-ui/react";
import Moment from "react-moment";
import { colors } from "../../../../theme";

export default function EventCard({ picture, title, description, month, day }) {
  return (
    <>
      <VStack w="100%" bg={colors.white}>
        <Box>
          <Image
            alt="event"
            src={picture}
            boxSize="2xl"
            objectFit="cover"
            h={200}
          />
        </Box>
        <HStack p={3}>
          <VStack minW={"fit-content"} gap={0}>
            <Text color={colors.green.regular} fontWeight="bold" fontSize={30}>
              Mai
            </Text>

            <Text fontWeight="bold" fontSize={30}>
              <Moment format="DD">{day}</Moment>
            </Text>
          </VStack>
          <Box>
            <Text fontWeight={"bold"}>{title.slice(0, 37) + "..."}</Text>
            <Text noOfLines={1}>{description}</Text>
          </Box>
        </HStack>
      </VStack>
    </>
  );
}
