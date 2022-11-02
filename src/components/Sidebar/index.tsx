import {
  Box,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  useBreakpointValue,
} from "@chakra-ui/react";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useSideBarDrawer } from "../../contexts/SideBarDrawerContent";
import { SideBarNav } from "./SideBarNav";

export const SideBar = () => {
  const { isOpen, onClose } = useSideBarDrawer();
  const isDrawerSideBar = useBreakpointValue({
    base: true,
    lg: false,
  });

  if (isDrawerSideBar) {
    return (
      <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
        <DrawerContent bg="gray.800" p="4">
          <DrawerCloseButton mt="6" />
          <DrawerHeader>Navegação</DrawerHeader>
          <DrawerBody>
            <SideBarNav />
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    );
  }

  return (
    <Box as="aside" w="64" mr="8">
      <SideBarNav />
    </Box>
  );
};
