import React from "react";
import { Text, Button, VStack, GridItem } from "@chakra-ui/react";
import { PrimaryButton } from "../../Button";
import { colors } from "../../../../theme";

export default function DiabeteCard({ title, description, button, color }) {
  return (
    <GridItem
      p={4}
      bg={color}
      color={colors?.white}
      borderRadius={8}
      w={"100%"}
    >
      <Text fontSize={20} fontWeight={"bold"} alignSelf={"flex-start"}>
        {title}
      </Text>
      <Text
        h={{ base: 20, md: "120px", xl: "auto" }}
        alignSelf={"flex-start"}
        noOfLines={3}
      >
        {description}
      </Text>
      <Button
        alignSelf="flex-start"
        variant={"outline"}
        borderColor={colors.white}
        color={colors.white}
      >
        {button}
      </Button>
    </GridItem>
  );
}
