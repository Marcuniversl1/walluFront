import { Box, Grid, GridItem, Heading, Stack, Text } from "@chakra-ui/react";
import Image from "next/image";
import { images } from "../../../../theme";

export const DietCard = () => {
  const { test } = images;
  return (
    <Grid
      templateColumns={{
        base: "repeat(1, 1fr)",
        lg: "repeat(2,1fr)",
      }}
    >
      <GridItem>
        <Box position={"relative"} height={"25rem"} width={"100%"}>
          <Image {...test} alt="" />
        </Box>
      </GridItem>
      <GridItem p={8}>
        <Heading>La plateforme pour mieux vivre votre diabète </Heading>
        <Text fontSize={"1.5rem"}>
          Vous souhaitez mieux comprendre et vous informer sur le diabète car
          vous ou l’un de vos proches est directement concerné par cette
          maladie. WalluDiabete a été pensé pour répondre à vos questions et
          vous accompagner vous et vos proches pour une meilleure assistance.
        </Text>
      </GridItem>
    </Grid>
  );
};
