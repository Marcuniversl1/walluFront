import { Stack, AspectRatio, Text } from "@chakra-ui/react";
import Link from "next/link";
import React from "react";
import { colors } from "../../../../theme";

export default function Map({ name, frame, link }) {
  return (
    <Stack>
      <Link rel="stylesheet" href={link}>
        <Text as="b" fontSize={23} color={colors.green.regular}>
          {name}
        </Text>
      </Link>
      <AspectRatio ratio={16 / 9}>
        <iframe src={frame} />
      </AspectRatio>
    </Stack>
  );
}
