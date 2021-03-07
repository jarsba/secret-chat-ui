import React from "react";
import { useColorMode, Box, IconButton } from "@chakra-ui/react";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";

function ThemeToggle() {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <div style={{display:"show"}}>
    <Box textAlign="right" py={4} mr={12}>
      <IconButton
        icon={colorMode === "light" ? <MoonIcon /> : <SunIcon />}
        onClick={toggleColorMode}
      />
    </Box>
    </div>
  );
}

export default ThemeToggle;
