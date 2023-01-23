import { Grid, Pagination, Stack, Typography } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { startLoadItems } from "../../store/enerbit";

export default function PaginationControlled() {
  const dispatch = useDispatch();
  const { page, pages } = useSelector(state => state.inventary);
  const handleChange = (event, value) => {
    dispatch(startLoadItems(value, 10))
  };

  return (
    <Grid container justifyContent="center">
      <Stack spacing={2} >
        <Typography>Page: {page + 1}</Typography>
        <Pagination count={pages - 1} page={page} onChange={handleChange} />
      </Stack>
    </Grid>
  );
}