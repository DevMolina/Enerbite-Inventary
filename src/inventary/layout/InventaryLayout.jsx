import { Toolbar } from "@mui/material";
import { Box } from "@mui/system";
import { NavBar } from "../components/NavBar";


export const InventaryLayout = ({ children }) => {
  return (
    <Box sx={{ display: 'flex' }} className="animate__animated animate__fadeIn animate__faster">
      <NavBar />
      <Box
        component='main'
        sx={{ flexGrow: 1 }}
      >
        <Toolbar />
        {children}
      </Box>

    </Box>
  )
}
