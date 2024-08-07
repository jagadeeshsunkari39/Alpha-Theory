import { Box } from "@mui/material";
import Navbar from "../Navbar/Navbar";
import { ILayoutProps } from "../shared/interfaces/layout.interface";

const Layout = ({ children }: ILayoutProps) => {
  return (
    <Box>
      <Navbar />
      <Box>{children}</Box>
    </Box>
  );
};

export default Layout;
