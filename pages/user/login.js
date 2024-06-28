import { Stack, Button } from "@chakra-ui/react";
import { LoginForm } from "../../components/commun/forms/loginForm";
import { colors } from "../../theme";
import { FormLayout } from "../../components/layout/form";

export default function Login() {
  return (
    <Stack w={"100%"} bg={colors.gradients.pink} h={"100vh"} py={"6rem"}>
      <FormLayout>
        <LoginForm />
      </FormLayout>
    </Stack>
  );
}
