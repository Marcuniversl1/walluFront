import React, { Fragment } from "react";
import { Stack, HStack, Box, Button, Text } from "@chakra-ui/react";
import { ImPhone } from "react-icons/im";
import Image from "next/image";
import Logo from "../../assets/logo.png";
import Link from "next/link";
import { Media, MediaContextProvider } from "../../src/utils/media";
import MenuMob from "./menuMob";
import { signOut, useSession } from "next-auth/react";
import { MenuLink, Menus } from "../commun/menu";
import { colors } from "../../theme";

export default function Header({ session, menus }) {
  return (
    <Fragment>
      <Media greaterThanOrEqual="lg">
        <Stack gap={0}>
          <HStack bg={"#0088FF"} h={"30px"} gap={6}>
            <HStack m={2} color={colors.white}>
              <ImPhone />
              <Text m={2} as="b">
                Numéro vert
              </Text>
              <Text m={2}> 800 00 50 50</Text>
            </HStack>
            <HStack color={colors.white}>
              <ImPhone />
              <Text m={2} as="b">
                SAMU{" "}
              </Text>
              <Text m={2}>Composer le 1515</Text>
            </HStack>
          </HStack>
          <HStack
            height={70}
            bgGradient="linear(to-r, #DDE4F1, transparent)"
            justifyContent="space-between"
          >
            <HStack>
              <Box boxSize="50px" m={2}>
                <Link href="/">
                  <Image alt="logo" src={Logo} />
                </Link>
              </Box>
              <Text m={2} as="b">
                WALLU DIABÉTE
              </Text>
            </HStack>
            <HStack px={4} gap={4}>
              <Menus items={menus} />
            </HStack>
            <HStack>
              {session ? (
                <HStack>
                  <Link href="/user/login">
                    <Button
                      color={colors.primary.regular}
                      borderRadius={38}
                      border="1px solid deeppink"
                    >
                      Profil
                    </Button>
                  </Link>
                  <Button
                    bg={colors.primary.regular}
                    borderRadius={38}
                    color={colors.white}
                    hover={colors.red}
                    onClick={() => signOut()}
                  >
                    Se déconnecter
                  </Button>
                </HStack>
              ) : (
                <HStack>
                  <Link href="/user/login">
                    <Button
                      color={colors.primary.regular}
                      borderRadius={38}
                      border="1px solid blue"
                    >
                      Se connecter
                    </Button>
                  </Link>
                  <Link href="/user/register">
                    <Button
                      bg={colors.primary.regular}
                      borderRadius={38}
                      color={colors.white}
                      hover={colors.red.regular}
                    >
                      Créer un compte
                    </Button>
                  </Link>
                </HStack>
              )}
            </HStack>
          </HStack>
        </Stack>
      </Media>
      <Media lessThan="lg">
        <HStack>
          <Box boxSize="30px" m={2}>
            <Link href="/">
              <Image alt="logo" src={Logo} style={{ borderRadius: "100%" }} />
            </Link>
          </Box>
          <MenuMob />
        </HStack>
      </Media>
    </Fragment>
  );
}
