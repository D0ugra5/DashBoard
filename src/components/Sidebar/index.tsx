import { Box, Stack, Text, Link, Icon } from "@chakra-ui/react";
import {
  RiContactsLine,
  RiDashboardLine,
  RiGitMergeLine,
  RiInputMethodLine,
} from "react-icons/ri";
import { NavLink } from "./NavLink";
import { NavSection } from "./NavSection";

export const SideBar = () => {
  return (
    <Box as="aside" w="64" mr="8">
      <Stack spacing="12" align="flex-start">
        <NavSection title="GERAL">
          <NavLink icon={RiDashboardLine} children="Dashboard" />
          <NavLink icon={RiContactsLine} children="Usuários" />
        </NavSection>
        <NavSection title="AUTOMAÇÂO">
          <NavLink icon={RiInputMethodLine} children="Formulários" />
          <NavLink icon={RiGitMergeLine} children="Automação" />
        </NavSection>
      </Stack>
    </Box>
  );
};
