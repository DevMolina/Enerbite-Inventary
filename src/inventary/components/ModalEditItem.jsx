import { Box, Button, Grid, Modal, TextField, Typography } from "@mui/material"
import { useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "../../hooks";
import { cancelEdititem, startUpdateItem } from "../../store/enerbit";

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

let formData = {
    serial: '',
    connection_type: '',
    storage_system: '',
    owner: '',
    location: '',
    manufacturer: '',
    purchase: '',
    i_max: '',
    i_b: '',
    i_n: '',
    seals: '',
}

export const ModalEditItem = () => {

    const dispatch = useDispatch();
    const { isEdit, activeItem } = useSelector(state => state.inventary);
    const handleClose = () => dispatch(cancelEdititem());

    useMemo(() => { formData = { ...activeItem } }, [activeItem]);

    const {
        serial,
        connection_type,
        storage_system,
        owner,
        location,
        manufacturer,
        purchase,
        i_max,
        i_b,
        i_n,
        seals,
        formState,
        onInputChange } = useForm(formData);

    const onSubmit = (event) => {
        event.preventDefault();
        dispatch(startUpdateItem(formState, activeItem.id));
        handleClose();
    }

    return (
        <Modal
            open={isEdit}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box sx={style} >
                <Typography id="modal-modal-title" variant="h6" component="h2">
                    Item {activeItem.id}
                </Typography>
                <form onSubmit={onSubmit} className="animate__animated animate__fadeIn animate__faster">
                    <Grid container>
                        <Grid item xs={12} sx={{ mt: 2 }}>
                            <TextField
                                label="Serial"
                                type="text"
                                placeholder="123"
                                fullWidth
                                name="serial"
                                value={serial}
                                onChange={onInputChange}
                            />
                        </Grid>
                        <Grid item xs={12} sx={{ mt: 2 }}>
                            <TextField
                                label="Connection Type"
                                type="text"
                                placeholder="direct"
                                fullWidth
                                name="connection_type"
                                value={connection_type}
                                onChange={onInputChange}
                            />
                        </Grid>
                        <Grid item xs={12} sx={{ mt: 2 }}>
                            <TextField
                                label="Storage System"
                                type="text"
                                placeholder="interno"
                                fullWidth
                                name="storage_system"
                                value={storage_system}
                                onChange={onInputChange}
                            />
                        </Grid>
                        <Grid item xs={12} sx={{ mt: 2 }}>
                            <TextField
                                label="Owner"
                                type="text"
                                placeholder="RF"
                                fullWidth
                                name="owner"
                                value={owner}
                                onChange={onInputChange}
                            />
                        </Grid>
                        <Grid item xs={12} sx={{ mt: 2 }}>
                            <TextField
                                label="Location"
                                type="text"
                                placeholder="Tunja, Boyacá"
                                fullWidth
                                name="location"
                                value={location}
                                onChange={onInputChange}
                            />
                        </Grid>
                        <Grid item xs={12} sx={{ mt: 2 }}>
                            <TextField
                                label="Manufacturer"
                                type="text"
                                placeholder="Molina-Dev"
                                fullWidth
                                name="manufacturer"
                                value={manufacturer}
                                onChange={onInputChange}
                            />
                        </Grid>
                        <Grid item xs={12} sx={{ mt: 2 }}>
                            <TextField
                                label="Purchase"
                                type="text"
                                placeholder="2023-01-22"
                                fullWidth
                                name="purchase"
                                value={purchase}
                                onChange={onInputChange}
                            />
                        </Grid>
                        <Grid item xs={12} sx={{ mt: 2 }}>
                            <TextField
                                label="Imax"
                                type="text"
                                placeholder="200"
                                fullWidth
                                name="i_max"
                                value={i_max}
                                onChange={onInputChange}
                            />
                        </Grid>
                        <Grid item xs={12} sx={{ mt: 2 }}>
                            <TextField
                                label="Ib"
                                type="text"
                                placeholder="20"
                                fullWidth
                                name="i_b"
                                value={i_b}
                                onChange={onInputChange}
                            />
                        </Grid>
                        <Grid item xs={12} sx={{ mt: 2 }}>
                            <TextField
                                label="In"
                                type="text"
                                placeholder="800"
                                fullWidth
                                name="i_n"
                                value={i_n}
                                onChange={onInputChange}
                            />
                        </Grid>
                        <Grid item xs={12} sx={{ mt: 2 }}>
                            <TextField
                                label="Seals"
                                type="text"
                                placeholder="500"
                                fullWidth
                                name="seals"
                                value={seals}
                                onChange={onInputChange}
                            />
                        </Grid>
                        {/* <Grid 
                        container
                        display = {!!errorMessage ? '': 'none'}
                        sx={{ mt:1 }}
                        >
                        <Grid 
                            item 
                            xs={12}
                        >
                            <Alert severity='error'>{ errorMessage }</Alert>
                        </Grid>
                    </Grid> */}
                        <Grid container spacing={2} sx={{ mb: 2, mt: 1 }}>
                            <Grid item xs={6} sm={12}>
                                <Button
                                    type="submit"
                                    variant="contained"
                                    fullWidth
                                >
                                    Save
                                </Button>
                            </Grid>
                            <Grid item xs={6} sm={12}>
                                <Button
                                    onClick={handleClose}
                                    type="button"
                                    variant="contained"
                                    fullWidth
                                >
                                    Cancel
                                </Button>
                            </Grid>
                        </Grid>
                    </Grid>
                </form>
            </Box>
        </Modal>

    )
}
