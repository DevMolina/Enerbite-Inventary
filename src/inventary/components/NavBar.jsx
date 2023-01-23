import { AppBar, styled, Toolbar, Typography, InputBase, alpha, Button, Box } from "@mui/material"
import SearchIcon from '@mui/icons-material/Search';
import { useDispatch, useSelector } from "react-redux";
import { addItem, setItems, startLoadItems } from "../../store/enerbit";

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}));

const StyledToolbar = styled(Toolbar)(({ theme }) => ({
  alignItems: 'flex-start',
  paddingTop: theme.spacing(1),
  paddingBottom: theme.spacing(2),
  // Override media queries injected by theme.mixins.toolbar
  '@media all': {
    minHeight: 128,
  },
}));

export const NavBar = () => {

  const dispatch = useDispatch();
  const { items } = useSelector(state => state.inventary);

  const onSearch = ({ target }) => {
    console.log(items);
    const itemsSearch = items.filter((item) => item.serial.includes(target.value));
    if (target.value != '') {
      console.log(itemsSearch);
      dispatch(setItems(itemsSearch));
    } else {
      dispatch(startLoadItems());
    }

  }

  const onAddItem = () => {
    dispatch(addItem());
  }

  return (
    <StyledToolbar>
      <AppBar
        position="fixed"
      >
        <Toolbar>
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'initial', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            ENERBIT
          </Typography>
          <Search onChange={onSearch}>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
            />
          </Search>
          <Button
            color="inherit"
            onClick={onAddItem}
          // variant="h5"
          // component="div"
          // sx={{ flexGrow: 1, alignSelf: 'center' }}
          >
            Add Product
          </Button>
        </Toolbar>

      </AppBar>
    </StyledToolbar>
  )
}
