import React from "react";
import theme, { colors } from "@/theme";
import { Box, Alert, AlertIcon } from "@chakra-ui/react";
export default function ErrorMessage({ message }) {
  return (
    <Box my={4}>
      <Alert status="error" color={colors.red.regular} variant="left-accent">
        <AlertIcon />
        {message}
      </Alert>
    </Box>
  );
}
