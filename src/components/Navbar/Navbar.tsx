import { AppBar, Box, CssBaseline, Toolbar, Typography } from "@mui/material";

import styles from "../../styles/style.module.css";
import logo from "../../assets/images/logo.svg";
import Image from "next/image";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

const Navbar = () => {
  return (
    <Box className={styles.navbarLogo}>
      <Image src={logo} alt="logo" height={40} width={110}/>
      <Box display="flex" gap="5px">
        <AccountCircleIcon className={styles.navbarMessage}/>
        <Typography variant="body1" className={styles.navbarMessage}>
          Welcome
        </Typography>
      </Box>
    </Box>
  );
};

export default Navbar;
