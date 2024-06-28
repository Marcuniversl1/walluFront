import React, { useState, useContext, useRef } from "react";
import { useForm } from "react-hook-form";
import { VscEye, VscEyeClosed } from "react-icons/vsc";
import theme, { colors } from "@/theme";
import {
  Stack,
  HStack,
  FormControl,
  FormLabel,
  Input,
  Text,
  FormErrorMessage,
  Button,
  InputGroup,
  InputRightElement,
  VStack,
} from "@chakra-ui/react";
import Link from "next/link";
import { useRouter } from "next/router";
import axios from "axios";
import SuccessMessage from "../../card/messageCard/successMessage";
import ErrorMessage from "../../card/messageCard/errorMessage";

export default function RegisterForm({ choice }) {
  console.log(choice);
  const { push } = useRouter();
  const {
    handleSubmit,
    register,
    watch,
    reset,
    formState: { errors, isSubmitting },
  } = useForm();
  const password = useRef({});
  password.current = watch("password", "");
  const [alert, setAlert] = useState(["", ""]);
  const [show, setShow] = useState(false);
  const handleClick = () => {
    setShow(!show);
  };
  const [showCp, setShowCp] = useState(false);
  const handleClickCp = () => {
    setShowCp(!showCp);
  };
  const onSubmit = async (values) => {
    console.log(values);
    await axios
      .post(`${process.env.NEXT_PUBLIC_STRAPI_API_URL}/auth/local/register`, {
        username: values.username,
        email: values.email,
        password: values.password,
        statut: choice,
      })
      .then((response) => {
        // Handle success.
        setAlert("Success");
        setTimeout(() => {
          push("/user");
        }, 3000);
      })
      .catch((error) => {
        // Handle error.
        setAlert("failed");
      });
  };
  return (
    <>
      <Stack w={"100%"} bg={colors.gradients.pink}>
        <Stack w={"40%"} m="40px auto" bg="white" p={8} textAlign={"center"}>
          <Text as={"b"} color={colors.primary.regular} fontSize={31}>
            Inscription
          </Text>
          <form onSubmit={handleSubmit(onSubmit)}>
            <FormControl
              isInvalid={errors.email || errors.password || errors.confirmPwd}
            >
              {alert === "Success" ? <SuccessMessage message={alert} /> : <></>}
              {alert == "failed" ? (
                <ErrorMessage message={"Cet adresse Email existe déja"} />
              ) : (
                <></>
              )}
              <Stack my={2}>
                <Input
                  height={"50px"}
                  variant="flushed"
                  id="username"
                  type="text"
                  placeholder="Pseudo"
                  {...register("username", {
                    required: "Merci de renseigner ce champs",
                    minLength: {
                      value: 3,
                      message: "Username must have at least 3 characters",
                    },
                  })}
                />
                <FormErrorMessage color="red">
                  {errors.username && errors.username.message}
                </FormErrorMessage>
              </Stack>
              <Stack my={2}>
                <Input
                  height="50px"
                  variant="flushed"
                  id="email"
                  type="email"
                  placeholder="email"
                  {...register("email", {
                    required: "Merci de renseigner votre email",
                    pattern:
                      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                  })}
                />
                <FormErrorMessage color="red">
                  {errors.email && errors.email.message}
                </FormErrorMessage>
              </Stack>
              <Stack my={2}>
                <InputGroup>
                  <Input
                    height="50px"
                    variant="flushed"
                    id="password"
                    type={show ? "text" : "password"}
                    placeholder="Mot de Passe"
                    {...register("password", {
                      required: "Merci de renseigner le mot de passe ",
                      minLength: {
                        value: 8,
                        message:
                          "le mot de passe doit contenir au moins 8 caractères",
                      },
                    })}
                  />
                  <InputRightElement width="4.5rem">
                    <Button h="1.75rem" size="sm" onClick={handleClick}>
                      {show ? <VscEyeClosed /> : <VscEye />}
                    </Button>
                  </InputRightElement>
                </InputGroup>
                <FormErrorMessage color="red">
                  {errors.password && errors.password.message}
                </FormErrorMessage>
              </Stack>
              <Stack my={2}>
                <InputGroup>
                  <Input
                    height="50px"
                    variant="flushed"
                    id="confirmPwd"
                    type={showCp ? "text" : "password"}
                    placeholder="Confirmation de Mot de Passe"
                    {...register("confirmPwd", {
                      validate: (value) =>
                        value === password.current ||
                        "Les mots de passe ne corespondent pas",
                    })}
                  />
                  <InputRightElement width="4.5rem">
                    <Button h="1.75rem" size="sm" onClick={handleClickCp}>
                      {showCp ? <VscEyeClosed /> : <VscEye />}
                    </Button>
                  </InputRightElement>
                </InputGroup>
                <FormErrorMessage color="red">
                  {errors.confirmPwd && errors.confirmPwd.message}
                </FormErrorMessage>
              </Stack>
            </FormControl>

            <Button
              mt={4}
              fontWeight="normal"
              w={"100%"}
              h="50px"
              backgroundColor={colors.primary.regular}
              color={colors.white}
              isLoading={isSubmitting}
              type="submit"
            >
              Créer un compte
            </Button>

            <HStack pl={20} mt={8}>
              <Text>Avez-vous déja un compte? </Text>
              <Link href="/user/login">
                <Text as="b" my={2} color={colors.primary.regular} float="left">
                  Se connecter
                </Text>
              </Link>
            </HStack>
          </form>
        </Stack>
      </Stack>
    </>
  );
}
