import React from "react";
import theme, { colors } from "@/theme";
import { Box, Alert, AlertIcon } from "@chakra-ui/react";
export default function SuccessMessage({ message }) {
  return (
    <Box my={4}>
      <Alert
        color={colors.green.regular}
        status="success"
        variant="left-accent"
      >
        <AlertIcon />
        {message}
      </Alert>
    </Box>
  );
}
