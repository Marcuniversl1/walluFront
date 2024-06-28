import { Center, Grid, GridItem, Heading, Stack } from "@chakra-ui/react";
import { PostCard } from "../postCard";
import { images } from "../../../../theme";

export const ActuCard = () => {
  const { test } = images;
  return (
    <Stack bgColor={"#ffffff"} p={8}>
      <Center>
        <Heading>Actualités sur le diabète</Heading>
      </Center>
      <Grid
        templateColumns={{ base: "repeat(1, 1fr)", md: "repeat(3,1fr)" }}
        gap={6}
      >
        <GridItem>
          <PostCard
            illustration={test}
            title={"Diabète et ménopause : une relation trop peu évoquée"}
            desc={
              "La ménopause est une période de grands bouleversements hormonaux qui peuvent avoir"
            }
            date={"17/05/24"}
            category={"Article"}
          />
        </GridItem>
      </Grid>
    </Stack>
  );
};
