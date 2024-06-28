import { Stack, Text, Image, Box, VStack } from "@chakra-ui/react";

import { useState } from "react";
import { colors } from "../../theme";
import RegisterForm from "../../components/commun/forms/registerForm";

export default function Login() {
  const [choice, setChoice] = useState(false);
  const onChoice = () => {
    setChoice(true);
  };
  const onChoiceM = () => {
    setChoice("medecin");
  };
  const onChoiceP = () => {
    setChoice("patient");
  };
  return (
    <>
      {choice === false ? (
        <VStack m={20}>
          <Text as="b" fontSize={25} color={colors.primary.regular}>
            Choisissez votre profil pour vous inscrire
          </Text>

          <Stack direction={"row"} m="auto" gap={8}>
            <VStack>
              <Box boxsize={150}>
                <Image
                  onClick={() => onChoiceM()}
                  alt=""
                  src="/CoverMobile.jpg"
                  borderRadius={"100%"}
                  width="150px"
                  height="150px"
                  cursor={"pointer"}
                />
              </Box>
              <Text as="b">Médecins</Text>
            </VStack>
            <VStack>
              <Box boxsize={150}>
                <Image
                  onClick={() => onChoiceP()}
                  alt=""
                  src="/CoverMobile.jpg"
                  borderRadius={"100%"}
                  width="150px"
                  height="150px"
                  cursor={"pointer"}
                />
              </Box>
              <Text as="b">Patients</Text>
            </VStack>
          </Stack>
        </VStack>
      ) : (
        <Stack w={"100%"} bg={colors.gradients.pink}>
          <RegisterForm choice={choice} />
        </Stack>
      )}
    </>
  );
}
