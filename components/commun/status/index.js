import {
  Alert,
  AlertDescription,
  AlertIcon,
  AlertTitle,
  Spinner,
} from "@chakra-ui/react";
import { colors } from "../../../theme";
export const ErrorComponent = ({ message }) => {
  return (
    <Alert role={"error-component"} status={"error"}>
      <AlertIcon />
      <AlertTitle>Oups!</AlertTitle>
      <AlertDescription>{message}</AlertDescription>
    </Alert>
  );
};
export const SuccessComponent = ({ message }) => {
  return (
    <Alert role={"succes-component"} status={"success"}>
      <AlertIcon />
      <AlertTitle>Success !</AlertTitle>
      <AlertDescription>{message}</AlertDescription>
    </Alert>
  );
};

ErrorComponent.defaultProps = {
  message: "We have trouble loading this component. Please try again",
};

export const WarningComponent = ({ message }) => {
  return (
    <Alert status={"warning"}>
      <AlertIcon />
      {message || "This component might load incorrectly"}
    </Alert>
  );
};

export const LoadingComponent = () => {
  return <Spinner color={colors.primary} role={"spinner"} />;
};
