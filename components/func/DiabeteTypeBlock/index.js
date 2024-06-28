import { Container, Grid, GridItem, Stack, VStack } from "@chakra-ui/react";
import React from "react";
import DiabeteCard from "../../commun/card/diabeteCard";

export default function DiabeteTypeBlock({ payload }) {
  return (
    <Grid
      templateColumns={{
        base: "repeat(1, 1fr)",
        md: "repeat(3,1fr)",
        lg: "repeat(3,1fr)",
      }}
      gap={6}
      w={"100%"}
    >
      {payload?.map((item, i) => (
        <DiabeteCard
          key={item?.id}
          title={item?.title}
          description={item?.description}
          button={item?.button}
          color={item?.color}
        />
      ))}
    </Grid>
  );
}
