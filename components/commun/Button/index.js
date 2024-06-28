import { Button } from "@chakra-ui/react";
import { colors } from "../../../theme";
import { FiArrowRight } from "react-icons/fi";

export const IconedButton = ({
  onClick,
  colorScheme,
  bgColor,
  color,
  message,
  variant,
  pl,
  justifyContent,
  borderWidth,
  rightIcon,
  leftIcon,
}) => {
  return (
    <Button
      {...{
        rightIcon,
        leftIcon,
        borderWidth,
        pl,
        justifyContent,
        variant,
        onClick,
        colorScheme,
        bgColor,
        color,
      }}
      {...(!rightIcon &&
        !leftIcon && { rightIcon: <FiArrowRight size={"1.5rem"} /> })}
      fontSize={"1rem"}
      h={"3rem"}
    >
      {message}
    </Button>
  );
};

IconedButton.defaultProps = {
  fontSize: "1rem",
  h: "3rem",
};
export const PrimaryButton = ({
  message,
  dimensions,
  alignSelf,
  withIcon,
  float,
  onClick,
  themeColor,
  borderColor,
  variant,
  chakraprops,
}) => {
  return (
    <>
      <BaseButton
        borderWidth={1}
        fontWeight="bold"
        message={message || "Message"}
        {...(withIcon && { withIcon: withIcon })}
        {...(dimensions && { dimensions: dimensions })}
        {...(alignSelf && { alignSelf: alignSelf })}
        {...(variant && { variant: variant })}
        {...(float && { float: float })}
        color={colors.black || " #000000"}
        bordercolor={borderColor || " #000000"}
        colorsheme={themeColor || " #ff770000"}
        {...(onClick && { onClick: onClick })}
        {...(chakraprops && { chakraprops })}
      />
    </>
  );
};
export const SecondaryButton = ({
  message,
  dimensions,
  withIcon,
  float,
  onClick,
  color,
  backgroundColor,
  size,
  fontWeight,
  chakraprops,
}) => {
  return (
    <>
      <BaseButton
        variant="ghost"
        message={message || ""}
        {...(dimensions && { dimensions: dimensions })}
        {...(withIcon && { withIcon: withIcon })}
        {...(float && { float: float })}
        {...(size && { size: size })}
        {...(onClick && { onClick: onClick })}
        {...(color && { color: color })}
        {...(backgroundColor && { backgroundColor: backgroundColor })}
        {...(fontWeight && { fontWeight: fontWeight })}
        {...(chakraprops && { chakraprops })}
      />
    </>
  );
};
export const BaseButton = ({
  message,
  dimensions,
  withIcon,
  onClick,
  alignSelf,
  backgroundColor,
  color,
  fontWeight,
  colorSheme,
  variant,
  float,
  size,
  chakraprops,
}) => {
  return (
    <>
      <Button
        {...(withIcon && { leftIcon: withIcon, m: 0 })}
        {...(color && { color: color })}
        {...(float && { float: float })}
        {...(colorSheme && { colorSheme: colorSheme })}
        {...(backgroundColor && { backgroundColor: backgroundColor })}
        {...(size && { size: size })}
        {...(dimensions && {
          height: dimensions.height,
          width: dimensions.width,
        })}
        {...(variant && { variant: variant })}
        {...(alignSelf && { alignSelf: alignSelf })}
        {...(onClick && { onClick: onClick })}
        {...{ chakraprops: chakraprops }}
        fontSize="1.8ex"
        {...(fontWeight && { fontWeight: fontWeight })}
        zIndex={1}
      >
        <p>{message}</p>
      </Button>
    </>
  );
};
