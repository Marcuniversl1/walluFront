import { useRef } from "react";
import { RiMenuFill } from "react-icons/ri";
import {
  Button,
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  DrawerCloseButton,
  DrawerBody,
  List,
  ListItem,
  Link,
  useDisclosure,
} from "@chakra-ui/react";
export default function MenuMob() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef();

  return (
    <>
      <Button ref={btnRef} onClick={onOpen}>
        {<RiMenuFill />}
      </Button>
      <Drawer
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Wallu Diabete</DrawerHeader>

          <DrawerBody>
            <List color="#707070" spacing={3}>
              <ListItem>
                <Link href={"/"}>
                  <Button fontWeight={100}>Accueil</Button>
                </Link>
              </ListItem>
              <ListItem>
                <Link href={"/medecin"}>
                  <Button fontWeight={100}>Medecins</Button>
                </Link>
              </ListItem>
              <ListItem>
                <Link href={"/"}>
                  <Button fontWeight={100}>Patients</Button>
                </Link>
              </ListItem>
              <ListItem>
                <Link href={"/medecin"}>
                  <Button fontWeight={100}>Blog</Button>
                </Link>
              </ListItem>
            </List>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
}
