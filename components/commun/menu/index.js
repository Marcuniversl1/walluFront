import { Box, HStack, Heading, Text, Stack } from "@chakra-ui/layout";
import { colors, images, messages } from "../../../theme";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

export const SiteHeading = () => {
  const router = useRouter();

  const {
    header: { sitename },
  } = messages.components;
  return (
    <HStack
      alignItems={"inherit"}
      _hover={{ cursor: "pointer" }}
      role={"brand-block"}
      onClick={() => router.push("/")}
    >
      <Image role={"logo"} {...images.logo} alt={"Orange Dev"} />
      <Heading fontSize={"1.875rem"} lineHeight={"2rem"}>
        {sitename}
      </Heading>
    </HStack>
  );
};

const { primary, black, white, gray } = colors;

export const MenuLink = ({
  dark,
  withIndicator,
  active,
  activeTint,
  inactiveTint,
  desktop,
  color,
  link,
  target,
  title,
  fontSize,
  fontWeight,
  lineHeight,
  borderHeight,
}) => {
  const def = {
    pos: "absolute",
    bgColor: activeTint || primary.regular,
  };

  return (
    <Box position={"relative"}>
      <Link href={link} target={target}>
        <Text
          color={inactiveTint || color || black}
          {...(dark && { color: (!active && inactiveTint) || white })}
          {...(withIndicator && {
            color: active ? black : gray.regular,
          })}
          {...(active && !desktop && { pl: ".5rem" })}
          fontSize={fontSize || "1rem"}
          fontWeight={fontWeight || "medium"}
          lineHeight={lineHeight || "1.5rem"}
        >
          {title}
        </Text>
        {active && desktop && (
          <Box
            {...def}
            h={borderHeight || 0.5}
            w={"100%"}
            bottom={"-1.2rem"}
          ></Box>
        )}
        {active && !desktop && (
          <Box
            {...def}
            h={borderHeight || "1.2rem"}
            w={"2%"}
            top={1}
            let={"-1.2rem"}
          ></Box>
        )}
      </Link>
    </Box>
  );
};

export const Menus = ({ items }) => {
  const [activeParent, setActiveParent] = useState(null);

  const handleMouseEnter = (parent) => {
    setActiveParent(parent);
  };

  const handleMouseLeave = () => {
    setActiveParent(null);
  };

  return (
    <Stack direction="row" position="relative">
      {items?.map((parent) => (
        <Box
          key={parent.id}
          onMouseEnter={() => handleMouseEnter(parent)}
          onMouseLeave={handleMouseLeave}
          position="relative"
          mr={4}
        >
          <MenuLink title={parent.label} link={parent.url} />

          {activeParent === parent && parent?.children?.length > 0 && (
            <Box
              position="absolute"
              top="100%"
              left="0"
              bg="white"
              boxShadow="md"
              p="2"
              borderRadius="md"
              zIndex="10"
              onMouseEnter={() => handleMouseEnter(parent)}
              onMouseLeave={handleMouseLeave}
              gap={8}
            >
              {parent.children.map((child) => (
                <Box key={child.id} my={2} minW={"max-content"}>
                  <MenuLink title={child.label} link={child.url} />
                </Box>
              ))}
            </Box>
          )}
        </Box>
      ))}
    </Stack>
  );
};
