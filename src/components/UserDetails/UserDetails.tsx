import {
  Box,
  Button,
  Card,
  CardActionArea,
  CardContent,
  List,
  ListItem,
  ListItemText,
  Paper,
  Typography,
  useMediaQuery,
} from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useRouter } from "next/router";
import Image from "next/image";

import profile from "../../assets/images/profile.png";
import { useEffect, useState } from "react";
import { ROUTES } from "../shared/constants/routes";
import { IUSERS } from "../shared/interfaces/user.interface";
import { getUserById } from "@/api/user.api";

const UserDetails = () => {
  const router = useRouter();

  const { id } = router.query;

  const isSmallScreen = useMediaQuery("(max-width:800px)");

  const [details, setDetails] = useState<IUSERS>();

  const handleOnClickBack = () => {
    router.push(ROUTES.users);
  };

  useEffect(() => {
    if (id) {
      getUserById(parseInt(id as string))
        .then((data: IUSERS[]) => setDetails(data[0]))
        .catch((error) => console.log(error));
    }
  }, [id]);

  return (
    <>
      <Box sx={{ margin: "20px" }}>
        <Box>
          <Button
            variant="contained"
            startIcon={<ArrowBackIcon />}
            onClick={handleOnClickBack}
          >
            Go Back
          </Button>
        </Box>
        {isSmallScreen ? (
          <Box
            component={Paper}
            sx={{
              display: "flex",
              flexDirection:"column",
              marginTop: "10px",
              justifyContent: "center",
              alignItems: "center",
              overflow:"auto"
            }}
          >
            <Box
              display="flex"
              justifyContent="center"
              alignItems="center"
            >
              <Image src={profile} alt="Logo" height={120} width={120} />
            </Box>
            <Box>
              <Card elevation={0}>
                <CardActionArea>
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div" align="center">
                      {details?.name}
                    </Typography>
                    <Box display="flex" flexDirection="column">
                      <List>
                        <ListItem sx={{display:"flex", flexDirection:"column"}}>
                          <ListItemText sx={{ marginTop: "0px" }}>
                            Email
                          </ListItemText>
                          <ListItemText sx={{ marginTop: "0px" }}>
                            {details?.email}
                          </ListItemText>
                        </ListItem>
                        <ListItem sx={{display:"flex", flexDirection:"column"}}>
                          <ListItemText sx={{ margin: "0px" }}>
                            Company
                          </ListItemText>
                          <ListItemText sx={{ margin: "0px" }}>
                            {details?.company}
                          </ListItemText>
                        </ListItem>
                        <ListItem sx={{display:"flex", flexDirection:"column"}}>
                          <ListItemText sx={{ margin: "0px" }}>
                            Phone
                          </ListItemText>
                          <ListItemText sx={{ margin: "0px" }}>
                            {details?.phone}
                          </ListItemText>
                        </ListItem>
                        <ListItem sx={{display:"flex", flexDirection:"column"}}>
                          <ListItemText sx={{ margin: "0px" }}>
                            Country
                          </ListItemText>
                          <ListItemText sx={{ margin: "0px" }}>
                            {details?.country}
                          </ListItemText>
                        </ListItem >
                        <ListItem sx={{display:"flex", flexDirection:"column"}}>
                          <ListItemText sx={{ margin: "0px" }}>
                            City
                          </ListItemText>
                          <ListItemText sx={{ margin: "0px" }}>
                            {details?.city}
                          </ListItemText>
                        </ListItem>
                        <ListItem sx={{display:"flex", flexDirection:"column"}}>
                          <ListItemText sx={{ margin: "0px" }}>
                            Address
                          </ListItemText>
                          <ListItemText sx={{ margin: "0px" }}>
                            {details?.address}
                          </ListItemText>
                        </ListItem>
                        <ListItem sx={{display:"flex", flexDirection:"column"}}>
                          <ListItemText sx={{ margin: "0px" }}>
                            Currency
                          </ListItemText>
                          <ListItemText sx={{ margin: "0px" }}>
                            {details?.currency}
                          </ListItemText>
                        </ListItem>
                        <ListItem sx={{display:"flex", flexDirection:"column"}}>
                          <ListItemText sx={{ margin: "0px" }}>
                            About
                          </ListItemText>
                          <ListItemText sx={{ maxWidth: "80%", margin: "0px", textAlign:"center" }}>
                            {details?.about}
                          </ListItemText>
                        </ListItem>
                      </List>
                    </Box>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Box>
          </Box>
        ) : (
          <Box
            component={Paper}
            sx={{
              display: "flex",
              marginTop: "10px",
              justifyContent: "center",
              alignItems: "center",
              width: "96vw",
            }}
          >
            <Box
              ml={10}
              flex="40%"
              display="flex"
              justifyContent="center"
              alignItems="center"
            >
              <Image src={profile} alt="Logo" height={220} width={220} />
            </Box>
            <Box ml={10} flex={"60%"}>
              <Card elevation={0}>
                <CardActionArea>
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      {details?.name}
                    </Typography>
                    <Box display="flex" flexDirection="column">
                      <List>
                        <ListItem>
                          <ListItemText sx={{ marginTop: "0px" }}>
                            Email
                          </ListItemText>
                          <ListItemText sx={{ marginTop: "0px" }}>
                            {details?.email}
                          </ListItemText>
                        </ListItem>
                        <ListItem>
                          <ListItemText sx={{ margin: "0px" }}>
                            Company
                          </ListItemText>
                          <ListItemText sx={{ margin: "0px" }}>
                            {details?.company}
                          </ListItemText>
                        </ListItem>
                        <ListItem>
                          <ListItemText sx={{ margin: "0px" }}>
                            Phone
                          </ListItemText>
                          <ListItemText sx={{ margin: "0px" }}>
                            {details?.phone}
                          </ListItemText>
                        </ListItem>
                        <ListItem>
                          <ListItemText sx={{ margin: "0px" }}>
                            Country
                          </ListItemText>
                          <ListItemText sx={{ margin: "0px" }}>
                            {details?.country}
                          </ListItemText>
                        </ListItem>
                        <ListItem>
                          <ListItemText sx={{ margin: "0px" }}>
                            City
                          </ListItemText>
                          <ListItemText sx={{ margin: "0px" }}>
                            {details?.city}
                          </ListItemText>
                        </ListItem>
                        <ListItem>
                          <ListItemText sx={{ margin: "0px" }}>
                            Address
                          </ListItemText>
                          <ListItemText sx={{ margin: "0px" }}>
                            {details?.address}
                          </ListItemText>
                        </ListItem>
                        <ListItem>
                          <ListItemText sx={{ margin: "0px" }}>
                            Currency
                          </ListItemText>
                          <ListItemText sx={{ margin: "0px" }}>
                            {details?.currency}
                          </ListItemText>
                        </ListItem>
                        <ListItem>
                          <ListItemText sx={{ margin: "0px" }}>
                            About
                          </ListItemText>
                          <ListItemText sx={{ maxWidth: "80%", margin: "0px" }}>
                            {details?.about}
                          </ListItemText>
                        </ListItem>
                      </List>
                    </Box>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Box>
          </Box>
        )}
      </Box>
    </>
  );
};

export default UserDetails;
