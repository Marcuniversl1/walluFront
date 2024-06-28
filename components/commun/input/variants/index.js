import {
  Box,
  Checkbox,
  Highlight,
  Input,
  Select,
  Stack,
  Text,
  Textarea,
  VStack,
} from "@chakra-ui/react";
import { AiTwotonePicture } from "react-icons/ai";
import { VscEye, VscEyeClosed } from "react-icons/vsc";
import { IconedButton } from "../../Button";
import { colors } from "../../../../theme";

const { black, white, primary } = colors;

export const InputVariant = ({
  exist,
  type,
  secureTextEntry,
  passwordTypeToggler,
  inputProps,
  options,
  getRootProps,
  getInputProps,
  getRootPropsCni,
  getInputPropsCni,
  getRootPropsNinea,
  getInputPropsNinea,
  getRootPropsRib,
  getInputPropsRib,
  getRootPropsRccm,
  getInputPropsRccm,
  getRootPropsContract,
  getInputPropsContract,
  getRootPropsFicheDue,
  getInputPropsFicheDue,
  pdfFile,
}) => {
  switch (type) {
    case "textArea":
      return <Textarea p={5} minH={220} maxH={320} {...inputProps} />;
    case "select":
      return (
        <Select {...inputProps}>
          {options.map((option, i) => (
            <option value={option.value} key={`${inputProps.name}-option-${i}`}>
              {option.name}
            </option>
          ))}
        </Select>
      );
    case "checkbox":
      return (
        <VStack {...inputProps} alignItems={"start"}>
          {options.map((option, i) => (
            <Checkbox
              value={option.value}
              key={`${inputProps?.name ?? "checkbox"}-${i}`}
            >
              {option?.name}
            </Checkbox>
          ))}
        </VStack>
      );
    case "dropzone":
      return (
        <Stack>
          <Box
            {...getRootProps()}
            border={exist ? "1px solid gray" : "2px dashed gray"}
            borderRadius={"md"}
          >
            <input {...getInputProps()} />
            <Stack alignItems={"center"} p={4}>
              <Box>
                <AiTwotonePicture size={25} />
              </Box>
              <Box>
                <Text cursor="pointer">
                  <Highlight
                    query="Télécharger un fichier"
                    styles={{ textColor: "blue" }}
                  >
                    Télécharger un fichier, ou Glissez-déposez le fichier ici.
                  </Highlight>
                </Text>
              </Box>
            </Stack>
            {exist && (
              <VStack bgColor={black} pt={2}>
                <Text justify={"center"} color={white} as={"b"} mt={2}>
                  LogoType
                </Text>
                <IconedButton
                  bgColor={black}
                  colorScheme={"black"}
                  message={"Modifier"}
                  color={primary.regular}
                />
              </VStack>
            )}
          </Box>
        </Stack>
      );
    case "cni":
      return (
        <Stack>
          <Box
            {...getRootPropsCni()}
            border={exist ? "1px solid gray" : "2px dashed gray"}
            borderRadius={"md"}
          >
            <input {...getInputPropsCni()} />
            <Stack alignItems={"center"} p={4}>
              <Box>
                <AiTwotonePicture size={25} />
              </Box>
              <Box>
                <Text cursor="pointer">
                  <Highlight
                    query="Télécharger un fichier"
                    styles={{ textColor: "blue" }}
                  >
                    Télécharger un fichier, ou Glissez-déposez le fichier ici.
                  </Highlight>
                </Text>
              </Box>
            </Stack>
            {exist && (
              <VStack bgColor={black} pt={2}>
                <Text justify={"center"} color={white} as={"b"}>
                  CNI/Passeport DG
                </Text>
                <IconedButton
                  bgColor={black}
                  colorScheme={"black"}
                  message={"Modifier"}
                  color={primary.regular}
                />
              </VStack>
            )}
          </Box>

          {pdfFile && (
            <Stack mt={2} alignItems="center">
              <Text maxW={{ base: "100%", lg: "11rem" }} noOfLines={1}>
                {pdfFile?.name}
              </Text>
            </Stack>
          )}
        </Stack>
      );
    case "ninea":
      return (
        <Stack>
          <Box
            {...getRootPropsNinea()}
            border={exist ? "1px solid gray" : "2px dashed gray"}
            borderRadius={"md"}
          >
            <input {...getInputPropsNinea()} />
            <Stack alignItems={"center"} p={4}>
              <Box>
                <AiTwotonePicture size={25} />
              </Box>
              <Box>
                <Text cursor="pointer">
                  <Highlight
                    query="Télécharger un fichier"
                    styles={{ textColor: "blue" }}
                  >
                    Télécharger un fichier, ou Glissez-déposez le fichier ici.
                  </Highlight>
                </Text>
              </Box>
            </Stack>
            {exist && (
              <VStack bgColor={black} pt={2}>
                <Text justify={"center"} color={white} as={"b"}>
                  NINEA
                </Text>
                <IconedButton
                  bgColor={black}
                  colorScheme={"black"}
                  message={"Modifier"}
                  color={primary.regular}
                />
              </VStack>
            )}
          </Box>
          {pdfFile && (
            <Stack mt={2} alignItems="center">
              <Text maxW={{ base: "100%", lg: "11rem" }} noOfLines={1}>
                {pdfFile?.name}
              </Text>
            </Stack>
          )}
        </Stack>
      );
    case "rccm":
      return (
        <Stack>
          <Box
            {...getRootPropsRccm()}
            border={exist ? "1px solid gray" : "2px dashed gray"}
            borderRadius={"md"}
          >
            <input {...getInputPropsRccm()} />
            <Stack alignItems={"center"} p={4}>
              <Box>
                <AiTwotonePicture size={25} />
              </Box>
              <Box>
                <Text cursor="pointer">
                  <Highlight
                    query="Télécharger un fichier"
                    styles={{ textColor: "blue" }}
                  >
                    Télécharger un fichier, ou Glissez-déposez le fichier ici.
                  </Highlight>
                </Text>
              </Box>
            </Stack>
            {exist && (
              <VStack bgColor={black} pt={2}>
                <Text justify={"center"} color={white} as={"b"}>
                  Registre de commerce
                </Text>
                <IconedButton
                  bgColor={black}
                  colorScheme={"black"}
                  message={"Modifier"}
                  color={primary.regular}
                />
              </VStack>
            )}
          </Box>
          {pdfFile && (
            <Stack mt={2} alignItems="center">
              <Text maxW={{ base: "100%", lg: "11rem" }} noOfLines={1}>
                {pdfFile?.name}
              </Text>
            </Stack>
          )}
        </Stack>
      );
    case "rib":
      return (
        <Stack>
          <Box
            {...getRootPropsRib()}
            border={exist ? "1px solid gray" : "2px dashed gray"}
            borderRadius={"md"}
          >
            <input {...getInputPropsRib()} />
            <Stack alignItems={"center"} p={4}>
              <Box>
                <AiTwotonePicture size={25} />
              </Box>
              <Box>
                <Text cursor="pointer">
                  <Highlight
                    query="Télécharger un fichier"
                    styles={{ textColor: "blue" }}
                  >
                    Télécharger un fichier, ou Glissez-déposez le fichier ici.
                  </Highlight>
                </Text>
              </Box>
            </Stack>
            {exist && (
              <VStack bgColor={black} pt={2}>
                <Text justify={"center"} color={white} as={"b"}>
                  RIB
                </Text>
                <IconedButton
                  bgColor={black}
                  colorScheme={"black"}
                  message={"Modifier"}
                  color={primary.regular}
                />
              </VStack>
            )}
          </Box>
          {pdfFile && (
            <Stack mt={2} alignItems="center">
              <Text maxW={{ base: "100%", lg: "11rem" }} noOfLines={1}>
                {pdfFile?.name}
              </Text>
            </Stack>
          )}
        </Stack>
      );
    case "contract":
      return (
        <Stack>
          <Box
            {...getRootPropsContract()}
            border={exist ? "1px solid gray" : "2px dashed gray"}
            borderRadius={"md"}
          >
            <input {...getInputPropsContract()} />
            <Stack alignItems={"center"} p={4}>
              <Box>
                <AiTwotonePicture size={25} />
              </Box>
              <Box>
                <Text cursor="pointer">
                  <Highlight
                    query="Télécharger un fichier"
                    styles={{ textColor: "blue" }}
                  >
                    Télécharger un fichier, ou Glissez-déposez le fichier ici.
                  </Highlight>
                </Text>
              </Box>
            </Stack>
            {exist && (
              <VStack bgColor={black} pt={2}>
                <Text justify={"center"} color={white} as={"b"}>
                  Contrat Signé
                </Text>
                <IconedButton
                  bgColor={black}
                  colorScheme={"black"}
                  message={"Modifier"}
                  color={primary.regular}
                />
              </VStack>
            )}
          </Box>
          {pdfFile && (
            <Stack mt={2} alignItems="center">
              <Text maxW={{ base: "100%", lg: "11rem" }} noOfLines={1}>
                {pdfFile?.name}
              </Text>
            </Stack>
          )}
        </Stack>
      );
    case "dilligence":
      return (
        <Stack>
          <Box
            {...getRootPropsFicheDue()}
            border={exist ? "1px solid gray" : "2px dashed gray"}
            borderRadius={"md"}
          >
            <input {...getInputPropsFicheDue()} />
            <Stack alignItems={"center"} p={4}>
              <Box>
                <AiTwotonePicture size={25} />
              </Box>
              <Box>
                <Text cursor="pointer">
                  <Highlight
                    query="Télécharger un fichier"
                    styles={{ textColor: "blue" }}
                  >
                    Télécharger un fichier, ou Glissez-déposez le fichier ici.
                  </Highlight>
                </Text>
              </Box>
            </Stack>
            {exist && (
              <VStack bgColor={black} pt={2}>
                <Text justify={"center"} color={white} as={"b"}>
                  Fiche de due diligence
                </Text>
                <IconedButton
                  bgColor={black}
                  colorScheme={"black"}
                  message={"Modifier"}
                  color={primary.regular}
                />
              </VStack>
            )}
          </Box>
          {pdfFile && (
            <Stack mt={2} alignItems="center">
              <Text maxW={{ base: "100%", lg: "11rem" }} noOfLines={1}>
                {pdfFile?.name}
              </Text>
            </Stack>
          )}
        </Stack>
      );

    default:
      return (
        <Box pos={"relative"} w={"100%"}>
          <Input {...inputProps} />
          {secureTextEntry && (
            <Box
              pos={"absolute"}
              right={"3%"}
              top={"30%"}
              _hover={{ cursor: "pointer" }}
              onClick={passwordTypeToggler}
              zIndex={2}
              role={"password-toggler"}
            >
              {type == "password" ? (
                <VscEye
                  role={"closed-eye"}
                  color={inputProps.color}
                  size={"1.25rem"}
                />
              ) : (
                <VscEyeClosed color={inputProps.color} size={"1.25rem"} />
              )}
            </Box>
          )}
        </Box>
      );
  }
};
