import { Box, Button, Grid, Modal, Typography } from "@mui/material"
import { useDispatch, useSelector } from "react-redux";
import DoneIcon from '@mui/icons-material/Done';;
import CloseIcon from '@mui/icons-material/Close';
import { setDeactivateItem, startDeleteItem } from "../../store/enerbit";

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};


export const ModalConfirmDelete = () => {

    const dispatch = useDispatch();
    const handleClose = () => dispatch(setDeactivateItem());

    const { activeItem, confirmDelete } = useSelector(state => state.inventary);
    
  console.log(confirmDelete);

  const onDeleteItem = () => {
    dispatch(startDeleteItem(activeItem));
    handleClose();
  } 

  return (
    <Modal
        open={confirmDelete}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
    >
    <Box sx={style} >
        <Typography id="modal-modal-title" variant="h6" component="h2">
        Desea eliminar el item con el id {activeItem.id}?
        </Typography>

        <Grid container spacing={2} alignItems="flex-end">
          <Grid item xs={12} md={6}>
            <Button variant="outlined" color="warning" startIcon={<DoneIcon />} onClick={ onDeleteItem }>
                Yes
            </Button>
          </Grid>
          <Grid item xs={12} md={6}>
            <Button variant="outlined" color="error" startIcon={<CloseIcon />} onClick={ handleClose } >
                Cancel
            </Button>
          </Grid>
        </Grid>
        
    </Box>
    </Modal>

  )
}
