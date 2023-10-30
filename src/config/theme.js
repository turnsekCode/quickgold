import { extendTheme } from "@chakra-ui/react";
import { createTheme } from "@mui/system";

const config = {
  initialColorMode: "system",
  useSystemColorMode: true,
};

const theme = createTheme({ config });

export default theme;
