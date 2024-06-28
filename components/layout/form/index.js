import { Box, Container, Grid, GridItem, Stack } from "@chakra-ui/react";
import Image from "next/image";
import { colors, images } from "../../../theme";

export const FormLayout = ({ children }) => {
  const { test } = images;
  const { white } = colors;
  return (
    <Container maxW={"container.lg"}>
      <Grid
        templateColumns={{
          base: "repeat(1, 1fr)",
          lg: "repeat(2,1fr)",
        }}
        w={"100%"}
        borderRadius={"md"}
        p={4}
        bgColor={white}
      >
        <GridItem>
          <Box
            position={"relative"}
            boxSize={"md"}
            borderRadius={"lg"}
            bgImage={`url(${test.src})`}
            height={"30rem"}
          ></Box>
        </GridItem>
        <GridItem p={8}>{children}</GridItem>
      </Grid>
    </Container>
  );
};
