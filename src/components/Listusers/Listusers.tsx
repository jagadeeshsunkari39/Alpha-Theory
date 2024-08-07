import {
  Box,
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  TablePagination,
  Paper,
  InputAdornment,
  TextField,
  Typography,
} from "@mui/material";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import styles from "../../styles/style.module.css";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import { IUSERS } from "../shared/interfaces/user.interface";
import { getUsers } from "@/api/user.api";
import { ROUTES } from "../shared/constants/routes";

const Listusers = () => {
  const router = useRouter();

  const [userData, setUserData] = useState<IUSERS[]>();

  const [page, setPage] = useState<number>(0);
  const [rowsPerPage, setRowsPerPage] = useState<number>(10);
  const [filterData, setFilteredData] = useState<IUSERS[]>();

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  useEffect(() => {
    getUsers().then((response: IUSERS[]) => {
      setUserData(response);
      setFilteredData(response);
    }).catch(error => console.log(error));
  }, []);

  const handleOnClickUser = (id: number) => {
    router.push(ROUTES.details + `/${id}`);
  };

  const handleFilterChange = (event: any) => {
    const searchTerm = event.target.value;
    if (searchTerm === "") {
      setFilteredData(userData);
    } else {
      setFilteredData(
        userData?.filter(
          (data: IUSERS) =>
            data?.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            data?.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
            data?.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
            data?.country.toLowerCase().includes(searchTerm.toLowerCase()) ||
            data?.city.toLowerCase().includes(searchTerm.toLowerCase())
        )
      );
    }
  };

  return (
    <>
      <Box mr={4} ml={4} display="flex" justifyContent="space-between">
        <Typography variant="h6" className={styles.titleName}>
          List of Items
        </Typography>
        <TextField
          size="small"
          type="text"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchOutlinedIcon />
              </InputAdornment>
            ),
          }}
          placeholder="Search"
          sx={{ width: "40%" }}
          onInput={(e) => handleFilterChange(e)}
        />
      </Box>
      <Box mr={4} ml={4} component={Paper}>
        <TableContainer sx={{ height: "23em" }}>
          <Table stickyHeader>
            <TableHead>
              <TableRow>
                <TableCell size="medium" className={styles.tableHeader}>
                  Name
                </TableCell>
                <TableCell size="medium" className={styles.tableHeader}>
                  Email
                </TableCell>
                <TableCell size="medium" className={styles.tableHeader}>
                  Company
                </TableCell>
                <TableCell size="medium" className={styles.tableHeader}>
                  Country
                </TableCell>
                <TableCell size="medium" className={styles.tableHeader}>
                  City
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {filterData && filterData.length > 0 ? (
                filterData
                  ?.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .map((user: IUSERS) => (
                    <TableRow
                      sx={{ cursor: "pointer" }}
                      key={user?.id}
                      onClick={() => handleOnClickUser(user?.id)}
                    >
                      <TableCell size="medium">{user?.name}</TableCell>
                      <TableCell size="medium">{user?.email}</TableCell>
                      <TableCell size="medium">{user?.company}</TableCell>
                      <TableCell size="medium">{user?.country}</TableCell>
                      <TableCell size="medium">{user?.city}</TableCell>
                    </TableRow>
                  ))
              ) : (
                <TableRow>
                  <TableCell size="small" colSpan={5} align="center">
                    <Typography variant="body1">No records found</Typography>
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[10, 25, 50, 100]}
          component="div"
          count={filterData ? filterData?.length : 0}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Box>
    </>
  );
};

export default Listusers;
