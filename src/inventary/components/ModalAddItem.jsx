import { Box, Button, Grid, Modal, TextField, Typography } from "@mui/material"
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "../../hooks";
import { cancelAddItem, startAddItem, startUpdateItem } from "../../store/enerbit";

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
    condition: '',
    owner: '',
    location: '',
    manufacturer: '',
    purchase: '',
    i_max: '',
    i_b: '',
    i_n: '',
    seals: '',
}

const formValidations = {
    connection_type: [(value) => value.includes('directa') || value.includes('semi-directa') || value.includes('indirecta'), 'El tipo de conexión debe ser: directa, semi-directa o indirecta '],
    storage_system: [(value) => value.includes('interno') || value.includes('externo'), 'El sistema de almacenamiento debe ser: interno o externo'],
    condition: [(value) => value.includes('nuevo') || value.includes('usado'), 'La condición debe ser: Nuevo o Usado'],
    owner: [(value) => value.includes('RF') || value.includes('OR'), 'El propietario debe ser: RF o OR'],
    i_max: [(value) => !!parseFloat(value), 'La I max debe ser de tipo numerico decimal'],
    i_b: [(value) => !!parseFloat(value), 'La I b debe ser de tipo numerico decimal'],
    i_n: [(value) => !!parseFloat(value), 'La I n debe ser de tipo numerico decimal'],
    seals: [(value) => !!parseFloat(value), 'El seals debe ser de tipo numerico decimal'],
}


export const ModalAddItem = () => {

    const dispatch = useDispatch();
    const { isAddItem } = useSelector(state => state.inventary);
    const handleClose = () => dispatch(cancelAddItem());

    const [formSubmitted, setFormSubmitted] = useState(false);

    const {
        serial,
        connection_type,
        storage_system,
        condition,
        owner,
        location,
        manufacturer,
        purchase,
        i_max,
        i_b,
        i_n,
        seals,
        formState,
        onInputChange,
        isFormValid,
        connection_typeValid,
        storage_systemValid,
        conditionValid,
        ownerValid,
        i_maxValid,
        i_bValid,
        i_nValid,
        sealsValid,
    } = useForm(formData, formValidations);

    const onSubmit = (event) => {
        event.preventDefault();
        setFormSubmitted(true);
        if (!isFormValid) return;
        dispatch(startAddItem(formState));
        handleClose();
    }

    return (
        <Modal
            open={isAddItem}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box sx={style} >
                <Typography id="modal-modal-title" variant="h6" component="h2">
                    Agregar Producto
                </Typography>
                <form onSubmit={onSubmit} className="animate__animated animate__fadeIn animate__faster">
                    <Grid container spacing={2} sx={{ mb: 2, mt: 1 }}>
                        <Grid item xs={6} sx={{ mt: 2 }}>
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
                        <Grid item xs={6} sx={{ mt: 2 }}>
                            <TextField
                                label="Connection Type"
                                type="text"
                                placeholder="direct"
                                fullWidth
                                name="connection_type"
                                value={connection_type}
                                onChange={onInputChange}
                                error={!!connection_typeValid && formSubmitted}
                                helperText={formSubmitted && connection_typeValid}
                            />
                        </Grid>
                        <Grid item xs={6} sx={{ mt: 2 }}>
                            <TextField
                                label="Storage System"
                                type="text"
                                placeholder="interno"
                                fullWidth
                                name="storage_system"
                                value={storage_system}
                                onChange={onInputChange}
                                error={!!storage_systemValid && formSubmitted}
                                helperText={formSubmitted && storage_systemValid}
                            />
                        </Grid>
                        <Grid item xs={6} sx={{ mt: 2 }}>
                            <TextField
                                label="Condition"
                                type="text"
                                placeholder="nuevo"
                                fullWidth
                                name="condition"
                                value={condition}
                                onChange={onInputChange}
                                error={!!conditionValid && formSubmitted}
                                helperText={formSubmitted && conditionValid}
                            />
                        </Grid>
                        <Grid item xs={6} sx={{ mt: 2 }}>
                            <TextField
                                label="Owner"
                                type="text"
                                placeholder="RF"
                                fullWidth
                                name="owner"
                                value={owner}
                                onChange={onInputChange}
                                error={!!ownerValid && formSubmitted}
                                helperText={formSubmitted && ownerValid}
                            />
                        </Grid>
                        <Grid item xs={6} sx={{ mt: 2 }}>
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
                        <Grid item xs={6} sx={{ mt: 2 }}>
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
                        <Grid item xs={6} sx={{ mt: 2 }}>
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
                        <Grid item xs={6} sx={{ mt: 2 }}>
                            <TextField
                                label="Imax"
                                type="text"
                                placeholder="200"
                                fullWidth
                                name="i_max"
                                value={i_max}
                                onChange={onInputChange}
                                error={!!i_maxValid && formSubmitted}
                                helperText={formSubmitted && i_maxValid}
                            />
                        </Grid>
                        <Grid item xs={6} sx={{ mt: 2 }}>
                            <TextField
                                label="Ib"
                                type="text"
                                placeholder="20"
                                fullWidth
                                name="i_b"
                                value={i_b}
                                onChange={onInputChange}
                                error={!!i_bValid && formSubmitted}
                                helperText={formSubmitted && i_bValid}
                            />
                        </Grid>
                        <Grid item xs={6} sx={{ mt: 2 }}>
                            <TextField
                                label="In"
                                type="text"
                                placeholder="800"
                                fullWidth
                                name="i_n"
                                value={i_n}
                                onChange={onInputChange}
                                error={!!i_nValid && formSubmitted}
                                helperText={formSubmitted && i_nValid}
                            />
                        </Grid>
                        <Grid item xs={6} sx={{ mt: 2 }}>
                            <TextField
                                label="Seals"
                                type="text"
                                placeholder="500"
                                fullWidth
                                name="seals"
                                value={seals}
                                onChange={onInputChange}
                                error={!!sealsValid && formSubmitted}
                                helperText={formSubmitted && sealsValid}
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
