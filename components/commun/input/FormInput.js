import {
  Button,
  Center,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Highlight,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
} from "@chakra-ui/react";
import { useState } from "react";
import { useDropzone } from "react-dropzone";
import { FiSearch } from "react-icons/fi";
import { ErrorComponent, SuccessComponent } from "../status";
import { InputVariant } from "./variants";
import { colors, forms, messages } from "../../../theme";

export const FormInput = ({
  dark,
  options = [],
  uid,
  label,
  errors,
  placeholder,
  handleChange,
  handleBlur,
  touched,
  type,
  fontColor,
  values,
  py,
  pt,
  pb,
  passwordTypeToggler,
  secureTextEntry,
  variant,
  setFieldValue,
  isDisabled,
  exist,
}) => {
  const inputProps = {
    bgColor: dark ? colors.transparent : colors.white,
    color: dark ? colors.white : colors.black,
    name: uid,
    onChange: handleChange,
    onBlur: handleBlur,
    borderColor: colors.gray.regular,
    fontcolor: fontColor || colors.black,
    placeholder,
    type: type || "text",
    value: values[uid],
    h: 50,
    w: "100%",
    isDisabled,
  };
  const [uplodedImage, setUplodedImage] = useState(null);
  const { getRootProps, getInputProps } = useDropzone({
    accept: { "image/*": [".jpeg", ".jpg", ".png"] },
    onDrop: (acceptedFiles) => {
      if (acceptedFiles && acceptedFiles.length > 0) {
        const file = acceptedFiles[0];
        const reader = new FileReader();

        reader.onload = () => {
          const ImgData = {
            stream: reader.result,
            name: file.name,
            size: file.size,
            type: file.type.split("/")[1],
          };
          setFieldValue("files", ImgData);
          setUplodedImage(ImgData);
        };
        reader.readAsDataURL(file);
      }
    },
  });

  const [pdfFile, setPdfFile] = useState(null);
  const handleDrop = (acceptedFiles, fieldName) => {
    const file = acceptedFiles[0];
    const reader = new FileReader();
    reader.onload = () => {
      const fileData = {
        stream: reader.result.split(",")[1],
        name: file.name,
        type: file.type.split("/")[1],
        size: file.size,
      };
      setFieldValue(fieldName, fileData);
      setPdfFile(fileData);
    };
    reader.readAsDataURL(file);
  };

  // Usage
  const handleCniDrop = (acceptedFiles) => handleDrop(acceptedFiles, "cni");
  const handleNineaDrop = (acceptedFiles) => handleDrop(acceptedFiles, "ninea");
  const handleRccmDrop = (acceptedFiles) => handleDrop(acceptedFiles, "rccm");
  const handleRibDrop = (acceptedFiles) => handleDrop(acceptedFiles, "rib");
  const handleContractDrop = (acceptedFiles) =>
    handleDrop(acceptedFiles, "contract");
  const handleFicheDueDrop = (acceptedFiles) =>
    handleDrop(acceptedFiles, "dilligence");

  const { getRootProps: getRootPropsCni, getInputProps: getInputPropsCni } =
    useDropzone({
      onDrop: (acceptedFiles) => handleCniDrop(acceptedFiles),
      maxFiles: 1,
    });

  const { getRootProps: getRootPropsNinea, getInputProps: getInputPropsNinea } =
    useDropzone({
      onDrop: (acceptedFiles) => handleNineaDrop(acceptedFiles),
      maxFiles: 1,
    });

  const { getRootProps: getRootPropsRccm, getInputProps: getInputPropsRccm } =
    useDropzone({
      onDrop: (acceptedFiles) => handleRccmDrop(acceptedFiles),
      maxFiles: 1,
    });

  const { getRootProps: getRootPropsRib, getInputProps: getInputPropsRib } =
    useDropzone({
      onDrop: (acceptedFiles) => handleRibDrop(acceptedFiles),
      maxFiles: 1,
    });
  const {
    getRootProps: getRootPropsContract,
    getInputProps: getInputPropsContract,
  } = useDropzone({
    onDrop: (acceptedFiles) => handleContractDrop(acceptedFiles),
    maxFiles: 1,
  });

  const {
    getRootProps: getRootPropsFicheDue,
    getInputProps: getInputPropsFicheDue,
  } = useDropzone({
    onDrop: (acceptedFiles) => handleFicheDueDrop(acceptedFiles),
    maxFiles: 1,
  });

  return (
    <FormControl {...{ pt, pb, py }} isInvalid={errors[uid]}>
      <FormLabel color={inputProps.color} fontWeight={"bold"}>
        <Highlight query="*" styles={{ textColor: "red" }}>
          {label}
        </Highlight>
      </FormLabel>
      <InputVariant
        {...{
          exist,
          type,
          variant,
          inputProps,
          passwordTypeToggler,
          secureTextEntry,
          options,
          getRootProps,
          getInputProps,
          uplodedImage,
          setUplodedImage,
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
          setPdfFile,
        }}
      />

      {errors[uid] && touched[uid] && (
        <FormErrorMessage>{errors[uid]}</FormErrorMessage>
      )}
    </FormControl>
  );
};

