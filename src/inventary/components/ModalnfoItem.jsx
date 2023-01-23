import { Box, Button, Grid, List, ListItem, ListItemText, Modal, Typography } from "@mui/material"
import { useEffect, useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { confirmDeleteItem, setDeactivateItem, setEditItem, startDeleteItem } from "../../store/enerbit";

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


export const ModalInfoItem = () => {

  const handleClose = () => dispatch(setDeactivateItem());

  const dispatch = useDispatch();

  const { activeItem, isActiveItem } = useSelector(state => state.inventary);

  const onDeleteItem = () => {
    dispatch(confirmDeleteItem(activeItem));
  } 

  const onEditItem = () =>{
    dispatch(setEditItem(activeItem));
    dispatch(setDeactivateItem());
}

  return (
    <Modal
        open={isActiveItem}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
    >
    <Box sx={style} >
        <Typography id="modal-modal-title" variant="h6" component="h2">
        Item {activeItem.id}
        </Typography>
        <List>
          <ListItem alignItems="flex-start">
            <ListItemText
              primary={`Serial: ${activeItem.serial}`}/>
          </ListItem>
          <ListItem>
            <ListItemText
              primary={`Connection Type: ${activeItem.connection_type}`}/>
          </ListItem>
          <ListItem>
            <ListItemText
              primary={`Storage System: ${activeItem.storage_system}`}/>
          </ListItem>
          <ListItem>
            <ListItemText
              primary={`Owner: ${activeItem.owner}`}/>
          </ListItem>
          <ListItem>
            <ListItemText
              primary={`Location: ${activeItem.location}`}/>
          </ListItem>
          <ListItem>
            <ListItemText
              primary={`Manufacturer: ${activeItem.manufacturer}`}/>
          </ListItem>
          <ListItem>
            <ListItemText
              primary={`Purchase: ${activeItem.purchase}`}/>
          </ListItem>
          <ListItem>
            <ListItemText
              primary={`Imax: ${activeItem.i_max}`}/>
          </ListItem>
          <ListItem>
            <ListItemText
              primary={`Ib: ${activeItem.i_b}`}/>
          </ListItem>
          <ListItem>
            <ListItemText
              primary={`In: ${activeItem.i_n}`}/>
          </ListItem>
          <ListItem>
            <ListItemText
              primary={`Seals: ${activeItem.seals}`}/>
          </ListItem>
        </List>
        <Grid container spacing={2} alignItems="flex-end">
          <Grid item xs={12} md={6}>
            <Button variant="outlined" color="warning" startIcon={<EditIcon />} onClick={onEditItem}>
                  Edit
            </Button>
          </Grid>
          <Grid item xs={12} md={6}>
            <Button variant="outlined" color="error" startIcon={<DeleteIcon />} onClick={onDeleteItem}>
                Delete
            </Button>
          </Grid>
        </Grid>
        
    </Box>
    </Modal>

  )
}
