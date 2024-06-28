import React from "react";
import {
  Box,
  Flex,
  HStack,
  Link,
  Stack,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import { useState } from "react";
import Layout from "../components/layout";
import { mapMenus } from "../lib/utils/mapper";
import { MenuLink } from "../components/commun/menu";

export default function Test() {
  const menuData = {
    id: 2,
    attributes: {
      title: "dashboard",
      slug: "dashboard",
      createdAt: "2024-06-18T15:42:12.934Z",
      updatedAt: "2024-06-18T15:42:12.934Z",
      items: {
        data: [
          {
            id: 15,
            attributes: {
              order: 0,
              title: "Tableau de bord",
              url: "/dashboard",
              target: "_parent",
              createdAt: "2024-06-18T15:42:12.969Z",
              updatedAt: "2024-06-18T15:42:12.969Z",
              children: {
                data: [
                  {
                    id: 17,
                    attributes: {
                      order: 0,
                      title: "Submenu 1",
                      url: "/dashboard/submenu1",
                      target: "_parent",
                      createdAt: "2024-06-18T15:42:12.969Z",
                      updatedAt: "2024-06-18T15:42:12.969Z",
                      children: {
                        data: [
                          {
                            id: 17,
                            attributes: {
                              order: 0,
                              title: "Submenu 1",
                              url: "/dashboard/submenu1",
                              target: "_parent",
                              createdAt: "2024-06-18T15:42:12.969Z",
                              updatedAt: "2024-06-18T15:42:12.969Z",
                            },
                          },
                          {
                            id: 18,
                            attributes: {
                              order: 1,
                              title: "Submenu 2",
                              url: "/dashboard/submenu2",
                              target: "_parent",
                              createdAt: "2024-06-18T15:42:12.969Z",
                              updatedAt: "2024-06-18T15:42:12.969Z",
                            },
                          },
                        ],
                      },
                    },
                  },
                  {
                    id: 18,
                    attributes: {
                      order: 1,
                      title: "Submenu 2",
                      url: "/dashboard/submenu2",
                      target: "_parent",
                      createdAt: "2024-06-18T15:42:12.969Z",
                      updatedAt: "2024-06-18T15:42:12.969Z",
                    },
                  },
                ],
              },
            },
          },
          {
            id: 16,
            attributes: {
              order: 1,
              title: "Mon compte",
              url: "/account",
              target: null,
              createdAt: "2024-06-18T15:42:12.977Z",
              updatedAt: "2024-06-18T15:42:12.977Z",
              children: {
                data: [],
              },
            },
          },
        ],
      },
    },
  };
  const menuItems = mapMenus(menuData);
  return (
    <Stack>
      <MenuWithHover menuData={menuItems} />
    </Stack>
  );
}

// components/MenuWithHover.js

const MenuWithHover = ({ menuData }) => {
  const [activeParent, setActiveParent] = useState(null);

  const handleMouseEnter = (parent) => {
    setActiveParent(parent);
  };

  const handleMouseLeave = () => {
    setActiveParent(null);
  };

  return (
    <Flex direction="row" position="relative">
      {menuData?.map((parent) => (
        <Box
          key={parent.id}
          onMouseEnter={() => handleMouseEnter(parent)}
          onMouseLeave={handleMouseLeave}
          position="relative"
          mr={4}
        >
          <MenuLink title={parent.label} link={parent.url} />
          {/* <Text p="2" bg="gray.200" _hover={{ bg: "gray.300" }}>
            {parent.label}
          </Text> */}
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
            >
              {parent.children.map((child) => (
                <Box key={child.id}>
                  <MenuLink title={child.label} link={child.url} />
                </Box>
              ))}
            </Box>
          )}
        </Box>
      ))}
    </Flex>
  );
};