export const FormSubmit = ({
  uid,
  touched,
  errors,
  success,
  submit_message,
  handleSubmit,
  isSubmitting,
  pt,
  pb,
  colorScheme,
  color,
  bgColor,
  rightIcon,
  leftIcon,
  borderRadius,
  borderWidth,
  h = "3rem",
}) => {
  const {
    components: {
      dashboard: {
        forms: {
          success: { message },
        },
      },
    },
  } = messages;
  return (
    <FormControl position={"unset"} {...{ pt, pb, colorScheme }}>
      <Button
        {...{
          rightIcon,
          leftIcon,
        }}
        onClick={handleSubmit}
        colorScheme={colorScheme || colors.colorScheme.orange}
        {...{
          borderWidth,
          borderRadius,
          color,
          h,
        }}
        bgColor={bgColor || colors.primary.regular}
        w={"100%"}
        type={"submit"}
        isDisabled={isSubmitting}
        isLoading={isSubmitting}
        loadingText={forms.inputs.loadingText}
      >
        {submit_message}
      </Button>
      <Center pos={"absolute"} bottom={"-3.25rem"} left={0} w={"100%"}>
        {success && <SuccessComponent message={message} />}
      </Center>
      {errors[uid] && touched[uid] && (
        <Center pos={"absolute"} bottom={"-6.25rem"} left={0} w={"100%"}>
          <ErrorComponent message={errors[uid]} />
          {/* <ErrorMessage
            style={{ color: colors.error }}
            render={(errorMessage) => (
              <Text color={colors.error}>{errorMessage}</Text>
            )}
            name={uid}
          /> */}
        </Center>
      )}
    </FormControl>
  );
};

export const FormSearch = ({
  uid,
  errors,
  handleChange,
  handleBlur,
  isDisabled,
  placeholder,
  value,
  values,
}) => {
  const inputProps = {
    role: "searchable",
    borderColor: colors.black,
    fontWeight: 500,
    name: uid,

    onChange: handleChange,
    onBlur: handleBlur,
    placeholder,
    value: value || values[uid] || undefined,
    h: "3rem",
    w: "100%",
    isDisabled,
  };

  return (
    <FormControl isInvalid={errors[uid]}>
      <InputGroup>
        <InputLeftElement alignSelf={"center"} h={"100%"} width={"3rem"}>
          <FiSearch size={"1.3rem"} />
        </InputLeftElement>
        <Input {...inputProps} />
      </InputGroup>
    </FormControl>
  );
};

export const TabFormSearch = ({ placeholder, keyUp }) => {
  return (
    <InputGroup>
      <Input
        borderColor={colors.black}
        h={45.01}
        onKeyUp={keyUp}
        placeholder={placeholder}
      />
      <InputRightElement
        background={colors.primary.regular}
        borderRadius={"0px 0.375rem 0.375rem 0px"}
        alignSelf={"center"}
        h={"100%"}
        width={"3rem"}
      >
        <FiSearch size={20} />
      </InputRightElement>
    </InputGroup>
  );
};
