import { Box, Stack, Text } from "@chakra-ui/react";
import { Formik } from "formik";
import Link from "next/link";
import { FiArrowRight } from "react-icons/fi";
import { FormInput, FormSubmit } from "../../input/FormInput";
import { loginFormHandler } from "../../../../lib/handlers";
import { usePasswordType } from "../../../../lib/utils/hooks/src/password";
import { colors, forms, routes } from "../../../../theme";
import { authenticationSchema } from "../../../../lib/utils/schemas";
import { mapFormInitialValues } from "../../../../lib/tools/_forms/mapper";

const {
  inputs: {
    auth: {
      login: { identifier, password, submit },
    },
  },
  messages: {
    infos: {
      forgot_password: { message: forgot_password_info },
    },
  },
} = forms;

const { primary, black, white } = colors;

const {
  user: { forgot_password },
} = routes.page_route;

export const LoginForm = () => {
  const { passwordType, passwordTypeToggler } = usePasswordType();

  return (
    <Formik
      initialValues={mapFormInitialValues(authenticationSchema._nodes)}
      validationSchema={authenticationSchema}
      onSubmit={loginFormHandler}
    >
      {({
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
        isSubmitting,
      }) => (
        <Stack pos={"relative"}>
          <FormInput
            {...identifier}
            {...{
              errors,
              handleChange,
              handleBlur,
              touched,
              values,
              isDisabled: isSubmitting,
            }}
          />

          <FormInput
            py={5}
            {...password}
            {...{
              errors,
              handleChange,
              handleBlur,
              touched,
              passwordTypeToggler,
              values,
              isDisabled: isSubmitting,
            }}
            type={passwordType}
          />
          <Stack
            direction={{ base: "column", lg: "row" }}
            alignItems={{ base: "end", lg: "center" }}
            justifyContent={"flex-end"}
            gap={"1.5rem"}
          >
            <Link href={forgot_password}>
              <Text fontSize={"1rem"} fontWeight={700} color={primary.regular}>
                {forgot_password_info}
              </Text>
            </Link>

            <Box>
              <FormSubmit
                rightIcon={<FiArrowRight size={"1.5rem"} />}
                py={5}
                colorScheme={"whiteAlpha"}
                color={black}
                bgColor={white}
                {...{
                  touched,
                  errors,
                  handleSubmit,
                  isSubmitting,
                }}
                {...submit}
              />
            </Box>
          </Stack>
        </Stack>
      )}
    </Formik>
  );
};
